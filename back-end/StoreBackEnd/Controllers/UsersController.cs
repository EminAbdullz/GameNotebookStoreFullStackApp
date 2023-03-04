using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StoreBackEnd.Models;
using StoreBackEnd.Repository;
using System.Reflection;

namespace StoreBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _repos;
        public UsersController(IUserRepository repos)
        {
            _repos = repos;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _repos.GetAllUsersAsync());

        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromForm]LoginRequest request)
        {
            var user = await _repos.AuthorizeUser(request.Login, request.Password);
            if (user is not null) return Ok(user);
            return BadRequest("Wrong Password or Login");    
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromForm]AddUserModel request)
        {
            try
            {
                await _repos.CreateUserAsync(request);
                return Ok(request);

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
