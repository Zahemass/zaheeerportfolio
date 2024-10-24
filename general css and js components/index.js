// cursor animation
const cursor = document.querySelector(".cursor");
let timeout;

// follow cursor on mouse
document.addEventListener("mousemove", (e) => {
    let x = e.clientX; // Use clientX for viewport-relative positioning
    let y = e.clientY; // Use clientY for viewport-relative positioning

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // cursor effect on mouse stopped
    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 4000);
});

// cursor effect on mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});
