

 $("#checkboxi").change(function() {
  if ($(this).is(":checked")){
    cordova.plugins.notification.local.schedule({
    id: 1,
    title: "Reminder to recite Surah Al Mulk",
    text: "Tap here to read now",
     
    firstAt: tomorrow_at_6_am,
    every: 1440 // "minute", "hour", "week", "month", "year"
    });window.plugins.toast.showLongTop('Successfully enabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
  }
  else 
   cordova.plugins.notification.local.cancel(1, function() {
   window.plugins.toast.showLongTop('Successfully Disabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
});
 
cordova.plugins.notification.local.on("click", function (notification, state) {
    window.open('quran.html#thirteen');
}, this)
});
  $("#checkboxii").change(function() {
  if ($(this).is(":checked")){
    cordova.plugins.notification.local.schedule({
    id: 2,
    title: 'Have you read Surah Al Kahf',
    text: 'Tap here to read now',
      firstAt: friday_in_morning,
    every: 10080 // 
    });window.plugins.toast.showLongTop('Successfully enabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
  }
  else 
   cordova.plugins.notification.local.cancel(2, function() {
   window.plugins.toast.showLongTop('Successfully Disabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
});
 cordova.plugins.notification.local.on("click", function (notification, state) {
    window.open('quran.html#one');
}, this)
});

  $("#checkboxiii").change(function() {
  if ($(this).is(":checked")){
    cordova.plugins.notification.local.schedule({
    id: 3,
    title: 'The Sunnah Revival',
    text: 'Reminder To fast Tomorrow Monday',
    firstAt: sunday_in_night,
   every: 10080
},{
    id: 4,
    title: 'The Sunnah Revival',
  text: 'Reminder To fast Tomorrow Thursday',
   firstAt: wednesday_in_evening,
  every: 10080
});window.plugins.toast.showLongTop('Successfully enabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
  }
  else 
   cordova.plugins.notification.local.cancel([3, 4], function() {
    window.plugins.toast.showLongTop('Successfully Disabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
});
 cordova.plugins.notification.local.on("click", function (notification, state) {
    window.open('cards.html#twentythree');
}, this)
});

  $("#checkboxv").change(function() {
  if ($(this).is(":checked")){
    cordova.plugins.notification.local.schedule({
    id: 3,
    title: 'The Sunnah Revival',
    text: 'Reminder To read Morning Adhkar',
    firstAt: subh_6_am,
   every: 1440
},{
    id: 4,
    title: 'The Sunnah Revival',
  text: 'Reminder To read read evening adhkar',
   firstAt: masa_4_pm,
  every: 1440
});window.plugins.toast.showLongTop('Successfully enabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
  }
  else 
   cordova.plugins.notification.local.cancel([6, 7], function() {
    window.plugins.toast.showLongTop('Successfully Disabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
});
 cordova.plugins.notification.local.on("click", function (notification, state) {
    window.open('dua.html#four');
}, this)
});


 $("#checkboxvi").change(function() {
  if ($(this).is(":checked")){
    cordova.plugins.notification.local.schedule({
    id: 1,
    title: "Todays Hadith",
    text: "Tap here to read now",
     
    firstAt: hadith_at_8_am,
    every: 1440 // "minute", "hour", "week", "month", "year"
    });window.plugins.toast.showLongTop('Successfully enabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
  }
  else 
   cordova.plugins.notification.local.cancel(1, function() {
   window.plugins.toast.showLongTop('Successfully Disabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
});
 
cordova.plugins.notification.local.on("click", function (notification, state) {
    window.open('https://thesunnahrevival.wordpress.com/category/daily-inspiration/','_blank');displayToast();
}, this)
});

  //new checkbox
  $("#checkboxiv").change(function() {
  if ($(this).is(":checked")){
    cordova.plugins.notification.local.schedule({
    id: 5,
    title: 'Reminder to recite Suratul Kahf',
    text: 'Tap here to read now',
      firstAt: thursday_in_night,
    every: 10080 // 
    });window.plugins.toast.showLongTop('Successfully enabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
  }
  else 
   cordova.plugins.notification.local.cancel([5, function() {
    window.plugins.toast.showLongTop('Successfully Disabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
}])
 cordova.plugins.notification.local.on("click", function (notification, state) {
    window.open('quran.html#one');
}, this)
});



  $("#checkbox-container :checkbox").on("change", function(){
  
});
var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
var $checkboxes = $("#checkbox-container :checkbox");

$checkboxes.on("change", function(){
  $checkboxes.each(function(){
    checkboxValues[this.id] = this.checked;
  });
  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
});
$.each(checkboxValues, function(key, value) {
  $("#" + key).prop('checked', value);
});