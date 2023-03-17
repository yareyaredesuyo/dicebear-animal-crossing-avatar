import type { Style } from '@dicebear/avatars';
import type { Options } from './options';
import type { ComponentPickCollection, ColorPickCollection } from './static-types';

import { schema } from './schema';
import { pickComponent } from './utils/pickComponent';
import { pickColor } from './utils/pickColor';
import { onPreCreate } from './hooks/onPreCreate';
import { onPostCreate } from './hooks/onPostCreate';

export const style: Style<Options> = {
  meta: {
    title: 'Animal Crossing Character Maker',
    creator: 'Ace S Chen',
    source: 'https://www.figma.com/community/file/834210307944210537',
    license: {
      name: 'CC BY 4.0',
      url: 'https://creativecommons.org/licenses/by/4.0/',
    },
  },
  schema,
  create: ({ prng, options }) => {
    onPreCreate({ prng, options });

    const blushComponent = pickComponent(prng, 'blush', options.blush);
    const hairComponent = pickComponent(prng, 'hair', options.hair);
    const eyesComponent = pickComponent(prng, 'eyes', options.eyes);
    const mouthComponent = pickComponent(prng, 'mouth', options.mouth);
    const noseComponent = pickComponent(prng, 'nose', options.nose);
    const teeComponent = pickComponent(prng, 'tee', options.tee);

    const components: ComponentPickCollection = {
      'blush': blushComponent,
      'hair': hairComponent,
      'eyes': eyesComponent,
      'mouth': mouthComponent,
      'nose': noseComponent,
      'tee': teeComponent,
    }

    const colors: ColorPickCollection = {
      'eyes': pickColor(prng, 'eyes', options.eyesColor ?? []),
      'nose': pickColor(prng, 'nose', options.noseColor ?? []),
      'mouth': pickColor(prng, 'mouth', options.mouthColor ?? []),
      'skin': pickColor(prng, 'skin', options.skinColor ?? []),
      'hair': pickColor(prng, 'hair', options.hairColor ?? []),
      'clothes': pickColor(prng, 'clothes', options.clothesColor ?? []),
    }


    onPostCreate({ prng, options, components, colors });

    return {
      attributes: {
        viewBox: '0 0 360 360',
        fill: 'none',
      },
      body: `
  <g fill="${colors.skin.value}">
    <ellipse cx="94" cy="144" rx="22" ry="19"/>
    <ellipse cx="263" cy="144" rx="22" ry="19"/>
  </g>
  <path d="M178 43c-31 0-82.5 11.2-82.5 82h.323c-1.845 11.056-2.413 22.025-1.129 31.5 3.2 23.6 33.667 41.5 48.5 47.5 4.834 2 18.7 6 35.5 6s30.667-4 35.5-6c14.834-6 45.3-23.9 48.5-47.5 1.296-9.554.698-20.618-1.194-31.758C261.375 54.172 209.962 43 179 43h-1Z" fill="${colors.skin.value}"/>
  <g transform="translate(95 145)">
    ${components.blush?.value(components, colors) ?? ''}
  </g>
  <g transform="translate(32 6)">
    ${components.hair?.value(components, colors) ?? ''}
  </g>
  <g transform="translate(113 101)">
    ${components.eyes?.value(components, colors) ?? ''}
  </g>
  <g transform="translate(148 160)">
    ${components.mouth?.value(components, colors) ?? ''}
  </g>
  <g transform="translate(164 127)">
    ${components.nose?.value(components, colors) ?? ''}
  </g>
  <path d="M155.353 207.521c-10.88 2.088-29.243 10.673-46.853 34.479-14.93 20.182-24.667 32.609-31.955 41.112A18.67 18.67 0 0 0 74.5 283c-10.217 0-18.5 8.283-18.5 18.5S64.283 320 74.5 320 93 311.717 93 301.5c0-2.535-.51-4.951-1.433-7.152 13.851-13.973 33.953-33.806 46.286-40.848-4.204 14.073-14.672 72.014 0 107H173.5l6.25-23 6.75 23h35.147c14.672-34.986 4.204-92.927 0-107 11.762 6.716 31.627 26.103 45.941 40.489A18.437 18.437 0 0 0 266 301.5c0 10.217 8.283 18.5 18.5 18.5s18.5-8.283 18.5-18.5-8.283-18.5-18.5-18.5c-.465 0-.926.017-1.382.051-7.735-9.043-18.045-22.026-32.118-41.051-18.259-24.683-37.328-33.003-48.025-34.684-6.482 1.444-14.927 2.684-24.281 2.684-8.908 0-16.992-1.125-23.341-2.479Z" fill="${colors.skin.value}"/>
  <path d="M228.993 304.17c-7.605.635-34.951 2.83-49.493 2.83-12.991 0-37.952-1.752-49.004-2.578-.808 19.229.639 40.06 7.357 56.078H173.5l6.25-23 6.75 23h35.148c6.746-16.088 8.177-37.031 7.345-56.33Z" fill="${colors.clothes.value}"/>
  <g style="mix-blend-mode:hard-light" opacity=".1" filter="url(#maker-a)">
    <path d="M210.094 209.12c-.974 5.532-3.448 13.915-4.618 17.88-.422 1.429-.727 3.949-1.081 6.872-.885 7.301-2.074 17.113-6.145 18.712-5.701 2.238-12.167 3.416-18.75 3.416s-13.049-1.178-18.75-3.416c-5.701-2.238-7.25-15.084-7.25-24.584 0-5.633-1.767-10.572-3.205-14.592-.539-1.507-1.032-2.885-1.368-4.123 2.345-.823 4.503-1.395 6.426-1.764 6.349 1.354 14.433 2.479 23.341 2.479 9.354 0 17.799-1.24 24.281-2.684 2.079.326 4.475.904 7.119 1.804Z" fill="#700000"/>
  </g>
  <g transform="translate(72 198)">
    ${components.tee?.value(components, colors) ?? ''}
  </g>
  <defs>
    <filter id="maker-a" x="146.927" y="205.316" width="65.167" height="52.684" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_514_1146"/>
    </filter>
  </defs>
`,
    };
  },
};
