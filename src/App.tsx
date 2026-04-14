// src/App.tsx
import React, { useState, useCallback } from 'react';
import { toast } from 'sonner';
import apiClient from './apiClient';
import { validarSimulacao, SimulacaoSolar } from './validarSimulacao';

const App = () => {
  const [carregando, setCarregando] = useState(false);
  const [simulacoes, setSimulacoes] = useState<SimulacaoSolar[]>([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [simulacaoAtual, setSimulacaoAtual] = useState<SimulacaoSolar | null>(null);

  const salvarSimulacao = useCallback(async (simulacao: Partial<SimulacaoSolar>) => {
    try {
      const erros = validarSimulacao(simulacao);

      if (Object.keys(erros).length > 0) {
        toast.error("Erro de validação:");
        Object.keys(erros).forEach((key) => {
          toast.error(`- ${erros[key]}`);
        });
        return;
      }

      setCarregando(true);

      const companyId = 1; // TODO: Pegar do contexto do usuário
      const response = await apiClient.post('/api/simulacoes-solar', {
        ...simulacao,
        company_id: companyId,
      });

      setSimulacoes((prev) => [...prev, response.data]);
      setMostrarFormulario(false);
      setSimulacaoAtual(null);

      toast.success("Simulação salva com sucesso!");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Erro ao salvar simulação: ${error.message}`);
      } else {
        toast.error("Erro ao salvar simulação");
      }
    } finally {
      setCarregando(false);
    }
  }, []);

  // Restante do código...
  return (
    // JSX...
  );
};

export default App;