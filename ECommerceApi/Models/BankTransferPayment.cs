using System.Threading.Tasks;

namespace ECommerceApi.Models
{
    public class BankTransferPayment : IPaymentStrategy
    {
        public async Task<string> Pay(decimal amount)
        {
            // Simulate bank transfer
            return $"Paid {amount} with Bank Transfer";
        }
    }
} 