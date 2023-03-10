using StoreBackEnd.Models;

namespace StoreBackEnd.Repository
{
    public interface IRamRepository
    {
        Task<List<Ram>> GetRamsAsync();
        Task<Ram> GetRamByIdAsync(int id);

        Task<Ram> InsertRamAsync(AddRamModel model);

        Task DeleteRamByIdAsymc(int id);
        Task<Ram> UpdateRamAsync(Ram ram);
    }
}
