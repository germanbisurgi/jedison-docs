```javascript
const jedison = new Jedison.Create({
  schema: {
    type: 'string',
    format: 'email'
  },
  assertFormat: true
})

jedison.setValue('not-an-email')
console.log(jedison.getErrors())
```
