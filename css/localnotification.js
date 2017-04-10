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
		 
		})	
	 }
	 