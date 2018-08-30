# week9_Beat_the_AI

# Game process and componenet hierarchy
## Step 1: phase 1 (home page)
_ The palyer chooces the symbol and the game mode
. Game component folder inside component folder:
1. Header
   . component folder:
     _ gameStart (functionates accprding to the chosen symbol and mode)
   . logic folder:
     _ Hardmode.js
2. turnLabel priniting player's turn message(by default the firts player is the humanPlayer)

## step 2: phase 2 (game page)
_ Filling the grids:
. Game Component folder inside component folder:
1. grid conatiner.js
2. grid items.js
 --> filling the array inside gameBody.js
  . logic folder:
    _ aiTurn.js (to switch turns)
  . components folder
    _ app.js to calculate results
    
## Step 3: phase 3 (results printing page) 
_ Printing winning message:
 . logic folder:
 1. winnig.js 
 . components:
 2. gameEnd
 3. app.js
--> changed to phase 3  


# Home page
/home/suha/Pictures/Screenshot from 2018-08-30 09-10-29.png
