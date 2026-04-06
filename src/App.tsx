// src/App.tsx - componente React completo
import { useState, useCallback } from "react"

interface Simulation {
  id: number;
  customerName: string;
  currentConsumption: number;
  location: string;
  currentOperator: string;
  currentTariff: number;
  installationType: string;
  numberOfPanels: number;
  panelPower: number;
  inverterEfficiency: number;
  systemLosses: number;
  roofTilt: number;
  roofOrientation: string;
  additionalCosts: number;
  financing: boolean;
  financingDetails: string;
  estimatedGeneration: number;
  monthlySavings: number;
  annualSavings: number;
  paybackPeriod: number;
  roi5Years: number;
  roi10Years: number;
  roi15Years: number;
  roi25Years: number;
  co2Reduction: number;
}

const initialSimulations: Simulation[] = []

export default function App() {
  const [simulations, setSimulations] = useState<Simulation[]>(initialSimulations)
  const [currentSimulation, setCurrentSimulation] = useState<Simulation | null>(null)

  const handleNewSimulation = useCallback(() => {
    setCurrentSimulation({
      id: Date.now(),
      customerName: "",
      currentConsumption: 0,
      location: "Minas Gerais",
      currentOperator: "Cemig",
      currentTariff: 0.6,
      installationType: "residencial",
      numberOfPanels: 0,
      panelPower: 450,
      inverterEfficiency: 95,
      systemLosses: 10,
      roofTilt: 30,
      roofOrientation: "Sul",
      additionalCosts: 0,
      financing: false,
      financingDetails: "",
      estimatedGeneration: 0,
      monthlySavings: 0,
      annualSavings: 0,
      paybackPeriod: 0,
      roi5Years: 0,
      roi10Years: 0,
      roi15Years: 0,
      roi25Years: 0,
      co2Reduction: 0,
    })
  }, [])

  const handleSaveSimulation = useCallback((simulation: Simulation) => {
    setSimulations(prevSimulations => [...prevSimulations, simulation])
    setCurrentSimulation(null)
  }, [])

  return (
    <div className="bg-zinc-900 text-white min-h-screen flex flex-col">
      <header className="p-4 bg-gradient-to-r from-green-600 to-green-400">
        <h1 className="text-2xl font-bold">Solar Economy</h1>
      </header>
      <main className="flex-grow p-4">
        <button
          className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-xl mb-4"
          onClick={handleNewSimulation}
        >
          Nova Simulação
        </button>
        <div className="bg-zinc-800 p-4 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Histórico de Simulações</h2>
          <ul>
            {simulations.map(simulation => (
              <li key={simulation.id} className="mb-2">
                <span className="font-bold">Cliente:</span> {simulation.customerName} | <span className="font-bold">Economia Anual:</span> R${simulation.annualSavings.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="p-4 bg-gradient-to-r from-green-400 to-green-600">
        <p>© 2023 Solar Economy</p>
      </footer>
    </div>
  )
}