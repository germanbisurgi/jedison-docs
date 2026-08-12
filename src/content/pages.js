// Single source of truth for every documentation page's route, nav
// grouping, search metadata, and content. Every route renders through
// SectionsPage.vue, which reads this entry's heading/intro plus an ordered
// list of { component, props } sections - adding or reshaping a page never
// touches a template, only data.
import SectionsPage from '@/pages/SectionsPage.vue'
import SectionProse from '@/components/sections/SectionProse.vue'
import SectionCode from '@/components/sections/SectionCode.vue'
import SectionExample from '@/components/sections/SectionExample.vue'

import arrayEditorCheckboxesInlineExample from '@/assets/live-examples/array-editor-checkboxes-inline.json'
import arrayEditorChoicesExample from '@/assets/live-examples/array-editor-choices.json'
import arrayEditorTupleExample from '@/assets/live-examples/array-editor-tuple.json'
import booleanEditorDefaultExample from '@/assets/live-examples/boolean-editor-default.json'
import booleanEditorCheckboxExample from '@/assets/live-examples/boolean-editor-checkbox.json'
import booleanEditorRadiosExample from '@/assets/live-examples/boolean-editor-radios.json'
import booleanEditorRadiosInlineExample from '@/assets/live-examples/boolean-editor-radios-inline.json'
import booleanEditorSelectExample from '@/assets/live-examples/boolean-editor-select.json'
import numberEditorDefaultExample from '@/assets/live-examples/number-editor-default.json'
import numberEditorNullableExample from '@/assets/live-examples/number-editor-nullable.json'
import objectEditorAccordionExample from '@/assets/live-examples/object-editor-accordion.json'
import objectEditorRadiosExample from '@/assets/live-examples/object-editor-radios.json'
import objectEditorRadiosInlineExample from '@/assets/live-examples/object-editor-radios-inline.json'
import stringEditorDefaultExample from '@/assets/live-examples/string-editor-default.json'
import stringEditorRadiosExample from '@/assets/live-examples/string-editor-radios.json'
import stringEditorRadiosInlineExample from '@/assets/live-examples/string-editor-radios-inline.json'
import stringEditorSelectExample from '@/assets/live-examples/string-editor-select.json'
import stringEditorTextareaExample from '@/assets/live-examples/string-editor-textarea.json'
import objectEditorGridExample from '@/assets/live-examples/object-editor-grid.json'
import iconsBootstrapIconsExample from '@/assets/live-examples/icons-bootstrap-icons.json'
import iconsFontawesome3Example from '@/assets/live-examples/icons-fontawesome3.json'
import iconsFontawesome4Example from '@/assets/live-examples/icons-fontawesome4.json'
import iconsFontawesome5Example from '@/assets/live-examples/icons-fontawesome5.json'
import iconsFontawesome6Example from '@/assets/live-examples/icons-fontawesome6.json'
import iconsGlyphiconsExample from '@/assets/live-examples/icons-glyphicons.json'
import numberEditorSelectExample from '@/assets/live-examples/number-editor-select.json'
import numberEditorRadiosExample from '@/assets/live-examples/number-editor-radios.json'
import numberEditorRadiosInlineExample from '@/assets/live-examples/number-editor-radios-inline.json'
import numberEditorRatyExample from '@/assets/live-examples/number-editor-raty.json'
import numberEditorImaskExample from '@/assets/live-examples/number-editor-imask.json'
import numberEditorRangeExample from '@/assets/live-examples/number-editor-range.json'
import objectEditorDefaultExample from '@/assets/live-examples/object-editor-default.json'
import objectEditorNavVerticalExample from '@/assets/live-examples/object-editor-nav-vertical.json'
import objectEditorNavHorizontalExample from '@/assets/live-examples/object-editor-nav-horizontal.json'
import objectEditorCategoriesVerticalExample from '@/assets/live-examples/object-editor-categories-vertical.json'
import stringEditorAwesompleteExample from '@/assets/live-examples/string-editor-awesomplete.json'
import stringEditorFlatpickrExample from '@/assets/live-examples/string-editor-flatpickr.json'
import stringEditorImaskExample from '@/assets/live-examples/string-editor-imask.json'
import stringEditorJoditExample from '@/assets/live-examples/string-editor-jodit.json'
import stringEditorQuillExample from '@/assets/live-examples/string-editor-quill.json'
import stringEditorFilepondExample from '@/assets/live-examples/string-editor-filepond.json'
import nullEditorDefaultExample from '@/assets/live-examples/null-editor-default.json'
import arrayEditorDefaultExample from '@/assets/live-examples/array-editor-default.json'
import arrayEditorFooterExample from '@/assets/live-examples/array-editor-footer.json'
import arrayEditorCheckboxesExample from '@/assets/live-examples/array-editor-checkboxes.json'
import arrayEditorCheckboxesSortableExample from '@/assets/live-examples/array-editor-checkboxes-sortable.json'
import arrayEditorNavVerticalExample from '@/assets/live-examples/array-editor-nav-vertical.json'
import arrayEditorNavVerticalFooterExample from '@/assets/live-examples/array-editor-nav-vertical-footer.json'
import arrayEditorNavHorizontalExample from '@/assets/live-examples/array-editor-nav-horizontal.json'
import arrayEditorNavHorizontalFooterExample from '@/assets/live-examples/array-editor-nav-horizontal-footer.json'
import arrayEditorTableExample from '@/assets/live-examples/array-editor-table.json'
import arrayEditorTableFooterExample from '@/assets/live-examples/array-editor-table-footer.json'
import arrayEditorTableObjectExample from '@/assets/live-examples/array-editor-table-object.json'
import arrayEditorTableObjectFooterExample from '@/assets/live-examples/array-editor-table-object-footer.json'
import objectEditorCategoriesHorizontalExample from '@/assets/live-examples/object-editor-categories-horizontal.json'
import objectEditorCategoriesCategoryOrderExample from '@/assets/live-examples/object-editor-categories-category-order.json'
import playgroundExample from '@/assets/live-examples/playground.json'

import mermaidFlowSvg from '@/assets/svg/mermaid-flow-transparent.svg'

import mdInstallNpm from '@/assets/markdown/install-npm.md?raw'
import mdInstallYarn from '@/assets/markdown/install-yarn.md?raw'
import mdUsingEsm from '@/assets/markdown/using-esm.md?raw'
import mdUsingCdn from '@/assets/markdown/using-cdn.md?raw'
import mdUsingNode from '@/assets/markdown/using-node.md?raw'
import mdEventChange from '@/assets/markdown/event-change.md?raw'
import mdEventInstanceChange from '@/assets/markdown/event-instance-change.md?raw'
import mdEventItemAdd from '@/assets/markdown/event-item-add.md?raw'
import mdEventItemDelete from '@/assets/markdown/event-item-delete.md?raw'
import mdEventItemMove from '@/assets/markdown/event-item-move.md?raw'

import mdOptionLanguage from '@/assets/markdown/option-language.md?raw'
import mdGermanTranslation from '@/assets/markdown/translation-german.md?raw'
import languageAndTranslationsExample from '@/assets/live-examples/language-and-translations.json'

import markdownAnnotationsExample from '@/assets/live-examples/markdown-annotations.json'
import exposingMarkedAndDompurify from '@/assets/markdown/exposing-marked-and-dompurify.md?raw'

import mdOverlayUsage from '@/assets/markdown/overlay-usage.md?raw'
import htmlOverlayExample from '@/assets/html/overlay-example.html?raw'

import themesThemeExample from '@/assets/live-examples/themes-theme.json'
import themesBootstrap3Example from '@/assets/live-examples/themes-bootstrap3.json'
import themesBootstrap4Example from '@/assets/live-examples/themes-bootstrap4.json'
import themesBootstrap5Example from '@/assets/live-examples/themes-bootstrap5.json'

import xContainerAttributesExample from '@/assets/markdown/x-containerAttributes-example.md?raw'
import xDiscriminatorExample from '@/assets/markdown/x-discriminator-example.md?raw'
import xEditJsonDataExample from '@/assets/markdown/x-editJsonData-example.md?raw'
import xEnumTitlesExample from '@/assets/markdown/x-enumTitles-example.md?raw'
import xGridExample from '@/assets/markdown/x-grid-example.md?raw'
import xInfoExample from '@/assets/markdown/x-info-example.md?raw'
import xInputAttributesExample from '@/assets/markdown/x-inputAttributes-example.md?raw'
import xMessagesArray from '@/assets/markdown/x-messages-array.md?raw'
import xMessagesObject from '@/assets/markdown/x-messages-object.md?raw'
import xMessagesI18n from '@/assets/markdown/x-messages-i18n.md?raw'
import xPropGroupOrderExample from '@/assets/markdown/x-propGroupOrder-example.md?raw'

import htmlCustomValidator from '@/assets/html/custom-constraint.html?raw'
import mdCustomConstraint from '@/assets/markdown/custom-constraint.md?raw'

import templatesExample from '@/assets/live-examples/templates.json'
import templatesFallbackExample from '@/assets/live-examples/templates-fallback.json'

import mdMethodGetErrorsAndWarnings from '@/assets/markdown/method-get-errors-and-warnings.md?raw'
import mdMethodGetErrors from '@/assets/markdown/method-get-errors.md?raw'
import mdValidationErrors from '@/assets/markdown/validation-errors.md?raw'
import mdValidationErrorsFiltered from '@/assets/markdown/validation-errors-filtered.md?raw'

import mdRefParserUsage from '@/assets/markdown/ref-parser-usage.md?raw'
import htmlRefParserBefore from '@/assets/html/ref-parser-before.html?raw'
import htmlRefParserAfter from '@/assets/html/ref-parser-after.html?raw'
import htmlRefParserRecursiveObject from '@/assets/html/ref-parser-recursive-object.html?raw'
import htmlRefParserRecursiveArray from '@/assets/html/ref-parser-recursive-array.html?raw'

import customEditorsExample from '@/assets/markdown/customEditors-example.md?raw'
import domPurifyOptionsExample from '@/assets/markdown/domPurifyOptions-example.md?raw'
import editJsonDataExample from '@/assets/markdown/editJsonData-example.md?raw'
import hiddenInputAttributesExample from '@/assets/markdown/hiddenInputAttributes-example.md?raw'
import settingsExample from '@/assets/markdown/settings-example.md?raw'
import translationsExample from '@/assets/markdown/translations-example.md?raw'

