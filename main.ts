input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(day)
    basic.showNumber(hour)
    basic.showNumber(minute)
    basic.showNumber(second)
})
let day = 0
let hour = 0
let minute = 0
let second = 0
second = 0
minute = 0
hour = 0
day = 0
basic.forever(function () {
    while (true) {
        for (let index = 0; index < 24; index++) {
            for (let index = 0; index < 60; index++) {
                for (let index = 0; index < 60; index++) {
                    basic.pause(1000)
                    second += 1
                }
                minute += 1
                second = 0
            }
            hour += 1
            minute = 0
        }
        day += 1
        minute = 0
    }
})
