```javascript
const jedison = new Jedison.Create({
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'integer' }
    }
  }
})

jedison.setValue({ name: 'Grace', age: 34 })

console.log(jedison.getValue())
// { name: 'Grace', age: 34 }
```
