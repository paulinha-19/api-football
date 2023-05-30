import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/Auth/index.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
