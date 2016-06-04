var fs = require('fs');
var cmudictFile = readCmudictFile('./testdict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
    var formattedData = {};
    var lines = data.toString().split("\n"),
       lineSplit;

    lines.forEach(function(line){    
        lineSplit = line.split("  "); 
        var splitIt = lineSplit[1].match(/\d/g);
        var currentWord = lineSplit[0];

        formattedData[currentWord] = {
            // phoneme: splitIt,
            syllableCount: (function count() {
                if (lineSplit[1].match(/\d/g) === null) {
                    return 0;
                } else {
                    return lineSplit[1].match(/\d/g).length;
                }
            })(0)
        }
        // console.log("The word " + lineSplit[0] + " has this phoneme layout: " + splitIt); 
    });

    // console.log(formattedData);
    return formattedData;   
}

// cmudictFile = formatData(cmudictFile);

function syllablesArrays(num) {
    var result = [];
    for (var key in parseddata) {
        var currentword = key;
        var currentindex = parseddata[key].syllableCount;
        if (result[currentindex] === undefined) {
            result[currentindex] = [];
            result[currentindex].push(currentword);
        } else {
            result[currentindex].push(currentword);
        }
    }
    return result;
}
var syllablesArr = syllablesArrays(cmudictFile);

function createHaiku(structure){
    var haiku = [];
    // structure specified in haiku_generator
    var haikuFormat = structure;
    var dictionary = formatData(cmudictFile);

    console.log(syllablesArr);
    // haikuFormat.forEach(function(num) {

    // })

}

// Exporting the module
module.exports.createHaiku = createHaiku