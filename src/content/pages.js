// Single source of truth for every documentation page's route, nav
// grouping, search metadata, and content. Every route renders through
// SectionsPage.vue, which reads this entry's heading/intro plus an ordered
// list of { component, props } sections - adding or reshaping a page never
// touches a template, only data.
import SectionsPage from '@/pages/SectionsPage.vue'
import SectionProse from '@/components/sections/SectionProse.vue'
import SectionCode from '@/components/sections/SectionCode.vue'
import SectionExample from '@/components/sections/SectionExample.vue'

import arrayEditorCheckboxesInlineExample
  from '@/assets/live-examples/array-editor-checkboxes-inline.json'
import arrayEditorChoicesExample from '@/assets/live-examples/array-editor-choices.json'
import arrayEditorTupleExample from '@/assets/live-examples/array-editor-tuple.json'
import booleanEditorDefaultExample from '@/assets/live-examples/boolean-editor-default.json'
import booleanEditorCheckboxExample from '@/assets/live-examples/boolean-editor-checkbox.json'
import booleanEditorRadiosExample from '@/assets/live-examples/boolean-editor-radios.json'
import booleanEditorRadiosInlineExample
  from '@/assets/live-examples/boolean-editor-radios-inline.json'
import booleanEditorSelectExample from '@/assets/live-examples/boolean-editor-select.json'
import numberEditorDefaultExample from '@/assets/live-examples/number-editor-default.json'
import numberEditorNullableExample from '@/assets/live-examples/number-editor-nullable.json'
import objectEditorAccordionExample from '@/assets/live-examples/object-editor-accordion.json'
import objectEditorRadiosExample from '@/assets/live-examples/object-editor-radios.json'
import objectEditorRadiosInlineExample
  from '@/assets/live-examples/object-editor-radios-inline.json'
import stringEditorDefaultExample from '@/assets/live-examples/string-editor-default.json'
import stringEditorRadiosExample from '@/assets/live-examples/string-editor-radios.json'
import stringEditorRadiosInlineExample
  from '@/assets/live-examples/string-editor-radios-inline.json'
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
import numberEditorRadiosInlineExample
  from '@/assets/live-examples/number-editor-radios-inline.json'
import numberEditorRatyExample from '@/assets/live-examples/number-editor-raty.json'
import numberEditorImaskExample from '@/assets/live-examples/number-editor-imask.json'
import numberEditorRangeExample from '@/assets/live-examples/number-editor-range.json'
import objectEditorDefaultExample from '@/assets/live-examples/object-editor-default.json'
import objectEditorNavVerticalExample from '@/assets/live-examples/object-editor-nav-vertical.json'
import objectEditorNavHorizontalExample
  from '@/assets/live-examples/object-editor-nav-horizontal.json'
import objectEditorCategoriesVerticalExample
  from '@/assets/live-examples/object-editor-categories-vertical.json'
import stringEditorAwesompleteExample from '@/assets/live-examples/string-editor-awesomplete.json'
import stringEditorFlatpickrExample from '@/assets/live-examples/string-editor-flatpickr.json'
import stringEditorImaskExample from '@/assets/live-examples/string-editor-imask.json'
import stringEditorJoditExample from '@/assets/live-examples/string-editor-jodit.json'
import stringEditorQuillExample from '@/assets/live-examples/string-editor-quill.json'
import stringEditorFilepondExample from '@/assets/live-examples/string-editor-filepond.json'
import stringEditorAceExample from '@/assets/live-examples/string-editor-ace.json'
import stringEditorEmojiButtonExample from '@/assets/live-examples/string-editor-emoji-button.json'
import stringEditorSimplemdeExample from '@/assets/live-examples/string-editor-simplemde.json'
import stringEditorPickrExample from '@/assets/live-examples/string-editor-pickr.json'
import htmlStringEditorMilkdownRaw from '@/assets/html/string-editor-milkdown.html?raw'

// The Milkdown demo loads a pre-built bundle from /public/milkdown/ (see that
// file's own head comment for why) - it needs the deployed base path (e.g.
// "/jedison-docs/" in production) prepended, which a plain ?raw import can't do.
const htmlStringEditorMilkdown = htmlStringEditorMilkdownRaw.replaceAll('__BASE__', import.meta.env.BASE_URL)
import nullEditorDefaultExample from '@/assets/live-examples/null-editor-default.json'
import arrayEditorDefaultExample from '@/assets/live-examples/array-editor-default.json'
import arrayEditorFooterExample from '@/assets/live-examples/array-editor-footer.json'
import arrayEditorCheckboxesExample from '@/assets/live-examples/array-editor-checkboxes.json'
import arrayEditorCheckboxesSortableExample
  from '@/assets/live-examples/array-editor-checkboxes-sortable.json'
import arrayEditorNavVerticalExample from '@/assets/live-examples/array-editor-nav-vertical.json'
import arrayEditorNavVerticalFooterExample
  from '@/assets/live-examples/array-editor-nav-vertical-footer.json'
import arrayEditorNavHorizontalExample
  from '@/assets/live-examples/array-editor-nav-horizontal.json'
import arrayEditorNavHorizontalFooterExample
  from '@/assets/live-examples/array-editor-nav-horizontal-footer.json'
import arrayEditorTableExample from '@/assets/live-examples/array-editor-table.json'
import arrayEditorTableFooterExample from '@/assets/live-examples/array-editor-table-footer.json'
import arrayEditorTableObjectExample from '@/assets/live-examples/array-editor-table-object.json'
import arrayEditorTableObjectFooterExample
  from '@/assets/live-examples/array-editor-table-object-footer.json'
import objectEditorCategoriesHorizontalExample
  from '@/assets/live-examples/object-editor-categories-horizontal.json'
import objectEditorCategoriesCategoryOrderExample
  from '@/assets/live-examples/object-editor-categories-category-order.json'
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
import mdEventOff from '@/assets/markdown/event-off.md?raw'

import faqEditorNotRendering from '@/assets/markdown/faq-editor-not-rendering.md?raw'
import faqRefNotWorking from '@/assets/markdown/faq-ref-not-working.md?raw'
import faqPluginEditorNotShowing from '@/assets/markdown/faq-plugin-editor-not-showing.md?raw'
import faqValidationNotWorking from '@/assets/markdown/faq-validation-not-working.md?raw'
import faqInfiniteRecursion from '@/assets/markdown/faq-infinite-recursion.md?raw'
import faqInfiniteRecursionSchema from '@/assets/markdown/faq-infinite-recursion-schema.md?raw'

import mdOptionLanguage from '@/assets/markdown/option-language.md?raw'
import mdGermanTranslation from '@/assets/markdown/translation-german.md?raw'
import addingTranslationsExample from '@/assets/markdown/adding-translations-example.md?raw'
import languageAndTranslationsExample from '@/assets/live-examples/language-and-translations.json'

import markdownAnnotationsExample from '@/assets/live-examples/markdown-annotations.json'
import ifThenElseExample from '@/assets/live-examples/if-then-else.json'
import ifThenElseNestedExample from '@/assets/live-examples/if-then-else-nested.json'
import schemaCompositionAllOfExample from '@/assets/live-examples/schema-composition-allof.json'
import schemaCompositionAnyOfExample from '@/assets/live-examples/schema-composition-anyof.json'
import schemaCompositionOneOfExample from '@/assets/live-examples/schema-composition-oneof.json'
import schemaCompositionNotExample from '@/assets/live-examples/schema-composition-not.json'
import exposingMarkedAndDompurify from '@/assets/markdown/exposing-marked-and-dompurify.md?raw'

import mdOverlayUsage from '@/assets/markdown/overlay-usage.md?raw'
import mdOverlayMergeSemantics from '@/assets/markdown/overlay-merge-semantics.md?raw'
import htmlOverlayExample from '@/assets/html/overlay-example.html?raw'

import themesThemeExample from '@/assets/live-examples/themes-theme.json'
import themesBootstrap3Example from '@/assets/live-examples/themes-bootstrap3.json'
import themesBootstrap4Example from '@/assets/live-examples/themes-bootstrap4.json'
import themesBootstrap5Example from '@/assets/live-examples/themes-bootstrap5.json'

import xAddPropertyContentExample from '@/assets/markdown/x-addPropertyContent-example.md?raw'
import xArrayAddContentExample from '@/assets/markdown/x-arrayAddContent-example.md?raw'
import xArrayAddExample from '@/assets/markdown/x-arrayAdd-example.md?raw'
import xArrayButtonsPositionExample from '@/assets/markdown/x-arrayButtonsPosition-example.md?raw'
import xArrayDeleteAllContentExample from '@/assets/markdown/x-arrayDeleteAllContent-example.md?raw'
import xArrayDeleteAllExample from '@/assets/markdown/x-arrayDeleteAll-example.md?raw'
import xArrayDeleteConfirmExample from '@/assets/markdown/x-arrayDeleteConfirm-example.md?raw'
import xArrayDeleteContentExample from '@/assets/markdown/x-arrayDeleteContent-example.md?raw'
import xArrayDeleteExample from '@/assets/markdown/x-arrayDelete-example.md?raw'
import xArrayDragContentExample from '@/assets/markdown/x-arrayDragContent-example.md?raw'
import xArrayFooterAddContentExample from '@/assets/markdown/x-arrayFooterAddContent-example.md?raw'
import xArrayFooterAddExample from '@/assets/markdown/x-arrayFooterAdd-example.md?raw'
import xArrayFooterButtonsPositionExample from '@/assets/markdown/x-arrayFooterButtonsPosition-example.md?raw'
import xArrayFooterDeleteAllContentExample from '@/assets/markdown/x-arrayFooterDeleteAllContent-example.md?raw'
import xArrayFooterDeleteAllExample from '@/assets/markdown/x-arrayFooterDeleteAll-example.md?raw'
import xArrayMoveDownContentExample from '@/assets/markdown/x-arrayMoveDownContent-example.md?raw'
import xArrayMoveExample from '@/assets/markdown/x-arrayMove-example.md?raw'
import xArrayMoveUpContentExample from '@/assets/markdown/x-arrayMoveUpContent-example.md?raw'
import xAssertFormatExample from '@/assets/markdown/x-assertFormat-example.md?raw'
import xButtonsExample from '@/assets/markdown/x-buttons-example.md?raw'
import xCategoryOrderExample from '@/assets/markdown/x-categoryOrder-example.md?raw'
import xCollapseToggleContentExample from '@/assets/markdown/x-collapseToggleContent-example.md?raw'
import xContainerAttributesExample from '@/assets/markdown/x-containerAttributes-example.md?raw'
import xDeactivateNonRequiredExample from '@/assets/markdown/x-deactivateNonRequired-example.md?raw'
import xDiscriminatorExample from '@/assets/markdown/x-discriminator-example.md?raw'
import xEditJsonDataExample from '@/assets/markdown/x-editJsonData-example.md?raw'
import xEnableCollapseToggleExample from '@/assets/markdown/x-enableCollapseToggle-example.md?raw'
import xEnforceConstExample from '@/assets/markdown/x-enforceConst-example.md?raw'
import xEnforceEnumExample from '@/assets/markdown/x-enforceEnum-example.md?raw'
import xEnumTitlesExample from '@/assets/markdown/x-enumTitles-example.md?raw'
import xFilepondExample from '@/assets/markdown/x-filepond-example.md?raw'
import xFormatExample from '@/assets/markdown/x-format-example.md?raw'
import xGridExample from '@/assets/markdown/x-grid-example.md?raw'
import xHiddenExample from '@/assets/markdown/x-hidden-example.md?raw'
import xInfoExample from '@/assets/markdown/x-info-example.md?raw'
import xInputAttributesExample from '@/assets/markdown/x-inputAttributes-example.md?raw'
import xMessagesArray from '@/assets/markdown/x-messages-array.md?raw'
import xMessagesI18n from '@/assets/markdown/x-messages-i18n.md?raw'
import xMessagesObject from '@/assets/markdown/x-messages-object.md?raw'
import xNavWarningExample from '@/assets/markdown/x-navWarning-example.md?raw'
import xObjectAddExample from '@/assets/markdown/x-objectAdd-example.md?raw'
import xPropGroupExample from '@/assets/markdown/x-propGroup-example.md?raw'
import xPropGroupOrderExample from '@/assets/markdown/x-propGroupOrder-example.md?raw'
import xPropertiesToggleContentExample from '@/assets/markdown/x-propertiesToggleContent-example.md?raw'
import xShowErrorsExample from '@/assets/markdown/x-showErrors-example.md?raw'
import xSortableExample from '@/assets/markdown/x-sortable-example.md?raw'
import xStartCollapsedExample from '@/assets/markdown/x-startCollapsed-example.md?raw'
import xSubErrorsExample from '@/assets/markdown/x-subErrors-example.md?raw'
import xSwitcherInputExample from '@/assets/markdown/x-switcherInput-example.md?raw'
import xSwitcherTitleExample from '@/assets/markdown/x-switcherTitle-example.md?raw'
import xTitleHiddenExample from '@/assets/markdown/x-titleHidden-example.md?raw'
import xTitleTemplateExample from '@/assets/markdown/x-titleTemplate-example.md?raw'
import xUseConstraintAttributesExample from '@/assets/markdown/x-useConstraintAttributes-example.md?raw'

