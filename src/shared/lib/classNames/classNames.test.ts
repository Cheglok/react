import {classNames} from "./classNames";

describe("classNames", () => {
    test("test", () => {
        expect(classNames("someClass")).toBe("someClass");
    });

    test("test", () => {
        expect(classNames("someClass", {}, ["2", "3"])).toBe("someClass 2 3");
    });

    test("test", () => {
        expect(classNames("someClass", {hovered: true, scrollable: true}, ["2", "3"])).toBe("someClass 2 3 hovered scrollable");
    })

    test("test", () => {
        expect(classNames("someClass", {hovered: true, scrollable: false}, ["2", "3"])).toBe("someClass 2 3 hovered");
    })
})