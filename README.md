# Mt Bache Loma Prieta Plus Firewise Community Map Project

## Status

One of our community goals in 2025 is to create a map of our community for emergency services, highlighting:
- Water Sources
- Emergency Vehicle Turn-Arounds
- No Exit / No Turn-Around 
- Refuge Areas
- Evacuation Routes

We are just dipping our toes into this project, learning about the software tools available to create and share a GIS map with emergency services, and using this repository to test those tools.

The current workflow leverages the open source software [QGIS](https://www.qgis.org) and assessor parcel data from Santa Cruz County's [GISWeb](https://gis.santacruzcounty.us/gisweb/). Offline, we identify coordinates of relevant features on the assessor parcel map within QGIS and export to html using the qgis2web plugin. The exported files are then pushed to the main branch of this repository and automatically published to GitHub Pages. This workflow with QGIS, qgis2web, and github follows this [example](https://gispofinland.medium.com/why-you-should-use-qgis2web-plugin-github-pages-to-produce-interactive-maps-3d057069d8a1).

A demo of our community map project can be found [here](https://winkleramy.github.io/MtBacheLomaPrietaPlus/map.html)

## Background

More information about our Firewise Community can be found [here](https://winkleramy.github.io/Firewise/) 
