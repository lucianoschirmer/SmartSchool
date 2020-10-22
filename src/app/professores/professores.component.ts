import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  public professores = [
    { id: 20, nome: 'Lauro', disciplina: 'Matemática' },
    { id: 21, nome: 'Roberto', disciplina: 'Física' },
    { id: 22, nome: 'Ronaldo', disciplina: 'Português' },
    { id: 23, nome: 'Rodrigo', disciplina: 'Inglês' },
    { id: 24, nome: 'Alexandre', disciplina: 'Programação' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
