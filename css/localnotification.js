document.addEventListener('deviceready', this.onDeviceReady, false);
	 function onDeviceReady() {
	 	alert('Device ready...')
	 }

	 function localnotification() {
	 	cordova.plugins.notification.local.schedule({
		id: 1,
		title: "Reminder to recite Surah Al Mulk",
		text: "Tap here to read now",
	   
		firstAt: tomorrow_at_6_am,
		every: 1440 // "minute", "hour", "week", "month", "year"
		 
		});	
	 }
	 function localnotificationo() {
	 	cordova.plugins.notification.local.schedule({
		id: 2,
		title: "Have you read Surah Al Kahf",
		text: "Tap here to read now",
	
		firstAt: friday_in_morning,
		every: 10080 // "minute", "hour", "week", "month", "year"
		
		});	
		
    }
    function localnotificationoo() {
	 	cordova.plugins.notification.local.schedule([{
		id: 3,
		title: "The Sunnah Revival",
		text: "Reminder To fast Tomorrow Monday",
	
		firstAt: sunday_in_night,
		every: 10080 // "minute", "hour", "week", "month", "year"
		
		}	

		
	 	cordova.plugins.notification.local.schedule({
		id: 4,
		title: "The Sunnah Revival",
		text: "Reminder To fast Tomorrow Thursday",
	
		firstAt: wednesday_in_evening,
		every: 10080 // "minute", "hour", "week", "month", "year"
		
		}]);	
	 }