// Get computer to pick a random number
// Set a value for each of the four jewel pics
// Add value for each pic chosen, show value
// If value = randomnumber YOU WIN
// If value > randomNumber You lose, game restarts
// Show wins, losses



$(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * 101) + 19;

    $(".compuRandom").html(randomNumber);


   
   // Crystalscounter

    var counter = 0;
    var wins = 0;
    var losses = 0;


    var numberOptions = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];

    for (var i = 0; i < numberOptions.length; i++) {

        var imageJewel = $("<img>");
        imageJewel.addClass("jewel-image");
        imageJewel.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")
        imageJewel.attr("data-jewel-value", numberOptions[i]);
        $("#jewel" + (i+1)).append(imageJewel);

        console.log(numberOptions[i]);

    }
   
    

    $(".jewel-image").on("click", function() {

        var jewelValue = ($(this).attr("data-jewel-value"));

        jewelValue = parseInt(jewelValue);

        counter += jewelValue;

        $(".addedScore").html("Your new score is: " + counter);

        if (counter === randomNumber) {
            reset();
            wins++;
            console.log("You win!");
            console.log(wins);
            $(".winsCount").text("Wins: " + wins);
            
            
        }

        else if (counter >= randomNumber) {
            losses++;
            reset();
            console.log("You lose!");
            console.log(losses);
            $(".lossesCount").text("Losses: " + losses);
            
            
        }

    
      });

      function reset () {

        counter = 0;



         }


      reset ();
    

});
