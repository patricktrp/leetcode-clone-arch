import HeatMap from '@uiw/react-heat-map';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const value = [
    { date: '2023/01/01', count: 2 }
];

const Profile = (): JSX.Element => {
    const currentYear = new Date().getFullYear();
    const firstDayOfYear = new Date(currentYear, 0, 1);

    const data = {
        labels: ['easy', 'medium', 'hard'],
        datasets: [{
            label: 'Submitted Solutions',
            data: [3, 2, 1],
            backgroundColor: ['green', 'yellow', 'red'],
            borderColor: ['white', 'white']
        }]
    }

    const options = {}

    return (
        <div>
            <HeatMap value={value} startDate={firstDayOfYear} />
            <div style={{
                width: '300px',
                height: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Doughnut data={data} options={options} />
            </div>
        </div >
    )
}

export default Profile