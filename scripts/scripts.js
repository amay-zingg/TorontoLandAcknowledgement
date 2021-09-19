var Slice = function () {
  var sliceDiv = document.getElementById("slice");
  var gridX = 60;
  var w = sliceDiv.offsetWidth;
  var h = sliceDiv.offsetHeight;
  var img = document.querySelectorAll("#slice img")[0].src;
  var delay = 0.05;

  this.create = function () {
    for (x = 0; x < gridX; x++) {
      var width = (x * w) / gridX + "px";
      var div = document.createElement("div");
      document.getElementById("slice").appendChild(div);

      div.style.left = width;
      div.style.top = 0;
      div.style.width = w / gridX + "px";
      div.style.height = h + "px";
      div.style.backgroundImage = "url(" + img + ")";
      div.style.backgroundPosition = "-" + width;
      div.style.backgroundSize = w + "px";
      div.style.transitionDelay = x * delay + "s";
    }
  };

  this.create();
};

window.onload = function () {
  var slice = Slice();

  gsap.set(["#slice div"], {
    autoAlpha: 1,
  });

  gsap.from(["#slice div"], {
    autoAlpha: 0,
    y: 100,
    scale: 0.5,
  });

  gsap.to(["#slice div"], {
    autoAlpha: 1,
    y: 0,
    scale: 1.2,
  });
};