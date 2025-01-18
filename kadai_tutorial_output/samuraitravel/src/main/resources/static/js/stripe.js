const stripe = Stripe('pk_test_51Qg6izDviYp0WlZPRgcY7xtuyzAaSbPdDr6josJaRFsS04JMj6OYuF0Y9DGEsRi11akOUgiFiGxLtOdcn9M4j4Ci00Ak3fBfNW');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});