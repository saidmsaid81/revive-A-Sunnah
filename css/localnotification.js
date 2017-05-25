document.addEventListener('deviceready', this.onDeviceReady, false);
	 function onDeviceReady() {
	 	 welcomeScreen();
         AppRate.preferences.storeAppURL.android = 'market://details?id=com.ihyausunnah.thesunnahrevival';
        AppRate.preferences.openStoreInApp = true;
        AppRate.preferences.displayAppName = 'The Sunnah Revival';
        AppRate.preferences.usesUntilPrompt = 10;
         AppRate.preferences.promptAgainForEachNewVersion = false;
         AppRate.promptForRating(false);

         document.getElementById("uploadFile").addEventListener("click", uploadFile);
		document.getElementById("downloadFile").addEventListener("click", downloadFile);

		function downloadFile() {

   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://www.dropbox.com/sh/wqxukh37d7srybo/AAAdyTOKlsaJGkZbxKkLvYtja?dl=0");
   var fileURL =  "///storage/emulated/0/Android/data/com.ihyausunnah.thesunnahrevival/files/quran.zip";

   fileTransfer.download(
      uri, fileURL, function(entry) {
         alert("download complete: " + entry.toURL());
      },
		
      function(error) {
         alert("download error source " + error.source);
         alert("download error target " + error.target);
         alert("download error code" + error.code);
      },
		
      false, {
         headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
         }
      }
   );
}

	 	
	 }



	 
	 