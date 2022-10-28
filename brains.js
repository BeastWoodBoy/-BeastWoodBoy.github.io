function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
} 
function resumeClick() {
    var x = document.getElementsByClassName("resumeFull")[0];
    if (x.style.display == "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
function circleClick(){
  var x = document.getElementsByClassName("circleSelector")[0];
  if (x.style.display == "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
function menuHide(){
  var x = document.getElementsByClassName("toHide")
  for (let i = 0; i < (x).length; i++){
    document.getElementsByClassName("toHide")[i].style.display = "none"
  }
}
// var scrollEventHandler = function()
// {
//   window.scroll(0, window.pageYOffset)
// }

// window.addEventListener("scroll", scrollEventHandler, false);

