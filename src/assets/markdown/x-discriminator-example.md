```json
{
  "oneOf": [
    {
      "type": "object",
      "properties": {
        "type": { "type": "string", "const": "cat" },
        "name": { "type": "string" }
      }
    },
    {
      "type": "object",
      "properties": {
        "type": { "type": "string", "const": "dog" },
        "breed": { "type": "string" }
      }
    }
  ],
  "x-discriminator": "type"
}
```