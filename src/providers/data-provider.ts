import type { DataProvider } from "@refinedev/core"; // Importa o tipo DataProvider da biblioteca "@refinedev/core", que define a estrutura do provedor de dados

const API_URL = "https://api.fake-rest.refine.dev"; // Define a URL base da API

export const dataProvider: DataProvider = { // Define um objeto que implementa a interface DataProvider
  getOne: async ({ resource, id, meta }) => { // Define a função getOne, que busca um único recurso
    const response = await fetch(`${API_URL}/${resource}/${id}`); // Faz uma requisição para obter um único recurso com base no nome do recurso (resource) e no ID

    if (response.status < 200 || response.status > 299) throw response; // Se a resposta não estiver no intervalo de códigos de sucesso (200-299), lança uma exceção

    const data = await response.json(); // Extrai os dados da resposta como JSON

    return { data }; // Retorna os dados obtidos da API
  },
  update: async ({ resource, id, variables }) => { // Define a função update, que atualiza um recurso
    const response = await fetch(`${API_URL}/${resource}/${id}`, { // Faz uma requisição PATCH para atualizar o recurso
      method: "PATCH", // Utiliza o método PATCH para atualizar parcialmente o recurso
      body: JSON.stringify(variables), // Converte as variáveis em JSON e envia no corpo da requisição
      headers: {
        "Content-Type": "application/json", // Define o tipo de conteúdo da requisição como JSON
      },
    });

    if (response.status < 200 || response.status > 299) throw response; // Se a resposta não estiver no intervalo de códigos de sucesso (200-299), lança uma exceção

    const data = await response.json(); // Extrai os dados da resposta como JSON

    return { data }; // Retorna os dados atualizados obtidos da API
  },
  getApiUrl: () => API_URL, // Retorna a URL base da API
  getList: () => { throw new Error("Not implemented"); }, // Define a função getList, que busca uma lista de recursos (ainda não implementada)
  create: () => { throw new Error("Not implemented"); }, // Define a função create, que cria um recurso (ainda não implementada)
  deleteOne: () => { throw new Error("Not implemented"); }, // Define a função deleteOne, que exclui um recurso (ainda não implementada)
  /* ... */ // Outras funções como delete, create, etc., podem ser implementadas aqui
};