import htmlCustomValidator from '@/assets/html/custom-constraint.html?raw'
import mdCustomConstraint from '@/assets/markdown/custom-constraint.md?raw'

import templatesExample from '@/assets/live-examples/templates.json'
import templatesFallbackExample from '@/assets/live-examples/templates-fallback.json'

import mdMethodGetValue from '@/assets/markdown/method-get-value.md?raw'
import mdMethodSetValue from '@/assets/markdown/method-set-value.md?raw'
import mdMethodGetInstance from '@/assets/markdown/method-get-instance.md?raw'
import mdMethodArrayInstanceControl from '@/assets/markdown/method-array-instance-control.md?raw'
import mdMethodShowValidationErrors from '@/assets/markdown/method-show-validation-errors.md?raw'
import mdMethodGetErrorsAndWarnings from '@/assets/markdown/method-get-errors-and-warnings.md?raw'
import mdMethodGetErrors from '@/assets/markdown/method-get-errors.md?raw'
import mdValidationErrors from '@/assets/markdown/validation-errors.md?raw'
import mdValidationErrorsFiltered from '@/assets/markdown/validation-errors-filtered.md?raw'
import mdMethodDisable from '@/assets/markdown/method-disable.md?raw'
import mdMethodEnable from '@/assets/markdown/method-enable.md?raw'
import mdMethodDestroy from '@/assets/markdown/method-destroy.md?raw'
import mdMethodNavigateTo from '@/assets/markdown/method-navigate-to.md?raw'

import mdRefParserUsage from '@/assets/markdown/ref-parser-usage.md?raw'
import htmlRefParserBefore from '@/assets/html/ref-parser-before.html?raw'
import htmlRefParserAfter from '@/assets/html/ref-parser-after.html?raw'
import htmlRefParserRecursiveObject from '@/assets/html/ref-parser-recursive-object.html?raw'
import htmlRefParserRecursiveArray from '@/assets/html/ref-parser-recursive-array.html?raw'

