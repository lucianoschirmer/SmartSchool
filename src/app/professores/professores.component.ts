import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  public professores = [
    { id: 1, nome: 'Lauro', disciplina: 'Matemática' },
    { id: 1, nome: 'Roberto', disciplina: 'Física' },
    { id: 1, nome: 'Ronaldo', disciplina: 'Português' },
    { id: 1, nome: 'Rodrigo', disciplina: 'Inglês' },
    { id: 1, nome: 'Alexandre', disciplina: 'Programação' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
