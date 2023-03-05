using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StoreBackEnd.Models;
using StoreBackEnd.Repository;

namespace StoreBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountriesController : ControllerBase
    {

        private readonly ICountryRepository _repos;
        public CountriesController(ICountryRepository repos)
        {
            _repos = repos;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _repos.GetCountriesAsync());
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _repos.GetCountryByIdAsync(id));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] AddCountryModel model) 
        {
            try
            {
                var result = await _repos.InsertCountryAsync(model);
                return  Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromForm] Country country) 
        {
            try
            {
                var result = await _repos.UpdateCountryAsync(country);
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
            await _repos.DeleteCountryByIdAsync(id);
            return Ok("Deleted at " + id);
        }

    }
}
