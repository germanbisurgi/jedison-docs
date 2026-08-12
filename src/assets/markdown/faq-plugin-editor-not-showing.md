```html
<!-- Load the plugin's library BEFORE Jedison creates the editor -->
<script src="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.js"></script>

<script type="module">
  console.log(typeof window.Quill) // must be 'function', not 'undefined'

  const jedison = new Jedison.Create({
    container: document.getElementById('jedison-container'),
    theme: new Jedison.Theme(),
    schema: {
      type: 'string',
      'x-format': 'quill'
    }
  })
</script>
```
