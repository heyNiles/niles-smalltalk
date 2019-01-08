module.exports = intent => intent.ns('no')
  .can('understand negation')
  .examples([
    'no',
    'cancel',
  ])
  .command([
    'no',
    'n',
    'nope',
    'cancel',
    'stop',
    'pass',
    'quit',
    'exit',
  ], { train: 0, test: 0 });