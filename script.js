
//Variables//////////////////////////////////////////////////////////////
var wrestlers =
[
  {
    "Name": "Adam Cole",
    "Points": parseInt(localStorage.getItem("adacolpoints")),
    "Team": localStorage.getItem("adacolteam")
  },{
    "Name": "Adam Paige",
    "Points": parseInt(localStorage.getItem("adapaipoints")),
    "Team": localStorage.getItem("adapaiteam")
  },{
    "Name": "Alex Reynolds",
    "Points": parseInt(localStorage.getItem("alereypoints")),
    "Team": localStorage.getItem("alereyteam")
  },{
    "Name": "Anthony Bowens",
    "Points": parseInt(localStorage.getItem("antbowpoints")),
    "Team": localStorage.getItem("antbowteam")
  },{
    "Name": "Austin Gunn",
    "Points": parseInt(localStorage.getItem("ausgunpoints")),
    "Team": localStorage.getItem("ausgunteam")
  },{
    "Name": "Brodie King",
    "Points": parseInt(localStorage.getItem("brokinpoints")),
    "Team": localStorage.getItem("brokinteam")
  },{
    "Name": "Britt Baker",
    "Points": parseInt(localStorage.getItem("bribakpoints")),
    "Team": localStorage.getItem("bribakteam")
  },{
    "Name": "Bryan Danielson",
    "Points": parseInt(localStorage.getItem("brydanpoints")),
    "Team": localStorage.getItem("brydanteam")
  },{
    "Name": "Buddy Matthews",
    "Points": parseInt(localStorage.getItem("budmatpoints")),
    "Team": localStorage.getItem("budmatteam")
  },{
    "Name": "Cash Wheeler",
    "Points": parseInt(localStorage.getItem("caswhepoints")),
    "Team": localStorage.getItem("caswheteam")
  },{
    "Name": "Chuck Taylor",
    "Points": parseInt(localStorage.getItem("chutaypoints")),
    "Team": localStorage.getItem("chutayteam")
  },{
    "Name": "Claudio Castagonoli",
    "Points": parseInt(localStorage.getItem("clacaspoints")),
    "Team": localStorage.getItem("clacasteam")
  },{
    "Name": "Colten Gunn",
    "Points": parseInt(localStorage.getItem("colgunpoints")),
    "Team": localStorage.getItem("colgunteam")
  },{
    "Name": "Dax Harwood",
    "Points": parseInt(localStorage.getItem("daxharpoints")),
    "Team": localStorage.getItem("daxharteam")
  },{
    "Name": "Danhausen",
    "Points": parseInt(localStorage.getItem("danpoints")),
    "Team": localStorage.getItem("danteam")
  },{
    "Name": "Daniel Garcia",
    "Points": parseInt(localStorage.getItem("dangarpoints")),
    "Team": localStorage.getItem("dangarteam")
  },{
    "Name": "Darius Martin",
    "Points": parseInt(localStorage.getItem("darmarpoints")),
    "Team": localStorage.getItem("darmarteam")
  },{
    "Name": "Darby Allin",
    "Points": parseInt(localStorage.getItem("darallpoints")),
    "Team": localStorage.getItem("darallteam")
  },{
    "Name": "Evil Uno",
    "Points": parseInt(localStorage.getItem("eviunopoints")),
    "Team": localStorage.getItem("eviunolteam")
  },{
    "Name": "Ethan Page",
    "Points": parseInt(localStorage.getItem("ethpagpoints")),
    "Team": localStorage.getItem("ethpaglteam")
  },{
    "Name": "Hikaru Shida",
    "Points": parseInt(localStorage.getItem("hikshipoints")),
    "Team": localStorage.getItem("hikshilteam")
  },{
    "Name": "Hook",
    "Points": parseInt(localStorage.getItem("hoopoints")),
    "Team": localStorage.getItem("hooteam")
  },{
    "Name": "Jamie Hayter",
    "Points": parseInt(localStorage.getItem("jamhaypoints")),
    "Team": localStorage.getItem("jamhayteam")
  },{
    "Name": "Jay Lethal",
    "Points": parseInt(localStorage.getItem("jayletpoints")),
    "Team": localStorage.getItem("jayletteam")
  },{
    "Name": "Jade Cargill",
    "Points": parseInt(localStorage.getItem("jadcarpoints")),
    "Team": localStorage.getItem("jadcarteam")
  },{
    "Name": "Jeff Jarrett",
    "Points": parseInt(localStorage.getItem("jefjarpoints")),
    "Team": localStorage.getItem("jefjarteam")
  },{
    "Name": "John Silver",
    "Points": parseInt(localStorage.getItem("johsilpoints")),
    "Team": localStorage.getItem("johsilteam")
  },{
    "Name": "Jon Moxley",
    "Points": parseInt(localStorage.getItem("jonmoxpoints")),
    "Team": localStorage.getItem("jonmoxteam")
  },{
    "Name": "Jungle Boy",
    "Points": parseInt(localStorage.getItem("junboypoints")),
    "Team": localStorage.getItem("junboyteam")
  },{
    "Name": "Kenny Omega",
    "Points": parseInt(localStorage.getItem("kenomepoints")),
    "Team": localStorage.getItem("kenometeam")
  },{
    "Name": "Malakai Black",
    "Points": parseInt(localStorage.getItem("malblapoints")),
    "Team": localStorage.getItem("malbalteam")
  },{
    "Name": "Matt Jackson",
    "Points": parseInt(localStorage.getItem("matjacpoints")),
    "Team": localStorage.getItem("matjacteam")
  },{
    "Name": "Max Caster",
    "Points": parseInt(localStorage.getItem("maxcaspoints")),
    "Team": localStorage.getItem("maxcasteam")
  },{
    "Name": "MJF",
    "Points": parseInt(localStorage.getItem("mjfpoints")),
    "Team": localStorage.getItem("mjfteam")
  },{
    "Name": "Nayla Rose",
    "Points": parseInt(localStorage.getItem("nayrospoints")),
    "Team": localStorage.getItem("nayrosteam")
  },{
    "Name": "Nick Jackson",
    "Points": parseInt(localStorage.getItem("nicjacpoints")),
    "Team": localStorage.getItem("nicjacteam")
  },{
    "Name": "Orange Cassidy",
    "Points": parseInt(localStorage.getItem("oracaspoints")),
    "Team": localStorage.getItem("oracasteam")
  },{
    "Name": "Penta El Zero M",
    "Points": parseInt(localStorage.getItem("penelpoints")),
    "Team": localStorage.getItem("penelteam")
  },{
    "Name": "Penelope Ford",
    "Points": parseInt(localStorage.getItem("penforpoints")),
    "Team": localStorage.getItem("penforteam")
  },{
    "Name": "Powerhouse Hobbes",
    "Points": parseInt(localStorage.getItem("powhobpoints")),
    "Team": localStorage.getItem("powhobteam")
  },{
    "Name": "Rey Fénix",
    "Points": parseInt(localStorage.getItem("reyfénpoints")),
    "Team": localStorage.getItem("reyfénteam")
  },{
    "Name": "Ricky Starks",
    "Points": parseInt(localStorage.getItem("ricstafénpoints")),
    "Team": localStorage.getItem("ricstateam")
  },{
    "Name": "Riho",
    "Points": parseInt(localStorage.getItem("rihpoints")),
    "Team": localStorage.getItem("rihteam")
  },{
    "Name": "Ruby Soho",
    "Points": parseInt(localStorage.getItem("rubsohpoints")),
    "Team": localStorage.getItem("rubsohteam")
  },{
    "Name": "Rush",
    "Points": parseInt(localStorage.getItem("ruspoints")),
    "Team": localStorage.getItem("rusteam")
  },{
    "Name": "Sammy Guevara",
    "Points": parseInt(localStorage.getItem("samguepoints")),
    "Team": localStorage.getItem("samgueteam")
  },{
    "Name": "Saraya",
    "Points": parseInt(localStorage.getItem("sarpoints")),
    "Team": localStorage.getItem("sarteam")
  },{
    "Name": "Sting",
    "Points": parseInt(localStorage.getItem("stipoints")),
    "Team": localStorage.getItem("stiteam")
  },{
    "Name": "Stu Grayson",
    "Points": parseInt(localStorage.getItem("stugrepoints")),
    "Team": localStorage.getItem("stugreteam")
  },{
    "Name": "Tay Melo",
    "Points": parseInt(localStorage.getItem("taymelpoints")),
    "Team": localStorage.getItem("taymelteam")
  },{
    "Name": "Toni Storm",
    "Points": parseInt(localStorage.getItem("tonstopoints")),
    "Team": localStorage.getItem("tonstoteam")
  },{
    "Name": "Trent Beretta",
    "Points": parseInt(localStorage.getItem("treberpoints")),
    "Team": localStorage.getItem("treberteam")
  },{
    "Name": "Wheeler Yuta",
    "Points": parseInt(localStorage.getItem("wheyutpoints")),
    "Team": localStorage.getItem("wheyutteam")
  },{
    "Name": "Willow Nightingale",
    "Points": parseInt(localStorage.getItem("wilnigpoints")),
    "Team": localStorage.getItem("wilnigteam")
  },
];

