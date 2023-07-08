import type { Config } from "$lib/interfaces/config";
import { ErrorMessages } from "$lib/enums/errors";
import { Language } from "./enums/language";

export const config: Config = {
  sessionMode: 'immersive-vr',
  referenceSpaceType: 'local-floor',
  language: Language.EN,
  textSpeed: 1.0,
  buttonText: {
    de: 'Vielen Dank für Ihre Teilnahme.',
    en: 'Thank you for your participation.'
  },
  errorMessage: ErrorMessages.NONE
};