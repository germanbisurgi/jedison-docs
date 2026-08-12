```javascript
const jedison = new Jedison.Create({
  schema: {
    type: 'object',
    properties: {
      address: {
        type: 'object',
        properties: {
          street: { type: 'string' }
        }
      }
    }
  }
})

const streetInstance = jedison.getInstance('#/address/street')
console.log(streetInstance.getValue())
```
