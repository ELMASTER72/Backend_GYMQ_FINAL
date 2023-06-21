import { Router } from "express";
const router = Router();

/** import all controllers */
import * as controller from '../controllers/appController.js';
import * as controller_shopping from "../controllers/CartController.js";
import { registerMail } from '../controllers/mailer.js'
import Auth, { localVariables } from '../middleware/auth.js';
import * as controller_gym from "../controllers/gymController.js";
import * as controller_rutine from "../controllers/rutinaController.js"
import { Checkout } from "../controllers/CheckoutController.js";
// import { Auth2 } from "../middleware/auth2.js";






/** POST Methods */
router.route('/register').post(controller.register); // register user
router.route('/registerMail').post(registerMail); // send the email
router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()); // authenticate user
router.route('/login').post(controller.verifyUser,controller.login); // login in app
router.route('/products-cart').post(controller_shopping.addProductCart)
router.route('/checkout').post(Checkout)

/** GET Methods */
// router.route('/user').get(Auth, Auth2(["admin"]),controller.getUserall)
router.route('/user/:username').get(controller.getUser) // user with username
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP) // generate random OTP
router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP) // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession) // reset all the variables
router.route('/products').get(controller_shopping.getProduct)
router.route('/products-cart').get(controller_shopping.getProductCart)
router.route('/gym').get(controller_gym.getGym)
router.route('/gym/:name').get(controller_gym.getInformation)
router.route('/rutine').get(controller_rutine.getRutine)
router.route('/rutine/:name').get(controller_rutine.getDescription)

/** PUT Methods */
router.route('/updateuser').put(Auth, controller.updateUser); // is use to update the user profile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); // use to reset password
router.route('/products-cart/:productId').put(controller_shopping.putProduct)


/** Delete Methods */
router.route('/products-cart/:productId').delete(controller_shopping.deleteProduct)




export default router;