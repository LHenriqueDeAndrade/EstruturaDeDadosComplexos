// Crie um objeto que receba ao menos três propriedades sobre você.

let PersonalInformation = [{ name: "Luiz", age: 23, sign: "sagitário" }];

// Adicione uma nova propriedade sem alterar seu objeto inicial.

PersonalInformation[0].city = "Volta Redonda";

// Remova uma propriedade desse objeto.

delete PersonalInformation[0].age;

//Mostre no console todas as propriedades desse objeto.

console.log(PersonalInformation);
console.dir(PersonalInformation[0]);
console.table(PersonalInformation);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
  {
    nome: "Paola",
    idade: 35,
    telefone: 33450541,
    amigos: ['Renato', 'Cauã', 'Bianca', 'Santana']
  },

  {
    nome: "Lopez",
    idade: 28,
    telefone: 33460733,
    amigos: ['|Fernando', 'Carla', 'Rafner', 'Nadir']
  },

  {
    nome: "Vera",
    idade: 42,
    telefone: 33483274,
    amigos: ['Julio', 'Juliana', 'Lais', 'Matheus']
  },

  {
    nome: "Mario",
    idade: 50,
    telefone: 33579412,
    amigos: ['Augusto', 'Sandra', 'Givaldo', 'Marcelo']
  },

  {
    nome: "Nicole",
    idade: 18,
    telefone: 33443274,
    amigos: ['Fabricio', 'Carlos', 'Luan', 'Pedro']
  },
];

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro)
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[3])
console.log(cadastro[3].amigos[2])
console.log(cadastro[4].amigos[0])