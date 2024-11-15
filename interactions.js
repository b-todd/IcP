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
  document.getElementById(dataTable).style.display = "flex";
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

//These are the lists that will populate the Admin Portal Spaces

//FOR THE FUTURE, this list-creation could probably be consolidated to a shorter amount of code. Definitely revisit this feature once you have gained more experience with JS.

//THIS IS FOR THE REATILERS LIST POPULATING
var retailersListArray = [
  {'name':'Discount Drug Mart',
    'merchantID': '123456',
    'retailerCode': 'ANBIFF'
  },
  {'name':'Bobby Mart',
    'merchantID': '647447',
    'retailerCode': 'BMARKHJ'
  },
  {'name':'Wonderful Mart',
    'merchantID': '234574',
    'retailerCode': 'SWPEVIBNU'
  },
  {'name':'Martha Mart',
    'merchantID': '0008988',
    'retailerCode': 'SDFHJKL'
  },
  {'name':'No Daddy Mart',
    'merchantID': '684588',
    'retailerCode': 'SDVBHIOUP'
  },
  {'name':'Leaf Things',
    'merchantID': '574787',
    'retailerCode': 'SHJKL'
  },
  {'name':'Fresh & Favorite',
    'merchantID': '163636',
    'retailerCode': 'SBDJNK'
  },
  {'name':'Mama Judy Shopping Center',
    'merchantID': '423663',
    'retailerCode': 'SPBUIH'
  },
  {'name':'AllDrugs.com',
    'merchantID': '98438856',
    'retailerCode': 'QOPIGTU'
  },
  {'name':'Quensson Teall',
    'merchantID': '7824564',
    'retailerCode': 'SDFBMB'
  },
  {'name':'All Things Go',
    'merchantID': '234588',
    'retailerCode': 'WRPBUIOH'
  },
  {'name':'Zander Kart',
    'merchantID': '123462',
    'retailerCode': 'WRBNLKJ'
  },
  {'name':'Best Place ever',
    'merchantID': '0789645',
    'retailerCode': 'SKLDBJN'
  },
]


function buildRetailerTable(data){
var table = document.getElementById('retailerslistcontentTable')

for (var i = 0; i < data.length; i++){
  var row = `<tr>
          <td>${data[i].name}</td>
          <td>${data[i].merchantID}</td>
          <td>${data[i].retailerCode}</td>
        </tr>`
  table.innerHTML += row
}
}

//THIS IS FOR THE PROGRAMS LIST POPULATING
var programsListArray = [
  {'HPname':'HealthFirst',
    'HPnumber':'1234567890',
    'ProgramID': 'HealthPlusDiabetesProgram',
    'ProgramNumber': 'A12285'
  },
  {'HPname':'HealthFirst',
    'HPnumber':'7937535677',
    'ProgramID': '+healthwellness',
    'ProgramNumber': 'BM12285'
  },
  {'HPname':'HealthFirst',
    'HPnumber':'741852963',
    'ProgramID': 'Transportation+',
    'ProgramNumber': 'SWPE12285'
  },
  {'HPname':'BetterBeWellCo',
    'HPnumber':'147258369',
    'ProgramID': 'TNNewbornWellness',
    'ProgramNumber': 'SD12285'
  },
  {'HPname':'BetterBeWellCo',
    'HPnumber':'789456123',
    'ProgramID': 'HealthyFoods+',
    'ProgramNumber': 'SDVB12285'
  },
  {'HPname':'BetterBeWellCo',
    'HPnumber':'258369147',
    'ProgramID': 'MedicaidMix',
    'ProgramNumber': '12285'
  },
  {'HPname':'BetterBeWellCo',
    'HPnumber':'753869421',
    'ProgramID': 'BetterWellDefault',
    'ProgramNumber': 'S12285'
  },
  {'HPname':'Untra',
    'HPnumber':'397125864',
    'ProgramID': 'HealthyFoods',
    'ProgramNumber': 'S12285'
  },
  {'HPname':'Untra',
    'HPnumber':'286437915',
    'ProgramID': 'BetterNessLife',
    'retailerCode': 'QOPIGTU'
  },
  {'HPname':'Untra',
    'HPnumber':'864275319',
    'ProgramID': 'Medicone',
    'ProgramNumber': 'S12285'
  },
  {'HPname':'Blue Sword Red Fish',
    'HPnumber':'37583827833',
    'ProgramID': 'OTC Basic',
    'ProgramNumber': 'WRP12285'
  },
  {'HPname':'Blue Sword Red Fish',
    'HPnumber':'142536789',
    'ProgramID': 'Dental',
    'ProgramNumber': 'WR12285'
  },
  {'HPname':'Blue Sword Red Fish',
    'HPnumber':'142536987',
    'ProgramID': 'healthy foods and stuff',
    'ProgramNumber': 'SK12285'
  },
]

function buildProgramsTable(data){
var table = document.getElementById('programslistcontentTable')

for (var i = 0; i < data.length; i++){
  var row = `<tr>
          <td><p>${data[i].HPnumber}</p>
          <p>${data[i].HPname}</p>    
              </td>
          <td><p>${data[i].ProgramNumber}</p>
              <p>${data[i].ProgramID}</p>
              </td>

        </tr>`
  table.innerHTML += row
}
}

document.addEventListener("DOMContentLoaded", (event) => {
  buildRetailerTable(retailersListArray);
  buildProgramsTable(programsListArray);
  //openTab(event, 'programslist'); //temporary to view ProgList quickly
  console.log("DOM fully loaded and parsed");
});