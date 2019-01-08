module.exports = skill => skill
  .can('understand basic conversation')
  .alias('you', ['you', 'u'])
  .alias('are', ['are', 'r'])
  .alias('i am', ['i am', 'im'])
  .alias('to', ['to', '2'])
  .alias('you are', ['~[you] ~[are]', '~[you]re', 'why ~[are] ~[you]', 'that is', 'thats'])
  .alias('show', ['show', 'display', 'list', 'give'])
  .alias('starting to', ['starting to', 'beginning to'])
  .alias('starting to be', ['~[starting to] be', '~[starting to] get', 'becoming', 'getting'])
  .alias('intensity', ['~[just?] ~[so?] ~[totally?] ~[totally]'])
  .alias('totally', [
    'very', 'totally', 'super', 'incredibly', 'massively', 'fucking', 'fuckin',
    'fckn', 'effin', 'f**', 'amazingly', 'mega', 'uber',
  ])
  .alias('more', ['more', 'more and more'])
  .alias('less', ['less', 'less and less'])
  .alias('now', ['now', 'right now']);
