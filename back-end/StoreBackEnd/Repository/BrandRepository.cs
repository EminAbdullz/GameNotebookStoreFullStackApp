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

        public async Task DeleteBrandByIdAsync(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                string query = "DeleteBrandById @Id";
                await db.ExecuteAsync(query, new { id });
            }
        }

        public async Task<Brand> GetBrandByIdAsync(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                //The stored procedure that selects one pizza by Id
                string query = @"exec GetBrandById @Id";
                var result = await (db.QueryFirstOrDefaultAsync<Brand>(query, new { id }));
                return result;
            }
        }

        public async Task<List<Brand>> GetBrandsAsync()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                string query = @"SELECT * FROM Brands ORDER BY Id";
                return (await db.QueryAsync<Brand>(query, null)).ToList();
            }
        }

        public async Task<Brand> InsertBrand(AddBrandModel brand)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                string query = @"AddBrand @Name ";
                var insertedId =  await db.QueryFirstAsync<int>(query,brand);
                var inserted = await GetBrandByIdAsync(insertedId);
                return inserted;
            }

        }

        public async Task <Brand> UpdateBrand(Brand brand)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                string query = @"UpdateBrand @Id, @Name";
                var updatedId = await db.QueryFirstAsync<int>(query, brand);
                var result = await GetBrandByIdAsync(updatedId);
                return result;
            }
        }
    }
}
