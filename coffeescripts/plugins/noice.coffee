#
#
# Noice plugin
#
#


(($) ->
  $.fn.extend noisy: (params) ->
    $.extend(noiseMaker: $.extend(
      opacity: .1
      width: 20
      brightness: 70
      monochromatic: false
      color: ->
        @caller.css "background-color"
 
      bringNoise: ->
        x = undefined
        y = undefined
        canvas = $("<canvas>",
          width: @width
          height: @width
        )[0]
        ctx = canvas.getContext("2d")
        colorArr = (if $.isFunction(@color) then @color() else @color).replace(/(rgb\(|rgba\(|\))/g, "").split(",").map($.trim)
        r = colorArr[0]
        g = colorArr[1]
        b = colorArr[2]
        console.log colorArr
        if @monochromatic
          x = 0
          while x < canvas.width
            y = 0
            while y < canvas.height
              rand = Math.random()
              ctx.fillStyle = "rgba(" + [ Math.floor(rand * r + @brightness), Math.floor(rand * g + @brightness), Math.floor(rand * b + @brightness), @opacity ].join(",") + ")"
              ctx.fillRect x, y, 1, 1
              y += 1
            x += 1
        else
          x = 0
          while x < canvas.width
            y = 0
            while y < canvas.height
              ctx.fillStyle = "rgba(" + [ Math.floor(Math.random() * r + @brightness), Math.floor(Math.random() * g + @brightness), Math.floor(Math.random() * b + @brightness), @opacity ].join(",") + ")"
              ctx.fillRect x, y, 1, 1
              y += 1
            x += 1
        canvas.toDataURL "image/png"
 
      go: (caller) ->
        @caller = caller
        if "HTMLCanvasElement" of window
          noise = @bringNoise()
          caller.css "background-image", (i, val) ->
            "url(" + noise + ")" + ", " + val
        else
          caller.css "background-image"
    , params)).noiseMaker.go this
) jQuery