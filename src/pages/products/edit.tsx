import { useOne, useUpdate } from "@refinedev/core"; // Importa os hooks useOne e useUpdate da biblioteca "@refinedev/core"

export const EditProduct = () => { // Define o componente EditProduct
  const { data, isLoading } = useOne({ resource: "products", id: 123 }); // Utiliza o hook useOne para buscar um único recurso do tipo "products" com o ID 123
  const { mutate, isLoading: isUpdating } = useUpdate(); // Utiliza o hook useUpdate para atualizar um recurso

  if (isLoading) { // Verifica se os dados estão sendo carregados
    return <div>Loading...</div>; // Se estiver carregando, retorna uma mensagem de carregamento
  }

  const updatePrice = async () => { // Define a função para atualizar o preço do produto
    await mutate({ // Utiliza a função mutate para atualizar o recurso
      resource: "products", // Especifica o tipo de recurso a ser atualizado
      id: 123, // Especifica o ID do recurso a ser atualizado
      values: { // Define os novos valores para atualização
        price: Math.floor(Math.random() * 100), // Gera um preço aleatório para atualizar
      },
    });
  };

  return (
    <div>
      <div>Product name: {data?.data.name}</div> {/* Renderiza o nome do produto */}
      <div>Product price: ${data?.data.price}</div> {/* Renderiza o preço do produto */}
      <button onClick={updatePrice}>Update Price</button> {/* Renderiza um botão para atualizar o preço do produto */}
    </div>
  );
}
