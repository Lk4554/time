input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        servos.P0.setAngle(0)
        basic.showNumber(0)
        servos.P0.setAngle(90)
        basic.pause(500)
        basic.showNumber(90)
        servos.P0.setAngle(180)
        basic.pause(500)
        basic.showNumber(180)
        servos.P0.stop()
    }
    basic.pause(100)
})
65
basic.showIcon(IconNames.Heart)
