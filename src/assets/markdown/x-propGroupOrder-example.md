```json
{
  "type": "object",
  "x-propGroupOrder": ["personal", "contact"],
  "properties": {
    "name": { "type": "string", "x-propGroup": "personal" },
    "age": { "type": "number", "x-propGroup": "personal" },
    "email": { "type": "string", "x-propGroup": "contact" }
  }
}
```