/* global describe, it */

const expect = require('chai').expect;
const game = require('./game')

const mockRow = ['.', '*', '*', '.', '.',]
const mockRowResult = [1, '*', '*', 1, 0,]
const mockNeighbours = ['.', '*', '*', '.', '*',]

describe('game', () => {
    describe('.play(3,3)',  () => {
        it('should return an Array.', () => {
            return expect(Array.isArray(game.play(3,3))).to.be.true
        });
        it('should return an Array with 3 elements.', () => {
            expect(game.play(3,3).length).to.equal(3)
        });
    });
    describe('.generateField(3,3)',  () => {
        it('should return an Array.', () => {
            return expect(Array.isArray(game.generateField(3,3))).to.be.true
        });
        it('should return an Array with 3 elements.', () => {
            expect(game.generateField(3,3).length).to.equal(3)
        });
    });
    describe('.generateRow(5)',  () => {
        it('should return an Array.', () => {
            return expect(Array.isArray(game.generateRow(5))).to.be.true
        });
        it('should return an Array with 5 elements.', () => {
            expect(game.generateRow(5).length).to.equal(5)
        });
    });
    describe('.countMines(mockNeighbours)',  () => {
        it('should return an Integer.', () => {
            return expect(Number.isInteger(game.countMines(mockNeighbours))).to.be.true
        });
        it('should return 3.', () => {
            expect(game.countMines(mockNeighbours)).to.equal(3)
        });
    });
    describe('.guessRow(mockRow)',  () => {
        it('should return an Array.', () => {
            return expect(Array.isArray(game.guessRow(mockRow))).to.be.true
        });
        it('should return mockRowResult.', () => {
            expect(JSON.stringify(game.guessRow(mockRow))).to.equal(JSON.stringify(mockRowResult))
        });
    });
});
