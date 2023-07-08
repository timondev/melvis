import type { Language } from "$lib/enums/language";
import type { Text } from "$lib/interfaces/text";

export interface Config {
  sessionMode: XRSessionMode;
  referenceSpaceType: XRReferenceSpaceType;
  language: Language;
  textSpeed: number;
  buttonText: Text;
  errorMessage: Text;
}