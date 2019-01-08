module.exports = async (params, ctx) => {
  const { db, logger, analytics } = ctx;
  const reportedSession = db.recentSessions()
    .orderBy(['createdAt'], ['desc'])
    .take(3)
    .filter(session => session.queryResult && session.queryResult.intent.name !== 'smalltalk.rating_good')
    .first()
    .value();
  const recentGoodRatings = db.recentSessions()
    .orderBy(['createdAt'], ['desc'])
    .take(3)
    .filter(session => session.queryResult && session.queryResult.intent.name === 'smalltalk.rating_good')
    .value();

  logger.log('Glad to be of service, sir.');
  analytics.track('ratingGood', {
    reportedSession,
    seriousness: recentGoodRatings.length,
  });
};
