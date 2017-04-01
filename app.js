console.log('Scripts connected!');


var game = {
  player1: {score: 0},
  player2: {score: 0},
  deck: [
    {card: 'images/Playing_Cards/PNG-cards-1.3/ace_of_spades.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/king_of_spades.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/queen_of_spades.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/jack_of_spades.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/10_of_spades.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/9_of_spades.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/8_of_spades.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/7_of_spades.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/6_of_spades.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/5_of_spades.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/4_of_spades.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/3_of_spades.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/2_of_spades.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/ace_of_clubs.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/king_of_clubs.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/queen_of_clubs.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/jack_of_clubs.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/10_of_clubs.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/9_of_clubs.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/8_of_clubs.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/7_of_clubs.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/6_of_clubs.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/5_of_clubs.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/4_of_clubs.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/3_of_clubs.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/2_of_clubs.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/ace_of_diamonds.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/king_of_diamonds.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/queen_of_diamonds.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/jack_of_diamonds.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/10_of_diamonds.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/9_of_diamonds.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/8_of_diamonds.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/7_of_diamonds.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/6_of_diamonds.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/5_of_diamonds.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/4_of_diamonds.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/3_of_diamonds.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/2_of_diamonds.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/ace_of_hearts.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/king_of_hearts.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/queen_of_hearts.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/jack_of_hearts.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/10_of_hearts.png', value: -1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/9_of_hearts.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/8_of_hearts.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/7_of_hearts.png', value: 0},
    {card: 'images/Playing_Cards/PNG-cards-1.3/6_of_hearts.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/5_of_hearts.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/4_of_hearts.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/3_of_hearts.png', value: 1},
    {card: 'images/Playing_Cards/PNG-cards-1.3/2_of_hearts.png', value: 1}
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
// var currentCard = game.deck.pop().card;

$('#next').on('click', function() {
  $("#card1").html("<img src=" + game.deck.pop().card + '>');
  $("#card2").html("<img src=" + game.deck.pop().card + '>');
});


// console.log([game.deck.pop(), game.deck.pop()])
// console.log([game.deck.pop(), game.deck.pop()])
// console.log(game.deck)
