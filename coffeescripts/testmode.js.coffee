###
File: Hiof 2012 - testmode functions
Author: Kenneth Nordahl
Updated October 20th, 2012
###

class window.TestmodeController
  constructor: ->
    @body = $("#body")
    # @createTestElement()
    # @moveBodyElement()

    console.log "hello dev"

  createTestElement: ->
    @body.append '<div id="dev-nav">Test shortcuts: <a href="/">Forside</a> - <a href="/student">Student</a> - <a href="/ansatt">Ansatt</a> - <a href="/pages/1">Page</a></div>'
    
  moveBodyElement: ->
    @body.css "marginTop", "20px"