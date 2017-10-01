var nav = `
    <nav class="navbar navbar-inverse navbar-static-top" role="navigation">
      <div class="container-fluid">

        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html">
            <img src="src/images/nav/icon-web.png" width="32px" height="32px" alt="">
          </a>
        </div>

        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li><a href="#play-in-stage">play-in stage</a></li>
            <li><a href="#group-stage">Group stage</a></li>
            <li><a href="#winners-stage">Winners stage</a></li>
          </ul>
        </div>

      </div>
    </nav>
`;

var iNav = document.createElement("nav");
iNav.class = "navbar navbar-inverse navbar-static-top";
iNav.role = "navigation";
document.getElementById("nav").appendChild(iNav);

var iNavDiv = document.createElement("div");
iNavDiv.class = "container-fluid";
iNav.appendChild(iNavDiv);

var iNavbarHeader = document.createElement("div");
iNavbarHeader.class = "navbar-header";
iNavDiv.appendChild(iNavbarHeader);



// document.getElementById("nav").innerHTML = nav;
// var headerheight = $("header").height() - 20;
$(document).ready(function(){
  // $(".navbar").affix({offset: {top: headerheight} });
  $(".navbar").affix({offset: {top: $("header").outerHeight(true)} });
});
