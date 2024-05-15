const Item = require('../models/itemsModel');
const User = require('../models/userModel');
const { sendEmail } = require('../controllers/emailsController');

const fetchExpiringFoods = async (days = 3) => {
  const expireThreshold = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  return await Item.find({ expirationDate: { $lte: expireThreshold } }).exec();
}

const checkFoodExpiration = async () => {
  try {
      const expiringFoods = await fetchExpiringFoods();
      for (const food of expiringFoods) {
          const { title, expirationDate, user_id } = food;

          const user = await User.findById(user_id);
          if (user) {
            await sendEmail(user.email, title, expirationDate);
          }
      };
  } catch (error) {
      console.error('Error checking food expiration:', error);
  }
}

module.exports = { checkFoodExpiration };