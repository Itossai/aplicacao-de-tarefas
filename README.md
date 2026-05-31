# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## 📋 Funcionalidades do Projeto

Este projeto é uma aplicação de gerenciamento de tarefas desenvolvida com React, implementando diversos conceitos e padrões modernos de desenvolvimento.

### Configuração do Ambiente

O projeto foi configurado utilizando **Create React App**, que fornece uma estrutura pronta para desenvolvimento React com ferramentas pré-configuradas como:
- Webpack para bundling
- Babel para transpilação de código moderno
- ESLint para verificação de código
- Jest para testes

### React Router

A aplicação utiliza **React Router** para gerenciamento de rotas e navegação entre páginas:

- **Página Home**: Exibe a lista de tarefas cadastradas
- **Página Adicionar Tarefa**: Formulário para criar novas tarefas
- Navegação fluida entre diferentes seções da aplicação

Para instalar o React Router:
```bash
npm install react-router-dom
```

### Context API

Implementamos um **Context API** para gerenciamento centralizado do estado global das tarefas:

- Criamos um contexto para armazenar tarefas
- Utilizamos um provedor (Provider) para disponibilizar o estado para toda a aplicação
- Reduz a necessidade de prop drilling
- Facilita o compartilhamento de estado entre componentes distantes

### Hooks

A aplicação faz uso extensivo dos hooks do React:

- **useState**: Gerencia o estado local de componentes (tarefas, formulários, filtros, etc.)
- **useEffect**: Gerencia efeitos colaterais como:
  - Carregamento de dados ao montar o componente
  - Sincronização com localStorage
  - Limpeza de recursos

### CRUD de Tarefas

Implementamos todas as operações CRUD (Create, Read, Update, Delete):

- **Create (Criar)**: Adicionar novas tarefas através de um formulário
- **Read (Ler)**: Visualizar a lista completa de tarefas cadastradas
- **Update (Atualizar)**: Editar tarefas existentes
- **Delete (Excluir)**: Remover tarefas da lista

### Persistência de Dados

As tarefas são persistidas utilizando **localStorage**:

- Todos os dados de tarefas são salvos automaticamente no navegador
- As tarefas permanecem entre sessões (mesmo após fechar o navegador)
- Implementado com `useEffect` para sincronização automática

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
