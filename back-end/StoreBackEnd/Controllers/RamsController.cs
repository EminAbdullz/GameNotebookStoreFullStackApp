using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StoreBackEnd.Models;
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
            return Ok(await _repository.GetRamsAsync());
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetRamById(int id) 
        {
            return Ok(await _repository.GetRamByIdAsync(id));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] AddRamModel model)
        {
            try
            {
                var result = await _repository.InsertRamAsync(model);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromForm] Ram ram)
        {
            try
            {
                var result = await _repository.UpdateRamAsync(ram);
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
            await _repository.DeleteRamByIdAsymc(id);
            return Ok("Deleted at " + id);
        }

    }
}
