export const preset = "ts-jest/presets/default";
export const testEnvironment = "jsdom";
export const moduleNameMapper = {
  "^@/(.*)$": "<rootDir>/src/$1",
};
