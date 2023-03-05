using StoreBackEnd.Models;
using System.Data.SqlClient;
using System.Data;
using Dapper;

namespace StoreBackEnd.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly string _connectionString;
        public ProductRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<Product> AddProductAsync(AddProductModel product)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                string query = @" exec AddProduct @Title, @Price, @Description, @ImageUrl, @BestSeller , @Premium , @Available ,  @BrandId , @CountryId , @RamId ";
               var insertedId =  await db.QueryFirstAsync<int>(query, product);
                var insertedProduct = await GetProductByIdAsync(insertedId);
                return insertedProduct;
            }
        }

      

        public async Task<List<Product>> GetAllProductsAsync()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                
                string query = @"exec GetProducts";
                return (await db.QueryAsync<Product>(query, null)).ToList();
            }
        }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                string query = @"exec GetProductById @Id = @id";
                var result = await (db.QueryFirstOrDefaultAsync<Product>(query, new { id }));
                return result;
            }
        }

        public async Task<List<Product>> GetProductsByTitle(string title)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                string query = @"exec GetProductsByTitle @Title = @title";
                return (await db.QueryAsync<Product>(query, new { title})).ToList();
            }
        }


        public async Task DeleteProductsAsync(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                string query = "DELETE  FROM Products WHERE  Id = @id";
                await db.ExecuteAsync(query, new { id });
            }
        }

        public async Task<Product> UpdateProduct(UpdateProductModel product)
        {

            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                string query = @"exec UpdateProduct @Id,  @Title, @Price, @Description, @ImageUrl, @BestSeller , @Premium , @Available ,  @BrandId , @CountryId , @RamId ";
                var updatedId = await db.QueryFirstAsync<int>(query, product);
                return await GetProductByIdAsync((int)updatedId);
            }

        }
    }
}
