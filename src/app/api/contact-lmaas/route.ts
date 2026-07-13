import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const maxDuration = 60; // Extend maximum execution time
export const dynamic = 'force-dynamic'; // Ensure it's not statically optimized

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "2525"),
  secure: false, // STARTTLS
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER_LMAAS,
    pass: process.env.SMTP_PASS_LMAAS,
  },
});

export async function POST(req: Request) {
  try {
    console.log("=== INICIANDO PETICIÓN DE CONTACTO LMAAS (NODEMAILER MXROUTE) ===");
    const data = await req.json();
    console.log("Datos recibidos (LMaaS):", data);
    
    const {
      contactName,
      contactEmail,
      contactPhone,
      contactPreference,
      companySizeText,
      infraAddon,
      billingCycle,
      finalPrice,
      websiteUrl,
      gclid
    } = data;

    // 1. Honeypot check
    if (websiteUrl) {
      console.log("Honeypot filled in LMaaS, silently dropping request.");
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

    const toEmail = process.env.SMTP_USER || process.env.SMTP_USER_MAIN || "info@logikamobile.com.mx"; 

    console.log("Enviando correo vía Nodemailer (MXRoute) para LMaaS...");
    
    const info = await transporter.sendMail({
      from: `"LMaaS by LogikaMobile" <${process.env.SMTP_USER_LMAAS}>`, 
      to: toEmail,
      replyTo: contactEmail,
      subject: `🔥 Nuevo Lead LMaaS: ${contactName}`,
      text: `Hola equipo,\n\nSe ha recibido una nueva solicitud de suscripción para LMaaS.\n\nDatos de Contacto:\nNombre: ${contactName}\nCorreo: ${contactEmail}\nTeléfono: ${contactPhone || 'No proporcionado'}\nPreferencia: ${contactPreference || 'No especificada'}\n\nDetalles de la Suscripción:\n- Tamaño de Empresa: ${companySizeText}\n- Infraestructura y Soporte: ${infraAddon ? 'Sí' : 'No'}\n- Ciclo de Facturación: ${billingCycle}\n- Costo Calculado: $${finalPrice} USD / ${billingCycle === 'ANNUAL' ? 'año (con descuento del 15%)' : 'mes'}\n\nTrazabilidad B2B:\n- Google Click ID (GCLID): ${gclid || "Orgánico / Directo"}\n\nEste es un correo autogenerado desde la Landing Page de LMaaS.`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #7B2CBF;">🔥 Nueva Solicitud de Suscripción LMaaS</h2>
          <h3>Datos del Prospecto:</h3>
          <ul>
            <li><strong>Nombre:</strong> ${contactName}</li>
            <li><strong>Correo:</strong> ${contactEmail}</li>
            <li><strong>Teléfono:</strong> ${contactPhone || "No proporcionado"}</li>
            <li><strong>Preferencia:</strong> ${contactPreference || "No especificada"}</li>
          </ul>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-left: 4px solid #7B2CBF; margin-top: 20px;">
            <h3 style="margin-top: 0;">Detalles de la Suscripción Calculada:</h3>
            <ul>
              <li><strong>Tamaño de Empresa:</strong> ${companySizeText}</li>
              <li><strong>Add-on de Infraestructura:</strong> ${infraAddon ? 'Activado ✅' : 'No ❌'}</li>
              <li><strong>Ciclo de Facturación:</strong> ${billingCycle === 'ANNUAL' ? 'Anual' : 'Mensual'}</li>
            </ul>
            <h2 style="color: #ea580c; margin-bottom: 0;">Costo Calculado: $${finalPrice} USD <span style="font-size: 0.6em; color: #666;">/${billingCycle === 'ANNUAL' ? 'año' : 'mes'}</span></h2>
            ${billingCycle === 'ANNUAL' ? '<p style="color: #10b981; margin-top: 5px;">* Incluye descuento anual del 15%</p>' : ''}
          </div>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-left: 4px solid #10b981; margin-top: 20px;">
            <h3 style="margin-top: 0;">Trazabilidad B2B:</h3>
            <p style="margin-bottom: 0;"><strong>Google Click ID (GCLID):</strong> <span style="font-family: monospace; background: #eee; padding: 2px 4px;">${gclid || "Orgánico / Directo"}</span></p>
          </div>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ccc;" />
          <p><small>Este correo fue generado automáticamente desde LogikaMobileWeb (LMaaS).</small></p>
        </div>
      `,
    });

    console.log("Correo enviado con éxito vía MXRoute. Message ID:", info.messageId);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("=== ERROR CRÍTICO AL ENVIAR CORREO LMAAS ===");
    console.error(error);
    return NextResponse.json(
      { error: "Error interno al enviar el correo" },
      { status: 500 }
    );
  }
}
