import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/task-list-null.png',
      alt: 'Projeto Lista de Tarefa',
      title: 'Lista de Tarefa 1.0',
      with: '100px',
      height: '51px',
      description:
        '<p>Explore o meu projeto de uma Lista de tarefas que exploram recursos do ecossistema Angular, Front-end, JavaScript e TypeScript, auxiliado pelo programa de treinee da empresa junior Asimov.Jr.</p>',
      links: [
        {
          name: 'Conheça a lista de Tarefas',
          href: 'http://localhost:49971/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
