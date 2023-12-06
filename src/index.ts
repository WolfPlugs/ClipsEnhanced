import { Injector, Logger, settings } from "replugged";
import "./style.css"

const inject = new Injector();
const logger = Logger.plugin("Clips Enhanced");

export interface Option {
  value: number;
  label: string;
}

export interface Options {
  clipOptions: Option[];
}

export const setting = await settings.init("dev.wolfplugs.ClipsEnhanced", {
  clipOptions: [
    {
      value: 300e3,
      label: "5 minutes",
    },
  ],
});

export function start(): Promise<void> {
  logger.log("Enabled custom clip settings.");
  return new Promise(() => {});
}

export function stop(): void {
  inject.uninjectAll();
}

export function customOptions(): Option[] {
  return setting.get("clipOptions");
}

export { Settings } from "./settings";
