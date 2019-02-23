// Get computer to pick a random number
// Set a value for each of the four jewel pics
// Add value for each pic chosen, show value
// If value = randomnumber YOU WIN
// If value > randomNumber You lose, game restarts
// Show wins, losses



$(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * 101) + 19;

    $(".compuRandom").html("<h1>" + randomNumber + "</h1>");


   
   // Crystalscounter

    var counter = 0;
    var wins = 0;
    var losses = 0;


    var numberOptions = [5, 11, 4, 9];

    for (var i = 0; i < numberOptions.length; i++) {

        var imageJewel = $("<img>");
        imageJewel.addClass("jewel-image");
        imageJewel.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")
        imageJewel.attr("data-jewel-value", numberOptions[i]);
        $("#jewel").append(imageJewel);

        console.log(numberOptions);

    }
   
    

    $(".jewel-image").on("click", function() {

        var jewelValue = ($(this).attr("data-jewel-value"));

        jewelValue = parseInt(jewelValue);

        counter += jewelValue;

        $(".addedScore").html("Your new score is: " + counter);

        if (counter === randomNumber) {
            wins++;
            console.log("You win!");
            console.log(wins);
           
            
        }

        else if (counter >= randomNumber) {
            losses++;
            console.log("You lose!");
            console.log(losses);
            
            
        }

    
      });



    

});