const team1 = localStorage.getItem('team1name');
const team2 = localStorage.getItem('team2name');
const team3 = localStorage.getItem('team3name');
const team4 = localStorage.getItem('team4name');
var storedteams = [ team1, team2, team3, team4 ];
const teamNames = [localStorage.team1name, localStorage.team2name, localStorage.team3name, localStorage.team4name];

for (var i = 0; i < wrestlers.length; i++) {
  if (isNaN(wrestlers[i].Points)) {
    wrestlers[i].Points = 0;
  }
}

for (var i = 0; i < wrestlers.length; i++) {
  if (!wrestlers[i].Team) {
    wrestlers[i].Team = "Free Agent";
  }
}

if (typeof localStorage.team1name === "undefined") {
    localStorage.team1name = "";
} ;
if (typeof localStorage.team2name === "undefined") {
    localStorage.team2name = "";
} ;
if (typeof localStorage.team3name === "undefined") {
    localStorage.team3name = "";
} ;
if (typeof localStorage.team4name === "undefined") {
    localStorage.team4name = "";
} ;

//Clear Points///////////////////////////////////////////////////////////////////
function clearValue() {
  if (confirm("Are you sure you want to clear all saved data?")) {
    localStorage.clear();
    location.reload();
  }
}

function updateValue() {
  location.reload();    
}

