import { pages } from '@/content/pages.js'
import { slugify } from '@/lib/slugify.js'

// Strips the most common markdown syntax down to plain text, for fuzzy
// matching content that was never meant to be read as markup (code spans,
// emphasis, links, bullets, ...).
function stripMarkdown (text) {
  if (!text) return ''
  return text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_#>]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function textOf (...parts) {
  return stripMarkdown(parts.filter(Boolean).join(' '))
}

// One search entry per page, PLUS one per heading inside that page (every
// heading with its own id - see SectionProse/SectionExample/SectionCode -
// is a real deep-link target already, via AppHeaderAnchor). This is what
// lets searching "x-buttons" jump straight to that heading on the 50-option
// Schema Options page, instead of just surfacing the page itself.
//
// Sections without their own heading (code samples, live examples, notes)
// are folded into the nearest preceding heading's entry - the same grouping
// SectionsPage.vue already uses to decide what belongs inside the same
// <section>/<article>.
function buildEntriesForPage (page) {
  const entries = []

  const pageEntry = {
    path: page.path,
    anchor: null,
    title: page.heading,
    pageTitle: page.heading,
    group: page.group,
    description: page.description,
    content: textOf(page.intro),
    code: '',
    keywords: page.keywords || []
  }
  entries.push(pageEntry)

  let current = pageEntry

  for (const section of page.sections || []) {
    const props = section.props || {}

    if (props.heading) {
      current = {
        path: page.path,
        anchor: slugify(props.heading),
        title: props.heading,
        pageTitle: page.heading,
        group: page.group,
        description: '',
        content: '',
        code: '',
        keywords: page.keywords || []
      }
      entries.push(current)
    }

    current.content += ' ' + textOf(props.markdown, props.intro, ...(props.activationConditions || []))
    current.code += ' ' + (props.code || '')

    if (props.notesHeading) {
      entries.push({
        path: page.path,
        anchor: slugify(props.notesHeading),
        title: props.notesHeading,
        pageTitle: page.heading,
        group: page.group,
        description: '',
        content: textOf(props.notesMarkdown),
        code: '',
        keywords: page.keywords || []
      })
    }
  }

  entries.forEach((entry) => { entry.content = entry.content.trim() })

  return entries
}

export const searchData = pages.flatMap(buildEntriesForPage)

export default searchData
