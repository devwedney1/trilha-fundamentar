# flex 

- shorthand
- flex-grow flex-shrink flex-basis
- podemos ter 1, 2 ou 3 valores

```HTML

<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

```

```CSS

<style>
.box{
    display: flex;

    border: 1px dashed red;
}

.box div{
    border: 1px solid;
    flex: 0 1 40px;
}
</style>