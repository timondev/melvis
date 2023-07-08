import type { Config } from "$lib/interfaces/config";

export const speak = (text: string, config: Config, cancelPrevious = false) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = config.textSpeed;
  utterance.lang = config.language + '_DE';

  if(cancelPrevious == true) {
    speechSynthesis.cancel();
  }

  console.log(`NOW SAYING "${text}".`);
  speechSynthesis.speak(utterance);
}