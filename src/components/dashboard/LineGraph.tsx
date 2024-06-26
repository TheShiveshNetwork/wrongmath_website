"use client"
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LineGraph = () => {
    const sampleData = [43, 40, 50, 40, 70, 40, 45, 33, 40, 60, 40, 50, 36];

    const canvasData = {
        datasets: [
            {
                borderColor: "navy",
                pointRadius: 0,
                fill: true,
                backgroundColor: '#ADB7F9',
                lineTension: 0.4,
                data: sampleData,
                borderWidth: 1,
            },
        ],
    };

    const desktopOptions = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "No of Days Active",
                    font: {
                        size: 25,
                        weight: 700,
                    }
                },
                label: "No of Questions Answered",
                grid: {
                    display: true,
                },
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                ticks: {
                    color: "white",
                    font: {
                        family: "Nunito",
                        size: 12,
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: "No of Questions Answered",
                    font: {
                        size: 25,
                        weight: 700,
                    }
                },
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 50,
                    color: "rgba(0,7,52,1)",
                    font: {
                        size: 25,
                        weight: 700,
                    },
                },
            },
        },
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
    };

    const phoneOptions = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "No of Days Active",
                    font: {
                        size: 12,
                        weight: 700,
                    }
                },
                label: "No of Questions Answered",
                grid: {
                    display: true,
                },
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                ticks: {
                    color: "white",
                    font: {
                        family: "Nunito",
                        size: 8,
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: "No of Questions Answered",
                    font: {
                        size: 12,
                        weight: 700,
                    }
                },
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 50,
                    color: "rgba(0,7,52,1)",
                    font: {
                        size: 12,
                        weight: 700,
                    },
                },
            },
        },
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
    };

    return (
        <>
            <div className="hidden md:block" style={{ minHeight: "400px", width: "100%" }}>
                <Line id="home" options={desktopOptions} data={canvasData} />
            </div>
            <div className="block md:hidden" style={{ minHeight: "300px", width: "100%" }}>
                <Line id="home" options={phoneOptions} data={canvasData} />
            </div>
        </>
    );
};

export default LineGraph;