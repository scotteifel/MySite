/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const myFunction = () =>
  document.getElementById("myDropdown").classList.toggle("show");

const hamburgerMenu = document.querySelector(".hamburger-menu");
// Close the dropdown if the user clicks outside of it
hamburgerMenu.addEventListener("onclick", function (event) {
  console.log("onclick ran");
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});
