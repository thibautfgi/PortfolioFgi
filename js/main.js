
const git = document.querySelector('buttonGit');



gitButton.addEventListener('mouseover', function() {
    // Add the new class when the button is hovered
    git.classList.add('hover-class');
});

gitButton.addEventListener('mouseout', function() {
    // Remove the new class when the hover ends
   git.classList.remove('hover-class');
});



document.addEventListener("DOMContentLoaded", function() {
    var myPortfolioButton = document.getElementById("myPortfolioButton");

    // Add a click event listener to the button
    myPortfolioButton.addEventListener("click", function() {
        // Define the URL you want to navigate to
        var portfolioLink = "https://www.craftz.dog/";

        // Navigate to the specified link
        window.location.href = portfolioLink;
    });
});
