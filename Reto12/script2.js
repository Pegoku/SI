var arrEncStr = [
  "\u0038\u0033",
  "\u0031\u0032\u0036",
  "\u0031\u0031\u0036",
  "\u0031\u0031\u0034",
  "\u0031\u0032\u0030",
  "\u0038\u0036",
  "\u0039\u0032",
  "\u0031\u0030\u0036",
  "\u0031\u0030\u0037",
  "\u0031\u0031\u0030",
  "\u0031\u0032\u0037",
  "\u0031\u0030\u0038",
  "\u0031\u0032\u0033",
  "\u0031\u0032\u0031",
  "\u0031\u0032\u0035",
  "\u0036\u0036",
  "\u0076\u0061\u006C\u0075\u0065",
  "\u0075\u0073\u0065\u0072",
  "\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064",
  "\u0070\u0061\u0073\u0073",
  "",
  "\u0073\u0070\u006C\u0069\u0074",
  "\u006C\u0065\u006E\u0067\u0074\u0068",
  "\u0063\u0068\u0061\u0072\u0043\u006F\u0064\u0065\u0041\u0074",
  "\u0070\u006C\u0061\u0063\u0065\u0068\u006F\u006C\u0064\u0065\u0072",
  "\u0066\u0072\u006F\u006D\u0043\u0068\u0061\u0072\u0043\u006F\u0064\u0065",
  "\u0063\u006F\u006C\u006F\u0072",
  "\u0073\u0074\u0079\u006C\u0065",
  "\u0063\u0068\u0065\u0063\u006B",
  "\u0067\u0072\u0065\u0065\u006E",
  "\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C",
  "\u0059\u0061\u0020\u0063\u0061\u0073\u0069\u0020\u0065\u0073\u0074\u00E1\u0020\u0043\u00E9\u0073\u0061\u0072",
  "\u0074\u0065\u0073\u0074",
  "\u0072\u0065\u0073\u0074",
  "\u0072\u0065\u0064",
  "\u004E\u006F\u0020\u0061\u0075\u0074\u006F\u0072\u0069\u007A\u0061\u0064\u006F",
  "\u0070\u006F\u0077\u0064\u0065\u0072\u0062\u006C\u0075\u0065",
];
var arrStr = [
83,
126,
116,
114,
120,
86,
92,
106,
107,
110,
1272,
108,
123,
121,
125,
66,
"value",
"user",
"getElementById",
"pass",
"",
"split",
"length",
"charCodeAt",
"placeholder",
"fromCharCode",
"color",
"style",
"check",
"green",
"innerHTML",
"Ya casi está César",
"test",
"rest",
"red",
"No autorizado",
"powderblue"
]
arrStr.forEach( (e) => console.log(e))
function check() {
  var arrSortedEncStr = [
    arrStr[0],
    arrStr[1],
    arrStr[2],
    arrStr[3],
    arrStr[4],
    arrStr[5],
    arrStr[4],
    arrStr[6],
    arrStr[7],
    arrStr[8],
    arrStr[9],
    arrStr[0],
    arrStr[7],
    arrStr[10],
    arrStr[7],
    arrStr[6],
    arrStr[11],
    arrStr[12],
    arrStr[3],
    arrStr[13],
    arrStr[14],
    arrStr[15],
    arrStr[15],
  ];
  var user = document.getElementById("user").value;
  console.log(user);
  var pass = document.getElementById("pass").value;
  console.log(pass)
  var passArr = pass.split("");
  console.log(passArr)
  var charSum = 0;
  for (var i = 0; i < passArr.length; i++) {
    charSum += passArr[i].charCodeAt();
    console.log(charSum, passArr[i].charCodeAt(), passArr[i]);
  }
  console.log(String.fromCharCode(97, 100, 109, 105, 110)) //admin
  if (
    charSum % "Usuario".length ==
      5 &&
    user == String.fromCharCode(97, 100, 109, 105, 110)
  ) {
    document.getElementById(arrStr[28])[arrStr[27]][arrStr[26]] = arrStr[29];
    document.getElementById(arrStr[28])[arrStr[30]] = arrStr[31];
    document.getElementById(arrStr[32])[arrStr[27]][arrStr[26]] = arrStr[29];
    var charSumMod = charSum % 7;
    document.getElementById("rest").innerHTML = 
    
    console.log (String.fromCharCode(
      arrSortedEncStr[0] - charSumMod,
      arrSortedEncStr[1] - charSumMod,
      arrSortedEncStr[2] - charSumMod,
      arrSortedEncStr[3] - charSumMod,
      arrSortedEncStr[4] - charSumMod,
      arrSortedEncStr[5] - charSumMod,
      arrSortedEncStr[6] - charSumMod,
      arrSortedEncStr[7] - charSumMod,
      arrSortedEncStr[8] - charSumMod,
      arrSortedEncStr[9] - charSumMod,
      arrSortedEncStr[10] - charSumMod,
      arrSortedEncStr[11] - charSumMod,
      arrSortedEncStr[12] - charSumMod,
      arrSortedEncStr[13] - charSumMod,
      arrSortedEncStr[14] - charSumMod,
      arrSortedEncStr[15] - charSumMod,
      arrSortedEncStr[16] - charSumMod,
      arrSortedEncStr[17] - charSumMod,
      arrSortedEncStr[18] - charSumMod,
      arrSortedEncStr[19] - charSumMod,
      arrSortedEncStr[20] - charSumMod,
      arrSortedEncStr[21] - charSumMod,
      arrSortedEncStr[22] - charSumMod,
    ),
      arrSortedEncStr[0] - charSumMod,
      arrSortedEncStr[1] - charSumMod,
      arrSortedEncStr[2] - charSumMod,
      arrSortedEncStr[3] - charSumMod,
      arrSortedEncStr[4] - charSumMod,
      arrSortedEncStr[5] - charSumMod,
      arrSortedEncStr[6] - charSumMod,
      arrSortedEncStr[7] - charSumMod,
      arrSortedEncStr[8] - charSumMod,
      arrSortedEncStr[9] - charSumMod,
      arrSortedEncStr[10] - charSumMod,
      arrSortedEncStr[11] - charSumMod,
      arrSortedEncStr[12] - charSumMod,
      arrSortedEncStr[13] - charSumMod,
      arrSortedEncStr[14] - charSumMod,
      arrSortedEncStr[15] - charSumMod,
      arrSortedEncStr[16] - charSumMod,
      arrSortedEncStr[17] - charSumMod,
      arrSortedEncStr[18] - charSumMod,
      arrSortedEncStr[19] - charSumMod,
      arrSortedEncStr[20] - charSumMod,
      arrSortedEncStr[21] - charSumMod,
      arrSortedEncStr[22] - charSumMod,
  );
  } else {
    document.getElementById(arrStr[28])[arrStr[27]][arrStr[26]] = arrStr[34];
    document.getElementById(arrStr[28])[arrStr[30]] = arrStr[35];
    document.getElementById(arrStr[32])[arrStr[27]][arrStr[26]] = arrStr[36];
    document.getElementById(arrStr[33])[arrStr[30]] = arrStr[20];
  }
}
