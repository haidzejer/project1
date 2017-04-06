var game = {
  currentPlayer: 0,
  players:[
  {
    name: 'p1',
    score: 0,
    wrongCount: 0,
    timerCount: 30,
    start: $('#start'),
    finalScore: 'Player 1 scored ' + $(this).score + ' points!'
  },
  {
    name: 'p2',
    score: 0,
    wrongCount: 0,
    timerCount: 30,
    start: $('#p2Start'),
    finalScore: 'Player 2 scored ' + $(this).score + ' points!'
  }],
  actualCount: 0,
  deck: [
    {card: 'images/Playing_Cards/PNG-cards-1.3/ace_of_spades.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/king_of_spades.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/queen_of_spades.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/jack_of_spades.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/10_of_spades.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/9_of_spades.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/8_of_spades.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/7_of_spades.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/6_of_spades.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/5_of_spades.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/4_of_spades.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/3_of_spades.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/2_of_spades.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/ace_of_clubs.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/king_of_clubs.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/queen_of_clubs.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/jack_of_clubs.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/10_of_clubs.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/9_of_clubs.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/8_of_clubs.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/7_of_clubs.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/6_of_clubs.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/5_of_clubs.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/4_of_clubs.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/3_of_clubs.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/2_of_clubs.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/ace_of_diamonds.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/king_of_diamonds.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/queen_of_diamonds.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/jack_of_diamonds.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/10_of_diamonds.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/9_of_diamonds.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/8_of_diamonds.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/7_of_diamonds.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/6_of_diamonds.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/5_of_diamonds.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/4_of_diamonds.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/3_of_diamonds.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/2_of_diamonds.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/ace_of_hearts.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/king_of_hearts.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/queen_of_hearts.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/jack_of_hearts.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/10_of_hearts.png', count: '-1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/9_of_hearts.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/8_of_hearts.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/7_of_hearts.png', count: '0'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/6_of_hearts.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/5_of_hearts.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/4_of_hearts.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/3_of_hearts.png', count: '1'},
    {card: 'images/Playing_Cards/PNG-cards-1.3/2_of_hearts.png', count: '0'}
  ]
  ,startTimer: function(){
    var counter = setInterval(timer, 1000);

    function timer() {

      game.players[game.currentPlayer].timerCount -= 1;
      $timer.text('Time remaining: ' + game.players[game.currentPlayer].timerCount);
      if (game.players[game.currentPlayer].timerCount <= 0)
      {
         clearInterval(counter);
         if(game.currentPlayer == 0) {
           $('#scoreRow').append('<td>' + game.players[game.currentPlayer].score + '</td>');
           $('#wrongRow').append('<td>' + game.players[game.currentPlayer].wrongCount + '</td>');
           $('#playerOneTimeOut').css('display', 'block');
           $('#p2Start').css('display', 'inline-block');
           game.currentPlayer = 1
         }
         else {
           $('#scoreRow').append('<td>' + game.players[game.currentPlayer].score + '</td>');
           $('#wrongRow').append('<td>' + game.players[game.currentPlayer].wrongCount + '</td>');
           $('#playerTwoTimeOut').css('display', 'block');
         }

          for (var i = 0; i < usedCards.length; i += 1) {
            game.deck.push(usedCards[i]);
          };
          usedCards = [];
          shuffle(game.deck)
      }
    }
  }
  ,initialize: function() {
    $guess.on('change', function() {
      var currentGuess = $guess.val()
      if(currentGuess == game.actualCount) {
        game.players[game.currentPlayer].score += 1;
        displayCards(player1);
        $('#score').text('Score :' + game.players[game.currentPlayer].score);
        $guess.val('')
        $('#wrong').html('');
      }
      else {
        $('#wrong').html('<p>Wrong Count, try again!</p>');
        game.players[game.currentPlayer].wrongCount += 1;
      }
    })
  }
}

var player1 = game.players[0];
var player2 = game.players[1];
var $guess = $('#countGuess');
var $timer = $('.timer');
var $restart = $('#restart');
var usedCards = [];

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

function displayCards(player) {
  var newCard1 = game.deck.pop();
  var newCard2 = game.deck.pop();
  usedCards.push(newCard1);
  usedCards.push(newCard2);
  game.actualCount += Number(newCard1.count);
  game.actualCount += Number(newCard2.count);
  $("#card1").html("<img src=" + newCard1.card + '>');
  $("#card2").html("<img src=" + newCard2.card + '>');
}

function checkWinner() {
  if(player1.score > player2.score) {
    winnerPick = 'Player One'
    $('#winner').text('Winner: Player 1!')
  }
  else if (player1.score < player2.score) {
    winnerPick = 'Player Two'
    $('#winner').text('Winner: Player 2!')
  }
  else {
    $('#winner').text('Tie Game!');
  }
}

$('#start, #p2Start').on('click', function () {
    game.startTimer();
    game.actualCount = 0;
    displayCards(game.players[game.currentPlayer]);
    game.players[game.currentPlayer].start.hide();
    $('#playerOneTimeOut').hide();
})

$restart.on('click', function () {
   game.currentPlayer = 0
   game.actualCount = 0;
   player1.score = 0;
   player1.wrongCount = 0;
   player1.timerCount = 30;
   player2.score = 0;
   player2.wrongCount = 0;
   player2.timerCount = 30;
   $('#score').text('Score: 0');
   $("#card1").html('');
   $("#card2").html('');
   $guess.val('')
   shuffle(game.deck)
   $('#wrong').html('');
   $('#playerTwoTimeOut').css('display', 'none')
   player1.start.css('display', 'inline-block');
   $('#scoreRow td:last-child').remove();
   $('#scoreRow td:last-child').remove();
   $('#wrongRow td:last-child').remove();
   $('#wrongRow td:last-child').remove();
});

game.initialize();
