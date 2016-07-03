var L = parseInt(readline());
var H = parseInt(readline());
var T = readline().toUpperCase();
var N = T.length;

var alphabet = {
    'A':[],
    'B':[],
    'C':[],
    'D':[],
    'E':[],
    'F':[],
    'G':[],
    'H':[],
    'I':[],
    'J':[],
    'K':[],
    'L':[],
    'M':[],
    'N':[],
    'O':[],
    'P':[],
    'Q':[],
    'R':[],
    'S':[],
    'T':[],
    'U':[],
    'V':[],
    'W':[],
    'X':[],
    'Y':[],
    'Z':[],
    '?':[]
}

for (var i = 0; i < H; i++) {
    var ROW = readline();
    
    index = 0;
    for (var letter in alphabet) {
        alphabet[letter][i] = ROW.substr(index,L);
        index += L;
    }
}

var output = "";

for ( var line = 0 ; line < H ; line++ )
{
    for( var letter = 0 ; letter < N ; letter++)
    {
        var charToPrint = T.charAt(letter);
        if (charToPrint < "A" || charToPrint > "Z") {
            charToPrint = "?";
        }
        output += alphabet[charToPrint][line];
    }
    output += "\n"
}

print(output);
