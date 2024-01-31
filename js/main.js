const myImgTest = document.getElementById("myImg");
const majtxt = document.querySelector('myTxtMaj'); // Assuming myTxtMaj is an element with this tag
const txt = document.querySelector('myTxt'); // Assuming myTxt is an element with this tag

const git = document.querySelector('buttonGit');

function updateStyles() {
    const thresholdWidth = 1000; // in px

    if (window.innerWidth < thresholdWidth) {
        majtxt.style.fontSize = "24px";
        txt.style.fontSize = "16px";

        myImgTest.style.width = "100px";
        myImgTest.style.height = "100px";

        myImgTest.style.marginleft = "100px";

    } else {
        myImgTest.style.width = "125px";
        myImgTest.style.height = "125px";

        majtxt.style.fontSize = "36px";
        txt.style.fontSize = "20px";
    }
}

// Call the function on page load
updateStyles();

// Add the event listener for window resize
window.addEventListener("resize", updateStyles)

gitButton.addEventListener('mouseover', function() {
    // Add the new class when the button is hovered
    git.classList.add('hover-class');
});

gitButton.addEventListener('mouseout', function() {
    // Remove the new class when the hover ends
   git.classList.remove('hover-class');
});