var chartsExample = angular.module('chartsExample', []);

chartsExample.controller('chartsCtrl', function ($scope) {

	var hiData={
		 chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
	}

  var chartsList = {
   highCharts : {
  	
  	drawChart: function  (el, data) {
  		var data = data;
  		var target = jQuery(el);
  		target.highcharts(data);
  	}
  },
  cThree: {
  	drawCThree:function(){
  		var ctx1 = document.getElementById("chart1").getContext("2d");
        window.myLine = new Chart(ctx1).Line(lineChartData, {
            showScale: false,
            pointDot: true,
            responsive: true
        });
        var ctx2 = document.getElementById("chart2").getContext("2d");
        window.myLine = new Chart(ctx2).Line(lineChartData, {
            responsive: true
        });
        var chart = c3.generate({
            bindto: '#chart',
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ],
                axes: {
                    data2: 'y2' // ADD
                }
            },
            axis: {
                y2: {
                    show: true // ADD
                }
            }
        });
    }
  	
  },
  chartJs: {
  	drawChartJs:function(){
  		Chart.defaults.global.pointHitDetectionRadius = 1;
    Chart.defaults.global.customTooltips = function(tooltip) {
        var tooltipEl = $('#chartjs-tooltip');
        if (!tooltip) {
            tooltipEl.css({
                opacity: 0
            });
            return;
        }
        tooltipEl.removeClass('above below');
        tooltipEl.addClass(tooltip.yAlign);
        var innerHtml = '';
        for (var i = tooltip.labels.length - 1; i >= 0; i--) {
            innerHtml += ['<div class="chartjs-tooltip-section">', '   <span class="chartjs-tooltip-key" style="background-color:' + tooltip.legendColors[i].fill + '"></span>', '   <span class="chartjs-tooltip-value">' + tooltip.labels[i] + '</span>', '</div>'].join('');
        }
        tooltipEl.html(innerHtml);
        tooltipEl.css({
            opacity: 1,
            left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
            top: tooltip.chart.canvas.offsetTop + tooltip.y + 'px',
            fontFamily: tooltip.fontFamily,
            fontSize: tooltip.fontSize,
            fontStyle: tooltip.fontStyle,
        });
    };
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };
    var lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        }, {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        }]
    };
  	}
  }
  };

  chartsList.highCharts.drawChart("#container", hiData);
  chartsList.chartJs.drawChartJs();
  chartsList.cThree.drawCThree();
});