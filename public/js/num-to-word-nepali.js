function converter(number) {
  var number = number.toString();
  if (number[0] != "0") {
    if (number.length == 1) {
      // return ones(number);
      return ones(number);
    } else if (number.length == 2) {
      // return tens(number);
      return tens(number);
    } else if (number.length == 3) {
      // return hundred(number);
      return hundred(number);
    } else if (number.length == 4) {
      // return thousand(number);
      return thousand(number);
    } else if (number.length == 5) {
      // return tenThousand(number);
      return tenThousand(number);
    } else if (number.length == 6) {
      // return lakh(number);
      return lakh(number);
    } else if (number.length == 7) {
      // return tenLakh(number);
      return tenLakh(number);
    } else if (number.length == 8) {
      // return crore(number);
      return crore(number);
    }
  }
}

function ones(number) {
  var onesArray = [
    "",
    "एक",
    "दुई",
    "तीन",
    "चार",
    "पाँच",
    "छ",
    "सात",
    "आठ",
    "नौ",
  ];
  return onesArray[number];
}

function tens(number) {
  var tensArray = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "दस",
    "एघार",
    "बारह",
    "तेरह",
    "चौध",
    "पन्ध्र",
    "सोह्र",
    "सत्र",
    "अठार",
    "उन्नाइस",
    "विस",
    "एक्काइस",
    "बाईस",
    "तेईस",
    "चौबीस",
    "पच्चीस",
    "छब्बीस",
    "सत्ताईस",
    "अट्ठाईस",
    "उनन्तिस",
    "तिस",
    "एकत्तिस",
    "बत्तिस",
    "तेत्तिस",
    "चौँतिस",
    "पैँतिस",
    "छत्तिस",
    "सैँतीस",
    "अठतीस",
    "उनन्चालीस",
    "चालीस",
    "एकचालीस",
    "बयालीस",
    "त्रियालीस",
    "चवालीस",
    "पैँतालीस",
    "छयालीस",
    "सच्चालीस",
    "अठचालीस",
    "उनन्चास",
    "पचास",
    "एकाउन्न",
    "बाउन्न",
    "त्रिपन्न",
    "चउन्न",
    "पचपन्न",
    "छपन्न",
    "सन्ताउन्न",
    "अन्ठाउन्न",
    "उनन्साठी",
    "साठी",
    "एकसट्ठी",
    "बयसट्ठी",
    "त्रिसट्ठी",
    "चौंसट्ठी",
    "पैंसट्ठी",
    "छयसट्ठी",
    "सतसट्ठी",
    "अठसट्ठी",
    "उनन्सत्तरी",
    "सत्तरी",
    "एकहत्तर",
    "बहत्तर",
    "त्रिहत्तर",
    "चौहत्तर",
    "पचहत्तर",
    "छयहत्तर",
    "सतहत्तर",
    "अठहत्तर",
    "उनासी",
    "असी",
    "एकासी",
    "बयासी",
    "त्रियासी",
    "चौरासी",
    "पचासी",
    "छयासी",
    "सतासी",
    "अठासी",
    "उनान्नब्बे",
    "नब्बे",
    "एकान्नब्बे",
    "बयानब्बे",
    "त्रियान्नब्बे",
    "चौरान्नब्बे",
    "पन्चानब्बे",
    "छयान्नब्बे",
    "सन्तान्नब्बे",
    "अन्ठान्नब्बे",
    "उनान्सय",
  ];
  return tensArray[number];
}

function hundred(number) {
  if (number[0] == "0") {
    number.splice(0, 1);
    var final = number[0] + number[1];

    if (number[0] == "0") {
      number.splice(0, 1);

      if (number[1] != undefined) {
      } else {
        return ones(number[0]);
      }
    }

    return tens(final);
  }

  var hundredPart = number[0];
  var tensPart = number[1];
  var onesPart = number[2];

  if (tensPart == "0") {
    if (hundredPart != "0") {
      var firstPart = ones(hundredPart) + " सय";
      var secondPart = ones(onesPart);
    } else {
      var firstPart = "";
      var secondPart = "";
    }

    return firstPart + " " + secondPart;
  } else {
    var combine = tensPart + onesPart;
    var firstPart = ones(hundredPart) + " सय";
    var secondPart = tens(combine);

    return firstPart + " " + secondPart;
  }
}

function thousand(number) {
  var thousandPart = number[0];
  var numberForHundred = splitAndSlice(number, 1);
  var firstPart = ones(thousandPart);
  var secondPart = hundred(numberForHundred);

  return firstPart + " हजार" + " " + secondPart;
}

