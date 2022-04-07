import "./src/api";
import { Routes } from "./src/routes/index.routes";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </QueryClientProvider>
  );
}
