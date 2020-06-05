add_output.onclick = function() {
    var input = document.getElementById('input').value;
    var output = "";
    for (var i = 0; i < input.length; i++){
        var outputSign = input[i];

        if (outputSign == "а" || outputSign == "А"){
            output += 'f';
        } else if (outputSign == "б" || outputSign == "Б"){
            output += ",";
        } else if (outputSign == "в" || outputSign == "В"){
            output += "d";
        } else if (outputSign == "г" || outputSign == "Г"){
            output += "u";
        } else if (outputSign == "д" || outputSign == "Д"){
            output += "l";
        } else if (outputSign == "е" || outputSign == "Е"){
            output += "t";
        } else if (outputSign == "ё" || outputSign == "Ё"){
            output += "`";
        } else if (outputSign == "ж" || outputSign == "Ж"){
            output += ";";
        } else if (outputSign == "з" || outputSign == "З"){
            output += "p";
        } else if (outputSign == "и" || outputSign == "И"){
            output += "b";
        } else if (outputSign == "й" || outputSign == "Й"){
            output += "q";
        } else if (outputSign == "к" || outputSign == "К"){
            output += "r";
        } else if (outputSign == "л" || outputSign == "Л"){
            output += "k";
        } else if (outputSign == "м" || outputSign == "М"){
            output += "v";
        } else if (outputSign == "н" || outputSign == "Н"){
            output += "n";
        } else if (outputSign == "о" || outputSign == "О"){
            output += "o";
        } else if (outputSign == "п" || outputSign == "П"){
            output += "g";
        } else if (outputSign == "р" || outputSign == "Р"){
            output += "h";
        } else if (outputSign == "с" || outputSign == "С"){
            output += "c";
        } else if (outputSign == "т" || outputSign == "Т"){
            output += "n";
        } else if (outputSign == "у" || outputSign == "У"){
            output += "e";
        } else if (outputSign == "ф" || outputSign == "Ф"){
            output += "a";
        } else if (outputSign == "х" || outputSign == "Х"){
            output += "[";
        } else if (outputSign == "ц" || outputSign == "Ц"){
            output += "w";
        } else if (outputSign == "ч" || outputSign == "Ч"){
            output += "x";
        } else if (outputSign == "ш" || outputSign == "Ш"){
            output += "i";
        } else if (outputSign == "щ" || outputSign == "Ш"){
            output += "o";
        } else if (outputSign == "ъ"){
            output += "]";
        } else if (outputSign == "ы"){
            output += "s";
        } else if (outputSign == "ь"){
            output += "m";
        } else if (outputSign == "э" || outputSign == "Э"){
            output += " ";
        } else if (outputSign == "ю" || outputSign == "Ю"){
            output += ".";
        } else if (outputSign == "я" || outputSign == "Я"){
            output += "z";
        }  else {
        output += outputSign;
        };

    document.getElementById('output').innerHTML = output;
};
};