//Name Teams///////////////////////////////////////////////////////////////////
const teamsContainer = document.getElementById("allTeams");

function displayTeams() {
  teamsContainer.innerHTML = "Teams:";

  for (let i = 1; i <= 4; i++) {
    const teamName = localStorage.getItem(`team${i}name`);

    if (teamName) {
      const teamElement = document.createElement("p");
      teamElement.textContent = teamName;
      teamsContainer.appendChild(teamElement);
    }
  }
  
  // display the teamsContainer
  teamsContainer.style.display = "block";
}

function getOption() {
  location.reload();
  const selectElement = document.querySelector('#select1');
  const output = selectElement.value;
  const inputVal = document.getElementById("nameOfTeam").value;

  localStorage.setItem(output, inputVal);

  for (const key in localStorage) {
    if (key.endsWith("team")) {
      const teamName = localStorage[key];

      let matchFound = false;
      for (const otherKey in localStorage) {
        if (otherKey.startsWith("team")) {
          if (localStorage[otherKey] === teamName) {
            matchFound = true;
            break;
          }
        }
      }

      if (!matchFound && teamName !== inputVal) {
        localStorage.setItem(key, inputVal);
      }
    }
  }

  displayTeams();
  teamsContainer.style.display = "block";

}




////////////////////////////////////////////////////////////////////////

function daysUntilDayOfWeek(dayOfWeek) {
  const today = new Date().getDay();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = days.indexOf(dayOfWeek);

  if (dayIndex < 0) {
    throw new Error("Invalid day of week: " + dayOfWeek);
  }

  if (dayIndex >= today) {
    return dayIndex - today;
  } else {
    return 7 - (today - dayIndex);
  }
}

const today = new Date();
const dayOfWeek = today.getDay();
const targetDate = new Date('2023-5-28');

const timeDiff = targetDate.getTime() - today.getTime();

const days = Math.ceil(timeDiff / (1000 * 3600 * 24));


if (dayOfWeek === 2) { // Tuesday
  document.getElementById("dynamite").innerHTML = "AEW Dynamite is on tomorrow!";
} else if (dayOfWeek === 3) { // Wednesday
  document.getElementById("dynamite").innerHTML = "It's Wednesday, you know what that means!";
} else {
  const daysUntilWednesday = daysUntilDayOfWeek("Wednesday");
  document.getElementById("dynamite").innerHTML = "There are " + daysUntilWednesday + " days until AEW Dynamite!";
}

if (dayOfWeek === 4) { 
  document.getElementById("rampage").innerHTML = "AEW Rampage is on tomorrow!";
} else if (dayOfWeek === 5) { 
  document.getElementById("dynamite").innerHTML = "AEW Rampage is on tonight!";
} else {
  const daysUntilWednesday = daysUntilDayOfWeek("Friday");
  document.getElementById("dynamite").innerHTML = "There are " + daysUntilWednesday + " days until AEW Rampge!";
}

