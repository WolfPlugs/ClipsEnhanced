import { common, components, settings, types } from "replugged";
import { ReactElement } from "./type";
import { setting } from ".";

const { React } = common;
const { Modal: { ModalRoot, ModalHeader, ModalCloseButton, ModalFooter, ModalContent }, Text, TextInput, Select, Button } = components;

function parseTime(time: string, unit: string): number {
  const rawTime = parseInt(time);
  switch (unit) {
    case "Seconds":
      return rawTime * 1e3;
    case "Minutes":
      return rawTime * 60e3;
    case "Hours":
      return rawTime * 3600e3;
    default:
      return rawTime;
  }
}

const Units = ["Seconds", "Minutes", "Hours"];

export const Settings = (): ReactElement => {
  const [time, setTime] = React.useState<string>();
  const [unit, setUnit] = React.useState<string>();

  const formatedTime = React.useCallback(() => {
    const time5 = parseTime(time, unit);
    setting.set("clipOptions", [
      { value: time5, 
        label: `${time} ${unit}`
      }
    ]);
  }, [time, unit])

  return (
    <div>
      <ModalHeader className="title-header">
        <Text tag="h3">Set Time</Text>
      </ModalHeader>
      <ModalContent>
        <TextInput
          value={time}
          placeholder="Time"
          onChange={(value: string) => setTime(value)}
          style={{ marginBottom: "10pc" }}
        />
        <Select
          options={
            Units.map((unit) => ({
              label: unit,
              value: unit,
            }))
          }
          isSelected={(value: string) => value === unit}
          select={(value: string) => setUnit(value)}
          serialize={(value: string) => value}
        />
      </ModalContent>
      <ModalFooter>
        <Button
          onClick={() => {
            formatedTime();
          }}
        />
      </ModalFooter>
    </div>
  )
}
