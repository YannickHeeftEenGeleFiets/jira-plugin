export default {
  build: {
    target: "modules",
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
};
