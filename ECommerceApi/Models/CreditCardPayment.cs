using System.Threading.Tasks;

namespace ECommerceApi.Models
{
    public class CreditCardPayment : IPaymentStrategy
    {
        public async Task<string> Pay(decimal amount)
        {
            // Integrate with Stripe or similar
            return $"Paid {amount} with Credit Card";
        }
    }
} 