--CREATE TABLE Brands (
--	[Id] int PRIMARY KEY IDENTITY,
--	[Name] NVARCHAR (255) UNIQUE NOT NULL 
--)

--INSERT INTO Brands VALUES (N'Acer')
--INSERT INTO Brands VALUES (N'Alienware')
--INSERT INTO Brands VALUES (N'Asus')
--INSERT INTO Brands VALUES (N'Lenovo')
--INSERT INTO Brands VALUES (N'Microsoft')
--INSERT INTO Brands VALUES (N'Msi')
--INSERT INTO Brands VALUES (N'Predator')
--INSERT INTO Brands VALUES (N'Razer')


--CREATE PROC GetBrandById @Id INT
--AS
--BEGIN
--SELECT * FROM Brands WHERE Brands.Id = @Id
--END

--CREATE PROC DeleteBrandById @Id INT
--AS
--BEGIN
--DELETE FROM Brands WHERE Brands.Id = @Id
--END

--CREATE PROC AddBrand @Name NVARCHAR (255)
--AS
--BEGIN
--INSERT INTO Brands 
--OUTPUT inserted.Id
--VALUES (@Name)
--END

--CREATE PROC UpdateBrand @Id INT, @Name NVARCHAR(255)
--AS
--BEGIN
--UPDATE Brands SET Brands.Name = @Name 
--OUTPUT inserted.Id
--WHERE Brands.Id = @Id
--END



--///////////////////////////////////////////

--CREATE TABLE Countries (
--	[Id] int PRIMARY KEY IDENTITY,
--	[Name] NVARCHAR (255) UNIQUE NOT NULL 
--)

--INSERT INTO Countries VALUES (N'China')
--INSERT INTO Countries VALUES (N'USA')
--INSERT INTO Countries VALUES (N'Ireland')


--//////////////////////////////////////////

--CREATE TABLE Rams (
--	[Id] int PRIMARY KEY IDENTITY,
--	[Property] NVARCHAR (255) UNIQUE NOT NULL 
--)


--INSERT INTO Rams VALUES (N'16GB DDR4 3200MHz')
--INSERT INTO Rams VALUES (N'16GB DDR5 4800MHz')
--INSERT INTO Rams VALUES (N'32GB DDR4 3200MHz')
--INSERT INTO Rams VALUES (N'64GB DDR4 3200MHz')
--INSERT INTO Rams VALUES (N'32GB DDR5 4800MHz')
--INSERT INTO Rams VALUES (N'8GB LPDDR4')


-- CREATE TABLE Products (
--	[Id] int PRIMARY KEY IDENTITY,
--	[Title] NVARCHAR (255) UNIQUE NOT NULL,
--	[Price] DECIMAL (9,2) NOT NULL,
--	[Description]  NVARCHAR (255)  NOT NULL,
--	[ImageUrl] NVARCHAR (255)  NOT NULL,
	
	
--	[StockDate] DATE DEFAULT GETDATE() NOT NULL,
--	[BestSeller] BIT NOT NULL,
--	[Premium] BIT NOT NULL,
--	[Available] BIT NOT NULL,

--	[BrandId] INT FOREIGN KEY REFERENCES Brands(Id) NOT NULL,
--	[CountryId] INT FOREIGN KEY REFERENCES Countries(Id) NOT NULL,
--	[RamId] INT FOREIGN KEY REFERENCES Rams(Id) NOT NULL,
--)

--Œ◊»—“»“‹ ƒ¿«” ¡¿ÕÕ€’ œŒÀÕŒ—“‹ﬁ
--TRUNCATE TABLE Products



--CREATE PROC AddProduct @Title NVARCHAR(255), @Price DECIMAL, @Description NVARCHAR (255), @ImageUrl NVARCHAR (255), @BestSeller BIT, @Premium BIT, @Available BIT,  @BrandId INT, @CountryId INT, @RamId INT
--AS
--BEGIN 
--INSERT INTO Products 

--(Title,Price,Description,ImageUrl, BestSeller, Premium, Available, BrandId,CountryId,RamId) 
--output inserted.Id
--VALUES (@Title,@Price,@Description,@ImageUrl, @BestSeller, @Premium, @Available, @BrandId,@CountryId,@RamId)
--END






