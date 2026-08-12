```javascript
const jedison = new Jedison.Create({
  container: document.getElementById('jedison-container'),
  theme: new Jedison.Theme(),
  schema: {
    type: 'object',
    'x-format': 'nav-vertical',
    properties: {
      organization: {
        type: 'object',
        'x-format': 'nav-vertical',
        properties: {
          name: { type: 'string' }
        }
      }
    }
  }
})

// Activates the "organization" tab and scrolls its "name" field into view.
jedison.navigateTo('#/organization/name')
```
