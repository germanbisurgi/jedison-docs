```javascript
constraints: {
  'x-my-constraint': (context) => {
    const errors = []
    const schemaMyConstraint = context.schema['x-my-constraint']

    if (schemaMyConstraint) {
      const invalid = context.value !== schemaMyConstraint

      if (invalid) {
        errors.push({
          type: 'warning',
          path: context.path,
          constraint: 'x-my-constraint',
          messages: [
            `Value should be equal to "${schemaMyConstraint}".`
          ]
        })
      }
    }

    return errors
  }
}
```