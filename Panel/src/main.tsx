import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { buildProvidersTree } from "./components/BuildProvidersTree.tsx";
import "./index.css";
import router from "./routers.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      // refetchOnWindowFocus: false,
      // refetchOnReconnect: false,
    },
  },
});

export const ProvidersTree = buildProvidersTree([
  [QueryClientProvider, { client: queryClient }],
  // [ThemeProvider, { theme: AppTheme }],
  [RouterProvider, { router: router }],
  [ReactQueryDevtools, { initialIsOpen: true }],
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProvidersTree />
  </React.StrictMode>
);
