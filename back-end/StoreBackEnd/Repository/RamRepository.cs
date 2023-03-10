using StoreBackEnd.Models;
using System.Data.SqlClient;
using System.Data;
using Dapper;
using System.Diagnostics.Metrics;

namespace StoreBackEnd.Repository
{
    public class RamRepository : IRamRepository
    {
        private readonly string _connectionString;
        public RamRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<List<Ram>> GetRamsAsync()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                string query = @"SELECT * FROM Rams";
                return (await db.QueryAsync<Ram>(query, null)).ToList();
            }
        }

        public async Task DeleteRamByIdAsymc(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                string query = "DeleteRamById @Id";
                await db.ExecuteAsync(query, new { id });
            }
        }

        public async Task<Ram> GetRamByIdAsync(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                string query = @"exec GetRamById @Id";
                var result = await(db.QueryFirstOrDefaultAsync<Ram>(query, new { id }));
                return result;
            }
        }

        public async Task<Ram> InsertRamAsync(AddRamModel model)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                string query = @"AddRam @Property";
                var insertedId = await db.QueryFirstAsync<int>(query, model);
                var inserted = await GetRamByIdAsync(insertedId);
                return inserted;
            }

        }

        public async Task<Ram> UpdateRamAsync(Ram ram)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                string query = @"UpdateRam @Id, @Property";
                var updatedId = await db.QueryFirstAsync<int>(query, ram);
                var result = await GetRamByIdAsync(updatedId);
                return result;
            }
        }
    }
}
