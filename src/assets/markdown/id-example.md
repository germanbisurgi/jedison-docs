```javascript
// Two Jedison instances on the same page - the id prefix keeps their
// generated element ids/for attributes from colliding.
const jedisonA = new Jedison.Create({
  container: document.getElementById('form-a'),
  schema: mySchema,
  id: 'form-a'
})

const jedisonB = new Jedison.Create({
  container: document.getElementById('form-b'),
  schema: mySchema,
  id: 'form-b'
})
```
