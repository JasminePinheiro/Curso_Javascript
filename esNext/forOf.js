// Diferença entre for in e for of 

var roupa = [
    { id: 1, modelo: "Vestido", preco: 100, desconto: 10 },
    { id: 2, modelo: "Blusa", preco: 45, desconto: 10 },
    { id: 3, modelo: "Calça", preco: 30, desconto: 10 },
    { id: 4, modelo: "Short", preco: 48, desconto: 10 }
]

var total = 0

// apenas usando o for
for (let i = 3; i < roupa.length; i++) {
    total += roupa[i].preco;
}
let media = total / 4
console.log(total);
console.log(eval(45 + 30 + 48));


let nomes = [
    { nome: 'Ezequiel' },
    { nome: 'jasmine' },
    { nome: 'Fronts' },
]


for (let i = 2; i < nomes.length; i++) {
    console.log(nomes[0].nome)
}



// usando o for of

for (let letra of "mine\n") {
    console.log(letra)
}

const api = 

{
    "links": {
      "self": "http://example.com/articles",
      "next": "http://example.com/articles?page[offset]=2",
      "last": "http://example.com/articles?page[offset]=10"
    },
    "data": [{
      "type": "articles",
      "id": "1",
      "attributes": {
        "title": "JSON:API paints my bikeshed!"
      },
      "relationships": {
        "author": {
          "links": {
            "self": "http://example.com/articles/1/relationships/author",
            "related": "http://example.com/articles/1/author"
          },
          "data": { "type": "people", "id": "9" }
        },
        "comments": {
          "links": {
            "self": "http://example.com/articles/1/relationships/comments",
            "related": "http://example.com/articles/1/comments"
          },
          "data": [
            { "type": "comments", "id": "5" },
            { "type": "comments", "id": "12" }
          ]
        }
      },
      "links": {
        "self": "http://example.com/articles/1"
      }
    }],
    "included": [{
      "type": "people",
      "id": "9",
      "attributes": {
        "firstName": "Dan",
        "lastName": "Gebhardt",
        "twitter": "dgeb"
      },
      "links": {
        "self": "http://example.com/people/9"
      }
    }, {
      "type": "comments",
      "id": "5",
      "attributes": {
        "body": "First!"
      },
      "relationships": {
        "author": {
          "data": { "type": "people", "id": "2" }
        }
      },
      "links": {
        "self": "http://example.com/comments/5"
      }
    }, {
      "type": "comments",
      "id": "12",
      "attributes": {
        "body": "I like XML better"
      },
      "relationships": {
        "author": {
          "data": { "type": "people", "id": "9" }
        }
      },
      "links": {
        "self": "http://example.com/comments/12"
      }
    }]
  }


console.log(api.links)

// usando o for in (ele pega o valor do indice)

const assunto = ['set', 'map', 'filter', 'for']
for (let i in assunto) {
    assunto[0] = 'for in'
    console.log(assunto[0]);
    break;
}

for (let i of assunto) {

    console.log
}



// var multiplicador = 5

// for (let i = 0; i <= 10; i++) {
//     calc = multiplicador * i
//     console.log(`${multiplicador} x ${i} = ${calc}`)
// }
// console.log('\n');

// var multiplicador1 = 5;

// for (let i = 0; i <= 10; i++) {
//     console.log(`${multiplicador1}` + " X " + i + " = " + i * multiplicador1);
// }


// crie um array de objetos, use o for ou for in, devolva e altere dois itens do array de objeto na tela 
var roupa = [{
    id: '1', cor: 'laranja', modelo: 'vestido'
},
{
    id: '2', cor: 'rosa', modelo: 'calça'
},

{
    id: '3', cor: 'preto', modelo: 'blusa'
}
] 

roupa.forEach(()=>{
    roupa[0].cor = "cinza"
    roupa[0].modelo = "blusa de frio"
    
    //console.log(item,index )
}) 

console.log(roupa);










