## Running web service

- Pre-requisite:
    - Supply your database server and database name in `api/AngularCrud/appsettings.json` file.

- Using command prompt, go to `api/AngularCrud` directory and run the following ef commands
    - dotnet ef migrations add InitMigration
    - dotnet ef database update

- Run `dotnet watch` or `dotnet run` to start localhost server

## Running angular app

- Run `npm i` to update the packages
- Run `ng serve` to start the angular app server

## Further help

Ping me ;)

Happy coding!
