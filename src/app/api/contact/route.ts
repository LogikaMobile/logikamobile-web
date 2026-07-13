import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const maxDuration = 60; // Extend maximum execution time
export const dynamic = 'force-dynamic'; // Ensure it's not statically optimized

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "2525"),
  secure: false, // Se usa STARTTLS en 2525/587
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER_MAIN,
    pass: process.env.SMTP_PASS_MAIN,
  },
});

export async function POST(req: Request) {
  try {
    console.log("=== INICIANDO PETICIÓN DE CONTACTO (NODEMAILER MXROUTE) ===");
    const data = await req.json();
    console.log("Datos recibidos:", data);
    
    const {
      contactName,
      contactEmail,
      contactPhone,
      contactPreference,
      projectDescription,
      typesText,
      originText,
      companySizeText,
      complexityText,
      uxuiText,
      integrationsText,
      urgencyText,
      rangeText,
      websiteUrl,
      gclid
    } = data;

    // 1. Honeypot check
    if (websiteUrl) {
      console.log("Honeypot filled, silently dropping request.");
      return NextResponse.json({ success: true, isBot: true }, { status: 200 });
    }

    if (!contactName || !contactEmail) {
      console.warn("Faltan datos requeridos (nombre o correo).");
      return NextResponse.json(
        { error: "Nombre y correo son requeridos" },
        { status: 400 }
      );
    }

    // 2. Stronger email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(contactEmail)) {
      console.warn("Correo con formato inválido.");
      return NextResponse.json(
        { error: "Formato de correo inválido" },
        { status: 400 }
      );
    }

    // 3. Project description min-length check
    if (!projectDescription || projectDescription.trim().length < 50) {
      console.warn("Descripción del proyecto muy corta.");
      return NextResponse.json(
        { error: "La descripción del proyecto debe tener al menos 50 caracteres." },
        { status: 400 }
      );
    }

    // A quién queremos notificar (tu correo personal o el que prefieras)
    const toEmail = process.env.SMTP_USER || process.env.SMTP_USER_MAIN || "info@logikamobile.com.mx"; 

    console.log("Enviando correo vía Nodemailer (MXRoute)...");
    
    const info = await transporter.sendMail({
      from: `"LogikaMobile Web" <${process.env.SMTP_USER_MAIN}>`, 
      to: toEmail,
      replyTo: contactEmail,
      subject: `Nuevo Lead: ${contactName} - Cotización General`,
      text: `Hola equipo,\n\nSe ha recibido una nueva solicitud de cotización.\n\nDatos de Contacto:\nNombre: ${contactName}\nCorreo: ${contactEmail}\nTeléfono: ${contactPhone}\nPreferencia de Contacto: ${contactPreference || "No especificada"}\n\nDescripción del Proyecto:\n${projectDescription || "No proporcionada"}\n\nDetalles de la cotización calculada:\nRango de Inversión Estimado: ${rangeText}\n\nEspecificaciones:\n- Origen: ${originText}\n- Tamaño de Empresa: ${companySizeText}\n- Tipo de Proyecto: ${typesText}\n- Complejidad: ${complexityText}\n- UX/UI: ${uxuiText}\n- Integraciones: ${integrationsText}\n- Urgencia: ${urgencyText}\n\nTrazabilidad B2B:\n- Google Click ID (GCLID): ${gclid || "Orgánico / Directo"}\n\nEste es un correo autogenerado desde LogikaMobileWeb.`,
      html: `
        <h2>Nueva Solicitud de Cotización (General)</h2>
        <h3>Datos de Contacto:</h3>
        <ul>
          <li><strong>Nombre:</strong> ${contactName}</li>
          <li><strong>Correo:</strong> ${contactEmail}</li>
          <li><strong>Teléfono:</strong> ${contactPhone || "No proporcionado"}</li>
          <li><strong>Preferencia de Contacto:</strong> ${contactPreference || "No especificada"}</li>
        </ul>
        
        <h3>Descripción del Proyecto:</h3>
        <p style="background-color: #f3f4f6; padding: 15px; border-left: 4px solid #ea580c; color: #1f2937;">
          ${projectDescription ? projectDescription.replace(/\\n/g, '<br/>') : "<em>No proporcionada</em>"}
        </p>

        <h3>Detalles de la cotización calculada:</h3>
        <p><strong>Rango Estimado:</strong> <span style="color: #ea580c; font-size: 1.2em;">${rangeText}</span></p>
        
        <ul>
          <li><strong>Origen:</strong> ${originText}</li>
          <li><strong>Tamaño de Empresa:</strong> ${companySizeText}</li>
          <li><strong>Tipo de Proyecto:</strong> ${typesText}</li>
          <li><strong>Complejidad:</strong> ${complexityText}</li>
          <li><strong>UX/UI:</strong> ${uxuiText}</li>
          <li><strong>Integraciones:</strong> ${integrationsText}</li>
          <li><strong>Urgencia:</strong> ${urgencyText}</li>
        </ul>
        
        <h3>Trazabilidad B2B:</h3>
        <p><strong>Google Click ID (GCLID):</strong> <span style="font-family: monospace; background: #eee; padding: 2px 4px;">${gclid || "Orgánico / Directo"}</span></p>

        <hr/>
        <p><small>Este correo fue generado automáticamente desde la Landing Page de LogikaMobile.</small></p>
      `,
    });

    console.log("Correo enviado con éxito vía MXRoute. Message ID:", info.messageId);

    // 3. Send to Dashboard Webhook (if configured)
    if (process.env.HK_API_URL && process.env.HK_SECURE) {
      console.log("Enviando lead al Dashboard...");
      try {
        const webhookRes = await fetch(`${process.env.HK_API_URL}/api/webhooks/leads/traditional`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.HK_SECURE,
          },
          body: JSON.stringify(data),
        });
        
        if (!webhookRes.ok) {
          console.error("Error del Dashboard:", webhookRes.status, await webhookRes.text());
        } else {
          console.log("Lead enviado al Dashboard exitosamente.");
        }
      } catch (webhookError) {
        console.error("Error de red al conectar con el Dashboard:", webhookError);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("=== ERROR CRÍTICO AL ENVIAR CORREO ===");
    console.error(error);
    return NextResponse.json(
      { error: "Error interno al enviar el correo" },
      { status: 500 }
    );
  }
}
