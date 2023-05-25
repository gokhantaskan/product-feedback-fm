/* eslint-env node */
module.exports = {
  "*": ["prettier --write -l -u --no-error-on-unmatched-pattern"],
  "*.{js,cjs,mjs,jsx,ts,tsx,vue}": ["eslint --fix", "vitest related --run"],
};
