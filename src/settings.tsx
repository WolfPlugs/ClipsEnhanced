import { common, components, settings } from "replugged";

const { React } = common;
const { Modal: { ModalRoot, ModalHeader, ModalCloseButton, ModalFooter, ModalContent }, Text, TextInput } = components;

function parseTime(time: string, unit: string) {
  const rawTime = parseInt(time);
  switch (unit) {
    case "seconds":
      return rawTime * 1e3;
    case "minutes":
      return rawTime * 60e3;
    case "hours":
      return rawTime * 3600e3;
  }
}

function setClipTime(time: string, unit: string): void {
  
}

export default (props) => {

  const [time, setTime] = React.useState<string>();
  const [unit, setUnit] = React.useState<string>();



  return (
    <ModalRoot {...props}>
      <ModalHeader>
        <Text tag="h3">Set Time</Text>
      </ModalHeader>
      <ModalContent>
        <TextInput
          value={time}
          placeholder="Time"
          onChange={(value) => setTime(value)}
          style={{ marginBottom: "10pc"}}
        />


      <ModalContent/>
    <ModalRoot/>
  )
}
