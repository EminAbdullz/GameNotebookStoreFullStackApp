using System.ComponentModel.DataAnnotations;

namespace StoreBackEnd.Models
{
    public class AddUserModel
    {
        [Required(AllowEmptyStrings = false)]
        public string Login { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string Password { get; set; }


        [Required(AllowEmptyStrings = false)]
        public string Name { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string Surname { get; set; }


        [EmailAddress]
        [Required]
        public string Email { get; set; }

        [Phone]
        [Required]
        public string Phone { get; set; }

        [Required]
        public DateTime BirthDate { get; set; }
    }
}
