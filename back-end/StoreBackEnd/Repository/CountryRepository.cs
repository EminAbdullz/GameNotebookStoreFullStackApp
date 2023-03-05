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

        public async Task<Country> InsertCountryAsync(AddCountryModel model)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                string query = @"AddCountry @Name ";
                var insertedId = await db.QueryFirstAsync<int>(query, model);
                var inserted = await GetCountryByIdAsync(insertedId);
                return inserted;
            }
        }

        public async Task<List<Country>> GetCountriesAsync()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                string query = @"SELECT * FROM Countries";
                return (await db.QueryAsync<Country>(query, null)).ToList();
            }
        }

        public async Task<Country> GetCountryByIdAsync(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                string query = @"exec GetCountryById @Id";
                var result = await(db.QueryFirstOrDefaultAsync<Country>(query, new { id }));
                return result;
            }
        }

        public async Task DeleteCountryByIdAsync(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                string query = "DeleteCountryById @Id";
                await db.ExecuteAsync(query, new { id });
            }
        }

        public async Task<Country> UpdateCountryAsync(Country country)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                string query = @"UpdateCountry @Id, @Name";
                var updatedId = await db.QueryFirstAsync<int>(query, country);
                var result = await GetCountryByIdAsync(updatedId);
                return result;
            }
        }
    }
}
