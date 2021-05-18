<h2 align="center">Projeto de Conclusão</h2>
<h3 align="center">Técnica de Programação</h3>
<h4 align="center">Aplicação desktop de uma pesquisa de endereço por cep e informações de um local.</h4>

<h4 align="center">Aplicação em Java <a href="https://github.com/guilhermerochas/ProjetoConclusaoDisciplina">GitHub</a> </h4>
<h1> </h1>

<center>

[![Latest Stable Version](https://img.shields.io/npm/v/yarn.svg)](https://www.npmjs.com/package/yarn)
![GitHub Repo stars](https://img.shields.io/github/stars/lbbergamo/ProjetoConclusaoDisciplina-backend?style=social)
![GitHub forks](https://img.shields.io/github/forks/lbbergamo/ProjetoConclusaoDisciplina-backend?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/lbbergamo/ProjetoConclusaoDisciplina-backend?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/lbbergamo/ProjetoConclusaoDisciplina-backend)
![GitHub top language](https://img.shields.io/github/languages/top/lbbergamo/ProjetoConclusaoDisciplina-backend)

</center>

<!--ts-->
   * [Requisitos](#gear-requisito-para-executar)
   * [Download do Projeto](#paperclip-download-do-projeto)
   * [Configurando o Projeto](#floppy_disk-configurando-o-projeto)
   * [Iniciando o projeto](#computer-iniciando-o-projeto)
   * [Requisições_e_Resposta](#page_with_curl-Requisições-e-Resposta)
   * [Features](#book-Features)
   * [Scripts](#memo-scripts)
   * [Exceções](#warning-Exceções)
   * [Tecnologias](#crystal_ball-tecnologias)
<!--te-->

<center>

## 👨‍🚀 Membros
</center>


<table align="center">
    <tr>
        <td align="center"><a href="https://github.com/lbbergamo"><img style="border-radius: 50%;"
                    src="https://avatars.githubusercontent.com/u/17437651?v=4" width="100px;"
                    alt="" /><br /><sub><b>Leandro Bergamo</b></sub></a><br /><a href="https://github.com/lbbergamo"
                title="Leandro Bergamo">👨‍🚀</a></td>
        <td align="center"><a href="https://github.com/guilhermerochas"><img style="border-radius: 50%;"
                    src="https://avatars.githubusercontent.com/u/59107569?v=4"
                    width="100px;" alt="" /><br /><sub><b>Guilherme Rocha</b></sub></a><br /><a
                href="https://github.com/guilhermerochas/" title="Guilherme Rocha">👨‍🚀</a></td>
    </tr>
</table>

## :paperclip: Download do projeto
```bash
# Clone este repositório

# Sem ssh
$ git clone https://github.com/lbbergamo/ProjetoConclusaoDisciplina-backend

# Com ssh 
$ git clone git@github.com:lbbergamo/ProjetoConclusaoDisciplina-backend.git
```
## :gear: Requisito para executar

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

```bash
# NodeJs 
> Superior ao 12
```

##  :floppy_disk: Configurando o projeto

1. Crie um arquivo na raiz do projeto com o nome ".env"

2. Digite o valor das variáveis de acordo com o seu banco de dados MySQL e a Porta
```
PORT=
GOOGLE_KEY=
GOOGLE_URL_GEOCODE=https://maps.googleapis.com/maps/api/geocode/
INFO_CEP_URL=http://cep.bldstools.com/
WEATHER_URL=https://api.openweathermap.org/data/2.5/weather
WEATHER_TOKEN=
AUTHORIZATION=
```

3. Para realizar o cadastrar o google key utilize o site https://developers.google.com/

4. Para conseguir o weather token acesse o site https://home.openweathermap.org/users/sign_in

## :page_with_curl: Requisições e Respostas

### CEP 

#### Requisição
```json
{
    "cep":"00000-000"
}
```

#### Retorno com sucesso

```json
{
    "CEP": "",
    "Endereco": {
        "logradouro": "",
        "bairro": "",
        "localidade": "",
        "uf": "",
        "cep": ""
    },
    "tempo": {
        "status": "céu limpo",
        "temperatura": 24
    },
    "googleMaps": {
        "latitude": -23,
        "longitude": -46
    }
}
```

## :computer: Iniciando o projeto
```bash
# Navegue até ele e instale todas as dependências
$ npm install

# Inicie o modo de desenvolvimento
$ npm run dev
```

## :memo: Scripts
```bash
# Inicia a aplicação em modo de desenvolvimento
$ npm run dev

# Compila o Typescript para Javascript, deixando a aplicação pronta para produção
$ npm run build

# Inicie a aplicação em modo de produção
$ npm start

# Roda os arquivos de testes
$ npm test
```
## :book: Features
- [X] Estrutura de pastas
- [X] Ambiente de Desenvolvimento
    - [ ] Configuração de teste
    - [ ] Docker
- [X] Primeiro deploy
- [x] CEP
    - [X] Realizar a consulta do CEP
        - [X] Utilizar a api `http://cep.bldstools.com/?cep=CEP_NUMBER`
    - [x] Realizar a consulta da logitude
        - [x] Utilizar a api `https://maps.googleapis.com/maps/api/geocode/json?address=CEP_NUMBER&key=MINHA_KEY`
    - [x] Retornar os dados conforme json abaixo
        ```json
        {
          "CEP": "11045-907",
          "Endereco": {
              "logradouro": "Rua Oswaldo Cruz, 266",
              "bairro": "Boqueirão",
              "localidade": "Santos",
              "uf": "SP",
              "cep": "11045907"
          },
          "tempo": {
              "status": "céu limpo",
              "temperatura": 24.89
          },
          "googleMaps": {
              "latitude": -23.9633391,
              "longitude": -46.3217163
          }
        }
        ```
- [x] Conclusão do README

## :warning: Exceções
```
1. ✅ Retorna erro 200 a consulta for feita com sucesso
2. ✅ Retorna erro 401 se o authorization não for valido
3. ✅ Retorna erro 404 não foi encontrado o cep
4. ✅ Retorna erro 500 ocorreu um erro
```

## :crystal_ball: Tecnologias

- [typescript](https://www.typescriptlang.org/docs/)
- [jest](https://jestjs.io/)
- [eslint](https://eslint.org/)
- [babel](https://babeljs.io/)
- [Node.js](https://nodejs.org/en/)
- [dotenv](https://www.npmjs.com/package/dotenv) 