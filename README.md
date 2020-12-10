
<h1><center>Hortalivery</center></h1>

![Logotipo com o nome do projeto](./image/hortalivery.jpg)

<br>

Hortalivery surgiu logo no início do reprograma, com a ideia de ajudar meu pai e entregar qualidade com agilidade na casa das pessoas.
Gosto de pensar na ideia de que estamos aqui para colaborar com a sociedade e com o bem estar.

<br>

```
CRUD
```
### Objeto Produto

| Verbo  | Recurso                | Descrição                                          |
| ------ | ---------------------- | -------------------------------------------------- |
| GET    | `/products`            | Retornar todos os produtos                         |
| GET    | `/products/kits`       | Retornar todos os produtos caracterizados como kit |
| POST   | `/products`            | Cadastrar um novo produto                          |
| PUT    | `/products`            | Atualizar um produto específico                    |
| DELETE | `/products`            | Deletar um produto específico                      |

<br>

### Objeto Cliente

| Verbo  | Recurso                | Descrição                                          |
| ------ | ---------------------- | -------------------------------------------------- |
| GET    | `/clients`             | Retornar todos os clientes                         |
| POST   | `/clients`             | Cadastrar um novo cliente                          |

<br>

### Objeto Venda

| Verbo  | Recurso                | Descrição                                         |
| ------ | ---------------------- | ------------------------------------------------- |
| POST   | `/sales`               | cadastrar uma nova venda                          |
| POST   | `/sales/itens`         | Cadastra itens da venda                           |

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

<br>

```
REGRAS DO NEGÓCIO
```
<br>

<p>1 - O processo de venda só será concluído através da definição de concluído ou cancelado, o cliente não poderá sair do processo de montagem do Kit a não ser que, uma dessas fases sejam definidas.</p>
<br>

<p>2 - Ao selecionar um item Kit, o usuário será obrigado a informar os itens, seguindo a regra:</p>
<p>2.1 - Item a item;</p>
<p>2.2 - Que não seja menor ou maior a quantidade do Kit escolhido.</p> 
<br>

<p>-Exemplo:</p>
<p>Se a quantidade definida do kit "Semana Feliz" for composta por três itens, o usuário não poderá concluir a venda informando uma quantidade menor definida na escolha do Kit, caso ocorra, o sistema informará ao usuário que falta itens para conclusão do kit;</p>
<br>

<p>Se o usuário informar uma quantidade maior a escolha do Kit, o sistema informará ao usuário que a quantidade de itens ultrapassa a quantidade definida do Kit escolhido;</p>
<br>

<p>2.3 - Caso o usuário saia da sessão, ao retornar, o sistema dará continuidade ao processo de conclusão do Kit;</p>
<br>

<p>2.4 - A qualquer momento o usuário poderá utilizar de um mecanismo de saída (cancelar) , que deverá ser proposto a ele a cada interação do Kit;</p>
<br>

<p>3 - O processo de conclusão será compreendido pela montagem de todos os itens do Kit, seguido de uma mensagem ao usuário que deseja prosseguir com a compra, venda concluída com sucesso.</p>
<br>


```
PRÉ-REQUISITOS
```
<br>

Necessário ter instalado na sua máquina as tecnologias Node.JS, MongoDB e Heroku.

A API está sendo escutada no servidor local na porta `8080`, dessa forma, para todas as rotas serem acessadas localmente, use `http://localhost:8080/` antes do caminho da rota.

o Servidor em produção está rodando na URL `https://hortalivery.herokuapp.com/`

Configurar a variável de ambiente que é a URL do MongoDB.

Para clonar e executar a aplicação, precisa ter o [Git](https://git-scm.com), [Node.js v12.18.3](https://nodejs.org/en/) e [MongoDB](https://www.mongodb.com/) instalados.

<br>

```
INFORMAÇÕES DA API
```

$ git clone https://github.com/mdfs2020/hortalivery

# Entrar na pasta do repositório
$ cd hortalivery

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start

<br>


P.S  projeto está em fase de análises, testes e desenvolvimento para a liberação.