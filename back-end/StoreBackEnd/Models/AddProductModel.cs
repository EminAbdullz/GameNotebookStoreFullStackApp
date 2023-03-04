namespace StoreBackEnd.Models
{
    public class AddProductModel
    {
        public string Title { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;

        public bool BestSeller { get; set; }
        public bool Premium { get; set; }
        public bool Available { get; set; }
        public int BrandId { get; set; } 
        public int CountryId { get; set; } 
        public int RamId { get; set; } 
    }
}
