import { defineConfig } from '@kubb/core'
import { pluginClient } from '@kubb/plugin-client'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginReactQuery } from '@kubb/plugin-react-query'
import { pluginTs } from '@kubb/plugin-ts'

export default defineConfig({
	input: {
		path: './openapi.json',
	},
	output: {
		path: './src/api/generated',
	},
	plugins: [
		pluginOas(),
		pluginTs({
			output: { path: 'models' },
		}),
		pluginClient({
			importPath: '@/api/client.ts',
			output: { path: 'client' },
		}),
		pluginReactQuery({
			output: {
				path: 'hooks',
			},
		}),
	],
})
