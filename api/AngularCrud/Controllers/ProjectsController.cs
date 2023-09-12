using AngularCrud.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace AngularCrud.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly AngularCrudDbContext _context;

        public ProjectsController(AngularCrudDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> Search() => Ok(await _context.Projects.ToListAsync());

        [HttpGet("{id}")]
        public async Task<ActionResult> Get([FromRoute] int id) => Ok(await _context.Projects.FirstOrDefaultAsync(x => x.Id == id));

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] ProjectModel model)
        {
            if (model != null)
            {
                var entity = new ProjectModel(model.Name);
                _context.Projects.Add(entity);

                await _context.SaveChangesAsync();
                return Ok(model);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update([FromRoute] int id, [FromBody] ProjectModel model)
        {
            var item = await _context.Projects.FirstOrDefaultAsync(x => x.Id == id);

            if (item == null) return Ok(new ProjectModel(""));

            item.Name = model.Name;
            await _context.SaveChangesAsync();

            return Ok(item);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete([FromRoute] int id)
        {
            var item = await _context.Projects.FirstOrDefaultAsync(x => x.Id == id);

            if (item == null) return Ok(false);

            _context.Projects.Remove(item);
            await _context.SaveChangesAsync();

            return Ok(true);
        }
    }
}
