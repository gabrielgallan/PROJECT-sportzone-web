import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginReactQuery } from '@kubb/plugin-react-query'
import { pluginTs } from '@kubb/plugin-ts'

export default defineConfig({
	input: {
		path: './openapi.json',
	},
	output: {
		path: './src/http/gen',
		clean: true,
	},
	plugins: [
		pluginOas(),
		pluginTs({
			output: { path: 'models' },
		}),
		pluginReactQuery({
			output: {
				path: 'hooks',
			},
		}),
	],
})
