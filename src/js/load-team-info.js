// <!-- winner playin -->
$(document).ready(function(){
  var contenttxt = [
    ["Winner of Match A",  "Cloud9",           "team.html#C9", "src/images/teams/C9.png"],
    ["Winner of Match B",  "Fnatic",           "team.html#FNC", "src/images/teams/FNC.png"],
    ["Winner of Match C",  "1907 Fenerbahçe",  "team.html#1907F", "src/images/teams/1907F.png"],
    ["Winner of Match D",  "Team WE",          "team.html#WE", "src/images/teams/WE.png"],
  ];
  for (var i = 0; i < contenttxt.length; i++) {
    var item = document.createElement("div");
    item.className = "team";
    document.getElementById("box-team-winners-playin").appendChild(item);

    var nametagP = document.createElement("p");
    var contentP = document.createTextNode(contenttxt[i][0]);
    nametagP.appendChild(contentP);
    item.appendChild(nametagP);

    var nametagA = document.createElement("a");
    var contentA = document.createTextNode(contenttxt[i][1]);
    nametagA.appendChild(contentA);
    nametagA.href = contenttxt[i][2];
    item.appendChild(nametagA);

    var nametagImg = document.createElement("img");
    nametagImg.src = contenttxt[i][3];
    item.appendChild(nametagImg);
  }
});
// <!-- play participants -->
$(document).ready(function(){
  var contenttxt = [
    ["#3 Seed from LPL",    "Team WE",          "team.html#WE", "src/images/teams/WE.png"],
    ["#3 Seed from NACLS",  "Cloud9",           "team.html#C9", "src/images/teams/C9.png"],
    ["#3 Seed from EULCS",  "Fnatic",           "team.html#FNC", "src/images/teams/FNC.png"],
    ["#3 Seed from LMS",    "HK Attitude",      "team.html#HKA", "src/images/teams/HKA.png"],
    ["Winner of CBLoL",     "Team oNe eSports", "team.html#TOE", "src/images/teams/TOE.png"],
    ["Winner of LJL",       "Rampage",          "team.html#RMP", "src/images/teams/RMP.png"],
    ["Winner of OPL",       "LG Dire Wolves",   "team.html#DW", "src/images/teams/DW.png"],
    ["#2 Seed GPL",         "Young Generation", "team.html#YG", "src/images/teams/YG.png"],
    ["Winner of TCL",       "1907 Fenerbahçe",  "team.html#1907F", "src/images/teams/1907F.png"],
    ["Winner of LCL",       "Gambit.CIS",       "team.html#G-CIS", "src/images/teams/G-CIS.png"],
    ["Winner of CLS",       "Kaos Latin Gamers","team.html#KLG", "src/images/teams/KLG.png"],
    ["Winner of LLN",       "Lyon Gaming",      "team.html#LG", "src/images/teams/LG.png"],
  ];

  for (var i = 0; i < contenttxt.length; i++) {
    var item = document.createElement("div");
    item.className = "team";
    document.getElementById("box-team-playin").appendChild(item);

    var nametagP = document.createElement("p");
    var contentP = document.createTextNode(contenttxt[i][0]);
    nametagP.appendChild(contentP);
    item.appendChild(nametagP);

    var nametagA = document.createElement("a");
    var contentA = document.createTextNode(contenttxt[i][1]);
    nametagA.appendChild(contentA);
    nametagA.href = contenttxt[i][2];
    item.appendChild(nametagA);

    var nametagImg = document.createElement("img");
    nametagImg.src = contenttxt[i][3];
    item.appendChild(nametagImg);
  }
});

// <!-- THAM GIA GROUP  -->
$(document).ready(function(){
  var contenttxt = [
    ["#1 Seed from LCK",   "Longzhu Gaming",   "team.html#LZ", "src/images/teams/LZ.png"],
    ["#1 Seed from LPL",   "EDward Gaming",    "team.html#EDG", "src/images/teams/EDG.png"],
    ["#1 Seed from EULCS", "G2 Esports",       "team.html#G2", "src/images/teams/G2.png"],
    ["#1 Seed from LMS",   "Flash Wolves",     "team.html#FW", "src/images/teams/FW.png"],
    ["#2 Seed from LCK",   "SK Telecom T1",    "team.html#SKT", "src/images/teams/SKT.png"],
    ["#3 Seed from LCK",   "Samsung Galaxy",   "team.html#SG", "src/images/teams/SG.png"],
    ["#2 Seed from LPL",   "Royal Never Give Up","team.html#RNG","src/images/teams/RNG.png"],
    ["#1 Seed from NALCS", "Team Solomid",     "team.html#TSM", "src/images/teams/TSM.png"],
    ["#2 Seed from NALCS", "Immortals",        "team.html#IMT", "src/images/teams/IMT.png"],
    ["#2 Seed from EULCS", "Misfits",          "team.html#MF", "src/images/teams/MF.png"],
    ["#2 Seed from LMS", "ahq e-Sports Club",  "team.html#AHQ", "src/images/teams/AHQ.png"],
    ["#1 Seed from GPL", "GIGABYTE Marines",  "team.html#GAM", "src/images/teams/GM.png"],
    ["Winner of Match A",  "Cloud9",           "team.html#C9", "src/images/teams/C9.png"],
    ["Winner of Match B",  "Fnatic",           "team.html#FNC", "src/images/teams/FNC.png"],
    ["Winner of Match C",  "1907 Fenerbahçe",  "team.html#1907F", "src/images/teams/1907F.png"],
    ["Winner of Match D",  "Team WE",          "team.html#WE", "src/images/teams/WE.png"],
  ];
  for (var i = 0; i < contenttxt.length; i++) {
    var item = document.createElement("div");
    item.className = "team";
    document.getElementById("box-team-group-stage").appendChild(item);

    var nametagP = document.createElement("p");
    var contentP = document.createTextNode(contenttxt[i][0]);
    nametagP.appendChild(contentP);
    item.appendChild(nametagP);

    var nametagA = document.createElement("a");
    var contentA = document.createTextNode(contenttxt[i][1]);
    nametagA.appendChild(contentA);
    nametagA.href = contenttxt[i][2];
    item.appendChild(nametagA);

    var nametagImg = document.createElement("img");
    nametagImg.src = contenttxt[i][3];
    item.appendChild(nametagImg);
  }
});
