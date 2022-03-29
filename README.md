

![cover](.github/project.gif?style=flat)


## 💻 Projeto
O desáfio para este aplicativo foi criar de uma listagem de musicas e playlists semelhantes ao spotify, 

## :hammer_and_wrench: Features 

-   [ ] Lista de categorias.
-   [ ] Lista de playlists;
-   [ ] Lista os músicas;
-   [ ] Player de música;
-   [ ] Busca por nome da música, artista, playlist ou podcast;

## ✨ Tecnologias

-   [ ] React Native
-   [ ] Typescript
-   [ ] Expo Bare Workflow
-   [ ] React Redux & Redux Toolkit
-   [ ] Styled Components
-   [ ] Hooks form
-   [ ] React Native Svg & Svg Transform
-   [ ] Axios
-   [ ] Gradient colors
-   [ ] Lottie 
-   [ ] Expo Google Fonts
-   [ ] Expo AV
-   [ ] React Navigation Stack 6x
-   [ ] React Native Gesture Handler
-   [ ] date-fns
-   [ ] React Native Flipper
-   [ ] Atomic Design
-   [ ] Jest

## Estrutura do projeto

```cl
├── __tests__ # Pasta onde tem a configuração e arquivos de testes.
├── .expo # Pasta onde tem a configuração e arquivos necessários para o funcionamento do expo
├── android # Código fonte Android
├── ios # Código fonte iOS
├── src # Código fonte JavaScript
│ 	├── @types # tipagem de png, svg, jpeg e navigation
│ 	├── assets # Imagens, animation e assets no geral
│ 	│ 	└── images
│ 	│ 	└── icons
│ 	│ 	└── animation
│ 	├── components # Componentes genéricos da aplicação no padão Atomic Design
│ 	├── hooks # Pasta com os arquivos de hooks personalizados
│ 	├── interfaces # Pasta com os arquivos de configuração (cores, tema, axios, strings)
│ 	├── routes # Pasta com todos os arquivos e configuração de rota
│ 	│ 	├─── Routes.js # Arquivo de configuração das Rotas
│ 	│ 	└─── index.js  # arquivo exportando as Rotas
│ 	├── screens # Pasta com os arquivos de screens
│ 	├── services # Pasta com os arquivos de configuração axios
│ 	├── store # Arquivos relacionados a store (redux-saga e redux-toolkit)
│ 	│ 	├── sagas # Pasta com as sagas do redux
│ 	│ 	│  	├── entitySaga.js
│ 	│ 	│  	└── index.js # arquivo exportando todas as sagas
│ 	│ 	├── slices # Pasta com as slices do redux
│ 	│ 	│  	├── entitySlice.js
│ 	│ 	│  	└── index.js  # arquivo exportando todas as slices
│ 	│ 	├─── store.js # Arquivo de configuração da store
│ 	│ 	└─── index.js  # arquivo exportando a store
│ 	├── theme # Pasta com os arquivos de cores e temas
│ 	├── utils # Pasta com os arquivos de validação, mascaras, formatações e outras funções/constantes utéis globais
├── App.js # Componente raiz da aplicação
├── README.md # Documentação básica do projeto
├── .eslintrc.js # Arquivo de configuração do ESLint
├── .prettierrc # Arquivo de configuração do Prettier
├── index.js # Arquivo de entrada para registrar a aplicaçào
├── package.json
└── yarn.lock
```
###  Api de referência para busca e listagem das musicas:
​
https://developer.spotify.com/documentation/web-api/reference/#/

## Executando o projeto
Antes de executar o projeto siga os passos [deste tutorial](https://developer.spotify.com/documentation/web-api/quick-start/) para gerar seu token de acesso na API do Spotify e o coloque no local correto;

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

```cl
yarn ios ou yarn android
```
