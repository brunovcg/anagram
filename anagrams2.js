// ---------------Functions --------------------------

function alphabetize(a) {
  return a.toLowerCase().split("").sort().join("").trim();
}

  // conta as elementos de um array mostrando o resultado de cada como porpriedade e valor de um objeto
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

  // pega um objeto e transforma num array colocando as keys como elemento pela quantidade de vezes de seu valor
function arrayrize(obj) {

  let novoArray = []

  for (let s = 0; s < Object.keys(obj).length; s++ ){
  
    for (let t = 0 ; t < Object.values(obj)[s] ;t++) {
  
      novoArray.push(Object.keys(obj)[s])
    }
}
  return novoArray
}

// compara se o objeto(mainObj) contem no objeto(testObj)
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


// subtrai os values das keys do mainObj dos que tiver no subtObj
function objSubtract(mainObj,subtObj) {

  let output = {}

  for (let m = 0; m < Object.keys(mainObj).length ; m++) {

    if (subtObj[Object.keys(mainObj)[m]] != undefined && mainObj[Object.keys(mainObj)[m]] != undefined) {
        output[Object.keys(mainObj)[m]] = mainObj[Object.keys(mainObj)[m]] -  subtObj[Object.keys(mainObj)[m]]}


    if (mainObj[Object.keys(mainObj)[m]] != undefined && subtObj[Object.keys(mainObj)[m]] == undefined) {
        output[Object.keys(mainObj)[m]] = mainObj[Object.keys(mainObj)[m]]

    }

}

  return output

} 


// Retorna um novo objeto apenas com os arrays de um objeto que não está vazio
function objClean(objt) {

  let output = {}

  for (let x =0; x < Object.keys(objt).length; x++) {

  if (objt[Object.keys(objt)[x]] != "") {output[Object.keys(objt)[x]] = objt[Object.keys(objt)[x]] }

}

  return output

} 

// Retorna um novo objeto apenas com os objetos de um objeto que não está vazio
function objInsideClean (objt) {

  function isEmpty(x) {
    for(let prop in x) {
        if(x.hasOwnProperty(prop))
            return false;
    }
    return true;
  }

  let output = {}

  for (let x =0; x < Object.keys(objt).length; x++) {
    
  if (isEmpty(objt[Object.keys(objt)[x]]) === false) {output[Object.keys(objt)[x]] = objt[Object.keys(objt)[x]] }

  }

  return output
  
}


function getAnagramsOf(x) {

  let array = []
  
  for (i=0 ; i < palavras.length; i++) {
  
    if (x === alphabetize(palavras[i])) {
  
     array.push((palavras[i]));
    }
  }

  return array
}

function postar1(localPrint,string1,string2 ) {

  let section = document.getElementById(localPrint)
  let div = document.createElement("p");
  section.appendChild(div)
  div.innerHTML = `${JSON.stringify(getAnagramsOf(string1))} + ${JSON.stringify(getAnagramsOf(string2))}`

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

  let objetoFinal = {}

 
  let testeArray = palavras

  
  let typedText =  document.getElementById("input1").value;

  let alphaText = alphabetize(typedText)

  let inputAlphaArray = alphabetize(typedText).split("")

  let objetoInput = objectize(inputAlphaArray)  

     
  for (let k = 0 ; k < testeArray.length; k++) {

    if (testeArray[k].length > 1 && testeArray[k].length < (alphaText.length-1)) {
          
    if (objCompare(objectize(typedText.split("")),objectize(testeArray[k].split("")))) {

      objetoFinal[testeArray[k]] = []
      
    }
   }
  }


  for (let b = 0 ; b < Object.keys(objetoFinal).length; b++) {

    
    let palavraSobra = arrayrize(objSubtract(objetoInput,objectize(Object.keys(objetoFinal)[b].split("")))).join("")

    let keySize = typedText.length-Object.keys(objetoFinal)[b].length


    for(let d = 0 ; d < testeArray.length ; d++){

      if (testeArray[d].length < keySize ) {
      
      if(palavraSobra == alphabetize(testeArray[d])) {

        objetoFinal[Object.keys(objetoFinal)[b]].push(testeArray[d])

      }
      }      
    }
}


  let objetoLimpo = objClean(objetoFinal)

  for (y = 0; y < Object.keys(objetoLimpo).length ; y++ ) {

  let section = document.getElementById("bonus1box")
  let div = document.createElement("p");
  section.appendChild(div)
  div.innerHTML = `${Object.keys(objetoLimpo)[y]} + ${JSON.stringify(Object.values(objetoLimpo)[y])}`
    }     



}


   
  // ---------------BONUS 2 --------------------------------------------------------------------------------------------------------------------------


  let teste = { a: {b:[], c:[], d:[]},
              z: {y:[], w:[],r:[]},
              m: {}     
}



    
  document.getElementById("findButton2").onclick = function() {


    let objetoInicial = {}
 
    let testeArray = palavras
    
    let typedText =  document.getElementById("input2").value;

    let alphaText = alphabetize(typedText)
  
    let inputAlphaArray = alphabetize(typedText).split("")
  
    let objetoInput = objectize(inputAlphaArray) 
    

  // criando primeiro objeto
    

    for (let k = 0 ; k < testeArray.length; k++) {

      if (testeArray[k].length > 2  && testeArray[k].length <= (alphaText.length-4)) {


            
      if (objCompare(objectize(typedText.split("")),objectize(testeArray[k].split("")))) {

        objetoInicial[testeArray[k]] = {}
        
      }
    }
  }


 // criando segundo objeto (Objeto do Objeto)



 for (let b = 0 ; b < Object.keys(objetoInicial).length; b++) {

  let objSobra = objSubtract(objetoInput,objectize(Object.keys(objetoInicial)[b].split("")))


  let keySize = typedText.length-Object.keys(objetoInicial)[b].length
 

  // console.log(objetoInput)
  // console.log(objectize((Object.keys(objetoInicial)[b]).split("")))
  // console.log(objectize(sobraPalavra))
  

  for(let d = 0 ; d < testeArray.length ; d++){

    if (testeArray[d].length > 3 && testeArray[d].length < keySize) {

    
      if (objCompare(objSobra,objectize(testeArray[d].split("")))) {

        objetoInicial[Object.keys(objetoInicial)[b]][testeArray[d]] = []

      }
      
    }    
  }
 }


  let objLimpo = objInsideClean(objetoInicial);

  


  for (let t = 0; t < Object.keys(objLimpo).length ; t++){


    for (let z=0; z < Object.keys(objLimpo[Object.keys(objLimpo)[t]]).length; z++ ) {


      console.log( Object.keys(objLimpo)[t] + Object.keys(objLimpo[Object.keys(objLimpo)[t]])[z])          
      

  }



  // console.log(objLimpo)









}

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