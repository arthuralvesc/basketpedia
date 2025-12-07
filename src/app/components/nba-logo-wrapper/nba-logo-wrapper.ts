import { 
  Component, 
  ElementRef, // 1. Precisamos do ElementRef para o tipo do ViewChild
  AfterViewInit, 
  OnDestroy, 
  Input, 
  OnChanges, 
  ViewChild // 2. Importe o ViewChild
} from '@angular/core';
import { createRoot } from 'react-dom/client';
import React from 'react';

// Importa TUDO da biblioteca
import * as NbaLogos from 'react-nba-logos';

@Component({
  selector: 'app-nba-logo-dynamic-wrapper',
  standalone: true,
  template: '<div #reactContainer></div>', // O template (com a referência)
})
export class NbaLogoDynamicWrapperComponent implements AfterViewInit, OnDestroy, OnChanges {
  
  @Input() teamAbbreviation: string = 'NBA'; // Ex: 'TOR', 'LAL', 'BOS'
  
  // 3. Use @ViewChild para pegar a referência do template
  @ViewChild('reactContainer') containerRef!: ElementRef;

  private root: any;
  private container: any; // Opcional, mas ajuda a organizar

  // 4. Não precisamos mais do ElementRef no constructor
  constructor() {}

  ngAfterViewInit() {
    // 5. Atribua o elemento nativo do ViewChild ao 'container'
    this.container = this.containerRef.nativeElement;

    // 6. Crie o root usando o container correto
    this.root = createRoot(this.container);
    this.renderLogo();
  }

  // Chamado quando o @Input() 'teamAbbreviation' mudar
  ngOnChanges() {
    // O 'renderLogo()' já tem a proteção para não rodar
    // antes do 'this.root' ser criado no ngAfterViewInit
    this.renderLogo();
  }

  private renderLogo() {
    // Se o root não foi criado ainda (ngOnChanges antes de ngAfterViewInit), não faz nada
    if (!this.root || !this.teamAbbreviation) {
      return;
    }

    const logos: { [key: string]: React.ComponentType } = NbaLogos;
    const LogoComponent = logos[this.teamAbbreviation.toUpperCase()];

    if (LogoComponent) {
      this.root.render(React.createElement(LogoComponent, null));
    } else {
      // Renderiza o logo padrão da NBA se a abreviação não for encontrada
      this.root.render(React.createElement(''));
    }
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.unmount();
    }
  }
}