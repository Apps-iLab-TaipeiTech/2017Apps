angular.module('2017Apps').service('DirectUpdateService', function(){
	var isCordova = typeof cordova !== 'undefined';
	var fs = new CordovaPromiseFS({
        persistent: isCordova, // Chrome should use temporary storage.
        Promise: Promise
    });
	
	this.getOriginalVersion = function (onSucess) {
		var loader = new CordovaAppLoader({
			fs: fs,
			localRoot: 'app',
			serverRoot: 'http://104.199.219.156:3000/OriginalVersion/',
			mode: 'mirror',
			cacheBuster: true
		});
		
		(onSucess || angular.noop)(loader);
	};

	this.getSecondVersion = function (onSucess) {
	    var loader = new CordovaAppLoader({
	        fs: fs,
	        localRoot: 'app',
	        serverRoot: 'http://104.199.219.156:3000/SecondVersion/',
	        mode: 'mirror',
	        cacheBuster: true
	    });

	    (onSucess || angular.noop)(loader);
	};

	this.getThirdVersion = function (onSucess) {
	    var loader = new CordovaAppLoader({
	        fs: fs,
	        localRoot: 'app',
	        serverRoot: 'http://104.199.219.156:3000/ThirdVersion/',
	        mode: 'mirror',
	        cacheBuster: true
	    });

	    (onSucess || angular.noop)(loader);
	};
	
	this.startUpdate = function (loader) {
		loader.check()
		.then(function () {
			return loader.download();
		})
		.then(function () {
			return loader.update();
		}, function (err) {
			console.error('Auto-update error:', err);
		});
	};
});