AEW Watch-Along is a web-based game for fans of All Elite Wrestling (AEW) to play while watching AEW events. Users can create up to four teams, draft AEW wrestlers to their teams, and update their scores based on the outcome of each match. 

The game is built using a series of inputs, dropdown menus and buttons controlling various local storage keys and values. The local storage corresponds to an array made up of wrestler's names set to their team and point, which is generated in javascript. 

Each teams points are added up and displayed on the scoreboard, along with a list of the wrestlers, their team and their points. Along with the names being being searchable, if you click each category (Name, Points, and Team), the list will be sorted by that category. 

There is a countdown to each AEW event, as well as as list of most recent AEW youtube videos. The latter is done by incorporating the YouTube API with Express and Node. Currently this section cna only be accessed by running "node server.js" in the command line.

The CSS uses a gradient of colors matching those used in the official AEW logo at the top of the page to be visually appealing and while made with mobile in mind, the website looks great on desktop as well due to it's responsive design. 

This was made as the final project for Web Dev 2. The following features are from the list of which 3 total were required. 

FEATURES: 
1: Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app.

2: Analyze data that is stored in arrays, objects, sets or maps and display information about it in your app.

3: Analyze text and display useful information about it. (e.g. word/character count in an input field)

4: Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)

5: Retrieve data from a third-party API and use it to display something within your app.

6: Implement modern interactive UI features (e.g. table/data sorting, autocomplete, drag-and-drop, calendar-date-picker, etc)
