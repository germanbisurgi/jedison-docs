```html
<div id="jedison-container"></div>

<script type="module">
    import Jedison from 'jedison'

    const jedison = new Jedison.Create({
        container: document.querySelector('#jedison-container'),
        theme: new Jedison.Theme(),
        schema: {
            "title": "Person",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "The person's  name."
                },
                "age": {
                    "description": "Age in years which must be equal to or greater than zero.",
                    "type": "integer",
                    "minimum": 0
                }
            }
        }
    })
</script>
```