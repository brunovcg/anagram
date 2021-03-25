const button = document.getElementById("findButton2");
button.addEventListener("click", function () {

  let typedText = document.getElementById("input1").value;
  

  let array =[];

  

  function getAnagramsOf(x) {

    function alphabetize(a) {
      return a.toLowerCase().split("").sort().join("").trim();
    }
  
    for (i=0 ; i < palavras.length; i++) {
    
      if (alphabetize(x) === alphabetize(palavras[i])) {
    
       array.push((palavras[i]));
      }
    }

    return array
  }
  
  let div = document.getElementById("principal");

  div.innerHTML = getAnagramsOf(typedText)
});

document.getElementById("zerar2").onclick = function() {

  let div = document.getElementById("principal");
  div.innerHTML = "";

}



    


































































