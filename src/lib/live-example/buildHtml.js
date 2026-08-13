// Fixed CDN asset bundles for the small number of foundations the live
// examples actually use (confirmed via diff across all original demo HTML).
// ICON_LIB_CSS: keyed the same way Icons.vue's x-format demos name them;
// 'bootstrap-icons' is folded into every 'bootstrap5' preset by default below
// since that's the common case - the rest are opt-in additions.
import headPresets from './headPresets.json'

const { HEAD_PRESETS, ICON_LIB_CSS, JEDISON_UMD_SRC, THEME_EXPRESSIONS } = headPresets

const PRESET_THEME = {
  bootstrap5: 'Bootstrap5',
  bootstrap4: 'Bootstrap4',
  bootstrap3: 'Bootstrap3',
  none: 'Theme'
}

const CONTAINER_EXPR = "document.querySelector('#jedison-container')"
const CONTAINER_TOKEN = '__jedison_container_token__'
const THEME_TOKEN = '__jedison_theme_token__'

function cssLink (href) {
  return `    <link rel="stylesheet" href="${href}">`
}

function jsScript (src) {
  return `    <script src="${src}"></script>`
}

function indentContinuationLines (text, spaces) {
  const pad = ' '.repeat(spaces)
  return text.split('\n').map((line, i) => (i === 0 ? line : pad + line)).join('\n')
}

// The actual `Jedison.Create` options a live example passes, minus the
// `container`/`theme` demo plumbing. This is the single source of truth for
// "what does this example configure" - both the runnable HTML below and
// buildDisplayCode() below derive from it, so they can never drift apart.
function buildDisplayOptions (config = {}) {
  const {
    preset = 'bootstrap5',
    iconLib = preset === 'bootstrap5' ? 'bootstrap-icons' : null,
    createOptions = {}
  } = config

  // `schema` prints last regardless of where it sits in the source file -
  // it's usually the largest part of the options object, so the smaller,
  // more specific settings read first.
  const { schema, ...rest } = createOptions

  // `iconLib` always comes right after `theme` in the original files, so put
  // it first here too (see buildLiveExampleHtml).
  return {
    ...(iconLib ? { iconLib } : {}),
    ...rest,
    ...(schema !== undefined ? { schema } : {})
  }
}

// A copy-pasteable `new Jedison.Create({...})` call for the options this
// example passes - the crawlable code block shown next to the live demo
// (SectionExample.vue). Leaves out `container`/`theme` since a reader isn't
// meant to copy those literally. Returns '' when there's nothing to show.
export function buildDisplayCode (config = {}) {
  const options = buildDisplayOptions(config)
  if (!Object.keys(options).length) return ''
  const optionsJson = JSON.stringify(options, null, 2)
  return 'const jedison = new Jedison.Create(' + indentContinuationLines(optionsJson, 2) + ')'
}

// Builds a full standalone HTML document (identical in behavior to the files
// that used to live in src/assets/html/*.html) from a small, JSON-serializable
// config object. The result stays a plain string handed to AppLiveExample.vue
// unchanged - still fully editable in CodeMirror, still runnable standalone.
//
// Only covers pages whose demo script is exactly `new Jedison.Create({...})`
// with JSON-serializable options. Pages with real logic around the Create call
// (applyOverlay, RefParser, custom constraint functions) are NOT built from
// this and keep their own hand-written HTML.
export function buildLiveExampleHtml (config = {}) {
  const {
    preset = 'bootstrap5',
    iconLib = preset === 'bootstrap5' ? 'bootstrap-icons' : null,
    extraHeadCss = [],
    extraHeadJs = [],
    themeExpr = THEME_EXPRESSIONS[PRESET_THEME[preset]],
    // Raw JS appended after the Create() call, e.g. a `jedison.on('change', ...)`
    // listener for a demo. Escape hatch for the rare case that isn't just
    // JSON-serializable options - keep this the exception, not the norm.
    afterCreate = ''
  } = config

  const base = HEAD_PRESETS[preset]
  if (!base) {
    throw new Error('buildLiveExampleHtml: unknown preset "' + preset + '"')
  }

  const iconLibCssHref = iconLib && ICON_LIB_CSS[iconLib]

  const cssLines = [
    ...base.css.map(cssLink),
    ...(iconLibCssHref ? [cssLink(iconLibCssHref)] : []),
    ...extraHeadCss.map(cssLink)
  ]

  const jsLines = [
    ...extraHeadJs.map(jsScript),
    ...base.js.map(jsScript),
    jsScript(JEDISON_UMD_SRC)
  ]

  const options = {
    container: CONTAINER_TOKEN,
    theme: THEME_TOKEN,
    ...buildDisplayOptions(config)
  }

  const optionsJson = JSON.stringify(options, null, 2)
    .replace('"' + CONTAINER_TOKEN + '"', CONTAINER_EXPR)
    .replace('"' + THEME_TOKEN + '"', themeExpr)

  const createCall = 'const jedison = new Jedison.Create(' + indentContinuationLines(optionsJson, 2) + ')'

  return `<!DOCTYPE html>
<html data-bs-theme="dark">
<head>
    <meta charset="utf-8"/>
${cssLines.join('\n')}
${jsLines.join('\n')}
</head>
<body>
<div class="container">
    <div class="mt-5" id="jedison-container"></div>
</div>

<script>
  ${createCall}
${afterCreate ? '\n' + afterCreate + '\n' : ''}</script>
</body>
</html>
`
}
