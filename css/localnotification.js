document.addEventListener('deviceready', this.onDeviceReady, false);
	 function onDeviceReady() {
	 	 welcomeScreen();
	 	
	 }
function welcomeScreen(){
            var welcome = window.localStorage.getItem("welcome");
            if(!welcome){
                window.localStorage.setItem("welcome", "1");
               navigator.notification.alert(
    'Tap'+ '<i class="zmdi zmdi-notifications"></i>' +'to manage reminders such as Suratul Kahf reminders on Friday',  // message
    null,
    'Tutorial',            // title
    'Got It'                  // buttonName
); // replace with welcome screen display    
            }
        }


	 
	 