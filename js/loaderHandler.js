const LoaderEtd = {
  init: function () {
    if (jQuery(".loader_etd").length) {

      this.path1 = document.getElementById("path1_etd");
      this.path2 = document.getElementById("path2_etd");
      this.etdLogoSvg = document.getElementById("etd_logo_svg_etd");
      this.image = document.getElementById("image_etd");
      this.loader = document.querySelector(".loader_etd");

      this.length1 = this.path1.getTotalLength();
      this.length2 = this.path2.getTotalLength();

      this.path1.style.strokeDasharray = this.length1;
      this.path1.style.strokeDashoffset = this.length1;
      this.path1.style.animation = "dash_etd 2s linear forwards";

      this.path2.style.strokeDasharray = this.length2 * 3;
      this.path2.style.strokeDashoffset = this.length2 * 3;
      this.path2.style.animation = "dash_etd 1s linear forwards";
      this.path2.style.animationDelay = "0s";

      this.path2.addEventListener(
        "animationend",
        this.onPath2AnimationEnd.bind(this)
      );
      this.image.addEventListener(
        "transitionend",
        this.onImageTransitionEnd.bind(this)
      );
    }
  },

  onPath2AnimationEnd: function () {
    this.image.classList.add("visible_etd");
    this.etdLogoSvg.classList.add("hidden_etd");
  },

  onImageTransitionEnd: function () {
    this.loader.classList.add("hidden_etd");
    this.image.classList.add("large");
    ETD_Helper.init();
    setTimeout(() => {
      this.onLoaderTransitionEnd();
    }, 1000);
  },

  onLoaderTransitionEnd: function () {
    this.loader.remove();
  },
};

document.addEventListener("DOMContentLoaded", function () {
  LoaderEtd.init();
});