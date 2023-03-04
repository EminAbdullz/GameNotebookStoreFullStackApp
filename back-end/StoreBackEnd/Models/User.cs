using System.ComponentModel.DataAnnotations;

namespace StoreBackEnd.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required (AllowEmptyStrings =false)]
        public string Login { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string Password { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string Name { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string Surname { get; set; }


        [EmailAddress]
        public string Email { get; set; }

        [Phone]
        public string Phone { get; set; }

        [Required]
        public DateTime BirthDate { get; set; }

        public bool IsAdmin{ get; set; }
    }
}
