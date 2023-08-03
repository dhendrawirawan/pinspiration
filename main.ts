let Counter = randint(1, 6)
loops.everyInterval(75, function () {
    Counter = randint(1, 6)
})
loops.everyInterval(100, function () {
    if (Counter == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (Counter == 2) {
        basic.showLeds(`
            . . . . .
            . # # . .
            # . . # .
            # . . . #
            . # # # .
            `)
    } else if (Counter == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else if (Counter == 4) {
        basic.showLeds(`
            . . . . .
            . . # # .
            . # . . #
            # . . . #
            . # # # .
            `)
    } else if (Counter == 5) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (Counter == 6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    }
})
