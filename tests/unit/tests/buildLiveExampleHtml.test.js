/* global describe it expect */
import { buildLiveExampleHtml } from '../../../src/lib/live-example/buildHtml.js'

describe('buildLiveExampleHtml', function () {
  it('builds the default bootstrap5 + bootstrap-icons scaffold for a plain editor demo', function () {
    const html = buildLiveExampleHtml({
      createOptions: { schema: { type: 'boolean', title: 'Subscribe?' } }
    })

    expect(html).toContain('bootstrap@5.3.0/dist/css/bootstrap.min.css')
    expect(html).toContain('bootstrap-icons@1.10.5/font/bootstrap-icons.css')
    expect(html).toContain('"theme": new Jedison.ThemeBootstrap5()')
    expect(html).toContain('"iconLib": "bootstrap-icons"')
    expect(html).toContain('"title": "Subscribe?"')
  })

  it('adds extra head CSS/JS for demos that load a third-party asset library', function () {
    const html = buildLiveExampleHtml({
      extraHeadCss: ['https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css'],
      extraHeadJs: ['https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js'],
      createOptions: { schema: { type: 'string', 'x-format': 'quill' } }
    })

    expect(html).toContain('quill.snow.css')
    expect(html).toContain('quill.js')
  })

  it('switches the whole foundation (css/js/theme) for a non-default preset', function () {
    const html = buildLiveExampleHtml({
      preset: 'bootstrap3',
      iconLib: 'glyphicons',
      createOptions: { schema: { type: 'object' } }
    })

    expect(html).toContain('bootstrap@3.4.1/dist/css/bootstrap.min.css')
    expect(html).toContain('jquery@3.5.1')
    expect(html).toContain('"theme": new Jedison.ThemeBootstrap3()')
    expect(html).toContain('"iconLib": "glyphicons"')
    // glyphicons ship bundled inside bootstrap3.css - no separate icon-font link
    expect(html).not.toContain('font-awesome')
  })

  it('supports the afterCreate escape hatch for demos with a listener', function () {
    const html = buildLiveExampleHtml({
      createOptions: { schema: { type: 'number' } },
      afterCreate: "jedison.on('change', () => console.log(jedison.getValue()))"
    })

    expect(html).toContain("jedison.on('change'")
  })
})
