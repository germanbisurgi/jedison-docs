```javascript
const jedison = new Jedison.Create({
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'integer' }
    }
  },
  data: { name: 'Ada', age: 30 }
})

console.log(jedison.getValue())
// { name: 'Ada', age: 30 }
```
