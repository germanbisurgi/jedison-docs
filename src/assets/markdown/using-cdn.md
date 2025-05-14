```html
<script src="https://cdn.jsdelivr.net/npm/jedison@0.1.1/dist/umd/jedison.umd.js"></script>

<div id="jedison-container"></div>

<script>
    const jedison = new Jedison.Create({
        container: document.querySelector('#jedison-container'),
        theme: new Jedison.Theme(),
        schema: {}
    })
</script>
```