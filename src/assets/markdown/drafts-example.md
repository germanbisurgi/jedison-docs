```javascript
const jedison = new Jedison.Create({
  schema: {
    // Declare the draft the schema was written for
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {
      // Draft 7 tuple: "items" as array + "additionalItems"
      point: {
        type: 'array',
        items: [{ type: 'number' }, { type: 'number' }],
        additionalItems: false,
      },
      card: { type: 'string' },
      billing: { type: 'string' },
    },
    // Draft 7 "dependencies"
    dependencies: {
      card: ['billing'],
    },
  },
})

jedison.setValue({ point: [1, 2, 3], card: '4111' })

console.log(jedison.getErrors())

// Errors:
// - "#"         dependentRequired: Must have the required properties: billing.
// - "#/point/2" the third item is not allowed (additionalItems: false)

// Keep keywords next to "$ref" in draft 7 and older
const other = new Jedison.Create({
  schema: { $schema: 'http://json-schema.org/draft-07/schema#', /* ... */ },
  keepRefSiblings: true,
})
```
