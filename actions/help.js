module.exports = (params, ctx) => {
  const skills = ctx.skills.installed;

  ctx.logger.log('I can...\n');
  skills.forEach((skill) => {
    ctx.logger.log(`  ✔  ${skill.description[0]}`);
    skill.intents.forEach((intent) => {
      ctx.logger.log(`    • ${intent.description[0]} ("${intent.examples[0]}")`);
    });
    ctx.logger.log();
  });
};
