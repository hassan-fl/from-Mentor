window.onload = ()=>{
    if(document.body.clientWidth > '620'){
        document.querySelector('.rside').innerHTML =  '<img src="./images/image-hero-desktop.png" alt="">'
    }else{
        document.querySelector('.rside').innerHTML =  '<img src="./images/image-hero-mobile.png" alt="">'
    }
}
window.onresize = ()=>{
    if(document.body.clientWidth > '620'){
        document.querySelector('.rside').innerHTML =  '<img src="./images/image-hero-desktop.png" alt="">'
    }else{
        document.querySelector('.rside').innerHTML =  '<img src="./images/image-hero-mobile.png" alt="">'
    }
}


let pressed = false;
// window.event.cancelBubble = true
document.addEventListener("click",function(e){
    if (e.target.className !== "clicker") return;
    if(!pressed){
        e.target.children[0].innerHTML = '<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>';
        setTimeout(()=>{
            e.target.nextElementSibling.style.display = "grid"
        },100)
        pressed = true
    }else{
        e.target.children[0].innerHTML = '<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>';
        setTimeout(()=>{
            e.target.nextElementSibling.style.display = "none"
        },100)
        pressed = false
    }
})

document.addEventListener("click", function(e){
    // console.log(e.target)
    if(e.target.className == "open"){
        document.body.style.setProperty('--trans','0%')
        document.querySelector(".trans").style.transform = 'translateX(0%)';
    }else if(e.target.className == "close"){
        document.querySelector(".trans").style.transform = 'translateX(100%)';
        document.body.style.setProperty('--trans','100%')
        document.querySelector(".trans > .addit").remove()
    }else{
        return;
    }
})