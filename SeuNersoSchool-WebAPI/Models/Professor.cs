namespace SeuNersoSchool_WebAPI.Models
{
    public class Professor
    {
        public Professor() { }
        public Professor(int Id, string Nome, string Disciplina)
        {
            this.Id = Id;
            this.Nome = Nome;
            this.Disciplina = Disciplina;
        }
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Disciplina { get; set; }
    }

}