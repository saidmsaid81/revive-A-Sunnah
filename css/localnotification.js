document.addEventListener('deviceready', this.onDeviceReady, false);
	 function onDeviceReady() {
	 	 welcomeScreen();
	 	
	 }
function welcomeScreen(){
            var welcome = window.localStorage.getItem("welcome");
            if(!welcome){
                window.localStorage.setItem("welcome", "1");
                $( function() {
    $( "#dialog" ).dialog();
  } );    
            }
        }


	 
	 