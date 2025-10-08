```javascript
const jedison = new Jedison({
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'number' }
    }
  },
  editJsonData: true
})
jedison.render(document.getElementById('container'))
```