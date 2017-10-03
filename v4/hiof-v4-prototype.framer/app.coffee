InputModule = require "input-framer/input"
# Initialize PageComponent 
page = new PageComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false 
	scrollVertical: false
#  Set up a flow from your artboards 

artboard_homepage.parent = page.content

artboard_studier.parent = page.content
#artboard_studier.x = Screen.width


# Get content and define labels

#- define labels
nav_studies.text = "Studier"
nav_research.text = "Forskning"
nav_about.text = "Om"
nav_login.text = "Logg inn"
nav_search_label.text = "Søk"





# Artboart homepage

#InputModule = require "input"


	

#-- define states of elements


#--- Navigation state

line_top.states =
	active:
		rotation: 45
		y: 22
		animationOptions:
			time: .3
			curve: Bezier.ease
	inactive:
		rotation: 0
		y: 20
		animationOptions:
			time: .3
			curve: Bezier.ease
	
line_bottom.states =
	active:
		rotation: -45
		y: 22
		animationOptions:
			time: .3
			curve: Bezier.ease
	inactive:
		rotation: 0
		y: 28
		animationOptions:
			time: .3
			curve: Bezier.ease


navigation.states =
	active:
		y: 48
		opacity: 100
		animationOptions:
			time: .3
			curve: Bezier.ease
			delay: .2
	inactive:
		y: -1200
		opacity: 0
		animationOptions:
			time: .3
			curve: Bezier.ease
			delay: .2

more_events.states =
	active:
		rotation: 180
		animationOptions:
			time: .3
			curve: Bezier.ease
			#delay: .5
	inactive:
		rotation: 0
		animationOptions:
			time: .3
			curve: Bezier.ease

#--- Event states
events.states =
	active:
		height: 270
		animationOptions:
			time: .3
			curve: Bezier.ease
	inactive:
		height: 95
		animationOptions:
			time: .3
			curve: Bezier.ease
			delay: .1
event_1.states =
	active:
		opacity: 100
		animationOptions:
			time: .3
			curve: Bezier.ease
			delay: .1
	inactive:
		opacity: 0
		animationOptions:
			time: .2
event_3.states =
	active:
		opacity: 100
		animationOptions:
			time: .3
			curve: Bezier.ease
			delay: .2
	inactive:
		opacity: 0
		animationOptions:
			time: .1



frontpage_content.states =
	expanded_events:
		height: 233
		animationOptions:
			time: .3
	unexpanded_events:
		height: 175
		animationOptions:
			time: .3
			delay: .1


#-- Define change events

#events.on "change:height", ->
#	event_1.stateCycle()
#	event_3.stateCycle()
	
	
# Artboart studier


	

# Define interactions

burger_icon.onClick (event, layer) ->
	line_top.stateCycle()
	line_bottom.stateCycle()
	navigation.stateCycle()
	# go to studies
	nav_studies.onClick (event, layer) ->
		page.snapToPage(artboard_studier)




more_events.onClick (event, layer) ->
	more_events.stateCycle()
	events.stateCycle()
	event_1.stateCycle()
	event_3.stateCycle()
	frontpage_content.stateCycle()





scroll = ScrollComponent.wrap(page)


# Change scroll properties 
scroll.scrollHorizontal = false
scroll.speedY = 0.5
