using System;

namespace ECommerceApi.Models
{
    public class EmailNotifier : IObserver
    {
        public void Update(string message)
        {
            // Simulate sending email
            Console.WriteLine($"Email sent: {message}");
        }
    }
} 