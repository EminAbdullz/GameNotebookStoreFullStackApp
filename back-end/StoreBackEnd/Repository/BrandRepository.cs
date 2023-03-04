using StoreBackEnd.Models;
using System.Data.SqlClient;
using System.Data;
using Dapper;

namespace StoreBackEnd.Repository
{
    public class BrandRepository : IBrandRepository
    {
        private readonly string _connectionString;
        public BrandRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<List<Brand>> GetBrandsAsync()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                string query = @"SELECT * FROM Brands";
                return (await db.QueryAsync<Brand>(query, null)).ToList();
            }
        }
    }
}
