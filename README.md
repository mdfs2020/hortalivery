
<h1><center>Hortalivery</center></h1>

![Logotipo com o nome do projeto](./image/hortalivery.jpg)

<br>

Hortalivery surgiu logo no início do reprograma, com a ideia de ajudar meu pai e entregar qualidade com agilidade na casa das pessoas.

<br>

```
CRUD
```
### Objeto Produto

| Verbo  | Recurso                | Descrição                                          |
| ------ | ---------------------- | -------------------------------------------------- |
| POST   | `/products`            | Cadastrar um novo produto                          |
| GET    | `/products`            | Retornar todos os produtos                         |
| GET    | `/products/kits`       | Retornar todos os produtos caracterizados como kit |
| PUT    | `/products`            | Atualizar um produto específico                    |
| DELETE | `/products`            | Deletar um produto específico                      |

<br>

### Objeto Cliente

| Verbo  | Recurso                | Descrição                                          |
| ------ | ---------------------- | -------------------------------------------------- |
| POST   | `/clients`             | Cadastrar um novo cliente                          |
| GET    | `/clients`             | Retornar todos os clientes                         |

<br>

### Objeto Venda

| Verbo  | Recurso                         | Descrição                                         |
| ------ | ----------------------          | ------------------------------------------------- |
| POST   | `/products/sales`               | Cadastrar uma nova venda                          |
| POST   | `/products/sales/itens`         | Cadastrar itens da venda                          |
| POST   | `/products/sales/itens`         | Cancelar uma venda                                |
| GET    | `/products/sales/concluded`     | Retornar todas as vendas concluídas               |
| GET    | `/products/sales/canceled`      | Retornar todas as vendas canceladas               |
| GET    | `/products/sales/pending`       | Retornar todas as vendas pendentes                |

<br>

```
EXEMPLOS PRÁTICOS
```

<p>- [] O usuário loga no sistema;</p>
<p>- [] O usuário seleciona a opção "Comprar KIT";</p>
<p>- [x] O sistema retorna pra ele uma array dos produtos Kit;</p>
<p>- [x] O usuário seleciona o produto Kit;</p>
<p>- [x] O sistema retorna uma lista com todos os produtos;</p> 
<p>- [x] O usuário seleciona os produtos com a quantidade definida pela escolha do Kit;</p>
<p>- [x] O sistema retorna uma lista com o kit montado;</p>


```
REGRAS DO NEGÓCIO
```

- [x]O processo de venda só será concluído através da definição de concluído ou cancelado, o cliente não poderá sair do processo de montagem do Kit a não ser que, uma dessas fases sejam definidas.


- [x]Ao selecionar um item Kit, o usuário será obrigado a informar os itens, seguindo a regra:

- [x]Item a item;
- [x]Que não seja menor ou maior a quantidade do Kit escolhido.

```
Exemplo:
Se a quantidade definida do kit "Semana Feliz" for composta por três itens, o usuário não poderá concluir a venda informando uma quantidade menor definida na escolha do Kit, caso ocorra, o sistema informará ao usuário que falta itens para conclusão do kit;
```

```
Se o usuário informar uma quantidade maior a escolha do Kit, o sistema informará ao usuário que a quantidade de itens ultrapassa a quantidade definida do Kit escolhido;
```

- [x]Caso o usuário saia da sessão, ao retornar, o sistema dará continuidade ao processo de conclusão do Kit;

- [x]A qualquer momento o usuário poderá utilizar de um mecanismo de saída (cancelar) , que deverá ser proposto a ele a cada interação do Kit;

- [x]O processo de conclusão será compreendido pela montagem de todos os itens do Kit, seguido de uma mensagem ao usuário que deseja prosseguir com a compra, venda concluída com sucesso.


```
PRÉ-REQUISITOS
```
<br>

Necessário ter instalado na sua máquina as tecnologias Node.JS, MongoDB e Heroku.

A API está sendo escutada no servidor local na porta `8080`, dessa forma, para todas as rotas serem acessadas localmente, use `http://localhost:8080/` antes do caminho da rota.

O Servidor em produção está rodando na URL `https://hortalivery.herokuapp.com/`

Configurar a variável de ambiente, URL do MongoDB.

Para clonar e executar a aplicação, precisa ter o [Git](https://git-scm.com), [Node.js v12.18.3](https://nodejs.org/en/) e [MongoDB](https://www.mongodb.com/) instalados.

<br>

```
ESTRUTURA E COMANDOS PARA EXECUÇÃO DA API
```

```
hortalivery
├── src
│   ├── controllers
|       ├── clientsController.js
|       ├── productsController.js
|       ├── salesController.js
│   ├── models
|       ├── clients.js
|       ├── products.js
|       ├── sales.js
│   ├── routes
│       ├── clientsRoute.js
│       ├── index.js
|       ├── productsRoute.js
|   ├── app.js
├── package.json
├── server.js
```

$ git clone https://github.com/mdfs2020/hortalivery

# Entrar na pasta do repositório
$ cd hortalivery

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start

<br>


P.S Primeira liberação sendo entregue em 12 de Dezembro de 2020.
O projeto continuiará pós programa, em desenvolvimento e testes.