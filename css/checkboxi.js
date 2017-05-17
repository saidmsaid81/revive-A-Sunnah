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