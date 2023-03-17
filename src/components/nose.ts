import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const nose: ComponentGroup = {
  'triangle': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="m17 3 8.66 22.5H8.34L17 3Z" fill="${colors.nose.value}"/>
`,
  'oval': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <ellipse cx="17" cy="16.5" rx="9" ry="5.5" fill="${colors.mouth.value}"/>
`,
  'rectangle': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <rect x="8" y="12" width="17" height="8" rx="1" fill="${colors.mouth.value}"/>
`,
  'circle': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <circle cx="17" cy="16" r="7" fill="${colors.mouth.value}"/>
`,
}
