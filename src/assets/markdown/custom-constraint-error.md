```javascript
constraints: {
  'x-must-be-even': (context) => {
    const errors = []
    const schemaMustBeEven = context.schema['x-must-be-even']

    if (schemaMustBeEven) {
      const invalid = context.value % 2 !== 0

      if (invalid) {
        errors.push({
          type: 'error',
          path: context.path,
          constraint: 'x-must-be-even',
          messages: [
            'Value must be an even number.'
          ]
        })
      }
    }

    return errors
  }
}
```
