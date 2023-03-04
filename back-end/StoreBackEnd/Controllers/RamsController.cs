using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StoreBackEnd.Repository;

namespace StoreBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RamsController : ControllerBase
    {
        private IRamRepository _repository;
        public RamsController(IRamRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll() 
        {
            return Ok(await _repository.GetAllAsync());
        }
    }
}
