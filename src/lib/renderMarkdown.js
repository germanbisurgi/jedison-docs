import { marked } from 'marked'

export function renderMarkdown (markdown) {
  return markdown ? marked.parse(markdown) : ''
}

// For short inline snippets (e.g. a single list item) that shouldn't be
// wrapped in a block-level <p>.
export function renderMarkdownInline (markdown) {
  return markdown ? marked.parseInline(markdown) : ''
}
