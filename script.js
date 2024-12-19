//
var navbar = document.querySelector("nav");
function handleScroll() // Function to handle scroll events
{
  if (window.scrollY > 150) // Change 50 to your desired scroll threshold 
  { 
    navbar.classList.add("scrolled"); // Add class when scrolled
  } 
  else 
  {
    navbar.classList.remove("scrolled"); // Remove class when at the top
  }
}
window.addEventListener("scroll", handleScroll); // Attach scroll event listener
//

//
var aboutSubtabsLinks = document.getElementsByClassName("about-subtabs-links");
var aboutSubtabsContents = document.getElementsByClassName("about-subtabs-contents");
function openTab(tabName)
{
  for(aboutSubtabsLink of aboutSubtabsLinks)
  {
    aboutSubtabsLink.classList.remove("active-link");
  }
  for(aboutSubtabsContent of aboutSubtabsContents)
  {
    aboutSubtabsContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabName).classList.add("active-tab");
}
//

//
var sidemenu = document.getElementById("sidemenu");
function openMenu()
{
  sidemenu.style.right ="0";
  document.addEventListener('click', closeMenuOnOutsideClick);
}
function closeMenu()
{
  sidemenu.style.right ="-250px";
  document.removeEventListener('click', closeMenuOnOutsideClick);
}
function closeMenuOnOutsideClick(event) 
{
  var burgerIcon = document.querySelector(".fa-burger"); // Adjust selector if needed
  if (!sidemenu.contains(event.target) && !burgerIcon.contains(event.target)) // Check if the clicked target is the sidemenu or burger icon
  {
    closeMenu(); // Close the menu if clicked outside
  }
}
//

//
var copyrightIcon = document.getElementById("copyright-icon");// Get the copyright icon element
copyrightIcon.addEventListener("click", function(event) // Add a click event listener to trigger the alert
{
  event.preventDefault(); // Prevent the default link behavior
  alert('This is a copyright notice! \nPlease check it out in Copyright document \nAccess it by clicking on the logo on the footer');
});
//

//
var scrollToTopButton = document.getElementById("scrollToTop"); // Get the scroll to top button
window.onscroll = function() // Show or hide the button based on scroll position 
{
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) 
  // {
  //   scrollToTopButton.style.display = "block"; // Show button
  // }
  // else                               //kept for previous usage reference
  // {
  //   scrollToTopButton.style.display = "none"; // Hide button
  // }
  {
    scrollToTopButton.classList.add("visible"); // Add 'visible' class to show the button smoothly
  } 
  else 
  {
    scrollToTopButton.classList.remove("visible"); // Remove 'visible' class to hide the button smoothly
  }
};
scrollToTopButton.addEventListener("click", function(event) // Scroll smoothly to the top when the button is clicked
{
  event.preventDefault(); // Prevent default link behavior
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
});
//

//
// document.addEventListener('contextmenu', function(event) 
// {
//   event.preventDefault(); // Prevent the default right-click context menu
//   // alert("Right-click is disabled on this site.");
// });
//

//
// JavaScript for custom context menu
// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault(); // Prevent default context menu
//   const contextMenu = document.getElementById("custom-context-menu");
//   contextMenu.style.display = "block";
//   contextMenu.style.left = `${e.pageX}px`;
//   contextMenu.style.top = `${e.pageY}px`;
// });
// document.addEventListener("click", function () {
//   const contextMenu = document.getElementById("custom-context-menu");
//   if (contextMenu.style.display === "block") {
//     contextMenu.style.display = "none";
//   }
// }); Kept for previous references
// 

// 
// const contextMenu = document.getElementById("custom-context-menu"); // Show custom context menu
// document.addEventListener("contextmenu", (event) => {
//   event.preventDefault(); // Prevent the default context menu
//   contextMenu.style.display = "block";
//   contextMenu.style.left = `${event.pageX}px`;
//   contextMenu.style.top = `${event.pageY}px`;
// });
// // Hide custom context menu on click
// document.addEventListener("click", () => {
//   contextMenu.style.display = "none";
// });
// // Handle custom context menu actions
// document.getElementById("back").addEventListener("click", () => {
//   window.history.back();
// });
// document.getElementById("forward").addEventListener("click", () => {
//   window.history.forward();
// });
// document.getElementById("reload").addEventListener("click", () => {
//   location.reload();
// });Kept for previous references
// 

//
const contextMenu = document.getElementById("custom-context-menu");
const openNewTabOption = document.getElementById("open-new-tab");
let targetLink = null; // To store the link being clicked
document.addEventListener("contextmenu", (event) => { // Show custom context menu
  event.preventDefault(); // Prevent the default context menu
  contextMenu.style.display = "block";
  contextMenu.style.left = `${event.pageX}px`;
  contextMenu.style.top = `${event.pageY}px`;
  // Check if the target is a link
  if (event.target.tagName === "A") {
    targetLink = event.target; // Store the link element
    openNewTabOption.style.display = "block"; // Show the option
  }
  else {
    targetLink = null; // Reset if not a link
    openNewTabOption.style.display = "none"; // Hide the option
  }
});
document.addEventListener("click", () => { // Hide custom context menu on click
  contextMenu.style.display = "none";
});
document.getElementById("back").addEventListener("click", () => { // Handle custom context menu actions
  window.history.back();
});
document.getElementById("forward").addEventListener("click", () => {
  window.history.forward();
});
document.getElementById("reload").addEventListener("click", () => {
  location.reload();
});
openNewTabOption.addEventListener("click", () => {
  if (targetLink) {
    window.open(targetLink.href, "_blank"); // Open the link in a new tab
  }
});
// 