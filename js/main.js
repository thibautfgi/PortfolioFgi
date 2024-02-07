
const git = document.querySelector('buttonGit');



gitButton.addEventListener('mouseover', function() {
    // Add the new class when the button is hovered
    git.classList.add('hover-class');
});

gitButton.addEventListener('mouseout', function() {
    // Remove the new class when the hover ends
   git.classList.remove('hover-class');
});


function downloadPdf() {
    var pdfUrl = '/tools/pdf/test.pdf';
    var a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'test.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


