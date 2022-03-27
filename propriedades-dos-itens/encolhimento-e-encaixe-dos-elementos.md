# flex-shrink

- O encolher do intem dentro do cantainer.

```HTML

<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

```

```CSS

<sytle>
.box{
    display: flex;
    flex-direction: column;

    border: 1 px dashed red;

    height: 180px;
}

.box div{
    flex-basis: 80px;
    border: 1px solid;
}

.box div:nth-child(2),
.box div:nth-child(3){
    flex-shrink: 4;
}
</style>

```