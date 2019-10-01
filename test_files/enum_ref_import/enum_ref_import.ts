/**
 * @fileoverview Reproduces a problem where a value that is only referenced in enum member
 * initializers would not be considered referenced as a value by TS, and thus wouldn't get an import
 * emitted for it.
 */

import {Enum} from './exporter';

export enum ValuesInInitializer {
  ENUM_MEMBER = Enum.X,
}
