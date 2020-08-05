// const preSubmit = document.getElementById('pre-submit');
// const submit = document.getElementById('submit');
// const yesButton = document.getElementById('yes');
// const noButton = document.getElementById('no');
// const overlay = document.getElementById('overlay');
// const frontView = document.getElementById('front-view');

// //EVents Listeners
// preSubmit.addEventListener('click', (e) => {
//     // console.log("Pre Clicked!");
//     overlay.classList.remove('hide-overlay')
//     frontView.classList.remove('front-view')
//     frontView.classList.add('hide-front-view')
//     overlay.classList.add('overlay');
// });


// yesButton.addEventListener('click', (e) => {
//     overlay.classList.remove('overlay')
//     overlay.classList.add('hide-overlay');
//     submit.click();
// });


// noButton.addEventListener('click', (e) => {
//     console.log("No Clicked!");
// });



//
//
//
//
//  Talab Calculator
//
//
//
/*--------------------------1st Total Calculation-------------------------------------*/
/*First total Calculation*/var talab = document.getElementById('salary');
/*First total Calculation*/var rate = document.getElementById('rate');
/*First total Calculation*/var rateNumber = document.getElementById('rateNumber');
/*First total Calculation*/var grade = document.getElementById('grade');
/*First total Calculation*/var total = document.getElementById('total');
total.addEventListener('click', firstTotal);
total.addEventListener('focus', firstTotal);
function firstTotal() {
    let talabValue = parseStringToNumber(talab.value);
    let rateValue = parseStringToNumber(rate.value);
    let rateNumberValue = parseStringToNumber(rateNumber.value);
    let gradeValue = parseStringToNumber(grade.value);
    total.value = talabValue+rateValue+rateNumberValue+gradeValue;
}

/*--------------------------2nd Total Calculation-------------------------------------*/
var kaSamKosh = document.getElementById('kaSamKosh');
var insurance = document.getElementById('insurance');
var principalallowence = document.getElementById('principalallowence');
var otherAllowence = document.getElementById('otherAllowence');
var oneMonthTotal = document.getElementById('oneMonthTotal');
oneMonthTotal.addEventListener('click', secondTotal);
oneMonthTotal.addEventListener('focus', secondTotal);
function secondTotal() {
    let kaSamKoshValue=parseStringToNumber(kaSamKosh.value);
    let insuranceValue=parseStringToNumber(insurance.value);
    let principalallowenceValueValue=parseStringToNumber(principalallowence.value);
    let otherAllowenceValue=parseStringToNumber(otherAllowence.value);
    oneMonthTotal.value = kaSamKoshValue + insuranceValue + principalallowenceValueValue + otherAllowenceValue+parseStringToNumber(total.value);
}
// /*--------------------------3rd Total Calculation-------------------------------------*/
// const test = document.getElementById('test');
// const varMonthTotal = document.getElementById('varMonthTotal');
// test.addEventListener('input', e => {
//     console.log(e.target.value);
//     varMonthTotal.value = parseStringToNumber(oneMonthTotal.value) * e.target.value;

// });



//Parse String to number & if String = NaN then will return 0
function parseStringToNumber(stringNumber) {
    if (isNaN(stringNumber)) {
        console.log(stringNumber);
        return 0;
    }
    else {
        return parseFloat(stringNumber);
        
    }
}


const position = document.getElementById('position');
position.addEventListener('change', e => { 
    console.log(e);
});