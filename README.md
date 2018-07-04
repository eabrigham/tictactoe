README for Tic-Tac-Toe project

Technologies used:
Primarily JavaScript. Also JQuery and minimal Sass.

I began the project by mirroring the Boggle solution. However after speaking to Johnathan, I realized the importance of checking the API documentation before writing to ensure my structure would be compatible. I proceeded to investigate the API documentation and write curl scripts.

In writing out by hand the JSON format expected by the API, I discovered that it mirrored an object, and decided to create a Game object. I further bulleted some of the features I thought the Game ought to have:
- Play needs to alternate between players and keep track of current player.
- Store state of the game board
- Convert board between 9-value array (if using other structure)
- Search board after each move for win
- toString generate JSON state of game

This week, I worked in parallel on the game structure and the API. Initially I tried to write the Auth API mostly from memory, using notes as references, as a way to cement my understanding. However I became mired in debugging most of Monday afternoon. I ended up shelving the API until Tuesday evening, when I copied it from lectures.

Tuesday morning I got into a groove and worked on implementing the Game object... until I realized both my board was no longer responsive, and since the previous night I had almost entirely neglected to git commit. Oops! I learned how to go back to an earlier git version. I also learned the hard way how important it is to commit frequently.

Tuesday afternoon I also started using the Pomodoro method, and discovered that it kept me productive. It also introduces a natural breaking point to git commit and to set a goal for the next 25-minute work session.

Wednesday I hit a wall when I realized I couldn't possibly finish the project in time. However, with some feedback from Nate and later Arjun I improved the implementation of my game object, got rid of the last hard-coding, and got the game engine to finally work. I was also able to plow through some basic UI messaging.

During the revision period I implemented the game API, which involved figuring out some errors in my understanding of the API documentation, and refactoring parts of my game engine.

In order to allow me to focus on our next unit, Ruby, I chose to first implement a 'minimum viability' project which meets all requirements. However, it has at least two shortcomings: 
1. It does not include any CSS styling. 
2. Forms are hidden using CSS when not needed, instead of being dynamically generated.

I plan to address these in a future release. I also plan to refactor my game engine so that the game object is no longer directly linked to the DOM, but rather those changes are handled in the events file. This would allow further future changes such as determining whether a game pulled from the API has been won, and thus allow me to display the total number of games X has won.


Possible future features:

Load an unfinished game
- Will need to get game board from API and instantiate a Game with those cells
- Replace hard-coding this.turns = 0 with calculating turns based on the state of the board.
- This feature is also prep for allowing two players to play remotely.

