// Get computer to pick a random number
// Set a value for each of the four sun pics
// Add value for each pic chosen, show value
// If value = randomnumber YOU WIN
// If value > randomNumber You lose, game restarts
// Show wins, losses

//I was onot able to make to the suns generate a new value when the game restarted!



$(document).ready(function() {

    var wins = 0;
    var losses = 0;

    $(".statement").text("Give me the power to flower! Click each sun and try to match the number listed.");

    var randomNumber = Math.floor(Math.random() * 101) + 19;

    $(".compuRandom").html(randomNumber);
   
   // Crystalscounter

    var counter = 0;

    var numberOptions = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];
  
    for (var i = 0; i < numberOptions.length; i++) {

        var imageJewel = $("<img>");
        imageJewel.addClass("jewel-image");
        imageJewel.attr("src", "http://getdrawings.com/cliparts/sun-clipart-21.png");
        imageJewel.attr("data-jewel-value", numberOptions[i]);
        $("#sun" + (i+1)).append(imageJewel);

        console.log(numberOptions[i]);

    }
    

    $(".jewel-image").on("click", function() {

        var jewelValue = ($(this).attr("data-jewel-value"));

        jewelValue = parseInt(jewelValue);

        counter += jewelValue;

        $(".addedScore").html("Your new score is: " + counter);


        if (counter === randomNumber) {
            wins++;
            $(".statement").text("You won! Can you do it again?");
            $(".winsCount").text("Wins: " + wins);
            if (true) {
                reset();
            }
            
            
        }

        else if (counter >= randomNumber) {
            losses++;
            $(".statement").text("You lost! Try Again.");
            $(".lossesCount").text("Losses: " + losses);
            if(true){
                reset();
            }
            
        }

        function reset() {


            counter = 0;
            $(".addedScore").html("Your new score is: " + counter);

            randomNumber = Math.floor(Math.random() * 101) + 19;
            $(".compuRandom").html(randomNumber);
        
            }
        



    
      });

    

});
