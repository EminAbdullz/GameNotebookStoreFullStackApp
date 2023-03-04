using StoreBackEnd.Models;
using System.Data.SqlClient;
using System.Data;
using Dapper;

namespace StoreBackEnd.Repository
{
    public class CountryRepository : ICountryRepository
    {
        private readonly string _connectionString;
        public CountryRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<List<Country>> GetCountriesAsync()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                string query = @"SELECT * FROM Countries";
                return (await db.QueryAsync<Country>(query, null)).ToList();
            }
        }
    }
}
