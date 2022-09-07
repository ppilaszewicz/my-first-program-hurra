input.onButtonPressed(Button.A, function () {
    radio.sendString("Hi")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.showIcon(IconNames.Heart)
radio.setGroup(77)
basic.forever(function () {
	
})
