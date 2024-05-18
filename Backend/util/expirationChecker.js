const Item = require('../models/itemsModel');
const User = require('../models/userModel');
const { sendEmail } = require('../controllers/emailsController');

const fetchExpiringFoods = async (userId, days = 3) => {
   // finds food that is expiring in 3 days or has already expired
  const expireThreshold = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  return await Item.find({ expirationDate: { $lte: expireThreshold } }).exec();
}

const checkFoodExpiration = async () => {
  try {
      const expiringFoods = await fetchExpiringFoods();
      for (const food of expiringFoods) {
          const { title, expirationDate, user_id } = food;
          const expired = new Date(expirationDate) < new Date();

          const user = await User.findById(user_id);
          if (user) {
            try {
              await sendEmail(user.email, title, expirationDate, expired);
              console.log(`Email sent to ${user.email} for food item ${title} expiring on ${expirationDate}`);
              console.log(' ')
            } catch (emailError) {
              console.error(`Error sending email to ${user.email} for food item ${title}:`, emailError);
              console.log(error)
            }
          }
          else {
            console.log(`User with ID ${user_id} not found`);
          }
      };
  } catch (error) {
      console.error('Error checking food expiration:', error);
  }
}

module.exports = { checkFoodExpiration };