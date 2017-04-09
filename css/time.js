var today = new Date();
		var tomorrow = new Date();
		tomorrow.setDate(today.getDate());
		tomorrow.setHours(21);
		tomorrow.setMinutes(00);
		tomorrow.setSeconds(00);
		var tomorrow_at_6_am = new Date(tomorrow);