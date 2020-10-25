import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
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


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }

  constructor(private fb: FormBuilder,
    private modalService: BsModalService) {
    this.criarFrom();
  }

  ngOnInit(): void {
  }
  criarFrom() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }
  alunoSubmit() {
    console.log(this.alunoForm.value);
  }
}
