using System.ComponentModel.DataAnnotations;

namespace AngularCrud.Entity
{
    public class DepartmentModel
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public DepartmentModel(string name)
        {
            Name = name;
        }
    }
}
