/*Crie um algoritmo que tranforme as notas do sitema
numerico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
*entre 80-89 - B
*entre 70-79 - C
*entre 60-69 - D
*menor que 60 - f



function nota (nota){
    const notaA = nota >= 90;
    const notaB = nota >= 80 && nota < 90;
    const notaC = nota >= 70 && nota < 80;
    const notaD = nota >= 60 && nota < 70;
    const notaF = nota < 60;

    let notaFinal;

    if(notaA){
        notaFinal = 'A'
    }else if (notaB){
        notaFinal = 'B'
    }else if(notaC){
        notaFinal = 'C'
    }else if(notaD){
        notaFinal = 'D'
    }else if(notaF){
        notaFinal = 'F'
    }

    return notaFinal
    
}
*/

/*crie um objeto que possuira 2 propriedades, ambas do
tipo array

    * receitas: [] 
    *despesas: []
    
    
agora, crei uma funcao que ira calcular o total de receitas
e despesas e ira mostrar uma mensagem se a familia esta com
saldo positivo ou negativo, seguindo o valor do saldo




const object = {
    receitas: [1100, 800, 400],
    despesas: [1100, 1000, 1000 ],
}


const sum = (array)=>{

    let soma = 0;

    for(let value of array){
        soma += value
    }

    return soma
}


const calcularBalance = ()=>{
    let receitas = sum(object.receitas)
    let despesas = sum(object.despesas)

    let result = receitas - despesas

    return `balance R$${result}`
}

console.log(calcularBalance())

*/

/* crie uma funcao que receba uma string em celsius ou fahrenheint e faca a transformacao 
de uma unidade para outra

c = (f - 32) * 5/9

f = c * 9/5 + 32



let graus = "50c"
let graus2 = "90f"



function transformGraus (graus){

    const celsiusExist = graus.toUpperCase().includes('C')
    const fahrenheintExist = graus.toLowerCase().includes('f')

    if(!celsiusExist && !fahrenheintExist){
        throw new Error("specify the type of measure")
    }

    let newGraus = Number(graus.toUpperCase().replace("F", ""))
    let formula = (fahrenheint)=>(fahrenheint - 32) * 5/9
    let measureSign = 'C'

    if(celsiusExist){
        newGraus = Number(graus.toUpperCase().replace("C", ""))
        formula = (celsius)=>(celsius * 9/5 + 32)
        measureSign = 'F'
    }

        return formula(newGraus) + measureSign
        //let grauCelsius = Number ((graus) - 32) * 5/9
     
  
        //let grauFahrenheint = Number(graus) * 9/5 + 32
    
}

try{
    console.log(transformGraus(graus))
    console.log(transformGraus(graus2))
}catch(error){
    console.log(error)
}

*/



/*Baseado no Array de Livros por Categoria abaixo, faca os seguintes
desafios

    - Contar o numero de categorias e o numero de livro em cada categoria
    - Contar o numero de autores
    -Mostrar livros do autor Augusto Cury
    -Transformar a funcao acima em uma funcao que ira receber o nome do autor
    e devolver o livros desse autor
    
*/

const booksByCategory = [
{
    category: "Riqueza",
    book: [
        {
        title: "Os segredos da mente milionaria",
        author: "T. Harv Eker" 
        },
        {
            title: "O Homem mais rico da Babilonia",
            author: "George S. Claon" 
        },
        {
            title: "Pai rico, pai pobre",
            author: "Robert T. Kiyoaki e Sharon L. Lechter" 
        },
    ],
},
{
    category: "Inteligencia Emocional",
    book: [
        {
            title: "Voce e Insubstituivel",
            author: "Augusto Cury"
        },
        {
            title: "Ansiedade - Como enfrentar o mal do seculo",
            author: "Augusto Cury"
        },
        {
            title: "Os 7 habitos das pessoas altamente eficazes",
            author: "Stephen R. Covey"
        },
        
        
    ],

}

];
/*

console.log(`total of the category: ${booksByCategory.length}`)

for(let categoria of booksByCategory){ // variavel categoria esta recebendo o objeto
    console.log(`total of the books in category: ${categoria.category}`)
    console.log(`total: ${categoria.book.length} books`)
}

let array = []

for(let author of booksByCategory){
    for (let amount of author.book){
        array.push(amount.author)
        console.log(array)
    }
    
}

console.log(`total of the author: ${array.length}`)

let arrayAuthor = []

for(let author of booksByCategory){
    for(let books of author.book){
        const authorAugusto = "Augusto Cury"
        arrayAuthor.push(books.author)

        if(arrayAuthor.includes(authorAugusto)){
            console.log(`author: ${authorAugusto}\nbooks: ${books.title}`)
        }
        
    }
}
console.log(arrayAuthor)
*/


//dentro da funcao eu posso manipular o objeto em si sem ser por parametro

function countAuthor(){
    let author = []

    for(let object of booksByCategory){
        for (let book of object.book){
            if(author.indexOf(book.author) == -1){
                author.push(book.author)
            }
            
        }
        
    }

    return `total of the author: ${author.length}`
}

console.log(countAuthor())

function booksOfAugust(){
    let books = []

    for(let object of booksByCategory){
        for (let book of object.book){
            if(book.author.includes("Augusto Cury")){
                books.push(book.title)
            }
        }
    }

    return `book: ${books.join(" / ")}\n`
}


console.log(booksOfAugust())


//funcao com paramentros tambem pode ser manipulado os objetos em si dentro da funcao, esse objeto nao tem relacao com o parametro

function getBooksByAuthor(autor){
    let books = []

    for(let object of booksByCategory){
        for(let book of object.book){
            if(book.author == autor){
                books.push(book.title)
            }
        }
    }

    return `author: ${autor}\nbooks: ${books}`
}

console.log(getBooksByAuthor("George S. Claon"))