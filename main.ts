function MkStars () {
    for (let index = 0; index <= 4; index++) {
        if (5 < randint(0, 10)) {
            led.plotBrightness(index, 0, randint(30, 150))
        } else {
            led.plotBrightness(index, 0, 0)
        }
    }
    for (let index = 0; index < randint(5, 17); index++) {
        jam = randint(0, 10)
    }
}
input.onButtonPressed(Button.A, function () {
    music.playTone(131, music.beat(BeatFraction.Quarter))
    xs += -1
    if (xs < 0) {
        xs = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    for (let index = 0; index <= 4; index++) {
        num = 4 - index
        led.plotBrightness(xs, num, 240)
        basic.pause(100)
        led.plotBrightness(xs, num, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    music.playTone(523, music.beat(BeatFraction.Quarter))
    xs += 1
    if (xs > 4) {
        xs = 4
    }
})
function mvStars () {
    for (let index2 = 0; index2 <= 3; index2++) {
        num = 4 - index2
        for (let index = 0; index <= 4; index++) {
            led.plotBrightness(index, num, led.pointBrightness(index, num - 1))
        }
    }
}
let num = 0
let jam = 0
let xs = 0
xs = 2
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        MkStars()
        basic.pause(200)
        led.plot(xs, 4)
        mvStars()
        led.plot(xs, 4)
    }
})
