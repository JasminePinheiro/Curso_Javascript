/* 12) Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(num) {
    if (num == 0) {
        return 1
    } else {
        return num * fatorial(num - 1) // 4! = (4 * 3 * 2 * 1 )
    }  
}

console.log(fatorial(4))