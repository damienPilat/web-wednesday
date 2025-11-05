/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [
        "./apps/landing-page/tsconfig.json",
        "./apps/london-cycle-stations/tsconfig.json",
        "./apps/portfolio/tsconfig.json",
        "./apps/web/tsconfig.json"
    ],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  extends: ["@repo/eslint-config/index.js"],
};
