const googleDatabase = [
    'cats.com',
    'flowers.com',
    'animals.com',
    'travels.com',
    'mountains.com',
]

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

// console.log(googleSearch('an', googleDatabase));

module.exports = googleSearch;