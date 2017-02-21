angular.module('2017Apps').run(['$ionicPlatform', 'DirectUpdateService', function ($ionicPlatform, DirectUpdateService) {
    $ionicPlatform.ready(function () {
        window.BOOTSTRAP_OK = true;

        DirectUpdateService.getOriginalVersion(function (loader) {
            DirectUpdateService.startUpdate(loader);
        });
    });
}]);