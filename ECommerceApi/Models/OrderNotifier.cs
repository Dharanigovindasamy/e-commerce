using System.Collections.Generic;

namespace ECommerceApi.Models
{
    public class OrderNotifier
    {
        private readonly List<IObserver> _observers = new();
        public void Attach(IObserver observer) => _observers.Add(observer);
        public void Detach(IObserver observer) => _observers.Remove(observer);
        public void Notify(string message)
        {
            foreach (var observer in _observers)
                observer.Update(message);
        }
    }
} 