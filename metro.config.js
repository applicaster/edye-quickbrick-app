const { resolve } = require("path");
const fs = require("fs");

const pluginFoldersPath = resolve(__dirname, "./plugins");
const pluginFolders = fs.readdirSync(pluginFoldersPath);

const config = {
  resolver: {
    extraNodeModules: {
      "react-native": resolve(__dirname, "./node_modules/react-native"),
    },
  },
  projectRoot: resolve(__dirname, "./development-app"),
  /* if you have multiple plugins, add them here so the react packager will watch these too */
  watchFolders: [
    ...pluginFolders.map((pluginFolder) =>
      resolve(pluginFoldersPath, pluginFolder)
    ),
    resolve(__dirname),
  ],
};

module.exports = config;
