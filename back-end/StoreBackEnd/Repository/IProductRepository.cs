using StoreBackEnd.Models;

namespace StoreBackEnd.Repository
{
    public interface IProductRepository
    {
        Task<List<Product>> GetAllProductsAsync();
        Task<Product> AddProductAsync(AddProductModel product);

        Task<Product> GetProductByIdAsync(int id);
        Task<List<Product>> GetProductsByTitle(string title);

        Task DeleteProductsAsync(int id);
        Task UpdateProduct(UpdateProductModel product);


    }
}