export const pages = [
  {
    path: "/",
    routeName: "Introduction",
    group: "Getting Started",
    navbar: true,
    title: "Jedison - Introduction",
    description: "Overview of Jedison, a JSON Schema editor and validator for the browser.",
    keywords: ["introduction", "overview", "jedison", "json schema", "editor", "validator"],
    component: SectionsPage,
    heading: "Introduction",
    sections: [
      {
        component: SectionProse,
        props: {
          heading: "What is Jedison?",
          html: `<p>Jedison helps you validate JSON data on the backend and generate interactive forms from JSON Schemas on the frontend.<br><br>One common workflow looks like this:</p><ol><li>Your backend sends the JSON Schema to the client</li><li>Jedison automatically renders a complete form based on the schema</li><li>Users interact with the form while getting instant client-side validation</li><li>Validated data gets submitted back to your server</li><li>The same schema validates the data again server-side for security</li></ol><img class="img-fluid mermaid-diagram mb-3" src="${mermaidFlowSvg}" alt="Jedison use diagram"><p>But Jedison is flexible enough to support other patterns too - you might use it for:</p><ul><li>Standalone client-side forms without server validation</li><li>Pure server-side JSON validation in your backend services</li><li>Hybrid approaches where different parts of the schema are used in different contexts</li></ul>`
        }
      }
    ]
  },
  {
    path: "/install",
    routeName: "Install",
    group: "Getting Started",
    navbar: true,
    title: "Jedison - Install",
    description: "How to install Jedison via npm, yarn, or CDN.",
    keywords: ["install", "setup", "npm", "yarn", "cdn", "import"],
    component: SectionsPage,
    heading: "Install",
    sections: [
      { component: SectionProse, props: { heading: "Using ES Module" } },
      { component: SectionProse, props: { html: "<p>npm:</p>" } },
      { component: SectionCode, props: { language: "bash", code: mdInstallNpm } },
      { component: SectionProse, props: { html: "<p>yarn:</p>" } },
      { component: SectionCode, props: { language: "bash", code: mdInstallYarn } },
      { component: SectionCode, props: { language: "html", code: mdUsingEsm } },
      { component: SectionProse, props: { heading: "Using from CDN" } },
      { component: SectionCode, props: { language: "html", code: mdUsingCdn } }
    ]
  },
  {
    path: "/as-editor",
    routeName: "As Editor",
    group: "Getting Started",
    navbar: true,
    title: "Jedison - As Editor",
    description: "Using Jedison as a JSON form editor to generate UI from JSON Schema.",
    keywords: ["editor", "form", "json schema", "ui", "generate"],
    component: SectionsPage,
    heading: "As Editor",
    sections: [
      {
        component: SectionProse,
        props: {
          html: "<p>To use Jedison as a JSON editor, these options are required:</p><ul><li><strong><code>container</code></strong> specifies where the editor renders in your HTML. Without it, Jedison has no place to display the form. In the example, we attach it to <code>&lt;div id=\"jedison-container\"&gt;</code> using <code>document.querySelector</code>.</li><li><strong><code>theme</code></strong> defines the editor's visual style. While Jedison provides a default theme (<code>new Jedison.Theme()</code>), you must include this option—omitting it may break styling or functionality.</li><li><strong><code>schema</code></strong> defines the validation rules. The editor will check JSON data against this schema.</li></ul>"
        }
      },
      { component: SectionExample, props: { example: playgroundExample } }
    ]
  },
  {
    path: "/as-validator",
    routeName: "As Validator",
    group: "Getting Started",
    navbar: true,
    title: "Jedison - As Validator",
    description: "Using Jedison as a JSON Schema validator without UI.",
    keywords: ["validator", "validate", "json schema", "errors"],
    component: SectionsPage,
    heading: "As Validator",
    sections: [
      {
        component: SectionProse,
        props: {
          heading: "Node.js",
          html: "<p>To use Jedison as a JSON validator, these options are required:</p><ul><li><strong><code>schema</code></strong> defines the validation rules. This is the only mandatory option when using Jedison for validation. The validator will check JSON data against this schema without needing a UI container or theme.</li></ul>"
        }
      },
      { component: SectionCode, props: { language: "javascript", code: mdUsingNode } }
    ]
  },
  {
    path: "/methods",
    routeName: "Methods",
    group: "Getting Started",
    navbar: true,
    title: "Jedison - Methods",
    description: "API methods available on the Jedison instance.",
    keywords: ["methods", "api", "getValue", "setValue", "destroy", "getErrors"],
    component: SectionsPage,
    heading: "Methods",
    sections: [
      {
        component: SectionProse,
        props: {
          heading: "Methods",
          html: "<p>Jedison provides several methods to interact with your editor instance:</p>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "<code>getValue()</code>",
          level: 3,
          html: "<p>Returns the current value of the editor by calling <code>getValue()</code> on the root instance.</p><p>Internally, this traverses the entire instance tree to build the complete JSON structure.</p>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "<code>setValue(data)</code>",
          level: 3,
          html: "<p>Updates the editor's value with new data by calling <code>setValue()</code> on the root instance.</p><ul><li><code>data</code>: The new JSON data to set</li></ul>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "<code>getInstance(jsonPath)</code>",
          level: 3,
          html: "<p>Retrieves a specific instance by its JSON path.</p><p>Example paths:</p><ul><li><code>'#'</code> - Root instance</li><li><code>'#/property'</code> - Nested property</li><li><code>'#/array/0'</code> - First item in an array</li></ul>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "<code>showValidationErrors(errorsList = null)</code>",
          level: 3,
          html: "<p>Displays validation errors in the respective editors.</p><ul><li>If <code>errorsList</code> is provided, displays those specific errors</li><li>Otherwise, shows all current validation errors from <code>getErrors()</code></li></ul>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "<code>getErrors(filters = ['error'])</code>",
          level: 3,
          html: "<p>Returns an array of validation error messages from all instances.</p><ul><li><code>filters</code>: Include only errors with <code>type</code> that are included in the filter array</li></ul>"
        }
      },
      { component: SectionCode, props: { code: mdMethodGetErrorsAndWarnings } },
      { component: SectionCode, props: { code: mdValidationErrors } },
      { component: SectionCode, props: { code: mdMethodGetErrors } },
      { component: SectionCode, props: { code: mdValidationErrorsFiltered } },
      {
        component: SectionProse,
        props: {
          heading: "<code>disable()</code>",
          level: 3,
          html: "<p>Disables UI controls</p>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "<code>enable()</code>",
          level: 3,
          html: "<p>Enables UI controls</p>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "<code>destroy()</code>",
          level: 3,
          html: "<p>Cleans up the editor instance by:</p><ul><li>Calling <code>destroy()</code> on the root instance</li><li>Clearing the container HTML if in editor mode</li><li>Removing all instance references</li></ul>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "<code>navigateTo(path)</code>",
          level: 3,
          html: "<p>Navigates to a specific field by path, activating all ancestor nav and categories tabs as needed.</p><ul><li><code>path</code>: A JSON pointer path string (e.g. <code>'#/organization/departments/1/teams/1'</code>)</li></ul><p>Only works when Jedison is used as an editor (i.e. a <code>container</code> is provided).</p>"
        }
      }
    ]
  },
  {
    path: "/events",
    routeName: "Events",
    group: "Getting Started",
    navbar: true,
    title: "Jedison - Events",
    description: "Events emitted by Jedison for change detection and lifecycle hooks.",
    keywords: ["events", "change", "ready", "on", "emit", "lifecycle"],
    component: SectionsPage,
    heading: "Events",
    sections: [
      {
        component: SectionProse,
        props: {
          html: "<p>Jedison provides several events that let you track changes and user interactions in your forms. These events are useful because they allow you to:</p><ul><li>React immediately when data changes (like saving to a database)</li><li>Synchronize form state with other parts of your application</li></ul>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "<code>change</code>",
          level: 3,
          html: "<p>Triggered when the entire instance changes (whole JSON value/instance/editor).</p><p>Callback receives <code>(initiator)</code> where initiator is either:</p><ul><li><code>\"api\"</code> - Change from method calls like <code>setValue()</code></li><li><code>\"user\"</code> - Change from direct user interaction</li></ul>"
        }
      },
      { component: SectionCode, props: { language: "javascript", code: mdEventChange } },
      {
        component: SectionProse,
        props: {
          heading: "<code>instance-change</code>",
          level: 3,
          html: "<p>Triggered when a specific part of the instance changes.</p><p>Callback receives <code>(instance, initiator)</code>:</p><ul><li><code>instance</code>: The changed instance</li><li><code>initiator</code>: Same as <code>change</code> event</li></ul>"
        }
      },
      { component: SectionCode, props: { language: "javascript", code: mdEventInstanceChange } },
      {
        component: SectionProse,
        props: {
          heading: "<code>item-add</code>",
          level: 3,
          html: "<p>Triggered when adding items to arrays.</p><p>Callback receives <code>(initiator, newInstance)</code>:</p><ul><li><code>newInstance</code>: The newly added array item instance</li></ul>"
        }
      },
      { component: SectionCode, props: { language: "javascript", code: mdEventItemAdd } },
      {
        component: SectionProse,
        props: {
          heading: "<code>item-delete</code>",
          level: 3,
          html: "<p>Triggered when removing items from arrays.</p><p>Callback receives <code>(initiator)</code>.</p>"
        }
      },
      { component: SectionCode, props: { language: "javascript", code: mdEventItemDelete } },
      {
        component: SectionProse,
        props: {
          heading: "<code>item-move</code>",
          level: 3,
          html: "<p>Triggered when reordering array items.</p><p>Callback receives <code>(initiator)</code>.</p>"
        }
      },
      { component: SectionCode, props: { language: "javascript", code: mdEventItemMove } }
    ]
  },
  {
    path: "/playground",
    routeName: "Playground",
    group: "Getting Started",
    navbar: true,
    title: "Jedison - Playground",
    description: "Interactive playground to experiment with Jedison.",
    keywords: ["playground", "demo", "interactive", "experiment"],
    component: SectionsPage,
    heading: "Playground",
    sections: [
      {
        component: SectionProse,
        props: {
          html: "<p>This HTML example demonstrates how to use Jedison to generate a forms based on JSON schemas. The page includes Bootstrap 5 for styling and the Jedison library from a CDN.</p><p>The JSON schema defines a simple \"Person\" object with two fields: \"name\" (a string) and \"age\" (a positive integer). When the page loads, Jedison creates a form inside the #jedison-container div using this schema, automatically generating appropriate input fields with Bootstrap 5 styling.</p><p>The <code>Jedison.ThemeBootstrap5()</code> instance creates the necessary HTML and ensures the form follows Bootstrap 5's design system.</p><p>This approach allows developers to quickly create consistent, validated forms by simply defining their data structure in JSON format, rather than writing manual HTML form markup.</p>"
        }
      },
      { component: SectionExample, props: { example: playgroundExample } }
    ]
  },
  {
    path: "/faq",
    routeName: "FAQ",
    group: "Getting Started",
    navbar: true,
    title: "Jedison - FAQ",
    description: "Frequently asked questions about Jedison.",
    keywords: ["faq", "questions", "help", "troubleshooting", "x-deactivateNonRequired"],
    component: SectionsPage,
    heading: "FAQ",
    sections: [
      {
        component: SectionProse,
        props: {
          heading: "Does this library generate form elements?",
          level: 3,
          html: "<p>No, this library does not generate form elements but only the fields. If you are generating fields inside a form element, it is recommended to use the <code>novalidate</code> attribute on the form to prevent browser validation conflicts.</p><p>It's also a good practice to use the <code>showValidationErrors</code> method when clicking the submit button to display any validation errors.</p><div class=\"mt-3\"><strong>Example:</strong><pre><code>&lt;form novalidate&gt;\n  &lt;!-- Your Jedison fields here --&gt;\n  &lt;button type=\"submit\" onclick=\"showValidationErrors()\"&gt;Submit&lt;/button&gt;\n&lt;/form&gt;</code></pre></div>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Editor not rendering?",
          level: 3,
          html: "<p>Ensure that:</p><ul><li><code>container</code> is a valid DOM element</li><li><code>theme</code> is provided</li></ul>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "$ref not working?",
          level: 3,
          html: "<p>Use <code>RefParser</code> and call <code>await refParser.dereference(schema)</code> before creating the Jedison instance.</p>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Plugin editor not showing?",
          level: 3,
          html: "<p>Check that the external library is loaded. For example, verify that <code>window.Quill</code> or <code>window.flatpickr</code> exists before initialization.</p>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Validation not working?",
          level: 3,
          html: "<p>For <code>format</code> validation, set <code>assertFormat: true</code> in your Jedison options.</p>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Infinite recursion with recursive schemas?",
          level: 3,
          html: "<p>Use <code>x-deactivateNonRequired: true</code> in your schema combined with <code>enablePropertiesToggle: true</code> in your Jedison options.</p>"
        }
      }
    ]
  },
  {
    path: "/themes",
    routeName: "Themes",
    group: "Features",
    navbar: true,
    title: "Jedison - Themes",
    description: "Theming support for Jedison including Bootstrap and custom themes.",
    keywords: ["themes", "bootstrap", "styling", "css", "custom"],
    component: SectionsPage,
    heading: "Themes",
    sections: [
      {
        component: SectionProse,
        props: {
          heading: "Supported Themes",
          html: "<p>Jedison supports multiple CSS frameworks through its theme system, allowing you to maintain consistent styling with your application's design system.</p>"
        }
      },
      { component: SectionExample, props: { heading: "Bootstrap 5", intro: "Full support for Bootstrap 5 form styling: <code>new Jedison.ThemeBootstrap5()</code>", example: themesBootstrap5Example } },
      { component: SectionExample, props: { heading: "Bootstrap 4", intro: "Full support for Bootstrap 4 form styling: <code>new Jedison.ThemeBootstrap4()</code>", example: themesBootstrap4Example } },
      { component: SectionExample, props: { heading: "Bootstrap 3", intro: "Full support for Bootstrap 3 form styling: <code>new Jedison.ThemeBootstrap3()</code>", example: themesBootstrap3Example } },
      { component: SectionExample, props: { heading: "Default Theme", intro: "Basic unstyled theme that provides minimal structure: <code>new Jedison.Theme()</code>", example: themesThemeExample } }
    ]
  },
  {
    path: "/icons",
    routeName: "Icons",
    group: "Features",
    navbar: true,
    title: "Jedison - Icons",
    description: "Icon configuration for Jedison buttons and UI elements.",
    keywords: ["icons", "bootstrap icons", "fontawesome", "svg", "ui"],
    component: SectionsPage,
    heading: "Icons",
    intro: "Jedison supports multiple icons libraries",
    sections: [
      {
        component: SectionProse,
        props: {
          heading: "Icon Library Integration",
          html: "<p>Jedison supports multiple icon libraries which can be specified using the <code>iconLib</code> option:</p>"
        }
      },
      { component: SectionExample, props: { heading: "<code>'bootstrap-icons'</code>", example: iconsBootstrapIconsExample } },
      { component: SectionExample, props: { heading: "<code>'fontawesome6'</code>", example: iconsFontawesome6Example } },
      { component: SectionExample, props: { heading: "<code>'fontawesome5'</code>", example: iconsFontawesome5Example } },
      { component: SectionExample, props: { heading: "<code>'fontawesome4'</code>", example: iconsFontawesome4Example } },
      { component: SectionExample, props: { heading: "<code>'fontawesome3'</code>", example: iconsFontawesome3Example } },
      { component: SectionExample, props: { heading: "<code>'glyphicons'</code><small> - Bootstrap 3's Glyphicons</small>", example: iconsGlyphiconsExample } }
    ]
  },
  {
    path: "/language-and-translations",
    routeName: "Language and Translations",
    group: "Features",
    navbar: true,
    title: "Jedison - Language and Translations",
    description: "Localization and translation support for Jedison labels and messages.",
    keywords: ["language", "translations", "i18n", "localization", "labels"],
    component: SectionsPage,
    heading: "Language and Translations",
    sections: [
      {
        component: SectionProse,
        props: {
          heading: "Default Language",
          html: "<p>The default language for UI and error messages is <code>en</code> (english). You can change this to any supported language or add your own translations.</p><p>Setting German as Default</p>"
        }
      },
      { component: SectionCode, props: { code: mdOptionLanguage } },
      {
        component: SectionProse,
        props: {
          heading: "Languages Included",
          html: "<p>Jedison comes with these languages ready to use:</p><ul><li><code>en</code> (english)</li><li><code>de</code> (german)</li><li><code>it</code> (italian)</li><li><code>es</code> (spanish)</li></ul><p>If a translation is missing or you forget to add one, Jedison will automatically use the English version instead.</p>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Adding Translations",
          html: "<p>You can add new languages using the <code>translations</code> option. Just set the <code>language</code> option to your new language code.</p><p>You can also override the default English translations if needed.</p>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Translation and Templates",
          level: 3,
          html: "<p>The translation system uses template placeholders that get dynamically replaced with actual values during runtime. These placeholders are wrapped in double curly braces <code>{{ property }}</code> and provide context-specific information in error messages.</p><p>For example, when validating against a <code>minLength</code> constraint, the template <code>{{ minLength }}</code> will be replaced with the schema's specified minimum length value. This allows for dynamic, accurate error messages that reflect the actual validation rules.</p>"
        }
      },
      { component: SectionCode, props: { code: mdGermanTranslation } },
      {
        component: SectionExample,
        props: {
          heading: "German Translation Example",
          intro: "See how the placeholders work in this example. The error message will show \"Muss mindestens <code>3</code> Zeichen lang sein\" because of <code>minLength: 3</code>.<br>Notice that all UI elements including buttons were also translated to German in this example.<br>We used the option <code>showErrors: 'always'</code> to make validation messages appear immediately rather than waiting for user interaction.",
          example: languageAndTranslationsExample
        }
      }
    ]
  },
  {
    path: "/ref-parser",
    routeName: "RefParser",
    group: "Features",
    navbar: true,
    title: "Jedison - RefParser",
    description: "$ref resolution and JSON Schema reference parsing.",
    keywords: ["ref", "reference", "parser", "$ref", "resolve", "dereference", "x-deactivateNonRequired"],
    component: SectionsPage,
    heading: "RefParser",
    sections: [
      {
        component: SectionProse,
        props: {
          html: "<p>Jedison includes a <code>RefParser</code> class, which processes a JSON Schema and builds an internal list of dereferenced <code>$ref</code> pointers.<br>You can pass the <code>RefParser</code> instance to a Jedison instance, which will then use it to handle schema dereferencing internally.<br>The original schema remains unchanged—schemas are dereferenced at runtime only when needed.<br>This approach makes it easier to support and manage recursive schemas.</p>"
        }
      },
      { component: SectionCode, props: { code: mdRefParserUsage } },
      {
        component: SectionExample,
        props: {
          heading: "Before Dereferencing",
          intro: "The <code>\"user\"</code> property schema has not been dereferenced, so the editor only sees an empty schema.<br>Since there's no defined <code>type</code>, the schema is interpreted as allowing any JSON type.<br>As a result, Jedison displays a <code>multiple</code> editor, enabling the user to select from all possible JSON types.",
          exampleHtml: htmlRefParserBefore
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "After Dereferencing",
          intro: "The <code>\"user\"</code> property schema has been dereferenced and has now <code>type</code>.<br>As a result, Jedison renders a <code>object</code> editor.",
          exampleHtml: htmlRefParserAfter
        }
      },
      {
        component: SectionProse,
        props: { heading: "Recursive schema", html: "" }
      },
      {
        component: SectionExample,
        props: {
          intro: "Jedison can handle recursive JSON Schemas, provided certain conditions are met.<br>In this example, we use the <code>x-deactivateNonRequired</code> keyword, which requires properties to be added manually.<br>To support this, the Jedison option <code>enablePropertiesToggle: true</code> allows manual activation of properties.<br>This setup is necessary to prevent infinite recursion during schema processing.",
          exampleHtml: htmlRefParserRecursiveObject
        }
      },
      {
        component: SectionExample,
        props: {
          intro: "In some cases, handling recursion is easier—for example, when the recursive <code>$ref</code> is inside an <code>\"items\"</code> schema.<br>This is because the schema is only instantiated at runtime when a new item is added to the array.",
          exampleHtml: htmlRefParserRecursiveArray
        }
      }
    ]
  },
  {
    path: "/overlay",
    routeName: "Overlays",
    group: "Features",
    navbar: true,
    title: "Jedison - Overlays",
    description: "Layer presentation directives onto a JSON Schema with applyOverlay and OpenAPI-Overlay-style actions.",
    keywords: ["overlay", "applyOverlay", "openapi overlay", "jsonpath", "x-format", "x-hidden", "update", "remove", "presentation"],
    component: SectionsPage,
    heading: "Overlays",
    sections: [
      {
        component: SectionProse,
        props: {
          html: "<p>Jedison ships an <code>applyOverlay</code> helper that applies an <a href=\"https://spec.openapis.org/overlay/latest.html\" target=\"_blank\" rel=\"noopener\">OpenAPI-Overlay</a>-style document to a JSON Schema and returns a <strong>new</strong> schema.<br>An overlay is an ordered list of actions, each targeting nodes with a JSONPath and either merging an <code>update</code> into them or <code>remove</code>-ing them.<br>This lets you layer presentation directives (<code>x-format</code>, <code>x-hidden</code>, <code>readOnly</code>, …) on top of a schema <strong>without editing the source schema</strong> — useful when the schema is owned elsewhere (a backend, a shared contract) but the form needs UI tweaks per context.</p>"
        }
      },
      { component: SectionCode, props: { code: mdOverlayUsage } },
      {
        component: SectionProse,
        props: { html: "<p>The inputs are never mutated. A malformed overlay throws; an action that matches zero nodes is a no-op.</p>" }
      },
      { component: SectionExample, props: { exampleHtml: htmlOverlayExample } },
      {
        component: SectionProse,
        props: {
          heading: "Overlay document",
          html: "<p>An overlay document follows the OpenAPI Overlay shape. Only the <code>actions</code> array is required by <code>applyOverlay</code>; <code>overlay</code> and <code>info</code> are conventional metadata.</p><ul><li><code>target</code> — a JSONPath selecting the nodes to act on (required).</li><li><code>update</code> — a value merged into every matched node.</li><li><code>remove: true</code> — removes every matched node instead of updating.</li></ul><p>Actions run in order, so a later action can override an earlier one (last write wins). <code>copy</code> and <code>extends</code> are accepted but ignored.</p>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Targeting (JSONPath subset)",
          html: "<p>Targets use a small, dependency-free subset of <a href=\"https://www.rfc-editor.org/rfc/rfc9535\" target=\"_blank\" rel=\"noopener\">JSONPath (RFC 9535)</a>. Every target must start at the root <code>$</code>.</p><table class=\"table\"><thead><tr><th>Syntax</th><th>Selects</th></tr></thead><tbody><tr><td><code>$</code></td><td>the root (cannot be removed or replaced with a non-object)</td></tr><tr><td><code>.name</code>, <code>['name']</code>, <code>[\"name\"]</code></td><td>a child by name (bracket form allows any key)</td></tr><tr><td><code>[n]</code></td><td>an array item by index (negative counts from the end)</td></tr><tr><td><code>*</code>, <code>.*</code>, <code>[*]</code></td><td>all children of an object or array</td></tr><tr><td><code>..</code></td><td>recursive descent (matches at any depth)</td></tr><tr><td><code>['a','b']</code>, <code>[0,1]</code></td><td>a union of names or indices</td></tr></tbody></table><p>Filter expressions (<code>[?…]</code>), array slices (<code>[start:end]</code>) and function extensions (<code>length()</code>) are <strong>not</strong> supported and throw a clear error rather than failing silently.</p>"
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Merge semantics",
          html: "<p><code>update</code> merges into each matched node according to its type:</p><ul><li><strong>Object node</strong> — deep-merged (nested objects recurse, arrays concatenate, primitives replace).</li><li><strong>Array node</strong> — concatenated (an array update is appended item by item; a non-array update is pushed).</li><li><strong>Primitive node</strong> — replaced in place.</li></ul><p><code>remove: true</code> deletes matched object properties and splices matched array items (indices are removed highest-first so they stay valid).</p>"
        }
      }
    ]
  },
  {
    path: "/markdown-annotations",
    routeName: "Markdown Annotations",
    group: "Features",
    navbar: true,
    title: "Jedison - Markdown annotations",
    description: "Using markdown in JSON Schema title and description fields.",
    keywords: ["markdown", "annotations", "title", "description", "formatting"],
    component: SectionsPage,
    heading: "Markdown Annotations",
    sections: [
      {
        component: SectionProse,
        props: {
          heading: "Marked & DOMPurify",
          level: 3,
          html: "<p>Jedison supports Markdown formatting in various text fields including titles, descriptions, and info content. This is enabled by the <code>marked.js</code> library and activated by setting <code>parseMarkdown: true</code> in the Jedison configuration.</p><p>For security, all HTML output is sanitized using <code>DOMPurify</code>. This prevents XSS attacks while preserving safe HTML content. Sanitization is enabled with <code>purifyHtml: true</code> in the Jedison configuration.</p>"
        }
      },
      { component: SectionExample, props: { example: markdownAnnotationsExample } },
      {
        component: SectionProse,
        props: {
          heading: "Exposing dependencies",
          level: 3,
          html: "<p>When using ES modules it may be necessary to expose, <code>DOMPurify</code> and <code>marked</code> as global variables in the <code>window</code> object.</p>"
        }
      },
      { component: SectionCode, props: { code: exposingMarkedAndDompurify } }
    ]
  },
  {
    path: "/options",
    routeName: "Options",
    group: "Features",
    navbar: true,
    title: "Jedison - Instance Options",
    description: "Global configuration options for Jedison initialization.",
    keywords: ["options", "configuration", "settings", "init", "global", "enforceConst", "enforceEnum", "enforceRequired", "enforceAdditionalProperties", "switcherInput", "enablePropertiesToggle", "enableCollapseToggle", "deactivateNonRequired", "showErrors", "assertFormat", "arrayDelete", "arrayMove", "editJsonData", "arrayAdd", "arrayDeleteConfirm", "objectAdd", "embedSwitcher", "subErrors", "useConstraintAttributes", "arrayDeleteAll", "arrayFooterAdd", "arrayFooterDeleteAll", "arrayFooterButtonsPosition"],
    component: SectionsPage,
    heading: "Instance Options",
    sections: [
  {
    component: SectionProse,
    props: { html: `<p>Jedison provides various configuration options to customize the behavior and appearance of your form instances. These options can be passed when creating a new Jedison instance.</p>
      <p>Some of these options can be set at JSON schema level. Options in schemas are always prefixed with <code>x-</code> (e.g. <code>x-assertFormat</code>) to not collide with future JSON schema spec keywords.</p>` }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>container</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>HTMLElement</code></p>
        <p><strong>Default:</strong> <code>null</code></p>
        <p>The HTML element that will contain the generated form.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>iconLib</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>null</code></p>
        <p>Specifies the icon library to use for UI components. Valid options include:</p>
        <ul>
          <li><code>'glyphicons'</code></li>
          <li><code>'bootstrap-icons'</code></li>
          <li><code>'fontawesome3'</code></li>
          <li><code>'fontawesome4'</code></li>
          <li><code>'fontawesome5'</code></li>
          <li><code>'fontawesome6'</code></li>
        </ul>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>theme</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>Theme</code></p>
        <p><strong>Default:</strong> <code>null</code></p>
        <p>An instance of <code>Theme</code> to apply to the UI. Valid options include:</p>
        <ul>
          <li><code>new Jedison.Theme()</code></li>
          <li><code>new Jedison.ThemeBootstrap3()</code></li>
          <li><code>new Jedison.ThemeBootstrap4()</code></li>
          <li><code>new Jedison.ThemeBootstrap5()</code></li>
        </ul>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>refParser</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>RefParser</code></p>
        <p><strong>Default:</strong> <code>null</code></p>
        <p>An instance of <code>RefParser</code> to handle <code>'$ref'</code> keywords.</p>
        <ul>
          <li><code>new Jedison.RefParser</code></li>
        </ul>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>translations</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>object</code></p>
        <p><strong>Default:</strong> <code>'{}'</code></p>
        <p>Used to add new translations or override the default ones. Uses template placeholders that get dynamically replaced with actual values during runtime</p>`
    }
  },
  {
    component: SectionCode,
    props: { code: translationsExample }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>parseMarkdown</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Transform <code>markdown</code> to <code>html</code> in annotations like <code>title</code> and <code>description</code> if marked.js is available as <code>window.marked</code>.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>purifyHtml</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>Sanitizes <code>html</code> tags from annotations like if DOMPurify.js is available as <code>window.DOMPurify</code>.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>purifyData</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>Sanitizes string values during data input operations if DOMPurify.js is available as <code>window.DOMPurify</code>. This provides security against XSS attacks in user input data, separate from HTML content purification.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>domPurifyOptions</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>object</code></p>
        <p><strong>Default:</strong> <code>{}</code></p>
        <p>DOMPurify options.</p>`
    }
  },
  {
    component: SectionCode,
    props: { code: domPurifyOptionsExample }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>schema</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>object</code></p>
        <p><strong>Default:</strong> <code>{}</code></p>
        <p>A JSON schema for the form.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>id</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>''</code></p>
        <p>Used to prefix <code>id</code> and <code>for</code> attributes. Useful if you want to have multiple Jedison forms on the page</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>language</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>'en'</code></p>
        <p>Set default language for error messages and UI texts.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>data</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>object</code></p>
        <p><strong>Default:</strong> <code>undefined</code></p>
        <p>Initial JSON data to populate the form.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>customEditors</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>array</code></p>
        <p><strong>Default:</strong> <code>[]</code></p>
        <p>An array of custom editor classes.</p>`
    }
  },
  {
    component: SectionCode,
    props: { code: customEditorsExample }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>hiddenInputAttributes</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>object</code></p>
        <p><strong>Default:</strong> <code>{}</code></p>
        <p>Attributes for the hidden input that contains the whole JSON value of the form.</p>`
    }
  },
  {
    component: SectionCode,
    props: { code: hiddenInputAttributesExample }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>settings</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>object</code></p>
        <p><strong>Default:</strong> <code>{}</code></p>
        <p>An object to store user data and functions. Useful for when there is the need to provide options to configure a plugin but the options can not be used in schemas because of JSON data limitations. Can be used in annotations when using templates.</p>`
    }
  },
  {
    component: SectionCode,
    props: { code: settingsExample }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>btnContents</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If buttons texts should be displayed.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>btnIcons</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If buttons icons should be displayed.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>enforceConst</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Enforces the <code>const</code> keyword value in editors. <span class="text-warning">Works only in editor mode</span></p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>enforceEnum</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>When <code>true</code> uses the first item in the enum as the default value. <span class="text-warning">Works only in editor mode</span></p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>enforceRequired</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>When <code>true</code> required properties are always displayed and added when missing. <span class="text-warning">Works only in editor mode</span></p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>enforceAdditionalProperties</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>When <code>true</code> the editor removes all properties that are not listed in properties. <span class="text-warning">Works only in editor mode</span></p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>switcherInput</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>'select'</code></p>
        <p>Sets the input type that will be used to witch between multiple editors.</p>
        <ul>
          <li><code>select</code></li>
          <li><code>radios</code></li>
          <li><code>radios-inline</code></li>
          <li><code>modal</code></li>
          <li><code>select-inline</code></li>
        </ul>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>enablePropertiesToggle</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Enables a toggle to show/hide the properties dialog in the UI.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>embedSwitcher</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>When enabled, embeds the type switcher UI inside the selected editor's header instead of displaying it separately above the content. Applies to <code>oneOf</code> and <code>anyOf</code> schemas.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>enableCollapseToggle</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Allows sections to be collapsible in the UI.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>deactivateNonRequired</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Deactivates non-required properties. Useful when working with circular schemas to avoid infinite recursion.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>showErrors</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>'change'</code></p>
        <p>Determines when to display validation errors. Options include:</p>
        <ul>
          <li><code>'never'</code> - Never show validation errors automatically</li>
          <li><code>'change'</code> - Show errors when the input loses focus (default)</li>
          <li><code>'input'</code> - Show errors immediately as the user types (for text inputs, textareas, and number inputs)</li>
          <li><code>'always'</code> - Always show validation errors</li>
        </ul>
        <p><strong>Note:</strong> The <code>'input'</code> option only affects text-based inputs (string inputs, textareas, number inputs). Selection inputs (dropdowns, checkboxes, radios) continue using the <code>'change'</code> event as it's more appropriate for their interaction model.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>assertFormat</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Treats <code>'format'</code> as a validator rather than just an annotation.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>subErrors</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>When enabled, validation errors include detailed sub-error information showing which nested property or item failed validation.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>arrayDelete</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If array delete buttons should be displayed.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>arrayMove</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If array move up and move down buttons should be displayed.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>editJsonData</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Enables inline JSON editing mode, allowing users to directly edit the JSON data within form fields.</p>
        
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionCode,
    props: { code: editJsonDataExample }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>arrayAdd</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If array add buttons should be displayed.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>objectAdd</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If the "Add property" button should be displayed on object editors.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>arrayDeleteConfirm</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>When enabled, shows a confirmation dialog before deleting an array item.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>arrayDeleteAll</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Adds a "Delete all items" button to the array editor's header actions area.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>arrayFooterAdd</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Adds an "Add item" button in the footer of the array editor.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>arrayFooterButtonsPosition</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>'right'</code></p>
        <p><strong>Options:</strong> <code>'left'</code>, <code>'right'</code></p>
        <p>Controls the alignment of footer buttons globally.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>arrayFooterDeleteAll</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Adds a "Delete all items" button in the footer of the array editor.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>useConstraintAttributes</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>When enabled, editors will set native HTML constraint attributes based on JSON Schema keywords:</p>
        <ul>
          <li><strong>Number inputs:</strong> <code>min</code>, <code>max</code></li>
          <li><strong>Number range:</strong> <code>min</code>, <code>max</code></li>
          <li><strong>String inputs:</strong> <code>minlength</code>, <code>maxlength</code>, <code>pattern</code></li>
          <li><strong>Textarea:</strong> <code>minlength</code>, <code>maxlength</code></li>
        </ul>
        <p>This enables native browser validation hints and constraints.</p>
        <p><strong>x-option:</strong> ✅</p>`
    }
  },
    ]
  },
  {
    path: "/schema-options",
    routeName: "Schema Options",
    group: "Features",
    navbar: true,
    title: "Jedison - Schema Options",
    description: "Per-schema configuration using x- prefixed properties.",
    keywords: ["schema options", "x-", "ui-format", "custom", "per-field", "x-addPropertyContent", "x-arrayAdd", "x-arrayAddContent", "x-arrayButtonsPosition", "x-arrayDelete", "x-arrayDeleteAll", "x-arrayDeleteAllContent", "x-arrayDeleteConfirm", "x-arrayDeleteContent", "x-arrayDragContent", "x-arrayFooterAdd", "x-arrayFooterAddContent", "x-arrayFooterButtonsPosition", "x-arrayFooterDeleteAll", "x-arrayFooterDeleteAllContent", "x-arrayMove", "x-arrayMoveDownContent", "x-arrayMoveUpContent", "x-assertFormat", "x-collapseToggleContent", "x-containerAttributes", "x-deactivateNonRequired", "x-discriminator", "x-editJsonData", "x-embedSwitcher", "x-enableCollapseToggle", "x-enforceConst", "x-enforceEnum", "x-enumTitles", "x-filepond", "x-format", "x-grid", "x-hidden", "x-info", "x-inputAttributes", "x-messages", "x-navWarning", "x-navWarningMessage", "x-categoryOrder", "x-objectAdd", "x-propertiesToggleContent", "x-propGroup", "x-propGroupOrder", "x-showErrors", "x-sortable", "x-startCollapsed", "x-subErrors", "x-switcherInput", "x-switcherTitle", "x-titleHidden", "x-titleIconClass", "x-titleTemplate", "x-useConstraintAttributes"],
    component: SectionsPage,
    heading: "Schema Options",
    sections: [
  {
    component: SectionProse,
    props: { html: `<p>Options in schemas are always prefixed with <code>x-</code> (e.g. <code>x-assertFormat</code>) to not collide with future JSON schema spec keywords.</p>` }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-addPropertyContent</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for "add property" buttons.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayAdd</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If array "add" buttons should be displayed.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayAddContent</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for array "add" buttons.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayButtonsPosition</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>'left'</code></p>
        <p><strong>Options:</strong> <code>'left'</code>, <code>'right'</code></p>
        <p>Controls the positioning of action buttons (delete, move, drag) in table format arrays. When set to <code>'right'</code>, buttons appear on the right side of the table. When set to <code>'left'</code> (default), buttons appear on the left side.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayDelete</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If array "delete" buttons should be displayed.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayDeleteAll</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Adds a "Delete all items" button to the array editor's header actions area.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayDeleteAllContent</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p>Text content for the "delete all" button.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayDeleteConfirm</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Per-schema override for showing a confirmation dialog before deleting array items. Overrides the global <code>arrayDeleteConfirm</code> option.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayDeleteContent</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for array "delete" buttons.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayDragContent</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for array "drag" buttons.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayFooterAdd</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Adds an "Add item" button in the footer of the array editor.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayFooterAddContent</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p>Text content for the footer "add" button.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayFooterButtonsPosition</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>'right'</code></p>
        <p><strong>Options:</strong> <code>'left'</code>, <code>'right'</code></p>
        <p>Controls the alignment of footer buttons. When <code>'right'</code>, buttons are pushed to the right side of the footer. When <code>'left'</code>, buttons align to the left.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayFooterDeleteAll</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Adds a "Delete all items" button in the footer of the array editor.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayFooterDeleteAllContent</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p>Text content for the footer "delete all" button.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayMove</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If array "move up" and "move down" buttons should be displayed.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayMoveDownContent</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for array "move down" buttons.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-arrayMoveUpContent</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for array "move up" buttons.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-assertFormat</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Treats <code>"format"</code> as a validator rather than just an annotation.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-collapseToggleContent</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for "collapse" buttons.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-categoryOrder</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string[]</code></p>
        <p>Controls the display order of tabs in categories-format object editors (<code>categories-vertical</code>, <code>categories-horizontal</code>). Categories listed in the array appear first in the specified order; any categories not listed follow in their natural order.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-containerAttributes</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>object</code></p>
        <p>Editors container HTML attributes can be set using this option. Attributes such as <code>class</code> or <code>data-*</code> will be applied to the container element.</p>`
    }
  },
  { component: SectionCode, props: { language: `json`, code: xContainerAttributesExample } },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-deactivateNonRequired</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Whether the editor should deactivate (hide) or activate (show) non required properties. Works only with <code>object</code> type editors.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-discriminator</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code> | <code>object</code></p>
        <p>When set on a <code>oneOf</code> or <code>anyOf</code> schema, determines the active sub-schema by validating the specified property against each schema option. Accepts either a property name string or an object with a <code>propertyName</code> key.</p>
        <p>Falls back to the standard error-counting algorithm if no discriminator match is found.</p>`
    }
  },
  { component: SectionCode, props: { language: `json`, code: xDiscriminatorExample } },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-editJsonData</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Enables inline JSON editing mode for this specific schema, allowing users to directly edit the JSON data within form fields.</p>`
    }
  },
  { component: SectionCode, props: { language: `javascript`, code: xEditJsonDataExample } },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-embedSwitcher</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>When enabled on a <code>oneOf</code> or <code>anyOf</code> schema, embeds the type switcher inside the selected editor's header rather than displaying it above.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-enableCollapseToggle</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Display a collapse button used to collapse or expand editors that support collapse like <code>object</code> and <code>arrays</code>.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-enforceConst</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>Value will remain whatever is defined in schema <code>"const"</code>.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-enforceEnum</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>Whether the editor initial value will be the first item in the <code>"enum"</code>.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-enumTitles</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string[]</code></p>
        <p>Used to display user-friendly labels in the editor instead of those listed in <code>"enum"</code>.</p>`
    }
  },
  { component: SectionCode, props: { language: `json`, code: xEnumTitlesExample } },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-filepond</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>object</code></p>
        <p>Configuration object passed directly to the FilePond instance. Used with <code>"x-format": "filepond"</code>.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-format</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p>Determines which editor UI will be used to edit the json instance.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-grid</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>object</code></p>
        <p>A configuration object to determine the position of the property editor in the parent's grid.</p>
        <p><strong>Options:</strong></p>
        <ul>
          <li><code>columns</code>: How many columns should the editor occupy. The number of columns can vary between css frameworks and their configuration.</li>
          <li><code>offset</code>: How many columns should the editor be offsetted</li>
          <li><code>newRow</code>: Whether the editor should be put in a new row</li>
        </ul>`
    }
  },
  { component: SectionCode, props: { language: `json`, code: xGridExample } },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-hidden</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Editors can be hidden using this option. When set to <code>true</code>, the editor is hidden.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-info</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>object</code></p>
        <p>Used to display extra information.</p>
        <p><strong>Options:</strong></p>
        <ul>
          <li><code>variant</code>: <code>"modal"</code></li>
          <li><code>title</code>: Plain text or <code>markdown</code></li>
          <li><code>content</code>: Plain text or <code>markdown</code></li>
        </ul>`
    }
  },
  { component: SectionCode, props: { language: `json`, code: xInfoExample } },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-inputAttributes</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>object</code></p>
        <p>Used to set attributes for the editor input if it has one.</p>`
    }
  },
  { component: SectionCode, props: { language: `json`, code: xInputAttributesExample } },
  { component: SectionProse, props: { heading: `<code>x-messages</code>`, level: 3, html: `<p><strong>Type:</strong> <code>object</code> | <code>string[]</code></p><p>Validation error messages can be customized using this option in the schema. The option can be used in different ways:</p>` } },
  { component: SectionProse, props: { heading: "Array format", level: 4, html: "<p>Pass messages as an array of strings:</p>" } },
  { component: SectionCode, props: { language: "json", code: xMessagesArray } },
  { component: SectionProse, props: { heading: "Object format with validation keywords", level: 4, html: "<p>Pass messages as an object with validation keywords as keys:</p>" } },
  { component: SectionCode, props: { language: "json", code: xMessagesObject } },
  { component: SectionProse, props: { heading: "Internationalization format", level: 4, html: "<p>Pass messages with language codes for internationalization support:</p>" } },
  { component: SectionCode, props: { language: "json", code: xMessagesI18n } },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-objectAdd</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>Per-schema override for showing or hiding the "Add property" button on object editors. Overrides the global <code>objectAdd</code> option.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-navWarning</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>When enabled, displays a warning icon (⚠) in the legend of array and object editors when they contain nested validation errors. Set to <code>false</code> to disable.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-navWarningMessage</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p>Custom tooltip message displayed on the legend warning icon. Requires <code>x-navWarning</code> to be active.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-propertiesToggleContent</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for "properties" buttons.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-propGroup</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p>Assigns a property to a named group in the properties activation dialog. Used together with <code>enablePropertiesToggle</code> and <code>x-propGroupOrder</code>.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-propGroupOrder</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string[]</code></p>
        <p>Defines the display order of property groups in the properties activation dialog. Groups are defined using <code>x-propGroup</code> on individual properties. Groups not included in the array are appended at the end; the default group (properties without <code>x-propGroup</code>) always appears first.</p>`
    }
  },
  { component: SectionCode, props: { language: `json`, code: xPropGroupOrderExample } },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-showErrors</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>"change"</code></p>
        <p><strong>Options:</strong> <code>"never"</code>, <code>"change"</code>, <code>"input"</code>, <code>"always"</code></p>
        <p>Determines when to display validation errors for this specific schema. Overrides the instance-level <code>showErrors</code> setting.</p>
        <p><strong>Note:</strong> The <code>"input"</code> option provides real-time validation as the user types, but only affects text-based inputs (string inputs, textareas, number inputs).</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-sortable</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Items can be sorted via drag and drop if Sortable.js is available.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-startCollapsed</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Whether the editor should start expanded or collapsed. Works on editors that support collapse like <code>object</code> and <code>arrays</code>.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-subErrors</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Per-schema override for including sub-error details in validation errors. Overrides the global <code>subErrors</code> option.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-switcherInput</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>'select'</code></p>
        <p><strong>Options:</strong> <code>'select'</code>, <code>'radios'</code>, <code>'radios-inline'</code>, <code>'modal'</code>, <code>'select-inline'</code></p>
        <p>Per-schema override for the input type used to switch between multiple editor schemas (anyOf, oneOf, type arrays). Overrides the global <code>switcherInput</code> option.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-switcherTitle</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> property name or <code>"title"</code></p>
        <p>The text displayed in the multiple editor switcher to select this sub-schema editor.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-titleHidden</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Hides the editor title.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-titleIconClass</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p>Icon class to use in titles if using any.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-titleTemplate</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>string</code></p>
        <p>A template to form titles dynamically.</p>`
    }
  },
  {
    component: SectionProse,
    props: {
      heading: `<code>x-useConstraintAttributes</code>`,
      level: 3,
      html: `<p><strong>Type:</strong> <code>boolean</code></p>
        <p>Per-schema override for applying native HTML constraint attributes based on JSON Schema keywords. Overrides the global <code>useConstraintAttributes</code> option.</p>
        <ul>
          <li><strong>Number inputs:</strong> <code>min</code>, <code>max</code></li>
          <li><strong>Number range:</strong> <code>min</code>, <code>max</code></li>
          <li><strong>String inputs:</strong> <code>minlength</code>, <code>maxlength</code>, <code>pattern</code></li>
          <li><strong>Textarea:</strong> <code>minlength</code>, <code>maxlength</code></li>
        </ul>`
    }
  },
    ]
  },
  {
    path: "/array-editor-default",
    routeName: "Array Default",
    group: "Editors",
    navbar: true,
    title: "Jedison - Default Array Editor",
    description: "Standard array editor for JSON Schema array types with add/remove support.",
    keywords: ["array", "default", "add", "remove", "items", "list", "footer", "x-arrayDeleteAll", "x-arrayFooterAdd", "x-arrayFooterDeleteAll", "x-arrayFooterButtonsPosition"],
    component: SectionsPage,
    heading: "Default Array Editor",
    intro: "The standard editor that appears for array types without specific formatting requirements.",
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"array\"</code>"],
          example: arrayEditorDefaultExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Footer",
          intro: "Adds a footer row with add and/or delete-all buttons. Use <code>x-arrayDeleteAll</code> to also show a \"Delete all\" button in the header.",
          notesHtml: "<ul><li><code>x-arrayDeleteAll</code> — Adds a \"Delete all\" button to the header</li><li><code>x-arrayFooterAdd</code> — Adds an \"Add item\" button in the footer</li><li><code>x-arrayFooterDeleteAll</code> — Adds a \"Delete all\" button in the footer</li><li><code>x-arrayFooterButtonsPosition</code> — Aligns footer buttons (<code>'left'</code> or <code>'right'</code>, default: <code>'right'</code>)</li></ul>",
          example: arrayEditorFooterExample
        }
      }
    ]
  },
  {
    path: "/array-editor-checkboxes",
    routeName: "Array Checkboxes",
    group: "Editors",
    navbar: true,
    title: "Jedison - Checkboxes Array Editor",
    description: "Array editor using checkboxes for enum values selection.",
    keywords: ["array", "checkboxes", "enum", "multiple", "select", "x-sortable", "sortable"],
    component: SectionsPage,
    heading: "Checkboxes Array Editor",
    intro: "Displays array values as checkboxes. Ideal for arrays containing unique string, number, or integer values.",
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"array\"</code>", "<code>\"uniqueItems\": true</code>", "<code>\"items\": { \"type\": \"string\" | \"number\" | \"integer\" }</code>"],
          example: arrayEditorCheckboxesExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Sortable Checkboxes",
          intro: "Add <code>\"x-sortable\": true</code> to enable drag-and-drop reordering of selected items. Requires <a href=\"https://sortablejs.github.io/Sortable/\" target=\"_blank\" rel=\"noopener noreferrer\">SortableJS</a> (<code>window.Sortable</code>).",
          example: arrayEditorCheckboxesSortableExample
        }
      }
    ]
  },
  {
    path: "/array-editor-checkboxes-inline",
    routeName: "Array Checkboxes Inline",
    group: "Editors",
    navbar: true,
    title: "Jedison - Inline Checkboxes Array Editor",
    description: "Inline checkboxes layout for array enum selection.",
    keywords: ["array", "checkboxes", "inline", "enum", "horizontal", "x-format", "checkboxes-inline"],
    heading: "Inline Checkboxes Array Editor",
    intro: "Horizontal layout version of the checkboxes editor for more compact displays.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"array\"</code>", "<code>\"uniqueItems\": true</code>", "<code>\"items\": { \"type\": \"string\" | \"number\" | \"integer\" }</code>", "<code>\"x-format\": \"checkboxes-inline\"</code>"],
          example: arrayEditorCheckboxesInlineExample
        }
      }
    ]
  },
  {
    path: "/array-editor-choices",
    routeName: "Array Choices",
    group: "Editors",
    navbar: true,
    requiresPlugin: true,
    title: "Jedison - Choices Array Editor",
    description: "Array editor using Choices.js plugin for tag-style multi-select.",
    keywords: ["array", "choices", "choices.js", "tags", "multi-select", "plugin", "x-format", "choices"],
    heading: "Choices Array Editor",
    intro: "Enhanced multi-select interface using the Choices.js library.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"array\"</code>", "<code>\"x-format\": \"choices\"</code>", "<code>\"items\": { \"type\": \"string\" | \"number\" | \"integer\" }</code>", "Choices.js must be available (<code>window.Choices</code>)", "Plugin: <a href=\"https://github.com/Choices-js/Choices\" target=\"_blank\" rel=\"noopener noreferrer\">Choices.js on GitHub</a>"],
          example: arrayEditorChoicesExample
        }
      }
    ]
  },
  {
    path: "/array-editor-nav-vertical",
    routeName: "Array Navigation Vertical",
    group: "Editors",
    navbar: true,
    title: "Jedison - Vertical Navigation Array Editor",
    description: "Array editor with vertical tab navigation between items.",
    keywords: ["array", "navigation", "vertical", "tabs", "nav", "x-format", "nav-vertical", "footer", "x-arrayDeleteAll", "x-arrayFooterAdd", "x-arrayFooterDeleteAll", "x-arrayFooterButtonsPosition"],
    component: SectionsPage,
    heading: "Vertical Navigation Array Editor",
    intro: "Displays array items as a vertical menu, suitable for tabbed interfaces.",
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"array\"</code>", "<code>\"x-format\": \"nav-vertical\"</code>"],
          example: arrayEditorNavVerticalExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Footer",
          intro: "Adds a footer row with add and/or delete-all buttons. Use <code>x-arrayDeleteAll</code> to also show a \"Delete all\" button in the header.",
          notesHtml: "<ul><li><code>x-arrayDeleteAll</code> — Adds a \"Delete all\" button to the header</li><li><code>x-arrayFooterAdd</code> — Adds an \"Add item\" button in the footer</li><li><code>x-arrayFooterDeleteAll</code> — Adds a \"Delete all\" button in the footer</li><li><code>x-arrayFooterButtonsPosition</code> — Aligns footer buttons (<code>'left'</code> or <code>'right'</code>, default: <code>'right'</code>)</li></ul>",
          example: arrayEditorNavVerticalFooterExample
        }
      }
    ]
  },
  {
    path: "/array-editor-nav-horizontal",
    routeName: "Array Navigation Horizontal",
    group: "Editors",
    navbar: true,
    title: "Jedison - Horizontal Navigation Array Editor",
    description: "Array editor with horizontal tab navigation between items.",
    keywords: ["array", "navigation", "horizontal", "tabs", "nav", "x-format", "nav-horizontal", "footer", "x-arrayDeleteAll", "x-arrayFooterAdd", "x-arrayFooterDeleteAll", "x-arrayFooterButtonsPosition"],
    component: SectionsPage,
    heading: "Horizontal Navigation Array Editor",
    intro: "Horizontal version of the navigation editor for different layout needs.",
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"array\"</code>", "<code>\"x-format\": \"nav-horizontal\"</code>"],
          example: arrayEditorNavHorizontalExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Footer",
          intro: "Adds a footer row with add and/or delete-all buttons. Use <code>x-arrayDeleteAll</code> to also show a \"Delete all\" button in the header.",
          notesHtml: "<ul><li><code>x-arrayDeleteAll</code> — Adds a \"Delete all\" button to the header</li><li><code>x-arrayFooterAdd</code> — Adds an \"Add item\" button in the footer</li><li><code>x-arrayFooterDeleteAll</code> — Adds a \"Delete all\" button in the footer</li><li><code>x-arrayFooterButtonsPosition</code> — Aligns footer buttons (<code>'left'</code> or <code>'right'</code>, default: <code>'right'</code>)</li></ul>",
          example: arrayEditorNavHorizontalFooterExample
        }
      }
    ]
  },
  {
    path: "/array-editor-table",
    routeName: "Array Table",
    group: "Editors",
    navbar: true,
    title: "Jedison - Table Array Editor",
    description: "Array editor rendered as a table for simple value types.",
    keywords: ["array", "table", "grid", "rows", "columns", "x-format", "table", "footer", "x-arrayDeleteAll", "x-arrayFooterAdd", "x-arrayFooterDeleteAll", "x-arrayFooterButtonsPosition"],
    component: SectionsPage,
    heading: "Table Array Editor",
    intro: "Renders array items in a tabular format, with each object property in its own column.",
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"array\"</code>", "<code>\"x-format\": \"table\"</code>"],
          example: arrayEditorTableExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Footer",
          intro: "Adds a footer row with add and/or delete-all buttons. Use <code>x-arrayDeleteAll</code> to also show a \"Delete all\" button in the header.",
          notesHtml: "<ul><li><code>x-arrayDeleteAll</code> — Adds a \"Delete all\" button to the header</li><li><code>x-arrayFooterAdd</code> — Adds an \"Add item\" button in the footer</li><li><code>x-arrayFooterDeleteAll</code> — Adds a \"Delete all\" button in the footer</li><li><code>x-arrayFooterButtonsPosition</code> — Aligns footer buttons (<code>'left'</code> or <code>'right'</code>, default: <code>'right'</code>)</li></ul>",
          example: arrayEditorTableFooterExample
        }
      }
    ]
  },
  {
    path: "/array-editor-table-object",
    routeName: "Array Table Object",
    group: "Editors",
    navbar: true,
    title: "Jedison - Table Object Array Editor",
    description: "Array editor rendered as a table for object items.",
    keywords: ["array", "table", "object", "grid", "rows", "columns", "x-format", "table-object", "footer", "x-arrayDeleteAll", "x-arrayFooterAdd", "x-arrayFooterDeleteAll", "x-arrayFooterButtonsPosition"],
    component: SectionsPage,
    heading: "Table Object Array Editor",
    intro: "Renders array items in a tabular format",
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"array\"</code>", "<code>\"x-format\": \"table-object\"</code>", "<code>\"items\": { \"type\": \"object\" }</code>"],
          example: arrayEditorTableObjectExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Footer",
          intro: "Adds a footer row with add and/or delete-all buttons. Use <code>x-arrayDeleteAll</code> to also show a \"Delete all\" button in the header.",
          notesHtml: "<ul><li><code>x-arrayDeleteAll</code> — Adds a \"Delete all\" button to the header</li><li><code>x-arrayFooterAdd</code> — Adds an \"Add item\" button in the footer</li><li><code>x-arrayFooterDeleteAll</code> — Adds a \"Delete all\" button in the footer</li><li><code>x-arrayFooterButtonsPosition</code> — Aligns footer buttons (<code>'left'</code> or <code>'right'</code>, default: <code>'right'</code>)</li></ul>",
          example: arrayEditorTableObjectFooterExample
        }
      }
    ]
  },
  {
    path: "/array-editor-tuple",
    routeName: "Array Tuple",
    group: "Editors",
    navbar: true,
    title: "Jedison - Tuple Array Editor",
    description: "Array editor for tuple schemas with fixed-length heterogeneous items.",
    keywords: ["array", "tuple", "fixed", "prefixItems", "heterogeneous", "x-format", "tuple"],
    heading: "Tuple Array Editor",
    intro: "Renders a fixed-length array as a single-row table, with each prefixItem as a column.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"array\"</code>", "<code>\"x-format\": \"tuple\"</code>", "<code>\"prefixItems\"</code> must be defined"],
          example: arrayEditorTupleExample
        }
      }
    ]
  },
  {
    path: "/boolean-editor-default",
    routeName: "Boolean Default",
    group: "Editors",
    navbar: true,
    title: "Jedison - Default Boolean Editor",
    description: "Default boolean editor with toggle switch.",
    keywords: ["boolean", "default", "toggle", "switch", "true", "false"],
    heading: "Default Boolean Editor",
    intro: "The standard editor that appears for boolean types without specific formatting requirements.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"boolean\"</code>"],
          example: booleanEditorDefaultExample
        }
      }
    ]
  },
  {
    path: "/boolean-editor-checkbox",
    routeName: "Boolean Checkbox",
    group: "Editors",
    navbar: true,
    title: "Jedison - Checkbox Boolean Editor",
    description: "Boolean editor displayed as a checkbox.",
    keywords: ["boolean", "checkbox", "check", "true", "false", "x-format", "checkbox"],
    heading: "Checkbox Boolean Editor",
    intro: "Renders a single checkbox input for boolean values.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"boolean\"</code>", "<code>\"x-format\": \"checkbox\"</code>"],
          example: booleanEditorCheckboxExample
        }
      }
    ]
  },
  {
    path: "/boolean-editor-radios",
    routeName: "Boolean Radio Buttons",
    group: "Editors",
    navbar: true,
    title: "Jedison - Radio Buttons Boolean Editor",
    description: "Boolean editor with stacked radio button inputs.",
    keywords: ["boolean", "radio", "buttons", "true", "false", "x-format", "radios", "x-enumTitles"],
    heading: "Radio Buttons Boolean Editor",
    intro: "Renders two radio inputs for explicit true/false selection. Labels can be customized.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"boolean\"</code>", "<code>\"x-format\": \"radios\"</code>", "Optional: <code>\"x-enumTitles\": [\"Yes\", \"No\"]</code> for custom labels"],
          example: booleanEditorRadiosExample
        }
      }
    ]
  },
  {
    path: "/boolean-editor-radios-inline",
    routeName: "Boolean Radio Buttons Inline",
    group: "Editors",
    navbar: true,
    title: "Jedison - Inline Radio Buttons Boolean Editor",
    description: "Boolean editor with inline radio button inputs.",
    keywords: ["boolean", "radio", "inline", "horizontal", "true", "false", "x-format", "radios-inline", "x-enumTitles"],
    heading: "Inline Radio Buttons Boolean Editor",
    intro: "Horizontal layout version of the radio buttons editor.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"boolean\"</code>", "<code>\"x-format\": \"radios-inline\"</code>", "Optional: <code>\"x-enumTitles\": [\"Yes\", \"No\"]</code> for custom labels"],
          example: booleanEditorRadiosInlineExample
        }
      }
    ]
  },
  {
    path: "/boolean-editor-select",
    routeName: "Boolean Select Dropdown",
    group: "Editors",
    navbar: true,
    title: "Jedison - Select Dropdown Boolean Editor",
    description: "Boolean editor as a select dropdown.",
    keywords: ["boolean", "select", "dropdown", "true", "false", "x-format", "select", "x-enumTitles"],
    heading: "Select Dropdown Boolean Editor",
    intro: "Renders a select input with true/false options. Option labels can be customized.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"boolean\"</code>", "<code>\"x-format\": \"select\"</code>", "Optional: <code>\"x-enumTitles\": [\"Yes\", \"No\"]</code> for custom labels"],
          example: booleanEditorSelectExample
        }
      }
    ]
  },
  {
    path: "/number-editor-default",
    routeName: "Number Default",
    group: "Editors",
    navbar: true,
    title: "Jedison - Default Number Editor",
    description: "Default number editor with numeric text input.",
    keywords: ["number", "integer", "default", "input", "numeric"],
    heading: "Default Number Editor",
    intro: "A standard numeric input field that appears when no specific format is requested.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"number\"</code> or <code>\"type\": \"integer\"</code>"],
          example: numberEditorDefaultExample
        }
      }
    ]
  },
  {
    path: "/number-editor-select",
    routeName: "Number Select",
    group: "Editors",
    navbar: true,
    title: "Jedison - Select Number Editor",
    description: "Number editor as a select dropdown for enum values.",
    keywords: ["number", "select", "dropdown", "enum", "x-enumTitles"],
    component: SectionsPage,
    heading: `Select Number Editor`,
    intro: `Displays a dropdown select box populated with the values from the <code>enum</code> array. Ideal when users need to choose from predefined numeric options.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "number"</code> or <code>"type": "integer"</code>`, `<code>"enum"</code> array defined`],
          notesHeading: `Optional Properties`,
          notesHtml: `<ul>
          <li><code>"x-enumTitles"</code> - Human-readable labels that replace the numeric values in the dropdown</li>
        </ul>`,
          example: numberEditorSelectExample
        }
      }
    ]
  },
  {
    path: "/number-editor-radios",
    routeName: "Number Radio Buttons",
    group: "Editors",
    navbar: true,
    title: "Jedison - Radio Buttons Number Editor",
    description: "Number editor with stacked radio buttons for enum values.",
    keywords: ["number", "radio", "buttons", "enum", "x-format", "radios", "x-enumTitles"],
    component: SectionsPage,
    heading: `Radio Buttons Number Editor`,
    intro: `Presents all available options as individual radio buttons in a vertical list, providing immediate visibility of all choices without interaction.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "number"</code> or <code>"type": "integer"</code>`, `<code>"enum"</code> array defined`, `<code>"x-format": "radios"</code>`],
          notesHeading: `Optional Properties`,
          notesHtml: `<ul>
          <li><code>"x-enumTitles"</code> - Descriptive labels shown next to each radio button</li>
        </ul>`,
          example: numberEditorRadiosExample
        }
      }
    ]
  },
  {
    path: "/number-editor-radios-inline",
    routeName: "Number Radio Buttons Inline",
    group: "Editors",
    navbar: true,
    title: "Jedison - Inline Radio Buttons Number Editor",
    description: "Number editor with inline radio buttons for enum values.",
    keywords: ["number", "radio", "inline", "enum", "x-format", "radios-inline", "x-enumTitles"],
    component: SectionsPage,
    heading: `Inline Radio Buttons Number Editor`,
    intro: `Displays radio buttons horizontally for more compact layouts while maintaining the same functionality as the vertical radio list.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "number"</code> or <code>"type": "integer"</code>`, `<code>"enum"</code> array defined`, `<code>"x-format": "radios-inline"</code>`],
          notesHeading: `Optional Properties`,
          notesHtml: `<ul>
          <li><code>"x-enumTitles"</code> - Short labels that work well in horizontal layouts</li>
        </ul>`,
          example: numberEditorRadiosInlineExample
        }
      }
    ]
  },
  {
    path: "/number-editor-nullable",
    routeName: "Number Nullable",
    group: "Editors",
    navbar: true,
    title: "Jedison - Nullable Number Editor",
    description: "Number editor that supports null values.",
    keywords: ["number", "nullable", "null", "optional", "x-nullable"],
    heading: "Nullable Number Editor",
    intro: "A standard numeric input field. When empty the instance value is <code>null</code>",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": [\"null\", \"number\"]</code> or <code>\"type\": [\"null\", \"integer\"]</code>", "<code>\"x-nullable\": true</code>"],
          example: numberEditorNullableExample
        }
      }
    ]
  },
  {
    path: "/number-editor-raty",
    routeName: "Number Star Rating",
    group: "Editors",
    navbar: true,
    requiresPlugin: true,
    title: "Jedison - Star Rating (Raty) Number Editor",
    description: "Number editor as a star rating widget using Raty plugin.",
    keywords: ["number", "rating", "stars", "raty", "plugin", "x-format", "raty", "x-raty"],
    component: SectionsPage,
    heading: `Star Rating (Raty) Number Editor`,
    intro: `Interactive star rating control that converts numeric selection into visual feedback. Supports half-star increments and custom star elements.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "number"</code> or <code>"type": "integer"</code>`, `<code>"x-format": "raty"</code> property defined`, `Raty.js library loaded (<code>window.Raty</code>)`, `Plugin: <a href="https://github.com/wbotelhos/raty" target="_blank" rel="noopener noreferrer">Raty.js on GitHub</a>`],
          notesHeading: `Plugin Options`,
          notesHtml: `<p>Options can be passed to the plugin via <code>"x-raty"</code> keyword</p>
        <ul>
          <li><code>"x-raty.half"</code> - Enables selection of half-star values when true</li>
          <li><code>"x-raty.starType"</code> - Defines HTML tag used for star elements (default: 'i')</li>
        </ul>`,
          example: numberEditorRatyExample
        }
      }
    ]
  },
  {
    path: "/number-editor-imask",
    routeName: "Number IMask",
    group: "Editors",
    navbar: true,
    requiresPlugin: true,
    title: "Jedison - IMask Number Editor",
    description: "Number editor with IMask input masking plugin.",
    keywords: ["number", "imask", "mask", "format", "plugin", "x-format", "imask", "x-imask"],
    component: SectionsPage,
    heading: `IMask Number Editor`,
    intro: `Renders a masked text input using IMask.js.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "number"</code>`, `<code>"x-format": "imask"</code>`, `IMask.js must be available (<code>window.IMask</code>)`, `Plugin: <a href="https://github.com/uNmAnNeR/imaskjs" target="_blank" rel="noopener noreferrer">IMask.js on GitHub</a>`],
          notesHeading: `Plugin Options`,
          notesHtml: `<p>Options can be passed to the plugin via <code>"x-imask"</code> keyword</p>`,
          example: numberEditorImaskExample
        }
      }
    ]
  },
  {
    path: "/number-editor-range",
    routeName: "Number Range",
    group: "Editors",
    navbar: true,
    title: "Jedison - Number Range Editor",
    description: "Number editor as a range slider input.",
    keywords: ["number", "range", "slider", "min", "max", "x-format", "range", "x-inputAttributes"],
    component: SectionsPage,
    heading: `Number Range`,
    intro: `Renders a range slider input for numeric values with minimum and maximum constraints.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "number"</code> or <code>"type": "integer"</code>`, `<code>"minimum"</code> and <code>"maximum"</code> properties are defined, OR`, `<code>"x-format": "range"</code> is explicitly specified`],
          notesHeading: `Features`,
          notesHtml: `<ul>
          <li>Automatic step calculation based on <code>multipleOf</code> property</li>
          <li>Support for exclusive minimum/maximum with <code>exclusiveMinimum</code>/<code>exclusiveMaximum</code></li>
          <li>Custom step override using <code>x-inputAttributes.step</code></li>
          <li>Custom min/max override using <code>x-inputAttributes</code></li>
        </ul>`,
          example: numberEditorRangeExample
        }
      }
    ]
  },
  {
    path: "/object-editor-default",
    routeName: "Object Default",
    group: "Editors",
    navbar: true,
    title: "Jedison - Default Object Editor",
    description: "Default object editor rendering all properties vertically.",
    keywords: ["object", "default", "properties", "vertical", "x-addPropertyContent", "x-collapseToggleContent", "x-deactivateNonRequired", "x-enableCollapseToggle", "x-propertiesToggleContent", "x-startCollapsed", "x-titleTemplate"],
    component: SectionsPage,
    heading: `Default Object Editor`,
    intro: `The standard editor that renders a fieldset containing property editors. The fieldset can be collapsed or expanded.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "object"</code>`],
          notesHeading: `Options`,
          notesHtml: `<ul>
          <li><code>x-addPropertyContent</code>: Custom content for add property button</li>
          <li><code>x-collapseToggleContent</code>: Custom content for collapse toggle</li>
          <li><code>x-deactivateNonRequired</code>: Deactivate non-required properties</li>
          <li><code>x-enableCollapseToggle</code>: Enable collapse/expand functionality</li>
          <li><code>x-propertiesToggleContent</code>: Custom content for properties toggle</li>
          <li><code>x-startCollapsed</code>: Start with the object collapsed</li>
          <li><code>x-titleTemplate</code>: Custom template for the title</li>
        </ul>`,
          example: objectEditorDefaultExample
        }
      }
    ]
  },
  {
    path: "/object-editor-grid",
    routeName: "Object Grid",
    group: "Editors",
    navbar: true,
    title: "Jedison - Grid Object Editor",
    description: "Object editor with Bootstrap grid layout for properties.",
    keywords: ["object", "grid", "columns", "layout", "bootstrap", "x-format", "grid"],
    component: SectionsPage,
    heading: "Grid Object Editor",
    intro: "Displays object properties using a grid system to position property editors within a fieldset layout.",
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"object\"</code>", "<code>\"x-format\": \"grid\"</code>"],
          notesHeading: "Grid Options for Properties",
          notesHtml: "<ul><li><code>columns</code>: How many columns should the editor occupy</li><li><code>offset</code>: How many columns should the editor be offset</li><li><code>newRow</code>: Whether the editor should be put in a new row</li></ul>",
          example: objectEditorGridExample
        }
      }
    ]
  },
  {
    path: "/object-editor-nav-vertical",
    routeName: "Object Navigation Vertical",
    group: "Editors",
    navbar: true,
    title: "Jedison - Vertical Navigation Object Editor",
    description: "Object editor with vertical tab navigation between properties.",
    keywords: ["object", "navigation", "vertical", "tabs", "nav", "x-format", "nav-vertical", "x-navWarning", "x-navWarningMessage"],
    component: SectionsPage,
    heading: `Vertical Navigation Object Editor`,
    intro: `Displays object properties with vertical navigation, suitable for tabbed interfaces within a fieldset.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "object"</code>`, `<code>"x-format": "nav-vertical"</code>`],
          notesHeading: `Options`,
          notesHtml: `<ul>
          <li><code>"x-navWarning"</code> — show a warning indicator on tabs that contain validation errors (defaults to <code>true</code>)</li>
          <li><code>"x-navWarningMessage"</code> — custom message shown in the tab warning indicator</li>
          <li><code>"x-format": "nav-vertical-N"</code> — use a custom column width for the tab list, where <code>N</code> is a Bootstrap column number (e.g. <code>"nav-vertical-3"</code>)</li>
        </ul>`,
          example: objectEditorNavVerticalExample
        }
      }
    ]
  },
  {
    path: "/object-editor-nav-horizontal",
    routeName: "Object Navigation Horizontal",
    group: "Editors",
    navbar: true,
    title: "Jedison - Horizontal Navigation Object Editor",
    description: "Object editor with horizontal tab navigation between properties.",
    keywords: ["object", "navigation", "horizontal", "tabs", "nav", "x-format", "nav-horizontal", "x-navWarning", "x-navWarningMessage"],
    component: SectionsPage,
    heading: `Horizontal Navigation Object Editor`,
    intro: `Displays object properties with horizontal navigation, suitable for tab-based interfaces within a fieldset.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "object"</code>`, `<code>"x-format": "nav-horizontal"</code>`],
          notesHeading: `Options`,
          notesHtml: `<ul>
          <li><code>"x-navWarning"</code> — show a warning indicator on tabs that contain validation errors (defaults to <code>true</code>)</li>
          <li><code>"x-navWarningMessage"</code> — custom message shown in the tab warning indicator</li>
        </ul>`,
          example: objectEditorNavHorizontalExample
        }
      }
    ]
  },
  {
    path: "/object-editor-categories-vertical",
    routeName: "Object Categories Vertical",
    group: "Editors",
    navbar: true,
    title: "Jedison - Vertical Categories Object Editor",
    description: "Object editor with vertical category tabs grouping properties.",
    keywords: ["object", "categories", "vertical", "tabs", "groups", "x-format", "categories-vertical", "x-categoriesDefaultLabel", "x-category", "x-navWarning", "x-navWarningMessage", "x-categoryOrder"],
    component: SectionsPage,
    heading: `Vertical Categories Object Editor`,
    intro: `Displays object properties grouped into tabs arranged vertically on the left side. Primitive properties are automatically grouped into a default category, while nested objects and arrays each get their own tab.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "object"</code>`, `<code>"x-format": "categories-vertical"</code>`],
          notesHeading: `Options`,
          notesHtml: `<ul>
          <li><code>"x-categoriesDefaultLabel"</code> — label for the default tab that groups primitive properties (defaults to <code>"Basic"</code>)</li>
          <li><code>"x-category"</code> — set on a child property schema to assign it to a named tab</li>
          <li><code>"x-navWarning"</code> — show a warning indicator on tabs that contain validation errors</li>
          <li><code>"x-navWarningMessage"</code> — custom message shown in the tab warning indicator</li>
          <li><code>"x-categoryOrder"</code> — array of category names that controls the tab display order; listed categories appear first in the given order, unlisted ones follow</li>
          <li><code>"x-format": "categories-vertical-N"</code> — use a multi-column layout where <code>N</code> is the number of columns (e.g. <code>"categories-vertical-3"</code>)</li>
        </ul>`,
          example: objectEditorCategoriesVerticalExample
        }
      }
    ]
  },
  {
    path: "/object-editor-categories-horizontal",
    routeName: "Object Categories Horizontal",
    group: "Editors",
    navbar: true,
    title: "Jedison - Horizontal Categories Object Editor",
    description: "Object editor with horizontal category tabs grouping properties.",
    keywords: ["object", "categories", "horizontal", "tabs", "groups", "x-format", "categories-horizontal", "x-categoriesDefaultLabel", "x-category", "x-navWarning", "x-navWarningMessage", "x-categoryOrder"],
    component: SectionsPage,
    heading: "Horizontal Categories Object Editor",
    intro: "Displays object properties grouped into tabs arranged horizontally across the top. Primitive properties are automatically grouped into a default category, while nested objects and arrays each get their own tab.",
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"object\"</code>", "<code>\"x-format\": \"categories-horizontal\"</code>"],
          notesHeading: "Options",
          notesHtml: "<ul><li><code>\"x-categoriesDefaultLabel\"</code> — label for the default tab that groups primitive properties (defaults to <code>\"Basic\"</code>)</li><li><code>\"x-category\"</code> — set on a child property schema to assign it to a named tab</li><li><code>\"x-navWarning\"</code> — show a warning indicator on tabs that contain validation errors</li><li><code>\"x-navWarningMessage\"</code> — custom message shown in the tab warning indicator</li><li><code>\"x-categoryOrder\"</code> — array of category names that controls the tab display order; listed categories appear first in the given order, unlisted ones follow</li></ul>",
          example: objectEditorCategoriesHorizontalExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Category Order Example",
          intro: "Use <code>\"x-categoryOrder\"</code> to control the tab sequence. Tabs listed in the array appear first; any others follow in natural order.",
          example: objectEditorCategoriesCategoryOrderExample
        }
      }
    ]
  },
  {
    path: "/object-editor-accordion",
    routeName: "Object Accordion",
    group: "Editors",
    navbar: true,
    title: "Jedison - Object Accordion Editor",
    description: "Object editor rendered as a Bootstrap accordion, each property in its own collapsible panel.",
    keywords: ["object", "accordion", "collapse", "panel", "x-format", "accordion"],
    heading: "Object Accordion",
    intro: "Renders object properties as collapsible Bootstrap accordion panels.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"object\"</code>", "<code>\"x-format\": \"accordion\"</code>"],
          example: objectEditorAccordionExample
        }
      }
    ]
  },
  {
    path: "/object-editor-radios",
    routeName: "Object Radios",
    group: "Editors",
    navbar: true,
    title: "Jedison - Object Radios Editor",
    description: "Documentation for the object radios editor that stores complex object values behind radio button selections",
    keywords: ["object", "radio", "buttons", "enum", "x-format", "radios", "x-enumTitles"],
    heading: "Object Radios",
    intro: "Renders radio inputs for object enum values. Each radio stores the full selected object as the field value. Labels can be customized with x-enumTitles.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"object\"</code>", "<code>\"enum\": [...]</code>", "<code>\"x-format\": \"radios\"</code>"],
          example: objectEditorRadiosExample
        }
      }
    ]
  },
  {
    path: "/object-editor-radios-inline",
    routeName: "Object Radios Inline",
    group: "Editors",
    navbar: true,
    title: "Jedison - Inline Object Radios Editor",
    description: "Documentation for the inline object radios editor with horizontal layout",
    keywords: ["object", "radio", "inline", "enum", "x-format", "radios-inline", "x-enumTitles"],
    heading: "Inline Object Radios",
    intro: "Horizontal layout version of the object radios editor for more compact displays.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"object\"</code>", "<code>\"enum\": [...]</code>", "<code>\"x-format\": \"radios-inline\"</code>"],
          example: objectEditorRadiosInlineExample
        }
      }
    ]
  },
  {
    path: "/string-editor-default",
    routeName: "String Default",
    group: "Editors",
    navbar: true,
    title: "Jedison - Default String Editor",
    description: "Default string editor as a text input.",
    keywords: ["string", "default", "text", "input"],
    heading: "Default String Editor",
    intro: "The standard text input that appears for string types without specific formatting requirements.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"string\"</code>"],
          example: stringEditorDefaultExample
        }
      }
    ]
  },
  {
    path: "/string-editor-radios",
    routeName: "String Radio Buttons",
    group: "Editors",
    navbar: true,
    title: "Jedison - String Radios Editor",
    description: "String editor with stacked radio buttons for enum values.",
    keywords: ["string", "radio", "buttons", "enum", "x-format", "radios"],
    heading: "String Radios",
    intro: "Renders as many radio type inputs as values in the enum constraint. The radio labels can be customized with the enumTitles option.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"string\"</code>", "<code>\"enum\": [...]</code>", "<code>\"x-format\": \"radios\"</code>"],
          example: stringEditorRadiosExample
        }
      }
    ]
  },
  {
    path: "/string-editor-radios-inline",
    routeName: "String Radio Buttons Inline",
    group: "Editors",
    navbar: true,
    title: "Jedison - Inline String Radios Editor",
    description: "String editor with inline radio buttons for enum values.",
    keywords: ["string", "radio", "inline", "enum", "x-format", "radios-inline"],
    heading: "Inline String Radios",
    intro: "Horizontal layout version of the radio editor for more compact displays.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"string\"</code>", "<code>\"enum\": [...]</code>", "<code>\"x-format\": \"radios-inline\"</code>"],
          example: stringEditorRadiosInlineExample
        }
      }
    ]
  },
  {
    path: "/string-editor-select",
    routeName: "String Select",
    group: "Editors",
    navbar: true,
    title: "Jedison - String Select Editor",
    description: "String editor as a select dropdown for enum values.",
    keywords: ["string", "select", "dropdown", "enum"],
    heading: "String Select",
    intro: "Renders a select dropdown with options from the enum constraint. The options labels can be customized with the enumTitles option.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"string\"</code>", "<code>\"enum\": [...]</code>"],
          example: stringEditorSelectExample
        }
      }
    ]
  },
  {
    path: "/string-editor-textarea",
    routeName: "String Textarea",
    group: "Editors",
    navbar: true,
    title: "Jedison - String Textarea Editor",
    description: "String editor as a multiline textarea.",
    keywords: ["string", "textarea", "multiline", "text", "x-format", "textarea"],
    heading: "String Textarea",
    intro: "Renders a multi-line textarea input for longer string content.",
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["<code>\"type\": \"string\"</code>", "<code>\"x-format\": \"textarea\"</code>"],
          example: stringEditorTextareaExample
        }
      }
    ]
  },
  {
    path: "/string-editor-awesomplete",
    routeName: "String Awesomplete",
    group: "Editors",
    navbar: true,
    requiresPlugin: true,
    title: "Jedison - String Awesomplete Editor",
    description: "String editor with autocomplete using Awesomplete plugin.",
    keywords: ["string", "awesomplete", "autocomplete", "suggest", "plugin", "x-format", "awesomplete", "x-awesomplete"],
    component: SectionsPage,
    heading: `String Awesomplete`,
    intro: `Renders an autocomplete featured text input using Awesomplete.js.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "string"</code>`, `<code>"x-format": "awesomplete"</code>`, `Awesomplete.js must be available (<code>window.Awesomplete</code>)`, `Plugin: <a href="https://github.com/LeaVerou/awesomplete" target="_blank" rel="noopener noreferrer">Awesomplete.js on GitHub</a>`],
          notesHeading: `Plugin Options`,
          notesHtml: `<p>Options can be passed to the plugin via <code>"x-awesomplete"</code> keyword</p>`,
          example: stringEditorAwesompleteExample
        }
      }
    ]
  },
  {
    path: "/string-editor-flatpickr",
    routeName: "String Flatpickr",
    group: "Editors",
    navbar: true,
    requiresPlugin: true,
    title: "Jedison - String Flatpickr Editor",
    description: "String editor with date/time picker using Flatpickr plugin.",
    keywords: ["string", "flatpickr", "date", "time", "picker", "plugin", "x-flatpickr"],
    component: SectionsPage,
    heading: `String Flatpickr`,
    intro: `Renders a datetime picker using flatpickr.js.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "string"</code>`, `<code>"x-flatpickr": { ... }</code>`, `flatpickr.js must be available (<code>window.flatpickr</code>)`, `Plugin: <a href="https://github.com/flatpickr/flatpickr" target="_blank" rel="noopener noreferrer">Flatpickr.js on GitHub</a>`],
          notesHeading: `Plugin Options`,
          notesHtml: `<p>Options can be passed to the plugin via <code>"x-flatpickr"</code> keyword</p>`,
          example: stringEditorFlatpickrExample
        }
      }
    ]
  },
  {
    path: "/string-editor-imask",
    routeName: "String IMask",
    group: "Editors",
    navbar: true,
    requiresPlugin: true,
    title: "Jedison - String IMask Editor",
    description: "String editor with input masking using IMask plugin.",
    keywords: ["string", "imask", "mask", "format", "pattern", "plugin", "x-format", "imask", "x-imask"],
    component: SectionsPage,
    heading: `String IMask`,
    intro: `Renders a masked text input using IMask.js.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "string"</code>`, `<code>"x-format": "imask"</code>`, `IMask.js must be available (<code>window.IMask</code>)`, `Plugin: <a href="https://github.com/uNmAnNeR/imaskjs" target="_blank" rel="noopener noreferrer">IMask.js on GitHub</a>`],
          notesHeading: `Plugin Options`,
          notesHtml: `<p>Options can be passed to the plugin via <code>"x-imask"</code> keyword</p>`,
          example: stringEditorImaskExample
        }
      }
    ]
  },
  {
    path: "/string-editor-jodit",
    routeName: "String Jodit",
    group: "Editors",
    navbar: true,
    requiresPlugin: true,
    title: "Jedison - String Jodit Editor",
    description: "String editor with rich text WYSIWYG using Jodit plugin.",
    keywords: ["string", "jodit", "wysiwyg", "rich text", "html", "plugin", "x-format", "jodit", "x-jodit"],
    component: SectionsPage,
    heading: `String Jodit`,
    intro: `Renders a WYSIWYG editor using Jodit.js.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "string"</code>`, `<code>"x-format": "jodit"</code>`, `Jodit.js must be available (<code>window.Jodit</code>)`, `Plugin: <a href="https://github.com/xdan/jodit" target="_blank" rel="noopener noreferrer">Jodit.js on GitHub</a>`],
          notesHeading: `Plugin Options`,
          notesHtml: `<p>Options can be passed to the plugin via <code>"x-jodit"</code> keyword</p>`,
          example: stringEditorJoditExample
        }
      }
    ]
  },
  {
    path: "/string-editor-quill",
    routeName: "String Quill",
    group: "Editors",
    navbar: true,
    requiresPlugin: true,
    title: "Jedison - String Quill Editor",
    description: "String editor with rich text WYSIWYG using Quill plugin.",
    keywords: ["string", "quill", "wysiwyg", "rich text", "html", "plugin", "x-format", "quill", "x-quill"],
    component: SectionsPage,
    heading: `String Quill`,
    intro: `Renders a WYSIWYG editor using Quill.js.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "string"</code>`, `<code>"x-format": "quill"</code>`, `Quill.js must be available (<code>window.Quill</code>)`, `Plugin: <a href="https://github.com/quilljs/quill" target="_blank" rel="noopener noreferrer">Quill.js on GitHub</a>`],
          notesHeading: `Plugin Options`,
          notesHtml: `<p>Options can be passed to the plugin via <code>"x-quill"</code> keyword</p>`,
          example: stringEditorQuillExample
        }
      }
    ]
  },
  {
    path: "/string-editor-filepond",
    routeName: "String FilePond",
    group: "Editors",
    navbar: true,
    requiresPlugin: true,
    title: "Jedison - String FilePond Editor",
    description: "String editor for file upload using the FilePond plugin.",
    keywords: ["string", "filepond", "file", "upload", "drag", "drop", "plugin", "x-format", "filepond", "x-filepond"],
    component: SectionsPage,
    heading: `String FilePond`,
    intro: `Renders a file upload widget using FilePond.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "string"</code>`, `<code>"x-format": "filepond"</code>`, `FilePond must be available (<code>window.FilePond</code>)`, `Plugin: <a href="https://pqina.nl/filepond/" target="_blank" rel="noopener noreferrer">FilePond</a>`],
          notesHeading: `Plugin Options`,
          notesHtml: `<p>Options can be passed to the plugin via <code>"x-filepond"</code> keyword</p>`,
          example: stringEditorFilepondExample
        }
      }
    ]
  },
  {
    path: "/null-editor-default",
    routeName: "Null Default",
    group: "Editors",
    navbar: true,
    title: "Jedison - Default Null Editor",
    description: "Default null editor for JSON Schema null type.",
    keywords: ["null", "default", "null type"],
    component: SectionsPage,
    heading: `Default Null Editor`,
    intro: `The standard editor that appears for null types without specific formatting requirements.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`<code>"type": "null"</code>`],
          notesHeading: `Example`,
          notesHtml: `<pre><code>{
  "type": "null",
  "title": "Null"
}</code></pre>`,
          example: nullEditorDefaultExample
        }
      }
    ]
  },
  {
    path: "/custom-constraint",
    routeName: "Custom constraint",
    group: "Advanced",
    navbar: true,
    title: "Jedison - Custom Constraints",
    description: "Defining custom validation constraints beyond standard JSON Schema.",
    keywords: ["custom", "constraint", "validation", "custom validator", "advanced"],
    component: SectionsPage,
    heading: "Custom Constraints",
    sections: [
      {
        component: SectionProse,
        props: {
          heading: "Adding Custom Constraints",
          html: `<p>Jedison allows you to extend validation beyond standard JSON Schema rules by adding custom constraints. These are defined in the <code>constraints</code> option when initializing Jedison.</p><h3>How Custom Constraints Work</h3><p>Custom constraints are validation functions that:</p><ul><li>Check for specific schema extensions (typically using <code>x-</code> prefixed properties)</li><li>Return an array of validation errors/warnings</li><li>Have access to the current validation context (validator, value, schema, key, path, translator)</li><li>Can be configured as either errors or warnings</li></ul><h3>Implementation Example</h3><p>The example shows a custom constraint checking <code>x-my-constraint</code>:</p>`
        }
      },
      { component: SectionCode, props: { code: mdCustomConstraint } },
      {
        component: SectionProse,
        props: {
          html: `<h3>Key Components</h3><ul><li><strong><code>context</code></strong> object containing:<ul><li><code>value</code> - The current field value</li><li><code>path</code> - JSON path to the field</li><li><code>schema</code> - The schema for this field</li><li><code>translator</code> - The Translator instance</li></ul></li><li><strong>Error objects</strong> with:<ul><li><code>type</code> - 'error' or 'warning' severity level</li><li><code>path</code> - Location of the validation issue</li><li><code>constraint</code> - Name of the constraint</li><li><code>messages</code> - User-friendly error messages</li></ul></li></ul><h2>Error Handling and Validation States</h2><p>Jedison provides flexible error handling through the <code>getErrors()</code> method:</p><ul><li><strong><code>jedison.getErrors()</code></strong> - Returns only error-level validations (default)</li><li><strong><code>jedison.getErrors(['error', 'warning'])</code></strong> - Returns both errors and warnings</li></ul><h3>Benefits of Warning-Level Constraints</h3><p>Using warning-level constraints provides several advantages:</p><ul><li><strong>Soft validation</strong> - Users can proceed with warnings while being informed of potential issues</li><li><strong>Progressive validation</strong> - Start with warnings that can be upgraded to errors later</li><li><strong>Better UX</strong> - Different visual treatment for errors (blocking) vs warnings (advisory)</li><li><strong>Flexible workflows</strong> - Allow submission with warnings while maintaining data quality standards</li></ul><p>In the live example below, the form displays <strong>warnings (yellow)</strong> and <strong>errors (red)</strong> independently. By default, <code>getErrors()</code> only returns errors, while warnings are still shown in the UI. To include warnings in the validation result, pass an array of filters: <code>['error', 'warning']</code>. Final validation behavior is left to the user's implementation.</p>`
        }
      },
      { component: SectionExample, props: { exampleHtml: htmlCustomValidator } }
    ]
  },
  {
    path: "/templates",
    routeName: "Templates",
    group: "Advanced",
    navbar: true,
    title: "Jedison - Template Placeholders",
    description: "Using templates to compute dynamic field values from other fields.",
    keywords: ["templates", "dynamic", "computed", "values", "reactive", "advanced"],
    component: SectionsPage,
    heading: "Templates",
    sections: [
      {
        component: SectionProse,
        props: {
          heading: "Using Placeholders in Templates",
          html: `<p>Jedison allows you to define templates with dynamic titles and descriptions that use placeholders. These placeholders are replaced at runtime with relevant values.</p><h3>Available Placeholders</h3><ul><li><code>value</code> — The current value (from <code>getValue()</code>); <strong>always available</strong></li><li><code>settings</code> — Configuration options (from <code>jedison.options.settings</code>); <strong>always available</strong></li><li><code>i0</code> — The zero-based index of the array item; available <strong>only if the editor is an array item editor</strong></li><li><code>i1</code> — The one-based index of the array item; available <strong>only if the editor is an array item editor</strong></li><li><code>parent</code> — Parent instance template data; <strong>available when parent exists</strong></li><li><code>length</code> — The length of the string value; <strong>available only for string types</strong></li><li><code>remaining</code> — Characters remaining (<code>maxLength - length</code>); <strong>available only for strings with maxLength</strong></li></ul><h3>Fallback Values</h3><p>Use the <code>||</code> operator inside a placeholder to provide a fallback value when the placeholder resolves to <code>null</code> or <code>undefined</code>:</p><pre><code>{{ value.name || 'Unnamed' }}</code></pre><p>The fallback can be any quoted string (single or double quotes). When the placeholder has a value, the fallback is ignored.</p>`
        }
      },
      { component: SectionExample, props: { example: templatesFallbackExample } },
      {
        component: SectionProse,
        props: {
          heading: "Parent Template Access",
          level: 3,
          html: `<p>When working with nested structures, you can access parent instance data using the <code>parent</code> placeholder. This is particularly useful for creating hierarchical titles and references.</p><h4>Common Parent Access Patterns</h4><ul><li><code>parent.value</code> — Access the parent's current value</li><li><code>parent.i1</code> — Access the parent's array index (1-based)</li><li><code>parent.parent.value</code> — Access grandparent's value (for deeply nested structures)</li></ul>`
        }
      },
      { component: SectionExample, props: { example: templatesExample } }
    ]
  },
]

export default pages
