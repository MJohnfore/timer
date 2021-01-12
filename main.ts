let num = 9
let start = true
basic.forever(function on_forever() {
    
    while (start == true) {
        if (num != -1) {
            basic.showNumber(num)
            basic.pause(350)
            num -= 1
        } else {
            break
        }
        
    }
})
