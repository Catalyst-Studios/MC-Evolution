import json

#On Prism, right click instance, export, export to cf, open the zip generated, get the manisfest.json
# then raname it to mani.json and you will get a pretty form json, as the one used here 
with open('mani.json', 'r') as f:
    data = json.load(f)

pretty = json.dumps(data, indent=2, ensure_ascii=False)

with open('pretty.json', 'w', encoding='utf-8') as f:
    f.write(pretty)