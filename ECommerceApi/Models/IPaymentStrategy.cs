namespace ECommerceApi.Models
{
    public interface IPaymentStrategy
    {
        Task<string> Pay(decimal amount);
    }
} 