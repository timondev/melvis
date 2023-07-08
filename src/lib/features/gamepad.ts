import { buttonMapping } from "$lib/enums/button-mapping";

let lastButtonStates: (GamepadButton & { index: number })[][] = [[], [], [], []];
let callback: (button: string) => void;

export const enableGamePad = (buttonClickCallback: (button: string) => void) => {
  callback = buttonClickCallback;
}

export const updateGamepad = () => {
  const gamepads = navigator.getGamepads();

  for(let i = 0; i < gamepads.length; i++) {
    if(gamepads[i] == null) continue;
    
    const gamepad = gamepads[i];

    const buttonStates = gamepad.buttons.map((button, f) => {
      return {
        index: f,
        pressed: button.pressed,
        touched: button.touched,
        value: button.value,
        triggered: lastButtonStates[i][f]
          ? (button.pressed && lastButtonStates[i][f].pressed !== button.pressed)
          : button.pressed,
        released: lastButtonStates[i][f]
          ? (!button.pressed && lastButtonStates[i][f].pressed !== button.pressed)
          : false
      }
    });

    lastButtonStates[i] = buttonStates;

    const triggeredButtons = buttonStates.filter((state) => state.triggered);

    for(let i = 0; i < triggeredButtons.length; i++) {
      callback(buttonMapping[triggeredButtons[i].index]);
    }
  }
}