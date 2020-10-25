import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';
  public modalRef: BsModalRef;
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

  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }

}
