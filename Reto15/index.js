var valueArr = [
  "Incorrect password",
  "OK , flag{password}",
  "1414812FnzZML",
  "2ZuZoOq",
  "720827WQlMog",
  "password",
  "granted1337",
  "25459OvNsVk",
  "1359268dQuzsW",
  "647302iqoESf",
  "getElementById",
  "1407845XbPGsA",
  "access",
  "1163212MgQrRV",
  "value",
  "5eMgJYX",
];
// function valueArr (pa1, unusedParam) {
// //   p1 -= 330;
//   var result = valueArr[pa1];
//   return result;
// };
function func2 (pb1, pb2) {
  while (true) {
    try {
      var _calculatedValue =
        parseInt(valueArr[4]) * parseInt(valueArr[12]) +
        -parseInt(valueArr[9]) +
        -parseInt(valueArr[2]) +
        -parseInt(valueArr[7]) +
        parseInt(valueArr[8]) * parseInt(valueArr[14]) +
        parseInt(valueArr[13]) +
        parseInt(valueArr[0]);
      if (_calculatedValue === pb2) break;
      else pb1["push"](pb1["shift"]());
    } catch (_0x192125) {
      pb1["push"](pb1["shift"]());
    }
  }
}
func2(valueArr, 891185);
function verify() {
  password = document[valueArr[15]](valueArr[10])[valueArr[3]];
  var _0x1ccb0d = valueArr[11];
  password == valueArr[1] + _0x1ccb0d
    ? alert(valueArr[6])
    : alert(valueArr[5]);
}
