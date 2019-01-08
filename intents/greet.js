module.exports = intent => intent.ns('greet')
  .can('say hi')
  .examples([
    'hey',
    'hi whats up',
  ])
  .command([
    '~[hi] ~[hi?] ~[hi?]',
    '~[greetings] ~[greetings?]',
    '~[hi] ~[greetings] ~[hi?]',
    '~[greetings] ~[hi] ~[hi?]',
  ])
  .alias('hi', ['hi', 'hello', 'hey', 'howdy', 'hola', 'yo', 'heyo'])
  .alias('greetings', [
    'greetings',
    'how ~[are] ~[you] ~[doing?]',
    '~[whats] up',
    'how is it going',
    'good morning',
    'good afternoon',
    'good evening',
    'good day',
    'morning',
    'mornin',
    'evenin',
    'how ~[are] things ~[going?]',
    '~[are] ~[you] around',
    '~[whats]up',
    'sup',
  ])
  .alias('whats', ['whats', 'what is']);
