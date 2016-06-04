var fs = require('fs');
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
    var formattedData = {};
    var lines = data.toString().split("\n"),
       lineSplit;

    lines.forEach(function(line){    
        lineSplit = line.split("  "); 
        var currentWord = lineSplit[0];
        var syllableCount = 0;

        if(lineSplit[1] !== undefined) {
            if (lineSplit[1].match(/\d/g) === null) {
                syllableCount = 0;
            } else {
                syllableCount = lineSplit[1].match(/\d/g).length;
            }
        }

        // Have each syllableCount that exists
        // to have a collection of words
        if (!(formattedData[syllableCount])) {
            formattedData[syllableCount] = [];
        } else {
            formattedData[syllableCount].push(currentWord);
        }
    });

    return formattedData;   
}

var cmudictFile = formatData(cmudictFile);

function createHaiku(structure){
    var haiku = '';
    // structure specified in haiku_generator
    var haikuFormat = structure;
    var dictionary = cmudictFile;

    haikuFormat.forEach(function(num) {
        line = dictionary[num][Math.floor(Math.random() * ( dictionary[num].length + 1))]
        haiku += line + '\n';
    });

    return haiku;
}

// Exporting the module
module.exports.createHaiku = createHaiku