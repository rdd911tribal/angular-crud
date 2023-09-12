using System.ComponentModel.DataAnnotations;

namespace AngularCrud.Entity
{
    public class ProjectModel
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public ProjectModel(string name)
        {
            Name = name;
        }
    }
}
