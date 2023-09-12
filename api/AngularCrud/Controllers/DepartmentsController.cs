using AngularCrud.Entity;
using AngularCrud.Migrations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using DepartmentModel = AngularCrud.Entity.DepartmentModel;

namespace AngularCrud.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DepartmentsController : ControllerBase
    {
        private readonly AngularCrudDbContext _context;

        public DepartmentsController(AngularCrudDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> Search() => Ok(await _context.Departments.ToListAsync());

        [HttpGet("{id}")]
        public async Task<ActionResult> Get([FromRoute] int id) => Ok(await _context.Departments.FirstOrDefaultAsync(x => x.Id == id));

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] DepartmentModel model)
        {
            if (model != null)
            {
                var entity = new DepartmentModel(model.Name);
                _context.Departments.Add(entity);

                await _context.SaveChangesAsync();
                return Ok(model);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update([FromRoute] int id, [FromBody] DepartmentModel model)
        {
            var item = await _context.Departments.FirstOrDefaultAsync(x => x.Id == id);

            if (item == null) return Ok(new DepartmentModel(""));

            item.Name = model.Name;
            await _context.SaveChangesAsync();

            return Ok(item);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete([FromRoute] int id)
        {
            var item = await _context.Departments.FirstOrDefaultAsync(x => x.Id == id);

            if (item == null) return Ok(false);

            _context.Departments.Remove(item);
            await _context.SaveChangesAsync();

            return Ok(true);
        }
    }
}
