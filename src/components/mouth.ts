import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const mouth: ComponentGroup = {
  'smallSmile': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M45 2c0 6.075-5.596 11-12.5 11S20 8.075 20 2" stroke="${colors.mouth.value}" stroke-width="3" stroke-linecap="round"/>
`,
  'surprise': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <ellipse cx="32.5" cy="7.5" rx="6.5" ry="7.5" fill="${colors.mouth.value}"/>
`,
  'kissy': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M31 4.653c2-2 4.5-2.4 6.5 0 2.5 3-.5 6-3.5 5.5 3.667 1.667 3.785 3.824 3 5-1 1.5-4 2-6 0" stroke="${colors.mouth.value}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
`,
  'wideSmile': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M52 2c0 6.075-8.507 11-19 11S14 8.075 14 2" stroke="${colors.mouth.value}" stroke-width="3" stroke-linecap="round"/>
`,
  'laugh': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M33 14c10.493 0 19-5.925 19-12 0 0-12 2-19 2S13.5 2 13.5 2c0 6.075 9.007 12 19.5 12Z" fill="#fff" fill-opacity=".9" stroke="${colors.mouth.value}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
`,
  'drool': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M31.34 4.837c4.5 0 9-1.5 14-1.5 8 2.5 4.167 8.333 0 9.5 1.5 4-1 7.5-3.5 6.5s-1-5-2.5-6.5c-1.275-1.275-16 1.5-20.5-1s-3-8 0-9.5 8 2.5 12.5 2.5Z" fill="#fff" fill-opacity=".9" stroke="${colors.mouth.value}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
`,
  'catSmile': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M7 2c2.333 2.667 8.4 8 14 8s10-3.333 11.5-5c1.5 1.667 5.9 5 11.5 5s11.667-5.333 14-8" stroke="${colors.mouth.value}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
`,
  'bunnySmile': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g stroke="${colors.mouth.value}" stroke-linecap="round">
    <path d="M52 4c0 3.314-8.507 6-19 6S14 7.314 14 4" stroke-width="3"/>
    <path d="M27 15v-5h12v5H27Z" fill="#fff" stroke-width="2" stroke-linejoin="round"/>
  </g>
`,
}
