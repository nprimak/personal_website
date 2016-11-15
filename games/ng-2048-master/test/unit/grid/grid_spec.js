/**
 * Created by nprimak on 12/21/15.
 */
describe('Grid', function() {

    beforeEach(module('Grid'));

        describe('GridService', function() {

            var gridService;
            beforeEach(inject(function(GridService) {
                gridService = GridService;
            }));

             describe('.buildEmptyGameBoard', function() {
                var nullArr;

                beforeEach(function() {
                    nullArr = [];
                    for(var x = 0; x < 16; x++) {
                        nullArr.push(null);
                    }
                });
                it('should clear out the grid array with nulls', function() {
                    var grid= [];
                    for(var x = 0; x < 16; x++) {
                        grid.push(x);
                    }
                    gridService.grid = grid;
                    gridService.buildEmptyGameBoard();
                    expect(gridService.grid).toEqual(nullArr);
                });
                it('should clear out the tiles array with nulls', function() {
                    var tiles = [];
                    for(var x = 0; x < 16; x++) {
                        tiles.push(x);
                    }
                    gridService.tiles = tiles;
                    gridService.buildEmptyGameBoard();
                    expect(gridService.tiles).toEqual(nullArr);
                });
            });
        });
});