import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

let dashboardData = [
    {
        id: 1, 
        dId: 1, 
        charts: [
            {
                id: 1, 
                type: 'bar', 
                data: {
                    labels: ['January', 'February', 'March'],
                    datasets: [
                        {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                            hoverBorderColor: 'rgba(255,99,132,1)',
                            data: [20, 50, 60]
                        }
                    ]
                } 
            },
            {
                id: 2, 
                type: 'line', 
                data: {
                    labels: ['January', 'February', 'March'],
                    datasets: [
                        {
                            label: 'My First dataset',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [85, 29, 60]
                        }
                    ]
                } 
            },
            {
                id: 3, 
                type: 'pie', 
                data: {
                    labels: ['January', 'February', 'March'],
                    datasets: [{
                        data: [100, 20, 300],
                        backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                        ],
                        hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                        ]
                    }]
                } 
            }
        ]
    },
    {
        id: 2, 
        dId: 2, 
        charts: [
            {
                id: 1, 
                type: 'bar', 
                data: {
                    labels: ['January', 'February', 'March'],
                    datasets: [
                        {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                            hoverBorderColor: 'rgba(255,99,132,1)',
                            data: [65, 59, 80]
                        }
                    ]
                } 
            },
            {
                id: 2, 
                type: 'line', 
                data: {
                    labels: ['January', 'February', 'March'],
                    datasets: [
                        {
                            label: 'My First dataset',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [65, 59, 80]
                        }
                    ]
                } 
            },
            {
                id: 3, 
                type: 'pie', 
                data: {
                    labels: ['March', 'April', 'May'],
                    datasets: [{
                        data: [200, 20, 60],
                        backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                        ],
                        hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                        ]
                    }]
                } 
            }
        ]
    },
    {
        id: 3, 
        dId: 3, 
        charts: [
            {
                id: 1, 
                type: 'bar', 
                data: {
                    labels: ['January', 'February', 'March'],
                    datasets: [
                        {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                            hoverBorderColor: 'rgba(255,99,132,1)',
                            data: [65, 59, 80]
                        }
                    ]
                } 
            },
            {
                id: 2, 
                type: 'line', 
                data: {
                    labels: ['January', 'February', 'March'],
                    datasets: [
                        {
                            label: 'My First dataset',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [65, 59, 80]
                        }
                    ]
                } 
            },
            {
                id: 3, 
                type: 'pie', 
                data: {
                    labels: ['March', 'April', 'May'],
                    datasets: [{
                        data: [200, 20, 60],
                        backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                        ],
                        hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                        ]
                    }]
                } 
            }
        ]
    }
];

let chartFinal = null;

class Chart extends Component {

    state= {
        chartData: null
    }
   
    loadDashboard = (id)=> {
        this.setState({chartData: null});
        let result = dashboardData.filter(x => x.dId === id);
        this.setState({chartData: result[0]});
    }

    render() {
        const dashboardDataObjects = [
            {id: 1, name: "Dash 1"},
            {id: 2, name: "Dash 2"},
            {id: 3, name: "Dash 3"}

        ];

        let dashboardlist = dashboardDataObjects.map( dashboardDataObject => (
            <button key={dashboardDataObject.id} onClick={() => this.loadDashboard(dashboardDataObject.id)} >
                 {dashboardDataObject.name}
            </button>
        ));

        

       
        if (this.state.chartData) {
            let charts = [];
            this.state.chartData.charts.map(chart => {
                switch (chart.type) {
                    case 'bar':
                        charts.push(
                            <div key={chart.id}>
                                <h2>Bar Example (custom size)</h2>
                                <Bar
                                    data={chart.data}
                                    width={100}
                                    height={50}
                                    options={{
                                        maintainAspectRatio: false
                                    }}
                                />
                            </div>)
                        break;

                    case 'line':
                        charts.push(
                            <div key={chart.id}>
                                <h2>Line Example</h2>
                                <Line data={chart.data} />
                            </div>
                            )
                        break;

                    case 'pie':
                        charts.push(
                                <div key={chart.id}>
                                    <h2>Pie Example</h2>
                                    <Pie data={chart.data} />
                                </div>
                            )
                        break;
                
                    default:
                        break;
                }
            });
            
            chartFinal = (
                <div>
                  {charts}
                </div> 
            )       
        } else {
            chartFinal = (
                <div> Please select Dash</div>
            )
        }

        return(
            <div>
                {dashboardlist}
                {chartFinal}
            </div>
        )
    }
}

export default Chart;