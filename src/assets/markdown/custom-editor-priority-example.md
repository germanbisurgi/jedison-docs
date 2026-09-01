```javascript
class MySpecificEditor extends Jedison.Editor {
  static priority () {
    return 10
  }

  static resolves (schema) {
    return schema['x-format'] === 'my-specific-format'
  }
}
```
