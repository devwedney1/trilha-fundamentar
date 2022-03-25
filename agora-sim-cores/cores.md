# Cores

Usamos CSS para alterar cores do nosso documento.

## Tipos

* background-color (para caixas)
* color (para textos)
* border-color (para-caixas)
* outros...

## Valores

Podemos definir os valorespor 

* palavras-chaves (blue, transparent)
* hexadeciamal (#990011)
* funções rgb,rgba, hsl, hsla

```css
elemet{
    /* Keyword values */
    color: currentcolor;

    /* <named-color> values */

    color: red;
    color: orange
    color: tan;
    color: rebeccapurple;

    /* <hex-color> valeus 0-F */
    color: #090; /* RED GREN BLUE */
    color: #009900;
    color: #090a;
    color: #009900aa;

    /* <rgb()> values */
    color: rgb(34, 12, 64, 0.6) /* 0-255 */
    color: rgb(34, 12, 64, 0.6)
    color: rgb(34 12 64 / 0.6)
    color: rgb(34 12 64 / 0.3)
    color: rgb(34.0 12 64 / 60%)
    color: rgb(34.6 12 64 / 30%)

    /* <hsl()> values */
    color: hsla(30, 100%, 50%, 0.6) /* Hue - saturation - Lumiance */
    color: hsla(30, 100%, 50%, 0.6)
    color: hsl(30 100% 50% / 0.6)
    color: hsl(30 100% 50% / 0.6)
    color: hsl(30.0 100% 50% / 60%)
    color: hsl(30.2 100% 50% / 60%)

    /* Global values */
    color: inherit;
    color: initial;
    color: unset;
}

## Referência 

https://developer.mozilla.org/en-us/docs/web/CSS/color_value