import Introduction from "@/pages/getting-started/Introduction.vue"
import Install from "@/pages/getting-started/Install.vue"
import AsEditor from "@/pages/getting-started/AsEditor.vue"
import AsValidator from "@/pages/getting-started/AsValidator.vue"
import Playground from "@/pages/getting-started/Playground.vue"
import Methods from "@/pages/getting-started/Methods.vue"
import Events from "@/pages/getting-started/Events.vue"
import Themes from "@/pages/features/Themes.vue"
import Icons from "@/pages/features/Icons.vue"
import LanguageAndTranslations from "@/pages/features/LanguageAndTranslations.vue"
import RefParser from "@/pages/features/RefParser.vue"
import MarkdownAnnotations from "@/pages/features/MarkdownAnnotations.vue"
import Options from "@/pages/features/Options.vue"
import SchemaOptions from "@/pages/features/SchemaOptions.vue"
import ArrayEditorDefault from "@/pages/editors/ArrayEditorDefault.vue"
import ArrayEditorCheckboxes from "@/pages/editors/ArrayEditorCheckboxes.vue"
import ArrayEditorCheckboxesInline from "@/pages/editors/ArrayEditorCheckboxesInline.vue"
import ArrayEditorChoices from "@/pages/editors/ArrayEditorChoices.vue"
import ArrayEditorNavVertical from "@/pages/editors/ArrayEditorNavVertical.vue"
import ArrayEditorNavHorizontal from "@/pages/editors/ArrayEditorNavHorizontal.vue"
import ArrayEditorTable from "@/pages/editors/ArrayEditorTable.vue"
import ArrayEditorTableObject from "@/pages/editors/ArrayEditorTableObject.vue"
import BooleanEditorDefault from "@/pages/editors/BooleanEditorDefault.vue"
import BooleanEditorCheckbox from "@/pages/editors/BooleanEditorCheckbox.vue"
import BooleanEditorRadios from "@/pages/editors/BooleanEditorRadios.vue"
import BooleanEditorRadiosInline from "@/pages/editors/BooleanEditorRadiosInline.vue"
import BooleanEditorSelect from "@/pages/editors/BooleanEditorSelect.vue"
import NumberEditorDefault from "@/pages/editors/NumberEditorDefault.vue"
import NumberEditorSelect from "@/pages/editors/NumberEditorSelect.vue"
import NumberEditorRadios from "@/pages/editors/NumberEditorRadios.vue"
import NumberEditorRadiosInline from "@/pages/editors/NumberEditorRadiosInline.vue"
import NumberEditorNullable from "@/pages/editors/NumberEditorNullable.vue"
import NumberEditorRaty from "@/pages/editors/NumberEditorRaty.vue"
import NumberEditorImask from "@/pages/editors/NumberEditorImask.vue"
import NumberEditorRange from "@/pages/editors/NumberEditorRange.vue"
import ObjectEditorDefault from "@/pages/editors/ObjectEditorDefault.vue"
import ObjectEditorGrid from "@/pages/editors/ObjectEditorGrid.vue"
import ObjectEditorNavVertical from "@/pages/editors/ObjectEditorNavVertical.vue"
import ObjectEditorNavHorizontal from "@/pages/editors/ObjectEditorNavHorizontal.vue"
import StringEditorDefault from "@/pages/editors/StringEditorDefault.vue"
import StringEditorRadios from "@/pages/editors/StringEditorRadios.vue"
import StringEditorRadiosInline from "@/pages/editors/StringEditorRadiosInline.vue"
import StringEditorSelect from "@/pages/editors/StringEditorSelect.vue"
import StringEditorTextarea from "@/pages/editors/StringEditorTextarea.vue"
import StringEditorAwesomplete from "@/pages/editors/StringEditorAwesomplete.vue"
import StringEditorFlatpickr from "@/pages/editors/StringEditorFlatpickr.vue"
import StringEditorImask from "@/pages/editors/StringEditorImask.vue"
import StringEditorJodit from "@/pages/editors/StringEditorJodit.vue"
import StringEditorQuill from "@/pages/editors/StringEditorQuill.vue"
import NullEditorDefault from "@/pages/editors/NullEditorDefault.vue"
import CustomConstraint from "@/pages/advanced/CustomConstraint.vue"
import Templates from "@/pages/advanced/Templates.vue"
import FAQ from "@/pages/getting-started/FAQ.vue"

