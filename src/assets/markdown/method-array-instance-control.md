```javascript
const jedison = new Jedison.Create({
  schema: {
    type: 'object',
    properties: {
      tags: {
        type: 'array',
        items: { type: 'string' }
      }
    }
  }
})

const tagsInstance = jedison.getInstance('#/tags')

tagsInstance.addItem()
tagsInstance.addItemAfter(0)
tagsInstance.move(2, 0)
tagsInstance.deleteItem(1)
```
