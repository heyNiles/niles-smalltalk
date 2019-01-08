module.exports = intent => intent.ns('rating_good')
  .can('understand good ratings')
  .examples([
    'u rock',
    'thats awesome',
    'i love u',
  ])
  .command([
    '~[impressive]',
    '~[thanks]',
    '~[you] ~[impress me]',
    '~[intensity?] ~[impressive]',
    '~[you are?] ~[impressive]',
    '~[you are?] ~[impressing me]',
    '~[you are] ~[starting to] ~[impress me]',
    '~[i am] ~[impressed]',
    '~[you are] making me ~[impressed]',
    'i ~[intensity?] love ~[you]',
    'i ~[intensity?] like ~[you]',
    '~[you] ~[intensity?] rock',
    '~[you] made my day',
    '~[you are] ~[starting to] learn',
    '~[you are] learning',
    '~[thanks] ~[a lot?]',
    '~[impressive] ~[job?]',
    '~[impressive] ~[work?]',
    '~[thanks] ~[intensity?] much',
    'good bot',
    'good boy',
    'well done',
    'hell yeah',
    'kisses',
    'kiss ~[you?]',
  ], { train: 600, test: 60 })
  .command([
    '~[you] ~[intensity?] ~[impress me] ~[now?]',
    '~[you are] ~[starting to be?] ~[intensity?] ~[impressive] ~[now?]',
    '~[i am] ~[starting to be?] ~[intensity?] ~[impressed] ~[now?]',
    '~[you are] ~[intensity?] ~[impressing me] ~[now?]',
    '~[you are] ~[starting to] ~[intensity?] ~[impress me] ~[now?]',
    '~[you are] making me ~[intensity?] ~[impressed] ~[now?]',
    '~[you are] ~[starting to] make me ~[intensity?] ~[impressed] ~[now?]',
    'how ~[intensity?] ~[impressing] ~[you are?]',
  ], { train: 600, test: 60, type: 'advanced' })
  .alias('impressive', [
    'good', 'brilliant', 'lovely', 'smart', 'useful', 'addictive',
    'amazing', 'awesome', 'superb', 'incredible', 'the best ~[ever?]',
    'cool', 'hip', 'nice', 'pretty', 'helpful', 'perfect', 'great',
    'super', 'fantastic', 'sweet', '~[not] bad', '~[not] so bad',
    '~[not] horrible', '~[not] sucky', '~[not] worse', 'better ~[and better]',
    'a pro', 'a genius', 'a lifesaver',
  ])
  .alias('impress me', [
    'impress me', 'blow my mind', 'make me fall in love',
    'make me happy', 'blow me away', 'make me like ~[you]',
  ])
  .alias('impressing me', [
    'impressing me', 'blowing my mind', 'making me happy', 'blowing me away',
  ])
  .alias('impressed', ['impressed', 'in love', 'addicted', 'hooked', 'sold'])
  .alias('not', ['not', '~[less]'])
  .alias('thanks', [
    'thank ~[you]', 'thanks', 'god bless ~[you]', 'tnx', 'thx', '10x',
  ]);
