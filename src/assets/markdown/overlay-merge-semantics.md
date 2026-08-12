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
    // Object node: deep-merged - "city" stays, "country" is added alongside it.
    { "target": "$.properties.address", "update": { "properties": { "country": { "type": "string" } } } },

    // Array node: concatenated - the update is appended, not replacing ["a", "b"].
    { "target": "$.properties.tags.enum", "update": ["c"] },

    // Primitive node: replaced in place.
    { "target": "$.properties.status", "update": "published" }
  ]
}

const merged = Jedison.applyOverlay(schema, overlay)
// merged.properties.address.properties -> { city: {...}, country: {...} }
// merged.properties.tags.enum          -> ["a", "b", "c"]
// merged.properties.status             -> "published"
```
