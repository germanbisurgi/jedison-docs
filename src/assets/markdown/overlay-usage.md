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

// An OpenAPI-Overlay-style document: ordered actions, each targeting nodes
// with a JSONPath and either merging an "update" or "remove"-ing them.
const overlay = {
  "overlay": "1.0.0",
  "info": { "title": "Presentation overlay", "version": "1.0.0" },
  "actions": [
    { "target": "$.properties.bio", "update": { "x-format": "textarea" } },
    { "target": "$.properties.ssn", "update": { "x-hidden": true } },
    { "target": "$.properties.name", "update": { "readOnly": true } }
  ]
}

// Returns a NEW schema. The inputs are never mutated.
const merged = Jedison.applyOverlay(schema, overlay)

const jedison = new Jedison.Create({
  container: document.querySelector('#jedison-container'),
  theme: new Jedison.ThemeBootstrap5(),
  schema: merged
})
```
