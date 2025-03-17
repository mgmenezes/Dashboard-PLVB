import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Download } from "lucide-react";

const LineChartCard = ({ title, color, dataKey }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    { name: "Jan", CO2: "1000", value: 880 },
    { name: "Fev", CO2: "830", value: 830 },
    { name: "Mar", CO2: "780", value: 780 },
    { name: "Abr", CO2: "600", value: 600 },
    { name: "Mai", CO2: "600", value: 600 },
    { name: "Jun", CO2: "566", value: 566 },
    { name: "Jul", CO2: "452", value: 452 },
    { name: "Ago", CO2: "333", value: 333 },
    { name: "Set", CO2: "288", value: 288 },
    { name: "Out", CO2: "233", value: 233 },
    { name: "Nov", CO2: "200", value: 200 },
    { name: "Dez", CO2: "110", value: 110 },
  ];

  const getTickInterval = () => {
    if (windowWidth < 480) {
      return 3;
    } else if (windowWidth < 768) {
      return 2;
    } else if (windowWidth < 1024) {
      return 1;
    } else {
      return 0;
    }
  };

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 lg:px-6 sm:p-6 flex flex-col">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
          {title}
        </h3>
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              width={500}
              height={400}
              data={data}
              dataKey={dataKey}
              color={color}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                interval={getTickInterval()}
                angle={windowWidth < 768 ? -45 : 0}
                textAnchor={windowWidth < 768 ? "end" : "middle"}
                height={windowWidth < 768 ? 60 : 30}
                tick={{ fontSize: windowWidth < 480 ? 8 : 10 }}
              />
              <YAxis />
              <Tooltip labelFormatter={(value) => `Mês: ${value}`} />
              <Legend />
              <Line
                type="monotone"
                dataKey="CO2"
                stroke="#00A651"
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-between items-center rounded-lg">
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-[#007532] hover:text-[#65B32E]"
            >
              Ver relatório completo
            </a>
          </div>
          <button className="flex items-center text-sm text-[#007532] hover:text-[#65B32E] border-0">
            <Download size={16} className="mr-1" />
            Baixar dados
          </button>
        </div>
      </div>
    </div>
  );
};

export default LineChartCard;
