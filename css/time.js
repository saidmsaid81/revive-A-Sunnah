var today = new Date();
		var tomorrow = new Date();
		tomorrow.setDate(today.getDate());
		tomorrow.setHours(21);
		tomorrow.setMinutes(00);
		tomorrow.setSeconds(00);
		var tomorrow_at_6_am = new Date(tomorrow);
		var subh= new Date();
		subh.setDate(today.getDate());
		subh.setHours(6);
		subh.setMinutes(00);
		subh.setSeconds(00);
		var subh_6_am= new Date(subh);
		var masa= new Date();
		masa.setDate(today.getDate());
		masa.setHours(16);
		masa.setMinutes(30);
		masa.setSeconds(00);
		var masa_4_pm= new Date(masa);
		var hadith= new Date();
		hadith.setDate(today.getDate());
		hadith.setHours(8);
		hadith.setMinutes(00);
		hadith.setSeconds(00);
		var hadith_8_am= new Date(hadith);


		var friday = new Date();
		friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7);
var morning =new Date()
		morning.setDate(friday.getDate());
		morning.setHours(8);
		morning.setMinutes(0);
		morning.setSeconds(0);
		var friday_in_morning = new Date(morning);

		var sunday = new Date();
		sunday.setDate(sunday.getDate() + (0  - sunday.getDay()) % 7);
var night =new Date()
		night.setDate(sunday.getDate());
		night.setHours(20);
		night.setMinutes(0);
		night.setSeconds(0);
		var sunday_in_night = new Date(night);

		var wednesday = new Date();
		wednesday.setDate(wednesday.getDate() + (1 +2  - wednesday.getDay()) % 7);
var evening =new Date()
		evening.setDate(wednesday.getDate());
		evening.setHours(20);
		evening.setMinutes(0);
		evening.setSeconds(0);
		var wednesday_in_evening = new Date(evening);

		var thursday = new Date();
        thursday.setDate(thursday.getDate() + (1 + 3 - thursday.getDay()) % 7);
var night =new Date()
        night.setDate(thursday.getDate());
        night.setHours(20);
        night.setMinutes(0);
        night.setSeconds(0);
        var thursday_in_night = new Date(night);


