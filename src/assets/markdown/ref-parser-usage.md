```javascript
const schema = {
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/$defs/user"
    }
  },
  "$defs": {
    "user": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        }
      }
    }
  }
}

const refParser = new Jedison.RefParser()

const init = async () => {
  await refParser.dereference(schema)

  const jedison = new Jedison.Create({
    container: document.querySelector('#jedison-container'),
    theme: new Jedison.ThemeBootstrap5(),
    refParser: refParser,
    schema: schema
  })
}

init()
```