document.getElementById("ppv").innerHTML = "There are " + days + " days until AEW Double or Nothing on PPV!"


//Youtube API/////////////////////////////////////////////////

// fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFN4JkGP_bVhAdBsoV9xftA&maxResults=5&key=AIzaSyDr12JkOMgMnB-KjbN2_n5HZ_NRRcjEEKg")
// .then((result)=>{
//  return result.json()
// }).then((data)=>{
//  let videos = data.items
//  let videoContainer = document.querySelector(".youtube-container")
//  for (video of videos){
//   console.log(video.snippet.thumbnails.high.url)
//   videoContainer.innerHTML += 
//   `<center><p><img src=${video.snippet.thumbnails.default.url}><br>
//   ${video.snippet.title}<p></center`
// }});n 
///////////////////////////////////////////////////////////////////
const dropdown = document.getElementById("wrestlerDropdown");
const button = document.getElementById("addButton");
const subbutton = document.getElementById("subButton");

wrestlers.forEach(wrestler => {
  const option = document.createElement("option");
  option.text = wrestler.Name;
  dropdown.add(option);
});

const pointsSpan = document.getElementById("points");

button.addEventListener("click", () => {
  const selectedWrestler = wrestlers.find(wrestler => wrestler.Name === dropdown.value);
  selectedWrestler.Points++;
  // Update the localStorage value for the selected wrestler's points
  const nameParts = selectedWrestler.Name.split(" ");
  let firstName = nameParts[0].substring(0, 3).toLowerCase();
  let lastName = nameParts.length > 1 ? nameParts[1].substring(0, 3).toLowerCase() : '';
  localStorage.setItem(`${firstName}${lastName}points`, selectedWrestler.Points);
  pointsSpan.textContent = `${selectedWrestler.Points}`;
});

subbutton.addEventListener("click", () => {
  const selectedWrestler = wrestlers.find(wrestler => wrestler.Name === dropdown.value);
  selectedWrestler.Points--;
  // Update the localStorage value for the selected wrestler's points
  const nameParts = selectedWrestler.Name.split(" ");
  let firstName = nameParts[0].substring(0, 3).toLowerCase();
  let lastName = nameParts.length > 1 ? nameParts[1].substring(0, 3).toLowerCase() : '';
  localStorage.setItem(`${firstName}${lastName}points`, selectedWrestler.Points);
  pointsSpan.textContent = `${selectedWrestler.Points}`;
});

const wrestlerDropdown = document.getElementById("wrestlerDropdown");
const teamdropdown = document.getElementById("teamdropdown");

// add event listener to teamdropdown
teamdropdown.addEventListener("change", () => {
  const wrestler = wrestlers.find(wrestler => wrestler.Name === dropdown.value);
  if (wrestler) {
  wrestler.Team = teamdropdown.value;
  const selectedWrestler = wrestlers.find(wrestler => wrestler.Name === dropdown.value);
  const nameParts = selectedWrestler.Name.split(" ");
  let firstName = nameParts[0].substring(0, 3).toLowerCase();
  let lastName = nameParts.length > 1 ? nameParts[1].substring(0, 3).toLowerCase() : '';
  localStorage.setItem(`${firstName}${lastName}team`, selectedWrestler.Team);
}
});

// Create options for non-null or non-empty array items
for(var i = 0; i < storedteams.length; i++) {
  var opt = storedteams[i];
  if (opt) {
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    teamdropdown.appendChild(el);
  }
};

wrestlerDropdown.addEventListener("change", function() {
  // Get the selected wrestler from the dropdown
  const selectedWrestler = wrestlers.find(wrestler => wrestler.Name === wrestlerDropdown.value);
  
  // Update the points span with the selected wrestler's points
  pointsSpan.innerText = selectedWrestler ? selectedWrestler.Points : "";
});


///////////////////////////////////////////////////////////////////
const wrestlerInput = document.getElementById('wrestlerInput');
const wrestlerList = document.getElementById('wrestlerList');
const tableContainer = document.getElementById('tableContainer');

let currentSortDirection = 'asc'; // Initialize sort direction

// Display full table by default
const defaultTable = generateTable(wrestlers);
tableContainer.appendChild(defaultTable);

