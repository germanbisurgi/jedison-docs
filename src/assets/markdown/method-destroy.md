```javascript
const jedison = new Jedison.Create({
  container: document.getElementById('jedison-container'),
  theme: new Jedison.Theme(),
  schema: { type: 'object', properties: { name: { type: 'string' } } }
})

// Later, e.g. when navigating away or swapping to a different schema:
jedison.destroy()
```
