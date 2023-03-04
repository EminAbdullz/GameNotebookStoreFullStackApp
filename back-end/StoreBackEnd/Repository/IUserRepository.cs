using StoreBackEnd.Models;

namespace StoreBackEnd.Repository
{
    public interface IUserRepository
    {
        Task<List<User>> GetAllUsersAsync();

        Task<User> AuthorizeUser(string login, string password);

        Task CreateUserAsync(AddUserModel user);
    }
}
