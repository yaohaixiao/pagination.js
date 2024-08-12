/**
 * @jest-environment jsdom
 */
import isHTMLElement from '@/utils/types/isHTMLElement'

describe('isHTMLElement() 方法：', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-home" id="item-home">\n' +
    '    <span>Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-support" id="item-support">\n' +
    '    <span id="text">Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  it(`isHTMLElement(document.getElementById('list')), 返回：true`, () => {
    const $list = document.getElementById('list')

    expect(isHTMLElement($list)).toBe(true)
  })

  it(`isHTMLElement(document.createElement('div')), 返回：true`, () => {
    const $div = document.createElement('div')

    expect(isHTMLElement($div)).toBe(true)
  })

  it(`isHTMLElement(document.createTextNode('text')), 返回：false`, () => {
    const $text = document.createTextNode('text')

    expect(isHTMLElement($text)).toBe(false)
  })

  it(`isHTMLElement(document.createDocumentFragment()), 返回：false`, () => {
    const $fragment = document.createDocumentFragment()

    expect(isHTMLElement($fragment)).toBe(false)
  })

  it(`isHTMLElement(document.querySelectorAll('.item')), 返回：false`, () => {
    const $items = document.querySelectorAll('.item')

    expect(isHTMLElement($items)).toBe(false)
  })
})
