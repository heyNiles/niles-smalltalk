module.exports = intent => intent.ns('rating_bad')
  .can('understand bad ratings')
  .examples([
    'u suck',
    'that was bad',
    'lame',
  ])
  .command([
    '~[annoying]',
    '~[you] ~[annoy me]',
    '~[intensity?] ~[annoying]',
    '~[you are?] ~[annoying]',
    '~[you are?] ~[annoying me]',
    '~[you are] ~[starting to] ~[annoy me]',
    '~[i am] ~[annoyed]',
    '~[you are] making me ~[annoyed]',
    'i ~[intensity?] hate ~[you]',
    '~[you] piece of shit',
    'fuck ~[you]',
    'fuck off',
    'bad bot',
    'bad boy',
    '~[you] suck',
    'suck ~[my?] dick',
  ], { train: 600, test: 60 })
  .command([
    '~[you] ~[intensity?] ~[annoy me] ~[now?]',
    '~[you are] ~[starting to be?] ~[intensity?] ~[annoying] ~[now?]',
    '~[i am] ~[starting to be?] ~[intensity?] ~[annoyed] ~[now?]',
    '~[you are] ~[intensity?] ~[annoying me] ~[now?]',
    '~[you are] ~[starting to] ~[intensity?] ~[annoy me] ~[now?]',
    '~[you are] making me ~[intensity?] ~[annoyed] ~[now?]',
    '~[you are] ~[starting to] make me ~[intensity?] ~[annoyed] ~[now?]',
    'how ~[intensity?] ~[annoying] ~[you are?]',
    '~[you] ~[intensity?] suck ~[now?]',
  ], { train: 600, test: 60, type: 'advanced' })
  .alias('annoying', [
    'annoying', 'irritating', 'crappy', 'shitty', 'useless', 'an asshole',
    'crap', 'clueless', 'terrible', 'garbage', '~[a?] [piece of?] shit',
    '~[a?] waste ~[of time?]', 'lame', 'disgusting', 'bad', 'horrible',
    '~[not] good', '~[not] so good', '~[not] smart', '~[not] cool', '~[not] nice',
    '~[not] useful', '~[not] impressive', 'worthless', 'the worst ~[ever?]',
    '~[a?] loser', 'awful', 'worse ~[and worse?]',
  ])
  .alias('annoy me', [
    'annoy me', 'piss me off', 'bother me', 'make me sad', 'dissapoint me', 'let me down',
  ])
  .alias('annoying me', [
    'annoying me', 'pissing me off', 'bothering me', 'making me sad',
    'dissapointing me', 'letting me down',
  ])
  .alias('annoyed', ['annoyed', 'pissed off', 'sad', 'angry', 'dissapointed'])
  .alias('not', ['not', '~[less]']);
