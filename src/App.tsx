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

    const response = await apiClient.post('/api/simulacoes-solar', {
      ...simulacao,
      company_id: 1, // TODO: Pegar do contexto do usuário
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