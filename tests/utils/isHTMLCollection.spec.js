/**
 * @jest-environment jsdom
 */
import isHTMLCollection from '@/utils/types/isHTMLCollection'
import isHTMLElement from '@/utils/types/isHTMLElement'
import isFragment from '@/utils/types/isFragment'

describe('isHTMLCollection() 方法：', () => {
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

  it(`isHTMLCollection(document.getElementById('list')), 返回：false`, () => {
    const $list = document.getElementById('list')

    expect(isHTMLElement($list)).toBe(true)
    expect(isHTMLCollection($list)).toBe(false)
  })

  it(`isHTMLCollection(document.createElement('div')), 返回：false`, () => {
    const $div = document.createElement('div')

    expect(isHTMLElement($div)).toBe(true)
    expect(isHTMLCollection($div)).toBe(false)
  })

  it(`isHTMLCollection(document.createTextNode('text')), 返回：false`, () => {
    const $text = document.createTextNode('text')

    expect(isHTMLElement($text)).toBe(false)
    expect(isHTMLCollection($text)).toBe(false)
  })

  it(`isHTMLCollection(document.createDocumentFragment()), 返回：false`, () => {
    const $fragment = document.createDocumentFragment()

    expect(isHTMLElement($fragment)).toBe(false)
    expect(isFragment($fragment)).toBe(true)
    expect(isHTMLCollection($fragment)).toBe(false)
  })

  it(`isHTMLCollection(document.querySelectorAll('.item')), 返回：true`, () => {
    const $items = document.querySelectorAll('.item')

    expect(isHTMLElement($items)).toBe(false)
    expect(isHTMLCollection($items)).toBe(true)
  })
})
