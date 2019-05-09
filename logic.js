$(document).ready(function(){

    $("#calculate").on("click", function(){

        // Retrieving Values from User Input ===========================
        let cost = $("#cost").val();
        let tip = $("#desired-tip").val();
        let people = $("#split").val();
        //==============================================================
    
        // This if statement takes out any dollar or percentage signs for
        // the purpose of calculation ===================================
        if (cost.includes("$") || tip.includes("%")){
             cost = cost.replace("$", "");
             tip = tip.replace("%", "");
        }
        //================================================================
    
        // This if statement handles the unlikely event that somebody might
        // input a percentage with digits ==================================
        if (tip.includes(".")){
            tip = tip.replace(".", "");
        }
        //==================================================================
    
    
        // This changes the value of the tip to be equivalent to a percentage 
        // (for the sake of multiplication) =================================
        tip = parseFloat("0." + tip);
        //===================================================================
        
    
        // Calculating the result and limiting the number of digits to 2 ====
        let result = ((cost * tip) / people).toFixed(2);
        //===================================================================
    
        // Negative and Zero Input handling...==================================
        if (cost < 1 || people < 1  || tip < 1){
            $("#result").text("Your input must be a positive, nonzero number.");
        }
        //======================================================================
        else {
            // A Simple If/Else statement for whether the user is splitting the bill ======
            // or not. Displays "...,split between X people." if it's larger than 1 =======
            if (people > 1){
                $("#result").text("$" + result + ", split between " + people + " people.");
            }
            
            else if (people.toLowerCase() === "no" || parseInt(people) === 1){
                console.log("Running...");
                $("#result").text("$" + result);
            }
        }
       
        //==================================================================================
    });
});
