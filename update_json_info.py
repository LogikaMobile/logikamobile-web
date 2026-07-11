import json

es_updates = {
  "InformationSent": {
    "title": "¡Información Recibida!",
    "message": "Hemos recibido tus datos de contacto correctamente. Nuestro equipo revisará tu solicitud y se comunicará contigo a la brevedad.",
    "custom_quote": "Estimación de Inversión Inicial",
    "custom_disclaimer": "* Esta es una cotización preliminar sujeta a análisis detallado de requerimientos.",
    "lmaas_quote": "Suscripción LMaaS (Calculada)",
    "year": "año",
    "month": "mes",
    "back": "Volver al Inicio",
    "loading": "Procesando información..."
  }
}

en_updates = {
  "InformationSent": {
    "title": "Information Received!",
    "message": "We have successfully received your contact information. Our team will review your request and get back to you shortly.",
    "custom_quote": "Initial Investment Estimate",
    "custom_disclaimer": "* This is a preliminary quote subject to detailed requirements analysis.",
    "lmaas_quote": "LMaaS Subscription (Calculated)",
    "year": "year",
    "month": "month",
    "back": "Back to Home",
    "loading": "Processing information..."
  }
}

def update_file(filepath, updates):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    data.update(updates)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_file('messages/es.json', es_updates)
update_file('messages/en.json', en_updates)
print("Updated JSON files for InformationSent")
