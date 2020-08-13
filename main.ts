input.onButtonPressed(Button.A, function () {
    LetterToSend = "" + LetterToSend + "."
})
input.onButtonPressed(Button.AB, function () {
    if (reseved == true) {
        radio.sendString(LetterToSend)
        reseved = false
        LetterToSend = ""
    }
})
radio.onReceivedString(function (receivedString) {
    confrimation = receivedString
    if (confrimation == "received") {
        images.createBigImage(`
            # # . . # # # . . #
            # . # . # . . . # .
            # # . . # # . . # .
            # . # . # . . . # .
            # . # . # # # . . #
            `).scrollImage(1, 200)
        images.createBigImage(`
            # . # # # . # # # .
            . . # . . . . # . .
            . . # # . . . # . .
            . . # . . . . # . .
            # . # # # . # # # .
            `).scrollImage(1, 200)
        images.createBigImage(`
            # . . . # . # # # .
            # . . . # . # . . .
            . # . # . . # # . .
            . # . # . . # . . .
            . . # . . . # # # .
            `).scrollImage(1, 200)
        images.createImage(`
            # # . . .
            # . # . .
            # . # . .
            # . # . .
            # # . . .
            `).scrollImage(1, 200)
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).scrollImage(1, 200)
        reseved = true
    }
})
input.onButtonPressed(Button.B, function () {
    LetterToSend = "" + LetterToSend + "-"
})
let confrimation = ""
let reseved = false
let LetterToSend = ""
LetterToSend = ""
reseved = true
radio.setGroup(1)
let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"]
let alphabet = [images.createImage(`
    . . # . .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `), images.createImage(`
    . # # . .
    . # . # .
    . # # . .
    . # . # .
    . # # . .
    `), images.createImage(`
    . . # # .
    . # . . .
    . # . . .
    . # . . .
    . . # # .
    `), images.createImage(`
    . # # . .
    . # . # .
    . # . # .
    . # . # .
    . # # . .
    `), images.createImage(`
    . # # # .
    . # . . .
    . # # . .
    . # . . .
    . # # # .
    `), images.createImage(`
    . # # # .
    . # . . .
    . # # . .
    . # . . .
    . # . . .
    `), images.createImage(`
    . # # # .
    # . . . .
    # . # # .
    # . . # .
    . # # . .
    `), images.createImage(`
    . # . # .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `), images.createImage(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `), images.createImage(`
    . # # # .
    . . . # .
    . . . # .
    . # . # .
    . . # . .
    `), images.createImage(`
    . # . # .
    . # . # .
    . # # . .
    . # . # .
    . # . # .
    `), images.createImage(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    `), images.createImage(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `), images.createImage(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `), images.createImage(`
    . # # # .
    . # . # .
    . # . # .
    . # # # .
    . . . . .
    `), images.createImage(`
    . # # # .
    . # . # .
    . # # # .
    . # . . .
    . # . . .
    `), images.createImage(`
    # # # # .
    # . . # .
    # . # # .
    # # # # .
    . . . . #
    `), images.createImage(`
    . # # . .
    . # . # .
    . # # . .
    . # . # .
    . # . # .
    `), images.createImage(`
    . . # # .
    . # . . .
    . . # . .
    . . . # .
    . # # . .
    `), images.createImage(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `), images.createImage(`
    . # . # .
    . # . # .
    . # . # .
    . # . # .
    . . # . .
    `), images.createImage(`
    # . . . #
    # . . . #
    . # . # .
    . # . # .
    . . # . .
    `), images.createBigImage(`
    # . . . # . . . # .
    # . . . # . . . # .
    . # . # . # . # . .
    . # . # . # . # . .
    . . # . . . # . . .
    `), images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `), images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . . # . .
    . . # . .
    `), images.createImage(`
    # # # # #
    . . . # .
    . . # . .
    . # . . .
    # # # # #
    `), images.createImage(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `), images.createImage(`
    . . # . .
    . # . # .
    . . # . .
    . # . . .
    . # # # .
    `), images.createImage(`
    . # # . .
    . . . # .
    . . # # .
    . . . # .
    . # # . .
    `), images.createImage(`
    . # . # .
    . # . # .
    . # # # .
    . . . # .
    . . . # .
    `), images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # . .
    `), images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . # . # .
    . # # # .
    `), images.createImage(`
    . # # # .
    . . . # .
    . . . # .
    . . . # .
    . . . # .
    `), images.createImage(`
    . # # # .
    . # . # .
    . # # # .
    . # . # .
    . # # # .
    `), images.createImage(`
    . # # # .
    . # . # .
    . # # # .
    . . . # .
    . # # # .
    `), images.createImage(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `)]