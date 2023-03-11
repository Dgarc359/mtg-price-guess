import { SSTConfig } from "sst";
import { services } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "mtg-guessing-game",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(services);
  }
} satisfies SSTConfig;
