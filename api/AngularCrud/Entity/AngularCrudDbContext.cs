using Microsoft.EntityFrameworkCore;

namespace AngularCrud.Entity
{
    public class AngularCrudDbContext : DbContext
    {
        public AngularCrudDbContext(DbContextOptions<AngularCrudDbContext> options)
            : base(options)
        {
        }

        public DbSet<EmployeeModel> Employees { get; set; }
        public DbSet<DepartmentModel> Departments { get; set; }
        public DbSet<ProjectModel> Projects { get; set; }
    }
}
