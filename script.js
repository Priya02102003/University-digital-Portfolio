 // You can use JavaScript to dynamically create and manipulate the floating text element.
 const floatingText = document.querySelector('.floating-text');

 // Example: Change the content of the floating text.
 setTimeout(() => {
     floatingText.textContent }, 2000);


 const bumpingText = document.getElementById('bumpingText');

 bumpingText.addEventListener('click', () => {
     // Apply a transform to create the bump effect.
     bumpingText.style.transform = 'translateY(-20px)';
     
     // After a short delay, reset the transform to its original state.
     setTimeout(() => {
         bumpingText.style.transform = 'translateY(0)';
     }, 200);
 });

 const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("myModal");

openModalButton.addEventListener("click", function() {
    modal.style.display = "block";
});

closeModalButton.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

