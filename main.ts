input.onButtonPressed(Button.A, function () {
    clicks += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("help: saadit111.github.io/Misc/iddu01clicker.html")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (clicks))
})
let clicks = 0
basic.showString("i-clicker")
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # # . # #
        # # # # #
        `)
})
