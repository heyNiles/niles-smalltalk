module.exports = (params, ctx) => {
  const { db, logger, analytics } = ctx;
  const reportedSession = db.recentSessions()
    .orderBy(['createdAt'], ['desc'])
    .take(3)
    .filter(session => !session.queryResult || session.queryResult.intent.name !== 'smalltalk.rating_bad')
    .first()
    .value();
  const recentBadRatings = db.recentSessions()
    .orderBy(['createdAt'], ['desc'])
    .take(3)
    .filter(session => session.queryResult && session.queryResult.intent.name === 'smalltalk.rating_bad')
    .value();

  logger.log('I am terribly sorry, sir. I will report this to my supervisor.');
  analytics.track('ratingBad', {
    reportedSession,
    seriousness: recentBadRatings.length,
  });
};
