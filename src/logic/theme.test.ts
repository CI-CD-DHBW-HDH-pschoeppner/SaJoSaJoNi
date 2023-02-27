import { themes } from "./theme";
import validateColor from "validate-color";

describe("has themes", () => {
    it("there is at least one theme", () => {
      expect(themes.length).toBeGreaterThan(0);
    });
  });

describe("themes are valid", () => {
  for(const theme of themes) {
    it(`theme "${theme.name}" is valid`, () => {
      expect(theme.name.length).toBeGreaterThan(0);
      expect(validateColor(theme.background)).toBeTruthy();
      expect(validateColor(theme.primary)).toBeTruthy();
      expect(validateColor(theme.primaryAccent)).toBeTruthy();
      expect(validateColor(theme.secondary)).toBeTruthy();
      expect(validateColor(theme.secondaryAccent)).toBeTruthy();
    });
  }
  });