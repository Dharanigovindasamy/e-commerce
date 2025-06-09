using System;

namespace ECommerceApi.Models
{
    public class AdminDashboardNotifier : IObserver
    {
        public void Update(string message)
        {
            // Simulate admin dashboard notification
            Console.WriteLine($"Admin dashboard notified: {message}");
        }
    }
} 