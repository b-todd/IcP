function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}


//Making a function that will toggle the menu based on the device width
function myFunction(x) {
     if (x.matches) { // If media query matches
       document.body.style.backgroundColor = "yellow";
       closeNav();
     } else {
       document.body.style.backgroundColor = "pink";
       closeNav();
     }
   }
   
   // Create a MediaQueryList object
   var x = window.matchMedia("(max-width: 700px)")
   
   // Call listener function at run time
   myFunction(x);
   
   // Attach listener function on state changes
   x.addEventListener("change", function() {
     myFunction(x);
   });




function toggleNav(Sidenav) {
     var Sidenavwidth;

     Sidenavwidth = document.getElementById("Sidenav").style.width;
     if (Sidenavwidth >= 120) {
          closeNav();
     } else {
          openNav();
     }
}

function openNav() {
     document.getElementById("Sidenav").style.width = "320px";
     document.body.style.marginLeft = "320px";

     document.getElementById("navtitle").style.display = "flex";
   }
   
   /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
   function closeNav() {
     document.getElementById("Sidenav").style.width = "0";
     document.body.style.marginLeft = "50px";

     document.getElementById("main").style.marginLeft = "50px";
   }