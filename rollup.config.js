const svgr = require('@svgr/rollup');
const typescript = require('rollup-plugin-typescript2');
const customTypescript = require('ttypescript');
const css = require('rollup-plugin-css-only');
const url = require('rollup-plugin-url');
const { swc } = require('rollup-plugin-swc3');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const { terser } = require('rollup-plugin-terser');
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');

module.exports = () => {
  const plugins = [
    css({
      output: 'dist/styles.css',
    }),
		typescript({
      tsconfig: 'tsconfig.build.json',
      typescript: customTypescript,
      exclude: ['src/**/*.stories.mdx', '.storybook'],
    }),
    /* swc({
      include: /\.[mc]?[jt]sx?$/, // default
      exclude: /node_modules/, // default
      tsconfig: 'tsconfig.build.json', // default
    }), */
    url(),
    svgr(),
		peerDepsExternal(),
		// commonjs(),
		// resolve(),
  ];

	if (process.env.NODE_ENV === 'production') {
    plugins.push(terser());
  }

  return {
    input: 'src/index.ts',
		output: {
			format: 'esm',
      dir: 'dist',
			preserveModules: true,
		},
		plugins,
	}
};

