const cron = require('node-cron');
const { checkFoodExpiration } = require('./expirationChecker');

// Schedule task to run every day at 8:00 AM
cron.schedule('43 8 * * *', () => {
  console.log('Running scheduled task: checkFoodExpiration');
  checkFoodExpiration();
});