export const routes = [
  {
    path: '/',
    name: 'Introduction',
    component: Introduction,
    meta: {
      navbar: true,
      group: 'Getting Started'
    }
  },
  {
    path: '/install',
    name: 'Install',
    component: Install,
    meta: {
      navbar: true,
      group: 'Getting Started'
    }
  },
  {
    path: '/as-editor',
    name: 'As Editor',
    component: AsEditor,
    meta: {
      navbar: true,
      group: 'Getting Started'
    }
  },
  {
    path: '/as-validator',
    name: 'As Validator',
    component: AsValidator,
    meta: {
      navbar: true,
      group: 'Getting Started'
    }
  },
  {
    path: '/methods',
    name: 'Methods',
    component: Methods,
    meta: {
      navbar: true,
      group: 'Getting Started'
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
    meta: {
      navbar: true,
      group: 'Getting Started'
    }
  },
  {
    path: '/playground',
    name: 'Playground',
    component: Playground,
    meta: {
      navbar: true,
      group: 'Getting Started'
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
    meta: {
      navbar: true,
      group: 'Getting Started'
    }
  },
  {
    path: '/themes',
    name: 'Themes',
    component: Themes,
    meta: {
      navbar: true,
      group: 'Features'
    }
  },
  {
    path: '/icons',
    name: 'Icons',
    component: Icons,
    meta: {
      navbar: true,
      group: 'Features'
    }
  },
  {
    path: '/language-and-translations',
    name: 'Language and Translations',
    component: LanguageAndTranslations,
    meta: {
      navbar: true,
      group: 'Features'
    }
  },
  {
    path: '/ref-parser',
    name: 'RefParser',
    component: RefParser,
    meta: {
      navbar: true,
      group: 'Features'
    }
  },
  {
    path: '/markdown-annotations',
    name: 'Markdown Annotations',
    component: MarkdownAnnotations,
    meta: {
      navbar: true,
      group: 'Features'
    }
  },
  {
    path: '/options',
    name: 'Options',
    component: Options,
    meta: {
      navbar: true,
      group: 'Features'
    }
  },
  {
    path: '/schema-options',
    name: 'Schema Options',
    component: SchemaOptions,
    meta: {
      navbar: true,
      group: 'Features'
    }
  },
  {
    path: '/array-editor-default',
    name: 'Array Default',
    component: ArrayEditorDefault,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/array-editor-checkboxes',
    name: 'Array Checkboxes',
    component: ArrayEditorCheckboxes,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/array-editor-checkboxes-inline',
    name: 'Array Checkboxes Inline',
    component: ArrayEditorCheckboxesInline,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/array-editor-choices',
    name: 'Array Choices',
    component: ArrayEditorChoices,
    meta: {
      navbar: true,
      group: 'Editors',
      requiresPlugin: true
    }
  },
  {
    path: '/array-editor-nav-vertical',
    name: 'Array Navigation Vertical',
    component: ArrayEditorNavVertical,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/array-editor-nav-horizontal',
    name: 'Array Navigation Horizontal',
    component: ArrayEditorNavHorizontal,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/array-editor-table',
    name: 'Array Table',
    component: ArrayEditorTable,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/array-editor-table-object',
    name: 'Array Table Object',
    component: ArrayEditorTableObject,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/boolean-editor-default',
    name: 'Boolean Default',
    component: BooleanEditorDefault,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/boolean-editor-checkbox',
    name: 'Boolean Checkbox',
    component: BooleanEditorCheckbox,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/boolean-editor-radios',
    name: 'Boolean Radio Buttons',
    component: BooleanEditorRadios,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/boolean-editor-radios-inline',
    name: 'Boolean Radio Buttons Inline',
    component: BooleanEditorRadiosInline,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/boolean-editor-select',
    name: 'Boolean Select Dropdown',
    component: BooleanEditorSelect,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/number-editor-default',
    name: 'Number Default',
    component: NumberEditorDefault,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/number-editor-select',
    name: 'Number Select',
    component: NumberEditorSelect,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/number-editor-radios',
    name: 'Number Radio Buttons',
    component: NumberEditorRadios,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/number-editor-radios-inline',
    name: 'Number Radio Buttons Inline',
    component: NumberEditorRadiosInline,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/number-editor-nullable',
    name: 'Number Nullable',
    component: NumberEditorNullable,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/number-editor-raty',
    name: 'Number Star Rating',
    component: NumberEditorRaty,
    meta: {
      navbar: true,
      group: 'Editors',
      requiresPlugin: true
    }
  },
  {
    path: '/number-editor-imask',
    name: 'Number IMask',
    component: NumberEditorImask,
    meta: {
      navbar: true,
      group: 'Editors',
      requiresPlugin: true
    }
  },
  {
    path: '/number-editor-range',
    name: 'Number Range',
    component: NumberEditorRange,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/object-editor-default',
    name: 'Object Default',
    component: ObjectEditorDefault,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/object-editor-grid',
    name: 'Object Grid',
    component: ObjectEditorGrid,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/object-editor-nav-vertical',
    name: 'Object Navigation Vertical',
    component: ObjectEditorNavVertical,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/object-editor-nav-horizontal',
    name: 'Object Navigation Horizontal',
    component: ObjectEditorNavHorizontal,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/string-editor-default',
    name: 'String Default',
    component: StringEditorDefault,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/string-editor-radios',
    name: 'String Radio Buttons',
    component: StringEditorRadios,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/string-editor-radios-inline',
    name: 'String Radio Buttons Inline',
    component: StringEditorRadiosInline,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/string-editor-select',
    name: 'String Select',
    component: StringEditorSelect,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/string-editor-textarea',
    name: 'String Textarea',
    component: StringEditorTextarea,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/string-editor-awesomplete',
    name: 'String Awesomplete',
    component: StringEditorAwesomplete,
    meta: {
      navbar: true,
      group: 'Editors',
      requiresPlugin: true
    }
  },
  {
    path: '/string-editor-flatpickr',
    name: 'String Flatpickr',
    component: StringEditorFlatpickr,
    meta: {
      navbar: true,
      group: 'Editors',
      requiresPlugin: true
    }
  },
  {
    path: '/string-editor-imask',
    name: 'String IMask',
    component: StringEditorImask,
    meta: {
      navbar: true,
      group: 'Editors',
      requiresPlugin: true
    }
  },
  {
    path: '/string-editor-jodit',
    name: 'String Jodit',
    component: StringEditorJodit,
    meta: {
      navbar: true,
      group: 'Editors',
      requiresPlugin: true
    }
  },
  {
    path: '/string-editor-quill',
    name: 'String Quill',
    component: StringEditorQuill,
    meta: {
      navbar: true,
      group: 'Editors',
      requiresPlugin: true
    }
  },
  {
    path: '/null-editor-default',
    name: 'Null Default',
    component: NullEditorDefault,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/custom-constraint',
    name: 'Custom constraint',
    component: CustomConstraint,
    meta: {
      navbar: true,
      group: 'Advanced'
    }
  },
  {
    path: '/templates',
    name: 'Templates',
    component: Templates,
    meta: {
      navbar: true,
      group: 'Advanced'
    }
  }
]

export default routes
