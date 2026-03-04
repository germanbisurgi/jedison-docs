export const searchData = [
  // Getting Started
  {
    path: '/',
    name: 'Introduction',
    group: 'Getting Started',
    description: 'Overview of Jedison, a JSON Schema editor and validator for the browser.',
    keywords: ['introduction', 'overview', 'jedison', 'json schema', 'editor', 'validator']
  },
  {
    path: '/install',
    name: 'Install',
    group: 'Getting Started',
    description: 'How to install Jedison via npm, yarn, or CDN.',
    keywords: ['install', 'setup', 'npm', 'yarn', 'cdn', 'import']
  },
  {
    path: '/as-editor',
    name: 'As Editor',
    group: 'Getting Started',
    description: 'Using Jedison as a JSON form editor to generate UI from JSON Schema.',
    keywords: ['editor', 'form', 'json schema', 'ui', 'generate']
  },
  {
    path: '/as-validator',
    name: 'As Validator',
    group: 'Getting Started',
    description: 'Using Jedison as a JSON Schema validator without UI.',
    keywords: ['validator', 'validate', 'json schema', 'errors']
  },
  {
    path: '/methods',
    name: 'Methods',
    group: 'Getting Started',
    description: 'API methods available on the Jedison instance.',
    keywords: ['methods', 'api', 'getValue', 'setValue', 'destroy', 'getErrors']
  },
  {
    path: '/events',
    name: 'Events',
    group: 'Getting Started',
    description: 'Events emitted by Jedison for change detection and lifecycle hooks.',
    keywords: ['events', 'change', 'ready', 'on', 'emit', 'lifecycle']
  },
  {
    path: '/playground',
    name: 'Playground',
    group: 'Getting Started',
    description: 'Interactive playground to experiment with Jedison.',
    keywords: ['playground', 'demo', 'interactive', 'experiment']
  },
  {
    path: '/faq',
    name: 'FAQ',
    group: 'Getting Started',
    description: 'Frequently asked questions about Jedison.',
    keywords: ['faq', 'questions', 'help', 'troubleshooting', 'x-deactivateNonRequired']
  },

  // Features
  {
    path: '/themes',
    name: 'Themes',
    group: 'Features',
    description: 'Theming support for Jedison including Bootstrap and custom themes.',
    keywords: ['themes', 'bootstrap', 'styling', 'css', 'custom']
  },
  {
    path: '/icons',
    name: 'Icons',
    group: 'Features',
    description: 'Icon configuration for Jedison buttons and UI elements.',
    keywords: ['icons', 'bootstrap icons', 'fontawesome', 'svg', 'ui']
  },
  {
    path: '/language-and-translations',
    name: 'Language and Translations',
    group: 'Features',
    description: 'Localization and translation support for Jedison labels and messages.',
    keywords: ['language', 'translations', 'i18n', 'localization', 'labels']
  },
  {
    path: '/ref-parser',
    name: 'RefParser',
    group: 'Features',
    description: '$ref resolution and JSON Schema reference parsing.',
    keywords: ['ref', 'reference', 'parser', '$ref', 'resolve', 'dereference', 'x-deactivateNonRequired']
  },
  {
    path: '/markdown-annotations',
    name: 'Markdown Annotations',
    group: 'Features',
    description: 'Using markdown in JSON Schema title and description fields.',
    keywords: ['markdown', 'annotations', 'title', 'description', 'formatting']
  },
  {
    path: '/options',
    name: 'Options',
    group: 'Features',
    description: 'Global configuration options for Jedison initialization.',
    keywords: ['options', 'configuration', 'settings', 'init', 'global', 'enforceConst', 'enforceEnum', 'enforceRequired', 'enforceAdditionalProperties', 'switcherInput', 'enablePropertiesToggle', 'enableCollapseToggle', 'deactivateNonRequired', 'showErrors', 'assertFormat', 'arrayDelete', 'arrayMove', 'editJsonData', 'arrayAdd', 'useConstraintAttributes']
  },
  {
    path: '/schema-options',
    name: 'Schema Options',
    group: 'Features',
    description: 'Per-schema configuration using x- prefixed properties.',
    keywords: ['schema options', 'x-', 'ui-format', 'custom', 'per-field', 'x-addPropertyContent', 'x-arrayAdd', 'x-arrayAddContent', 'x-arrayButtonsPosition', 'x-arrayDelete', 'x-arrayDeleteContent', 'x-arrayDragContent', 'x-arrayMove', 'x-arrayMoveDownContent', 'x-arrayMoveUpContent', 'x-assertFormat', 'x-collapseToggleContent', 'x-containerAttributes', 'x-deactivateNonRequired', 'x-editJsonData', 'x-enableCollapseToggle', 'x-enforceConst', 'x-enforceEnum', 'x-enumTitles', 'x-format', 'x-grid', 'x-hidden', 'x-info', 'x-inputAttributes', 'x-messages', 'x-propertiesToggleContent', 'x-showErrors', 'x-sortable', 'x-startCollapsed', 'x-switcherTitle', 'x-titleHidden', 'x-titleIconClass', 'x-titleTemplate', 'x-useConstraintAttributes']
  },

  // Editors - Array
  {
    path: '/array-editor-default',
    name: 'Array Default',
    group: 'Editors',
    description: 'Standard array editor for JSON Schema array types with add/remove support.',
    keywords: ['array', 'default', 'add', 'remove', 'items', 'list']
  },
  {
    path: '/array-editor-checkboxes',
    name: 'Array Checkboxes',
    group: 'Editors',
    description: 'Array editor using checkboxes for enum values selection.',
    keywords: ['array', 'checkboxes', 'enum', 'multiple', 'select']
  },
  {
    path: '/array-editor-checkboxes-inline',
    name: 'Array Checkboxes Inline',
    group: 'Editors',
    description: 'Inline checkboxes layout for array enum selection.',
    keywords: ['array', 'checkboxes', 'inline', 'enum', 'horizontal', 'x-format', 'checkboxes-inline']
  },
  {
    path: '/array-editor-choices',
    name: 'Array Choices',
    group: 'Editors',
    description: 'Array editor using Choices.js plugin for tag-style multi-select.',
    keywords: ['array', 'choices', 'choices.js', 'tags', 'multi-select', 'plugin', 'x-format', 'choices']
  },
  {
    path: '/array-editor-nav-vertical',
    name: 'Array Navigation Vertical',
    group: 'Editors',
    description: 'Array editor with vertical tab navigation between items.',
    keywords: ['array', 'navigation', 'vertical', 'tabs', 'nav', 'x-format', 'nav-vertical']
  },
  {
    path: '/array-editor-nav-horizontal',
    name: 'Array Navigation Horizontal',
    group: 'Editors',
    description: 'Array editor with horizontal tab navigation between items.',
    keywords: ['array', 'navigation', 'horizontal', 'tabs', 'nav', 'x-format', 'nav-horizontal']
  },
  {
    path: '/array-editor-table',
    name: 'Array Table',
    group: 'Editors',
    description: 'Array editor rendered as a table for simple value types.',
    keywords: ['array', 'table', 'grid', 'rows', 'columns', 'x-format', 'table']
  },
  {
    path: '/array-editor-table-object',
    name: 'Array Table Object',
    group: 'Editors',
    description: 'Array editor rendered as a table for object items.',
    keywords: ['array', 'table', 'object', 'grid', 'rows', 'columns', 'x-format', 'table-object']
  },
  {
    path: '/array-editor-tuple',
    name: 'Array Tuple',
    group: 'Editors',
    description: 'Array editor for tuple schemas with fixed-length heterogeneous items.',
    keywords: ['array', 'tuple', 'fixed', 'prefixItems', 'heterogeneous', 'x-format', 'tuple']
  },

  // Editors - Boolean
  {
    path: '/boolean-editor-default',
    name: 'Boolean Default',
    group: 'Editors',
    description: 'Default boolean editor with toggle switch.',
    keywords: ['boolean', 'default', 'toggle', 'switch', 'true', 'false']
  },
  {
    path: '/boolean-editor-checkbox',
    name: 'Boolean Checkbox',
    group: 'Editors',
    description: 'Boolean editor displayed as a checkbox.',
    keywords: ['boolean', 'checkbox', 'check', 'true', 'false', 'x-format', 'checkbox']
  },
  {
    path: '/boolean-editor-radios',
    name: 'Boolean Radio Buttons',
    group: 'Editors',
    description: 'Boolean editor with stacked radio button inputs.',
    keywords: ['boolean', 'radio', 'buttons', 'true', 'false', 'x-format', 'radios', 'x-enumTitles']
  },
  {
    path: '/boolean-editor-radios-inline',
    name: 'Boolean Radio Buttons Inline',
    group: 'Editors',
    description: 'Boolean editor with inline radio button inputs.',
    keywords: ['boolean', 'radio', 'inline', 'horizontal', 'true', 'false', 'x-format', 'radios-inline', 'x-enumTitles']
  },
  {
    path: '/boolean-editor-select',
    name: 'Boolean Select Dropdown',
    group: 'Editors',
    description: 'Boolean editor as a select dropdown.',
    keywords: ['boolean', 'select', 'dropdown', 'true', 'false', 'x-format', 'select', 'x-enumTitles']
  },

  // Editors - Number
  {
    path: '/number-editor-default',
    name: 'Number Default',
    group: 'Editors',
    description: 'Default number editor with numeric text input.',
    keywords: ['number', 'integer', 'default', 'input', 'numeric']
  },
  {
    path: '/number-editor-select',
    name: 'Number Select',
    group: 'Editors',
    description: 'Number editor as a select dropdown for enum values.',
    keywords: ['number', 'select', 'dropdown', 'enum', 'x-enumTitles']
  },
  {
    path: '/number-editor-radios',
    name: 'Number Radio Buttons',
    group: 'Editors',
    description: 'Number editor with stacked radio buttons for enum values.',
    keywords: ['number', 'radio', 'buttons', 'enum', 'x-format', 'radios', 'x-enumTitles']
  },
  {
    path: '/number-editor-radios-inline',
    name: 'Number Radio Buttons Inline',
    group: 'Editors',
    description: 'Number editor with inline radio buttons for enum values.',
    keywords: ['number', 'radio', 'inline', 'enum', 'x-format', 'radios-inline', 'x-enumTitles']
  },
  {
    path: '/number-editor-nullable',
    name: 'Number Nullable',
    group: 'Editors',
    description: 'Number editor that supports null values.',
    keywords: ['number', 'nullable', 'null', 'optional', 'x-nullable']
  },
  {
    path: '/number-editor-raty',
    name: 'Number Star Rating',
    group: 'Editors',
    description: 'Number editor as a star rating widget using Raty plugin.',
    keywords: ['number', 'rating', 'stars', 'raty', 'plugin', 'x-format', 'raty', 'x-raty']
  },
  {
    path: '/number-editor-imask',
    name: 'Number IMask',
    group: 'Editors',
    description: 'Number editor with IMask input masking plugin.',
    keywords: ['number', 'imask', 'mask', 'format', 'plugin', 'x-format', 'imask', 'x-imask']
  },
  {
    path: '/number-editor-range',
    name: 'Number Range',
    group: 'Editors',
    description: 'Number editor as a range slider input.',
    keywords: ['number', 'range', 'slider', 'min', 'max', 'x-format', 'range', 'x-inputAttributes']
  },

  // Editors - Object
  {
    path: '/object-editor-default',
    name: 'Object Default',
    group: 'Editors',
    description: 'Default object editor rendering all properties vertically.',
    keywords: ['object', 'default', 'properties', 'vertical', 'x-addPropertyContent', 'x-collapseToggleContent', 'x-deactivateNonRequired', 'x-enableCollapseToggle', 'x-propertiesToggleContent', 'x-startCollapsed', 'x-titleTemplate']
  },
  {
    path: '/object-editor-grid',
    name: 'Object Grid',
    group: 'Editors',
    description: 'Object editor with Bootstrap grid layout for properties.',
    keywords: ['object', 'grid', 'columns', 'layout', 'bootstrap', 'x-format', 'grid']
  },
  {
    path: '/object-editor-nav-vertical',
    name: 'Object Navigation Vertical',
    group: 'Editors',
    description: 'Object editor with vertical tab navigation between properties.',
    keywords: ['object', 'navigation', 'vertical', 'tabs', 'nav', 'x-format', 'nav-vertical', 'x-navWarning', 'x-navWarningMessage']
  },
  {
    path: '/object-editor-nav-horizontal',
    name: 'Object Navigation Horizontal',
    group: 'Editors',
    description: 'Object editor with horizontal tab navigation between properties.',
    keywords: ['object', 'navigation', 'horizontal', 'tabs', 'nav', 'x-format', 'nav-horizontal', 'x-navWarning', 'x-navWarningMessage']
  },
  {
    path: '/object-editor-categories-vertical',
    name: 'Object Categories Vertical',
    group: 'Editors',
    description: 'Object editor with vertical category tabs grouping properties.',
    keywords: ['object', 'categories', 'vertical', 'tabs', 'groups', 'x-format', 'categories-vertical', 'x-categoriesDefaultLabel', 'x-category', 'x-navWarning', 'x-navWarningMessage']
  },
  {
    path: '/object-editor-categories-horizontal',
    name: 'Object Categories Horizontal',
    group: 'Editors',
    description: 'Object editor with horizontal category tabs grouping properties.',
    keywords: ['object', 'categories', 'horizontal', 'tabs', 'groups', 'x-format', 'categories-horizontal', 'x-categoriesDefaultLabel', 'x-category', 'x-navWarning', 'x-navWarningMessage']
  },

  // Editors - String
  {
    path: '/string-editor-default',
    name: 'String Default',
    group: 'Editors',
    description: 'Default string editor as a text input.',
    keywords: ['string', 'default', 'text', 'input']
  },
  {
    path: '/string-editor-radios',
    name: 'String Radio Buttons',
    group: 'Editors',
    description: 'String editor with stacked radio buttons for enum values.',
    keywords: ['string', 'radio', 'buttons', 'enum', 'x-format', 'radios']
  },
  {
    path: '/string-editor-radios-inline',
    name: 'String Radio Buttons Inline',
    group: 'Editors',
    description: 'String editor with inline radio buttons for enum values.',
    keywords: ['string', 'radio', 'inline', 'enum', 'x-format', 'radios-inline']
  },
  {
    path: '/string-editor-select',
    name: 'String Select',
    group: 'Editors',
    description: 'String editor as a select dropdown for enum values.',
    keywords: ['string', 'select', 'dropdown', 'enum']
  },
  {
    path: '/string-editor-textarea',
    name: 'String Textarea',
    group: 'Editors',
    description: 'String editor as a multiline textarea.',
    keywords: ['string', 'textarea', 'multiline', 'text', 'x-format', 'textarea']
  },
  {
    path: '/string-editor-awesomplete',
    name: 'String Awesomplete',
    group: 'Editors',
    description: 'String editor with autocomplete using Awesomplete plugin.',
    keywords: ['string', 'awesomplete', 'autocomplete', 'suggest', 'plugin', 'x-format', 'awesomplete', 'x-awesomplete']
  },
  {
    path: '/string-editor-flatpickr',
    name: 'String Flatpickr',
    group: 'Editors',
    description: 'String editor with date/time picker using Flatpickr plugin.',
    keywords: ['string', 'flatpickr', 'date', 'time', 'picker', 'plugin', 'x-flatpickr']
  },
  {
    path: '/string-editor-imask',
    name: 'String IMask',
    group: 'Editors',
    description: 'String editor with input masking using IMask plugin.',
    keywords: ['string', 'imask', 'mask', 'format', 'pattern', 'plugin', 'x-format', 'imask', 'x-imask']
  },
  {
    path: '/string-editor-jodit',
    name: 'String Jodit',
    group: 'Editors',
    description: 'String editor with rich text WYSIWYG using Jodit plugin.',
    keywords: ['string', 'jodit', 'wysiwyg', 'rich text', 'html', 'plugin', 'x-format', 'jodit', 'x-jodit']
  },
  {
    path: '/string-editor-quill',
    name: 'String Quill',
    group: 'Editors',
    description: 'String editor with rich text WYSIWYG using Quill plugin.',
    keywords: ['string', 'quill', 'wysiwyg', 'rich text', 'html', 'plugin', 'x-format', 'quill', 'x-quill']
  },

  // Editors - Null
  {
    path: '/null-editor-default',
    name: 'Null Default',
    group: 'Editors',
    description: 'Default null editor for JSON Schema null type.',
    keywords: ['null', 'default', 'null type']
  },

  // Advanced
  {
    path: '/custom-constraint',
    name: 'Custom Constraint',
    group: 'Advanced',
    description: 'Defining custom validation constraints beyond standard JSON Schema.',
    keywords: ['custom', 'constraint', 'validation', 'custom validator', 'advanced']
  },
  {
    path: '/templates',
    name: 'Templates',
    group: 'Advanced',
    description: 'Using templates to compute dynamic field values from other fields.',
    keywords: ['templates', 'dynamic', 'computed', 'values', 'reactive', 'advanced']
  }
]
