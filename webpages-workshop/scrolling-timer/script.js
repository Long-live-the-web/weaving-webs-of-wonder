function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function changeTextYes() {
  let element = document.getElementById('yes-btn');
  element.style.display = "none";
  
  let titleElem = document.getElementById('title');
  titleElem.style.display = "none";
  
    
  let demoElem = document.getElementById('demo');
  demoElem.style.display = "block";
  
    let noElem = document.getElementById('no-btn');
  noElem.style.display = "none";
}

function changeTextNo() {
  let element = document.getElementById('no-btn');
  element.style.display = "none";
  
    let elementYes = document.getElementById('yes-btn');
  elementYes.style.display = "none";
  
      let titleElem = document.getElementById('title');
  titleElem.style.display = "none";
  
    
      let noTextElem = document.getElementById('no-text');
  noTextElem.style.display = "block";
}