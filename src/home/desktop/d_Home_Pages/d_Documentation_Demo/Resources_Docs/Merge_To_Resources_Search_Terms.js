const cheerio = require('cheerio');
const fs = require('fs');

// Array of file paths
const filePaths = [
    './Resources_Pages/Integrations.js',
    './Resources_Pages/d_API_Reference.js',
    // './Resources_Pages/OtherFile2.js'
];

const searchObjects = [];

// Function to process a single file
function processFile(filePath) {
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(htmlContent);

    // First pass: Collect and process all h1 tags
    $('CSSTransition').each((index, element) => {

        const subCat1 = "Integrations";

        let firstH1 = null;  // Variable to store the first h1 tag

        $(element).find('h1').each((i, h1Element) => {
            const h1 = $(h1Element).text().trim();
            if (i === 0) {
                firstH1 = h1;  // Store the first h1 tag as subCat2
            }
            console.log("h1: ", h1);
            if (h1) {
                searchObjects.push({
                    id: `h1-${searchObjects.length}`,
                    name: h1,
                    category: "Resources",
                    subCat1,
                    subCat2: firstH1,
                    page: firstH1,
                    lastCat: h1
                });
            } else {
                console.log("no h1 found");
            }
        });
    });

    // Second pass: Collect and process all h3 tags
    $('CSSTransition').each((index, element) => {

        const subCat1 = "Integrations";

        let previousH1 = null;  // Variable to track the previous h1 tag
        let firstH1 = $(element).find('h1').first().text().trim();  // Store the first h1 tag as subCat2

        $(element).find('h3').each((i, h3Element) => {
            const h3 = $(h3Element).text().trim();
            console.log("h3: ", h3);
            if (h3) {
                searchObjects.push({
                    id: `h3-${searchObjects.length}`,
                    name: h3,
                    category: "Resources",
                    subCat1,
                    subCat2: firstH1,
                    subCat3: previousH1,
                    page: firstH1,
                    lastCat: h3
                });
            } else {
                console.log("no h3 found");
            }
            previousH1 = $(h3Element).prevAll('h1').first().text().trim();  // Update previous h1
        });
    });

    // Third pass: Collect and process all p tags
    $('CSSTransition').each((index, element) => {

        const subCat1 = "Integrations";

        let previousH1 = null;  // Variable to track the previous h1 tag
        let previousH3 = null;  // Variable to track the previous h1 tag
        let firstH1 = $(element).find('h1').first().text().trim();  // Store the first h1 tag as subCat2

        $(element).find('p').each((i, pElement) => {
            const p = $(pElement).text().trim();
            console.log("p: ", p);
            if (p) {
                searchObjects.push({
                    id: `p-${searchObjects.length}`,
                    name: p,
                    category: "Resources",
                    subCat1,
                    subCat2: firstH1,
                    subCat3: previousH1,
                    subCat4: previousH3,
                    page: firstH1,
                    lastCat: $(element).find('h1').first().text().trim() // Link to the first h1 in the same CSSTransition
                });
            } else {
                console.log('no p found');
            }
            previousH1 = $(pElement).prevAll('h1').first().text().trim();  // Update previous h1
            previousH3 = $(pElement).prevAll('h3').first().text().trim();  // Update previous h1
        });
    });
}

// Process each file
filePaths.forEach(filePath => {
    processFile(filePath);
});

// Save the search objects to a JSON file
fs.writeFileSync('./searchObjects.js', JSON.stringify(searchObjects, null, 2));

console.log('Search objects created successfully!');


