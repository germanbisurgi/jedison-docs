```html
<form novalidate>
  <div id="jedison-container"></div>
  <button type="submit">Submit</button>
</form>

<script type="module">
  const jedison = new Jedison.Create({
    container: document.getElementById('jedison-container'),
    theme: new Jedison.Theme(),
    schema: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' }
      }
    }
  })

  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    jedison.showValidationErrors()
  })
</script>
```
