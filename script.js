let mainCanvas = document.getElementById('main-canvas')
let ctx = mainCanvas.getContext("2d")

const CENTER_X = 250
const CENTER_Y = 250



ctx.beginPath()
ctx.fillStyle = 'white'
ctx.strokeStyle = 'white'
ctx.lineWidth = 1

//sun
ctx.arc(CENTER_X, CENTER_Y, 30, 0, Math.PI*2)
ctx.fill()
ctx.closePath()

//mercury
ctx.beginPath()
ctx.moveTo(300, 250)
ctx.arc(CENTER_X, CENTER_Y, 50, 0, Math.PI*2)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.moveTo(300,255)
ctx.arc(300,250, 4, 0, Math.PI*2)
ctx.fill()
ctx.closePath()

//venus
ctx.beginPath()
ctx.moveTo(330, 250)
ctx.arc(CENTER_X, CENTER_Y, 80, 0, Math.PI*2)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.arc(330, 250,5, 0, Math.PI*2)
ctx.fill()
ctx.closePath()

//earth
ctx.beginPath()
ctx.moveTo(370, 250)
ctx.arc(CENTER_X, CENTER_Y, 120, 0, Math.PI*2)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.arc(370, 250, 5, 0, Math.PI*2)
ctx.fill()
ctx.closePath()

//mars
ctx.beginPath()
ctx.moveTo(390, 250)
ctx.arc(CENTER_X, CENTER_Y, 140, 0, Math.PI*2)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.arc(390, 250, 4, 0, Math.PI*2)
ctx.fill()
ctx.closePath()

//jupiter
ctx.beginPath()
ctx.moveTo(410, 250)
ctx.arc(CENTER_X, CENTER_Y, 160, 0, Math.PI*2)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.arc(410, 250,10, 0, Math.PI*2)
ctx.fill()
ctx.closePath()

//saturn
ctx.beginPath()
ctx.moveTo(430, 250)
ctx.arc(CENTER_X, CENTER_Y, 180, 0, Math.PI*2)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.arc(430, 250,10, 0, Math.PI*2)
ctx.fill()
ctx.closePath()

//uranus
ctx.beginPath()
ctx.moveTo(450, 250)
ctx.arc(CENTER_X, CENTER_Y, 200, 0, Math.PI*2)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.arc(450, 250, 7, 0, Math.PI*2)
ctx.fill()
ctx.closePath()

//neptune
ctx.beginPath()
ctx.moveTo(470, 250)
ctx.arc(CENTER_X, CENTER_Y, 220, 0, Math.PI*2)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.arc(470, 250, 7, 0, Math.PI*2)
ctx.fill()
ctx.closePath()

//pluto
ctx.beginPath()
ctx.moveTo(495, 250)
ctx.arc(CENTER_X, CENTER_Y, 245, 0, Math.PI*2)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.arc(495, 250,2, 0, Math.PI*2)
ctx.fill()
ctx.closePath()


//alert(ctx)