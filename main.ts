let opened = 0
let closed = 0
while (true) {
    if (input.temperature() >= 10) {
        if (opened == 0) {
            basic.showString("opened")
            music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 280)
            servos.P0.setAngle(90)
            opened += 1
            closed = 0
        }
    } else {
        if (closed == 0) {
            basic.showString("closed")
            music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 280)
            closed = 1
            opened = 0
        }
    }
}
