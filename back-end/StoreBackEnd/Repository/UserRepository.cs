using StoreBackEnd.Models;
using System.Data.SqlClient;
using System.Data;
using Dapper;

namespace StoreBackEnd.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly string _connectionString;
        public UserRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<User> AuthorizeUser(string login, string password)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                
                string query = @"exec AuthorizeUser @Login = @login, @Password = @password";
                var result = await(db.QueryFirstOrDefaultAsync<User>(query, new { login, password }));
                return result!;
            }
        }

        public async Task CreateUserAsync(AddUserModel user)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                string query = @" exec AddUser @Login  , @Password   , @Name   , @Surname  , @Email   , @Phone   , @BirthDate ";
                await db.ExecuteAsync(query, user);
            }
        }

        public async Task<List<User>> GetAllUsersAsync()

        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                string query = @"GetAllUsers";
                return (await db.QueryAsync<User>(query, null)).ToList();
            }
        }
    }
}
