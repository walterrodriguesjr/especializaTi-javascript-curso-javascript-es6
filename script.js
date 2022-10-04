
/* 1B-variáveis ES6 let e const  */

// CONCEITO PRINCIPAL DA AULA
    //a variavel let, toda vez que redeclarada, usa let antes, porem sobescreve o valor, porem, se 
        //for chamada só pelo nome, esta invocando a variavel já declarada com respectivo valor
        //se for chamada dentro de um escopo (if, for) com let, é como se recriasse uma nova variavel, 
        // não extinguindo a anterior

    //a variavel const não pode ser redeclarada no mesmo escopo, porem, dentro de um escopo (if, for) 
        //segue o mesmo conceito como se estivesse criando uma nova variavel com mesmo nove

let name = "Walter";
console.log(name);

if (true) {
    name = "Walterif";
    console.log(name);
}
name = "Walter fora";
console.log(name);


let y = 50;
console.log(y);

for (let y = 0; y <= 10; y++) {
    console.log(y);
}

console.log(y);

const company = 'Policia Militar';
console.log(company);


//2B-arrow functions ES6 - parte 1 

// CONCEITO PRINCIPAL DA AULA
//é uma maneira mais enxuta de montar uma function(), sem precisar declarar 'function'
//EXEMPLO 2 MOSTRA UMA MANEIRA MAIS ENXUTA AINDA DE SE USAR

//exemplo padrão
let showName1 = (name) => {
    return name.toUpperCase();
}
console.log(showName1("walter"));


//exemplo com return automático, sem precisar ser declarado e na mesma linha, e, caso tenha apenas 1
//parametro, pode ser passado sem uso de parenteses, se ouver mais, o parentes é necessário 
let showName2 = sobreNome => sobreNome.toLowerCase();
console.log(showName2("RODRIGUES"));


//exemplo de função com arrow function com 2 parametros e trabalhando os parametros com métodos
let fullName = (name, lastName) => {
    name = name.toUpperCase();
    lastName = lastName.toUpperCase();
    full = name + ' ' + lastName;
    return full;
}
console.log(fullName("Charlene", "Inaba")); 


//3B-arrow functions ES6 - parte 2 

// CONCEITO PRINCIPAL DA AULA
    //testes de arrow functions com objetos 
    //usando funções dentro do objeto
    

let empresa = {
    name: "Especializa",
    lastName: "Ti",

    fullName(){
return this.name + " " + this.lastName
    },

    showMe(){
        console.log(this.fullName());
    }
}
empresa.showMe();


//4B-string template ES6

// CONCEITO PRINCIPAL DA AULA
    //é a técnica de concatenação mais enxuta, usando a crase e chamando os parametros com ${conteudo}
    //neste exemplo o return dos parametros está com stirng template e o return está oculto, para simplificar

let nomeCompleto = (name, lastName) => `${name} ${lastName}.`;
console.log(nomeCompleto("Renan", "Rodrigues"));


//5B-destructuring ES6 

// CONCEITO PRINCIPAL DA AULA
    //significa o desestruturamento(desconstituir) de arrays e objetos 
    //ele quebra cada valor do objeto e cada um vira como se fosse uma variavel

//com array
let completo = ['Pedro', 'Henrique'];
let [nome, ultimoNome] = completo;
console.log(nome);
console.log(ultimoNome);

//com objeto 
let fullName3 = {
   firstName: "Carlos",
   lastName: "Junior" 
}

let{firstName, lastName} = fullName3;
console.log(firstName);
console.log(lastName);


//6B-rest parameters ES6

// CONCEITO PRINCIPAL DA AULA
//consiste em, usar o ...params para passar diversos parametros de uma vez, transformando 
        //em um array (parametro rest)
        

        let customUpperCase = (...params) => {
            console.log(params);
}

customUpperCase('Carlos', 'Walter', 'Renan');


//7B-spread ES6 (espalhar)

// CONCEITO PRINCIPAL DA AULA
//uso do spread, ao chamar a variavel que contem uma função, sum() como parametro, passo 
//como spread a variavel q contem 3 itens em seu array, automaticamente distribuido
//ao usar o 'spread' ele esparrama o conteudo da variavel que contem array, onde for chamado
let sum = (n1, n2, n3) => n1 + n2 +n3;

var numbers = [1, 2 ,3];
console.log(sum(...numbers));



//8B-parâmetros default ES6 

// CONCEITO PRINCIPAL DA AULA
//na delclaração da função, nos parametros está usando a informação que os parametros 
    //possuem valor default

let showFullName = (firstName = 'Nome Default', lastName = 'SobreNome Default') => {
    console.log(`${firstName} ${lastName}`);
}
showFullName();

