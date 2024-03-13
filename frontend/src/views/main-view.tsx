import { StateOrchestrator } from "../components/state-orchestrator"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const MainView = () => {
  let qc = new QueryClient();
  return <QueryClientProvider client={qc}><StateOrchestrator/></QueryClientProvider>
}