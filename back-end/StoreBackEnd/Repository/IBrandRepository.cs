using StoreBackEnd.Models;

namespace StoreBackEnd.Repository
{
    public interface IBrandRepository
    {
        Task<List<Brand>> GetBrandsAsync();
        Task <Brand> GetBrandByIdAsync(int id);
        Task<Brand> InsertBrand(AddBrandModel brand);

        Task DeleteBrandByIdAsync(int id);
        Task<Brand> UpdateBrand(Brand brand);

    }
}
