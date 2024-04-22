import React from "react"; // Importa a biblioteca React para permitir o uso de componentes React
import ReactDOM from "react-dom/client"; // Importa o método ReactDOM da biblioteca react-dom/client para renderização de componentes React no navegador
import App from "./App"; // Importa o componente principal da aplicação, geralmente localizado em "./App"

// Cria uma raiz de renderização no elemento com o id "root" do documento HTML e renderiza o conteúdo dentro dele
ReactDOM.createRoot(document.getElementById("root")!).render(
  // Componente React utilizado para ativar o modo estrito de React, que ajuda a identificar problemas no código e na renderização
  <React.StrictMode>
    <App /> {/* Renderiza o componente App dentro do componente React.StrictMode */}
  </React.StrictMode>,
);
