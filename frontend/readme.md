Criando ambiente para rodar aplicações react

Estrutura inicial
  (✔) Acessar terminal (executar: cmd)
  (✔) Criar e acessar pasta do projeto (executar: md project | cd project)
  (✔) Criar dentro de projects e acessar pasta frontend (executar: md frontend | cd frontend)
  (✔) Criar pasta source (executar: md src)
  (✔) Criar pasta public (executar: md public)
  (✔) Criar arquivo index.js em src (executar: touch src/index.js)
    (✔)Incluir com console.log("hello!")
      execute: vim src\index.js - inclua a instrução e execute :wq para salvar e sair do editor.
  (✔) Executar script index.js no terminal (executar: node src/index.js)
  
Geração de projeto/arquivo react
(✔) Gerar projeto react default na pasta project: 
    executar: yarn init -y
(✔) Importar bibliotecas react e react-dom 
    executar: yarn add react react-dom
(✔) Criar index.html em public com template vscode emmet ! 
    executar: touch index.html
  (✔) Adicionar tag <div id="app"></div> - Todo o conteudo do sistema será inserido nesta tag.

(✔)Transpilação de arquivos com Babel para que o browser entenda o codigo js moderno
   /**Babel: Transpila o codigo JS moderno para um JS que o browser entenda
   	Instalar as bibliotecas babel e loaders para transpilação de codigos em formato js entendivel pelo navegador
 	*/

  (✔)executar: yarn add @babel/cli @babel/core @babel/preset-env, @babel/preset-react 
  @babel/cli: executar linhas de comando do babel
  @babel/core:  
  @babel/preset-env: converte o codigo de um js moderno para uma versão mais antiga, baseado no ambiente da aplicação, procurando o que o browser não entende e gerando codigo para ser entendivel. Pode ser passado parametros de versão de navegador expecifico.  
  @babel/preset-react: Transpilação de arquivos em formato react para uma versão js mais antigo. 
  @babel/plugin-transform-runtime: 

  (✔) Criação de arquivo babel.config.js na pasta raiz de project
    module.exports = {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plu gins: ['@babel/plugin-transform-runtime'],
    };    

  (✔)Alteração de index.js para javascript moderno. Incluir função arrow function
  	 const somar = (a, b) => a + b;
	   console.log(somar(2, 3));

  (✔) Transpilação de codigo usando o babel (precisa ter instalado o @babel/cli). Será criado o arquivo public.bundle.js tendo origem o src/index.js
      ()Em scr/index.js criar função de soma com 2 parametros de entrada retornando a soma desses parametros.
      executar: yarn babel scr/index.js --out-file public/bundle.js para transpilação de código.

()Transpilação de arquivos com webpack para que o browser entenda o codigo react
/**Webpack: Transpila os codigos CSS, JPEG, PNG, entre outros para um JS que o browser entenda com o auxilio de arquivos loaders*/
/**Loaders: Bibliotecas chamadas pelo webpack para transpilar arquivos especificos num formato entendivel pelo navegador
    Ex: babel-loader, css-loader, file-loader, image-loader
*/

  (✔)Instação de bibliotecas:
    executar: yarn add webpack webpack-cli babel-loader
    webpack: biblioteca webpack: Transpilação de arquivos 
    webpack-cli: executar linhas de comando do webpack
    babel-loader: Chamado para carregar arquivos de extensões diferentes de JS. Citado em module->rules em webpack.config.js
  (✔)Criação de arquivo webpack.config.js
    const path = require('path');
    module.exports = {
      /**Localização do arquivo para ser transpilado*/
      entry: path.resolve(__dirname, 'src', 'index.js'),
      /**Localização do arquivo que será transpilado*/
      output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
      },
      /**Caminho onde contem a pasta public e seus arquivos  p/ serem carregados*/
      devServer: {
        contentBase: path.resolve(__dirname, 'public'),
      },
      module: {
        rules: [
          {
            /**Carrega arquivo somente com extensão .js*/
            test: /\.js$/,
            /**Excluir do carregamento a pasta node_modules*/
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
    };

  (✔) Converter o src/index.js para public/bundle.js
    Roda o servidor webpack subindo a aplicação para ser vista no browser em http://localhost:8080.
    executar: yarn webpack --node development

    Para monitorar e carregar automaticamente as alterações dos arquivos
    executar: yarn add webpack-dev-server

    Para subir o servidor Webpack no endereço http://localhost:8080.
    executar: yarn webpack-dev-server --mode development

  ()Criando script para execução de webpack-dev-server com yarn start. Incluir no package.json
    "scripts": {
    "start": "webpack-dev-server --mode development"
  },

Atenção:
-> cli: execução de linha de comando das bibliotecas
-> preset: conjunto de configurações criados por terceiros que podem ser utilizadas na aplicação
-> Package.json - incluir ("type": "module") para permitir rodar arquivos javascript ecma6

(✔) index.js import react e react-dom - 
    Passar conteudo para index.html através de render(<h1>Texto</h1>,document.getElementId("app"))
(✔) 

Por fim, os comandos acima criam o ambiente para se trabalhar com arquivos reacts, sem utilizar os bodyplacer como  o create react-app




