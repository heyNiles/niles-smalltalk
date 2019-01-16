module.exports = async (params, ctx) => {
  const { logger, modulePath, handlers: { git } } = ctx;
  const { image2braille, chalk } = logger;
  const imgData = await image2braille(
    `${modulePath}/assets/niles_dither.png`,
    {
      scale: 0.2,
      white_cutoff: 0.5,
    },
  );

  imgData.slice(2).forEach(line => logger.log(chalk.nilesGreen(line.slice(5).join(''))));

  logger.log(`       ${chalk.nilesGreen('Hello. I\'m Niles.')}`);
  logger.log();

  try {
    const name = await git.readConfig('user.name');

    // TODO: Handle name not set
    logger.log(`\nNice to meet you, ${name}\n`);
  } catch (error) {
    logger.log('\nNice to meet you.\n');
  }
};
