/*Surprise Function*/

var sites = [
    'knit.html',
    'crochet.html',
    'quilt.html',
    'embroider.html',
    'sewing.html',
    
];

function functionSurprise() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i]; }

/*Link for this: https://stackoverflow.com/questions/37751759/generating-a-random-link-through-javascript-html */

// pattern difficulty collapsibles
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_symbol

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}