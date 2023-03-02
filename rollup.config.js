const svgr = require('@svgr/rollup');
const typescript = require('rollup-plugin-typescript2');
const customTypescript = require('ttypescript');
const css = require('rollup-plugin-css-only');
const { terser } = require('rollup-plugin-terser');
const url = require('rollup-plugin-url');
const { swc } = require('rollup-plugin-swc3');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const del = require('rollup-plugin-delete');

module.exports = () => {
  const plugins = [
    css({
      output: 'dist/styles.css',
    }),
		typescript({
      tsconfig: 'tsconfig.build.json',
      typescript: customTypescript,
      exclude: ['src/**/*.stories.mdx'],
    }),
    swc({
      include: /\.[mc]?[jt]sx?$/, // default
      exclude: /node_modules/, // default
      tsconfig: 'tsconfig.build.json', // default
      jsc: {
				"experimental": {
					"plugins": [
						[
							"@swc/plugin-styled-components",
							{
								"displayName": true,
								"ssr": true
							}
						]
					]
				}
			}
    }),
    url(),
    svgr(),
		commonjs(),
		nodeResolve(),
		peerDepsExternal(),
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.push(
			// del({ targets: 'dist/*' }),
			terser(),
		);
  }

  return {
    input: 'src/index.ts',
		output: {
      format: 'esm',
      dir: 'dist',
      preserveModules: true,
    },
    plugins,
  };
};
