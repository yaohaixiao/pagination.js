/**
 * @jest-environment jsdom
 */
import isText from '@/utils/types/isText'
import isHTMLCollection from '@/utils/types/isHTMLCollection'
import isHTMLElement from '@/utils/types/isHTMLElement'
import isFragment from '@/utils/types/isFragment'

describe('isText() 方法：', () => {
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

  it(`isText(document.getElementById('list')), 返回：false`, () => {
    const $list = document.getElementById('list')

    expect(isHTMLElement($list)).toBe(true)
    expect(isText($list)).toBe(false)
  })

  it(`isText(document.createElement('div')), 返回：false`, () => {
    const $div = document.createElement('div')

    expect(isHTMLElement($div)).toBe(true)
    expect(isText($div)).toBe(false)
  })

  it(`isText(document.createDocumentFragment()), 返回：false`, () => {
    const $fragment = document.createDocumentFragment()

    expect(isFragment($fragment)).toBe(true)
    expect(isText($fragment)).toBe(false)
  })

  it(`isText(document.querySelectorAll('.item')), 返回：false`, () => {
    const $items = document.querySelectorAll('.item')

    expect(isHTMLCollection($items)).toBe(true)
    expect(isText($items)).toBe(false)
  })

  it(`isText(document.createTextNode('text')), 返回：true`, () => {
    const $text = document.createTextNode('text')

    expect(isHTMLElement($text)).toBe(false)
    expect(isText($text)).toBe(true)
  })
})
