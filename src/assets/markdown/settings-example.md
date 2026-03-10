```javascript
const jedison = new Jedison.Create({
  settings: {
    apiUrl: 'https://api.example.com',
    formatDate: (value) => new Date(value).toLocaleDateString()
  }
})
```