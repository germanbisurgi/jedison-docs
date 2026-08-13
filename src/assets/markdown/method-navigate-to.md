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

jedison.navigateTo('#/organization/name')
```
