namespace SeuNersoSchool_WebAPI.Models
{
    public class Disciplina
    {
       public int Id { get; set; }
       public string nome { get; set; }
       public int ProfessorId { get; set; }
       public Professor professor { get; set; }
       public int MyProperty { get; set; }
    }

}