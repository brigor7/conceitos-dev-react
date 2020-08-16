O repository conceitos-dev-react traz alguns projetos usando react, typescript.
As pastas frontend e backend estão integradas. Estas não se integram com o conteudo da pasta inicial ./
Na pasta frontend, o readme.md informa os passos para geração do ambiente para desenvolvimento com react.

Criação de projeto com typescript

() GIT - Versionar aplicação 
  ()git init 
  () touch .gitignore
    ()  /node_modules 
        yarn.lock 
        .gitignore
  () git commit -m "first commit"
  () git remote add origin https://github.com/brigor7/conceitos-dev-react.git
  () git push -u origin master

() Criação de projeto typescript com pasta src
  executar: md typescript > md src

() Criar projeto react sem parametros default
  yarn init -y

() Importar bibliotecas
  () yarn add typescript -D  //Importar biblioteca typescript -D dependencia de desenvolvimento
  () yarn add express        //Importar biblioteca express
  () yarn add @types/express -D //Importar help dos metodos express para visualizar no vscode

() Criar index.ts
  () touch src/index.ts
  () Instaciar app com express
  () Criar rota get()


() Configurar e subir aplicação com typescript
  () yarn tsc --init //Para criar configurações iniciais do typescript em tsconfig.json
  
  () Incluir dir para geração de js pelo tsc em tsconfig.json
    "outDir": "./dist"
  () yarn yarn tsc ou tsc src/index.ts//Para gerar index.js atraves do  index.ts na pasta out_dir do tsconfig.json. o comando tsc copia a estrutura da pasta src para dist. 

() Package.json - script para iniciar aplicação através do comando yarn start
  ()"scripts": { 
      "start": "nodemon dist/index.js"
    },
  ()yarn start


