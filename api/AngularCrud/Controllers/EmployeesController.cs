using AngularCrud.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCrud.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly AngularCrudDbContext _context;

        public EmployeesController(AngularCrudDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> Search() => Ok(await _context.Employees.ToListAsync());

        [HttpGet("{id}")]
        public async Task<ActionResult> Get([FromRoute] int id) => Ok(await _context.Employees.FirstOrDefaultAsync(x => x.Id == id));

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] EmployeeModel model)
        {
            if (model != null)
            {
                var entity = new EmployeeModel(model.Name);
                _context.Employees.Add(entity);

                await _context.SaveChangesAsync();
                return Ok(model);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update([FromRoute] int id, [FromBody] EmployeeModel model) 
        {
            var item = await _context.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if (item == null) return Ok(new EmployeeModel(""));

            item.Name = model.Name;
            await _context.SaveChangesAsync();

            return Ok(item);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete([FromRoute] int id)
        {
            var item = await _context.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if (item == null) return Ok(false);

            _context.Employees.Remove(item);
            await _context.SaveChangesAsync();

            return Ok(true);
        }
    }
}
