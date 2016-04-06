var L = parseInt(readline());
var H = parseInt(readline());
var T = readline();
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

    letter = 0;
    for (var letter in alphabet) {
        alphabet[letter][i]=ROW.substr(letter,L);
        letter += L;
    };
}

printErr(alphabet);
print('E');