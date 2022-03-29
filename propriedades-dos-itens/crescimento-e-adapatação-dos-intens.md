# flex-grow

- O crescimento do intem dentro do cantainer em relação aos espeços vazios.

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

    flex-direction: column;

    border: 1px dashed red;

    height: 150px;
}

.box div{
    border: 1px solid;
}

.box div:nth-child(2),
.box dvi:nth-child(3){
    flex-grow: 1;
}
.box div:nth-child(1){
    flex-grow: 2;
}
</sytle>

```