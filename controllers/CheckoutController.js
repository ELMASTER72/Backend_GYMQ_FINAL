import Stripe from "stripe";
import ENV from '../config.js'

const stripe = Stripe(ENV.STRIPE_SECRET)

export async function Checkout(req,res){
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: req.body.lineItems,
            mode: 'payment',
            payment_method_types: ['card'],
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000'
        })
        return res.status(201).json(session)
    } catch (error) {
      return res.status(500).json(error)  
    }
}