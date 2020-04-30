import { add } from '.';

describe("add test", () => {
    it("should return sum of two numbers", () => {

        expect(add(10.4, 2)).toBe(12.4);
        expect(add(-2, 2)).toBe(0);

    });
    it("should not add two strings", () => {
        expect(add('1', 2)).toBe(null);
    })
    it("should add only to numbers", () => {
        expect(add(2, 3, 4)).toBe(add(2, 3));
    })
    it("should add float numbers", () => {
        expect(add(2.4, 3.5)).toBe(5.9);
    })
})
