```javascript
class ColorSwatchArrayEditor extends Jedison.Editor {
  static resolves (schema, refParser) {
    let items = schema.items

    if (refParser && items) {
      items = refParser.expand(items)
    }

    return items && items['x-format'] === 'color'
  }

  // build(), addEventListeners(), refreshUI(), sanitize() as usual
}
```
