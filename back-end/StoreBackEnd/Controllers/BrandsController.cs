using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StoreBackEnd.Models;
using StoreBackEnd.Repository;

namespace StoreBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandsController : ControllerBase
    {
        private readonly IBrandRepository _repos;
        public BrandsController(IBrandRepository repos)
        {
            _repos = repos;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _repos.GetBrandsAsync());
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetBrand(int id)
        {
            return Ok(await _repos.GetBrandByIdAsync(id));
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteBrand(int id)
        {
            try
            {

            await _repos.DeleteBrandByIdAsync(id);
            return Ok($"Deleted at id {id}");
            }
            catch (Exception ex)
            {

return  BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddBrand([FromForm] AddBrandModel brand) 
        {
            try
            {
                var result = await _repos.InsertBrand(brand);
                return Ok(result); 
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateBrand([FromForm] Brand brand) 
        {
            try
            {
                var result = await _repos.UpdateBrand(brand);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
