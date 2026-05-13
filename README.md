# ListaApp

Aplicativo simples de lista de tarefas feito com React Native + Expo para praticar estado, inputs, eventos e renderizacao de listas.

## Sobre o projeto

O ListaApp permite:

- Adicionar tarefas
- Listar tarefas em tela
- Limpar toda a lista com um botao

Este projeto foi criado com foco em aprendizado e experimentacao com componentes basicos do React Native.

## Tecnologias

- Expo
- React
- React Native
- React Native Web

## Pre-requisitos

- Node.js 18 ou superior
- npm

Opcional:

- Expo Go (Android/iOS) para testar no celular
- Android Studio ou Xcode para emuladores

## Como executar

1. Clone o repositorio:

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto:

```bash
cd ListaApp
```

3. Instale as dependencias:

```bash
npm install
```

4. Inicie o projeto:

```bash
npm start
```

Depois de iniciar, o Expo exibira opcoes para abrir no navegador, emulador ou app Expo Go.

## Scripts disponiveis

- Iniciar servidor Expo:

```bash
npm start
```

- Executar no Android:

```bash
npm run android
```

- Executar no iOS:

```bash
npm run ios
```

- Executar na Web:

```bash
npm run web
```

## Estrutura do projeto

```text
ListaApp/
|- App.js
|- index.js
|- app.json
|- eas.json
|- package.json
|- assets/
```

## Melhorias futuras

- Remover tarefa individual
- Persistir tarefas em armazenamento local
- Adicionar validacoes e feedback visual
- Melhorar estilos e responsividade

## Troubleshooting rapido

- Se ocorrer erro de cache do Expo:

```bash
npx expo start -c
```

- Se faltar dependencia:

```bash
npm install
```

## Licenca

Este projeto pode ser usado para fins de estudo.
