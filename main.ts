function apontar_seta (numero_vez: number) {
    if (numero_vez == 1) {
        basic.showArrow(ArrowNames.East)
    }
    if (numero_vez == 2) {
        basic.showArrow(ArrowNames.North)
    }
    if (numero_vez == 3) {
        basic.showArrow(ArrowNames.West)
    }
}
input.onButtonPressed(Button.A, function () {
    uni_duni_te()
})
function uni_duni_te () {
    contagem = randint(6, 24)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    j = 0
    for (let index = 0; index < contagem; index++) {
        if (j == 4) {
            j = 0
        }
        j += 1
        apontar_seta(j)
        basic.pause(10)
    }
}
let j = 0
let contagem = 0
basic.showIcon(IconNames.Duck)
