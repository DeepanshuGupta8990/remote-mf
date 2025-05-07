interface Message {
  text: string;
  times: number;
}

export default function logMessage(msg: Message): void {
  for (let i = 0; i < msg.times; i++) {
    console.log(msg.text);
  }
}
