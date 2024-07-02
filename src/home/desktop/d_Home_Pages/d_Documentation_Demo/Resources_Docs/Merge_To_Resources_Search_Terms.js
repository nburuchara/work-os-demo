const cheerio = require('cheerio');
const fs = require('fs');

// Load your HTML content
const htmlContent = fs.readFileSync('./Resources_Pages/Integrations.js', 'utf-8');
const $ = cheerio.load(htmlContent);

const searchObjects = [];

// Collect and process all h1 tags first
$('CSSTransition').each((index, element) => {
    const inProp = $(element).attr('in');
    const subCat1 = inProp || "Default SubCat1";
    const page = "Default Page";

    $(element).find('h1').each((i, h1Element) => {
        const h1 = $(h1Element).text().trim();
        console.log("h1: ", h1);
        if (h1) {
            searchObjects.push({
                id: `h1-${searchObjects.length}`,
                name: h1,
                category: "Resources",
                subCat1,
                page: inProp,
                lastCat: h1
            });
        } else {
            console.log("no h1 found");
        }
    });
});

// Collect and process all h3 tags next
$('CSSTransition').each((index, element) => {
    const inProp = $(element).attr('in');
    const subCat1 = inProp || "Default SubCat1";
    const page = "Default Page";

    $(element).find('h3').each((i, h3Element) => {
        const h3 = $(h3Element).text().trim();
        console.log("h3: ", h3);
        if (h3) {
            searchObjects.push({
                id: `h3-${searchObjects.length}`,
                name: h3,
                category: "Resources",
                subCat1,
                page: inProp,
                lastCat: h3
            });
        } else {
            console.log("no h3 found");
        }
    });
});

// Collect and process all p tags last
$('CSSTransition').each((index, element) => {
    const inProp = $(element).attr('in');
    const subCat1 = inProp || "Default SubCat1";
    const page = "Default Page";

    $(element).find('p').each((i, pElement) => {
        const p = $(pElement).text().trim();
        console.log("p: ", p);
        if (p) {
            searchObjects.push({
                id: `p-${searchObjects.length}`,
                name: p,
                category: "Resources",
                subCat1,
                page: inProp,
                lastCat: $(element).find('h1').first().text().trim() // Link to the first h1 in the same CSSTransition
            });
        } else {
            console.log('no p found');
        }
    });
});

// Save the search objects to a JSON file
fs.writeFileSync('./searchObjects.js', JSON.stringify(searchObjects, null, 2));

console.log('Search objects created successfully!');


