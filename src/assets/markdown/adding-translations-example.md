```javascript
const jedison = new Jedison.Create({
  language: 'fr',
  translations: {
    fr: {
      errorRequired: 'Doit avoir les propriétés requises : {{ required }}.',
      errorMinLength: 'Doit comporter au moins {{ minLength }} caractères.',
      arrayAdd: 'Ajouter un élément',
      arrayDelete: "Supprimer l'élément"
    }
  }
})
```
