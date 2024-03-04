import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { GuessingGame } from "../components/guessing-game"

export const MainView = () => {
  let qc = new QueryClient();
  return <QueryClientProvider client={qc}><GuessingGame /></QueryClientProvider>
}