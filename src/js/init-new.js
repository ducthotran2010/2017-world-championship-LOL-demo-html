function toShowOrHide(idName) {
  $("#" + idName).slideToggle(500);
}

$(document).ready(function(){
  var contenttxt = [
    ["Nhóm A"],
    ["1", "Team WE",          "team.html#WE", "src/images/teams/WE.png","4-0"],
    ["2", "Lyon Gaming",      "team.html#LG", "src/images/teams/LG.png","2-2"],
    ["3", "Gambit.CIS",       "team.html#G-CIS", "src/images/teams/G-CIS.png","0-4"],
    ["Nhóm B"],
    ["1", "Cloud9",           "team.html#C9", "src/images/teams/C9.png","4-0"],
    ["2", "Team oNe eSports", "team.html#TOE", "src/images/teams/TOE.png","2-3"],
    ["3", "LG Dire Wolves",   "team.html#DW", "src/images/teams/DW.png","1-4"],
    ["Nhóm C"],
    ["1", "Fnatic",           "team.html#FNC", "src/images/teams/FNC.png","3-1"],
    ["2", "Young Generation", "team.html#YG", "src/images/teams/YG.png","2-2"],
    ["3", "Kaos Latin Gamers","team.html#KLG", "src/images/teams/KLG.png","1-3"],
    ["Nhóm D"],
    ["1", "1907 Fenerbahçe",  "team.html#1907F", "src/images/teams/1907F.png","4-1"],
    ["2", "HK Attitude",      "team.html#HKA", "src/images/teams/HKA.png","3-2"],
    ["3", "Kaos Latin Gamers","team.html#KLG", "src/images/teams/KLG.png","0-4"],
  ];
  var iTable = document.createElement("table");
  iTable.className = "table";
  document.getElementById("box-team-playin-results1").appendChild(iTable);

  var iTHead = document.createElement("thead");
  iTable.appendChild(iTHead);

  iTHead.innerHTML = `
    <tr class="info">
      <th>Nhóm</th>
      <th>Thứ tự</th>
      <th>Đội tuyển</th>
      <th>Tỉ số</th>
    </tr>
  `;

  var iTBody = document.createElement("tbody");
  iTable.appendChild(iTBody);
  for (var i = 0; i < contenttxt.length; ++i)
  if (i % 4 == 0) {
    var iTR = document.createElement("tr");
    iTR.className = "active";
    iTBody.appendChild(iTR);

    var iTD = document.createElement("td");
    iTD.rowSpan = 4;
    iTD.innerHTML = contenttxt[i][0];
    iTR.appendChild(iTD);
  } else {
    var iTR = document.createElement("tr");
    iTR.className = (i % 4 == 3) ? "danger" : "success";
    iTBody.appendChild(iTR);

    var iTD = document.createElement("td");
    iTD.innerHTML = contenttxt[i][0];
    iTR.appendChild(iTD);

    var iTD2nd = document.createElement("td");
    iTD2nd.className = "text-align-left";
    iTR.appendChild(iTD2nd);
    var iTdImg = document.createElement("img");
    iTdImg.src = contenttxt[i][3];
    iTD2nd.appendChild(iTdImg);
    var iTdA = document.createElement("a");
    var iTdContent = document.createTextNode(contenttxt[i][1]);
    iTdA.appendChild(iTdContent);
    iTdA.href = contenttxt[i][2];
    iTD2nd.appendChild(iTdA);

    var iTD3rd = document.createElement("td");
    iTR.appendChild(iTD3rd);
    iTD3rd.innerHTML = contenttxt[i][4];

  }
});

