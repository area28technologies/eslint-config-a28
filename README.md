# eslint-config-a28

Area28's ESLint config

## Install

first the peer dependencies

`npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint --save-dev`


Then the main config

`npm install eslint-config-a28 --save-dev`


## Config

And your `.eslintrc.js` can look something like that:

```js
module.exports = {
  extends: ['a28'],
};
```