using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    }
}
