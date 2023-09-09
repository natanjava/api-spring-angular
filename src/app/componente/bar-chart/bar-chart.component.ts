import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ThemeService } from 'ng2-charts';
import { UserChart } from 'src/app/model/userChart';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private usuarioService : UsuarioService) { }

  userChart = new UserChart();


  ngOnInit() {
    this.usuarioService.carregarGrafico().subscribe (data => {
      this.userChart = data;
      /*Salario*/
      this.barChartLabels = this.userChart.nome.split(',');
      
      /* Nome*/
      var arraySalario = JSON.parse('[' + this.userChart.salario + ']');
      this.barChartData = [
        { data: arraySalario, label: 'User Salary' }
      ];
    });
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [], label: 'User Salary' }
  ];

}
