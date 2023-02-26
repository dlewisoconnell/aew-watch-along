
document.getElementById("total").innerHTML = localStorage.points;

function clickCounter() {
  if (localStorage.points) {
    localStorage.points = Number(localStorage.points)+1;
  } else {
    localStorage.points = 1; 
};

document.getElementById("total").innerHTML = localStorage.points;
};

function clickCounterSub() {
  if (localStorage.points) {
    localStorage.points = Number(localStorage.points)-1;
  } else {
    localStorage.points = 1; 
};

document.getElementById("total").innerHTML = localStorage.points;
};

function clearValue() {
    localStorage.points = 0;
    document.getElementById("total").innerHTML = localStorage.points;

};