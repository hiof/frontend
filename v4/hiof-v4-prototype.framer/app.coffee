# Imports
InputModule = require "input-framer/input"
ajax = require "ajax"

# viewport sizing

sizing =
    viewTopPadding: 30
    mobile:
        viewSidePadding: 20
        itemMargin: 16
        itemSize: 250
    tablet:
        viewSidePadding: 40
        itemMargin: 64
        itemSize: 400
    desktop:
        viewSidePadding: 40
        itemMargin: 64
        itemSize: 400
		
thisArticle1Id = null
thisArticle2Id = null
thisArticle3Id = null

# AJAX data

ajax.get("https://www.hiof.no/api/v1/articles/?id=&url=%2F%2Fwww.hiof.no%2Fapi%2Fv1%2Farticles%2F&template=posts-index&pageId=&page=1&pageSize=10&authorId=&category=3%2C11&destination=.outlet&articleLoClass=lo-half&addType=&destinationAddress=&destinationView=standard", (response) -> setupArticles(response))


setupArticles = (data) ->
	article_1_promoted_title.text = data.posts[0].articleTitle
	article_1_promoted_intro.text = data.posts[0].articleIntro
	article_1_promoted_image.image = "//www.hiof.no/neted/services/file/?hash=" + data.posts[0].articleImage
	thisArticle1Id = data.posts[0].id
	article_2_title.text = data.posts[1].articleTitle
	article_2_intro.text = data.posts[1].articleIntro
	article_2_image.image = "//www.hiof.no/neted/services/file/?hash=" + data.posts[1].articleImage
	thisArticle2Id = data.posts[1].id
	article_3_title.text = data.posts[2].articleTitle
	article_3_intro.text = data.posts[2].articleIntro
	article_3_image.image = "//www.hiof.no/neted/services/file/?hash=" + data.posts[2].articleImage
	thisArticle3Id = data.posts[2].id



# Initialize PageComponent 
page = new PageComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false 
	#scrollVertical: false


#pages = []
page.addPage(artboard_homepage)
page.addPage(artboard_studier)

#pages.push(page)

#artboard_studier.x = Screen.width


# Get content and define labels

#- define labels
nav_studies.text = "Studier"
nav_research.text = "Forskning"
nav_about.text = "Om"
nav_login.text = "Logg inn"
nav_search_label.text = "Søk"
go_to_events.text = "Se fler arrangementer >"





# Artboart homepage

studies_search = new InputModule.Input
  setup: false # Change to true when positioning the input so you can see it
  y: -8
  x: -10
  width: 140
  height: 16
  parent: search_input
  fontFamily: "Source Sans Pro" #-apple-system
  fontWeight: 100
  fontSize: 16
  lineHeight: 1
  goButton: true

navigation_search = new InputModule.Input
  setup: false # Change to true when positioning the input so you can see it
  y: 0
  x: 45
  width: 140
  height: 30
  parent: nav_search_form
  fontFamily: "Source Sans Pro" #-apple-system
  fontWeight: 100
  fontSize: 40
  lineHeight: 1
  goButton: true

	

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
		height: 300
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
			time: .3
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
			time: .2

go_to_events.states =
	active:
		opacity: 100
		animationOptions:
			time: .3
			curve: Bezier.ease
			delay: .3
	inactive:
		opacity: 0
		animationOptions:
			time: .1


frontpage_content.states =
	expanded_events:
		height: 243
		animationOptions:
			time: .3
	unexpanded_events:
		height: 175
		animationOptions:
			time: .3
			delay: .1


searc_input_placeholder.states =
	active:
		opacity: 100
		animationOptions:
			time: .1
			curve: Bezier.ease
	inactive:
		opacity: 0
		animationOptions:
			time: .1
			curve: Bezier.ease


#-- Define change events

studies_search.onFocus ->
	searc_input_placeholder.stateCycle()

#events.on "change:height", ->
#	event_1.stateCycle()
#	event_3.stateCycle()
	
	

# Display pages
displayCourses = ->
	go_to_events.stateCycle()
#displayArticle(id) = ->
#displayPage(id) = ->



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
	go_to_events.stateCycle()


search_button.onClick (event, layer) ->
	goToCourses()






scroll = ScrollComponent.wrap(page)


# Change scroll properties 
scroll.scrollHorizontal = false
scroll.speedY = 0.5
