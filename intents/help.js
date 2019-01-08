module.exports = intent => intent.ns('help')
  .can('provide help')
  .examples([
    'help',
    'what can you do',
  ])
  .command([
    'help',
    'what can ~[you] do ~[for me?]',
    'what do ~[you] know',
    '~[how?] can ~[you] help ~[me?]',
    'help ~[me?]',
    '~[show] ~[me?] what ~[you]ve got',
    '~[show] ~[me?] ~[some?] examples',
    '~[show] ~[me?] ~[some?] hints',
    '~[show] ~[me?] ~[some?] ~[example?] ~[commands]',
    '~[show] ~[available?] ~[commands]',
    'what ~[commands] do ~[you] have',
    'what ~[are] ~[you]r ~[commands]',
  ], { train: 100, test: 10 })
  .alias('commands', ['commands', 'skills']);
