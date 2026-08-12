```javascript
// Without assertFormat: true, "format" is only an annotation - it doesn't
// actually reject invalid values.
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
