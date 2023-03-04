using StoreBackEnd.Models;
using System.Data.SqlClient;
using System.Data;
using Dapper;

namespace StoreBackEnd.Repository
{
    public class RamRepository : IRamRepository
    {
        private readonly string _connectionString;
        public RamRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<List<Ram>> GetAllAsync()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                string query = @"SELECT * FROM Rams";
                return (await db.QueryAsync<Ram>(query, null)).ToList();
            }
        }

        
    }
}
