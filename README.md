# Além de Marte API 

Esta API consome diretamente a API da [NASA](https://api.nasa.gov/), que fornece as fotos mais recentes tiradas em Marte. Tendo como funcionalidade extra a criação de um usuário, salvar os Likes de cada usuário e o total de Likes por foto. 

## Guia de instalação

### Pré requisito
Como pré requisito é necessário ter [Node.Js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/) instalado na sua máquina. 

#### Clone 
Clone o repositório para sua máquina.
```git clone https://github.com/lulygomes/alemdeMarteBackend.git```

### Instalação

Com o terminal dentro da pasta que foi clonada rode os seguintes comandos:
```
yarn
yarn dev:server
```

## Rotas

__*POST:*   http://api.com/user/:USER-NAME__

Cria o usuário caso não exista e retornar o user com token.


_*Response:*_
```
{
  "user": {
    "name": "USER-NAME",
    "id": "USER-ID",
    "created_at": "2021-02-04T13:33:32.000Z",
    "updated_at": "2021-02-04T13:33:32.000Z"
  },
  "token": "USER-TOKEN"
}
```



__*POST:*  http://api.com/like/photo/:PHOTO-ID__

Cria um like na foto atrelado ao ID do usuário e soma um no total de likes. 
Caso já exista um like na foto com o ID do usuário, o mesmo é removido e subtraído um do total de likes. 


_*Response:*_
```
{
  "id": "c93c0a1f-53c1-42eb-9bcb-33b50efc1ce6",
  "photo_id": "785642",
  "likes": 3,
  "created_at": "2021-02-04T13:25:00.000Z",
  "updated_at": "2021-02-04T18:55:26.000Z"
}
```