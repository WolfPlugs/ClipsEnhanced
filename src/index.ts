import { Injector, Logger, webpack } from "replugged";

const inject = new Injector();
const logger = Logger.plugin("Clips Enhanced");

interface Option {
  value: number;
  label: string;
}

export async function start(): Promise<void> {

}

export function stop(): void {
  inject.uninjectAll();
}

export function customOptions(): Option[] {
  return [
    {
      value: 300e3,
      label: "5 minutes"
    }
  ];
}
