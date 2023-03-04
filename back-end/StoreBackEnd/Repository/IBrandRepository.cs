using StoreBackEnd.Models;

namespace StoreBackEnd.Repository
{
    public interface IBrandRepository
    {
        Task<List<Brand>> GetBrandsAsync();
    }
}
