num = 9
start = True

def on_forever():
    global num, start
    while start == True:
        if num != -1:
            basic.show_number(num)
            basic.pause(350)
            num -= 1
        else:
            break
basic.forever(on_forever)

