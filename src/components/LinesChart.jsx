import { Line } from "react-chartjs-2"
import '../styles/LinesChartStyle.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    Colors
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler

)

const LinesChart = ({ data }) => {

    const dataTemp = []
    const dataLabels = []
    const dataHum = []

    const dateToMDHM = (dateData) => {
        const date = new Date(dateData)

        const dateMonth = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
        const dateDay = new Intl.DateTimeFormat("en", { day: "numeric" }).format(date);
        const dateHour = date.getHours()
        const dateMinutes = date.getMinutes()
        return `${dateDay}-${dateMonth}/${dateHour}:${dateMinutes}`
    }


    data?.map(value => { dataTemp.push(value.tempValue) })
    data?.map(value => { dataHum.push(value.humValue) })
    data?.map(value => { dataLabels.push(dateToMDHM(value.createdAt)) })

    const sensorTempData = {

        labels: dataLabels,
        datasets: [
            {
                label: 'Temperature DTH11 Sensor (ºC)',
                data: dataTemp,
                tension: 0.3,
                fill: true,
                borderColor: 'rgb(48,115,171)',
                backgroundColor: 'rgb(93,81,167)',
                pointRadius: 5,
                pointBorderColor: 'rgb(21,12,69)',
                pointBackgroundColor: 'rgb(83,117,221)'
            }
        ]
    }

    const optionsTempData = {
        scales: {
            y: {
                min: 0,
                ticks: { color: 'white' }
            },
            x: {
                ticks: { color: 'white' }
            }
        },
        plugins: {
            legend: {
                display: true,


            }

        }
    }

    const sensorHumData = {

        labels: dataLabels,
        datasets: [
            {
                label: 'Humidity DTH11 Sensor (%)',
                data: dataHum,
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(48,115,171)',
                backgroundColor: 'rgb(93,81,167)',
                pointRadius: 5,
                pointBorderColor: 'rgb(21,12,69)',
                pointBackgroundColor: 'rgb(83,117,221)'

            }
        ],
    };

    const optionsHumData = {
        scales: {
            y: {
                min: 0,
                ticks: { color: 'white' }
            },
            x: {
                ticks: { color: 'white' }
            }
        },
        plugins: {
            legend: {
                display: true
            }
        }
    }

    return (

        <div className="container_data">
            <div className="container_temp">
                <h1 className="container_h1">Temperature Data (ºC)</h1>
                <Line
                    data={sensorTempData}
                    options={optionsTempData}>
                </Line>
            </div>
            <div className="container_hum">
                <h1 className="container_h1">Humidity Data (%)</h1>
                <Line
                    data={sensorHumData}
                    options={optionsHumData}>
                </Line>
            </div>
        </div>

    )
}

export default LinesChart
