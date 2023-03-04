namespace StoreBackEnd.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Title{ get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;

        public DateTime StockDate{ get; set; }
        public bool BestSeller { get; set; }
        public bool Premium { get; set; }
        public bool Available { get; set; }
        public string Brand { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public string Ram { get; set; } = string.Empty;
    }
}
