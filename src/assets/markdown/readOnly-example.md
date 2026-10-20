```javascript
const jedison = new Jedison({
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      tags: { type: 'array', items: { type: 'string' } }
    }
  },
  data: { name: 'Jane', tags: ['json', 'forms'] },
  editJsonData: true,
  enableCollapseToggle: true,
  readOnly: true
})
jedison.render(document.getElementById('container'))
```
