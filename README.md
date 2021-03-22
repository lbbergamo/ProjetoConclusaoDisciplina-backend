<h1 align="center">Projeto de Conclusão</h1>
<h1 align="center">Tecnica de Programação</h1>

<center>

[![Latest Stable Version](https://img.shields.io/npm/v/yarn.svg)](https://www.npmjs.com/package/yarn)
![GitHub Repo stars](https://img.shields.io/github/stars/lbbergamo/ProjetoConclusaoDisciplina-backend?style=social)
![GitHub forks](https://img.shields.io/github/forks/lbbergamo/ProjetoConclusaoDisciplina-backend?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/lbbergamo/ProjetoConclusaoDisciplina-backend?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/lbbergamo/ProjetoConclusaoDisciplina-backend)
![GitHub top language](https://img.shields.io/github/languages/top/lbbergamo/ProjetoConclusaoDisciplina-backend)

</center>

## :paperclip: Download do projeto
```bash
# Clone este repositório

# Sem ssh
$ git clone https://github.com/lbbergamo/ProjetoConclusaoDisciplina-backend

# Com ssh 
$ git clone git@github.com:lbbergamo/ProjetoConclusaoDisciplina-backend.git
```

## :book: Features
- [ ] Estrutura de pastas
- [ ] Ambiente de Desenvolvimento
    - [ ] Configuração de teste
    - [ ] Docker
- [ ] Primeiro deploy
- [ ] CEP
    - [ ] Realizar a consulta do CEP
        - [ ] Utilizar a api `http://cep.bldstools.com/?cep=CEP_NUMBER`
    - [ ] Realizar a consulta da logitude
        - [ ] Utilizar a api `https://maps.googleapis.com/maps/api/geocode/json?address=CEP_NUMBER&key=MINHA_KEY`
        - [ ] Salvar em um banco de dados
            - [ ] Utilizar firebase ou banco de dados da azure
    - [ ] Retornar os dados conforme json abaixo
        ```json
        {
          "CEP": "11040-010",
          "Endereco": {
              "logradouro": "Rua Alexandre Fleming",
              "bairro": "Aparecida",
              "localidade": "Santos",
              "uf": "SP",
              "cep": "11040010"
          },
          "tempo": {
            "status": "chovendo",
            "temperatura": "23 graus"
          },
          "googleMaps": {
            "latitude": "-23.9736663",
            "longitude": "-46.3105719"
          }
        }
        ```
- [ ] Conclusão do README

