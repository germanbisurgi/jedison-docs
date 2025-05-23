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
      }
    },
    required: [
      'name',
      'age'
    ],
  },
})

jedison.setValue({
  name: 'Alice',
  age: 30
})

console.log(jedison.getErrors())

// Valid: outputs is an empty array
// []

jedison.setValue({
  id: 123,
  price: 'free',
})

console.log(jedison.getErrors())

// Invalid: outputs is an array of errors
// [
//   {
//     type: 'error',
//     path: '#',
//     constraint: 'required',
//     messages: ['Must have the required properties: name, age.']
//   }
// ]
```