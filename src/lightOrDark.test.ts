import { lightOrDark, lightOrDarkMode } from "./lightOrDark";

let saveLocalStorage: lightOrDarkMode;

beforeEach(() => {
  saveLocalStorage = localStorage.getItem("lightOrDark") as lightOrDarkMode;
});

afterEach(() => {
  localStorage.setItem("lightOrDark", saveLocalStorage);
});

describe("default light or dark", () => {
  before(() => localStorage.setItem("lightOrDark", "dark"));
  it("loads from local storage", () => {
    expect(lightOrDark()).to.equal("dark");
  });
});
