import { useOne } from "@refinedev/core"; // Importa o hook useOne da biblioteca "@refinedev/core", que é usado para buscar um único recurso

export const ShowProduct = () => { // Define o componente ShowProduct
    const { data, isLoading } = useOne({ resource: "products", id: 123 }); // Utiliza o hook useOne para buscar um único recurso do tipo "products" com o ID 123

    if (isLoading) { // Verifica se os dados estão sendo carregados
        return <div>Loading...</div>; // Se estiver carregando, retorna uma mensagem de carregamento
    }

    return <div>Product name: {data?.data.name}</div>; // Se os dados estiverem carregados, retorna o nome do produto (data.name) se existir, dentro de um elemento div
};
