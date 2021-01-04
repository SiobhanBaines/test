function boxClicked(){
    //let box = boxArray.style.backgroundColor;
    console.log(this.style.backgroundColor);
    if (this.style.backgroundColor == 'green')
    {
        this.style.backgroundColor = 'orange';
    } else {
        this.style.backgroundColor = 'green'
    }
}

let box = document.getElementsByClassName('box');  

for (let i=0; i < box.length; i++) {  
   
    box[i].addEventListener('click', boxClicked);
}