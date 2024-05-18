const cron = require('node-cron');
const { checkFoodExpiration } = require('./expirationChecker');

// Schedule task to run every day at 8:00 AM, set the timezone if necessary (syntax: minute hour) in military time
cron.schedule('00 8 * * *', () => {
  console.log('Running scheduled task: checkFoodExpiration');
  try {
    checkFoodExpiration();
  } catch (error) {
    console.error('Error during scheduled task:', error);
  }
}, {
  timezone: 'America/New_York'
});