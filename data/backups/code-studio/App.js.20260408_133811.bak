import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/App.tsx - componente React completo
import { useState, useCallback } from "react";
const initialSimulations = [];
export default function App() {
    const [simulations, setSimulations] = useState(initialSimulations);
    const [currentSimulation, setCurrentSimulation] = useState(null);
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
        });
    }, []);
    const handleSaveSimulation = useCallback((simulation) => {
        setSimulations(prevSimulations => [...prevSimulations, simulation]);
        setCurrentSimulation(null);
    }, []);
    return (_jsxs("div", { className: "bg-zinc-900 text-white min-h-screen flex flex-col", children: [_jsx("header", { className: "p-4 bg-gradient-to-r from-green-600 to-green-400", children: _jsx("h1", { className: "text-2xl font-bold", children: "Solar Economy" }) }), _jsxs("main", { className: "flex-grow p-4", children: [_jsx("button", { className: "bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-xl mb-4", onClick: handleNewSimulation, children: "Nova Simula\u00E7\u00E3o" }), _jsxs("div", { className: "bg-zinc-800 p-4 rounded-xl", children: [_jsx("h2", { className: "text-xl font-bold mb-2", children: "Hist\u00F3rico de Simula\u00E7\u00F5es" }), _jsx("ul", { children: simulations.map(simulation => (_jsxs("li", { className: "mb-2", children: [_jsx("span", { className: "font-bold", children: "Cliente:" }), " ", simulation.customerName, " | ", _jsx("span", { className: "font-bold", children: "Economia Anual:" }), " R$", simulation.annualSavings.toFixed(2)] }, simulation.id))) })] })] }), _jsx("footer", { className: "p-4 bg-gradient-to-r from-green-400 to-green-600", children: _jsx("p", { children: "\u00A9 2023 Solar Economy" }) })] }));
}
