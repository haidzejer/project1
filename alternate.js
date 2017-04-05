var game = {
  player1: {
    score: 0,
    wrongCount: 0,
    actualCount: 0,
    timerCount: 30,
    start: $('#start'),
    initialize: function() {
      var player1 = this;
      player1.start.on('click', function () {
          displayCards(player1);
            player1.start.css('display', 'none');
          //  $('#playerOneTimeOut').css('display', 'none');

          $guess.on('change', function() {
          	var currentGuess = $guess.val()
            if(currentGuess == player1.actualCount) {
              player1.score += 1;
              displayCards(player1);
              $('#score').text('Score :' + player1.score);
              $guess.val('')
              $('#wrong').html('');
            }
            else {
              $('#wrong').html('<p>Wrong Count, try again!</p>');
              player1.wrongCount += 1;
            }
          })

          var counter = setInterval(timer, 1000);

          function timer() {

            player1.timerCount -= 1;
            $timer.text('Time remaining: ' + player1.timerCount);
            if (player1.timerCount <= 0)
            {
               clearInterval(counter);
            //   if (player1 == player1) {
                 $('#playerOneTimeOut').css('display', 'block')
            //   }
              //  else if (player1 == player2) {
              //    checkWinner();
              //    $('#playerTwoTimeOut').css('display', 'block')
              //  }
                $('#scoreRow').append('<td>' + player1.score + '</td>');
                $('#wrongRow').append('<td>' + player1.wrongCount + '</td>');
                shuffle(game.deck)
            }
          }
      })
    },
    finalScore: 'Player 1 scored ' + $(this).score + ' points!'
  },
  player2: {
    score: 0,
    wrongCount: 0,
    actualCount: 0,
    timerCount: 30,
    start: $('#p2Start'),
    initialize: function() {
      var player2 = this;
      player2.start.on('click', function () {
          displayCards(player2);
            player2.start.css('display', 'none');
            $('#playerOneTimeOut').css('display', 'none');

          $guess.on('change', function() {
          	var currentGuess = $guess.val()
            console.log(currentGuess);
            console.log(player2.actualCount);
            if(currentGuess == player2.actualCount) {
              player2.score += 1;
              displayCards(player2);
              $('#score').text('Score :' + player2.score);
              $guess.val('')
              $('#wrong').html('');
            }
            else {
              $('#wrong').html('<p>Wrong Count, try again!</p>');
              player2.wrongCount += 1;
            }
          })

          var counter = setInterval(timer, 1000);

          function timer() {

            player2.timerCount -= 1;
            $timer.text('Time remaining: ' + player2.timerCount);
            if (player2.timerCount <= 0)
            {
               clearInterval(counter);
          //     if (player2 == player2) {
          //       $('#playerOneTimeOut').css('display', 'block')
          //     }
          //     else if (player2 == player2) {
                 checkWinner();
                 $('#playerTwoTimeOut').css('display', 'block')
          //     }
                $('#scoreRow').append('<td>' + player2.score + '</td>');
                $('#wrongRow').append('<td>' + player2.wrongCount + '</td>');
                shuffle(game.deck)
            }
          }
      })
    },
    finalScore: 'Player 2 scored ' + $(this).score + ' points!'
  },
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
}

var player1 = game.player1;
var player2 = game.player2;
var $guess = $('#countGuess');
var $timer = $('.timer');
var $restart = $('#restart');

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
  player.actualCount += Number(newCard1.count);
  player.actualCount += Number(newCard2.count);
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

// $restart.on('click', function () {
//
// });

player1.initialize();
player2.initialize();
