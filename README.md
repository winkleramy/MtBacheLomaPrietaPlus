# Mt Bache Loma Prieta Plus Firewise Community Map Project

Jump right in and [*explore our latest community map*](https://winkleramy.github.io/MtBacheLomaPrietaPlus/map.html)!

Interactive Embedded Community Map:
<iframe src="map.html" height="400"></iframe>

Or select a topic below:
1. [Status](#status)
2. [Workflow](#workflow)
3. [Resources](#resources)

## Status

One of our community goals in 2025 is to create a map of our community for emergency services, highlighting:
- Water Sources
- Emergency Vehicle Turn-Arounds
- No Exit / No Turn-Around 
- Refuge Areas
- Evacuation Routes

We are just dipping our toes into this project, learning about the software tools available to create and share a GIS map with emergency services, and using this repository to test those tools. We are communicating with CAL FIRE on how to share this information and actively update as needed.

## Workflow 

The current workflow leverages the open source software [QGIS](https://www.qgis.org) and assessor parcel data from Santa Cruz County's [GISWeb](https://gis.santacruzcounty.us/gisweb/). Offline, we identify coordinates of relevant features on the assessor parcel map within QGIS and export to html using the qgis2web plugin. The exported files are then pushed to the main branch of this repository and automatically published to GitHub Pages. This workflow with QGIS, qgis2web, and github follows this [example](https://gispofinland.medium.com/why-you-should-use-qgis2web-plugin-github-pages-to-produce-interactive-maps-3d057069d8a1).

### Add or Edit Map Features
To edit, pull this repository or download the contents of the [src folder](src). Using QGIS 3.40 or later, open the file MtBacheLomaPrietaPlus.qgz. Right click on the CommunityBoundary layer and select 'Zoom to Layer'. 

Identify relevant map features in the appropriate vector layer. Vector layers include WaterSources, EmergencyVehicleTurnArounds, etc. To confirm the latitude/longitude of point features, select the Vertex Tool, available in the Digitizing Toolbar at the top. 

<!-- <img src="Resources/Mount Bache Neighborhood Subgroups.png" alt="Mount Bache Neighborhood Subgroups" width="800"> -->
<img src="screenshots/VertexTool.png" alt="Vertex Tool" width="800">

### Export to Web

When ready to publish, navigate to the Web menu, qgis2web, Create web map. 

<!-- <img src="Resources/Mount Bache Neighborhood Subgroups.png" alt="Mount Bache Neighborhood Subgroups" width="800"> -->
<img src="screenshots/CreateWebMap.png" alt="Create web map" width="800">


In the export window, select the following options:
- Layers and Groups: Check Visible and Popups for all Layers. In popup fields, select 'inline label - visible with data' for include labels in the popup map data.

<!-- <img src="Resources/Mount Bache Neighborhood Subgroups.png" alt="Mount Bache Neighborhood Subgroups" width="800"> -->
<img src="screenshots/LayersandGroups.png" alt="Export Settings" width="800">

- Appearance: Title 'upper left', Abstract 'lower right', Layers list 'Expanded' (creates legend at the top right)
- Select OpenLayers radio button at the bottom and then click Export

<!-- <img src="Resources/Mount Bache Neighborhood Subgroups.png" alt="Mount Bache Neighborhood Subgroups" width="800"> -->
<img src="screenshots/Appearance.png" alt="Export Settings" width="800">

- Copy data from export folder into MtBacheLomaPrietaPlus
- Change 'index.html' to 'map.html'
- Run [reduceAssessorParceljsFileSize.py](reduceAssessorParceljsFileSize.py) in order to upload AssessorParcel_1.js file without git-lfs tool (which is not compatible with GitHub Pages html viewer)
- Modify transparency of Community Boundary and Refuge Areas by navigating to [styles](styles), opening each js file, and editing
-- ol.style.Fill({color: 'rgba(166,206,227,1.0)'}) --> ol.style.Fill({color: 'rgba(166,206,227,0.5)'})
- Push to GitHub

### Share with CAL FIRE 
*coming soon*

## Resources

- [Mt Bache Loma Prieta Plus Firewise Community Page](https://winkleramy.github.io/Firewise/) 
- [GISWeb](https://gis.santacruzcounty.us/gisweb/)
- [Download QGIS](https://www.qgis.org)
- [QGIS GitHub Publishing Example](https://gispofinland.medium.com/why-you-should-use-qgis2web-plugin-github-pages-to-produce-interactive-maps-3d057069d8a1)