// Autocomplete search function
wrestlerInput.addEventListener('input', function() {
    const inputValue = this.value.toLowerCase();
    wrestlerList.innerHTML = '';

    const filteredWrestlers = wrestlers.filter(function(wrestler) {
        return wrestler.Name.toLowerCase().includes(inputValue);
    });

    filteredWrestlers.forEach(function(wrestler) {
        const li = document.createElement('li');
        li.textContent = wrestler.Name;
        wrestlerList.appendChild(li);
    });

    // Generate table with filtered data
    const filteredTable = generateTable(filteredWrestlers);
    tableContainer.innerHTML = '';
    tableContainer.appendChild(filteredTable);
});

function generateTable(data) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create header row
    const headerRow = document.createElement('tr');
    for (const property in data[0]) {
        const th = document.createElement('th');
        th.textContent = property;
        th.setAttribute('data-sort-direction', 'asc');
        th.addEventListener('click', function() {
            const column = this.textContent;
            const sortDirection = this.getAttribute('data-sort-direction');

            // Update current sort direction
            if (sortDirection === currentSortDirection) {
                currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                currentSortDirection = sortDirection;
            }

            let sortedData;
            if (currentSortDirection === 'asc') {
                sortedData = data.sort(function(a, b) {
                    return a[column] < b[column] ? 1 : -1;
                });
            } else {
                sortedData = data.sort(function(a, b) {
                    return a[column] > b[column] ? 1 : -1;
                });
            }

            // Update sort direction attribute
            this.setAttribute('data-sort-direction', currentSortDirection);

            const sortedTable = generateTable(sortedData);
            tableContainer.innerHTML = '';
            tableContainer.appendChild(sortedTable);
        });
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);

    // Create data rows
    data.forEach(function(item) {
        const row = document.createElement('tr');
        for (const property in item) {
            const cell = document.createElement('td');
            cell.textContent = item[property];
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}

document.getElementById("wrestlerList").style.display = "none";
//Scoreboard//////////////////////////////////////
const teamPoints = {};
if (localStorage.getItem("team1name")) {
  teamPoints[localStorage.getItem("team1name")] = 0;
}
if (localStorage.getItem("team2name")) {
  teamPoints[localStorage.getItem("team2name")] = 0;
}
if (localStorage.getItem("team3name")) {
  teamPoints[localStorage.getItem("team3name")] = 0;
}
if (localStorage.getItem("team4name")) {
  teamPoints[localStorage.getItem("team4name")] = 0;
}

for (const wrestler of wrestlers) {
  const { Team, Points } = wrestler;
  if (teamPoints.hasOwnProperty(Team)) {
    teamPoints[Team] += Points;
  }
}

// Create table for team points
const tableScoreboard = document.createElement("table");
const theadScoreboard = document.createElement("thead");
const tbodyScoreboard = document.createElement("tbody");

// Create header row
const headerRowScoreboard = document.createElement("tr");
const teamHeaderScoreboard = document.createElement("th");
const pointsHeaderScoreboard = document.createElement("th");
teamHeaderScoreboard.textContent = "Team";
pointsHeaderScoreboard.textContent = "Points";
headerRowScoreboard.appendChild(teamHeaderScoreboard);
headerRowScoreboard.appendChild(pointsHeaderScoreboard);
theadScoreboard.appendChild(headerRowScoreboard);

// Create data rows
for (const team in teamPoints) {
  if (teamPoints.hasOwnProperty(team) && team) {
    const teamTotal = teamPoints[team];
    const teamRow = document.createElement("tr");
    const teamCell = document.createElement("td");
    const pointsCell = document.createElement("td");
    teamCell.textContent = team;
    pointsCell.textContent = teamTotal;
    teamRow.appendChild(teamCell);
    teamRow.appendChild(pointsCell);
    tbodyScoreboard.appendChild(teamRow);
  }
}

tableScoreboard.appendChild(theadScoreboard);
tableScoreboard.appendChild(tbodyScoreboard);

const resultsDiv = document.getElementById("results");
if (Object.keys(teamPoints).length === 0) {
  const noScoreElement = document.createElement("div");
  noScoreElement.textContent = "No Score Yet";
  resultsDiv.appendChild(noScoreElement);
} else {
  resultsDiv.appendChild(tableScoreboard);
}

async function getThumbnails() {
  const response = await fetch('http://localhost:3000');
  const data = await response.text();
  document.getElementById('thumbnails').innerHTML = data;
}
getThumbnails();