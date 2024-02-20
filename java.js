  function generadorExcusa(){
      
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let whoindex=Math.floor(Math.random()*who.length)
    let whatndex=Math.floor(Math.random()*what.length)
    let actionndex=Math.floor(Math.random()*action.length)
    let whenindex=Math.floor(Math.random()*when.length)

    return who[whoindex]+" "+action[actionndex]+" "+what[whatndex]+" "+when[whenindex]
  }

  function imprimir(){
    let imprirExcusa=generadorExcusa()
    document.getElementById("excuse").innerHTML=imprirExcusa
  }

  

