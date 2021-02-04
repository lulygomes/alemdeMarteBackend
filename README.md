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
<hr />



__*POST:*  http://api.com/like/photo/:PHOTO-ID__
**_Requer token no Header da requisição_**

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
<hr />



__*GET:*  http://api.com/like/photo/:PHOTO-ID__
**_Requer token no Header da requisição_**

Retorna uma lista com os likes feitos na foto.


_*Response:*_
```
[
  {
    "id": "b743394d-75fc-452b-8a77-d8b90f84d164",
    "photo_id": "785642",
    "user_id": "0a86917f-79ef-459d-808d-62b6607cae17",
    "created_at": "2021-02-04T13:25:00.000Z",
    "updated_at": "2021-02-04T13:25:00.000Z"
  }, 
  { ... },
  { ... }, 
]
```
<hr />



__*GET:*  http://api.com/like__
**_Requer token no Header da requisição_**

Retorna uma lista com os todos likes feitos.


_*Response:*_
```
[
  {
    "id": "b743394d-75fc-452b-8a77-d8b90f84d164",
    "photo_id": "785642",
    "user_id": "0a86917f-79ef-459d-808d-62b6607cae17",
    "created_at": "2021-02-04T13:25:00.000Z",
    "updated_at": "2021-02-04T13:25:00.000Z"
  },
  {
    "id": "b102bd3c-50d4-4723-a79b-4227b74ecccc",
    "photo_id": "785645",
    "user_id": "0a86917f-79ef-459d-808d-62b6607cae17",
    "created_at": "2021-02-04T13:31:08.000Z",
    "updated_at": "2021-02-04T13:31:08.000Z"
  },
  { ... },
  { ... }, 
]
```
<hr />



__*GET:*  http://api.com/photos__
**_Requer token no Header da requisição_**

Retorna uma lista com os fotos fornecidas pela NASA, incluindo total de likes e se usuário deu um like na foto


_*Response:*_
```
[
{
    "id": 785640,
    "sol": 2991,
    "camera": {
      "id": 20,
      "name": "FHAZ",
      "rover_id": 5,
      "full_name": "Front Hazard Avoidance Camera"
    },
    "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02991/opgs/edr/fcam/FLB_663015554EDR_F0842120FHAZ00302M_.JPG",
    "earth_date": "2021-01-04",
    "rover": {
      "id": 5,
      "name": "Curiosity",
      "landing_date": "2012-08-06",
      "launch_date": "2011-11-26",
      "status": "active"
    },
    "likes": 3,
    "like": true
  },
  {
    "id": 785641,
    "sol": 2991,
    "camera": {
      "id": 20,
      "name": "FHAZ",
      "rover_id": 5,
      "full_name": "Front Hazard Avoidance Camera"
    },
    "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02991/opgs/edr/fcam/FRB_663015554EDR_F0842120FHAZ00302M_.JPG",
    "earth_date": "2021-01-04",
    "rover": {
      "id": 5,
      "name": "Curiosity",
      "landing_date": "2012-08-06",
      "launch_date": "2011-11-26",
      "status": "active"
    },
    "likes": 1,
    "like": false
  },
  {
    "id": 785642,
    "sol": 2991,
    "camera": {
      "id": 20,
      "name": "FHAZ",
      "rover_id": 5,
      "full_name": "Front Hazard Avoidance Camera"
    },
    "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02991/opgs/edr/fcam/FLB_663015329EDR_F0842116FHAZ00322M_.JPG",
    "earth_date": "2021-01-04",
    "rover": {
      "id": 5,
      "name": "Curiosity",
      "landing_date": "2012-08-06",
      "launch_date": "2011-11-26",
      "status": "active"
    },
    "likes": 2,
    "like": true
  },
  { ... },
  { ... }, 
]
```
