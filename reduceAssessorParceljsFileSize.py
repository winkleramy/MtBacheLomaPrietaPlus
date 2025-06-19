import json
import os
import shutil

def removekey(d, key):
    r = dict(d)
    del r[key]
    return r

# Create deleteme directory. Remember to delete after confirming desired changes.
if not os.path.exists ('deleteme'):
    os.makedirs('deleteme')

# Reduce size of AssessorParcels file for upload to GitHub without requiring Large File Size tool
with open('layers/AssessorParcels_1.js') as dataFile:
    data = dataFile.read()
    obj = data[data.find('{') : data.rfind('}')+1]
    jsonObj = json.loads(obj)

shutil.move('layers/AssessorParcels_1.js', 'deleteme')

jsonObj['features'] = [feature for feature in jsonObj['features'] if 'MT BACHE' in feature['properties']['SITEADD'] 
 or 'HIGHLAND' in feature['properties']['SITEADD']
  or 'LOMA PRIETA WAY' in feature['properties']['SITEADD'] 
  or 'LOMA PRIETA AVE' in feature['properties']['SITEADD'] 
  or 'HAVEN HILL' in feature['properties']['SITEADD'] 
  or 'MAR VISTA' in feature['properties']['SITEADD'] or 'RANCHO PRIETA' in feature['properties']['SITEADD']
  or 'CANYON VISTA' in feature['properties']['SITEADD'] or 'LAGUNA CREEK' in feature['properties']['SITEADD']
  or 'SPANISH RANCH' in feature['properties']['SITEADD'] or 'RADONICH' in feature['properties']['SITEADD']
  or 'APPLE HILL' in feature['properties']['SITEADD'] or 'FIRHAVEN' in feature['properties']['SITEADD']
  or 'HILLSIDE' in feature['properties']['SITEADD'] or 'ADAMS' in feature['properties']['SITEADD'] or 'SNYDER' in feature['properties']['SITEADD']]

""" file_path = 'layers/AssessorParcels_1.json'
with open(file_path, "w") as f:
    json.dump(jsonObj, f) """

# offsetX = -0.0006
# offsetY = 0.0002

# featureCount = 0
# for feature in jsonObj['features']:
#     coordinateCount = 0
#     for coordinate in feature['geometry']['coordinates'][0][0]:
#         coordinate[0] = coordinate[0]+offsetX
#         coordinate[1] = coordinate[1]+offsetY
#         feature['geometry']['coordinates'][0][0][coordinateCount] = coordinate
#         coordinateCount = coordinateCount+1
#     jsonObj['features'][featureCount] = feature
#     featureCount = featureCount+1

file_path = 'layers/AssessorParcels_1.js'
with open(file_path, "w") as f:
    f.write("var json_AssessorParcels_1 = " + str(jsonObj))
