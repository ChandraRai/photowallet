import { Component, OnInit, ViewChild } from "@angular/core";
import { CovidDataService } from "../../services/covid-data.service";
import { Chart } from "chart.js";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.page.html",
  styleUrls: ["./chart.page.scss"],
})
export class ChartPage implements OnInit {
  @ViewChild("lineCanvas", null) lineCanvas;

  constructor(private CovidDataService: CovidDataService) {}

  ngOnInit() {
    this.CovidDataService.getCovidList().subscribe((res) => {
      let xlabels = res["countries"].map((res) => res.name);
      let yData = res["countries"].map((res) => res.cases);
      //console.log(xlabels);
      //console.log(yData);

      this.lineCanvas = new Chart(this.lineCanvas.nativeElement, {
        type: "line",
        data: {
          labels: xlabels,
          datasets: [
            {
              fill: false,
              label: "COVID - 19 updates",
              data: yData,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    });
  }
}
