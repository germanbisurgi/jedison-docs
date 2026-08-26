```javascript
class RatingEditor extends Jedison.Editor {
  static resolves (schema) {
    return schema['x-format'] === 'rating'
  }

  build () {
    const container = document.createElement('div')
    const input = document.createElement('input')
    input.type = 'range'
    input.min = 1
    input.max = 5
    container.appendChild(input)
    this.control = { container, input }
  }

  addEventListeners () {
    this.control.input.addEventListener('input', () => {
      this.instance.setValue(Number(this.control.input.value), true, 'user')
    })
  }

  refreshUI () {
    this.control.input.value = this.instance.getValue()
  }

  sanitize (value) {
    return Number(value)
  }
}

const jedison = new Jedison.Create({
  container: document.getElementById('jedison-container'),
  theme: new Jedison.Theme(),
  schema: { type: 'number', 'x-format': 'rating' },
  customEditors: [RatingEditor]
})
```
