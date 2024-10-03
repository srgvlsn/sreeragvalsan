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