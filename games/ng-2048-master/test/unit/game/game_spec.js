/**
 * Created by nprimak on 12/19/15.
 */
describe('Game module', function() {
    describe('GameManager', function() {
        beforeEach(module('Game'));

        beforeEach(module(function($provide) {
            _gridService = {
                anyCellsAvailable: angular.noop,
                tileMatchesAvailable: angular.noop
            };

            //switch out the real GridService for our fake version
            $provide.value('GridService', _gridService);
        }));

        var gameManager;
        beforeEach(inject(function(GameManager) {
            gameManager = GameManager;
        }));

        var gridService;
        beforeEach(inject(function(GridService) {
            gridService = GridService;
        }));

        var _gridService;

        describe('.movesAvailable', function() {
            it('should report true if there are cells available', function() {
                spyOn(_gridService, 'anyCellsAvailable').and.returnValue(true);
                expect(gameManager.movesAvailable()).toBeTruthy();
            });
            it('should report true if there are matches available', function() {
                spyOn(_gridService, 'anyCellsAvailable').and.returnValue(false);
                spyOn(_gridService, 'tileMatchesAvailable').and.returnValue(true);
                expect(gameManager.movesAvailable()).toBeTruthy();
            });
            it('should report false if there are no cells nor matches available', function() {
                spyOn(_gridService, 'anyCellsAvailable').and.returnValue(false);
                spyOn(_gridService, 'tileMatchesAvailable').and.returnValue(false);
                expect(gameManager.movesAvailable()).toBeFalsy();
            })
        });

    });
});