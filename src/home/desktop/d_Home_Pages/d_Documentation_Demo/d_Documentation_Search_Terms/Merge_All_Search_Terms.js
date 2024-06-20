const fs = require('fs');
const path = require('path');

// Paths to your term files
const files = [
   path.join(__dirname, './User_Management_Search_Terms.js'),
   path.join(__dirname, './Standalone_APIs_Search_Terms.js'),
   path.join(__dirname, './Events_Webhooks_Search_Terms.js'),
//   path.join(__dirname, 'terms4.js')
];

// Path to the output file
const outputFile = path.join(__dirname, './All_Docs_Search_Terms.js');

// Function to read JS files and extract the array
const readJsFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }    
            try {

                data = data.replace(/"([^"]*)"\s*\+\s*"([^"]*)"/g, (match, p1, p2) => `"${p1}${p2}"`);
          
                let objectLines = data.match(/^\s*\{[^}]+\}\s*,?\s*$/gm);
                
                if (!objectLines) {
                    throw new Error('No object lines found in the file');
                }

                console.log('Extracted Object Lines:', objectLines);

                // Parse each line as a JSON object with detailed logging
                const jsonData = objectLines.map((line, index) => {
                    console.log(`Parsing line ${index + 1}:`, line);
                    try {
                      // Remove trailing comma
                      const cleanedLine = line.replace(/,\s*$/, '');
                      return JSON.parse(cleanedLine.trim());
                    } catch (parseError) {
                      console.error(`Error parsing line ${index + 1}:`, line);
                      throw parseError;
                    }
                  });
                resolve(jsonData);
            } catch (error) {
                console.error(`Error processing file ${filePath}:`, error);
                reject(error);
            }
        });
    });
};

// Function to write JS to a file
const writeJsFile = (filePath, data) => {
    return new Promise((resolve, reject) => {
        const jsContent = `const results = ${JSON.stringify(data, null, 2)};\nexport default results;\n`;
        fs.writeFile(filePath, jsContent, 'utf8', (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};

// Function to merge terms
const mergeTerms = async () => {
    try {
        let allTerms = [];

        // Read all term files
        for (const file of files) {
            const terms = await readJsFile(file);
            allTerms = allTerms.concat(terms);
        }

        // Write combined terms to the output file
        await writeJsFile(outputFile, allTerms);

        console.log('All terms have been merged into Merge_All_Search_Terms.js');
    } catch (error) {
        console.error('Error merging terms:', error);
    } finally {
        // ess alive for 5 seconds to view any error messages
        setTimeout(() => {}, 0); 
    }
}

// Run the merge function
// mergeTerms();
module.exports = mergeTerms;