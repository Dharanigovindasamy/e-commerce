using System.Threading.Tasks;

namespace ECommerceApi.Models
{
    public class PayPalPayment : IPaymentStrategy
    {
        public async Task<string> Pay(decimal amount)
        {
            // Integrate with PayPal API
            return $"Paid {amount} with PayPal";
        }
    }
} 