using System;

namespace ECommerceApi.Models
{
    public class SmsNotifier : IObserver
    {
        public void Update(string message)
        {
            // Simulate sending SMS
            Console.WriteLine($"SMS sent: {message}");
        }
    }
} 