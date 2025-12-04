import test, { describe } from "node:test";
import { buildRollsMatrix, calculateIfRollIsSafe, getAdjacentRolls } from "./day4";

const failSample: ("@" | "." | null)[][] = [
    ["@", "@", ".",],
    [".", "@", "@",],
    ["@", "@", "@",],
];

const passSample: ("@" | "." | null)[][] = [
    [".", ".", "."],
    [".", "@", "."],
    [".", ".", "."],
];

const borderSample: ( "@" | "." | null)[][] = [
    [ null, null, null],
    [ null, ".", "@"],
    [ null, "@", "@"],
];

const emptySample: ( "@" | "." | null)[][] = [
    [ "@", "@", ".", ".", "@"],
    [ ".", ".", ".", ".", "."],
    [ "@", "@", "@", ".", "@"],
    [ ".", ".", ".", ".", "."],
    [ "@", "@", ".", "@", "@"],
    [ "@", "@", "@", "@", "@"],
];

const sampleInput: string[] = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`.split('\n');

describe('given an array where there are more than 4 rolls in the adjacent index', () => {

    test('it should return false', () => {
  
        const result = calculateIfRollIsSafe(failSample);
    
        expect(result).toBe(false);

    });

});

describe('given an array where there are less than 4 rolls in the adjacent index', () => {

    test('it should return true', () => {
  
        const result = calculateIfRollIsSafe(passSample);
    
        expect(result).toBe(true);

    });

});

describe('given an array where there are border nulls', () => {

    test('it should return true', () => {
  
        const result = calculateIfRollIsSafe(borderSample);
    
        expect(result).toBe(true);

    });

});

describe('given an array where there are multiple rows and columns', () => {

    test("it should generate a 3 x 3 array", () => {

        const adjacentArray = getAdjacentRolls(2, 2, emptySample);
        
        expect(adjacentArray.length).toBe(3);

        expect(adjacentArray).toEqual([
            [".", ".", "."],
            ["@", "@", "."],
            [".", ".", "."],
        ]);
        
    });

    test("it should generate a 3 x 3 array even at a border in the top left corner", () => {

        const adjacentArray = getAdjacentRolls(0, 0, emptySample);
        
        expect(adjacentArray.length).toBe(3);

        expect(adjacentArray).toEqual([
            [null, null, null],
            [null, "@", "@"],
            [null, ".", "."],
        ]);
        
    });

     test("it should generate a 3 x 3 array even at a border in the bottom right corner", () => {

        const adjacentArray = getAdjacentRolls(5, 4, emptySample);
        
        expect(adjacentArray.length).toBe(3);

        expect(adjacentArray).toEqual([
            ["@", "@", null],
            ["@", "@", null],
            [null, null, null],
        ]);
        
    });
    
});

describe("getAdjacentRolls and calculateIfRollIsSafe", () => {

    test("it should get the adjacent rolls and calculate if safe", () => {

        const adjacentArray = getAdjacentRolls(2, 2, emptySample);

        expect(adjacentArray).toEqual([
            [".", ".", "."],
            ["@", "@", "."],
            [".", ".", "."],
        ]);

        const isSafe = calculateIfRollIsSafe(adjacentArray);

        expect(isSafe).toBe(true);
        
    });

});


describe("test the rolls matrix builder", () => {
    test("it should build the rolls matrix correctly", () => {

        const rollsMatrix = buildRollsMatrix(sampleInput);

        expect(rollsMatrix.length).toBe(10);
        expect(rollsMatrix[0].length).toBe(10);
        expect(rollsMatrix[0][0]).toBe(".");
        expect(rollsMatrix[0][2]).toBe("@");
        expect(rollsMatrix[9][9]).toBe(".");

    }); 

}); 
