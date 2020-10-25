using Microsoft.AspNetCore.Mvc;

namespace SeuNersoSchool_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlunoController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("FUNCIONOU ALUNO ");
        }
    }

}