import { MultiSeriesTinyLineChart, TinyLineChart } from "./components";

function App() {
  const data = [
    {
      x: "Mon",
      y: 10,
      y1: 20,
      y2: 30,
    },
    {
      x: "Tue",
      y: -15,
      y1: 10,
      y2: -5,
    },
    {
      x: "Wed",
      y: 25,
      y1: -30,
      y2: 35,
    },
    {
      x: "Thu",
      y: 30,
      y1: 40,
      y2: 50,
    },
    {
      x: "Fri",
      y: -40,
      y1: 35,
      y2: -30,
    },
    {
      x: "Sat",
      y: 50,
      y1: 60,
      y2: -70,
    },
    {
      x: "Sun",
      y: 60,
      y1: 70,
      y2: 80,
    },
  ];

  return (
    <div className="App">
      <TinyLineChart data={data} height={100} dataKey="y" />
      <MultiSeriesTinyLineChart
        data={data}
        height={100}
        dataKeys={["y", "y1", "y2"]}
        strokeColors={["primary.main", "warn.main", "info.main"]}
      />
    </div>
  );
}

export default App;
