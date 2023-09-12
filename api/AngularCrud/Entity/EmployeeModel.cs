using System.ComponentModel.DataAnnotations;

namespace AngularCrud.Entity
{
    public class EmployeeModel
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public EmployeeModel(string name)
        {
            Name = name;
        }
    }
}
