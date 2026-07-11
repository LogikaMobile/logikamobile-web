import json
import sys

es_updates = {
  "LmaasMetadata": {
    "title": "LMaaS - LogikaMobile as a Service",
    "description": "Contrata a un equipo élite de ingeniería de software bajo demanda por una tarifa plana. Elimina la fricción de contratación y acelera el desarrollo de tu producto con LMaaS."
  },
  "Lmaas": {
    "back": "Volver a LogikaMobile",
    "presents": "presenta:",
    "subtitle": "Tu departamento de ingeniería bajo demanda",
    "desc_1": "Escala tu negocio con un equipo de tecnología a tu disposición por una tarifa plana mensual o anual.",
    "desc_2": "Sin procesos lentos de contratación, sin costos ocultos. Tú decides el ritmo, nosotros escribimos el código.",
    "eco_title": "Nuestro Ecosistema",
    "eco_subtitle": "de Servicios",
    "consult_plan": "Plan Base",
    "consult_title": "Consultoría de Ingeniería",
    "consult_desc": "Auditoría de código, diseño de arquitectura de software y decisiones técnicas estratégicas para que tu producto escale sobre bases sólidas.",
    "infra_plan": "Add-on",
    "infra_title": "Infraestructura y Soporte",
    "infra_desc": "Mantenimiento, monitoreo y soporte técnico bajo SLAs estrictos. Si no tienes infraestructura, la construimos desde cero.",
    "core_tag": "EL CORE",
    "core_title": "Desarrollo Continuo",
    "core_desc": "Construimos tus herramientas y soluciones a la medida mediante un sistema ágil de tickets.",
    "core_point_1": "Añade solicitudes a tu backlog.",
    "core_point_2": "Trabajamos un ticket a la vez para garantizar foco, calidad y velocidad.",
    "core_point_3": "Iteraciones claras y entregas predecibles.",
    "pipeline": "Pipeline de Trabajo",
    "step_req": "Solicitud",
    "step_dev": "Desarrollo",
    "step_qa": "QA",
    "step_del": "Entrega",
    "step_cool": "Cooldown",
    "cta": "Inicia tu Suscripción"
  }
}

en_updates = {
  "LmaasMetadata": {
    "title": "LMaaS - LogikaMobile as a Service",
    "description": "Hire an elite software engineering team on demand for a flat fee. Eliminate hiring friction and accelerate your product development with LMaaS."
  },
  "Lmaas": {
    "back": "Back to LogikaMobile",
    "presents": "presents:",
    "subtitle": "Your engineering department on demand",
    "desc_1": "Scale your business with a technology team at your disposal for a flat monthly or annual fee.",
    "desc_2": "No slow hiring processes, no hidden costs. You decide the pace, we write the code.",
    "eco_title": "Our Ecosystem",
    "eco_subtitle": "of Services",
    "consult_plan": "Base Plan",
    "consult_title": "Engineering Consulting",
    "consult_desc": "Code auditing, software architecture design and strategic technical decisions so your product scales on solid foundations.",
    "infra_plan": "Add-on",
    "infra_title": "Infrastructure and Support",
    "infra_desc": "Maintenance, monitoring and technical support under strict SLAs. If you don't have infrastructure, we build it from scratch.",
    "core_tag": "THE CORE",
    "core_title": "Continuous Development",
    "core_desc": "We build your custom tools and solutions through an agile ticketing system.",
    "core_point_1": "Add requests to your backlog.",
    "core_point_2": "We work one ticket at a time to guarantee focus, quality, and speed.",
    "core_point_3": "Clear iterations and predictable deliveries.",
    "pipeline": "Workflow Pipeline",
    "step_req": "Request",
    "step_dev": "Development",
    "step_qa": "QA",
    "step_del": "Delivery",
    "step_cool": "Cooldown",
    "cta": "Start your Subscription"
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
print("Updated JSON files")
