
<h1><center>Hortalivery</center></h1>

Tem alguém que vai se beneficiar do meu projeto e precisa da minha voz.
O Hortalivery surgiu logo no início do reprograma, a ideia da IPI é contribuir, apoiar e estimular práticas alimentares saudáveis.
Gosto de pensar na ideia de que estamos aqui para colaborar com a sociedade e com bons hábitos alimentares.

<h2>Pré-requisitos</h2>

Para utilizar essa API, é necessário ter instalado na sua máquina as tecnologias Node.JS e MongoDB.

<h2>Utilização</h2>

Para inicialiazar o server:
```
npm start
```

<h2>Rotas</h2>

A API está sendo escutada na porta `x`, dessa forma, para todas as rotas serem acessadas localmente, use `http://localhost:x/` antes do caminho da rota


Serão usados os métodos:

- POST 

- GET 

- PUT 

- DELETE


<h2>Exemplos Práticos</h2>

1 - O usuário loga no sistema;
2 - O usuário seleciona a opção "Comprar KIT";
3 - O sistema retorna pra ele uma array com os produtos;
4 - O usuário seleciona um dos produtos (kit);
5 - O sistema retorna uma lista para ele com as opções por categoria (exceção a kit); 
6 - O usuário seleciona os itens;
7 - O sistema retorna uma lista com o kit montado;


<h2>Regras de Negócio</h2>

1 - O processo de venda só será concluído através da definição de concluído ou cancelado, o cliente não poderá
sair do processo de montagem do kit a não ser que uma dessas duas fases seja definida.

2 - Ao selecionar um item kit, o usuário será obrigado a informar os itens, sendo esse: 
2.1 - Item a item;
2.2 - Que não seja menor ou maior a quantidade do kit. 
Por exemplo:
Se a quantidade definida do kit "Semana Feliz" for composta por três itens, o usuário não poderá concluir a venda informando 
uma quantidade menor ao kit, o sistema informará ao usuário que falta itens para conclusão do kit;
Se o usuário informar uma quantidade maior ao kit, o sistema informará ao usuário que a quantidade de itens ultrapassa a 
quantidade esperada;
2.3 - Caso o usuário saia da sessão, ao retornar, o sistema dará continuidade ao processo de conclusão do kit;
2.4 - A qualquer momento o usuário poderá utilizar de um mecanismo de saída (cancelar) , que deverá ser proposto a ele a 
cada informação de itens no kit;

3 - O processo de conclusão será compreendido pela montagem de todos os itens do kit seguido de uma mensagem ao usuário que
deseja prosseguir com a compra, do contrário, o processo será cancelado.

O objeto venda
1 - cd_produto (produto kit)
2 - cd_cliente (cliente da compra)
3 - tp_situacao (situação da compra)
4 - it_venda (array de produtos)

### Referências de hábitos saudáveis:

1. 
2. 
3. 
4. 
5. 

P.S Ressalto que, o projeto está em fase de análises, testes e desenvolvimento para a liberação.