import { findAndLogHighestJolt } from "./day3";

test('given a string of snumbers find the location of the highest value', () => {
  
    const [jolt, index] = findAndLogHighestJolt("987654321111111".split(''));

    expect(jolt).toBe('9');
    expect(index).toBe(0);

});

