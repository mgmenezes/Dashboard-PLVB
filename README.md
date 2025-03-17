# Dashboard de Desempenho Logístico Sustentável

## Visão Geral

## Tecnologias Utilizadas

- **React 19** - Framework JavaScript para construção da interface
- **Vite** - Ferramenta de build rápida para desenvolvimento moderno
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **Recharts** - Biblioteca de gráficos para React
- **Lucide React** - Biblioteca de ícones

## Funcionalidades

### Dashboard Principal

O dashboard principal apresenta:

- **Cartões de Métricas** - Exibem indicadores-chave de desempenho:
  - Eficiência Energética
  - Frotas Monitoradas
  - Emissões de CO2
  - Economia de Combustível

- **Gráficos Interativos**:
  - Gráfico de linha mostrando a evolução das emissões de CO2 ao longo do tempo
  - Gráfico de pizza ilustrando a distribuição por modo de transporte (Rodoviário, Ferroviário, Marítimo)

- **Filtros de Período** - Permite visualizar dados em diferentes intervalos de tempo (Diário, Semanal, Mensal)

### Componentes Principais

- **Header** - Barra de navegação superior com logo e menu
- **MetricCard** - Cartões para exibição de métricas individuais
- **LineChartCard** - Componente de gráfico de linha para visualização de tendências
- **PieChartCard** - Componente de gráfico de pizza para visualização de distribuição
- **FilterOptions** - Componente de filtro para seleção de período

## Design Responsivo

O dashboard é totalmente responsivo, adaptando-se a diferentes tamanhos de tela:
- Layout fluido que se ajusta de desktop a dispositivos móveis
- Gráficos redimensionáveis
- Menu adaptativo

## Paleta de Cores

O projeto utiliza uma paleta de cores com foco em sustentabilidade:
- Verde primário (#007632) - Representa sustentabilidade e meio ambiente
- Verde secundário (#65B32E) - Complementa o verde primário
- Verde terciário (#95C230) - Usado para destaques e variações

## Instalação e Execução

```bash
# Clonar o repositório
git clone [url-do-repositório]

# Entrar no diretório do projeto
cd FrontendDeloitte

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev

```

