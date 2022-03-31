const pessoa = {
    nome: 'Tamy',
    idade: 30,
    país: 'Brasil',
    profissão: 'Dev'
};

console.log(pessoa.profissão);

const quadrado = {
    base: 10,
    altura: 20,
    calculaArea: function() 
    {
        return this.base*this.altura
    }
};

console.log(quadrado.calculaArea());

const agenda = {
    contatos: [
        {
            nome: 'Ana',
            telefone: 00238947,
            email: 'ana@hotmail.com'
        },
        {
            nome: 'Beto',
            telefone: 8964756,
            email: 'beto@gmail.com'
        },
        {
            nome: 'Bea',
            telefone: 2599654,
            email: 'bea@live.com'
        }
    ],
    adicionar: function(contato) {
        return this.contatos.push(contato)
    }
};

console.log(agenda.adicionar({nome: 'Tamy', telefone: 6549854, email: 'tamy@tamy.com'}));

console.log(agenda)

