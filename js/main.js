
const git = document.querySelector('buttonGit');



gitButton.addEventListener('mouseover', function() {
    // Add the new class when the button is hovered
    git.classList.add('hover-class');
});

gitButton.addEventListener('mouseout', function() {
    // Remove the new class when the hover ends
   git.classList.remove('hover-class');
});