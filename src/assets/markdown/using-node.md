```javascript
const Jedison = require('jedison')

const jedison = new Jedison.Create({
  schema: {
    title: 'Person',
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      age: {
        type: 'integer',
        minimum: 0,
      },
      email: {
        type: 'string',
        format: 'email',
      },
    },
    required: [
      'name',
      'age'
    ],
  },
})

jedison.setValue({
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
})

console.log(jedison.getErrors())

jedison.setValue({
  id: 123,
  price: 'free',
})

console.log(jedison.getErrors())
```