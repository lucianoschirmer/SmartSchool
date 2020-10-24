import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';

  public professorSelecionado: Professor;

  public professores = [
    { id: 20, nome: 'Lauro', disciplina: 'Matemática' },
    { id: 21, nome: 'Roberto', disciplina: 'Física' },
    { id: 22, nome: 'Ronaldo', disciplina: 'Português' },
    { id: 23, nome: 'Rodrigo', disciplina: 'Inglês' },
    { id: 24, nome: 'Alexandre', disciplina: 'Programação' },
  ];

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
  }

  voltar() {
    this.professorSelecionado = null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
