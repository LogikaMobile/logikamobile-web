import json
import os

es_path = 'messages/es.json'
en_path = 'messages/en.json'

es_data = json.load(open(es_path, 'r', encoding='utf-8'))
en_data = json.load(open(en_path, 'r', encoding='utf-8'))

es_data['Workflow'] = {
    "title_main": "System",
    "title_highlight": "Workflow",
    "intro_p1": "La mayoría de los proyectos de software a la medida fallan mucho antes de escribir la primera línea de código. No fallan por falta de talento técnico; fallan por falta de una planeación estructurada.",
    "intro_p2": "Cuando un desarrollo se basa en suposiciones, el resultado siempre es el mismo: retrasos, costos duplicados y sistemas que no resuelven el problema real del negocio.",
    "intro_p3": "En LogikaMobile eliminamos la ambigüedad desde la raíz. Nuestro método equilibra la estrategia de negocio con ingeniería de software de alta disponibilidad:",
    "step1_title": "Entendimiento",
    "step1_desc": "Escuchamos, mapeamos tus procesos actuales y eliminamos las zonas grises en las reglas de negocio antes de cotizar.",
    "step2_title": "Validación Visual y Arquitectura",
    "step2_desc": "Diseñamos diagramas de flujo, modelos de datos y pruebas de concepto para que veas cómo funcionará tu sistema antes de construirlo.",
    "step3_title": "Automatización e Infraestructura",
    "step3_desc": "El código no se sube \"a mano\". Todo nuestro desarrollo está respaldado por pruebas automatizadas y pipelines de despliegue continuo vía GitHub Actions.",
    "step4_title": "Estabilidad Post-Lanzamiento",
    "step4_desc": "No desaparecemos tras el despliegue a producción; implementamos monitoreo para garantizar que la plataforma opere las 24 horas sin fricciones.",
    "outro_p1": "Desarrollar software a la medida no tiene por qué ser un salto al vacío.",
    "outro_p2": "Lógica exacta, ejecución en constante movimiento.",
    "outro_cta": "Si estás listo para digitalizar la operación de tu empresa con un proceso de ingeniería transparente, hablemos."
}

en_data['Workflow'] = {
    "title_main": "System",
    "title_highlight": "Workflow",
    "intro_p1": "Most custom software projects fail long before the first line of code is written. They don't fail due to a lack of technical talent; they fail due to a lack of structured planning.",
    "intro_p2": "When development is based on assumptions, the result is always the same: delays, duplicated costs, and systems that don't solve the real business problem.",
    "intro_p3": "At LogikaMobile, we eliminate ambiguity from the root. Our method balances business strategy with high-availability software engineering:",
    "step1_title": "Understanding",
    "step1_desc": "We listen, map your current processes, and eliminate gray areas in business rules before quoting.",
    "step2_title": "Visual Validation & Architecture",
    "step2_desc": "We design flowcharts, data models, and proofs of concept so you can see how your system will work before we build it.",
    "step3_title": "Automation & Infrastructure",
    "step3_desc": "Code is not uploaded \"by hand\". All our development is backed by automated testing and continuous deployment pipelines via GitHub Actions.",
    "step4_title": "Post-Launch Stability",
    "step4_desc": "We don't disappear after deployment to production; we implement monitoring to ensure the platform operates 24/7 without friction.",
    "outro_p1": "Developing custom software doesn't have to be a leap of faith.",
    "outro_p2": "Exact logic, execution in constant motion.",
    "outro_cta": "If you're ready to digitize your company's operation with a transparent engineering process, let's talk."
}

with open(es_path, 'w', encoding='utf-8') as f:
    json.dump(es_data, f, ensure_ascii=False, indent=2)

with open(en_path, 'w', encoding='utf-8') as f:
    json.dump(en_data, f, ensure_ascii=False, indent=2)

print("JSON files updated.")
