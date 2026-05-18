/**
 * Design tokens
 * Centralized design primitives for Echo in Ink
 */

export { spacing, spacingClass } from './spacing';
export { typography, typographyClass } from './typography';
export { radius, radiusClass } from './radius';
export { shadows, shadowClass } from './shadows';
export { motion, motionClass } from './motion';
export { layout, layoutClass } from './layout';

import { spacing as _spacing } from './spacing';
import { typography as _typography } from './typography';
import { radius as _radius } from './radius';
import { shadows as _shadows } from './shadows';
import { motion as _motion } from './motion';
import { layout as _layout } from './layout';

/**
 * Re-export all tokens as a single object
 */
export const tokens = {
  spacing: _spacing,
  typography: _typography,
  radius: _radius,
  shadows: _shadows,
  motion: _motion,
  layout: _layout,
} as const;
