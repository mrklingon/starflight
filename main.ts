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
    music.playTone(262, music.beat(BeatFraction.Half))
    Phaser()
})
input.onButtonPressed(Button.B, function () {
    music.playTone(523, music.beat(BeatFraction.Quarter))
    xs += 1
    if (xs > 4) {
        xs = 4
    }
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(131, music.beat(BeatFraction.Sixteenth))
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    Droid += 1
    if (1 < Droid) {
        Droid = 0
    }
})
function Phaser () {
    if (xs != LastP) {
        for (let index = 0; index <= 4; index++) {
            num = 4 - index
            led.plotBrightness(xs, num, 240)
            basic.pause(100)
            led.plotBrightness(xs, num, 0)
        }
        LastP = xs
    }
}
function mvStars () {
    for (let index2 = 0; index2 <= 3; index2++) {
        num = 4 - index2
        for (let index = 0; index <= 4; index++) {
            led.plotBrightness(index, num, led.pointBrightness(index, num - 1))
        }
    }
}
let ye = 0
let num = 0
let LastP = 0
let jam = 0
let xs = 0
let Droid = 0
Droid = 0
game.setLife(5)
xs = 2
let Scene = 0
images.createBigImage(`
    . . . . . . . . . .
    . # # # . . . # . .
    # # # # . . . . . .
    # # # # . . . . # .
    . # # # # . . # . .
    `).scrollImage(1, 200)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # #
    . # # # #
    # # # . .
    `)
basic.pause(500)
basic.forever(function () {
    while (!(game.isGameOver())) {
        basic.pause(randint(1000, 3000))
        ye = randint(1, 2)
        for (let ie = 0; ie <= 4; ie++) {
            led.plotBrightness(ie, 0, 254)
        }
    }
})
basic.forever(function () {
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    while (!(game.isGameOver())) {
        for (let index = 0; index < 5; index++) {
            MkStars()
            basic.pause(300)
            led.plot(xs, 4)
            mvStars()
            if (led.pointBrightness(xs, 4) == 254) {
                game.removeLife(1)
            }
            led.plot(xs, 4)
        }
        game.addScore(15)
    }
})
basic.forever(function () {
    if (!(game.isGameOver()) && 1 == Droid) {
        xs = randint(0, 4)
        led.plot(xs, 4)
        basic.pause(100)
        Phaser()
        basic.pause(200)
    }
})
