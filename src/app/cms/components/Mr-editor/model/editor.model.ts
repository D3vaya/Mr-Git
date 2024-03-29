import { Configuration } from 'src/app/core/models/configuration.model';

// INTERFACES
export interface ElementMode {
  typeElementHtml: string;
  modifierElement: string;
}

export interface EditorSetup {
  markdownWriter?: string;
  configuration: Configuration;
}

export interface OptionToolbar {
  heading: boolean;
  images: boolean;
  backgorund: string;
  color: string;
}

// ENUMS

export enum EditorMode {
  CopyPaste = 'copypaste',
  Selection = 'selection',
}
