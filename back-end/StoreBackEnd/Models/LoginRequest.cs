using System.ComponentModel.DataAnnotations;

namespace StoreBackEnd.Models
{
    public class LoginRequest
    {
        [Required(AllowEmptyStrings = false)]
        public string Login { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string Password { get; set; }
    }
}
