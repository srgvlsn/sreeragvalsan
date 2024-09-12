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
}
function closeMenu()
{
  sidemenu.style.right ="-250px";
}