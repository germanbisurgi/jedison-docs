```javascript
// JSON Editor
const editor = new JSONEditor(document.getElementById('form'), {
  schema: mySchema,
  startval: { name: 'Alice' },
  theme: 'bootstrap4',
})

editor.on('change', () => {
  console.log(editor.getValue())
})

const errors = editor.validate()

// Jedison
const jedison = new Jedison.Create({
  container: document.getElementById('form'),
  schema: mySchema,
  data: { name: 'Alice' },
  theme: new Jedison.ThemeBootstrap4(),
})

jedison.on('change', () => {
  console.log(jedison.getValue())
})

const errors = jedison.getErrors()
```
