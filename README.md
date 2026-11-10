# Word Whiz — Slice & Say

A small, browser-based word-learning game for kids. Swipe through a floating picture to slice it, hear the object’s name, and see the word appear. Pictures move gently, and only a couple appear at once to keep the game focused.

## Play

Open `index.html` in a modern web browser and select **Let’s play!** No installation, build step, or server is required.

- Use a mouse or touchscreen to swipe through a picture.
- Each successful slice earns 10 points, plays the word aloud, and adds it to the learned-words list.
- Choose **Everything**, **Fruit**, **Veggies**, or **At home** to practice a category.
- Each round lasts 60 seconds. Use **Sound on/off** to control spoken words, gentle background music, and slice sound effects.

Spoken words use the browser’s built-in speech synthesis. Voice availability and pronunciation depend on the browser and device. Background music and slice effects are generated in the browser with the Web Audio API; audio begins after starting a round.

## Word categories

- **Fruit:** apple, banana, orange, strawberry, grapes, pear, watermelon, pineapple
- **Veggies:** carrot, broccoli, corn, tomato, potato, pepper, cucumber, onion
- **At home:** cup, spoon, fork, knife, plate, bowl, pan, pot, teapot, book, clock, lamp, chair, key, teddy, towel, toothbrush

## Built with

The game is a single self-contained HTML file using CSS and vanilla JavaScript. It draws the falling pictures and swipe effects on a canvas; household objects use inline SVG illustrations.
