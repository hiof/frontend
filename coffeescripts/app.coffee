###
App
###

class window.ApplicationController
  constructor: ->
    # Document setup
    @browserwidth = $(window).width()
    @eContent = $("#content")
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
    # @pjax()
    @moveSidebarAOnTReeColumn()

    @logoRedirect()


    # if

    if $(".vcard").length
      @attachVcard()

    # Check if 
    if $("#content-frontpage").length
      @startImageSlider()
      @enableTabContent()
    else
      @moveSidebarAOnTReeColumn()
      setInterval (=> @moveSidebarAOnTReeColumn()), 3000
    


    # Internet explorer stuff
    if $.browser.msie
      @ieFixes()
      $("#navigation").css "zIndex", "-1"
      $("#breadcrumb").css "zIndex", "-2"
      $("#page_tree_nav").css "zIndex", ""
      $(".drop").css "zIndex", "100"


    # ----------------------------------------------------------------------------------------
    # Touch improvements
    if $("html").hasClass("touch")
      @stopHorizontalScroll()





    # Listeners
    $("#navigation-mobile").bind "click", (event) => @toggleNavigation()
    $("#navigation-sidebar").bind "click", (event) => @toggleSidebar()
    # $("#overlay").bind "click", (event) => @toggleNavigation()
    # $("#overlay").bind "click", (event) => @toggleSidebar()
    # $("#page_tree_nav a").bind "click", (event) => @pjax()

    # $("#page_tree_nav a").bind "click", (e) => @fadeContent()

    @fadeContent()
  # ----------------------------------------------------------------------------------------
  # ----------------------------------------------------------------------------------------
  # ----------------------------------------------------------------------------------------
  # Functions

  fadeContent:  ->
    $("body").css "display", "none"
    $("body").fadeIn 1000
    $("#page_tree_nav a").click (e) ->
      event.preventDefault()
      linkLocation = @href
      # console.log @linkLocation
      $("body").fadeOut 500
      redirectPage(linkLocation)
      # $("body").fadeOut 100, redirectPage(linkLocation)
    redirectPage = (e) ->
      console.log e
      window.location.href = e



  logoRedirect: ->
    $("#logo-hiof").bind "contextmenu", (e) ->
      e.preventDefault()
      window.location.href = "http://hiof.no/logo"  if e.which is 3

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
    # z-index fix for older IE
    zIndexNumber = 50
    $("body > *").each ->
      $(this).css "zIndex", zIndexNumber
      zIndexNumber -= 10


  stopHorizontalScroll: ->
    lastScrollLeft = 0
    $(window).scroll ->
      documentScrollLeft = $(document).scrollLeft()
      unless lastScrollLeft is documentScrollLeft
        lastScrollLeft = documentScrollLeft


  startImageSlider: ->
    $("#news-promoted").bjqs
      height: 305
      width: 540
      animspeed: 5000
      responsive: true
      showmarkers: false
      prevtext : 'previous'
      # nexttext : 'right'

  enableTabContent: ->
    $(".tabcontent").hide()
    $(".tabcontent:first").show()
    $(".tabs li a").click (event) ->
      event.preventDefault()
      $("ul.tabs li a").removeClass "active"
      $(this).addClass "active"
      $(".tabcontent").hide()
      activeTab = $(this).attr("rel")
      $("#" + activeTab).fadeIn()    


  smallScreenNav: ->
    if @browserwidth < 600
      @mobileAddMenu()
      @mobileAddSidebar()

      @eSidebarA.css "top", @columnPageTreeNav
      @eSidebarB.css "top", @columnLeft

    else if @browserwidth > 600
      $(".mobilenav").remove()

  moveSidebarAOnTReeColumn: ->
    if (@browserwidth > 1024)
      $("#sidebar_a").css "marginTop", (@columnPageTreeNav)
  
  equalColumnHeight: ->
    # console.log "equal height"
    # colLeft = 0
    if (@browserwidth > 1024)
      $("#sidebar_a").css "top", (@columnPageTreeNav + 190)
      if (@columnLeft > @columnContent)
        $("#content").height @columnLeft



  pjax: ->
    $("html").bind("start.pjax", ->
      $("html").hide 0
    ).bind "end.pjax", ->
      $("html").fadeIn 1000


    # $("#page_tree_nav a").bind "click", (e) ->
    #   console.log "link clicked"
    #   e.preventDefault()

    #   $(this).pjax('#content')
        # $("#content").bind("start.pjax", ->
        #   $("#content").fadeOut 1000
        # ).bind "end.pjax", ->
        #   $("#content").fadeIn 1000

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
      $("#header").prepend "<div id=\"navigation-mobile\" class=\"ss-icon ss-standard\">list</div>"
    else
  mobileAddSidebar: ->
    if $("#navigation-sidebar").length is 0
      $("#header").append "<div id=\"navigation-sidebar\" class=\"ss-icon ss-standard\">layout</div>"
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