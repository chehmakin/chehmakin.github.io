add_output.onclick = function() {
    var input = document.getElementById('input').value;
    var output = "";
    for (var i = 0; i < input.length; i++){
        var outputSign = input[i];

        if (outputSign == "a" || outputSign == "A"){
            output += 'ф';
        } else if (outputSign == "b" || outputSign == "B"){
            output += "и";
        } else if (outputSign == "c" || outputSign == "C"){
            output += "с";
        } else if (outputSign == "d" || outputSign == "D"){
            output += "в";
        } else if (outputSign == "e" || outputSign == "E"){
            output += "у";
        } else if (outputSign == "f" || outputSign == "F"){
            output += "а";
        } else if (outputSign == "g" || outputSign == "G"){
            output += "п";
        } else if (outputSign == "h" || outputSign == "H"){
            output += "р";
        } else if (outputSign == "i" || outputSign == "I"){
            output += "ш";
        } else if (outputSign == "j" || outputSign == "J"){
            output += "о";
        } else if (outputSign == "k" || outputSign == "K"){
            output += "л";
        } else if (outputSign == "l" || outputSign == "L"){
            output += "д";
        } else if (outputSign == "m" || outputSign == "M"){
            output += "ь";
        } else if (outputSign == "n" || outputSign == "N"){
            output += "т";
        } else if (outputSign == "o" || outputSign == "O"){
            output += "щ";
        } else if (outputSign == "p" || outputSign == "P"){
            output += "з";
        } else if (outputSign == "q" || outputSign == "Q"){
            output += "й";
        } else if (outputSign == "r" || outputSign == "R"){
            output += "к";
        } else if (outputSign == "s" || outputSign == "S"){
            output += "ы";
        } else if (outputSign == "t" || outputSign == "T"){
            output += "е";
        } else if (outputSign == "u" || outputSign == "U"){
            output += "г";
        } else if (outputSign == "v" || outputSign == "V"){
            output += "м";
        } else if (outputSign == "w" || outputSign == "W"){
            output += "ц";
        } else if (outputSign == "x" || outputSign == "X"){
            output += "ч";
        } else if (outputSign == "y" || outputSign == "Y"){
            output += "н";
        } else if (outputSign == "z" || outputSign == "Z"){
            output += "я";
        } else if (outputSign == "`"){
            output += "ё";
        } else if (outputSign == "["){
            output += "х";
        } else if (outputSign == "]"){
            output += "ъ";
        } else if (outputSign == ";"){
            output += "ж";
        } else if (outputSign == "'"){
            output += "э";
        } else if (outputSign == ","){
            output += "б";
        } else if (outputSign == "."){
            output += "ю";
        } else if (outputSign == "/"){
            output += ".";
        } else if (outputSign == "?"){
            output += ",";
        } else if (outputSign == "&"){
            output += "?";
        } else {
        output += outputSign;
        };

    document.getElementById('output').innerHTML = output;
};
};
