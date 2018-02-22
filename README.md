# Desafio de auto-complete e busca disponibilidade

[![licence mit](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://hemersonvianna.mit-license.org/)
[![issues](https://img.shields.io/github/issues/descco-arena/search-widget-mean-mern.svg?style=flat-square)](https://github.com/descco-arena/search-widget-mean-mern/issues)

Widget Responsivo

Primeira aplicação com NodeJS

##Estrutura Front-End:

###Arquiterura CSS

 - **Pré-processador**: SASS/SCSS
 - **Sintaxe**: SCSS
 - **Metodologia**: ITCSS - Inverted Triangle CSS


### Arquitetura JavaScript

 - **Biblioteca**: jQuery
 - **Plugins**: Pickadate e Typeahead


### Automação e gerenciador de dependências

- GruntJS
- Bower
- NPM


### Outros

- **Ícones**: Convertidas em fonte, "chanllegeicons"
- **Fontes**: Gotham Light, Gotham Medium e Gotham Bold.


##Estrutura Back-End:

- **Plataforma**: NodeJS
- **Framework**: Express
- **Biblioteca**: Mongoose
- **Banco**: MongoDB


##Instalação o mongodb

**MacOs**

```
sudo brew install mongodb
```

**Linux**

```
sudo apt-get install mongodb
```

##Teste automatizado

 - **Front-End:** Karma / Jasmine / Jasmine-jQuery

 - **Back-End:** Mocha / Chai / Sinon / SuperTest

**Comando:**

```
npm test
```



##Procedimento(Testado no ubuntu)

>1. *git clone projeto*
2. *cd projeto*
3. *sudo npm install --unsafe-perm*
4. *npm start* // http://localhost:9000


obs: O banco será importado quando for executado o terceiro passo, requerendo que esteja instalado o mongoDB.


###Importar o banco manualmente

```
cd db/
```

```
mongoimport --db desafiohu --collection hotels --type json --file hotels.json --jsonArray
```

```
mongoimport --db desafiohu --collection availability --type json --file availability.json --jsonArray
```

## Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -m 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

## Log

Check [Releases](https://github.com/descco-arena/search-widget-mean-mern/releases) for detailed changelog.

## License

[MIT license](http://hemersonvianna.mit-license.org/) © Hemerson Vianna
