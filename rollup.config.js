const svgr = require('@svgr/rollup');
const typescript = require('rollup-plugin-typescript2');
const customTypescript = require('ttypescript');
const css = require('rollup-plugin-css-only');
const url = require('rollup-plugin-url');
const { swc } = require('rollup-plugin-swc3');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

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
		peerDepsExternal(),
  ];

  return {
    input: 'src/index.ts',
		output: {
			// format: 'cjs',
      format: 'esm',
      dir: 'dist',
      // preserveModules: true,
    },
    plugins,
  };
};
