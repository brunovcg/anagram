// ---------------Function Alpha --------------------------

function alphabetize(a) {
  return a.toLowerCase().split("").sort().join("").trim();
}

// ---------------TASK --------------------------

const objeto = {}

let array =[]

let teste =  ["aeiouz", "eaiouz","alegria","eaoiuz", "alergia", "coxinha", "oi","ocxinha","elargia", "ahnixoc"]

document.getElementById("findButtonTask").onclick = function() {
  
    for (i=0; i < palavras.length ; i++) {

      if (palavras[i].length >= 6) {
      
      objeto[alphabetize(palavras[i])] = []    
    
    }

    }

    for (i =0 ; i < palavras.length; i++) {

      if (palavras[i].length >= 6) {

      objeto[alphabetize(palavras[i])].push(palavras[i])

    }
    }

    array = Object.values(objeto)
    
    function getSetsOfFiveAnagrams() {
    

    for (i=0 ; i <array.length ; i++) {
    
      if (array[i].length >= 5) {

        let section = document.getElementById("taskbox")
        let div = document.createElement("p");
        section.appendChild(div)
        div.innerHTML = JSON.stringify(array[i])
        
    }}


    } getSetsOfFiveAnagrams()

  

}   
  

   
  
  
  


  







// ---------------RESETS-------------------------------------

document.getElementById("zerarTask").onclick = function() {

  let div = document.getElementById("taskbox");
  div.innerHTML = "";

}

document.getElementById("zerar1").onclick = function() {

  let div = document.getElementById("bonus1box");
  div.innerHTML = "";
}

document.getElementById("zerar2").onclick = function() {

  let div = document.getElementById("bonus2box");
  div.innerHTML = "";

}





