function bgChanger() {
    if(this.scrollY > this.innerHeight / 2){
        document.body.classList.add("bg-active");
    }
    else{
        document.body.classList.remove("bg-active");
    }
}
window.addEventListener("scroll", bgChanger);




function changeToBlueColor(){
    document.getElementById("keep2").src = "images/old.jpg";

  }
  function changeToBlackColor(){
    document.getElementById("keep2").src = "images/old1.jpg";
  }


 
 

 