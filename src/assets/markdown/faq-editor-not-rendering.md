```javascript
// Both are required for editor mode - missing either one is the most
// common reason nothing shows up.
const jedison = new Jedison.Create({
  container: document.getElementById('jedison-container'),
  theme: new Jedison.Theme(),
  schema: mySchema
})
```
