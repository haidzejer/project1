console.log('Scripts connected!');


var game = {
  player1: {},
  player2: {},
  deck: [
    {card: 'Ace Spades', value: 0},
    {card: 'King Spades', value: -1},
    {card: 'Queen Spades', value: -1},
    {card: 'Jack Spades', value: -1},
    {card: 'Ten Spades', value: -1},
    {card: 'Nine Spades', value: 0},
    {card: 'Eight Spades', value: 0},
    {card: 'Seven Spades', value: 0},
    {card: 'Six Spades', value: 1},
    {card: 'Five Spades', value: 1},
    {card: 'Four Spades', value: 1},
    {card: 'Three Spades', value: 1},
    {card: 'Two Spades', value: 1},
    {card: 'Ace Clubs', value: 0},
    {card: 'King Clubs', value: -1},
    {card: 'Queen Clubs', value: -1},
    {card: 'Jack Clubs', value: -1},
    {card: 'Ten Clubs', value: -1},
    {card: 'Nine Clubs', value: 0},
    {card: 'Eight Clubs', value: 0},
    {card: 'Seven Clubs', value: 0},
    {card: 'Six Clubs', value: 1},
    {card: 'Five Clubs', value: 1},
    {card: 'Four Clubs', value: 1},
    {card: 'Three Clubs', value: 1},
    {card: 'Two Clubs', value: 1},
    {card: 'Ace Hearts', value: 0},
    {card: 'King Hearts', value: -1},
    {card: 'Queen Hearts', value: -1},
    {card: 'Jack Hearts', value: -1},
    {card: 'Ten Hearts', value: -1},
    {card: 'Nine Hearts', value: 0},
    {card: 'Eight Hearts', value: 0},
    {card: 'Seven Hearts', value: 0},
    {card: 'Six Hearts', value: 1},
    {card: 'Five Hearts', value: 1},
    {card: 'Four Hearts', value: 1},
    {card: 'Three Hearts', value: 1},
    {card: 'Two Hearts', value: 1},
    {card: 'Ace Diamonds', value: 0},
    {card: 'King Diamonds', value: -1},
    {card: 'Queen Diamonds', value: -1},
    {card: 'Jack Diamonds', value: -1},
    {card: 'Ten Diamonds', value: -1},
    {card: 'Nine Diamonds', value: 0},
    {card: 'Eight Diamonds', value: 0},
    {card: 'Seven Diamonds', value: 0},
    {card: 'Six Diamonds', value: 1},
    {card: 'Five Diamonds', value: 1},
    {card: 'Four Diamonds', value: 1},
    {card: 'Three Diamonds', value: 1},
    {card: 'Two Diamonds', value: 1}
  ]
}



function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
shuffle(game.deck)
console.log([game.deck.pop(), game.deck.pop()])
console.log([game.deck.pop(), game.deck.pop()])
console.log(game.deck)
