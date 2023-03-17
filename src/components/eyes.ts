import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const eyes: ComponentGroup = {
  'cat': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M117.849 13.249c6.192 1.618 8.512 4 9 6 .489 2 .75 5-1 12-1.5 6-3.5 14-13.5 17s-16.186 1-19.686-.558c-3.903-1.737-5.899-3.702-6.41-8.897-.513-5.195 2.186-16.385 9.91-22.006 7.723-5.622 13.931-5.566 21.686-3.54ZM15.207 13.249c-6.192 1.618-8.512 4-9 6-.488 2-.75 5 1 12 1.5 6 3.5 14 13.5 17s16.187 1 19.686-.558c3.903-1.737 5.9-3.702 6.411-8.897.512-5.195-2.187-16.385-9.91-22.006-7.724-5.622-13.932-5.566-21.687-3.54Z" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <path d="M120.259 13.981a30.08 30.08 0 0 0-2.41-.732 56.053 56.053 0 0 0-1.434-.356 14.796 14.796 0 0 0-2.066-.145c-8.836 0-16 7.836-16 17.5 0 9.482 6.894 17.202 15.499 17.492 8.708-3.32 10.579-10.804 12.001-16.492 1.718-6.87 1.497-9.887 1.027-11.888-1.725-2.371-4.001-4.241-6.617-5.379ZM30.796 13.359C24 15.378 19 22.175 19 30.249c0 9.665 7.163 17.5 16 17.5 4.085 0 7.812-1.675 10.64-4.43.597-1.178.978-2.638 1.164-4.525.512-5.195-2.187-16.384-9.91-22.006-2.126-1.547-4.138-2.665-6.098-3.43Z" fill="${colors.eyes.value}"/>
`,
  'kindLash': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="m90.172 25.397.003-.01c3.05-9.435 13.394-14.587 23.139-11.437 9.746 3.15 15.117 13.382 12.067 22.818l-.008.026-.007.026c-.738 2.79-2.517 5.966-5.842 8.288-3.317 2.317-8.261 3.847-15.443 3.192-3.322-.302-7.488-1.131-10.974-2.193-1.743-.531-3.286-1.112-4.455-1.7-.584-.293-1.054-.577-1.401-.844-.359-.275-.528-.486-.593-.613-.07-.137-.15-.423-.183-.914a11.458 11.458 0 0 1 .048-1.754c.126-1.379.43-3.07.832-4.868.804-3.591 1.98-7.51 2.817-10.017ZM44.026 25.397l-.004-.01c-3.05-9.435-13.394-14.587-23.14-11.437C11.138 17.1 5.767 27.332 8.817 36.769l.008.026.007.026c.738 2.79 2.517 5.966 5.842 8.288 3.317 2.317 8.261 3.847 15.443 3.192 3.322-.302 7.489-1.131 10.974-2.193 1.743-.531 3.286-1.112 4.455-1.7.585-.293 1.054-.577 1.401-.844.36-.275.528-.486.593-.613.07-.137.15-.423.183-.914a11.47 11.47 0 0 0-.047-1.754c-.127-1.379-.43-3.07-.833-4.868-.804-3.591-1.98-7.51-2.816-10.017Z" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <path d="M111.512 12.44C103.796 14.144 98 21.385 98 30.06c0 9.851 7.473 17.854 16.744 17.999 9.568-3.534 12.36-10.62 12.396-15.81.585-9.586-6.229-17.955-15.628-19.81ZM32.693 12.955c5.655 1.807 10.348 6.146 12.281 12.125 1.689 5.06 4.743 15.808 3.456 18.326-.86 1.68-5.663 3.465-10.781 4.651C28.422 47.859 21 39.877 21 30.061c0-7.98 4.903-14.745 11.693-17.106Z" fill="${colors.eyes.value}"/>
  <path stroke="${colors.eyes.value}" stroke-width="2" stroke-linecap="round" d="m7.411 14.906 4.516 3.951M3.225 22.293l5.795 1.553M126.61 14.906l-4.516 3.951M130.796 22.293l-5.795 1.553"/>
`,
  'sideEye': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g fill="${colors.eyes.value}">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M33 44c7.18 0 13-5.82 13-13 0-1.01-.115-1.992-.333-2.936C42.331 25.066 35.841 21 27.797 21c-1.155 0-2.284.084-3.38.236A12.97 12.97 0 0 0 20 31c0 7.18 5.82 13 13 13Z"/>
    <path d="M7 29c2.773-3 10.814-9 20.797-9S45.425 26 48 29" stroke="${colors.eyes.value}" stroke-width="4" stroke-linecap="round"/>
  </g>
  <g fill="${colors.eyes.value}">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M112 44c7.18 0 13-5.82 13-13 0-1.01-.115-1.992-.333-2.936-3.336-2.998-9.826-7.064-17.87-7.064-1.155 0-2.284.084-3.38.236A12.969 12.969 0 0 0 99 31c0 7.18 5.82 13 13 13Z"/>
    <path d="M86 29c2.773-3 10.814-9 20.797-9s17.628 6 20.203 9" stroke="${colors.eyes.value}" stroke-width="4" stroke-linecap="round"/>
  </g>
  <path d="M6.5 29c-1-.167-3.1-1.2-3.5-4M127 29c1-.167 3.1-1.2 3.5-4" stroke="${colors.eyes.value}" stroke-width="4" stroke-linecap="round"/>
`,
  'kind': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="m90.172 25.397.003-.01c3.05-9.435 13.394-14.587 23.139-11.437 9.746 3.15 15.117 13.382 12.067 22.818l-.008.026-.007.026c-.738 2.79-2.517 5.966-5.842 8.288-3.317 2.317-8.261 3.847-15.443 3.192-3.322-.302-7.488-1.131-10.974-2.193-1.743-.531-3.286-1.112-4.455-1.7-.584-.293-1.054-.577-1.401-.844-.359-.275-.528-.486-.593-.613-.07-.137-.15-.423-.183-.914a11.458 11.458 0 0 1 .048-1.754c.126-1.379.43-3.07.832-4.868.804-3.591 1.98-7.51 2.817-10.017ZM44.026 25.397l-.004-.01c-3.05-9.435-13.394-14.587-23.14-11.437C11.138 17.1 5.767 27.332 8.817 36.769l.008.026.007.026c.738 2.79 2.517 5.966 5.842 8.288 3.317 2.317 8.261 3.847 15.443 3.192 3.322-.302 7.489-1.131 10.974-2.193 1.743-.531 3.286-1.112 4.455-1.7.585-.293 1.054-.577 1.401-.844.36-.275.528-.486.593-.613.07-.137.15-.423.183-.914a11.47 11.47 0 0 0-.047-1.754c-.127-1.379-.43-3.07-.833-4.868-.804-3.591-1.98-7.51-2.816-10.017Z" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <path d="M111.512 12.44C103.796 14.144 98 21.386 98 30.06c0 9.851 7.473 17.854 16.744 17.999 9.568-3.534 12.36-10.619 12.396-15.81.585-9.585-6.229-17.954-15.628-19.809ZM32.693 12.955c5.655 1.807 10.348 6.146 12.281 12.125 1.689 5.06 4.743 15.808 3.456 18.326-.86 1.68-5.663 3.465-10.781 4.651C28.422 47.859 21 39.877 21 30.061c0-7.98 4.903-14.745 11.693-17.106Z" fill="${colors.eyes.value}"/>
`,
  'sparkly': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <ellipse cx="29.5" cy="29.5" rx="14.5" ry="19.5" fill="${colors.eyes.value}"/>
  <ellipse cx="105.5" cy="29.5" rx="14.5" ry="19.5" fill="${colors.eyes.value}"/>
  <circle cx="25.5" cy="21.5" r="5.5" fill="#fff"/>
  <circle cx="101.5" cy="21.5" r="5.5" fill="#fff"/>
  <ellipse cx="35.5" cy="37" rx="2.5" ry="3" fill="#fff"/>
  <ellipse cx="111.5" cy="37" rx="2.5" ry="3" fill="#fff"/>
  <path d="M14 13c0 .667.7 3.2 1.5 4 1 1 2.5 1.5 4 1M90 13c0 .667.7 3.2 1.5 4 1 1 2.5 1.5 4 1" stroke="${colors.eyes.value}" stroke-width="2" stroke-linecap="round"/>
`,
  'dreamy': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M41.862 16.213c.144.529-.13 1.086-.611 1.245l-27.347 9.004-.014.004c-1.23.36-3.145.616-4.899.157-.887-.233-1.773-.658-2.499-1.39-.736-.74-1.261-1.751-1.477-3.054-.09-.543.238-1.064.733-1.163.495-.099.97.262 1.06.805.148.897.488 1.508.917 1.94.438.441 1.016.74 1.689.916 1.361.357 2.946.165 3.994-.14l27.32-8.995c.481-.159.99.142 1.134.67Z" fill="${colors.eyes.value}"/>
  <path d="M27.322 50C37.638 50 46 40.822 46 29.5c0-4.858-1.54-9.321-4.112-12.834-.056.363-.294.679-.637.792l-27.347 9.004-.014.004c-1.23.36-3.145.616-4.899.157a7.134 7.134 0 0 1-.158-.044c-.124.954-.188 1.93-.188 2.921 0 11.322 8.362 20.5 18.677 20.5Z" fill="${colors.eyes.value}"/>
  <path d="M13.65 26.533a5 5 0 1 0 6.4-2.094l-6.146 2.023-.014.004a9.176 9.176 0 0 1-.24.067Z" fill="#fff"/>
  <path d="M9.18 24.61C11.177 15.649 18.542 9 27.321 9c5.384 0 10.236 2.5 13.644 6.5a.838.838 0 0 0-.239.042l-27.32 8.996c-1.047.304-2.632.495-3.993.14a4.94 4.94 0 0 1-.235-.068Z" fill="${colors.eyes.value}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M92.139 16.213c-.145.529.129 1.086.61 1.245l27.347 9.004.014.004c1.23.36 3.145.616 4.899.157.887-.233 1.773-.658 2.499-1.39.736-.74 1.262-1.751 1.477-3.054.09-.543-.238-1.064-.733-1.163-.495-.099-.969.262-1.059.805-.149.897-.489 1.508-.917 1.94-.439.441-1.017.74-1.69.916-1.361.357-2.946.165-3.993-.14l-27.32-8.995c-.482-.159-.99.142-1.134.67Z" fill="${colors.eyes.value}"/>
  <path d="M106.678 50C96.362 50 88 40.822 88 29.5c0-4.858 1.54-9.321 4.113-12.834.055.363.293.679.636.792l27.347 9.004.014.004c1.23.36 3.145.616 4.899.157l.159-.044c.124.954.188 1.93.188 2.921 0 11.322-8.363 20.5-18.678 20.5ZM124.821 24.61C122.823 15.649 115.458 9 106.678 9c-5.384 0-10.236 2.5-13.644 6.5.08.002.16.016.24.042l27.319 8.996c1.047.304 2.632.495 3.993.14.08-.022.158-.044.235-.068Z" fill="${colors.eyes.value}"/>
  <circle cx="98" cy="29" r="5" fill="#fff"/>
`,
  'sleepy': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <mask id="eyesSleepy-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="83" y="10" width="44" height="39">
    <ellipse cx="105" cy="29.5" rx="22" ry="19.5" fill="#fff"/>
  </mask>
  <g mask="url(#eyesSleepy-a)">
    <path d="M126 29.5c0 10.107-9.285 18.5-21 18.5s-21-8.393-21-18.5S93.285 11 105 11s21 8.393 21 18.5Z" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
    <ellipse cx="110.5" cy="28" rx="17.5" ry="18" fill="${colors.eyes.value}"/>
    <path fill="${colors.eyes.value}" d="m91.604.725 42.435 17.125-7.138 17.687-42.435-17.125z"/>
  </g>
  <g>
    <mask id="eyesSleepy-b" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="7" y="10" width="44" height="39">
      <ellipse cx="29" cy="29.5" rx="22" ry="19.5" fill="#fff"/>
    </mask>
    <g mask="url(#eyesSleepy-b)">
      <path d="M50 29.5C50 39.607 40.715 48 29 48S8 39.607 8 29.5 17.285 11 29 11s21 8.393 21 18.5Z" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
      <ellipse cx="34.5" cy="28" rx="17.5" ry="18" fill="${colors.eyes.value}"/>
      <path fill="${colors.eyes.value}" d="M0 17.851 42.434.724l7.139 17.686L7.139 35.538z"/>
    </g>
  </g>
`,
  'lookAtMeBottomLash': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <circle r="17" transform="matrix(1 0 0 -1 31 29)" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <path stroke="${colors.eyes.value}" stroke-width="2" stroke-linecap="round" d="M31 47v5M41.634 42.304l2.5 4.33M19.866 42.304l-2.5 4.33M102 47v5M112.634 42.304l2.5 4.33M90.866 42.304l-2.5 4.33"/>
  <circle r="17" transform="matrix(1 0 0 -1 102 29)" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <circle cx="33" cy="28" r="11" fill="${colors.eyes.value}"/>
  <circle cx="100" cy="28" r="11" fill="${colors.eyes.value}"/>
`,
  'lookAtMeTopLash': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <circle cx="31" cy="29" r="17" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <path stroke="${colors.eyes.value}" stroke-width="2" stroke-linecap="round" d="M31 11V6M41.634 15.696l2.5-4.33M19.866 15.696l-2.5-4.33M102 11V6M112.634 15.696l2.5-4.33M90.866 15.696l-2.5-4.33"/>
  <circle cx="102" cy="29" r="17" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <circle cx="33" cy="28" r="11" fill="${colors.eyes.value}"/>
  <circle cx="100" cy="28" r="11" fill="${colors.eyes.value}"/>
`,
  'lookAtMe': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <circle cx="31" cy="29" r="17" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <circle cx="102" cy="29" r="17" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <circle cx="33" cy="28" r="11" fill="${colors.eyes.value}"/>
  <circle cx="100" cy="28" r="11" fill="${colors.eyes.value}"/>
`,
  'zzz': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g stroke="${colors.eyes.value}" stroke-width="4" stroke-linecap="round">
    <path d="M15.71 26.366c1.766 2.523 7.531 7.372 16.467 6.59s13.334-6.52 14.415-9.292M86.408 23.664c1.3 2.791 6.136 8.568 15.072 9.35 8.936.781 14.263-4.106 15.81-6.648"/>
  </g>
`,
  'smiling': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g stroke="${colors.eyes.value}" stroke-width="4" stroke-linecap="round">
    <path d="M15.71 32.634c1.766-2.523 7.531-7.372 16.467-6.59s13.334 6.52 14.415 9.292M86.407 35.336c1.301-2.791 6.137-8.568 15.073-9.35 8.936-.781 14.263 4.106 15.81 6.648"/>
  </g>
`,
  'zzzLashes': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g stroke="${colors.eyes.value}" stroke-linecap="round">
    <path d="M15.71 26.366c1.766 2.523 7.531 7.372 16.467 6.59s13.334-6.52 14.415-9.292M86.408 23.664c1.3 2.791 6.136 8.568 15.072 9.35 8.936.781 14.263-4.106 15.81-6.648" stroke-width="4"/>
    <path stroke-width="3" d="M31.5 40.5v-7M43.451 37.781l-3.5-6.062M18.951 39.281l3.5-6.062M102 40.5v-7M90.049 37.781l3.5-6.062M114.549 39.281l-3.5-6.062"/>
  </g>
`,
  'smilingLash': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g stroke="${colors.eyes.value}" stroke-linecap="round">
    <path d="M15.71 32.634c1.766-2.523 7.531-7.372 16.467-6.59s13.334 6.52 14.415 9.292M86.408 35.336c1.3-2.791 6.136-8.568 15.072-9.35 8.936-.781 14.263 4.106 15.81 6.648" stroke-width="4"/>
    <path stroke-width="3" d="M31.5 18.5v7M43.451 21.219l-3.5 6.062M18.951 19.719l3.5 6.062M102 18.5v7M90.049 21.219l3.5 6.062M114.549 19.719l-3.5 6.062"/>
  </g>
`,
  'circleBottomLash': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <circle r="19.5" transform="matrix(1 0 0 -1 104.5 29.5)" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <circle r="15" transform="matrix(1 0 0 -1 110 29)" fill="${colors.eyes.value}"/>
  <path stroke="${colors.eyes.value}" stroke-width="2" stroke-linecap="round" d="M104 50v5M115.634 46.706l2.5 4.33M93.366 46.706l-2.5 4.33"/>
  <circle r="19.5" transform="matrix(1 0 0 -1 28.5 29.5)" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <circle r="15" transform="matrix(1 0 0 -1 34 29)" fill="${colors.eyes.value}"/>
  <path stroke="${colors.eyes.value}" stroke-width="2" stroke-linecap="round" d="M28 50v5M39.634 46.706l2.5 4.33M17.366 46.706l-2.5 4.33"/>
`,
  'circleTopLash': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <circle cx="104.5" cy="29.5" r="19.5" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <circle cx="110" cy="29" r="15" fill="${colors.eyes.value}"/>
  <path stroke="${colors.eyes.value}" stroke-width="2" stroke-linecap="round" d="M104 9V4M115.634 12.294l2.5-4.33M93.366 12.294l-2.5-4.33"/>
  <circle cx="28.5" cy="29.5" r="19.5" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <circle cx="34" cy="29" r="15" fill="${colors.eyes.value}"/>
  <path stroke="${colors.eyes.value}" stroke-width="2" stroke-linecap="round" d="M28 9V4M39.634 12.294l2.5-4.33M17.366 12.294l-2.5-4.33"/>
`,
  'circle': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <circle cx="104.5" cy="29.5" r="19.5" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <circle cx="110" cy="29" r="15" fill="${colors.eyes.value}"/>
  <circle cx="28.5" cy="29.5" r="19.5" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <circle cx="34" cy="29" r="15" fill="${colors.eyes.value}"/>
`,
  'ovalBottomLash': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M48 29c0-12.262-8.836-22-19.5-22C17.835 7 9 16.738 9 29s8.835 22 19.5 22C39.164 51 48 41.262 48 29Z" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <ellipse rx="15" ry="17" transform="matrix(1 0 0 -1 34 29)" fill="${colors.eyes.value}"/>
  <path stroke="${colors.eyes.value}" stroke-width="2" stroke-linecap="round" d="M28 52v5M39.634 48.304l2.5 4.33M17.866 48.304l-2.5 4.33"/>
  <path d="M124 29c0-12.262-8.836-22-19.5-22C93.835 7 85 16.738 85 29s8.835 22 19.5 22c10.664 0 19.5-9.738 19.5-22Z" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <ellipse rx="15" ry="17" transform="matrix(1 0 0 -1 110 29)" fill="${colors.eyes.value}"/>
  <path stroke="${colors.eyes.value}" stroke-width="2" stroke-linecap="round" d="M104 52v5M115.634 48.304l2.5 4.33M93.866 48.304l-2.5 4.33"/>
`,
  'ovalTopLash': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M48 29c0 12.262-8.836 22-19.5 22C17.835 51 9 41.262 9 29S17.835 7 28.5 7C39.164 7 48 16.738 48 29Z" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <ellipse cx="34" cy="28" rx="15" ry="17" fill="${colors.eyes.value}"/>
  <path stroke="${colors.eyes.value}" stroke-width="2" stroke-linecap="round" d="M28 6V1M39.634 9.696l2.5-4.33M17.866 9.696l-2.5-4.33"/>
  <path d="M124 29c0 12.262-8.836 22-19.5 22C93.835 51 85 41.262 85 29s8.835-22 19.5-22c10.664 0 19.5 9.738 19.5 22Z" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <ellipse cx="110" cy="28" rx="15" ry="17" fill="${colors.eyes.value}"/>
  <path stroke="${colors.eyes.value}" stroke-width="2" stroke-linecap="round" d="M104 6V1M115.634 9.696l2.5-4.33M93.866 9.696l-2.5-4.33"/>
`,
  'oval': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M124 29c0 12.262-8.836 22-19.5 22C93.835 51 85 41.262 85 29s8.835-22 19.5-22c10.664 0 19.5 9.738 19.5 22Z" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <ellipse cx="110" cy="28" rx="15" ry="17" fill="${colors.eyes.value}"/>
  <path d="M48 29c0 12.262-8.836 22-19.5 22C17.835 51 9 41.262 9 29S17.835 7 28.5 7C39.164 7 48 16.738 48 29Z" fill="#fff" stroke="${colors.eyes.value}" stroke-width="2"/>
  <ellipse cx="34" cy="28" rx="15" ry="17" fill="${colors.eyes.value}"/>
`,
}
