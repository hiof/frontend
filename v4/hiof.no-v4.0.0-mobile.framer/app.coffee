
# Study catalogue data
dataCourseCatalogue = JSON.parse Utils.domLoadDataSync "data/course-catalogue.json"


# Import file "hiof.no-v4.0.0-mobile" (sizes and positions are scaled 1:3)
sketch = Framer.Importer.load("imported/hiof.no-v4.0.0-mobile@1x")

{TextLayer} = require 'TextLayer'
ios = require 'ios-kit'


sketch = ios.convert(sketch)


# FUNCTIONS

slideToPage = (layer, name) ->
	pageContent.addChild(layer)
	pageTitle.html = name



# Hide open navigation elements
sketch.headerbar_open.visible = false
sketch.navbar_open.visible = false
#header = sketch.header


viewStudier = false
viewFinnStudier = false
viewAvdeling = false

#layer = new Layer
#layer.constraints = {top: 10,leading: 10}





#scroll = new ScrollComponent
#	size: Screen.size
#	scrollHorizontal: false

#scroll.contstraints =
#	top: 20








scroll = new ScrollComponent
	size: Screen.size
	scrollHorizontal: false
	z: 1
	

pageContent = new Layer
	x: 0
	y: 520
	width: 1242
	height: 6000
	backgroundColor: "#ff0"
	
pageContent.parent = scroll.content



viewHeader = sketch.headerbar
viewHeader.constraints =
	top: 20
viewHeader.parent = scroll.content

viewHeaderOpen = sketch.headerbar_open
viewHeaderOpen.constraints =
	top: 20
viewHeaderOpen.parent = scroll.content


pageTitle = new ios.Text
    name: "Page title"
    parent: scroll.content
    fontSize:24
    text: "Høgskolen i Østfold"
    fontWeight:300
    #width:320
    color: "#fff"
    trailingEdges: viewHeader
    backgroundColor: "#777"
    width: Screen.width
    height: 300
    width: 1242
    lineHeight: 75
    #align: "center"



pageTitle.constraints =
	top: [viewHeader, 0]
	#align: "center"
pageTitle.parent = scroll.content


viewBreadcrumb = sketch.navbar
viewBreadcrumb.parent = scroll.content
viewBreadcrumb.constraints.top = [pageTitle]

viewBreadcrumbOpen = sketch.navbar_open
viewBreadcrumbOpen.parent = scroll.content

viewBreadcrumbOpen.constraints.top = [pageTitle]



sketch.headerbar_menu.on Events.Click, ->
    if sketch.headerbar_open.visible
        sketch.headerbar_open.visible = false
        #sketch.headerbar_open.z = 1
        #navOpen = false
    else
        sketch.headerbar_open.visible = true
        sketch.headerbar_open.z = 1
        #navOpen = true



sketch.navbar.y = 400
sketch.navbar_open.y = 400

sketch.navbar_menu.on Events.Click, ->
    if sketch.navbar_open.visible
        sketch.navbar_open.visible = false
        #navOpen = false
    else
        sketch.navbar_open.visible = true
        sketch.navbar_open.z = 1




# SETUP VIEWS


if viewStudier
	slideToPage(sketch.studier, "Studier")
else if viewFinnStudier
	slideToPage(sketch.finn_studier, "Finn studier")
else if viewAvdeling
	slideToPage(sketch.avdeling, "Avdeleing for informasjonsteknologi")
else
	slideToPage(sketch.avdeling, "Avdeleing for informasjonsteknologi")
	#pageContent.addChild(sketch.avdeling)

# Generate courses list
## Variables
rows = 16
gutter = 10
rowHeight = 100


#scroll.contstraints =
#		top: [viewBreadcrumb, 10]



# Loop to create row layers
#for courses, i in dataCourseCatalogue["course-catalogue"]
#  cell = new ios.Text
#    parent: scroll.content
#    name: i + '-' + courses
#    #width:  Screen.width
#    #height: rowHeight
#    y: 520 + (i * (rowHeight + gutter))
#    #parent: scroll.content
#    #backgroundColor: "#fff"
#    #hueRotate: i * 10
#    fontSize: 12
#    fontWeight: 200
#    color: "#000"
#    backgroundColor: "#0f0"
#    #paddingTop: 40
#    #paddingLeft: 20
#    text: courses
#    #lineHeight: 2
#    constraints: {leading: 10}



#scroll.visible = false


statusBar = new ios.StatusBar
    carrier:"HiØ"
    network:"6G"
    battery:70
    style:"dark"
    clock24: true
    constraints: {top: 0}

scroll.sendToBack()

ios.layout.set()
