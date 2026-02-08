const navbar = document.querySelector("nav");
function handleScroll() // Function to handle scroll events
{
  if (!navbar) return;
  if (window.scrollY > 150) // Change threshold as needed 
  {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", handleScroll);

// About Tab Switching
const aboutSubtabsLinks = document.getElementsByClassName("about-subtabs-links");
const aboutSubtabsContents = document.getElementsByClassName("about-subtabs-contents");
function openTab(event, tabName) {
  if (!aboutSubtabsLinks.length || !aboutSubtabsContents.length) return;
  for (let link of aboutSubtabsLinks) {
    link.classList.remove("active-link");
  }
  for (let content of aboutSubtabsContents) {
    content.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  const targetTab = document.getElementById(tabName);
  if (targetTab) {
    targetTab.classList.add("active-tab");
  }
}

// Side Menu Control
const sidemenu = document.getElementById("sidemenu");
function openMenu() {
  if (sidemenu) {
    sidemenu.style.right = "0";
    document.addEventListener('click', closeMenuOnOutsideClick);
  }
}
function closeMenu() {
  if (sidemenu) {
    sidemenu.style.right = "-250px";
    document.removeEventListener('click', closeMenuOnOutsideClick);
  }
}
function closeMenuOnOutsideClick(event) {
  const burgerIcon = document.querySelector(".fa-burger");
  if (sidemenu && burgerIcon) {
    if (!sidemenu.contains(event.target) && !burgerIcon.contains(event.target)) {
      closeMenu();
    }
  }
}

// Global Copyright Alert
const copyrightIcon = document.getElementById("copyright-icon");
if (copyrightIcon) {
  copyrightIcon.addEventListener("click", function (event) {
    event.preventDefault();
    alert('This is a copyright notice! \nPlease check it out in Copyright document \nAccess it by clicking on the logo on the footer');
  });
}

// Scroll To Top Utility
const scrollToTopButton = document.getElementById("scrollToTop");
if (scrollToTopButton) {
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopButton.classList.add("visible");
    } else {
      scrollToTopButton.classList.remove("visible");
    }
  });

  scrollToTopButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Custom Context Menu
const contextMenu = document.getElementById("custom-context-menu");
const openNewTabOption = document.getElementById("open-new-tab");
let targetLink = null;
if (contextMenu) {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    contextMenu.style.display = "block";
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.style.top = `${event.pageY}px`;
    if (event.target.tagName === "A" || event.target.closest("a")) {
      targetLink = event.target.tagName === "A" ? event.target : event.target.closest("a");
      if (openNewTabOption) openNewTabOption.style.display = "block";
    } else {
      targetLink = null;
      if (openNewTabOption) openNewTabOption.style.display = "none";
    }
  });
}
document.addEventListener("click", () => {
  if (contextMenu) contextMenu.style.display = "none";
});

const backBtn = document.getElementById("back");
if (backBtn) {
  backBtn.addEventListener("click", () => window.history.back());
}

const forwardBtn = document.getElementById("forward");
if (forwardBtn) {
  forwardBtn.addEventListener("click", () => window.history.forward());
}

const reloadBtn = document.getElementById("reload");
if (reloadBtn) {
  reloadBtn.addEventListener("click", () => location.reload());
}

if (openNewTabOption) {
  openNewTabOption.addEventListener("click", () => {
    if (targetLink) window.open(targetLink.href, "_blank");
  });
}

// Contact Form Handler
const scriptURL = 'https://script.google.com/macros/s/AKfycbxk6Agu8HuxXOV-TUEXcW-_Pb3N_i0rpNmAq3oPEGK6jIwq_sCczDzlEyT7exQ39TbB/exec'
const form = document.forms['submit-to-google-sheet']
const messageDisplay = document.getElementById('message')
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
      .then(response => {
        if (messageDisplay) {
          messageDisplay.innerHTML = "Message Sent Successfully"
          setTimeout(() => {
            messageDisplay.innerHTML = ""
          }, 5000)
        }
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
}
