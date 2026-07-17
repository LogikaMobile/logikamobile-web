import json

es_path = 'messages/es.json'
en_path = 'messages/en.json'

es_data = json.load(open(es_path, 'r', encoding='utf-8'))
en_data = json.load(open(en_path, 'r', encoding='utf-8'))

es_data['Workflow']['commercial_milestone'] = "Hito Comercial: Firma de Contrato"
en_data['Workflow']['commercial_milestone'] = "Commercial Milestone: Contract Sign"


with open(es_path, 'w', encoding='utf-8') as f:
    json.dump(es_data, f, ensure_ascii=False, indent=2)

with open(en_path, 'w', encoding='utf-8') as f:
    json.dump(en_data, f, ensure_ascii=False, indent=2)

print("Milestone translation added.")
