# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendant combinator

* Identificado por um espaço entre os seletores.
* Busca um elemento dentro de outro 

```CSS
body article h2
```

## Child combinator

* Identificado pelo sinal `>` entre dois seletores
* Sleciona somente o elemento que é filho direto do pai
* Elementos depois do filho direto serão desconsiderados

```CSS
body > ul > li
```

## Adjacent sibling combinator

* Identificado pelo o sinal `+` entre dois seletores
* Seleciona somente o elemento do lado direto que é irmão na hierarquia

```CSS
h1 + p
```

## General sibling combinator

* Idenficado pelo sinal `~` entre dois seletores
* Seleciona todos os elementos irmãos

```CSS
h1 ~ p
```

## Utilizando combinadores

```CSS
ul > li[class="red"]
```

## Dica

* Seletores muito específicos tendem a causar dificuldades no reuso das regaras de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabaho muito mais eficiente.