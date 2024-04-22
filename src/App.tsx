import { Refine } from "@refinedev/core"; // Importa o componente Refine da biblioteca "@refinedev/core", que é usado para envolver toda a aplicação Refine

import { dataProvider } from "./providers/data-provider"; // Importa o provedor de dados personalizado da aplicação, geralmente localizado em "./providers/data-provider"

import { ShowProduct } from "./pages/products/show"; // Importa o componente de visualização de produto da aplicação, geralmente localizado em "./pages/products/show"
import { EditProduct } from "./pages/products/edit"; // Importa o componente de edição de produto da aplicação, geralmente localizado em "./pages/products/edit"

export default function App(): JSX.Element { // Define o componente principal da aplicação, que retorna um JSX.Element
  return (
    <Refine dataProvider={dataProvider}> {/* Renderiza o componente Refine, passando o provedor de dados personalizado como propriedade */}
      {/* <ShowProduct /> */} {/* Renderiza o componente ShowProduct dentro do componente Refine (comentado para desativá-lo) */}
      <EditProduct /> {/* Renderiza o componente EditProduct dentro do componente Refine */}
    </Refine>
  );
}
