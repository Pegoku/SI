var arrStr2 = [
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
83,                          //  0    
126,                         //  1      
116,                         //  2      
114,                         //  3      
120,                         //  4      
86,                          //  5    
92,                          //  6    
106,                         //  7      
107,                         //  8      
110,                         //  9      
1272,                        //  10      
108,                         //  11      
123,                         //  12      
121,                         //  13      
125,                         //  14      
66,                          //  15    
"value",                     //  16          
"user",                      //  17        
"getElementById",            //  18
"pass",                      //  19   
"",                          //  20
"split",                     //  21    
"length",                    //  22     
"charCodeAt",                //  23         
"placeholder",               //  24          
"fromCharCode",              //  25           
"color",                     //  26    
"style",                     //  27    
"check",                     //  28    
"green",                     //  29    
"innerHTML",                 //  30                              
"Ya casi está César",        //  31                                       
"test",                      //  32
"rest",                      //  33
"red",                       //  34
"No autorizado",             //  35        
"powderblue"                 //  36    
]

function check() {
  var arrSorted = [
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
  var passwd = document.getElementById("pass").value;
  var passwdArr = passwd.split("");
  var passwdCharSum = 0;
  for (var i = 0; i < passwdArr.length; i++) {
    passwdCharSum += passwdArr[i].charCodeAt();
  }
  if (
    passwdCharSum % document.getElementById("user").placeholder.length ==
      user.length &&
    user == String.fromCharCode(97, 100, 109, 105, 110) // admin
  ) {
    document.getElementById("check").style.color = arrStr[29];
    document.getElementById("check").innerHTML = arrStr[31];
    document.getElementById("test").style.color = arrStr[29];
    document.getElementById("rest").innerHTML = String.fromCharCode(
      arrSorted[0] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[1] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[2] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[3] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[4] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[5] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[6] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[7] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[8] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[9] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[10] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[11] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[12] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[13] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[14] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[15] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[16] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[17] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[18] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[19] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[20] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[21] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
      arrSorted[22] -
        (passwdCharSum %
          document.getElementById("user").placeholder.length),
    );
  } else {
    document.getElementById("check").style.color = "red";
    document.getElementById("check").innerHTML = "No autorizado";
    document.getElementById("test").style.color = "powderblue";
    document.getElementById("rest").innerHTML = "";
  }
}
