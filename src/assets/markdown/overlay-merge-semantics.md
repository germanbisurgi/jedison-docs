```javascript
const schema = {
  "type": "object",
  "properties": {
    "address": { "type": "object", "properties": { "city": { "type": "string" } } },
    "tags": { "type": "array", "items": { "type": "string" }, "enum": ["a", "b"] },
    "status": "draft"
  }
}

const overlay = {
  "actions": [
    { "target": "$.properties.address", "update": { "properties": { "country": { "type": "string" } } } },
    { "target": "$.properties.tags.enum", "update": ["c"] },
    { "target": "$.properties.status", "update": "published" }
  ]
}

const merged = Jedison.applyOverlay(schema, overlay)
// merged.properties.address.properties -> { city: {...}, country: {...} }
// merged.properties.tags.enum          -> ["a", "b", "c"]
// merged.properties.status             -> "published"
```