function tenThousand(number) {
  var tenThousandPart = number[0];
  var thousandPart = number[1];
  var combine = tenThousandPart + thousandPart;
  var numberForTenThousand = tens(combine) + " हजार";
  var numberForHundred = splitAndSlice(number, 2);
  var firstPart = numberForTenThousand;
  var secondPart = hundred(numberForHundred);

  return firstPart + " " + secondPart;
}

function lakh(number) {
  var lakhPart = number[0];
  var firstPart = ones(lakhPart);
  var temp = parseInt(number);
  var temp1 = temp.toString();

  if (parseInt(number).toString().length == 4) {
    var secondPart = thousand(temp1);
    return firstPart + " " + secondPart;
  }
  if (parseInt(number).toString().length == 3) {
    var secondPart = hundred(temp1);
    return firstPart + " " + secondPart;
  }

  var numberForTenThousand = splitAndSlice(number, 1);
  var combine =
    numberForTenThousand[0] +
    numberForTenThousand[1] +
    numberForTenThousand[2] +
    numberForTenThousand[3] +
    numberForTenThousand[4];

  if (number[1] == "0") {
    if (number[2] != "0") {
      var combine = number[2] + number[3] + number[4] + number[5];
      var secondPart = thousand(combine);
    } else {
      if (number[3] != "0") {
        var combine = number[3] + number[4] + number[5];
        var secondPart = hundred(combine);
      } else {
        var combine = parseInt(number[4] + number[5]);
        var secondPart = tens(combine);
      }
    }
  } else {
    var secondPart = tenThousand(combine);
  }

  return firstPart + " लाख" + " " + secondPart;
}

function tenLakh(number) {
  if (number[2] != "0") {
    var tenLakhPart = number[0];
    var lakhPart = number[1];
    var combine = tenLakhPart + lakhPart;
    var firstPart = tens(combine) + " लाख";
    var combine = number[2] + number[3] + number[4] + number[5] + number[6];
    var secondPart = tenThousand(combine);

    return firstPart + " " + secondPart;
  } else {
    var tenLakhPart = number[0];
    var lakhPart = number[1];
    var combine = tenLakhPart + lakhPart;
    var firstPart = tens(combine) + " लाख";

    if (number[3] != 0) {
      var combine = number[3] + number[4] + number[5] + number[6];
      var secondPart = thousand(combine);
    } else {
      if (number[4] != 0) {
        var combine = number[4] + number[5] + number[6];
        var secondPart = hundred(combine);
      } else {
        if (number[5] != 0) {
          var combine = number[5] + number[6];
          var secondPart = tens(combine);
        } else {
          var secondPart = ones(number[6]);
        }
      }
    }

    return firstPart + " " + secondPart;
  }
}

function crore(number) {
  var crorePart = number[0];
  var firstPart = ones(crorePart) + " करोड़";
  var secondPartShortFinal =
    number[1] +
    number[2] +
    number[3] +
    number[4] +
    number[5] +
    number[6] +
    number[7];

  if (number[1] != "0") {
  } else {
    var combine =
      number[2] + number[3] + number[4] + number[5] + number[6] + number[7];
    var secondPart = lakh(combine);
    var secondPartParsed = parseInt(
      number[1] +
        number[2] +
        number[3] +
        number[4] +
        number[5] +
        number[6] +
        number[7]
    );

    var secondPartParsedString = secondPartParsed.toString().length;

    if (secondPartParsedString == 1) {
      var secondPart = ones(secondPartParsed);
    } else if (secondPartParsedString == 2) {
      var secondPart = tens(secondPartParsed);
    } else if (secondPartParsedString == 3) {
      var secondPart = hundred(secondPartParsed.toString());
    } else if (secondPartParsedString == 4) {
      var secondPart = thousand(secondPartParsed.toString());
    } else if (secondPartParsedString == 5) {
      var secondPart = tenThousand(secondPartParsed.toString());
    } else if (secondPartParsedString == 6) {
      var secondPart = lakh(secondPartParsed.toString());
    } else if (secondPartParsedString == 7) {
      var secondPart = tenLakh(secondPartParsed.toString());
    }

    if (parseInt(combine) != 0) {
      return firstPart + " " + secondPart;
    } else {
      return firstPart;
    }
  }

  if (secondPart == 0) {
    return firstPart;
  }

  if (secondPart != 0) {
    var secondPart = tenLakh(secondPartShortFinal);
    return firstPart + " " + secondPart;
  } else {
    return firstPart;
  }
}

function splitAndSlice(number, howMany) {
  var temp = number.split("");
  var final = temp.splice(howMany);
  return final;
}
// module.exports = converter;