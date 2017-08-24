
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
	
menu.states =
	active:
		y: 48
		opacity: 100
		animationOptions:
			time: .3
			curve: Bezier.ease
			delay: .5
	inactive:
		y: -542
		opacity: 0
	



burger_icon.onClick (event, layer) ->
	line_top.stateCycle()
	line_bottom.stateCycle()
	menu.stateCycle()







scroll = ScrollComponent.wrap(frontpage_content)


# Change scroll properties 
scroll.scrollHorizontal = false
scroll.speedY = 0.5