--CREATE PROC GetProducts
--AS
--BEGIN
--	SELECT pr.Id, pr.Title, pr.Price, pr.Description, pr.ImageUrl, pr.StockDate, pr.BestSeller, pr.Premium, pr.Available, br.Name AS [Brand], cntr.Name AS [Country], rms.Property AS [Ram] FROM Products as pr
--	JOIN Brands as br ON pr.BrandId = br.Id
--	JOIN Countries as cntr ON pr.CountryId = cntr.Id
--	JOIN Rams as rms ON pr.RamId =  rms.Id
--END


--CREATE PROC GetProductById @Id INT
--AS
--BEGIN
--SELECT pr.Id, pr.Title, pr.Price, pr.Description, pr.ImageUrl, pr.StockDate, pr.BestSeller, pr.Premium, pr.Available, br.Name AS [Brand], cntr.Name AS [Country], rms.Property AS [Ram] FROM Products as pr
--	JOIN Brands as br ON pr.BrandId = br.Id
--	JOIN Countries as cntr ON pr.CountryId = cntr.Id
--	JOIN Rams as rms ON pr.RamId =  rms.Id
--	WHERE pr.Id = @Id
--END


--CREATE PROC GetProductsByTitle @Title NVARCHAR(255)
--AS
--BEGIN
--SELECT pr.Id, pr.Title, pr.Price, pr.Description, pr.ImageUrl, pr.StockDate, pr.BestSeller, pr.Premium, pr.Available, br.Name AS [Brand], cntr.Name AS [Country], rms.Property AS [Ram] FROM Products as pr
--	JOIN Brands as br ON pr.BrandId = br.Id
--	JOIN Countries as cntr ON pr.CountryId = cntr.Id
--	JOIN Rams as rms ON pr.RamId =  rms.Id
--WHERE pr.Title Like '%' + @Title +'%'
--END

--CREATE PROC UpdateProduct @Id INT,  @Title NVARCHAR(255), @Price DECIMAL, @Description NVARCHAR (255), @ImageUrl NVARCHAR (255), @BestSeller BIT, @Premium BIT, @Available BIT,  @BrandId INT, @CountryId INT, @RamId INT
--AS
--BEGIN
--UPDATE Products SET Products.Title = @Title, Products.Price = @Price, Products.Description = @Description, Products.ImageUrl = @ImageUrl, Products.BestSeller = @BestSeller, Products.[Premium] = @Premium, Products.Available = @Available, Products.BrandId = @BrandId, Products.CountryId = @CountryId, Products.RamId = @RamId
--OUTPUT inserted.Id
--WHERE Products.Id = @Id
--END


--CREATE TABLE Users (
--	[Id] INT PRIMARY KEY IDENTITY,
--	[Login] NVARCHAR (255) UNIQUE NOT NULL,
--	[Password] NVARCHAR (255) NOT NULL,
--	[Name] NVARCHAR(255) NOT NULL,
--	[Surname] NVARCHAR(255) NOT NULL,
--	[Email] NVARCHAR(255) UNIQUE  NOT NULL,
--	[Phone] NVARCHAR(255) UNIQUE  NOT NULL,
--	[BirthDate] DATE NOT NULL , 
--	[IsAdmin] BIT DEFAULT (0) , 
--)

--SELECT * FROM Users

--ADD ANOTHER ADMIN
--INSERT INTO Users (Login,Password,Name,Surname,Email,Phone,BirthDate,IsAdmin) VALUES
--(
--N'Eminabdullz', --Login
--N'f50bd140', --Password
--N'Emin', --Name
--N'Abdullazada', --Sruname
--N'eminadbullz@gmail.com', --Email
--N'+994-51-602-01-91', --Phone
--N'1999-12-31', --BirthDate
--1
--)

--CREATE PROC GetAllUsers
--AS 
--BEGIN 
--SELECT * FROM Users
--END

--CREATE PROC AddUser @Login NVARCHAR(255), @Password NVARCHAR(255) , @Name NVARCHAR(255) , @Surname NVARCHAR(255), @Email NVARCHAR(255) , @Phone NVARCHAR(255) , @BirthDate DATE
--AS
--BEGIN 
--INSERT INTO Users (Login,Password,Name,Surname,Email,Phone,BirthDate) VALUES (@Login,@Password,@Name,@Surname,@Email,@Phone,@BirthDate)
--END

--GO
--CREATE PROC AuthorizeUser @Login NVARCHAR(255), @Password NVARCHAR(255)
--AS
--BEGIN 
--SELECT * FROM [Users] WHERE [Users].Login = @Login COLLATE Latin1_General_CS_AS AND [Users].Password = @Password COLLATE Latin1_General_CS_AS --COLLATE for Register Sensetive Authorization
--END




