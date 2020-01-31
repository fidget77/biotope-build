const livereload = require('rollup-plugin-livereload');
const getPort = require('get-port');

const findPort = (port, range = 999) => getPort({
  port: getPort.makeRange(port, port + range),
});

const livereloadPlugin = () => ({
  name: 'biotope-build-plugin-livereload',
  hook: 'before-build',
  async runner({ output, serve }, [{ build }]) {
    if (!serve) {
      return;
    }
    const port = await findPort(35729);

    build.plugins.push(livereload({
      port,
      watch: output,
      verbose: false,
    }));
  },
});

module.exports = livereloadPlugin;
