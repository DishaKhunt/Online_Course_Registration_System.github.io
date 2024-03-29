// Get all elements with the class 'explore-container'
const explore_containers = document.querySelectorAll(".explore-container");
const checkIcons = document.querySelectorAll(".check-icon");

explore_containers.forEach((explore_container, index) => {
    // Add a click event listener to each explore-container element
    explore_container.addEventListener('click', () => {
        // Toggle the 'active' class on each explore-container element
        explore_container.classList.toggle('active');
        
        // Toggle the 'active' class on the corresponding check-icon element
        checkIcons[index].classList.toggle('active');
    });
});