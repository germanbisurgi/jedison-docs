<template>
  <div>
    <h1 class="mb-5">
      FAQ
    </h1>

    <article class="mb-5">
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
    </article>

    <article class="mb-5">
      <h3>Editor not rendering?</h3>
      <p>Ensure that:</p>
      <ul>
        <li><code>container</code> is a valid DOM element</li>
        <li><code>theme</code> is provided</li>
      </ul>
    </article>

    <article class="mb-5">
      <h3>$ref not working?</h3>
      <p>
        Use <code>RefParser</code> and call <code>await refParser.dereference(schema)</code>
        before creating the Jedison instance.
      </p>
    </article>

    <article class="mb-5">
      <h3>Plugin editor not showing?</h3>
      <p>
        Check that the external library is loaded. For example, verify that
        <code>window.Quill</code> or <code>window.flatpickr</code> exists before initialization.
      </p>
    </article>

    <article class="mb-5">
      <h3>Validation not working?</h3>
      <p>
        For <code>format</code> validation, set <code>assertFormat: true</code> in your Jedison options.
      </p>
    </article>

    <article class="mb-5">
      <h3>Infinite recursion with recursive schemas?</h3>
      <p>
        Use <code>x-deactivateNonRequired: true</code> in your schema combined with
        <code>enablePropertiesToggle: true</code> in your Jedison options.
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'FAQ'
}
</script>