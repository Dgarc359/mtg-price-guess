export {StateOrchestratorState as StateOrchestrator} from "./state-orchestrator-state";
export const gameChoices = ["Pokemon", "Magic The Gathering"] as const;
export type GameChoice = typeof gameChoices[number]
