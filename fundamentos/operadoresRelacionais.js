console.log('01', '1' == 1); // se eles forem iguais vai retornar true caso ao contrário irá retornar false
console.log('02', '1' === 1); // se forem estritamente iguais vai retornar true caso ao contrário irá retornar false
// nesse caso acima é uma string e o outro um number
console.log('03', '3' != 3); // se eles forem diferentes retornará true, caso contrario retornará false
console.log('03', '3' !== 3); // se forem estritamente diferentes

const d1 = new Date(0) // o  zero significa a data de referência do javascript (1 de janeiro de 1970)
const d2 = new Date(0)
console.log('04', d1.getTime() === d2.getTime()); // vai retonar o valor em milisegundos desde da data de referência até agora


console.log('05', undefined == null); // eles são iguais? sim
console.log('06', undefined === null); // eles são estritamente iguais? não

/*   == ignora os tipos primitivos (evitar de usar)
*    === é mais preferível usar esse 
*/