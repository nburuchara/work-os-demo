const cheerio = require('cheerio');
const fs = require('fs');

// Load your HTML content
const htmlContent = fs.readFileSync('./Integrations.js', 'utf-8');
const $ = cheerio.load(htmlContent);

const searchObjects = [];

$('CSSTransition').each((index, element) => {
    const inProp = $(element).attr('in');
    const subCat1 = inProp || "Default SubCat1";
    const page = "Default Page";

    $(element).find('.demo-docs-section').each((i, section) => {
        const h1 = $(section).find('h1').first().text().trim();
        const p = $(section).find('p').first().text().trim();

        if (h1) {
            searchObjects.push({
                id: `h1-${searchObjects.length}`,
                name: h1,
                category: "Resources",
                subCat1,
                page,
                lastCat: h1
            });
        }

        if (p) {
            searchObjects.push({
                id: `p-${searchObjects.length}`,
                name: p,
                category: "Resources",
                subCat1,
                page,
                lastCat: h1
            });
        }
    });
});

// Save the search objects to a JSON file
const mergeTerms =  fs.writeFileSync('./searchObjects.js', JSON.stringify(searchObjects, null, 2));

module.exports = mergeTerms;

console.log('Search objects created successfully!');

