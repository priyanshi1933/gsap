var h1Text=document.querySelector("h1").textContent
var splittedText=h1Text.split("")
var clutter=""
splittedText.forEach(function(){
   clutter=clutter+"Hey"
})
console.log(clutter);

