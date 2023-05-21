var names = new Array();
names[0] = "Francesco";
names[1] = "Marco";
names[2] = "Jose";
names[3] = "Iacopo";
names[4] = "Lucrezia";
names[5] = "Julio";
names[6] = "Alessandro";
names[7] = "Andrea";
names[8] = "Enzio";
names[9] = "Laura";

for (var i = 0; i < names.length; i++) {
  if (names[i].charAt(0) === "J" || names[i].charAt(0) === "j") {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}