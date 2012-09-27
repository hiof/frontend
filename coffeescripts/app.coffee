###
App
###

class window.ApplicationController
  constructor: ->
    # Document setup
    @browserwidth = $(window).width()
    @eContent = $("#main")
    @ePageTreeNav = $("#page_tree_nav")
    @eSidebarA = $("#sidebar_a")
    @eSidebarB = $("#sidebar_b")
    @multiBox = $(".multibox")
    @slider = $('#slider')
    @columnContent = $("#content").height()
    @columnLeft = ($("#page_tree_nav").height() + $("#sidebar_a").height()) + 40
    @columnPageTreeNav = $("#page_tree_nav").height()
    @columnSidebarA = $("#sidebar_a").height()
    @columnSidebarB = $("#sidebar_b").height()






    # ----------------------------------------------------------------------------------------
    # Fire code
 
    @smallScreenNav()

    @multiBox.select2()
    @pjax()


    $("#logo-hiof").bind "contextmenu", (e) ->
      e.preventDefault()
      # Right Mousebutton was clicked! 
      window.location.href = "http://hiof.no/logo"  if e.which is 3

    if $(".vcard").length
      @attachVcard()
      # console.log "vcard!"

    # Check if 
    if $("#content-frontpage").length
      # console.log "frontpage!"
      @startImageSlider()

      # console.log "frontpage image slider!"
      $(".tabcontent").hide()
      $(".tabcontent:first").show()
      $(".tabs li a").click (event) ->
        event.preventDefault()
        $("ul.tabs li a").removeClass "active"
        $(this).addClass "active"
        $(".tabcontent").hide()
        activeTab = $(this).attr("rel")
        $("#" + activeTab).fadeIn()
      # console.log "frontpage tabcontent"
    else
      @equalColumnHeight()
      setInterval (=> @equalColumnHeight()), 3000
    


    # Internet explorer stuff
    if $.browser.msie
      @ieFixes()
      $("#navigation").css "zIndex", "-1"

      $("#breadcrumb").css "zIndex", "-2"
      $("#page_tree_nav").css "zIndex", ""
      $(".drop").css "zIndex", "100"
      # @equalColumnHeight()
      # setInterval (=> @equalColumnHeight()), 3000


      # if $("html").hasClass("ie7")
      #   $("#content").css "marginLeft", "230"


    # ----------------------------------------------------------------------------------------
    # Touch improvements
    if $("html").hasClass("touch")
      @stopHorizontalScroll()





    # Listeners
    $("#navigation-mobile").bind "click", (event) => @toggleNavigation()
    $("#navigation-sidebar").bind "click", (event) => @toggleSidebar()
    # $("#overlay").bind "click", (event) => @toggleNavigation()
    # $("#overlay").bind "click", (event) => @toggleSidebar()
  




  # ----------------------------------------------------------------------------------------
  # ----------------------------------------------------------------------------------------
  # ----------------------------------------------------------------------------------------
  # Functions

  attachVcard: ->
    $.waypoints.settings.scrollThrottle = 10
    $("#body").waypoint((event, direction) ->
      # console.log "vcard scroll 10px"
      $(".top").toggleClass "hidden", direction is "up"
    ,
      offset: "-100%"
    ).find(".vcard").waypoint (event, direction) ->
      $(this).parent().toggleClass "sticky", direction is "down"
      event.stopPropagation()






  ieFixes: ->

    # z-index fix
    zIndexNumber = 50

    # Put your target element(s) in the selector below!
    $("body > *").each ->
      $(this).css "zIndex", zIndexNumber
      zIndexNumber -= 10





  stopHorizontalScroll: ->
    lastScrollLeft = 0
    $(window).scroll ->
      documentScrollLeft = $(document).scrollLeft()
      unless lastScrollLeft is documentScrollLeft
        #console.log "scroll x"
        lastScrollLeft = documentScrollLeft




  startImageSlider: ->
    @slider.nivoSlider
      effect: "fade"
      # slices: 15
      # boxCols: 8
      # boxRows: 4
      animSpeed: 500
      pauseTime: 8000
      startSlide: 0
      directionNav: true
      directionNavHide: true
      controlNav: false
      controlNavThumbs: false
      pauseOnHover: true
      manualAdvance: false
      prevText: "Previous"
      nextText: "Next"
      randomStart: false
      # beforeChange: ->

      # afterChange: ->

      # slideshowEnd: ->

      # lastSlide: ->

      # afterLoad: ->





  smallScreenNav: ->
    if @browserwidth < 600
      @mobileAddMenu()
      @mobileAddSidebar()

      @eSidebarA.css "top", @columnPageTreeNav
      @eSidebarB.css "top", @columnLeft

    else if @browserwidth > 600
      $(".mobilenav").remove()


  
  equalColumnHeight: ->
    # console.log "equal height"
    colLeft = 0
    #if (@browserwidth > 1024) or $.browser.msie
    if @browserwidth > 1024
      colLeft = (@columnPageTreeNav + @columnSidebarA)
      colHeight = Math.max(colLeft, @columnPageTreeNav, @columnContent, @columnSidebarA, @columnSidebarB)
      $("#content, #sidebar_b").height colHeight
    else
      # colHeight = Math.max(@columnPageTreeNav, @columnContent, @columnSidebarA, @columnSidebarB)
      # $("#content, #sidebar_a, #sidebar_b").height colHeight
    #$("#sidebar_a").top (@columnPageTreeNav + 20)
    #console.log @columnPageTreeNav
    # $("#sidebar_a").css "top", (@columnPageTreeNav + 190)







  pjax: ->
    $('#page_tree_nav a').pjax('#content')


  highresExcist: ->
    $.ajax
      url: "http://www.example.com/somefile.ext"
      type: "HEAD"
      error: ->
        hello = "something"

      success: ->
        hello = "something-else"


  isDevice: ->
    isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone")
    isiPad = navigator.userAgent.toLowerCase().indexOf("ipad")
    isiPod = navigator.userAgent.toLowerCase().indexOf("ipod")
    isAndroid = navigator.userAgent.toLowerCase().indexOf("android")
    if isiPhone > -1
      #console.log "iPhone"
      @mobileAddMenu()
      @mobileAddSidebar()
      @hideAddressBar()
      @addNoice()
    if isiPod > -1
      #console.log "iPod"
      @mobileAddMenu()
      @mobileAddSidebar()
      @hideAddressBar()
      @addNoice()
    # Tablet
    if isiPad > -1
      #console.log "iPad"
      @mobileAddMenu()
      @addNoice()
    if isAndroid > -1
      if @browserwidth > 480
        @mobileAddMenu()
      else
        @mobileAddMenu()
        @mobileAddSidebar()


  # Create 
  mobileAddMenu: ->
    if $("#navigation-mobile").length is 0
      $("#header").prepend "<div id=\"navigation-mobile\" class=\"ss-icon\">list</div>"
    else
  mobileAddSidebar: ->
    if $("#navigation-sidebar").length is 0
      $("#header").append "<div id=\"navigation-sidebar\" class=\"ss-icon\">layout</div>"
    else


  # Toggle elemetns


  toggleNavigation: ->
    $("#body").toggleClass("activateNavigation")
    if($("#body").hasClass("activateNavigation"))
      $("#body").animate
        left: 250
      , "slow", ->
        $("#navigation-mobile").html "Close"
      #$("#body").append "<div id=\"overlay\"></div>"
    else
      $("#body").animate
        left: 0
      , "slow", ->
        $("#navigation-mobile").html "list"
      #$("#body").remove "#overlay"
  toggleSidebar: ->
    $("#body").toggleClass("activateSidebar")
    if($("#body").hasClass("activateSidebar"))
      cssValues =
        "display": "block"
        "right": "-250px"

      #$(this).css cssObj
      $("#page_tree_nav, #sidebar_a, #sidebar_b").css cssValues
      $("#body").animate
        left: -250
      , "slow", ->
        $("#navigation-sidebar").html "Close"
      #$("#body").append "<div id=\"overlay\"></div>"
    else

      cssValues =
        "display": "none"
        "right": "0px"

      $("#body").animate
        left: 0
      , "slow", ->
        $("#navigation-sidebar").html "layout"
        $("#page_tree_nav, #sidebar_a, #sidebar_b").css cssValues
      #$("#body").remove "#overlay"

  

  # Add noice
  addNoice: ->
    $("#header").noisy
      opacity: .1
      monochromatic: true


  #Hide Address bar om mobile Safari
  hideAddressBar: ->
    unless window.location.hash
      if document.height <= window.outerHeight + 10
        document.body.style.height = (window.outerHeight + 50) + "px"
        setTimeout (->
          window.scrollTo 0, 1
        ), 50
      else
        setTimeout (->
          window.scrollTo 0, 1
        ), 0