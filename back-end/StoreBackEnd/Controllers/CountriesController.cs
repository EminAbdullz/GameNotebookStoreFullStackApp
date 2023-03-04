using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    }
}
