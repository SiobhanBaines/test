let boxArray = document.getElementsByClassName('box');

function boxClicked(){
    for (let i =0; i < boxArray.length; i++){
        console.log(boxArray[i].style.backgroundColor);
    }

    if (colour === 'green')
    {
        box.style.backgroundColor = 'orange';
    }
}
boxArray.addEventListener('click', boxClicked);
