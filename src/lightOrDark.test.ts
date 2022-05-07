import { lightOrDark, theme } from "./lightOrDark";

let saveLocalStorage: theme;

beforeEach(() => {
  saveLocalStorage = localStorage.getItem("lightOrDark") as theme;
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
