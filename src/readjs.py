import json

def removekey(d, key):
    r = dict(d)
    del r[key]
    return r

with open('layers/AssessorParcels_1.js') as dataFile:
    data = dataFile.read()
    obj = data[data.find('{') : data.rfind('}')+1]
    jsonObj = json.loads(obj)

jsonObj['features'] = [feature for feature in jsonObj['features'] if 'MT BACHE' in feature['properties']['SITEADD'] 
 or 'HIGHLAND' in feature['properties']['SITEADD']
  or 'LOMA PRIETA WAY' in feature['properties']['SITEADD'] 
  or 'LOMA PRIETA AVE' in feature['properties']['SITEADD'] 
  or 'HAVEN HILL' in feature['properties']['SITEADD'] 
  or 'MAR VISTA' in feature['properties']['SITEADD'] or 'RANCHO PRIETA' in feature['properties']['SITEADD']]

file_path = 'layers/AssessorParcels_1_filtered.json'
with open(file_path, "w") as f:
    json.dump(jsonObj, f)

file_path = 'layers/AssessorParcels_1_filtered.js'
with open(file_path, "w") as f:
    f.write("var json_AssessorParcels_1 = " + str(jsonObj))

