module.exports = intent => intent.ns('yes')
  .can('understand affirmation')
  .examples([
    'yes',
    'ok',
  ])
  .command([
    'yes',
    'y',
    'yap',
    'great',
    'cool',
    'ok',
    'go',
    'sure',
    'definitely',
  ], { train: 0, test: 0 });
