
/* Um componente no React é uma função que retorna HTML
quando o Html está dentro do JS ele é chamado de JSX,
que signfica Javascript + XML (é a sintaxe do HTML)
*/

/*
 Propriedades são quase a mesma coisa que os atributos do HTML,
 a diferença é que eles são passados para os componentes ao invés
 dos elementos do HTML
*/

/*
 Estado: Uma informação que vai ser mantida pelo componente,
 o componente pode precisar armazenar determinado tipo de informação.
 O estado (que é basicamente uma variável) toda vez que for alterado,
 o componente irá remontar, irá renderizar novamente em tela.
*/

/*
Imutabilidade: dentro do React, por uma questão de performance
não se pode alterar o valor do estado de uma forma direta, é 
preciso sobrepor o valor da variável do estado
*/

// O Estado Retorna um Array [valor, FunçãoDeAtualização]

import React from 'react';

import './global.css';

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;
