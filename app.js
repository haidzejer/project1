var game = {
  player1: {score: 0},
  player2: {score: 0},
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


var $start = $('#start');
var $p2Start = $('#p2Start');
var $timer = $('.timer');
var count = 30;
var $guess = $('#countGuess');
var p1ActualCount = 0;
var p2ActualCount = 0;
var p1WrongCount = 0;
var p2WrongCount = 0;
$('#p1WrongCount').text(p1WrongCount);
$('#p2WrongCount').text(p2WrongCount);
var $score = $('#score');
var $p1Overall = $('#p1Overall')
var $p2Overall = $('#p2Overall')
var pairs = 0;
var $winner = $('#winner');
var winnerPick = '';
var $p1FinalScore = $('#playerOneFinalScore');
var $p2FinalScore = $('#playerTwoFinalScore');
$timer.text('Time remaining: ' + count);
// $score.text('Score :' + pairs);
$p1FinalScore.text('You scored ' + game.player1.score + ' points!');
$p2FinalScore.text('You scored ' + game.player2.score + ' points!');
$winner.text('Winner: '+ winnerPick)
$p1Overall.text(game.player1.score);
$p2Overall.text(game.player2.score);

function p1DisplayCards() {
  var newCard1 = game.deck.pop();
  var newCard2 = game.deck.pop();
  p1ActualCount += Number(newCard1.count);
  p1ActualCount += Number(newCard2.count);
  $("#card1").html("<img src=" + newCard1.card + '>');
  $("#card2").html("<img src=" + newCard2.card + '>');
}

function p2DisplayCards() {
  var newCard1 = game.deck.pop();
  var newCard2 = game.deck.pop();
  p2ActualCount += Number(newCard1.count);
  p2ActualCount += Number(newCard2.count);
  $("#card1").html("<img src=" + newCard1.card + '>');
  $("#card2").html("<img src=" + newCard2.card + '>');
}


$start.on('click', function() {
  p1DisplayCards();
  $start.css('display', 'none');

  $guess.on('change', function() {
  	currentGuess = $guess.val()
    if(currentGuess == p1ActualCount) {
      p1DisplayCards();
      game.player1.score += 1;
      pairs ++
      $score.text('Score :' + pairs);
      $p1FinalScore.text('Player 1 scored ' + game.player1.score + ' points!');
      $p1Overall.text(game.player1.score);
      $guess.val('')
      $('#wrong').html('');
    }
    else {
      $('#wrong').html('<p>Wrong Count, try again!</p>');
      $('#p1WrongCount').text(p1WrongCount);
      p1WrongCount += 1;
    }
  })

  var counter = setInterval(timer, 1000);

  function timer()
  {
    count = count - 1;
    $timer.text('Time remaining: ' + count);
    if (count <= 0)
    {
       clearInterval(counter);
       $('#playerOneTimeOut').css('display', 'block')
       shuffle(game.deck)
    }
  }
});

$p2Start.on('click', function () {
  $('#playerOneTimeOut').css('display', 'none')
  count = 30;
  p2ActualCount = 0;
  wrongCount = 0;
  pairs = 0;
  p2DisplayCards();

  $guess.on('change', function() {
    currentGuess = $guess.val()
    if(currentGuess == p2ActualCount) {
      p2DisplayCards();
      game.player2.score += 1;
      pairs ++
      $score.text('Score :' + pairs);
      $p2FinalScore.text('Player 2 scored ' + game.player2.score + ' points!');
      $p2Overall.text(game.player2.score);
      $guess.val('')
      $('#wrong').html('');
    }
    else {
      $('#wrong').html('<p>Wrong Count, try again!</p>');
      $('#p2WrongCount').text(p2WrongCount);
      p2WrongCount += 1;
    }
  })


  var counter = setInterval(timer, 1000);

  function timer()
  {
    count = count - 1;
    $timer.text('Time remaining: ' + count);
    if (count <= 0)
    {
       clearInterval(counter);
       $('#playerTwoTimeOut').css('display', 'block')
       if(game.player1.score > game.player2.score) {
         winnerPick = 'Player One'
         $winner.text('Winner: '+ winnerPick)
       }
       else if (game.player1.score < game.player2.score) {
         winnerPick = 'Player Two'
         $winner.text('Winner: '+ winnerPick)
       }
       else {
         $('#winner').text('Tie Game!');
       }
    }
  }
});
