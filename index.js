let testA = document.getElementsByClassName('box')[0];
let testB = document.getElementsByClassName('box')[1];
let testC = document.getElementsByClassName('box')[2];
let testD = document.getElementsByClassName('box')[3];
let testE = document.getElementsByClassName('box')[4];
let testF = document.getElementsByClassName('box')[5];

function boxClicked(){
    let boxArray = document.getElementsByClassName('box');
    //console.log(event);
    console.log(boxArray);
    console.log(testA.innerHTML);

    let colour = box.style.backgroundColor;
    console.log(colour);
    if (colour === 'green')
    {
        box.style.backgroundColor = 'orange';
    }
}
testA.addEventListener('click', boxClicked);
testB.addEventListener('click', boxClicked);
testC.addEventListener('click', boxClicked);
testD.addEventListener('click', boxClicked);
testE.addEventListener('click', boxClicked);
testF.addEventListener('click', boxClicked);