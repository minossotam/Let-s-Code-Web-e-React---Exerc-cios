class Pessoa{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Tamy', 30);
pessoa1.idade = 31

console.log(pessoa1.idade);

const pessoa2 = new Pessoa('Laura', 15)