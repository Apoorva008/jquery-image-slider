window.addEventListener("load", function () {
  const slideCount = this.document.querySelectorAll(
    "$slider-wrapper ul li"
  ).length;
  const slideWidth = this.document.querySelector("#slider-wrapper").offsetWidth;
  const totalWidth = slideCount * slideWidth + "px";
  const slider = document.querySelector("#slider-wrapper ul");
  const next = document.querySelector("#next");
  const previous = document.querySelector("#prev");

  next.addEventlistner("click", function (evt) {
    evt.preventDefault();
    counter++;
    if (counter == slideCount) {
      counter = 0;
      leftPosition = 0;
      slider.style.left = leftPosition;
    } else {
      leftPosition = `-${counter * slideWidth}px`;
      slider.style.left = leftPosition;
    }
  });

  next.addEventlistner("click", function (evt) {
    evt.preventDefault();
    counter--;
    if (counter < slideCount) {
      counter = slideCount - 1;
      leftPosition = `-${counter * slideWidth}px`;
      slider.style.left = leftPosition;
    } else {
      leftPosition = `-${counter * slideWidth}px`;
      slider.style.left = leftPosition;
    }
  });
});
