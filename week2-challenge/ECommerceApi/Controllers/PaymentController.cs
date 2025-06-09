using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ECommerceApi.Data;
using Microsoft.AspNetCore.Authorization;
using Stripe;
using ECommerceApi.Models.Payment;
using ECommerceApi.Models.Payment.Strategies;
using ECommerceApi.Models;

namespace ECommerceApi.Controllers
{
[ApiController]
  [Route("api/payment")]
  public class PaymentController : ControllerBase
  {
      [HttpPost("create-payment-intent")]
      public async Task<IActionResult> CreatePaymentIntent([FromBody] PaymentRequest request)
      {
          try
          {
              StripeConfiguration.ApiKey = Environment.GetEnvironmentVariable("STRIPE_SECRET_KEY"); // Replace with your Stripe test secret key
              var options = new PaymentIntentCreateOptions
              {
                  Amount = (long)(request.Amount * 100), // Stripe expects cents
                  Currency = "usd",
              };
              var service = new PaymentIntentService();
              var intent = await service.CreateAsync(options);
              return Ok(new { clientSecret = intent.ClientSecret });
          }
          catch (Exception ex)
          {
              // Log the error (optional)
              return StatusCode(500, new { error = ex.Message });
          }
      }

      [HttpPost("process")]
      public IActionResult ProcessPayment([FromBody] PaymentRequest request)
      {
          var context = new PaymentContext();

          switch (request.PaymentMethod)
          {
              case "CreditCard":
                  context.SetStrategy(new CreditCardPayment());
                  break;
              case "PayPal":
                  context.SetStrategy(new PayPalPayment());
                  break;
              case "BankTransfer":
                  context.SetStrategy(new BankTransferPayment());
                  break;
              default:
                  return BadRequest("Invalid payment method.");
          }

          bool success = context.Pay(request);

          // Observer pattern: Notify user via email (already implemented in your backend)
          // subject.Notify(request.Email, success ? "Payment successful" : "Payment failed");

          return Ok(new { success });
      }
  }

}