document.getElementById("btn").addEventListener("click", action);
function action() {
  //template for hexacode
  var codes = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  //final empty hexacode
  var hexaCode = [];

  //loop to find out the hexacode
  for (var i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * codes.length);
    hexaCode += codes[randomIndex];
  }
  console.log(hexaCode);
  document.getElementById("hex-code").innerHTML = hexaCode;
  document.getElementsByTagName("body")[0].style.backgroundColor =
    "#" + hexaCode;
}
