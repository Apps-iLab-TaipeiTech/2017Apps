angular.module('2017Apps').controller('HomeController', ['DirectUpdateService', function (DirectUpdateService) {
    var self = this;

    self.getOriginalVersion = function () {
        DirectUpdateService.getOriginalVersion(function (loader) {
            DirectUpdateService.startUpdate(loader);
        });
    };

    self.getSecondVersion = function () {
        DirectUpdateService.getSecondVersion(function (loader) {
            DirectUpdateService.startUpdate(loader);
        });
    };

    self.getThirdVersion = function () {
        DirectUpdateService.getThirdVersion(function (loader) {
            DirectUpdateService.startUpdate(loader);
        });
    };
}]);