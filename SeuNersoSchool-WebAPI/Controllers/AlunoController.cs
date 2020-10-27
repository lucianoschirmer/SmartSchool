using System;
using Microsoft.AspNetCore.Mvc;
using SeuNersoSchool_WebAPI.Data;

namespace SeuNersoSchool_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlunoController : ControllerBase
    {
        public AlunoController(IRepository repo)
        {

        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok("");
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }
    }

}