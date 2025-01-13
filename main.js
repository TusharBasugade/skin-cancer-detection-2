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
document.getElementById('furthermorebtn').addEventListener('click', function() {
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


//Footer 
// Add simple button click animation
// Add button click effects
document.querySelectorAll('.cta-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        // Add a temporary clicked effect
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 150);

        // Specific actions based on button type
        if (this.classList.contains('learn-more-btn')) {
            alert('Learn more about our 3D body photography technology!');
        } else if (this.classList.contains('contact-us-btn')) {
            alert('Contact us for more information. Your health is our priority!');
        }
    });
});

// Add button click effect for "Contact Us"
const contactButton = document.querySelector('.contact-us-btn');
contactButton.addEventListener('click', function() {
    alert('Thank you for reaching out! We will get back to you shortly.');
    this.style.backgroundColor = '#2ecc71'; // Change to a green color to show success
});
// Add button click effect and subscription logic
document.querySelector('.subscribe-btn').addEventListener('click', function() {
    // Add a temporary clicked effect
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 150);

    // Show subscription alert
    alert('Thank you for subscribing to our newsletter! Stay tuned for the latest updates.');
});
// Add click effect for quick links
document.querySelectorAll('.quick-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action for demo
        alert(`You clicked on: ${this.textContent}`);
    });
});


