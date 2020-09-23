

console.log("Hey, welcome to Nick's portfolio site!");

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  x.className += ' responsive';
}

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.classname === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
