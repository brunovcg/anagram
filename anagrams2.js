// ---------------Function Alpha --------------------------

function alphabetize(a) {
  return a.toLowerCase().split("").sort().join("").trim();
}

// ---------------TASK --------------------------

const objeto = {}

let teste =  ["alegria", "alergia", "coxinha", "oi","ocxinha","elargia"]

document.getElementById("findButtonTask").onclick = function() {
  
    for (i=0; i < teste.length ; i++) {

      if (teste[i].length >= 6) {
      
      objeto[alphabetize(teste[i])] = []    

    

    }

    }

    for (i =0 ; i < teste.length; i++) {

      if (teste[i].length >= 6) {

      objeto[alphabetize(teste[i])].push(teste[i])
    }
    }


    
    


  console.log(objeto)
  console.log(Object.keys(objeto).length)
  

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





