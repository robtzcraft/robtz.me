import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';                              // Used for relative paths

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),		                            // Alias para 'src'
			"@components": path.resolve(__dirname, "./src/components"),
			// '@utils': path.resolve(__dirname, './src/utils'),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@layouts": path.resolve(__dirname, "./src/layouts"),
			// '@pages': path.resolve(__dirname, './src/pages'),
			"@public": path.resolve(__dirname, "./public"),
			"@documents": path.resolve(__dirname, "./src/documents"),
		},
	},
});
