import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    
    {
      summary: {
        strong: 'Eletricista de Distribuição',
        p: 'Basf SA | jan 2025 - març 2025',
      },
      text: '<p>Foi um marco muito importante, pois foi minha primeria efetivação, mesmo que de temporario, foi um período que consolidou meus conhecimentos do estágio e trouxe muito mais valor a minha carreira profissional.</p>',
    },
    {
      summary: {
        strong: 'Estagiário de Energias e Utilidades',
        p: 'Basf SA | jan 2024 - jan 2025',
      },
      text: '<p>Na Basf, marco inicial da minha trajetória profissional, mergulhei em um aprendizado abrangente que englobava diversos conceitos tecnicos de elétrica,automação e mecanica no ramo industrial, e muito mais.</p> <p>Essa empresa se revelou uma verdadeira escola inicial, onde absorvi conhecimentos variados. No ramo industrial, desenvolvi habilidades com quadros de energia, CLPs, Eletroquímicos, Subestações e diversas outras atividades.</p>',
    },
  ]);
}
