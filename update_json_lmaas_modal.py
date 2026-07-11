import json

es_updates = {
  "LmaasQuoteModal": {
    "trigger_btn": "Cotiza LMaaS",
    "step_x_of_3": "Paso {step} de 3",
    "step1_title": "¿Cuál es el tamaño de tu empresa?",
    "step1_desc": "Esto nos ayuda a dimensionar el equipo y los procesos (SLAs) que necesitas.",
    "step1_startup": "Startup",
    "step1_startup_desc": "1 - 15 empleados",
    "step1_pyme": "PyME",
    "step1_pyme_desc": "16 - 50 empleados",
    "step1_corp": "Corporativo",
    "step1_corp_desc": "51+ empleados",
    "step2_title": "Infraestructura y Soporte",
    "step2_desc": "¿Necesitas que nosotros administremos tus servidores, bases de datos y monitoreo (DevOps)?",
    "step2_yes": "Sí, inclúyanlo",
    "step2_yes_desc": "Gestionen nuestra infraestructura de inicio a fin.",
    "step2_no": "No por ahora",
    "step2_no_desc": "Nosotros nos encargamos del alojamiento y soporte.",
    "step3_title": "Plan de Pago",
    "step3_desc": "El pago anual te otorga un 15% de descuento directo.",
    "step3_monthly": "Mensual",
    "step3_monthly_desc": "Flexibilidad total. Cancela cuando quieras.",
    "step3_annual": "Anual",
    "step3_annual_desc": "Compromiso a largo plazo, mejor precio garantizado.",
    "step3_save": "Ahorra 15%",
    "contact_title": "Revelar Cotización",
    "contact_desc": "Ingresa tus datos para ver el cálculo exacto de tu suscripción LMaaS al instante y enviarte una copia.",
    "form_name": "Nombre o Empresa *",
    "form_name_ph": "Ej. Acme Corp",
    "form_email": "Correo Electrónico *",
    "form_email_ph": "hola@empresa.com",
    "form_email_err": "Por favor ingresa un correo válido.",
    "form_phone": "Teléfono (Opcional)",
    "form_phone_ph": "+52 55 1234 5678",
    "btn_generating": "Generando...",
    "btn_submit": "Ver mi cotización",
    "err_send": "Ocurrió un error al enviar tu información. Por favor intenta de nuevo.",
    "err_conn": "Error de red. Intenta nuevamente.",
    "result_title": "Cotización Generada",
    "result_desc": "Hemos enviado un desglose a tu correo. Aquí tienes un estimado para la configuración seleccionada:",
    "result_cost": "Costo Total Estimado",
    "result_currency": "USD",
    "result_annual": "Por año (facturado anualmente con 15% OFF)",
    "result_monthly": "Por mes",
    "btn_close": "Cerrar"
  }
}

en_updates = {
  "LmaasQuoteModal": {
    "trigger_btn": "Quote LMaaS",
    "step_x_of_3": "Step {step} of 3",
    "step1_title": "What is the size of your company?",
    "step1_desc": "This helps us size the team and processes (SLAs) you need.",
    "step1_startup": "Startup",
    "step1_startup_desc": "1 - 15 employees",
    "step1_pyme": "SME",
    "step1_pyme_desc": "16 - 50 employees",
    "step1_corp": "Enterprise",
    "step1_corp_desc": "51+ employees",
    "step2_title": "Infrastructure & Support",
    "step2_desc": "Do you need us to manage your servers, databases, and monitoring (DevOps)?",
    "step2_yes": "Yes, include it",
    "step2_yes_desc": "Manage our infrastructure end-to-end.",
    "step2_no": "Not right now",
    "step2_no_desc": "We will handle hosting and support.",
    "step3_title": "Payment Plan",
    "step3_desc": "Annual payment gives you a direct 15% discount.",
    "step3_monthly": "Monthly",
    "step3_monthly_desc": "Total flexibility. Cancel anytime.",
    "step3_annual": "Annual",
    "step3_annual_desc": "Long-term commitment, best price guaranteed.",
    "step3_save": "Save 15%",
    "contact_title": "Reveal Quote",
    "contact_desc": "Enter your details to see the exact calculation of your LMaaS subscription instantly and receive a copy.",
    "form_name": "Name or Company *",
    "form_name_ph": "E.g. Acme Corp",
    "form_email": "Email *",
    "form_email_ph": "hello@company.com",
    "form_email_err": "Please enter a valid email.",
    "form_phone": "Phone (Optional)",
    "form_phone_ph": "+1 555 123 4567",
    "btn_generating": "Generating...",
    "btn_submit": "View my quote",
    "err_send": "An error occurred while sending your information. Please try again.",
    "err_conn": "Network error. Please try again.",
    "result_title": "Quote Generated",
    "result_desc": "We have sent a breakdown to your email. Here is an estimate for the selected configuration:",
    "result_cost": "Total Estimated Cost",
    "result_currency": "USD",
    "result_annual": "Per year (billed annually with 15% OFF)",
    "result_monthly": "Per month",
    "btn_close": "Close"
  }
}

import json

def update_file(filepath, updates):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    data.update(updates)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_file('messages/es.json', es_updates)
update_file('messages/en.json', en_updates)
print("Updated JSON files for LmaasQuoteModal")
