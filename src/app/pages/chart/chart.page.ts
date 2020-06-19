import { Component, OnInit, ViewChild } from "@angular/core";
import { CovidDataService } from "../../services/covid-data.service";
import { Chart } from "chart.js";
import { getLocaleMonthNames } from "@angular/common";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.page.html",
  styleUrls: ["./chart.page.scss"],
})
export class ChartPage implements OnInit {
  //@ViewChild("lineCanvas", { static: true }) lineCanvas;

  constructor(private CovidDataService: CovidDataService) {}

  ngOnInit() {
    this.lineChart();
    this.lineChartPrediction();
  }

  //method to get top 10 cases and draw line chart
  async lineChart() {
    this.CovidDataService.getCovidList().subscribe((res) => {
      const y_lab = res["countries"].map((res) => res.cases).slice(0, 10);
      const x_lab = res["countries"].map((res) => res.name).slice(0, 10);
      const ctx = document.getElementById("lineCanvas");
      const lineCanvas = new Chart(ctx, {
        type: "line",
        data: {
          labels: x_lab,
          datasets: [
            {
              //fill: false,
              data: y_lab,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              spanGaps: false,
              label: "Top 10 COVID-19 cases",
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
          animation: {
            duration: 5000,
          },
        },
      });
    });
  }

  /*
  pieChart() {
    this.CovidDataService.getCovidList().subscribe((res) => {
      let xlabels = res["countries"].map((res) => res.name);
      let yData = res["countries"].map((res) => res.cases);
      //console.log(xlabels);
      //console.log(yData);

      this.pieCanvas = new Chart(this.pieCanvas.nativeElement, {
        type: "pie",
        data: {
          labels: xlabels,
          datasets: [
            {
              label: "COVID - 19 updates",
              data: yData,
              duration: 2000,
              easing: "easeInQuart",
              backgroundColor: "rgba(75,192,192,0.4)",
              hoverBackgroundColor: "rgba(75,192,192,1)",
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 50,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
          animation: {
            duration: 5000,
          },
        },
      });
    });
  }
*/
  /*
  barChart() {
    this.CovidDataService.getCovidList().subscribe((res) => {
      let xlabels = res["countries"].map((res) => res.name);
      let yData = res["countries"].map((res) => res.cases);
      //console.log(xlabels);
      //console.log(yData);

      this.barCanvas = new Chart(this.barCanvas.nativeElement, {
        type: "bar",
        data: {
          labels: xlabels,
          datasets: [
            {
              data: yData,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              label: "COVID - 19 updates",
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: true,
            boxWidth: 80,
            fontSize: 15,
            padding: 0,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  stepSize: 5,
                  max: 100,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  autoSkip: false,
                  stepSize: 5,
                  max: 100,
                },
              },
            ],
          },
        },
      });
    });
  } */

  //method to get prediction by date and draw chart
  async lineChartPrediction() {
    this.CovidDataService.getCovidPrediction().subscribe((res) => {
      const x = res.map((res) => {
        var arr = res.date.split("-");
        var months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return months[parseInt(arr[1], 10) - 1] + " " + arr.slice(2, 3);
      });

      const y = res.map((res) => res.cases);
      //console.log(xlabels);
      //console.log(yData);
      const ctx2 = document.getElementById("linePredictionCanvas");
      const linePredictionCanvas = new Chart(ctx2, {
        type: "line",
        data: {
          labels: x,
          datasets: [
            {
              fill: false,
              data: y,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              //borderColor: "rgba(75,192,192,1)",
              borderColor: "rgba(255,195,0,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              spanGaps: false,
              label: "COVID - 19 Prediction (by date) in Nepal",
            },
          ],
        },
        options: {
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 40,
              bottom: 0,
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          animation: {
            duration: 5000,
          },
        },
      });
    });
  }
}
