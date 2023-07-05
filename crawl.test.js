const { normalizeURL } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('normalizeURL strip protocol', () => {
    const input = 'https://github.com/Rbihag'
    const actual = normalizeURL(input)
    const expected = 'github.com/Rbihag'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash', () => {
    const input = 'https://github.com/Rbihag/'
    const actual = normalizeURL(input)
    const expected = 'github.com/Rbihag'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip capitals', () => {
    const input = 'https://GIThub.com/Rbihag/'
    const actual = normalizeURL(input)
    const expected = 'github.com/Rbihag'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip to http', () => {
    const input = 'http://GIThub.com/Rbihag/'
    const actual = normalizeURL(input)
    const expected = 'github.com/Rbihag'
    expect(actual).toEqual(expected)
})
