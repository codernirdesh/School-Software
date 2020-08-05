const monthDropdown = document.getElementById("month-dropdown");
const levelDropdown = document.getElementById("level-dropdown");
const months = [
  "बैशाख",
  "जेष्ठ",
  "आषाढ",
  "श्रावण",
  "भाद्र",
  "आश्विन",
  "कार्तिक",
  "मार्ग",
  "पौष",
  "माघ",
  "फाल्गुन",
  "चैत्र",
];
let temp = [];
months.forEach((month) => {
  temp.push(`<option value="${month}">${month}</option>`);
  console.log(`<option value="${month}">${month}</option>`);
});
monthDropdown.innerHTML = temp;
temp = [];
const levels = ["माध्यमिक", "आधारभूत"];
levels.forEach((level) => {
  temp.push(`<option value="${level}">${level}</option>`);
  console.log(`<option value="${level}">${level}</option>`);
});
levelDropdown.innerHTML = temp;

// / Button Click Listener
const maagfaram = document.getElementById("button1");
const varpai = document.getElementById("button2");
const sanchayakosh = document.getElementById("button3");
const poshakBhatta = document.getElementById("button4");
const bima = document.getElementById("button5");
const saSuKar = document.getElementById("button6");
const aayakar = document.getElementById("button7");
const bankLetter = document.getElementById("button8");
const bachatBriddhiKosh = document.getElementById("button9");

//मागफारम
maagfaram.addEventListener("click", (e) => {
  window.location.href = "/page/Maag-Faaram";
});
//भर्पाई
varpai.addEventListener("click", (e) => {
  window.location.href = "/page/varpai";
});
//सञ्चयकोष
sanchayakosh.addEventListener("click", (e) => {
  window.location.href = "/page/sanchayakosh";
});
//पोशाकभत्ता
poshakBhatta.addEventListener("click", (e) => {
  window.location.href = "/page/poshakBhatta";
});
//बिमा
bima.addEventListener("click", (e) => {
  window.location.href = "/page/bima";
});
//सा.सु. कर
saSuKar.addEventListener("click", (e) => {
  window.location.href = "/page/saSuKar";
});
//आयकर
aayakar.addEventListener("click", (e) => {
  window.location.href = "/page/aayakar";
});
//बैंक लेटर
bankLetter.addEventListener("click", (e) => {
  window.location.href = "/page/bankLetter";
});
//बचत बृद्धिकोष
bachatBriddhiKosh.addEventListener("click", (e) => {
  window.location.href = "/page/bachatBriddhiKosh";
});
