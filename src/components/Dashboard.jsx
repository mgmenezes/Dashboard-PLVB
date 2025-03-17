import { Truck } from "lucide-react";
import { AlertCircle } from "lucide-react";
import { Zap } from "lucide-react";
import { TrendingUp } from "lucide-react";

import MetricCard from "@/components/MetricCard";
import PieChartCard from "@/components/PieChartCard/PieChartCard";
import LineChartCard from "@/components/LineChartCard/LineChartCard";
import Header from "@/components/Header";
import FilterOptions from "@/components/Filter";

const Dashboard = () => {
  const transportData = [
    { name: "Rodoviário", value: 65 },
    { name: "Ferroviário", value: 15 },
    { name: "Marítimo", value: 20 },
  ];

  return (
    <div className="min-h-screen min-w-screen bg-gray-50 rounded-lg">
      <Header />
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <section className="flex flex-col sm:flex-row justify-between gap-2 mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Desempenho Logístico
            </h1>
            <FilterOptions />
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <MetricCard
              icon={<TrendingUp className="h-6 w-6 text-green-600" />}
              color="green"
              title="Eficiência Energética"
              value="85%"
              changeValue="+5.3%"
              changeText="+5.3%"
              linkText="Ver detalhes"
              linkHref="#"
            />

            <MetricCard
              icon={<Truck className="h-6 w-6 text-blue-600" />}
              color="blue"
              title="Frotas Monitoradas"
              value="243"
              changeValue="+12%"
              changeText="+12%"
              linkText="Ver detalhes"
              linkHref="#"
            />

            <MetricCard
              icon={<AlertCircle className="h-6 w-6 text-red-600" />}
              color="red"
              title="Emissões de CO2"
              value="-18.3%"
              linkText="Ver detalhes"
              linkHref="#"
            />

            <MetricCard
              icon={<Zap className="h-6 w-6 text-yellow-600" />}
              color="yellow"
              title="Economia de Combustível"
              value="R$ 158.320"
              changeValue="YTD"
              changeText="YTD"
              linkText="Ver detalhes"
              linkHref="#"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="w-full overflow-x-auto pb-2">
              <div className="min-w-full">
                <LineChartCard
                  title="Emissões de CO2 (toneladas)"
                  color="#00A651"
                  dataKey="CO2"
                />
              </div>
            </div>
            <PieChartCard
              title="Distribuição por Modo de Transporte"
              data={transportData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
