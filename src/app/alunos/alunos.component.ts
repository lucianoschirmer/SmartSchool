import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  public textSimple: string;
  public alunoSelecionado: Aluno;

  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 4730303030 },
    { id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: 4730121212 },
    { id: 3, nome: 'Laura', sobrenome: 'Maria', telefone: 4730454545 },
    { id: 4, nome: 'Luiza', sobrenome: 'Machado', telefone: 47303111111 },
    { id: 5, nome: 'Lucas', sobrenome: 'Alvares', telefone: 47303999999 },
    { id: 6, nome: 'Pedro', sobrenome: 'José', telefone: 4730555555 },
  ];

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
  }

  voltar() {
    this.alunoSelecionado = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
