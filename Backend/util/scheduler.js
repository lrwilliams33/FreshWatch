const cron = require('node-cron');
const { checkFoodExpiration } = require('./expirationChecker');
console.log('Scheduler called');

// Schedule task to run every day at 8:00 AM, set the timezone if necessary (syntax: minute hour) in military time
cron.schedule('54 21 * * *', () => {
  console.log('Running scheduled task: checkFoodExpiration');
  try {
    checkFoodExpiration();
  } catch (error) {
    console.error('Error during scheduled task:', error);
  }
}, {
  timezone: 'America/New_York'
});