var printButton = document.getElementById("button");
// printButton.addEventListener('click',printPage);
function printPage(element) {
    // const restorePage = document.body.innerHTML;
    // document.body.innerHTML = document.getElementById(element).innerHTML;
    printButton.classList.add('hide');
    window.print();
    printButton.classList.remove('hide');
    // document.body.innerHTML = restorePage;
}
