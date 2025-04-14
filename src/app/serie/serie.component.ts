import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
  standalone: false
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  promedio: number = 0;
  serieSeleccionada: any = null;
  
  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  getAverage() {
    this.serieService.getAverage().subscribe(promedio => {
      this.promedio = promedio;
    });
  }

  seleccionarSerie(serie: any) {
    this.serieSeleccionada = serie;
  }

  ngOnInit() {
    this.getSeries();
    this.getAverage();
  }

}
