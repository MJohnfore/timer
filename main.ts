let num = 9
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(num)
        basic.pause(350)
        basic.showNumber(num - 1)
    }
    
})
