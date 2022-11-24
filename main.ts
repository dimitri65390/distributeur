function réisialisation () {
    _1 = 0
    _2 = 0
    servos.P0.setAngle(150)
}
let _2 = 0
let _1 = 0
_2 = 0
_1 = 0
servos.P0.setAngle(150)
basic.forever(function () {
    _2 = pins.digitalReadPin(DigitalPin.P16)
    if (_1 != _2) {
        servos.P0.setAngle(60)
        basic.pause(2000)
    }
    réisialisation()
})
