```html
<div id="jedison-container"></div>

<script type="module">
    import Jedison from 'jedison'

    const jedison = new Jedison.Create({
        container: document.querySelector('#jedison-container'),
        theme: new Jedison.Theme(),
        schema: {}
    })
</script>
```