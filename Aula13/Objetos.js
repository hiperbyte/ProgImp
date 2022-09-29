// O que é um objeto?
// - A representação de algo do mundo físico

// Propriedades
// - Seriam as características do objeto em si

/*
EXEMPLO:
- Profile/Perfil de usuário
  nome: 'Usuario teste',
  apelido: 'teste123',
  biografia: 'Lorem ipsum'
  contato:
      telefone: '11 1111-1111'
      email: 'email@email.com'

{} -> objeto vazio, pois não posssui propriedades nem métodos
nome_propriedade: valor_propriedade -> separado por vírgula
nome_método seguido de () e {}
*/

let profile = {
  nome: "Usuário Teste",
  apelido: "teste 123",
  contatos: [
    {
      telefone: "11-1111-1111",
      email: "email@email.com",
    },
  ],
  listarContatos() {},
};
