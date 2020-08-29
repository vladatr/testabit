const googleSearch = require('./script');

const dbMock = [
    'asd.com',
    'qwe.com',
    'asdqwe.com'
]

describe('googlesearch', () => {
    it('a test1', () => {
        expect('hello').toBe('hello');
        // console.log(googleSearch('a', dbMock));
    })

    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })

    it('does not return more then 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    })
})
