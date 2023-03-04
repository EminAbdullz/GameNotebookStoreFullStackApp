using StoreBackEnd.Models;

namespace StoreBackEnd.Repository
{
    public interface IRamRepository
    {
        Task<List<Ram>> GetAllAsync();
    }
}
