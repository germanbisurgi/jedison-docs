<template>
  <div>
    <h1 class="mb-4">
      FAQ
    </h1>

    <div class="mb-4">
      <h3>Does this library generate form elements?</h3>
      <p>
        No, this library does not generate form elements but only the fields. 
        If you are generating fields inside a form element, it is recommended to use the 
        <code>novalidate</code> attribute on the form to prevent browser validation conflicts.
      </p>
      <p>
        It's also a good practice to use the <code>showValidationErrors</code> method when 
        clicking the submit button to display any validation errors.
      </p>
      
      <div class="mt-3">
        <strong>Example:</strong>
        <pre><code>&lt;form novalidate&gt;
  &lt;!-- Your Jedison fields here --&gt;
  &lt;button type="submit" onclick="showValidationErrors()"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ'
}
</script>