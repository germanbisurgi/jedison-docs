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
import ArrayEditors from "@/pages/ArrayEditors.vue"
import BooleanEditors from "@/pages/BooleanEditors.vue"
import NumberEditors from "@/pages/NumberEditors.vue"
import ObjectEditors from "@/pages/ObjectEditors.vue"
import StringEditors from "@/pages/StringEditors.vue"
import NullEditors from "@/pages/NullEditors.vue"

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
    path: '/array-editors',
    name: 'Array Editors',
    component: ArrayEditors,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/boolean-editors',
    name: 'Boolean Editors',
    component: BooleanEditors,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/numbers-editors',
    name: 'Numbers Editors',
    component: NumberEditors,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/object-editors',
    name: 'Object Editors',
    component: ObjectEditors,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/string-editors',
    name: 'String Editors',
    component: StringEditors,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  },
  {
    path: '/null-editors',
    name: 'Null Editors',
    component: NullEditors,
    meta: {
      navbar: true,
      group: 'Editors'
    }
  }
]

export default routes
