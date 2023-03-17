import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const blush: ComponentGroup = {
  'solidPink': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g opacity=".7" fill="${colors.nose.value}">
    <ellipse cx="24.5" cy="15.5" rx="12.5" ry="10.5"/>
    <ellipse cx="144.5" cy="15.5" rx="12.5" ry="10.5"/>
  </g>
`,
  'softPink': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g opacity=".7" filter="url(#blushSoftPink-a)" fill="${colors.nose.value}">
    <ellipse cx="24.5" cy="15.5" rx="12.5" ry="10.5"/>
    <ellipse cx="144.5" cy="15.5" rx="12.5" ry="10.5"/>
  </g>
  <defs>
    <filter id="blushSoftPink-a" x="-5" y="-5" width="179" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_514_1278"/>
    </filter>
  </defs>
`,
  'solidCoral': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g opacity=".7" fill="${colors.nose.value}">
    <ellipse cx="24.5" cy="15.5" rx="12.5" ry="10.5"/>
    <ellipse cx="144.5" cy="15.5" rx="12.5" ry="10.5"/>
  </g>
`,
  'softCoral': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g opacity=".7" filter="url(#blushSoftCoral-a)" fill="${colors.nose.value}">
    <ellipse cx="24.5" cy="15.5" rx="12.5" ry="10.5"/>
    <ellipse cx="144.5" cy="15.5" rx="12.5" ry="10.5"/>
  </g>
  <defs>
    <filter id="blushSoftCoral-a" x="-5" y="-5" width="179" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_514_1288"/>
    </filter>
  </defs>
`,
}
