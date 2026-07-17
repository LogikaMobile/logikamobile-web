import json

es_path = 'messages/es.json'
en_path = 'messages/en.json'

es_data = json.load(open(es_path, 'r', encoding='utf-8'))
en_data = json.load(open(en_path, 'r', encoding='utf-8'))

# Spanish
es_data['Workflow']['step1_title'] = "1. Discovery y Entendimiento"
es_data['Workflow']['step1_desc'] = "Escuchamos, mapeamos tus procesos actuales y eliminamos las zonas grises. Sin esta fase de Discovery, no hay estimaciones al aire ni firmas a ciegas."
es_data['Workflow']['step2_title'] = "2. Arquitectura y Contrato"
es_data['Workflow']['step2_desc'] = "Diseñamos diagramas de flujo y modelos de datos. Solo cuando tienes visibilidad total de cómo funcionará el sistema, firmamos un contrato con alcance cerrado y costos exactos. Sin contrato, no hay desarrollo."
es_data['Workflow']['step3_title'] = "3. Desarrollo y Automatización"
es_data['Workflow']['step3_desc'] = "Con el contrato firmado, arranca el código. Todo nuestro desarrollo está respaldado por pruebas automatizadas y pipelines de despliegue continuo vía GitHub Actions."

# English
en_data['Workflow']['step1_title'] = "1. Discovery & Understanding"
en_data['Workflow']['step1_desc'] = "We listen, map your current processes, and eliminate gray areas. Without this Discovery phase, there are no wild guesses or blind signatures."
en_data['Workflow']['step2_title'] = "2. Architecture & Contract"
en_data['Workflow']['step2_desc'] = "We design flowcharts and data models. Only when you have total visibility of how the system will work, we sign a contract with a closed scope and exact costs. No contract, no development."
en_data['Workflow']['step3_title'] = "3. Development & Automation"
en_data['Workflow']['step3_desc'] = "With the contract signed, coding begins. All our development is backed by automated testing and continuous deployment pipelines via GitHub Actions."


with open(es_path, 'w', encoding='utf-8') as f:
    json.dump(es_data, f, ensure_ascii=False, indent=2)

with open(en_path, 'w', encoding='utf-8') as f:
    json.dump(en_data, f, ensure_ascii=False, indent=2)

print("JSON files updated for commercial angle.")
