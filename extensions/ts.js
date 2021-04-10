const fs = require('fs');
const chalk = require('chalk');
const { createLoader } = require('./extension-utilities');

/**
 * @internal
 */
const defaultTsConfig = `{
  "compilerOptions": {
    "sourceMap": false
  }
}`;

module.exports = createLoader({
  dependencies: [
    'typescript',
    'ts-loader'
  ],
  extend: options => {
    options.module.rules.push({
      test: /.tsx?$/,
      loader: 'ts-loader'
    });

    if (!fs.existsSync(`${process.cwd()}/tsconfig.json`)) {
      console.log(`${chalk.yellow('[Extension Loader Plugin]')} ${chalk.green('tsconfig.json')} file not found, so a default will be created.`);

      fs.writeFileSync(`${process.cwd()}/tsconfig.json`, defaultTsConfig);
    }
  }
});