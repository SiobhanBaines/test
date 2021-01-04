
/*let testA = document.getElementsByClassName('box')[0];
let testB = document.getElementsByClassName('box')[1];
let testC = document.getElementsByClassName('box')[2];
let testD = document.getElementsByClassName('box')[3];
let testE = document.getElementsByClassName('box')[4];
let testF = document.getElementsByClassName('box')[5];*/


/*console.log(testA.innerHTML);   

let boxArray = document.getElementsByClassName('box');
  */

let   testA = document.getElementById("testA")
function boxClicked(){

    console.log(testA);
    console.log(testA.style.backgroundColor);
  /*  console.log(boxArray);
    for (let i=0; i < boxArray.length; ++i){

        console.log('boxArray[i]',boxArray[i].style.backgroundColor);
        console.log('boxArray.namedItem',boxArray.namedItem('testA').style.backgroundColor);
        console.log('testA',testA); */
        
 
            if (testA.style.backgroundColor === 'green') {
            testA.style.backgroundColor = 'orange';

          /*  } else {
            testA.style.backgroundColor = 'green';*/
            }
          
  //  }
}


testA.addEventListener('click', e => {console.log(e)});
/*testB.addEventListener('click', boxClicked());
testC.addEventListener('click', boxClicked());
testD.addEventListener('click', boxClicked());
testE.addEventListener('click', boxClicked());
testF.addEventListener('click', boxClicked());*/