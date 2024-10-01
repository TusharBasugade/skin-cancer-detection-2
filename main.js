// navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});

// changing search icon image on window resize
const searchIconImg = document.querySelector('.search-icon img');
const winSize = window.matchMedia("(min-width: 1200px)");
winSize.addListener(changeSearchIcon);
changeSearchIcon();

function changeSearchIcon() {
    if (winSize.matches) {
        searchIconImg.src = "images/search-icon.png";
    } else {
        searchIconImg.src = "images/search-icon-dark.png";
    }
}

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// toggle button for additional info
document.getElementById('furthermorebtn').addEventListener('dblclick', function() {
    const additionalInfo = document.getElementById('additionalInfo');
    if (additionalInfo.style.display === 'none') {
        additionalInfo.style.display = 'block'; 
        this.textContent = 'LESS'; 
    } else {
        additionalInfo.style.display = 'none'; 
        this.textContent = 'FURTHERMORE'; 
    }
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("learnMoreBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on the close button (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function toggleDetails(element) {
    element.classList.toggle('active');
}