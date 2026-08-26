```javascript
// Forward auth headers/cookies to a real network request
const refParser = new Jedison.RefParser({
  fetchOptions: {
    headers: { Authorization: `Bearer ${token}` },
    credentials: 'include'
  }
})

// Or resolve refs entirely in-process, without a network round-trip at all
const refParser = new Jedison.RefParser({
  fetch: async (url) => {
    const schema = await resolveRefInProcess(url) // however your server builds the fragment
    return { ok: true, json: async () => schema }
  }
})

await refParser.dereference(schema)
```
