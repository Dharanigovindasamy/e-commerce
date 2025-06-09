using System.Data;
using Npgsql;

namespace ECommerceApi.Models
{
    public class PostgresConnectionFactory : IDbConnectionFactory
    {
        private readonly string _connectionString;
        public PostgresConnectionFactory(string connectionString) => _connectionString = connectionString;
        public IDbConnection CreateConnection() => new NpgsqlConnection(_connectionString);
    }
} 