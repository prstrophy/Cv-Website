function fadeout_loading_screen(){
    window.addEventListener("load",function(){
        const loading_screen=document.querySelector(".loading_screen");
        console.log(".loading_screen");
        setTimeout(     // To be removed during deployment.
            function(){
            loading_screen.className += " hidden";
            }, 1200
        );  //setTimeout was set for simulation
    })  //addEventListener
}   //Function fadeout_loading_screen()
