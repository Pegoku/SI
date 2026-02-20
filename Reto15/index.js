var valueArr = [
  // rotated once
  "Incorrect password", // 1
  "OK , flag{password}", // 2
  "1414812FnzZML", // 3
  "2ZuZoOq", // 4
  "720827WQlMog", // 5
  "password", // 6
  "granted1337", // 7
  "25459OvNsVk", // 8
  "1359268dQuzsW", // 9
  "647302iqoESf", // 10
  "getElementById", // 11
  "1407845XbPGsA", // 12
  "access", // 13
  "1163212MgQrRV", // 14
  "value", // 15
  "5eMgJYX", // 16
];
// function valueArr (pa1, unusedParam) {
// //   p1 -= 330;
//   var result = valueArr[pa1];
//   return result;
// };
console.log(valueArr);
// function func2(_noValue, pb2) {
while (true) {
  try {
    var _calculatedValue =
      parseInt(valueArr[4]) * parseInt(valueArr[12]) -
      parseInt(valueArr[9]) -
      parseInt(valueArr[2]) -
      parseInt(valueArr[7]) +
      parseInt(valueArr[8]) * parseInt(valueArr[14]) +
      parseInt(valueArr[13]) +
      parseInt(valueArr[0]);
    console.log(_calculatedValue);
    if (_calculatedValue === 0xd9531) break;
    else valueArr["push"](valueArr["shift"]());
  } catch (_0x192125) {
    valueArr["push"](valueArr["shift"]());
  }
}
// }

// func2(null, 0xd9531);

function verify() {
  password = document[valueArr[15]](valueArr[10])[valueArr[3]];
  console.log(password);
  var _0x1ccb0d = valueArr[11];
  console.log(valueArr[1] + _0x1ccb0d); //password output
  password == valueArr[1] + _0x1ccb0d ? alert(valueArr[6]) : alert(valueArr[5]);
}
