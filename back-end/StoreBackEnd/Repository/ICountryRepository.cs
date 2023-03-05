using StoreBackEnd.Models;

namespace StoreBackEnd.Repository
{
    public interface ICountryRepository
    {
        Task<List<Country>> GetCountriesAsync();
        Task<Country> GetCountryByIdAsync(int id);
        Task<Country> InsertCountryAsync(AddCountryModel model);

        Task DeleteCountryByIdAsync(int id);
        Task<Country> UpdateCountryAsync(Country country);
    }
}
