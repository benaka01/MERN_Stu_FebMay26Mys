// Callback nesting

console.log("Starting nested callback flow");

setTimeout(function(){
    console.log("Step 1:User loaded");

    setTimeout(function(){
        console.log("Step :2 Orders loaded");

        setTimeout(function(){
            console.log("Step:3 Payments loaded");
            setTimeout(function(){
                console.log("Step 4: Shipment loaded");
                
                setTimeout(function(){
                    console.log("step 5: Order recieved.");
                    console.log("We are in callback hell!!!!");
                },2500);
            },2000);
        },1500);
    },1000);
},500);
