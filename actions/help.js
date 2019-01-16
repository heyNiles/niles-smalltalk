module.exports = (params, ctx) => {
  const skills = ctx.skills.installed;
  const { logger } = ctx;
  const { chalk } = logger;

  logger.log('I can...\n');
  skills.forEach((skill) => {
    logger.log(`  ${chalk.nilesGreen('✔')}  ${skill.description[0]}`);
    skill.intents
      .filter(intent => !intent.skipHelp)
      .forEach((intent) => {
        ctx.logger.log(`    • ${intent.description[0]} ${chalk.dim(`"${intent.cmdExamples[0]}"`)}`);
      });
    ctx.logger.log();
  });
};
