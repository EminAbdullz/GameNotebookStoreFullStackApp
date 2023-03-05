using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StoreBackEnd.Models;
using StoreBackEnd.Repository;

namespace StoreBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _repository;
        public ProductsController(IProductRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var products = await _repository.GetAllProductsAsync();
            return Ok(products);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetById(int id) 
        {
            var result = await _repository.GetProductByIdAsync(id);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpGet]
        [Route("title/{title}")]
        public async Task<IActionResult> GetByTitle(string title) 
        {
            var result = await _repository.GetProductsByTitle(title);
            return result.Count <=0 ? NotFound() : Ok(result);
        }


        [HttpPost]
        public async Task<IActionResult> InsertProduct([FromForm] AddProductModel model)
        {
            try
            {
                var result = await _repository.AddProductAsync(model);
                return Ok(result);

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id) 
        {
            if (await _repository.GetProductByIdAsync(id) == null) return NotFound("No such product");
            await _repository.DeleteProductsAsync(id); return Ok("Deleted");
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromForm] UpdateProductModel product)
        {
            try
            {
                var result = await _repository.UpdateProduct(product);
                return Ok(result);
            }
            catch (Exception)
            {

                return BadRequest("Something went wrong");
            }
        }



    }
}
