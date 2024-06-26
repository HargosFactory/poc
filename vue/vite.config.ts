import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import util from 'util'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					// treat all tags with a ui5- as custom elements
					isCustomElement: tag => tag.includes('ui5-')
				}
			}
		}),
		AutoImport({
			dirs: [
				"./src/lib/zod/**",
				"./src/composables/**",
				"./src/stores/**",
			],
			imports: [
				"vue",
				"vue-router",
			],
			ignore: ["_**"]
		}),
		Components({
			dirs: ["src/components"]
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'vue': 'vue/dist/vue.esm-bundler.js'
		}
	},
	define: {
		'process.env': {
      		NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    	},
	},
	server: {
		host: '0.0.0.0'
	},
})
