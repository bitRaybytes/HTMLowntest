document.getElementById("myh1").textContent =
  "Dieser Text ist mit Java ausgegeben";
document.getElementById("myp").textContent =
  "Dieser Text hier auch, indem den Elementen wie h1 und p eine ID gegeben wurde und über document.getElementbyID('ID') und diese in Klammern gesetzte ID wird innerhalb von Anführungszeichen geschrieben.";

let username;
document.getElementById("submit").onclick = function () {
  username = document.getElementById("usernameeingabe").name;
  document.getElementById("h3java").textContent = "Hallo ${username}";
};