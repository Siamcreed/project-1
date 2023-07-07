# Project-1-tic-tac-toe

# Description

This project is a small game you can play with your friends or yourself. The project is a simple tic-tac toe game designed for quick and easy fun. The players are trying to get their character (either 'X' or 'O') to connect in 3 rows on the board.I completed the project around 5:00pm 03/04/2023. 

# Deployment link:

https://siamcreed.github.io/project-1/

I deployed the project on GITHUB and login information isn't required as the project repo is public.

# Access the code

To access the code go to the link below where you can access the files and you can clone the repo and look at the code. To see the HTML code it is named index.html. The CSS is the style.CSS and the Javascript is the Script.js.
https://github.com/Siamcreed/project-1 


# Timeframe and working team
 This was a solo group project that I was given 5 days to complete.

# Technologies 
The first technology I used was HTML to set up the front end of the pages. This is also mostly what you will see and it connects the three pages of technologies together. It sets up the header with the <h1> tag and the tabs in <div> so I can start programming the game along with the reset button in the <button> tag and I place them in classes so I can access them. I also added the google fonts link.

The second technology I used was the CSS. CSS is used to style the page since html looks boring. I used the CSS to arrange the tabs in the table <div> and change the background colour. I also style the reset button with the css. So the css was used for the front end.

The last technology I used was Javascript that was used for the front end interaction such as the tabs changing from 'X' to 'O' and using a queryselector to manipulate the DOM. Using the Java script I set the win conditions and also called the tag classes and id's with the variable. Most of the animation is also done by the Java script.

# Brief
Without a starter codebase, create a web application from scratch.
Make use of your programming knowledge to figure out the rules of a straightforward game like tic tac toe.
Split your application's HTML, CSS, and JavaScript files.

Create an application in accordance with guidelines provided by someone else.
Create a dynamic game where two players can engage in competition from the same computer.
Create a README.md file to provide a description of your software to the public.


# Requirements
Display a gaming board rendered in the browser
Alternate turning between X and O. (or whichever markers you select)
If a player receives three consecutive victories, indicate which side won visually; if neither player wins, indicate a draw.

Add distinct HTML, CSS, and JavaScript files.
Adhere to the DRY (Don't Repeat Yourself) and KISS (Keep It Simple, Stupid) principals.
Use JavaScript to manipulate the DOM.
Launch your game online so that everyone can play it.
Semantic markup is used in HTML and CSS (adhere to best practices)
Having code that is properly structured and commented


# User stories
As a user I expect to be able to join and play immediately.
As a user I expect to be able to play with my friend.
As a user I expect to be notified if I win or the opponent wins.
As a user I expect to be able to retry after a win or loss.
As a user I expect my score and opponent score to be recorded.

#Build 
First things first: I wanted to implement the holy grail layout and practise utilising Flexbox with very basic content because I was less confident in that area. In order to have a visual foundation to build upon, I created the fundamental board layout utilising a Grid framework. 

To keep track of many pieces of information without creating numerous distinct variables and to practise using modular imports, I created classes for players and the game itself (Scoreboard). Mild diversion, I spent the evening designing and making my own floral typeface because I wanted my game to have distinctive icons. I focused my efforts on the game.js file while importing more helpful classes and functions. 
In order to continue with the MVP game logic without spending too much effort on player optimisation, I automatically allocated players 1 and 2 to the game. In order to continue without having to deal with the game outcome logic, I first built code to ensure that player 1 wins every time. 
I used class="empty" to make it possible to just click on empty squares. This helped me later since I could apply hover effects to squares that were only empty. I allowed myself plenty of time to work through the game outcome logic because it was frustrating other players more on challenges below!

 After completing the MVP requirements, I added a retry button. I validated my code using a number of validators to look for problems that I hadn't found throughout my own testing. HTML: learned that some tags automatically close, that h1 should only occur once per page, and that modular JavaScript automatically defers. CSS: Fixed a unit shortage in the grid-template layout. 

Accessibility: I utilised buttons instead of labels for the game squares so that screen readers could distinguish between the buttons.


# Challenges 
I had a lot of challenges adding the retry button because I found it difficult to reset the game and it played like usual after that. I did eventually add it but it had some bugs and it cleared the board instead of resetting the game.

function restart() {
    spaces.fill(null)
// This null part is to remove any items within the tabs.
    tabs.forEach( tab => {
        tab.innerText = ''
        tab.style.backgroundColor=''  
    })

    playerText.innerHTML = 'Tic Tac Toe'
    
}
Sadly I was not able to fix the bug. 

The other challenge I had was getting the game logic to work on the web. It worked perfectly on websites such as codepen but the problem was I didn’t add a script defer and codepen takes care of that.

# Wins
The code works and the game does the basic things. The code can generate the tile and has the game logic for the winning, losing and draw conditions so it works properly. It looks good and has a fun atmosphere which is thanks to the styling. And the game has infinite replayability and little bugs.

# Improvements
-Score boards 
-Better styling
-Better retry button

# Bugs
The retry button only works if no one has won. And it doesn't reset the turn.

# Learning points
*I learned HTML structure, CSS styling, Javascript event handling, game logic and algorithms and Dom manipulation.
