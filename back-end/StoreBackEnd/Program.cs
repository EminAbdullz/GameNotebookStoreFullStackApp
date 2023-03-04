using StoreBackEnd.Repository;

namespace StoreBackEnd
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors();

            var connectionString = builder.Configuration.GetConnectionString("Default");

            builder.Services.AddScoped<IProductRepository, ProductRepository>(provider => new ProductRepository(connectionString));
            builder.Services.AddScoped<IBrandRepository, BrandRepository>(provider => new BrandRepository(connectionString));
            builder.Services.AddScoped<ICountryRepository, CountryRepository>(provider => new CountryRepository(connectionString));
            builder.Services.AddScoped<IRamRepository, RamRepository>(provider => new RamRepository(connectionString));
            builder.Services.AddScoped<IUserRepository, UserRepository>(provider => new UserRepository(connectionString));

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors(options =>
            {
                options.AllowAnyMethod();
                options.AllowAnyHeader();
                options.AllowAnyOrigin();
            });


            app.MapControllers();

            app.Run();
        }
    }
}