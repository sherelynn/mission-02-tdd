
import { defineConfig } from 'vite'; // Import the defineConfig function from Vite

// Export the Vite configuration
export default defineConfig({
    root: './', // Set the root directory for Vite (relative to the current file)
    build: {
        outDir: 'dist', // Specify the output directory for the build files
    },
});