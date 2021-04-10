/**
 * @typedef Loader
 * @property {(options: import('webpack').WebpackOptionsNormalized, packageJson: object) => void} load
 * @property {string[]} dependencies
 */

/**
 * @param {object} config
 * @param {string[]} config.dependencies
 * @param {(options: import('webpack').WebpackOptionsNormalized) => void} config.extend
 *
 * @returns {Loader}
 */
function createLoader({ dependencies, extend }) {
  const load = options => extend(options);

  return { load, dependencies };
}

module.exports = {
  createLoader
};