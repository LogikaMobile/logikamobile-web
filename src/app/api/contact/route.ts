import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const maxDuration = 60; // Extend maximum execution time
export const dynamic = 'force-dynamic'; // Ensure it's not statically optimized

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      contactName,
      contactEmail,
      contactPhone,
      contactPreference,
      projectDescription,
      typesText,
      originText,
      complexityText,
      uxuiText,
      integrationsText,
      urgencyText,
      rangeText
    } = data;

    if (!contactName || !contactEmail) {
      return NextResponse.json(
        { error: "Nombre y correo son requeridos" },
        { status: 400 }
      );
    }

    // Configuración de Nodemailer usando variables de entorno
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true para 465, false para otros puertos (como 587)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${contactName}" <${process.env.SMTP_USER}>`, // El 'from' suele ser tu mismo correo autenticado
      replyTo: contactEmail, // Para poder responderle al lead directamente
      to: process.env.SMTP_USER, // Te envías el correo a ti mismo o al correo de la agencia
      subject: `Nuevo Lead: ${contactName} - Cotización desde Landing Page`,
      text: `Hola equipo,\n\nSe ha recibido una nueva solicitud de cotización.\n\nDatos de Contacto:\nNombre: ${contactName}\nCorreo: ${contactEmail}\nTeléfono: ${contactPhone}\nPreferencia de Contacto: ${contactPreference || "No especificada"}\n\nDescripción del Proyecto:\n${projectDescription || "No proporcionada"}\n\nDetalles de la cotización calculada:\nRango de Inversión Estimado: ${rangeText}\n\nEspecificaciones:\n- Origen: ${originText}\n- Tipo de Proyecto: ${typesText}\n- Complejidad: ${complexityText}\n- UX/UI: ${uxuiText}\n- Integraciones: ${integrationsText}\n- Urgencia: ${urgencyText}\n\nEste es un correo autogenerado desde LogikaMobileWeb.`,
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
          <li><strong>Tipo de Proyecto:</strong> ${typesText}</li>
          <li><strong>Complejidad:</strong> ${complexityText}</li>
          <li><strong>UX/UI:</strong> ${uxuiText}</li>
          <li><strong>Integraciones:</strong> ${integrationsText}</li>
          <li><strong>Urgencia:</strong> ${urgencyText}</li>
        </ul>
        <hr/>
        <p><small>Este correo fue generado automáticamente desde la Landing Page de LogikaMobile.</small></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error interno al enviar el correo" },
      { status: 500 }
    );
  }
}
