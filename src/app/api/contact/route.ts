import { NextResponse } from "next/server";
import { Resend } from "resend";

export const maxDuration = 60; // Extend maximum execution time
export const dynamic = 'force-dynamic'; // Ensure it's not statically optimized

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("=== INICIANDO PETICIÓN DE CONTACTO (RESEND) ===");
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
      rangeText
    } = data;

    if (!contactName || !contactEmail) {
      console.warn("Faltan datos requeridos (nombre o correo).");
      return NextResponse.json(
        { error: "Nombre y correo son requeridos" },
        { status: 400 }
      );
    }

    // Usaremos el SMTP_USER original o el correo al que quieres que lleguen los leads.
    // Ojo: Resend solo te deja enviarte correos a ti mismo cuando usas el dominio gratuito onboarding@resend.dev
    const toEmail = process.env.SMTP_USER || "luisda.michel@gmail.com"; 

    console.log("Enviando correo vía Resend API...");
    
    const { data: resendData, error } = await resend.emails.send({
      from: "LogikaMobile <onboarding@resend.dev>", // Dominio de prueba gratuito de Resend
      to: [toEmail],
      replyTo: contactEmail,
      subject: `Nuevo Lead: ${contactName} - Cotización desde Landing Page`,
      text: `Hola equipo,\n\nSe ha recibido una nueva solicitud de cotización.\n\nDatos de Contacto:\nNombre: ${contactName}\nCorreo: ${contactEmail}\nTeléfono: ${contactPhone}\nPreferencia de Contacto: ${contactPreference || "No especificada"}\n\nDescripción del Proyecto:\n${projectDescription || "No proporcionada"}\n\nDetalles de la cotización calculada:\nRango de Inversión Estimado: ${rangeText}\n\nEspecificaciones:\n- Origen: ${originText}\n- Tamaño de Empresa: ${companySizeText}\n- Tipo de Proyecto: ${typesText}\n- Complejidad: ${complexityText}\n- UX/UI: ${uxuiText}\n- Integraciones: ${integrationsText}\n- Urgencia: ${urgencyText}\n\nEste es un correo autogenerado desde LogikaMobileWeb.`,
      html: `
        <h2>Nueva Solicitud de Cotización</h2>
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
        <hr/>
        <p><small>Este correo fue generado automáticamente desde la Landing Page de LogikaMobile.</small></p>
      `,
    });

    if (error) {
      console.error("=== ERROR DE RESEND ===", error);
      return NextResponse.json(
        { error: "Error de API al enviar el correo" },
        { status: 500 }
      );
    }

    console.log("Correo enviado con éxito vía Resend. ID:", resendData?.id);

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
