using System.Threading.Tasks;

namespace ECommerceApi.Models
{
    public class PaymentContext
    {
        private IPaymentStrategy _strategy;
        public void SetStrategy(IPaymentStrategy strategy) => _strategy = strategy;
        public Task<string> Pay(decimal amount) => _strategy.Pay(amount);
    }
} 