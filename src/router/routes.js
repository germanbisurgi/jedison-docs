import Introduction from "@/pages/Introduction.vue"
import Install from "@/pages/Install.vue"
import AsEditor from "@/pages/AsEditor.vue"
import AsValidator from "@/pages/AsValidator.vue"
import Playground from "@/pages/Playground.vue"
import Methods from "@/pages/Methods.vue"
import Events from "@/pages/Events.vue"
import Themes from "@/pages/Themes.vue"
import Icons from "@/pages/Icons.vue"
import LanguageAndTranslations from "@/pages/LanguageAndTranslations.vue"
import RefParser from "@/pages/RefParser.vue"
import MarkdownAnnotations from "@/pages/MarkdownAnnotations.vue"
import Options from "@/pages/Options.vue"
import SchemaOptions from "@/pages/SchemaOptions.vue"
import ArrayEditorDefault from "@/pages/ArrayEditorDefault.vue"
import ArrayEditorCheckboxes from "@/pages/ArrayEditorCheckboxes.vue"
import ArrayEditorCheckboxesInline from "@/pages/ArrayEditorCheckboxesInline.vue"
import ArrayEditorChoices from "@/pages/ArrayEditorChoices.vue"
import ArrayEditorNavVertical from "@/pages/ArrayEditorNavVertical.vue"
import ArrayEditorNavHorizontal from "@/pages/ArrayEditorNavHorizontal.vue"
import ArrayEditorTable from "@/pages/ArrayEditorTable.vue"
import ArrayEditorTableObject from "@/pages/ArrayEditorTableObject.vue"
import BooleanEditorDefault from "@/pages/BooleanEditorDefault.vue"
import BooleanEditorCheckbox from "@/pages/BooleanEditorCheckbox.vue"
import BooleanEditorRadios from "@/pages/BooleanEditorRadios.vue"
import BooleanEditorRadiosInline from "@/pages/BooleanEditorRadiosInline.vue"
import BooleanEditorSelect from "@/pages/BooleanEditorSelect.vue"
import NumberEditorDefault from "@/pages/NumberEditorDefault.vue"
import NumberEditorSelect from "@/pages/NumberEditorSelect.vue"
import NumberEditorRadios from "@/pages/NumberEditorRadios.vue"
import NumberEditorRadiosInline from "@/pages/NumberEditorRadiosInline.vue"
import NumberEditorNullable from "@/pages/NumberEditorNullable.vue"
import NumberEditorRaty from "@/pages/NumberEditorRaty.vue"
import NumberEditorImask from "@/pages/NumberEditorImask.vue"
import NumberEditorRange from "@/pages/NumberEditorRange.vue"
import ObjectEditorDefault from "@/pages/ObjectEditorDefault.vue"
import ObjectEditorGrid from "@/pages/ObjectEditorGrid.vue"
import ObjectEditorNavVertical from "@/pages/ObjectEditorNavVertical.vue"
import ObjectEditorNavHorizontal from "@/pages/ObjectEditorNavHorizontal.vue"
import StringEditorDefault from "@/pages/StringEditorDefault.vue"
import StringEditorRadios from "@/pages/StringEditorRadios.vue"
import StringEditorRadiosInline from "@/pages/StringEditorRadiosInline.vue"
import StringEditorSelect from "@/pages/StringEditorSelect.vue"
import StringEditorTextarea from "@/pages/StringEditorTextarea.vue"
import StringEditorAwesomplete from "@/pages/StringEditorAwesomplete.vue"
import StringEditorFlatpickr from "@/pages/StringEditorFlatpickr.vue"
import StringEditorImask from "@/pages/StringEditorImask.vue"
import StringEditorJodit from "@/pages/StringEditorJodit.vue"
import StringEditorQuill from "@/pages/StringEditorQuill.vue"
import NullEditorDefault from "@/pages/NullEditorDefault.vue"
import CustomConstraint from "@/pages/CustomConstraint.vue"
import Templates from "@/pages/Templates.vue"

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
