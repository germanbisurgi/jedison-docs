```javascript
class MyCustomEditor extends Jedison.Editor {
  static resolves(schema) {
    return schema['x-format'] === 'my-custom'
  }
}

const jedison = new Jedison.Create({
  customEditors: [MyCustomEditor]
})
```