import customEditorsExample from '@/assets/markdown/customEditors-example.md?raw'
import dataExample from '@/assets/markdown/data-example.md?raw'
import domPurifyOptionsExample from '@/assets/markdown/domPurifyOptions-example.md?raw'
import editJsonDataExample from '@/assets/markdown/editJsonData-example.md?raw'
import hiddenInputAttributesExample from '@/assets/markdown/hiddenInputAttributes-example.md?raw'
import iconLibExample from '@/assets/markdown/iconLib-example.md?raw'
import idExample from '@/assets/markdown/id-example.md?raw'
import refParserExample from '@/assets/markdown/refParser-example.md?raw'
import settingsExample from '@/assets/markdown/settings-example.md?raw'
import showErrorsExample from '@/assets/markdown/showErrors-example.md?raw'
import switcherInputExample from '@/assets/markdown/switcherInput-example.md?raw'
import themeExample from '@/assets/markdown/theme-example.md?raw'
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
          markdown: `Jedison helps you validate JSON data on the backend and generate interactive forms from JSON Schemas on the frontend.

One common workflow looks like this:

1. Your backend sends the JSON Schema to the client
2. Jedison automatically renders a complete form based on the schema
3. Users interact with the form while getting instant client-side validation
4. Validated data gets submitted back to your server
5. The same schema validates the data again server-side for security

<img class="img-fluid mermaid-diagram mb-3" src="${mermaidFlowSvg}" alt="Jedison use diagram">

But Jedison is flexible enough to support other patterns too - you might use it for:

- Standalone client-side forms without server validation
- Pure server-side JSON validation in your backend services
- Hybrid approaches where different parts of the schema are used in different contexts`
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
      {component: SectionProse, props: {heading: "Using ES Module"}},
      {component: SectionProse, props: {markdown: `npm:`}},
      {component: SectionCode, props: {language: "bash", code: mdInstallNpm}},
      {component: SectionProse, props: {markdown: `yarn:`}},
      {component: SectionCode, props: {language: "bash", code: mdInstallYarn}},
      {component: SectionCode, props: {language: "html", code: mdUsingEsm}},
      {component: SectionProse, props: {heading: "Using from CDN"}},
      {component: SectionCode, props: {language: "html", code: mdUsingCdn}}
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
          markdown: `To use Jedison as a JSON editor, these options are required:

-   **\`container\`** specifies where the editor renders in your HTML. Without it, Jedison has no place to display the form. In the example, we attach it to \`<div id="jedison-container">\` using \`document.querySelector\`.
-   **\`theme\`** defines the editor's visual style. While Jedison provides a default theme (\`new Jedison.Theme()\`), you must include this option—omitting it may break styling or functionality.
-   **\`schema\`** defines the validation rules. The editor will check JSON data against this schema.`
        }
      },
      {component: SectionExample, props: {example: playgroundExample, codeMode: 'full'}}
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
          markdown: `To use Jedison as a JSON validator, these options are required:

-   **\`schema\`** defines the validation rules. This is the only mandatory option when using Jedison for validation. The validator will check JSON data against this schema without needing a UI container or theme.`
        }
      },
      {component: SectionCode, props: {language: "javascript", code: mdUsingNode}}
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
          markdown: `Jedison provides several methods to interact with your editor instance:`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "getValue()",
          level: 2,
          markdown: `Returns the current value of the editor by calling \`getValue()\` on the root instance.

Internally, this traverses the entire instance tree to build the complete JSON structure.`
        }
      },
      {component: SectionCode, props: {code: mdMethodGetValue}},
      {
        component: SectionProse,
        props: {
          heading: "setValue(data)",
          level: 2,
          markdown: `Updates the editor's value with new data by calling \`setValue()\` on the root instance.

-   \`data\`: The new JSON data to set`
        }
      },
      {component: SectionCode, props: {code: mdMethodSetValue}},
      {
        component: SectionProse,
        props: {
          heading: "getInstance(path)",
          level: 2,
          markdown: `Retrieves a specific instance by its JSON Pointer.

Example paths:

-   \`'#'\` - Root instance
-   \`'#/property'\` - Nested property
-   \`'#/array/0'\` - First item in an array`
        }
      },
      {component: SectionCode, props: {code: mdMethodGetInstance}},
      {
        component: SectionProse,
        props: {
          heading: "Programmatic Array Control",
          level: 2,
          markdown: `Every array instance retrieved via \`getInstance(path)\` exposes methods to add, remove, and reorder items directly, without going through the UI:

-   \`move(fromIndex, toIndex, initiator)\` - Moves an item from one index to another
-   \`addItem(initiator)\` - Appends a new item using the schema's default value
-   \`addItemAfter(afterIndex, initiator)\` - Inserts a new item right after the given index
-   \`deleteItem(itemIndex, initiator)\` - Removes the item at the given index

\`initiator\` is optional and defaults to \`'api'\`. These are the same methods the UI's own add/delete/move buttons call internally, so they fire the same \`item-add\`/\`item-delete\`/\`item-move\` events documented on the Events page.`
        }
      },
      {component: SectionCode, props: {code: mdMethodArrayInstanceControl}},
      {
        component: SectionProse,
        props: {
          heading: "showValidationErrors(errorsList = null)",
          level: 2,
          markdown: `Displays validation errors in the respective editors.

-   If \`errorsList\` is provided, displays those specific errors
-   Otherwise, shows all current validation errors from \`getErrors()\``
        }
      },
      {component: SectionCode, props: {language: `html`, code: mdMethodShowValidationErrors}},
      {
        component: SectionProse,
        props: {
          heading: "getErrors(filters = ['error'])",
          level: 2,
          markdown: `Returns an array of validation error messages from all instances.

-   \`filters\`: Include only errors with \`type\` that are included in the filter array`
        }
      },
      {component: SectionCode, props: {code: mdMethodGetErrorsAndWarnings}},
      {component: SectionCode, props: {code: mdValidationErrors}},
      {component: SectionCode, props: {code: mdMethodGetErrors}},
      {component: SectionCode, props: {code: mdValidationErrorsFiltered}},
      {
        component: SectionProse,
        props: {
          heading: "disable()",
          level: 2,
          markdown: `Disables UI controls`
        }
      },
      {component: SectionCode, props: {code: mdMethodDisable}},
      {
        component: SectionProse,
        props: {
          heading: "enable()",
          level: 2,
          markdown: `Enables UI controls`
        }
      },
      {component: SectionCode, props: {code: mdMethodEnable}},
      {
        component: SectionProse,
        props: {
          heading: "destroy()",
          level: 2,
          markdown: `Cleans up the editor instance by:

-   Calling \`destroy()\` on the root instance
-   Clearing the container HTML if in editor mode
-   Removing all instance references`
        }
      },
      {component: SectionCode, props: {code: mdMethodDestroy}},
      {
        component: SectionProse,
        props: {
          heading: "navigateTo(path)",
          level: 2,
          markdown: `Navigates to a specific field by path, activating all ancestor nav and categories tabs as needed.

-   \`path\`: A JSON Pointer path string (e.g. \`'#/organization/departments/1/teams/1'\`)

Only works when Jedison is used as an editor (i.e. a \`container\` is provided).`
        }
      },
      {component: SectionCode, props: {code: mdMethodNavigateTo}}
    ]
  },
  {
    path: "/events",
    routeName: "Events",
    group: "Getting Started",
    navbar: true,
    title: "Jedison - Events",
    description: "Events emitted by Jedison for change detection and lifecycle hooks.",
    keywords: ["events", "change", "ready", "on", "off", "emit", "lifecycle"],
    component: SectionsPage,
    heading: "Events",
    sections: [
      {
        component: SectionProse,
        props: {
          markdown: `Jedison provides several events that let you track changes and user interactions in your forms. These events are useful because they allow you to:

-   React immediately when data changes (like saving to a database)
-   Synchronize form state with other parts of your application`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "change",
          level: 2,
          markdown: `Triggered when the entire instance changes (whole JSON value/instance/editor).

Callback receives \`(initiator)\` where initiator is either:

-   \`"api"\` - Change from method calls like \`setValue()\`
-   \`"user"\` - Change from direct user interaction`
        }
      },
      {component: SectionCode, props: {language: "javascript", code: mdEventChange}},
      {
        component: SectionProse,
        props: {
          heading: "instance-change",
          level: 2,
          markdown: `Triggered when a specific part of the instance changes.

Callback receives \`(instance, initiator)\`:

-   \`instance\`: The changed instance
-   \`initiator\`: Same as \`change\` event`
        }
      },
      {component: SectionCode, props: {language: "javascript", code: mdEventInstanceChange}},
      {
        component: SectionProse,
        props: {
          heading: "item-add",
          level: 2,
          markdown: `Triggered when adding items to arrays.

Callback receives \`(initiator, newInstance)\`:

-   \`newInstance\`: The newly added array item instance`
        }
      },
      {component: SectionCode, props: {language: "javascript", code: mdEventItemAdd}},
      {
        component: SectionProse,
        props: {
          heading: "item-delete",
          level: 2,
          markdown: `Triggered when removing items from arrays.

Callback receives \`(initiator)\`.`
        }
      },
      {component: SectionCode, props: {language: "javascript", code: mdEventItemDelete}},
      {
        component: SectionProse,
        props: {
          heading: "item-move",
          level: 2,
          markdown: `Triggered when reordering array items.

Callback receives \`(initiator)\`.`
        }
      },
      {component: SectionCode, props: {language: "javascript", code: mdEventItemMove}},
      {
        component: SectionProse,
        props: {
          heading: "Removing listeners: off()",
          level: 2,
          markdown: `Stops a callback from being called for a given event.

-   \`jedison.off(name, callback)\` - Removes that specific callback
-   \`jedison.off(name)\` - Removes every listener registered for that event`
        }
      },
      {component: SectionCode, props: {language: "javascript", code: mdEventOff}}
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
          markdown: `This HTML example demonstrates how to use Jedison to generate a forms based on JSON schemas. The page includes Bootstrap 5 for styling and the Jedison library from a CDN.

The JSON schema defines a simple "Person" object with two fields: "name" (a string) and "age" (a positive integer). When the page loads, Jedison creates a form inside the #jedison-container div using this schema, automatically generating appropriate input fields with Bootstrap 5 styling.

The \`Jedison.ThemeBootstrap5()\` instance creates the necessary HTML and ensures the form follows Bootstrap 5's design system.

This approach allows developers to quickly create consistent, validated forms by simply defining their data structure in JSON format, rather than writing manual HTML form markup.`
        }
      },
      {component: SectionExample, props: {example: playgroundExample, codeMode: 'full'}}
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
          level: 2,
          markdown: `No, this library does not generate form elements but only the fields. If you are generating fields inside a form element, it is recommended to use the \`novalidate\` attribute on the form to prevent browser validation conflicts.

It's also a good practice to use the \`showValidationErrors\` method when clicking the submit button to display any validation errors.

**Example:**

\`\`\`
<form novalidate>
  <!-- Your Jedison fields here -->
  <button type="submit" onclick="showValidationErrors()">Submit</button>
</form>
\`\`\``
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Editor not rendering?",
          level: 2,
          markdown: `Ensure that:

-   \`container\` is a valid DOM element
-   \`theme\` is provided`
        }
      },
      {component: SectionCode, props: {code: faqEditorNotRendering}},
      {
        component: SectionProse,
        props: {
          heading: "$ref not working?",
          level: 2,
          markdown: `Use \`RefParser\` and call \`await refParser.dereference(schema)\` before creating the Jedison instance.`
        }
      },
      {component: SectionCode, props: {code: faqRefNotWorking}},
      {
        component: SectionProse,
        props: {
          heading: "Plugin editor not showing?",
          level: 2,
          markdown: `Check that the external library is loaded. For example, verify that \`window.Quill\` or \`window.flatpickr\` exists before initialization.`
        }
      },
      {component: SectionCode, props: {language: `html`, code: faqPluginEditorNotShowing}},
      {
        component: SectionProse,
        props: {
          heading: "Validation not working?",
          level: 2,
          markdown: `For \`format\` validation, set \`assertFormat: true\` in your Jedison options.`
        }
      },
      {component: SectionCode, props: {code: faqValidationNotWorking}},
      {
        component: SectionProse,
        props: {
          heading: "Infinite recursion with recursive schemas?",
          level: 2,
          markdown: `Use \`x-deactivateNonRequired: true\` in your schema combined with \`enablePropertiesToggle: true\` in your Jedison options.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: faqInfiniteRecursionSchema}},
      {component: SectionCode, props: {code: faqInfiniteRecursion}}
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
          markdown: `Jedison supports multiple CSS frameworks through its theme system, allowing you to maintain consistent styling with your application's design system.`
        }
      },
      {
        component: SectionExample,
        props: {
          codeMode: 'full',
          heading: "Bootstrap 5",
          intro: `Full support for Bootstrap 5 form styling: \`new Jedison.ThemeBootstrap5()\``,
          example: themesBootstrap5Example
        }
      },
      {
        component: SectionExample,
        props: {
          codeMode: 'full',
          heading: "Bootstrap 4",
          intro: `Full support for Bootstrap 4 form styling: \`new Jedison.ThemeBootstrap4()\``,
          example: themesBootstrap4Example
        }
      },
      {
        component: SectionExample,
        props: {
          codeMode: 'full',
          heading: "Bootstrap 3",
          intro: `Full support for Bootstrap 3 form styling: \`new Jedison.ThemeBootstrap3()\``,
          example: themesBootstrap3Example
        }
      },
      {
        component: SectionExample,
        props: {
          codeMode: 'full',
          heading: "Default Theme",
          intro: `Basic unstyled theme that provides minimal structure: \`new Jedison.Theme()\``,
          example: themesThemeExample
        }
      }
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
    intro: `Jedison supports multiple icons libraries`,
    sections: [
      {
        component: SectionProse,
        props: {
          heading: "Icon Library Integration",
          markdown: `Jedison supports multiple icon libraries which can be specified using the \`iconLib\` option:`
        }
      },
      {
        component: SectionExample,
        props: {heading: "'bootstrap-icons'", example: iconsBootstrapIconsExample, codeMode: 'full'}
      },
      {
        component: SectionExample,
        props: {heading: "'fontawesome6'", example: iconsFontawesome6Example, codeMode: 'full'}
      },
      {
        component: SectionExample,
        props: {heading: "'fontawesome5'", example: iconsFontawesome5Example, codeMode: 'full'}
      },
      {
        component: SectionExample,
        props: {heading: "'fontawesome4'", example: iconsFontawesome4Example, codeMode: 'full'}
      },
      {
        component: SectionExample,
        props: {heading: "'fontawesome3'", example: iconsFontawesome3Example, codeMode: 'full'}
      },
      {
        component: SectionExample,
        props: {
          heading: "'glyphicons' - Bootstrap 3's Glyphicons",
          example: iconsGlyphiconsExample,
          codeMode: 'full'
        }
      }
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
          markdown: `The default language for UI and error messages is \`en\` (english). You can change this to any supported language or add your own translations.

Setting German as Default`
        }
      },
      {component: SectionCode, props: {code: mdOptionLanguage}},
      {
        component: SectionProse,
        props: {
          heading: "Languages Included",
          markdown: `Jedison comes with these languages ready to use:

-   \`en\` (english)
-   \`de\` (german)
-   \`it\` (italian)
-   \`es\` (spanish)

If a translation is missing or you forget to add one, Jedison will automatically use the English version instead.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Adding Translations",
          markdown: `You can add new languages using the \`translations\` option. Just set the \`language\` option to your new language code.

You can also override the default English translations if needed.`
        }
      },
      {component: SectionCode, props: {code: addingTranslationsExample}},
      {
        component: SectionProse,
        props: {
          heading: "Translation and Templates",
          level: 2,
          markdown: `The translation system uses template placeholders that get dynamically replaced with actual values during runtime. These placeholders are wrapped in double curly braces \`{{ property }}\` and provide context-specific information in error messages.

For example, when validating against a \`minLength\` constraint, the template \`{{ minLength }}\` will be replaced with the schema's specified minimum length value. This allows for dynamic, accurate error messages that reflect the actual validation rules.`
        }
      },
      {component: SectionCode, props: {code: mdGermanTranslation}},
      {
        component: SectionExample,
        props: {
          heading: "German Translation Example",
          intro: `See how the placeholders work in this example. The error message will show "Muss mindestens \`3\` Zeichen lang sein" because of \`minLength: 3\`.  
Notice that all UI elements including buttons were also translated to German in this example.  
We used the option \`showErrors: 'always'\` to make validation messages appear immediately rather than waiting for user interaction.`,
          example: languageAndTranslationsExample,
          codeMode: 'full'
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
          markdown: `Jedison includes a \`RefParser\` class, which processes a JSON Schema and builds an internal list of dereferenced \`$ref\` pointers.  
You can pass the \`RefParser\` instance to a Jedison instance, which will then use it to handle schema dereferencing internally.  
The original schema remains unchanged—schemas are dereferenced at runtime only when needed.  
This approach makes it easier to support and manage recursive schemas.`
        }
      },
      {component: SectionCode, props: {code: mdRefParserUsage}},
      {
        component: SectionExample,
        props: {
          heading: "Before Dereferencing",
          intro: `The \`"user"\` property schema has not been dereferenced, so the editor only sees an empty schema.  
Since there's no defined \`type\`, the schema is interpreted as allowing any JSON type.  
As a result, Jedison displays a \`multiple\` editor, enabling the user to select from all possible JSON types.`,
          exampleHtml: htmlRefParserBefore
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "After Dereferencing",
          intro: `The \`"user"\` property schema has been dereferenced and has now \`type\`.  
As a result, Jedison renders a \`object\` editor.`,
          exampleHtml: htmlRefParserAfter
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Recursive schema",
          markdown: `A schema that references itself (directly, or through a chain of \`$ref\`s) would otherwise make \`RefParser\` expand it infinitely. \`RefParser\` detects these cycles and marks the recursive schema so Jedison can render it safely instead of looping forever.`
        }
      },
      {
        component: SectionExample,
        props: {
          intro: `Jedison can handle recursive JSON Schemas, provided certain conditions are met.  
In this example, we use the \`x-deactivateNonRequired\` keyword, which requires properties to be added manually.  
To support this, the Jedison option \`enablePropertiesToggle: true\` allows manual activation of properties.  
This setup is necessary to prevent infinite recursion during schema processing.`,
          exampleHtml: htmlRefParserRecursiveObject
        }
      },
      {
        component: SectionExample,
        props: {
          intro: `In some cases, handling recursion is easier—for example, when the recursive \`$ref\` is inside an \`"items"\` schema.  
This is because the schema is only instantiated at runtime when a new item is added to the array.`,
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
          markdown: `Jedison ships an \`applyOverlay\` helper that applies an [OpenAPI-Overlay](https://spec.openapis.org/overlay/latest.html)\\-style document to a JSON Schema and returns a **new** schema.  
An overlay is an ordered list of actions, each targeting nodes with a JSONPath and either merging an \`update\` into them or \`remove\`\\-ing them.  
This lets you layer presentation directives (\`x-format\`, \`x-hidden\`, \`readOnly\`, …) on top of a schema **without editing the source schema** — useful when the schema is owned elsewhere (a backend, a shared contract) but the form needs UI tweaks per context.`
        }
      },
      {component: SectionCode, props: {code: mdOverlayUsage}},
      {
        component: SectionProse,
        props: {markdown: `The inputs are never mutated. A malformed overlay throws; an action that matches zero nodes is a no-op.`}
      },
      {component: SectionExample, props: {exampleHtml: htmlOverlayExample}},
      {
        component: SectionProse,
        props: {
          heading: "Overlay document",
          markdown: `An overlay document follows the OpenAPI Overlay shape. Only the \`actions\` array is required by \`applyOverlay\`; \`overlay\` and \`info\` are conventional metadata.

-   \`target\` — a JSONPath selecting the nodes to act on (required).
-   \`update\` — a value merged into every matched node.
-   \`remove: true\` — removes every matched node instead of updating.

Actions run in order, so a later action can override an earlier one (last write wins). \`copy\` and \`extends\` are accepted but ignored.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Targeting (JSONPath subset)",
          markdown: `Targets use a small, dependency-free subset of [JSONPath (RFC 9535)](https://www.rfc-editor.org/rfc/rfc9535). Every target must start at the root \`$\`.

| Syntax | Selects |
| --- | --- |
| \`$\` | the root (cannot be removed or replaced with a non-object) |
| \`.name\`, \`['name']\`, \`["name"]\` | a child by name (bracket form allows any key) |
| \`[n]\` | an array item by index (negative counts from the end) |
| \`*\`, \`.*\`, \`[*]\` | all children of an object or array |
| \`..\` | recursive descent (matches at any depth) |
| \`['a','b']\`, \`[0,1]\` | a union of names or indices |

Filter expressions (\`[?…]\`), array slices (\`[start:end]\`) and function extensions (\`length()\`) are **not** supported and throw a clear error rather than failing silently.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Merge semantics",
          markdown: `\`update\` merges into each matched node according to its type:

-   **Object node** — deep-merged (nested objects recurse, arrays concatenate, primitives replace).
-   **Array node** — concatenated (an array update is appended item by item; a non-array update is pushed).
-   **Primitive node** — replaced in place.

\`remove: true\` deletes matched object properties and splices matched array items (indices are removed highest-first so they stay valid).`
        }
      },
      {component: SectionCode, props: {code: mdOverlayMergeSemantics}}
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
          level: 2,
          markdown: `Jedison supports Markdown formatting in various text fields including titles, descriptions, and info content. This is enabled by the \`marked.js\` library and activated by setting \`parseMarkdown: true\` in the Jedison configuration.

For security, all HTML output is sanitized using \`DOMPurify\`. This prevents XSS attacks while preserving safe HTML content. Sanitization is enabled with \`purifyHtml: true\` in the Jedison configuration.`
        }
      },
      {component: SectionExample, props: {example: markdownAnnotationsExample, codeMode: 'full'}},
      {
        component: SectionProse,
        props: {
          heading: "Exposing dependencies",
          level: 2,
          markdown: `When using ES modules it may be necessary to expose, \`DOMPurify\` and \`marked\` as global variables in the \`window\` object.`
        }
      },
      {component: SectionCode, props: {code: exposingMarkedAndDompurify}}
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
        props: {
          markdown: `Jedison provides various configuration options to customize the behavior and appearance of your form instances. These options can be passed when creating a new Jedison instance.

Some of these options can be set at JSON schema level. Options in schemas are always prefixed with \`x-\` (e.g. \`x-assertFormat\`) to not collide with future JSON schema spec keywords.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `container`,
          level: 2,
          markdown: `-   **Type:** \`HTMLElement\`
-   **Default:** \`null\`

The HTML element that will contain the generated form.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `iconLib`,
          level: 2,
          markdown: `-   **Type:** \`string\`
-   **Default:** \`null\`

Specifies the icon library to use for UI components. Valid options include:

-   \`'glyphicons'\`
-   \`'bootstrap-icons'\`
-   \`'fontawesome3'\`
-   \`'fontawesome4'\`
-   \`'fontawesome5'\`
-   \`'fontawesome6'\``
        }
      },
      {component: SectionCode, props: {code: iconLibExample}},
      {
        component: SectionProse,
        props: {
          heading: `theme`,
          level: 2,
          markdown: `-   **Type:** \`Theme\`
-   **Default:** \`null\`

An instance of \`Theme\` to apply to the UI. Valid options include:

-   \`new Jedison.Theme()\`
-   \`new Jedison.ThemeBootstrap3()\`
-   \`new Jedison.ThemeBootstrap4()\`
-   \`new Jedison.ThemeBootstrap5()\``
        }
      },
      {component: SectionCode, props: {code: themeExample}},
      {
        component: SectionProse,
        props: {
          heading: `refParser`,
          level: 2,
          markdown: `-   **Type:** \`RefParser\`
-   **Default:** \`null\`

An instance of \`RefParser\` to dereference \`"$ref"\` keywords in the schema before it's rendered. See the RefParser page for a full walkthrough of internal and recursive references.

-   \`new Jedison.RefParser()\``
        }
      },
      {component: SectionCode, props: {code: refParserExample}},
      {
        component: SectionProse,
        props: {
          heading: `translations`,
          level: 2,
          markdown: `-   **Type:** \`object\`
-   **Default:** \`'{}'\`

Used to add new translations or override the default ones. Uses template placeholders that get dynamically replaced with actual values during runtime`
        }
      },
      {
        component: SectionCode,
        props: {code: translationsExample}
      },
      {
        component: SectionProse,
        props: {
          heading: `parseMarkdown`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Transform \`markdown\` to \`html\` in annotations like \`title\` and \`description\` if marked.js is available as \`window.marked\`.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `purifyHtml`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

Sanitizes \`html\` tags from annotations like if DOMPurify.js is available as \`window.DOMPurify\`.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `purifyData`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

Sanitizes string values during data input operations if DOMPurify.js is available as \`window.DOMPurify\`. This provides security against XSS attacks in user input data, separate from HTML content purification.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `domPurifyOptions`,
          level: 2,
          markdown: `-   **Type:** \`object\`
-   **Default:** \`{}\`

DOMPurify options.`
        }
      },
      {
        component: SectionCode,
        props: {code: domPurifyOptionsExample}
      },
      {
        component: SectionProse,
        props: {
          heading: `schema`,
          level: 2,
          markdown: `-   **Type:** \`object\`
-   **Default:** \`{}\`

A JSON schema for the form.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `id`,
          level: 2,
          markdown: `-   **Type:** \`string\`
-   **Default:** \`''\`

Used to prefix \`id\` and \`for\` attributes. Useful if you want to have multiple Jedison forms on the page`
        }
      },
      {component: SectionCode, props: {code: idExample}},
      {
        component: SectionProse,
        props: {
          heading: `language`,
          level: 2,
          markdown: `-   **Type:** \`string\`
-   **Default:** \`'en'\`

Set default language for error messages and UI texts.`
        }
      },
      {component: SectionCode, props: {code: mdOptionLanguage}},
      {
        component: SectionProse,
        props: {
          heading: `data`,
          level: 2,
          markdown: `-   **Type:** \`object\`
-   **Default:** \`undefined\`

Initial JSON data to populate the form.`
        }
      },
      {component: SectionCode, props: {code: dataExample}},
      {
        component: SectionProse,
        props: {
          heading: `customEditors`,
          level: 2,
          markdown: `-   **Type:** \`array\`
-   **Default:** \`[]\`

An array of custom editor classes.`
        }
      },
      {
        component: SectionCode,
        props: {code: customEditorsExample}
      },
      {
        component: SectionProse,
        props: {
          heading: `hiddenInputAttributes`,
          level: 2,
          markdown: `-   **Type:** \`object\`
-   **Default:** \`{}\`

Attributes for the hidden input that contains the whole JSON value of the form.`
        }
      },
      {
        component: SectionCode,
        props: {code: hiddenInputAttributesExample}
      },
      {
        component: SectionProse,
        props: {
          heading: `settings`,
          level: 2,
          markdown: `-   **Type:** \`object\`
-   **Default:** \`{}\`

An object to store user data and functions. Useful for when there is the need to provide options to configure a plugin but the options can not be used in schemas because of JSON data limitations. Can be used in annotations when using templates.`
        }
      },
      {
        component: SectionCode,
        props: {code: settingsExample}
      },
      {
        component: SectionProse,
        props: {
          heading: `btnContents`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

If buttons texts should be displayed.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `btnIcons`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

If buttons icons should be displayed.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `enforceConst`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Enforces the \`const\` keyword value in editors. Works only in editor mode

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `enforceEnum`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

When \`true\` uses the first item in the enum as the default value. Works only in editor mode

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `enforceRequired`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

When \`true\` required properties are always displayed and added when missing. Works only in editor mode

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `enforceAdditionalProperties`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

When \`true\` the editor removes all properties that are not listed in properties. Works only in editor mode

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `switcherInput`,
          level: 2,
          markdown: `-   **Type:** \`string\`
-   **Default:** \`'select'\`

Sets the input type that will be used to switch between multiple editors.

-   \`select\`
-   \`radios\`
-   \`radios-inline\`
-   \`modal\`
-   \`select-inline\`

**x-option:** ✅`
        }
      },
      {component: SectionCode, props: {code: switcherInputExample}},
      {
        component: SectionProse,
        props: {
          heading: `enablePropertiesToggle`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Enables a toggle to show/hide the properties dialog in the UI.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `embedSwitcher`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

When enabled, embeds the type switcher UI inside the selected editor's header instead of displaying it separately above the content. Applies to \`oneOf\` and \`anyOf\` schemas.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `enableCollapseToggle`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Allows sections to be collapsible in the UI.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `deactivateNonRequired`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Deactivates non-required properties. Useful when working with circular schemas to avoid infinite recursion.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `showErrors`,
          level: 2,
          markdown: `-   **Type:** \`string\`
-   **Default:** \`'change'\`

Determines when to display validation errors. Options include:

-   \`'never'\` - Never show validation errors automatically
-   \`'change'\` - Show errors when the input loses focus (default)
-   \`'input'\` - Show errors immediately as the user types (for text inputs, textareas, and number inputs)
-   \`'always'\` - Always show validation errors

**Note:** The \`'input'\` option only affects text-based inputs (string inputs, textareas, number inputs). Selection inputs (dropdowns, checkboxes, radios) continue using the \`'change'\` event as it's more appropriate for their interaction model.

**x-option:** ✅`
        }
      },
      {component: SectionCode, props: {code: showErrorsExample}},
      {
        component: SectionProse,
        props: {
          heading: `assertFormat`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Treats \`'format'\` as a validator rather than just an annotation.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `subErrors`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

When enabled, validation errors include detailed sub-error information showing which nested property or item failed validation.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `arrayDelete`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

If array delete buttons should be displayed.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `arrayMove`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

If array move up and move down buttons should be displayed.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `editJsonData`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Enables inline JSON editing mode, allowing users to directly edit the JSON data within form fields.

**x-option:** ✅`
        }
      },
      {
        component: SectionCode,
        props: {code: editJsonDataExample}
      },
      {
        component: SectionProse,
        props: {
          heading: `arrayAdd`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

If array add buttons should be displayed.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `objectAdd`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

If the "Add property" button should be displayed on object editors.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `arrayDeleteConfirm`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

When enabled, shows a confirmation dialog before deleting an array item.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `arrayDeleteAll`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Adds a "Delete all items" button to the array editor's header actions area.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `arrayFooterAdd`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Adds an "Add item" button in the footer of the array editor.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `arrayFooterButtonsPosition`,
          level: 2,
          markdown: `-   **Type:** \`string\`
-   **Default:** \`'right'\`
-   **Options:** \`'left'\`, \`'right'\`

Controls the alignment of footer buttons globally.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `arrayFooterDeleteAll`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Adds a "Delete all items" button in the footer of the array editor.

**x-option:** ✅`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `useConstraintAttributes`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

When enabled, editors will set native HTML constraint attributes based on JSON Schema keywords:

-   **Number inputs:** \`min\`, \`max\`
-   **Number range:** \`min\`, \`max\`
-   **String inputs:** \`minlength\`, \`maxlength\`, \`pattern\`
-   **Textarea:** \`minlength\`, \`maxlength\`

This enables native browser validation hints and constraints.

**x-option:** ✅`
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
    keywords: ["schema options", "x-", "ui-format", "custom", "per-field", "x-addPropertyContent", "x-arrayAdd", "x-arrayAddContent", "x-arrayButtonsPosition", "x-arrayDelete", "x-arrayDeleteAll", "x-arrayDeleteAllContent", "x-arrayDeleteConfirm", "x-arrayDeleteContent", "x-arrayDragContent", "x-arrayFooterAdd", "x-arrayFooterAddContent", "x-arrayFooterButtonsPosition", "x-arrayFooterDeleteAll", "x-arrayFooterDeleteAllContent", "x-arrayMove", "x-arrayMoveDownContent", "x-arrayMoveUpContent", "x-assertFormat", "x-buttons", "x-collapseToggleContent", "x-containerAttributes", "x-deactivateNonRequired", "x-discriminator", "x-editJsonData", "x-enableCollapseToggle", "x-enforceConst", "x-enforceEnum", "x-enumTitles", "x-filepond", "x-format", "x-grid", "x-hidden", "x-info", "x-inputAttributes", "x-messages", "x-navWarning", "x-navWarningMessage", "x-categoryOrder", "x-objectAdd", "x-propertiesToggleContent", "x-propGroup", "x-propGroupOrder", "x-showErrors", "x-sortable", "x-startCollapsed", "x-subErrors", "x-switcherInput", "x-switcherTitle", "x-titleHidden", "x-titleIconClass", "x-titleTemplate", "x-useConstraintAttributes"],
    component: SectionsPage,
    heading: "Schema Options",
    sections: [
      {
        component: SectionProse,
        props: {markdown: `Options in schemas are always prefixed with \`x-\` (e.g. \`x-assertFormat\`) to not collide with future JSON schema spec keywords.`}
      },
      {
        component: SectionProse,
        props: {
          heading: `x-addPropertyContent`,
          level: 2,
          markdown: `**Type:** \`string\`

Text content for "add property" buttons.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xAddPropertyContentExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayAdd`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

If array "add" buttons should be displayed.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayAddExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayAddContent`,
          level: 2,
          markdown: `**Type:** \`string\`

Text content for array "add" buttons.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayAddContentExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayButtonsPosition`,
          level: 2,
          markdown: `-   **Type:** \`string\`
-   **Default:** \`'left'\`
-   **Options:** \`'left'\`, \`'right'\`

Controls the positioning of action buttons (delete, move, drag) in table format arrays. When set to \`'right'\`, buttons appear on the right side of the table. When set to \`'left'\` (default), buttons appear on the left side.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayButtonsPositionExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayDelete`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

If array "delete" buttons should be displayed.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayDeleteExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayDeleteAll`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Adds a "Delete all items" button to the array editor's header actions area.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayDeleteAllExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayDeleteAllContent`,
          level: 2,
          markdown: `**Type:** \`string\`

Text content for the "delete all" button.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayDeleteAllContentExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayDeleteConfirm`,
          level: 2,
          markdown: `**Type:** \`boolean\`

Per-schema override for showing a confirmation dialog before deleting array items. Overrides the global \`arrayDeleteConfirm\` option.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayDeleteConfirmExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayDeleteContent`,
          level: 2,
          markdown: `**Type:** \`string\`

Text content for array "delete" buttons.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayDeleteContentExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayDragContent`,
          level: 2,
          markdown: `**Type:** \`string\`

Text content for array "drag" buttons.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayDragContentExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayFooterAdd`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Adds an "Add item" button in the footer of the array editor.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayFooterAddExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayFooterAddContent`,
          level: 2,
          markdown: `**Type:** \`string\`

Text content for the footer "add" button.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayFooterAddContentExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayFooterButtonsPosition`,
          level: 2,
          markdown: `-   **Type:** \`string\`
-   **Default:** \`'right'\`
-   **Options:** \`'left'\`, \`'right'\`

Controls the alignment of footer buttons. When \`'right'\`, buttons are pushed to the right side of the footer. When \`'left'\`, buttons align to the left.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayFooterButtonsPositionExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayFooterDeleteAll`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Adds a "Delete all items" button in the footer of the array editor.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayFooterDeleteAllExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayFooterDeleteAllContent`,
          level: 2,
          markdown: `**Type:** \`string\`

Text content for the footer "delete all" button.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayFooterDeleteAllContentExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayMove`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

If array "move up" and "move down" buttons should be displayed.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayMoveExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayMoveDownContent`,
          level: 2,
          markdown: `**Type:** \`string\`

Text content for array "move down" buttons.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayMoveDownContentExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-arrayMoveUpContent`,
          level: 2,
          markdown: `**Type:** \`string\`

Text content for array "move up" buttons.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xArrayMoveUpContentExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-assertFormat`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Treats \`"format"\` as a validator rather than just an annotation.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xAssertFormatExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-buttons`,
          level: 2,
          markdown: `**Type:** \`array\`

Adds schema-defined action buttons to any editor, without them becoming part of the data model. Works on every editor type, including container editors (object/array). Each button config accepts:

-   \`label\` - The button's HTML content (sanitized before rendering, so it can carry an icon)
-   \`event.name\` - Clicking the button emits \`jedison:<name>\` on the root Jedison instance, with a payload of \`{ jedison, editor, path }\`
-   \`attributes\` - An object of HTML attributes for the button element, filtered against an allowlist (\`id\`, \`class\`, \`title\`, \`name\`, \`value\`, \`disabled\`, \`aria-*\`, \`data-*\`, plus \`always-enabled\`/\`always-disabled\` to override the field's own disabled state)

Subscribe to the event the same way as any other event:

\`\`\`javascript
jedison.on('jedison:detectCity', ({ jedison, editor, path }) => {})
\`\`\``
        }
      },
      {component: SectionCode, props: {language: `json`, code: xButtonsExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-collapseToggleContent`,
          level: 2,
          markdown: `**Type:** \`string\`

Text content for "collapse" buttons.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xCollapseToggleContentExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-categoryOrder`,
          level: 2,
          markdown: `**Type:** \`string[]\`

Controls the display order of tabs in categories-format object editors (\`categories-vertical\`, \`categories-horizontal\`). Categories listed in the array appear first in the specified order; any categories not listed follow in their natural order.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xCategoryOrderExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-containerAttributes`,
          level: 2,
          markdown: `**Type:** \`object\`

Editors container HTML attributes can be set using this option. Attributes such as \`class\` or \`data-*\` will be applied to the container element.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xContainerAttributesExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-deactivateNonRequired`,
          level: 2,
          markdown: `**Type:** \`boolean\`

Whether the editor should deactivate (hide) or activate (show) non required properties. Works only with \`object\` type editors.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xDeactivateNonRequiredExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-discriminator`,
          level: 2,
          markdown: `**Type:** \`string\` | \`object\`

When set on a \`oneOf\` or \`anyOf\` schema, determines the active sub-schema by validating the specified property against each schema option. Accepts either a property name string or an object with a \`propertyName\` key.

Falls back to the standard error-counting algorithm if no discriminator match is found.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xDiscriminatorExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-editJsonData`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Enables inline JSON editing mode for this specific schema, allowing users to directly edit the JSON data within form fields.`
        }
      },
      {component: SectionCode, props: {language: `javascript`, code: xEditJsonDataExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-enableCollapseToggle`,
          level: 2,
          markdown: `**Type:** \`boolean\`

Display a collapse button used to collapse or expand editors that support collapse like \`object\` and \`arrays\`.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xEnableCollapseToggleExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-enforceConst`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

Value will remain whatever is defined in schema \`"const"\`.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xEnforceConstExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-enforceEnum`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

Whether the editor initial value will be the first item in the \`"enum"\`.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xEnforceEnumExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-enumTitles`,
          level: 2,
          markdown: `**Type:** \`string[]\`

Used to display user-friendly labels in the editor instead of those listed in \`"enum"\`.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xEnumTitlesExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-filepond`,
          level: 2,
          markdown: `**Type:** \`object\`

Configuration object passed directly to the FilePond instance. Used with \`"x-format": "filepond"\`.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xFilepondExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-format`,
          level: 2,
          markdown: `**Type:** \`string\`

Determines which editor UI will be used to edit the json instance.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xFormatExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-grid`,
          level: 2,
          markdown: `**Type:** \`object\`

A configuration object to determine the position of the property editor in the parent's grid.

**Options:**

-   \`columns\`: How many columns should the editor occupy. The number of columns can vary between css frameworks and their configuration.
-   \`offset\`: How many columns should the editor be offsetted
-   \`newRow\`: Whether the editor should be put in a new row`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xGridExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-hidden`,
          level: 2,
          markdown: `**Type:** \`boolean\`

Editors can be hidden using this option. When set to \`true\`, the editor is hidden.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xHiddenExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-info`,
          level: 2,
          markdown: `**Type:** \`object\`

Used to display extra information.

**Options:**

-   \`variant\`: \`"modal"\`
-   \`title\`: Plain text or \`markdown\`
-   \`content\`: Plain text or \`markdown\``
        }
      },
      {component: SectionCode, props: {language: `json`, code: xInfoExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-inputAttributes`,
          level: 2,
          markdown: `**Type:** \`object\`

Used to set attributes for the editor input if it has one.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xInputAttributesExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-messages`,
          level: 2,
          markdown: `**Type:** \`object\` | \`string[]\`

Validation error messages can be customized using this option in the schema. The option can be used in different ways:`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Array format",
          level: 3,
          markdown: `Pass messages as an array of strings:`
        }
      },
      {component: SectionCode, props: {language: "json", code: xMessagesArray}},
      {
        component: SectionProse,
        props: {
          heading: "Object format with validation keywords",
          level: 3,
          markdown: `Pass messages as an object with validation keywords as keys:`
        }
      },
      {component: SectionCode, props: {language: "json", code: xMessagesObject}},
      {
        component: SectionProse,
        props: {
          heading: "Internationalization format",
          level: 3,
          markdown: `Pass messages with language codes for internationalization support:`
        }
      },
      {component: SectionCode, props: {language: "json", code: xMessagesI18n}},
      {
        component: SectionProse,
        props: {
          heading: `x-objectAdd`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

Per-schema override for showing or hiding the "Add property" button on object editors. Overrides the global \`objectAdd\` option.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xObjectAddExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-navWarning`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`true\`

When enabled, displays a warning icon (⚠) in the legend of array and object editors when they contain nested validation errors. Set to \`false\` to disable.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `x-navWarningMessage`,
          level: 2,
          markdown: `**Type:** \`string\`

Custom tooltip message displayed on the legend warning icon. Requires \`x-navWarning\` to be active.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xNavWarningExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-propertiesToggleContent`,
          level: 2,
          markdown: `**Type:** \`string\`

Text content for "properties" buttons.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xPropertiesToggleContentExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-propGroup`,
          level: 2,
          markdown: `**Type:** \`string\`

Assigns a property to a named group in the properties activation dialog. Used together with \`enablePropertiesToggle\` and \`x-propGroupOrder\`.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xPropGroupExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-propGroupOrder`,
          level: 2,
          markdown: `**Type:** \`string[]\`

Defines the display order of property groups in the properties activation dialog. Groups are defined using \`x-propGroup\` on individual properties. Groups not included in the array are appended at the end; the default group (properties without \`x-propGroup\`) always appears first.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xPropGroupOrderExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-showErrors`,
          level: 2,
          markdown: `-   **Type:** \`string\`
-   **Default:** \`"change"\`
-   **Options:** \`"never"\`, \`"change"\`, \`"input"\`, \`"always"\`

Determines when to display validation errors for this specific schema. Overrides the instance-level \`showErrors\` setting.

**Note:** The \`"input"\` option provides real-time validation as the user types, but only affects text-based inputs (string inputs, textareas, number inputs).`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xShowErrorsExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-sortable`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Items can be sorted via drag and drop if Sortable.js is available.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xSortableExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-startCollapsed`,
          level: 2,
          markdown: `**Type:** \`boolean\`

Whether the editor should start expanded or collapsed. Works on editors that support collapse like \`object\` and \`arrays\`.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xStartCollapsedExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-subErrors`,
          level: 2,
          markdown: `**Type:** \`boolean\`

Per-schema override for including sub-error details in validation errors. Overrides the global \`subErrors\` option.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xSubErrorsExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-switcherInput`,
          level: 2,
          markdown: `-   **Type:** \`string\`
-   **Default:** \`'select'\`
-   **Options:** \`'select'\`, \`'radios'\`, \`'radios-inline'\`, \`'modal'\`, \`'select-inline'\`

Per-schema override for the input type used to switch between multiple editor schemas (anyOf, oneOf, type arrays). Overrides the global \`switcherInput\` option.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xSwitcherInputExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-switcherTitle`,
          level: 2,
          markdown: `-   **Type:** \`string\`
-   **Default:** property name or \`"title"\`

The text displayed in the multiple editor switcher to select this sub-schema editor.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xSwitcherTitleExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-titleHidden`,
          level: 2,
          markdown: `-   **Type:** \`boolean\`
-   **Default:** \`false\`

Hides the editor title.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: `x-titleIconClass`,
          level: 2,
          markdown: `**Type:** \`string\`

Icon class to use in titles if using any.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xTitleHiddenExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-titleTemplate`,
          level: 2,
          markdown: `**Type:** \`string\`

A template to form titles dynamically, using the same \`{{ placeholder }}\` syntax described on the Templates page. Currently only read by nav-format array editors, to title each item from its own value.`
        }
      },
      {component: SectionCode, props: {language: `json`, code: xTitleTemplateExample}},
      {
        component: SectionProse,
        props: {
          heading: `x-useConstraintAttributes`,
          level: 2,
          markdown: `**Type:** \`boolean\`

Per-schema override for applying native HTML constraint attributes based on JSON Schema keywords. Overrides the global \`useConstraintAttributes\` option.

-   **Number inputs:** \`min\`, \`max\`
-   **Number range:** \`min\`, \`max\`
-   **String inputs:** \`minlength\`, \`maxlength\`, \`pattern\`
-   **Textarea:** \`minlength\`, \`maxlength\``
        }
      },
      {component: SectionCode, props: {language: `json`, code: xUseConstraintAttributesExample}},
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
    intro: `The standard editor that appears for array types without specific formatting requirements.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "array"\``],
          example: arrayEditorDefaultExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Footer",
          intro: `Adds a footer row with add and/or delete-all buttons. Use \`x-arrayDeleteAll\` to also show a "Delete all" button in the header.`,
          notesMarkdown: `-   \`x-arrayDeleteAll\` — Adds a "Delete all" button to the header
-   \`x-arrayFooterAdd\` — Adds an "Add item" button in the footer
-   \`x-arrayFooterDeleteAll\` — Adds a "Delete all" button in the footer
-   \`x-arrayFooterButtonsPosition\` — Aligns footer buttons (\`'left'\` or \`'right'\`, default: \`'right'\`)`,
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
    intro: `Displays array values as checkboxes. Ideal for arrays containing unique string, number, or integer values.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "array"\``, `\`"uniqueItems": true\``, `\`"items": { "type": "string" | "number" | "integer" }\``],
          example: arrayEditorCheckboxesExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Sortable Checkboxes",
          intro: `Add \`"x-sortable": true\` to enable drag-and-drop reordering of selected items. Requires [SortableJS](https://sortablejs.github.io/Sortable/) (\`window.Sortable\`).`,
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
    intro: `Horizontal layout version of the checkboxes editor for more compact displays.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "array"\``, `\`"uniqueItems": true\``, `\`"items": { "type": "string" | "number" | "integer" }\``, `\`"x-format": "checkboxes-inline"\``],
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
    keywords: ["array", "choices", "choices.js", "tags", "multi-select", "plugin", "x-format", "choices", "x-choicesOptions"],
    heading: "Choices Array Editor",
    intro: `Enhanced multi-select interface using the Choices.js library.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "array"\``, `\`"x-format": "choices"\``, `\`"items": { "type": "string" | "number" | "integer" }\``, `Choices.js must be available (\`window.Choices\`)`, `Plugin: [Choices.js on GitHub](https://github.com/Choices-js/Choices)`],
          notesHeading: `Plugin Options`,
          notesMarkdown: `Options can be passed to the plugin via \`"x-choicesOptions"\` keyword`,
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
    intro: `Displays array items as a vertical menu, suitable for tabbed interfaces.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "array"\``, `\`"x-format": "nav-vertical"\``],
          example: arrayEditorNavVerticalExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Footer",
          intro: `Adds a footer row with add and/or delete-all buttons. Use \`x-arrayDeleteAll\` to also show a "Delete all" button in the header.`,
          notesMarkdown: `-   \`x-arrayDeleteAll\` — Adds a "Delete all" button to the header
-   \`x-arrayFooterAdd\` — Adds an "Add item" button in the footer
-   \`x-arrayFooterDeleteAll\` — Adds a "Delete all" button in the footer
-   \`x-arrayFooterButtonsPosition\` — Aligns footer buttons (\`'left'\` or \`'right'\`, default: \`'right'\`)`,
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
    intro: `Horizontal version of the navigation editor for different layout needs.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "array"\``, `\`"x-format": "nav-horizontal"\``],
          example: arrayEditorNavHorizontalExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Footer",
          intro: `Adds a footer row with add and/or delete-all buttons. Use \`x-arrayDeleteAll\` to also show a "Delete all" button in the header.`,
          notesMarkdown: `-   \`x-arrayDeleteAll\` — Adds a "Delete all" button to the header
-   \`x-arrayFooterAdd\` — Adds an "Add item" button in the footer
-   \`x-arrayFooterDeleteAll\` — Adds a "Delete all" button in the footer
-   \`x-arrayFooterButtonsPosition\` — Aligns footer buttons (\`'left'\` or \`'right'\`, default: \`'right'\`)`,
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
    intro: `Renders array items in a tabular format, with each object property in its own column.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "array"\``, `\`"x-format": "table"\``],
          example: arrayEditorTableExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Footer",
          intro: `Adds a footer row with add and/or delete-all buttons. Use \`x-arrayDeleteAll\` to also show a "Delete all" button in the header.`,
          notesMarkdown: `-   \`x-arrayDeleteAll\` — Adds a "Delete all" button to the header
-   \`x-arrayFooterAdd\` — Adds an "Add item" button in the footer
-   \`x-arrayFooterDeleteAll\` — Adds a "Delete all" button in the footer
-   \`x-arrayFooterButtonsPosition\` — Aligns footer buttons (\`'left'\` or \`'right'\`, default: \`'right'\`)`,
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
    intro: `Renders array items in a tabular format`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "array"\``, `\`"x-format": "table-object"\``, `\`"items": { "type": "object" }\``],
          example: arrayEditorTableObjectExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Footer",
          intro: `Adds a footer row with add and/or delete-all buttons. Use \`x-arrayDeleteAll\` to also show a "Delete all" button in the header.`,
          notesMarkdown: `-   \`x-arrayDeleteAll\` — Adds a "Delete all" button to the header
-   \`x-arrayFooterAdd\` — Adds an "Add item" button in the footer
-   \`x-arrayFooterDeleteAll\` — Adds a "Delete all" button in the footer
-   \`x-arrayFooterButtonsPosition\` — Aligns footer buttons (\`'left'\` or \`'right'\`, default: \`'right'\`)`,
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
    intro: `Renders a fixed-length array as a single-row table, with each prefixItem as a column.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "array"\``, `\`"x-format": "tuple"\``, `\`"prefixItems"\` must be defined`],
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
    intro: `The standard editor that appears for boolean types without specific formatting requirements.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "boolean"\``],
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
    intro: `Renders a single checkbox input for boolean values.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "boolean"\``, `\`"x-format": "checkbox"\``],
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
    intro: `Renders two radio inputs for explicit true/false selection. Labels can be customized.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "boolean"\``, `\`"x-format": "radios"\``, `Optional: \`"x-enumTitles": ["Yes", "No"]\` for custom labels`],
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
    intro: `Horizontal layout version of the radio buttons editor.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "boolean"\``, `\`"x-format": "radios-inline"\``, `Optional: \`"x-enumTitles": ["Yes", "No"]\` for custom labels`],
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
    intro: `Renders a select input with true/false options. Option labels can be customized.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "boolean"\``, `\`"x-format": "select"\``, `Optional: \`"x-enumTitles": ["Yes", "No"]\` for custom labels`],
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
    intro: `A standard numeric input field that appears when no specific format is requested.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "number"\` or \`"type": "integer"\``],
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
    intro: `Displays a dropdown select box populated with the values from the \`enum\` array. Ideal when users need to choose from predefined numeric options.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "number"\` or \`"type": "integer"\``, `\`"enum"\` array defined`],
          notesHeading: `Optional Properties`,
          notesMarkdown: `-   \`"x-enumTitles"\` - Human-readable labels that replace the numeric values in the dropdown`,
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
          activationConditions: [`\`"type": "number"\` or \`"type": "integer"\``, `\`"enum"\` array defined`, `\`"x-format": "radios"\``],
          notesHeading: `Optional Properties`,
          notesMarkdown: `-   \`"x-enumTitles"\` - Descriptive labels shown next to each radio button`,
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
          activationConditions: [`\`"type": "number"\` or \`"type": "integer"\``, `\`"enum"\` array defined`, `\`"x-format": "radios-inline"\``],
          notesHeading: `Optional Properties`,
          notesMarkdown: `-   \`"x-enumTitles"\` - Short labels that work well in horizontal layouts`,
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
    intro: `A standard numeric input field. When empty the instance value is \`null\``,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": ["null", "number"]\` or \`"type": ["null", "integer"]\``, `\`"x-nullable": true\``],
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
          activationConditions: [`\`"type": "number"\` or \`"type": "integer"\``, `\`"x-format": "raty"\` property defined`, `Raty.js library loaded (\`window.Raty\`)`, `Plugin: [Raty.js on GitHub](https://github.com/wbotelhos/raty)`],
          notesHeading: `Plugin Options`,
          notesMarkdown: `Options can be passed to the plugin via \`"x-raty"\` keyword

-   \`"x-raty.half"\` - Enables selection of half-star values when true
-   \`"x-raty.starType"\` - Defines HTML tag used for star elements (default: 'i')`,
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
          activationConditions: [`\`"type": "number"\``, `\`"x-format": "imask"\``, `IMask.js must be available (\`window.IMask\`)`, `Plugin: [IMask.js on GitHub](https://github.com/uNmAnNeR/imaskjs)`],
          notesHeading: `Plugin Options`,
          notesMarkdown: `Options can be passed to the plugin via \`"x-imask"\` keyword`,
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
          activationConditions: [`\`"type": "number"\` or \`"type": "integer"\``, `\`"minimum"\` and \`"maximum"\` properties are defined, OR`, `\`"x-format": "range"\` is explicitly specified`],
          notesHeading: `Features`,
          notesMarkdown: `-   Automatic step calculation based on \`multipleOf\` property
-   Support for exclusive minimum/maximum with \`exclusiveMinimum\`/\`exclusiveMaximum\`
-   Custom step override using \`x-inputAttributes.step\`
-   Custom min/max override using \`x-inputAttributes\``,
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
          activationConditions: [`\`"type": "object"\``],
          notesHeading: `Options`,
          notesMarkdown: `-   \`x-addPropertyContent\`: Custom content for add property button
-   \`x-collapseToggleContent\`: Custom content for collapse toggle
-   \`x-deactivateNonRequired\`: Deactivate non-required properties
-   \`x-enableCollapseToggle\`: Enable collapse/expand functionality
-   \`x-propertiesToggleContent\`: Custom content for properties toggle
-   \`x-startCollapsed\`: Start with the object collapsed
-   \`x-titleTemplate\`: Custom template for the title`,
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
    intro: `Displays object properties using a grid system to position property editors within a fieldset layout.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "object"\``, `\`"x-format": "grid"\``],
          notesHeading: "Grid Options for Properties",
          notesMarkdown: `-   \`columns\`: How many columns should the editor occupy
-   \`offset\`: How many columns should the editor be offset
-   \`newRow\`: Whether the editor should be put in a new row`,
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
          activationConditions: [`\`"type": "object"\``, `\`"x-format": "nav-vertical"\``],
          notesHeading: `Options`,
          notesMarkdown: `-   \`"x-navWarning"\` — show a warning indicator on tabs that contain validation errors (defaults to \`true\`)
-   \`"x-navWarningMessage"\` — custom message shown in the tab warning indicator
-   \`"x-format": "nav-vertical-N"\` — use a custom column width for the tab list, where \`N\` is a Bootstrap column number (e.g. \`"nav-vertical-3"\`)`,
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
          activationConditions: [`\`"type": "object"\``, `\`"x-format": "nav-horizontal"\``],
          notesHeading: `Options`,
          notesMarkdown: `-   \`"x-navWarning"\` — show a warning indicator on tabs that contain validation errors (defaults to \`true\`)
-   \`"x-navWarningMessage"\` — custom message shown in the tab warning indicator`,
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
          activationConditions: [`\`"type": "object"\``, `\`"x-format": "categories-vertical"\``],
          notesHeading: `Options`,
          notesMarkdown: `-   \`"x-categoriesDefaultLabel"\` — label for the default tab that groups primitive properties (defaults to \`"Basic"\`)
-   \`"x-category"\` — set on a child property schema to assign it to a named tab
-   \`"x-navWarning"\` — show a warning indicator on tabs that contain validation errors
-   \`"x-navWarningMessage"\` — custom message shown in the tab warning indicator
-   \`"x-categoryOrder"\` — array of category names that controls the tab display order; listed categories appear first in the given order, unlisted ones follow
-   \`"x-format": "categories-vertical-N"\` — use a multi-column layout where \`N\` is the number of columns (e.g. \`"categories-vertical-3"\`)`,
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
    intro: `Displays object properties grouped into tabs arranged horizontally across the top. Primitive properties are automatically grouped into a default category, while nested objects and arrays each get their own tab.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "object"\``, `\`"x-format": "categories-horizontal"\``],
          notesHeading: "Options",
          notesMarkdown: `-   \`"x-categoriesDefaultLabel"\` — label for the default tab that groups primitive properties (defaults to \`"Basic"\`)
-   \`"x-category"\` — set on a child property schema to assign it to a named tab
-   \`"x-navWarning"\` — show a warning indicator on tabs that contain validation errors
-   \`"x-navWarningMessage"\` — custom message shown in the tab warning indicator
-   \`"x-categoryOrder"\` — array of category names that controls the tab display order; listed categories appear first in the given order, unlisted ones follow`,
          example: objectEditorCategoriesHorizontalExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Category Order Example",
          intro: `Use \`"x-categoryOrder"\` to control the tab sequence. Tabs listed in the array appear first; any others follow in natural order.`,
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
    intro: `Renders object properties as collapsible Bootstrap accordion panels.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "object"\``, `\`"x-format": "accordion"\``],
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
    intro: `Renders radio inputs for object enum values. Each radio stores the full selected object as the field value. Labels can be customized with x-enumTitles.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "object"\``, `\`"enum": [...]\``, `\`"x-format": "radios"\``],
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
    intro: `Horizontal layout version of the object radios editor for more compact displays.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "object"\``, `\`"enum": [...]\``, `\`"x-format": "radios-inline"\``],
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
    intro: `The standard text input that appears for string types without specific formatting requirements.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "string"\``],
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
    intro: `Renders as many radio type inputs as values in the enum constraint. The radio labels can be customized with the enumTitles option.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "string"\``, `\`"enum": [...]\``, `\`"x-format": "radios"\``],
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
    intro: `Horizontal layout version of the radio editor for more compact displays.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "string"\``, `\`"enum": [...]\``, `\`"x-format": "radios-inline"\``],
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
    intro: `Renders a select dropdown with options from the enum constraint. The options labels can be customized with the enumTitles option.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "string"\``, `\`"enum": [...]\``],
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
    intro: `Renders a multi-line textarea input for longer string content.`,
    component: SectionsPage,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "string"\``, `\`"x-format": "textarea"\``],
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
          activationConditions: [`\`"type": "string"\``, `\`"x-format": "awesomplete"\``, `Awesomplete.js must be available (\`window.Awesomplete\`)`, `Plugin: [Awesomplete.js on GitHub](https://github.com/LeaVerou/awesomplete)`],
          notesHeading: `Plugin Options`,
          notesMarkdown: `Options can be passed to the plugin via \`"x-awesomplete"\` keyword`,
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
          activationConditions: [`\`"type": "string"\``, `\`"x-flatpickr": { ... }\``, `flatpickr.js must be available (\`window.flatpickr\`)`, `Plugin: [Flatpickr.js on GitHub](https://github.com/flatpickr/flatpickr)`],
          notesHeading: `Plugin Options`,
          notesMarkdown: `Options can be passed to the plugin via \`"x-flatpickr"\` keyword`,
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
          activationConditions: [`\`"type": "string"\``, `\`"x-format": "imask"\``, `IMask.js must be available (\`window.IMask\`)`, `Plugin: [IMask.js on GitHub](https://github.com/uNmAnNeR/imaskjs)`],
          notesHeading: `Plugin Options`,
          notesMarkdown: `Options can be passed to the plugin via \`"x-imask"\` keyword`,
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
          activationConditions: [`\`"type": "string"\``, `\`"x-format": "jodit"\``, `Jodit.js must be available (\`window.Jodit\`)`, `Plugin: [Jodit.js on GitHub](https://github.com/xdan/jodit)`],
          notesHeading: `Plugin Options`,
          notesMarkdown: `Options can be passed to the plugin via \`"x-jodit"\` keyword`,
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
          activationConditions: [`\`"type": "string"\``, `\`"x-format": "quill"\``, `Quill.js must be available (\`window.Quill\`)`, `Plugin: [Quill.js on GitHub](https://github.com/quilljs/quill)`],
          notesHeading: `Plugin Options`,
          notesMarkdown: `Options can be passed to the plugin via \`"x-quill"\` keyword`,
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
          activationConditions: [`\`"type": "string"\``, `\`"x-format": "filepond"\``, `FilePond must be available (\`window.FilePond\`)`, `Plugin: [FilePond](https://pqina.nl/filepond/)`],
          notesHeading: `Plugin Options`,
          notesMarkdown: `Options can be passed to the plugin via \`"x-filepond"\` keyword`,
          example: stringEditorFilepondExample
        }
      }
    ]
  },
  {
    path: "/string-editor-ace",
    routeName: "String Ace",
    group: "Editors",
    navbar: true,
    requiresPlugin: true,
    title: "Jedison - String Ace Editor",
    description: "String editor with code syntax highlighting using the Ace plugin.",
    keywords: ["string", "ace", "code", "editor", "syntax", "highlighting", "plugin", "x-format", "ace", "x-ace"],
    component: SectionsPage,
    heading: `String Ace`,
    intro: `Renders a code editor with syntax highlighting using Ace.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "string"\``, `\`"x-format": "ace"\``, `Ace must be available (\`window.ace\`)`, `Plugin: [Ace on GitHub](https://github.com/ajaxorg/ace)`],
          notesHeading: `Plugin Options`,
          notesMarkdown: `Options can be passed to the plugin via \`"x-ace"\` keyword (e.g. \`mode\`, \`theme\`, \`height\`). Ace also needs its own mode script loaded per language (e.g. \`mode-json.min.js\`) in addition to the core Ace script.`,
          example: stringEditorAceExample
        }
      }
    ]
  },
  {
    path: "/string-editor-emoji-button",
    routeName: "String Emoji Button",
    group: "Editors",
    navbar: true,
    requiresPlugin: true,
    title: "Jedison - String Emoji Button Editor",
    description: "String editor for picking a single emoji using the Emoji Button plugin.",
    keywords: ["string", "emoji", "emojiButton", "picker", "plugin", "x-format", "emojiButton", "x-emojiButton"],
    component: SectionsPage,
    heading: `String Emoji Button`,
    intro: `Renders a button that opens an emoji picker using Emoji Button.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "string"\``, `\`"x-format": "emojiButton"\``, `Emoji Button must be available (\`window.EmojiButton\`)`, `Plugin: [Emoji Button on GitHub](https://github.com/joeattardi/emoji-button)`],
          notesHeading: `Plugin Options`,
          notesMarkdown: `Options can be passed to the plugin via \`"x-emojiButton"\` keyword`,
          example: stringEditorEmojiButtonExample
        }
      }
    ]
  },
  {
    path: "/string-editor-simplemde",
    routeName: "String SimpleMDE",
    group: "Editors",
    navbar: true,
    requiresPlugin: true,
    title: "Jedison - String SimpleMDE Editor",
    description: "String editor with a markdown editing toolbar using the SimpleMDE plugin.",
    keywords: ["string", "simplemde", "markdown", "editor", "plugin", "x-format", "simplemde", "x-simplemde"],
    component: SectionsPage,
    heading: `String SimpleMDE`,
    intro: `Renders a markdown editor with a formatting toolbar using SimpleMDE.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "string"\``, `\`"x-format": "simplemde"\``, `SimpleMDE must be available (\`window.SimpleMDE\`)`, `Plugin: [SimpleMDE on GitHub](https://github.com/sparksuite/simplemde-markdown-editor)`],
          notesHeading: `Plugin Options`,
          notesMarkdown: `Options can be passed to the plugin via \`"x-simplemde"\` keyword`,
          example: stringEditorSimplemdeExample
        }
      }
    ]
  },
  {
    path: "/string-editor-pickr",
    routeName: "String Pickr",
    group: "Editors",
    navbar: true,
    requiresPlugin: true,
    title: "Jedison - String Pickr Editor",
    description: "String editor for picking a color using the Pickr plugin.",
    keywords: ["string", "pickr", "color", "picker", "plugin", "x-format", "pickr", "x-pickr"],
    component: SectionsPage,
    heading: `String Pickr`,
    intro: `Renders a color picker using Pickr.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "string"\``, `\`"x-format": "pickr"\``, `Pickr must be available (\`window.Pickr\`)`, `Plugin: [Pickr on GitHub](https://github.com/simonwep/pickr)`],
          notesHeading: `Plugin Options`,
          notesMarkdown: `Options can be passed to the plugin via \`"x-pickr"\` keyword. Pickr also needs one of its own theme stylesheets loaded (\`classic\`, \`monolith\`, or \`nano\`) matching the \`theme\` option.`,
          example: stringEditorPickrExample
        }
      }
    ]
  },
  {
    path: "/string-editor-milkdown",
    routeName: "String Milkdown",
    group: "Editors",
    navbar: true,
    requiresPlugin: true,
    title: "Jedison - String Milkdown Editor",
    description: "String editor with a WYSIWYG markdown editing experience using the Milkdown plugin.",
    keywords: ["string", "milkdown", "wysiwyg", "markdown", "rich text", "plugin", "x-format", "milkdown", "x-milkdown"],
    component: SectionsPage,
    heading: `String Milkdown`,
    intro: `Renders a WYSIWYG markdown editor using Milkdown's Crepe preset.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: [`\`"type": "string"\``, `\`"x-format": "milkdown"\``, `Milkdown must be available (\`window.Milkdown.Crepe\`)`, `Plugin: [Milkdown](https://milkdown.dev/)`],
          notesHeading: `Plugin Options`,
          notesMarkdown: `Options can be passed to the plugin via \`"x-milkdown"\` keyword.

Unlike jedison's other plugin editors, Milkdown ships as an ES module with no plain \`<script>\`-loadable build, so it can't be dropped in with a single CDN tag — it needs to be imported and exposed as \`window.Milkdown\` (see the example source below). Its theme CSS also isn't plain-\`<link>\`-loadable as shipped (it uses bundler-only \`@import\` specifiers), so the example inlines a pre-flattened copy instead.

The \`cursor\` feature is disabled in this example: loading Milkdown from separate CDN module URLs like this pulls in two different copies of \`prosemirror-state\`, and that feature crashes on mount ("Adding different instances of a keyed plugin") when that happens. This is a quirk of loading Milkdown via CDN, not something that happens in jedison's own bundled build. All other Crepe features work normally.

Milkdown's markdown serializer also always adds a trailing newline, so a value like \`"a"\` round-trips as \`"a\\n"\`.`,
          exampleHtml: htmlStringEditorMilkdown
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
          activationConditions: [`\`"type": "null"\``],
          notesHeading: `Example`,
          notesMarkdown: `\`\`\`
{
  "type": "null",
  "title": "Null"
}
\`\`\``,
          example: nullEditorDefaultExample
        }
      }
    ]
  },
  {
    path: "/conditional-fields",
    routeName: "Conditional Fields",
    group: "Editors",
    navbar: true,
    title: "Jedison - Conditional Fields",
    description: "Show or require different fields based on another field's value using if/then/else.",
    keywords: ["conditional", "if", "then", "else", "if-then-else", "validation"],
    component: SectionsPage,
    heading: "Conditional Fields",
    intro: `A schema can use \`if\` to test a condition against the current value. When the condition matches, \`then\` applies; when it doesn't, \`else\` applies instead. Either \`then\` or \`else\` alone is enough — only \`if\` itself is required.`,
    sections: [
      {
        component: SectionExample,
        props: {
          activationConditions: ["Schema has an `if` keyword — `then` and `else` are both optional and evaluated independently."],
          notesHeading: "How branch switching works",
          notesMarkdown: `Jedison builds one editor per matching branch and swaps which one is shown as the watched fields change. Switching branches keeps each branch's own field values remembered rather than wiping them, so flipping back and forth doesn't lose data.`,
          example: ifThenElseExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "Chaining Conditions (else-if)",
          intro: `Nesting another \`if\`/\`then\`/\`else\` inside an \`else\` block chains conditions together, like an else-if ladder.`,
          example: ifThenElseNestedExample
        }
      }
    ]
  },
  {
    path: "/schema-composition",
    routeName: "Schema Composition",
    group: "Editors",
    navbar: true,
    title: "Jedison - Schema Composition",
    description: "Combining subschemas with allOf, anyOf, oneOf, and not.",
    keywords: ["allOf", "anyOf", "oneOf", "not", "composition", "and", "or", "xor", "validation"],
    component: SectionsPage,
    heading: "Schema Composition",
    intro: `JSON Schema lets you combine multiple subschemas on a single field using \`allOf\`, \`anyOf\`, \`oneOf\`, and \`not\`.`,
    sections: [
      {
        component: SectionExample,
        props: {
          heading: "allOf (AND)",
          intro: `The value must be valid against **all** of the given subschemas.`,
          activationConditions: [`\`allOf\` keyword present — the field still renders with its own type's normal editor; every subschema is validated together.`],
          example: schemaCompositionAllOfExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "anyOf (OR)",
          intro: `The value must be valid against **any** (one or more) of the given subschemas.`,
          activationConditions: [`\`anyOf\` keyword present — jedison shows a switcher to pick which candidate schema to fill in as.`],
          example: schemaCompositionAnyOfExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "oneOf (XOR)",
          intro: `The value must be valid against **exactly one** of the given subschemas — matching more than one is invalid too.`,
          activationConditions: [`\`oneOf\` keyword present — uses the same switcher UI as \`anyOf\`.`],
          notesHeading: "anyOf vs. oneOf",
          notesMarkdown: `Try \`15\` in both this example and the \`anyOf\` example above: 15 is a multiple of both 3 and 5, so it's valid for \`anyOf\` but invalid for \`oneOf\`.`,
          example: schemaCompositionOneOfExample
        }
      },
      {
        component: SectionExample,
        props: {
          heading: "not (NOT)",
          intro: `The value must **not** be valid against the given subschema.`,
          activationConditions: [`\`not\` keyword present — adds a validation rule on top of the field's normal editor; it doesn't change which editor is used.`],
          example: schemaCompositionNotExample
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
          markdown: `Jedison allows you to extend validation beyond standard JSON Schema rules by adding custom constraints. These are defined in the \`constraints\` option when initializing Jedison.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "How Custom Constraints Work",
          level: 3,
          markdown: `Custom constraints are validation functions that:

-   Check for specific schema extensions (typically using \`x-\` prefixed properties)
-   Return an array of validation errors/warnings
-   Have access to the current validation context (validator, value, schema, key, path, translator)
-   Can be configured as either errors or warnings`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Implementation Example",
          level: 3,
          markdown: `The example shows a custom constraint checking \`x-my-constraint\`:`
        }
      },
      {component: SectionCode, props: {code: mdCustomConstraint}},
      {
        component: SectionProse,
        props: {
          heading: "Key Components",
          level: 3,
          markdown: `-   **\`context\`** object containing:
    -   \`value\` - The current field value
    -   \`path\` - JSON Pointer to the field
    -   \`schema\` - The schema for this field
    -   \`translator\` - The Translator instance
-   **Error objects** with:
    -   \`type\` - 'error' or 'warning' severity level
    -   \`path\` - Location of the validation issue
    -   \`constraint\` - Name of the constraint
    -   \`messages\` - User-friendly error messages`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Error Handling and Validation States",
          markdown: `Jedison provides flexible error handling through the \`getErrors()\` method:

-   **\`jedison.getErrors()\`** - Returns only error-level validations (default)
-   **\`jedison.getErrors(['error', 'warning'])\`** - Returns both errors and warnings`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Benefits of Warning-Level Constraints",
          level: 3,
          markdown: `Using warning-level constraints provides several advantages:

-   **Soft validation** - Users can proceed with warnings while being informed of potential issues
-   **Progressive validation** - Start with warnings that can be upgraded to errors later
-   **Better UX** - Different visual treatment for errors (blocking) vs warnings (advisory)
-   **Flexible workflows** - Allow submission with warnings while maintaining data quality standards

In the live example below, the form displays **warnings (yellow)** and **errors (red)** independently. By default, \`getErrors()\` only returns errors, while warnings are still shown in the UI. To include warnings in the validation result, pass an array of filters: \`['error', 'warning']\`. Final validation behavior is left to the user's implementation.`
        }
      },
      {component: SectionExample, props: {exampleHtml: htmlCustomValidator}}
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
          markdown: `Jedison allows you to define templates with dynamic titles and descriptions that use placeholders. These placeholders are replaced at runtime with relevant values.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Available Placeholders",
          level: 3,
          markdown: `-   \`value\` — The current value (from \`getValue()\`); **always available**
-   \`settings\` — Configuration options (from \`jedison.options.settings\`); **always available**
-   \`i0\` — The zero-based index of the array item; available **only if the editor is an array item editor**
-   \`i1\` — The one-based index of the array item; available **only if the editor is an array item editor**
-   \`parent\` — Parent instance template data; **available when parent exists**
-   \`length\` — The length of the string value; **available only for string types**
-   \`remaining\` — Characters remaining (\`maxLength - length\`); **available only for strings with maxLength**`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Fallback Values",
          level: 3,
          markdown: `Use the \`||\` operator inside a placeholder to provide a fallback value when the placeholder resolves to \`null\` or \`undefined\`:

\`\`\`
{{ value.name || 'Unnamed' }}
\`\`\`

The fallback can be any quoted string (single or double quotes). When the placeholder has a value, the fallback is ignored.`
        }
      },
      {component: SectionExample, props: {example: templatesFallbackExample}},
      {
        component: SectionProse,
        props: {
          heading: "Parent Template Access",
          level: 3,
          markdown: `When working with nested structures, you can access parent instance data using the \`parent\` placeholder. This is particularly useful for creating hierarchical titles and references.`
        }
      },
      {
        component: SectionProse,
        props: {
          heading: "Common Parent Access Patterns",
          level: 3,
          markdown: `-   \`parent.value\` — Access the parent's current value
-   \`parent.i1\` — Access the parent's array index (1-based)
-   \`parent.parent.value\` — Access grandparent's value (for deeply nested structures)`
        }
      },
      {component: SectionExample, props: {example: templatesExample}}
    ]
  },
]

export default pages
