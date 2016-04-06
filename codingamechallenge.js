var firstInitInput = parseInt(readline());
printErr(firstInitInput);
var secondInitInput = parseInt(readline());
printErr(secondInitInput);
var thirdInitInput = parseInt(readline());
printErr(thirdInitInput);

while (true) {
    var firstInput = readline();
    printErr(firstInput);
    var secondInput = readline();
    printErr(secondInput);
    var thirdInput = readline();
    printErr(thirdInput);
    var fourthInput = readline();
    printErr(fourthInput);
    for (var i = 0; i < thirdInitInput; i++) {
        var inputs = readline().split(' ');
        printErr(inputs);
        var fifthInput = parseInt(inputs[0]);
        var sixthInput = parseInt(inputs[1]);
    }

    print('B');
}