import { LineChart as LChart } from "recharts";
import { Line } from "recharts";
import { XAxis, YAxis } from "recharts";

const LineChart = () => {
    const data = [
        { id: 1, name: "Alice", weight: 55, height: 160, temperature: 36.5 },
        { id: 2, name: "Bob", weight: 70, height: 175, temperature: 37.0 },
        { id: 3, name: "Charlie", weight: 65, height: 168, temperature: 36.8 },
        { id: 4, name: "David", weight: 80, height: 180, temperature: 37.2 },
        { id: 5, name: "Eva", weight: 58, height: 162, temperature: 36.6 },
        { id: 6, name: "Frank", weight: 90, height: 185, temperature: 37.1 },
        { id: 7, name: "Grace", weight: 62, height: 164, temperature: 36.7 },
        { id: 8, name: "Henry", weight: 75, height: 178, temperature: 37.3 },
        { id: 9, name: "Ivy", weight: 54, height: 159, temperature: 36.4 },
        { id: 10, name: "Jack", weight: 68, height: 172, temperature: 36.9 },
    ];

    return (
        <div>
            <h1 className="text-4xl font-bold my-4">
                Weight, Height and Temperature Distribution
            </h1>
            <LChart width={400} height={300} data={data}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line type={"monotone"} dataKey="weight" stroke="red"></Line>
                <Line stroke="green" type={"monotone"} dataKey="height"></Line>
                <Line
                    stroke="purple"
                    type={"monotone"}
                    dataKey="temperature"
                ></Line>
            </LChart>
        </div>
    );
};

export default LineChart;
