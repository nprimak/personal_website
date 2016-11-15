/**
 * Created by nprimak on 12/19/15.
 */
angular.module('Grid')
.directive('tile', function() {
    return {
        restrict: 'A',
        scope: {
            ngModel: "="
        },
        templateUrl: 'scripts/grid/tile.html'
    };
});