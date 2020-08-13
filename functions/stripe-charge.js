const stripe = require("stripe")("sk_live_cV2fJOb17YlCRdX9O7EVMgSG00uPhZW5Dq")

exports.handler = async function (event) {
  const { tokenId, email, name, description, amount } = JSON.parse(event.body)
  const customer = await stripe.customers.create({
    description: email,
    source: tokenId,
  })
  await stripe.charges.create({
    customer: customer.id,
    amount,
    name,
    description,
    currency: "usd",
  })
}
