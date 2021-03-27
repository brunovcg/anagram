// ---------------Functions --------------------------

function alphabetize(a) {
  return a.toLowerCase().split("").sort().join("").trim();
}

function objectize(array) {

  const objetoTyped = {}

  for (let z=0; z < array.length ; z++) {

    objetoTyped[array[z]] = {};
    }

  for (let w=0; w < array.length; w++){

  let filtro =  array.filter((x)=> x==array[w])

  objetoTyped[array[w]] = filtro.length;
  }
  
  return objetoTyped
}

function arrayrize(obj) {

  let novoArray = []

  for (let s = 0; s < Object.keys(obj).length; s++ ){
  
    for (let t = 0 ; t < Object.values(obj)[s] ;t++) {
  
      novoArray.push(Object.keys(obj)[s])
    }
}
  return novoArray
}

function objCompare(mainObj,testObj) { 

  let verify = false
  let count = 0

    for (let m = 0; m < Object.keys(testObj).length ; m++) {

      if (mainObj[Object.keys(testObj)[m]] >= testObj[Object.keys(testObj)[m]]) {

        count ++
       }
    }

    if (count == Object.keys(testObj).length) {verify = true}

  return verify

}

function objSubtract(mainObj,subtObj) {

  let output = mainObj

  for (let m = 0; m < Object.keys(subtObj).length ; m++) {

    if (mainObj[Object.keys(subtObj)[m]] != undefined) {

     output[Object.keys(subtObj)[m]] = mainObj[Object.keys(subtObj)[m]] -  subtObj[Object.keys(subtObj)[m]]
    
  }}

  return output

} 



// ---------------TASK --------------------------



document.getElementById("findButtonTask").onclick = function() {
  
  const objeto = {}

  let array =[]

    for (i=0; i < palavras.length ; i++) {

      if (palavras[i].length >= 6) {
      
      objeto[alphabetize(palavras[i])] = []    
    
      }

    }

    for (let i =0 ; i < palavras.length; i++) {

      if (palavras[i].length >= 6) {

      objeto[alphabetize(palavras[i])].push(palavras[i])

      }
    }

    array = Object.values(objeto)
    
    function getSetsOfFiveAnagrams() {
    

      for (let i=0 ; i <array.length ; i++) {
      
        if (array[i].length >= 5) {

          let section = document.getElementById("taskbox")
          let div = document.createElement("p");
          section.appendChild(div)
          div.innerHTML = JSON.stringify(array[i])
          
        }}


      } getSetsOfFiveAnagrams()

  
}   
  

// ---------------BONUS 1 --------------------------


document.getElementById("findButton1").onclick = function() {

  const objetoFinal = {}

  // let array =[]

  let testeInput = "moto rua amanha";

  let testeArray =  ["moto", "rua", "amanha", "dia", "hoje", "sim", "nao", "ok", "alfa"]

  let typedText = testeInput
    // document.getElementById("input1").value;
  let arrayText = alphabetize(typedText).split("")

  let objetoInput = objectize(arrayText)  

  
  // console.log(objetoInput)


    for (let k = 0 ; k < testeArray.length; k++) {

      let objetoCompare = objectize(testeArray[k].split(""));

      // console.log(objetoCompare)

          
      for (let b = 0 ; b < testeArray[k].length ; b++) {

        // console.log(k)

        // console.log(Object.keys(objetoCompare)[b])     
        

      // if (objetoInput[Object.keys(objetoInput)[0]] >= objetoCompare[testeArray[k].split("")[b]]) {}
      
    }

    }

}

    
    

  



    

  // ---------------BONUS 2 --------------------------
    







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