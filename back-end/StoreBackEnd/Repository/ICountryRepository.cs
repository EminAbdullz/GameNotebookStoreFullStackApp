using StoreBackEnd.Models;

namespace StoreBackEnd.Repository
{
    public interface ICountryRepository
    {
        Task<List<Country>> GetCountriesAsync();
    }
}
