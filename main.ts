input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    X += -1
})
input.onPinPressed(TouchPin.P2, function () {
    basic.clearScreen()
    Y += 1
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    X += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    Y += -1
})
let X = 2
let Y = 2
basic.clearScreen()
basic.forever(function () {
    led.plot(X, Y)
})
