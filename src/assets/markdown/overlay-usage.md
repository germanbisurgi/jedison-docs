```javascript
const schema = {
  "type": "object",
  "title": "Profile",
  "properties": {
    "name": { "type": "string", "title": "Name" },
    "bio": { "type": "string", "title": "Bio" },
    "ssn": { "type": "string", "title": "SSN" }
  }
}

const overlay = {
  "overlay": "1.0.0",
  "info": { "title": "Presentation overlay", "version": "1.0.0" },
  "actions": [
    { "target": "$.properties.bio", "update": { "x-format": "textarea" } },
    { "target": "$.properties.ssn", "update": { "x-hidden": true } },
    { "target": "$.properties.name", "update": { "readOnly": true } }
  ]
}

const merged = Jedison.applyOverlay(schema, overlay)

const jedison = new Jedison.Create({
  container: document.querySelector('#jedison-container'),
  theme: new Jedison.ThemeBootstrap5(),
  schema: merged
})
```
