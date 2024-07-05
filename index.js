const bodyEl = document.querySelector("body");

// Function to create and animate the span element
function createAnimatedSpan(x, y) {
  const spanEl = document.createElement("span");
  spanEl.style.left = x + "px";
  spanEl.style.top = y + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
}

// Handle mouse movement
bodyEl.addEventListener("mousemove", (event) => {
  createAnimatedSpan(event.offsetX, event.offsetY);
});

// Handle touch movement
bodyEl.addEventListener("touchmove", (event) => {
  // Prevent the window from scrolling
  event.preventDefault();
  const touch = event.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;
  createAnimatedSpan(x, y);
}, { passive: false });