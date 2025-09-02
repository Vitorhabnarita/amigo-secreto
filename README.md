# Amigo Secreto - Sorteador Online

##  Sobre o Projeto

Este é um sorteador de Amigo Secreto, desenvolvido como um projeto prático para aprofundar os conhecimentos em lógica de programação, manipulação de arrays e loops com JavaScript puro (Vanilla JS).

A aplicação permite que os usuários adicionem uma lista de participantes e, com um clique, realizem um sorteio aleatório para definir quem presenteia quem, garantindo que ninguém tire a si mesmo.


---

### Funcionalidades Implementadas

* **Adição de Participantes:** Permite adicionar nomes a uma lista, que é exibida dinamicamente na tela.
* **Validação de Entrada:**
    * Impede a adição de nomes vazios.
    * Impede a adição de nomes duplicados na lista.
* **Sorteio Aleatório:** Utiliza o algoritmo de embaralhamento Fisher-Yates para garantir uma aleatoriedade justa no sorteio.
* **Exibição de Resultados:** Mostra os pares sorteados de forma clara na interface (`Pessoa A -> Pessoa B`).
* **Reinicialização:** Um botão para limpar todos os dados (lista de amigos e sorteio), permitindo que um novo sorteio seja iniciado do zero.

---

###  Tecnologias Utilizadas

* HTML5
* CSS3
* **JavaScript (Vanilla JS)**

---

###  Lições Aprendidas

Este projeto foi um desafio fundamental para a prática de algoritmos e manipulação de arrays. A implementação do embaralhamento Fisher-Yates foi um aprendizado chave, especialmente a lógica de percorrer um array e trocar elementos de posição de forma aleatória. Além disso, o projeto reforçou a importância de validar os dados de entrada do usuário (nomes vazios e duplicados) para garantir a integridade da aplicação e evitar bugs no sorteio.

*(O HTML e o CSS foram fornecidos como base para o desafio. Minha responsabilidade foi desenvolver todo o arquivo `js/app.js` para implementar as funcionalidades e a interatividade da página.)*
