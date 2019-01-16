module.exports = intent => intent.ns('acquaintance')
  .can('introduce myself')
  .examples([
    'nice to meet u',
    'introduce yourself',
  ])
  .command([
    '~[talk] ~[some?] ~[things] about ~[you]',
    'why ~[are?] ~[you] here',
    'I want ~[to] know ~[you] better',
    'I want ~[to] know ~[more?] ~[things] about ~[you]',
    '~[nice] ~[to] meet ~[you]',
    '~[talk?] about ~[you]',
    'describe ~[you]rself',
    'introduce ~[you]rself',
    '~[what] ~[are] ~[you]',
  ], { train: 0, test: 10 })
  .alias('talk', ['talk', 'tell me', 'talk to me'])
  .alias('nice', ['nice', 'pleased', 'glad', 'happy'])
  .alias('things', ['things', 'stuff'])
  .alias('what', ['what', 'who', 'wtf'])
  .readsGitSettingsTo('greet you by name');
