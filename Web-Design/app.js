function clickToButton() {
    let link = document.getElementsByClassName('nav-links');
    for(let i = 0; i < link.length; i++){
        link[i].classList.toggle('disapear');
    }
}