var game = {
  player1: {
    score: 0,
    wrongCount: 0,
    actualCount: 0,
    timerCount: 30,
    start: $('#start'),
    finalScore: 'Player 1 scored ' + $(this).score + ' points!'
  },
  player2: {
    score: 0,
    wrongCount: 0,
    actualCount: 0,
    timerCount: 30,
    start: $('#p2Start'),
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

var player1 = game.player1;
var player2 = game.player2;
var $guess = $('#countGuess');
var $p1Overall = $('#p1Overall')
var $p1FinalScore = $('#playerOneFinalScore');
var $timer = $('.timer');
// $timer.text('Time remaining: ' + player.timerCount);

function displayCards(player) {
  var newCard1 = game.deck.pop();
  var newCard2 = game.deck.pop();
  player.actualCount += Number(newCard1.count);
  player.actualCount += Number(newCard2.count);
  $("#card1").html("<img src=" + newCard1.card + '>');
  $("#card2").html("<img src=" + newCard2.card + '>');
}


function runTurn(currentPlayer) {
  displayCards(currentPlayer);
  if (currentPlayer == player1) {
    currentPlayer.start.css('display', 'none');
  }
  else {
    $('#playerOneTimeOut').css('display', 'none');
  }


  $guess.on('change', function() {
  	var currentGuess = $guess.val()
    if(currentGuess == currentPlayer.actualCount) {
      displayCards(currentPlayer);
      currentPlayer.score += 1;
      $('#score').text('Score :' + currentPlayer.score);
      $guess.val('')
      $('#wrong').html('');
    }
    else {
      $('#wrong').html('<p>Wrong Count, try again!</p>');
      currentPlayer.wrongCount += 1;
    }
  })

  var counter = setInterval(timer, 1000);

  function timer()
  {
    currentPlayer.timerCount = currentPlayer.timerCount - 1;
    $timer.text('Time remaining: ' + currentPlayer.timerCount);
    if (currentPlayer.timerCount <= 0)
    {
       clearInterval(counter);
       if (currentPlayer == player1) {
         $('#playerOneTimeOut').css('display', 'block')
       }
       else {
         $('#playerTwoTimeOut').css('display', 'block')
       }
        $('#scoreRow').append('<td>' + currentPlayer.score + '</td>');
        $('#wrongRow').append('<td>' + currentPlayer.wrongCount + '</td>');
        shuffle(game.deck)
    }
  }
}


player1.start.on('click', runTurn(player1));
player2.start.on('click', runTurn(player2));
