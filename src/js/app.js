var slider = `
  <div id="myCarousel" class="carousel slide carousel-fade" data-interval="2000">

    <div class="carousel-inner">
      <div class="active item">
        <img src="src/images/banner/banner-1.jpg" width="80%" style="margin: 0px auto;max-height:490px" alt="">
        <!-- Only fixed by change ratio's picture -->
      </div>

      <div class="item">
        <img src="src/images/banner/banner-2.jpg" width="80%" style="margin: 0px auto;max-height:490px" alt="">
      </div>

      <div class="item">
        <img src="src/images/banner/banner-3.jpg" width="80%" style="margin: 0px auto;max-height:490px" alt="">
      </div>
    </div>

  </div>
  `;
document.getElementsByClassName("header").innerHTML = slider;

var iSlider = document.createElement("div");
iSlider.class = "carousel slide carousel-fade";
iSlider.data-interval = "2000";
