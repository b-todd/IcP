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


function toggleNav() {
  let navStatus = document.getElementById("Sidenav").className;
  console.log(navStatus)

  if (navStatus == "close") {
    console.log('we are going to open the nav');
    openNav();
    //document.getElementById("Sidenav").onclick = null;
  } else {
    console.log('we are going to close the nav');
    closeNav();
  }
}

function openNav() {
  console.log('opennav has been initiated');
  document.getElementById("Sidenav").classList.remove("close");
  document.body.style.marginLeft = "320px";
}
function closeNav() {
  console.log('closenav has been initiated');
  document.getElementById("Sidenav").classList.add("close");
  document.body.style.marginLeft = "60px";
}