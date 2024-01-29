document.addEventListener("DOMContentLoaded", function () {
    // Get the header element
    var header = document.getElementById("stickyHeader");

    // Get the offset position of the header
    var headerOffset = header.offsetTop;

    // Add a scroll event listener
    window.addEventListener("scroll", function () {
        // Check if the scroll position is greater than or equal to the header offset
        if (window.pageYOffset >= headerOffset) {
            // Add a class to make the header sticky
            header.classList.add("sticky");
        } else {
            // Remove the class if the scroll position is less than the header offset
            header.classList.remove("sticky");
        }
    });
});
