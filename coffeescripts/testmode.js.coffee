###
File: Hiof 2012 - testmode functions
Author: Kenneth Nordahl
Updated August 29th, 2012
###

class window.TestmodeController
  constructor: ->
    @body = $("#body")
    @createTestElement()
    @moveBodyElement()

    console.log "hello dev"

  createTestElement: ->
    @body.append '<div id="dev-nav">Test shortcuts: <a href="/">Forside</a> - <a href="/student">Student</a> - <a href="/articles/1">Article</a></div>'
    
  moveBodyElement: ->
    @body.css "marginTop", "20px"