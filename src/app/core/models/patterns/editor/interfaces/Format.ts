/**
 * @description Interfaz que dara molde a los formatos de los elementos MD.
 */
export interface Format {
  // (Opcional) boolean que indica si se trata de un bloque
  block?: boolean;
  // (Opcional) Un booleano que indica si se trata de un formato de varias líneas (por ejemplo, una lista ordenada).
  multiline?: boolean;
  prefix?: {
    value?: string;
    multiline?: boolean;
    pattern?: string;
    antipattern?: string;
  };
  suffix?: string;
}