$(document).ready(function(){
  var contenttxt = [
    ["Cặp đấu A"],
    ["1", "Cloud9",           "team.html#C9", "src/images/teams/C9.png","3-0"],
    ["2", "Lyon Gaming",      "team.html#LG", "src/images/teams/LG.png","0-3"],
    ["Cặp đấu B"],
    ["1", "Fnatic",           "team.html#FNC", "src/images/teams/FNC.png","3-0"],
    ["2", "HK Attitude",      "team.html#HKA", "src/images/teams/HKA.png","0-3"],
    ["Cặp đấu C"],
    ["1", "1907 Fenerbahçe",  "team.html#1907F", "src/images/teams/1907F.png","3-1"],
    ["2", "Team oNe eSports", "team.html#TOE", "src/images/teams/TOE.png","1-3"],
    ["Cặp đấu D"],
    ["1", "Team WE",          "team.html#WE", "src/images/teams/WE.png","3-0"],
    ["2", "Young Generation", "team.html#YG", "src/images/teams/YG.png","0-3"],
  ];
  var iTable = document.createElement("table");
  iTable.className = "table";
  document.getElementById("box-team-playin-results2").appendChild(iTable);

  var iTHead = document.createElement("thead");
  iTable.appendChild(iTHead);

  iTHead.innerHTML = `
    <tr class="info">
      <th>Cặp đấu BO5</th>
      <th>Thứ tự</th>
      <th>Đội tuyển</th>
      <th>Tỉ số</th>
    </tr>
  `;

  var iTBody = document.createElement("tbody");
  iTable.appendChild(iTBody);
  for (var i = 0; i < contenttxt.length; ++i)
  if (i % 3 == 0) {
    var iTR = document.createElement("tr");
    iTR.className = (i % 8 == 0) ? "active" : "active";
    iTBody.appendChild(iTR);

    var iTD = document.createElement("td");
    iTD.rowSpan = 3;
    iTD.innerHTML = contenttxt[i][0];
    iTR.appendChild(iTD);
  } else {
    var iTR = document.createElement("tr");
    iTR.className = (i % 3 == 2) ? "danger" : "success";
    iTBody.appendChild(iTR);

    var iTD = document.createElement("td");
    iTD.innerHTML = contenttxt[i][0];
    iTR.appendChild(iTD);

    var iTD2nd = document.createElement("td");
    iTD2nd.className = "text-align-left";
    iTR.appendChild(iTD2nd);
    var iTdImg = document.createElement("img");
    iTdImg.src = contenttxt[i][3];
    iTD2nd.appendChild(iTdImg);
    var iTdA = document.createElement("a");
    var iTdContent = document.createTextNode(contenttxt[i][1]);
    iTdA.appendChild(iTdContent);
    iTdA.href = contenttxt[i][2];
    iTD2nd.appendChild(iTdA);

    var iTD3rd = document.createElement("td");
    iTR.appendChild(iTD3rd);
    iTD3rd.innerHTML = contenttxt[i][4];

  }
});
$(document).ready(function(){
  var contenttxt = [
    ["Nhóm A"],
    ["1", "SK Telecom T1",    "team.html#SKT", "src/images/teams/SKT.png","3-0"],
    ["2", "Cloud9",           "team.html#C9", "src/images/teams/C9.png","2-1"],
    ["3", "ahq e-Sports Club","team.html#AHQ", "src/images/teams/AHQ.png","1-2"],
    ["4", "EDward Gaming",    "team.html#EDG", "src/images/teams/EDG.png","0-3"],
    ["Nhóm B"],
    ["1", "Longzhu Gaming",   "team.html#LZ", "src/images/teams/LZ.png","3-0"],
    ["2", "Immortals",        "team.html#IMT", "src/images/teams/IMT.png","2-1"],
    ["3", "GIGABYTE Marines",  "team.html#GAM", "src/images/teams/GM.png","1-2"],
    ["4", "Fnatic",           "team.html#FNC", "src/images/teams/FNC.png","0-3"],
    ["Nhóm C"],
    ["1", "Royal Never Give Up","team.html#RNG","src/images/teams/RNG.png","3-0"],
    ["2", "Samsung Galaxy",   "team.html#SG", "src/images/teams/SG.png","2-1"],
    ["3", "G2 Esports",       "team.html#G2", "src/images/teams/G2.png","1-2"],
    ["4", "1907 Fenerbahçe",  "team.html#1907F", "src/images/teams/1907F.png","0-3"],
    ["Nhóm D"],
    ["1", "Team Solomid",     "team.html#TSM", "src/images/teams/TSM.png","2-1"],
    ["2", "Team WE",          "team.html#WE", "src/images/teams/WE.png","2-1"],
    ["3", "Misfits",          "team.html#MF", "src/images/teams/MF.png","2-1"],
    ["4", "Flash Wolves",     "team.html#FW", "src/images/teams/FW.png","0-3"],
  ];
  var iTable = document.createElement("table");
  iTable.className = "table";
  iTable.classId = "group-stage-res-1";
  document.getElementById("box-team-group-stage-results-1").appendChild(iTable);

  var iTHead = document.createElement("thead");
  iTable.appendChild(iTHead);

  iTHead.innerHTML = `
    <tr class="info">
      <th>Nhóm</th>
      <th>Thứ tự</th>
      <th>Đội tuyển</th>
      <th>Tỉ số</th>
    </tr>
  `;

  var iTBody = document.createElement("tbody");
  iTable.appendChild(iTBody);
  for (var i = 0; i < contenttxt.length; ++i)
  if (i % 5 == 0) {
    var iTR = document.createElement("tr");
    iTR.className = "active";
    iTBody.appendChild(iTR);

    var iTD = document.createElement("td");
    iTD.rowSpan = 5;
    iTD.innerHTML = contenttxt[i][0];
    iTR.appendChild(iTD);
  } else {
    var iTR = document.createElement("tr");
    iTR.className = (i % 5 >= 3) ? "danger" : "success";
    iTBody.appendChild(iTR);

    var iTD = document.createElement("td");
    iTD.innerHTML = contenttxt[i][0];
    iTR.appendChild(iTD);

    var iTD2nd = document.createElement("td");
    iTD2nd.className = "text-align-left";
    iTR.appendChild(iTD2nd);
    var iTdImg = document.createElement("img");
    iTdImg.src = contenttxt[i][3];
    iTD2nd.appendChild(iTdImg);
    var iTdA = document.createElement("a");
    var iTdContent = document.createTextNode(contenttxt[i][1]);
    iTdA.appendChild(iTdContent);
    iTdA.href = contenttxt[i][2];
    iTD2nd.appendChild(iTdA);

    var iTD3rd = document.createElement("td");
    iTR.appendChild(iTD3rd);
    iTD3rd.innerHTML = contenttxt[i][4];
  }
});
