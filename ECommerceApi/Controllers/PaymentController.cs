using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ECommerceApi.Data;
using ECommerceApi.Models;
using Microsoft.AspNetCore.Authorization;
using Stripe;

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
  }
  public class PaymentRequest { public decimal Amount { get; set; } }

}