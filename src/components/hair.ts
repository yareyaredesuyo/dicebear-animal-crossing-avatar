import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const hair: ComponentGroup = {
  'smooth': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path opacity=".75" d="M63.5 119c0-70.8 51.5-82 82.5-82h1c31 0 82.5 11.2 82.5 82-10.5 0-10 0-15-23-10.5 0-10.5 0-16-18.5-11.833-1.333-38.7-4-51.5-4h-1c-12.8 0-39.667 2.667-51.5 4C89 96 89 96 78.5 96c-5 23-4.5 23-15 23Z" fill="${colors.hair.value}"/>
`,
  'upTop': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g fill="${colors.hair.value}">
    <path opacity=".75" d="M63.5 119c0-70.8 51.5-82 82.5-82h1c31 0 82.5 11.2 82.5 82-10.5 0-10 0-15-23-10.5 0-10.5 0-16-18.5-11.833-1.333-38.7-4-51.5-4h-1c-12.8 0-39.667 2.667-51.5 4C89 96 89 96 78.5 96c-5 23-4.5 23-15 23Z"/>
    <path d="M59.664 53.221C65.687 59.347 67.862 77.044 69.2 83c17.233-3.261 53.206-8.083 77.299-8.083 24.093 0 60.066 4.822 77.299 8.083 1.339-5.956 2.867-24.365 9.537-29.779C241 47 237.5 45.5 232.332 40.884c-5.323-4.755-10.541-8.934-15.058 3.403-.502-.992-.479-3.043.726-6.787 1.506-4.68 9.5-7.5-2.232-13.633C203.062 17.225 204.51 21.193 202 28c-1.506 1.702-3.398 6.928-5.808 6.928.168-1.418 1.505-4.935 2.308-7.657 1.004-3.404 7-9.271-2.308-14.271-10.888-5.85-8.692-4-16.062 14.27-.502-1.56-1.13-4.77-1.13-8.27 0-5.768 6.245-11.375-8.407-11.724C159 7 158.547 8 158.547 16.21c0 6.178-.67 8.792-1.506 9.36-.502-.852-1.93-3.403-1.541-6.808C156.5 10 159.238 6 147.504 6 134.955 6 138 10.5 138 16.21c0 2.514-.87 7.232-2.041 9.36-.836-.568-2.309-3.234-1.506-9.36 1.004-7.658 2.549-10.266-12.046-8.934C109 8.5 114.5 12 114 18.762c-.233 3.158-.628 6.949-1.13 8.509C107.85 7.276 107 7.276 95.302 13.232 83.917 19.03 93.496 25.597 94.5 29c.803 2.723 2.14 4.51 2.308 5.928-2.41 0-5.302-4.226-6.808-5.928-2.51-6.807-2.536-10.265-12.768-5.133C67 29 71.994 32.32 73.5 37c1.205 3.744 2.728 6.295 2.226 7.287-4.517-12.337-9.035-7.232-15.058-3.403s-8.533 4.68-1.004 12.337Z"/>
  </g>
`,
  'bob': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M41.157 112.824C49.5 100.052 63 62.178 76.5 44.552c7.309-9.543 19.287-26 71.5-26 51.246 0 61.882 15.671 69.5 26 13 17.626 28.5 55.5 37.343 68.272 9.913 14.317 32.875 43.626-41.577 78.728 5.318-23.735 12.087-76.822-3.384-99.287-9.508-1.504-29.297-4.513-32.391-4.513-1.773-7.02-5.318-21.964-5.318-25.574-1.451 8.023-4.641 24.37-5.802 25.574-1.45 1.504-15.47 1.003-18.371 1.003-2.901 0-16.921.501-18.371-1.003-1.161-1.204-4.351-17.55-5.802-25.574 0 3.61-3.545 18.554-5.318 25.574-3.094 0-22.883 3.009-32.391 4.513-15.47 22.465-8.702 75.552-3.384 99.287-74.452-35.102-51.1-64.149-41.577-78.728Z" fill="${colors.hair.value}"/>
`,
  'straightUp': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="m81.099 254.432.072.194C68.447 254.251 40.9 246.6 32.5 219 22 184.5 38.364 63.233 78.5 39c26.5-16 40.5-16 68-16s41.5 0 68 16c40.136 24.233 56.671 145.5 46.171 180-8.4 27.6-35.947 35.251-48.671 35.626.057-.154.115-.309.171-.464l-.171.338c-9.5-6.5-33.8-20-65-20-31.092 0-56.325 13.407-65.901 19.932ZM96 61.5c0 6.833.8 21.1 4 23.5 3.2 2.4 32 7 47 7s42.971-4.6 46.171-7c3.2-2.4 4-16.667 4-23.5 8.271 24.025 19.508 67.269 22.784 110.515-11.074 12.718-27.883 21.99-37.761 25.985-4.833 2-18.7 6-35.5 6s-30.666-4-35.5-6c-9.937-4.019-26.89-13.379-37.96-26.216C76.531 128.615 87.743 85.482 96 61.5Z" fill="${colors.hair.value}"/>
`,
  'diva': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M62.249 56.5c25.2-25.2 66.833-31.5 84.5-31.5h1c17.667 0 59.3 6.3 84.5 31.5 28.696 28.696 17.972 39.135 13.189 43.79-.467.454-.878.854-1.189 1.21-2.521 2.881 2.74 5.762 8.682 9.017 2.309 1.264 4.72 2.584 6.818 3.983 7.5 5 15 18 3.5 26.5s-9.5 12.5-6.5 14.5c.781.521 2.341.872 4.362 1.327 5.746 1.293 15.22 3.426 21.138 12.673 8 12.5-5.5 42.5-38 49.5-27.948 6.02-45.543 5.384-53.739 5.087-1.335-.048-2.421-.087-3.261-.087h-80c-.84 0-1.926.039-3.261.087-8.196.297-25.791.933-53.74-5.087-32.5-7-46-37-38-49.5 5.919-9.247 15.393-11.38 21.139-12.673 2.021-.455 3.581-.806 4.362-1.327 3-2 5-6-6.5-14.5s-4-21.5 3.5-26.5c2.098-1.399 4.51-2.719 6.817-3.983 5.943-3.255 11.204-6.136 8.683-9.017-.312-.356-.722-.756-1.19-1.21-4.782-4.655-15.506-15.094 13.19-43.79Zm152.377 121c-4.289-2.412-5.887-8.53-6.126-12.24 5 3.5 7 3.5 12.5-3.5s11-18 0-25-10.5-16.5-8-21.5c.54-1.08 1.126-2.019 1.678-2.904 2.007-3.216 3.566-5.715.822-11.596-1.37-2.937-4.887-4.417-8.51-5.942-5.628-2.368-11.511-4.844-9.99-13.058 2-10.8-8.833-19.834-14.5-23-22.4-14-33-5.834-35.5 0V59c-2.5-5.833-13.1-14-35.5 0C105.833 62.167 95 71.2 97 82c1.521 8.214-4.362 10.69-9.99 13.059-3.623 1.524-7.14 3.004-8.51 5.941-2.745 5.881-1.185 8.38.822 11.596.552.885 1.138 1.825 1.678 2.904 2.5 5 3 14.5-8 21.5s-5.5 18 0 25 7.5 7 12.5 3.5c-.243 3.774-1.892 10.037-6.348 12.361 10.57 9.71 23.749 16.784 32.042 20.139 4.834 2 18.7 6 35.5 6s30.667-4 35.5-6c8.396-3.396 21.799-10.604 32.432-20.5Z" fill="${colors.hair.value}"/>
`,
  'princess': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M41.993 125.975c-4.005 6.837-7.192 12.278-8.493 15.025-4.5 9.5-14 32-7 50.5 3.63 9.596 9.548 13.945 14.404 17.514C45.409 212.326 49 214.965 49 220.5c0 4.748-3.666 10.094-7.547 15.754-5.52 8.048-11.476 16.733-7.953 25.246 4.8 11.6 22 19.167 30 21.5-1-2.333-2.4-8.9 0-16.5C67 276.333 78 296.2 94 297c-2.173-8.09-5.449-23.247-5.72-34.484 2.904 2.251 6.088 4.014 9.22 4.484-1.167-3-2.8-10.3 0-15.5 9.667 3.667 32.5 11.1 46.5 11.5l4-11.5 4 11.5c14-.4 36.833-7.833 46.5-11.5 2.8 5.2 1.167 12.5 0 15.5 3.132-.47 6.316-2.233 9.22-4.484-.271 11.237-3.547 26.394-5.72 34.484 16-.8 27-20.667 30.5-30.5 2.4 7.6 1 14.167 0 16.5 8-2.333 25.2-9.9 30-21.5 3.523-8.513-2.434-17.198-7.953-25.246-1.299-1.895-2.575-3.755-3.697-5.569L247 220.5c0-5.535 3.591-8.174 8.096-11.486.626-.46 1.27-.933 1.924-1.429 4.42-3.349 9.317-7.727 12.48-16.085 7-18.5-2.5-41-7-50.5s-17-38-30.5-71.5C220.09 39.946 210 22 145 22c-.872 0-1.984-.04-3.298-.09-15.257-.56-57.852-2.127-71.202 47.59-3.871 14.417-18.66 39.666-28.507 56.475Zm154.572 64.814c.64-4.684 2.193-9.341 5.435-14.289 3.111-4.749 6.598-8.533 9.811-12.019 6.596-7.157 12.034-13.058 10.689-23.481-13.2-14.8-27.5-55.5-33-74-3.6 5.2-1.5 18.5 0 24.5-10 0-24.5-12.333-30.5-18.5.8 5.6 6 14.667 8.5 18.5-34 1.2-44.5-22.833-45.5-35C109.5 85 102 101 83.5 99c0 5.757-2.192 12.748-4.567 20.325-2.164 6.9-4.48 14.288-5.433 21.675-1.333 10.328 4.216 16.216 10.878 23.285 3.337 3.54 6.952 7.377 10.122 12.215 3.657 5.581 5.091 10.792 5.472 16.089 4.175 2.306 8.055 4.13 11.222 5.411 4.834 2 18.7 6 35.5 6s30.667-4 35.5-6c3.951-1.598 9.012-4.041 14.371-7.211Z" fill="${colors.hair.value}"/>
`,
  'eggshell': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M63.5 119c0-70.8 51.5-82 82.5-82s83.5 11.2 83.5 82l-3.5 3.5c-.333-3.667-3.8-19.9-9-29.5-5.2-9.6-8.5-11.667-9.5-11.5l-9 6L187 75l-14.5 8.5-14-11-12 15-12-15-14 11L106 75 94.5 87.5l-9-6c-1-.167-4.3 1.9-9.5 11.5s-9.167 25.333-9.5 29l-3-3Z" fill="${colors.hair.value}"/>
`,
  'leafy': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M63.5 119c0-70.8 51.5-82 82.5-82s83.5 11.2 83.5 82c-7.684 0-14.838-13.667-18.171-22.631.733 3.627-.157 8.345-.829 10.631-22 0-37.167-25.667-42-38.5C165.167 78.333 153.4 98 133 98c-.833-4.5-2-14.5 0-18.5-11 9.167-37.2 27.5-54 27.5-1.167 4.333-5.9 12-15.5 12Z" fill="${colors.hair.value}"/>
`,
  'kindergarten': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M187.66 43.9c-2.432-9.039-12.295-19.4-39.66-19.4-45.5 0-70.5 23-79.5 33.5-2.656 3.099-6.444 8.722-10.747 15.111C47.473 88.373 34.253 108 26.5 108c-6 0-9.5-.5-15-3 2.167 11.5 10.7 35.5 27.5 39.5.593.141 1.173.275 1.739.401A16.604 16.604 0 0 1 40 140c0-10.493 9.85-19 22-19 .61 0 1.215.021 1.812.064l.012-.067c.058.002.117.003.176.003 16.4 0 24.833-26.333 27-39.5.833 4 11.6 14.8 46 14 21.969-.51 35.726-12.944 43.539-25.293C184.284 79.036 196.465 85.5 209.5 85.5c.833 11.833 6 35.5 20 35.5h.043l.007.041c.479-.027.963-.041 1.45-.041 12.15 0 22 8.507 22 19 0 1.544-.213 3.045-.616 4.482 16.751-4.053 25.262-27.999 27.426-39.482-5.5 2.5-9 3-15 3-7.236 0-16.418-16.01-24.417-29.955-4.162-7.255-8.003-13.952-11.083-17.545-4.589-6.313-25.275-26.767-41.65-16.6Z" fill="${colors.hair.value}"/>
`,
  'chipper': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M78.5 103c51.2-4 96.667-28 113-39.5 3.667 12 15.86 35.367 26 41 13.5 7.5 12 10 12 14.5 7.833-1.333 21.6-11.6 14-42-7.6-30.4-32.833-29.667-44.5-25.5.5-3.5-5-33.5-50.5-33.5-70 0-100 49-100 73 0 19.2 10 26.667 15 28 3.2-10.8 11.333-15.167 15-16Z" fill="${colors.hair.value}"/>
`,
  'shaggy': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g fill="${colors.hair.value}">
    <path d="M226.655 70.422A3.843 3.843 0 0 0 226 70c.178.127.399.27.655.422Z"/>
    <path d="M124 90c4.4-2.4 9.5-12.333 11.5-17 2.5 5.667 8.5 17 12.5 17s9.5-12.6 9.5-17c2 4.667 7.1 14.6 11.5 17 3-2.5 9.4-8.2 11-11 1.5 4.667 5 14.3 7 15.5 2.833-1.333 9-4.7 11-7.5 1.5 4.333 5.5 13.7 9.5 16.5 2-.833 6.5-3 8.5-5 0 5 .6 15.6 3 18 1.833-.667 5.8-2.3 7-3.5.833 1.667 2.7 5.2 3.5 6 1 1 7.5-6.5 2-24.5 1.667 1.667 5.8 5.2 9 6-2-3.667-6.1-11.5-6.5-13.5-.473-2.362-3.624-13.654-7.345-16.578A9.293 9.293 0 0 1 226 70c.22.11.439.252.655.422 1.43.843 3.971 1.917 6.345 1.578-2.5-2.833-7.7-9.1-8.5-11.5-1-3-10.5-18-17-18 1.5-.167 4.9-1.1 6.5-3.5-6.5-.167-20.4-1.2-24-4-4.5-3.5-24.5-7.5-32.5-7-.833 0-2.9-.5-4.5-2.5 0 1.2-1.667 2.167-2.5 2.5 0-2.4-2.667-5-4-6-2 1.2-3.5 4.167-4 5.5-1.2-.4-2.167-1.5-2.5-2-1.6 2-3.667 2.5-4.5 2.5-8-.5-28 3.5-32.5 7-3.6 2.8-17.5 3.833-24 4 1.6 2.4 5 3.333 6.5 3.5-6.5 0-16 15-17 18-.8 2.4-6 8.667-8.5 11.5 2.374.34 4.915-.735 6.345-1.578.216-.17.435-.312.655-.422a9.06 9.06 0 0 1-.655.422C62.624 73.346 59.472 84.638 59 87c-.4 2-4.5 9.833-6.5 13.5 3.2-.8 7.333-4.333 9-6-5.5 18 1 25.5 2 24.5.8-.8 2.667-4.333 3.5-6 1.2 1.2 5.167 2.833 7 3.5 2.4-2.4 3-13 3-18 2 2 6.5 4.167 8.5 5 4-2.8 8-12.167 9.5-16.5 2 2.8 8.167 6.167 11 7.5 2-1.2 5.5-10.833 7-15.5 1.6 2.8 8 8.5 11 11Z"/>
  </g>
`,
  'twinBraids': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g fill="${colors.hair.value}">
    <path d="M146.5 92.5c-55 0-54-1-54-30.5-1.167 11.833 0 43-16.5 38l-12.5 19.5c0-35 11-89.5 83-89.5S230 84.5 230 119.5L217.5 100c-16.5 4-15.333-26.167-16.5-38 0 29.5.5 30.5-54.5 30.5ZM55.604 156.185c2.024.53 4.171.815 6.396.815.76 0 1.51-.033 2.25-.098 2.279 6.505 6.507 12.485 11.645 17.791-2.551 2.981-6.172 4.809-10.013 4.888 3.248 4.141 3.926 10.2 1.254 15.508-3.059 6.079-9.524 9.218-15.484 7.967 6.11 6.691 3.537 17.752 1.348 23.444-4.333.333-13.091-.72-17-3-6-3.5-7.5-6-11-12.5 3.868-4.728 12.54-12.634 19.98-11.71-3.847-4.132-4.817-10.663-1.962-16.338 2.569-5.104 7.539-8.135 12.595-8.235-2.62-3.267-3.794-7.8-2.81-12.411a15.313 15.313 0 0 1 2.8-6.121ZM218.268 173.881c4.78-5.093 8.694-10.785 10.86-16.949.617.045 1.242.068 1.872.068a25.04 25.04 0 0 0 7.827-1.238 15.25 15.25 0 0 1 3.424 6.882c.983 4.611-.191 9.144-2.811 12.411 5.056.1 10.027 3.131 12.595 8.236 2.856 5.674 1.885 12.205-1.962 16.337 7.44-.924 16.112 6.982 19.98 11.71-3.5 6.5-5 9-11 12.5-3.909 2.28-12.666 3.334-17 3-2.189-5.692-4.762-16.753 1.349-23.443-5.961 1.25-12.426-1.889-15.485-7.967-2.671-5.309-1.994-11.367 1.254-15.509-4.312-.088-8.348-2.382-10.903-6.038Z"/>
  </g>
`,
  'chill': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M167 11.5c-52.8 0-69.667 26.667-71.5 40-5.5-2.5-18.6-6-27 0C58 59 43.5 74 37 76c0 6.5 2.5 14 6.5 15.5s-21 8.5-22 16c1.167 4.167 4.2 12.7 7 13.5 3.5 1 5.5-2 8.5-4-1.333 1.833-4.2 6.3-5 9.5-1 4 6.5 11.5 11.5 10.5 2-3.2 7.5-8.333 10-10.5 3.167 0 10.6-1.1 15-5.5-5.6-12.8 6.333-37 13-47.5-1.667 3.333-4.9 10.7-4.5 13.5.4 2.8 8.5 4.167 12.5 4.5 3.6 0 6.5-20.333 7.5-30.5 15.667 11.5 48 33.7 52 30.5 5-4 8-9 8.5-13.5s-12-5.5-15.5-9.5c10.833 2.5 33.9 6 39.5 0 19.5 9.5 35.203 35.258 37.5 41 6 15 11.5 24.667 16.5 34 3.5 5 18.5-8.5 21.5-10.5.4-2.4-9.167-15.667-14-22 3.5 1.5 3.5 3.5 6 4s11.5-5.5 14.5-7.5c1.2-8.8-10.833-23.333-17-29.5 2.5 0 5.5-6 7.5-13.5-7-8.5-32-18-29.5-18s8-8 8.5-12.5-30-22.5-66-22.5Z" fill="${colors.hair.value}"/>
`,
  'fairy': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g fill="${colors.hair.value}">
    <path d="M93.774 51.637c-2.315-9.265-12.13-26.005-35.274-26.005-30 0-38 33-38 57.5 0 13.298 7.07 19.231 14.416 25.394 5.007 4.202 10.141 8.51 13.25 15.331 3.78-2.642 8.593-4.225 13.834-4.225.61 0 1.215.022 1.812.064l.011-.064H63.5c0-35.856 13.209-56.425 30.274-67.995ZM74.726 174.089c-4.608-4.993-8.373-10.55-10.476-16.555-.74.065-1.49.098-2.25.098-9.798 0-18.1-5.531-20.947-13.176-7.06 5.89-15.571 4.673-20.553 3.676 6.579 15.404 26.35 41.188 54.226 25.957ZM197.53 50.524c2.794-9.428 12.725-24.892 34.97-24.892 30 0 38 33 38 57.5 0 13.298-7.071 19.231-14.416 25.394-4.763 3.997-9.641 8.091-12.782 14.352-3.512-2.049-7.745-3.246-12.302-3.246-.487 0-.97.014-1.45.041l-.05-.299c-.066-36.873-14.133-57.53-31.97-68.85ZM217.878 174.925c27.031 13.404 46.17-11.686 52.622-26.793-4.628.926-12.303 2.042-19.029-2.526-3.219 7.043-11.171 12.026-20.471 12.026-.63 0-1.255-.023-1.872-.068-2.224 6.331-6.293 12.164-11.25 17.361Z"/>
    <path d="M62.5 119.632c37.2-.4 74.333-29.5 87.5-44-.5 6.667-3.6 20.8-12 24 10.167 1.167 32.3-.3 39.5-15.5 6.5 9.5 26 29.9 52 35.5 0-44-21-87.5-83-87.5-58 0-84 34.5-84 87.5Z"/>
  </g>
`,
  'noMessBun': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M170.605 37.945C172.768 34.852 174 31.29 174 27.5 174 15.626 161.912 6 147 6s-27 9.626-27 21.5c0 3.648 1.141 7.085 3.155 10.095C75.715 47.013 63.5 86.488 63.5 121l4.5-.5c1.087-1.087 2.804-14.848 3.737-23.498-.12 5.008 1.5 12.262 2.763 10.998 1.2-1.2 11.167-4.5 16-6 1.527-2.29 2.763-14.787 3.04-19.23.504 3.77 3.71 12.708 5.46 17.23 3.2-1.2 18.333-2.833 25.5-3.5.8-1.2 3.333-17.167 4.5-25 1.2 2.4 3.5 17.667 4.5 25 .553 0 1.867-.068 3.526-.154 2.842-.147 6.696-.346 9.474-.346 2.628 0 6.22.178 9.112.322 1.95.097 3.583.178 4.388.178 1-7.333 3.3-22.6 4.5-25 1.167 7.833 3.7 23.8 4.5 25 7.167.667 22.3 2.3 25.5 3.5 1.75-4.522 4.956-13.46 5.461-17.23.276 4.443 1.512 16.94 3.039 19.23 4.833 1.5 14.8 4.8 16 6 1.264 1.264 2.882-5.99 2.763-10.998.933 8.65 2.65 22.411 3.737 23.498l4.5.5c0-34.1-13.042-73.045-59.395-83.055ZM93.5 81.5c-.05.3-.033.732.04 1.27.085-1.375.078-1.98-.04-1.27ZM71.737 97.002c.097-.895.185-1.736.263-2.502-.157.709-.24 1.566-.263 2.502Z" fill="${colors.hair.value}"/>
`,
  'someMessBun': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M171.984 35.666c1.3-2.518 2.016-5.275 2.016-8.166C174 15.626 161.912 6 147 6s-27 9.626-27 21.5c0 2.805.675 5.485 1.902 7.942C81.358 45.876 63.5 82.545 63.5 121c-1 .333-4 4.8-8 20-3.274 12.44 4.17 23.38 10.402 32.539 3.286 4.829 6.235 9.163 7.098 12.961 2 8.8-2.167 18.333-4.5 22-1.333.667-2.8 1.6 2 0 6-2 17-8 16-25.5-.54-9.456-4-15.408-7.304-21.091-2.81-4.834-5.507-9.474-6.196-15.909-1.2-11.2 6.5-31.667 10.5-40.5 22 0 34.5-28.667 38-43 0 26 59 39.5 88.5 43 4 8.833 11.7 29.3 10.5 40.5-.689 6.435-3.386 11.075-6.196 15.909C211 167.592 207.54 173.544 207 183c-1 17.5 10 23.5 16 25.5 4.8 1.6 3.333.667 2 0-2.333-3.667-6.5-13.2-4.5-22 .863-3.798 3.812-8.132 7.098-12.961C233.83 164.38 241.274 153.44 238 141c-4-15.2-7-19.667-8-20 0-38.185-17.959-74.608-58.016-85.334Z" fill="${colors.hair.value}"/>
`,
  'undercut': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g fill="${colors.hair.value}">
    <path opacity=".75" d="M63.5 121c0-70.8 51.5-82 82.5-82h1c31 0 82.5 11.2 82.5 82-10.5 0-10 0-15-23-10.5 0-10.5 0-16-18.5-11.833-1.333-38.7-4-51.5-4h-1c-12.8 0-39.667 2.667-51.5 4C89 98 89 98 78.5 98c-5 23-4.5 23-15 23Z"/>
    <path d="M71.5 79c-5.167-3-12.4-13.2 0-30 15.126-20.493 60.727-25.75 75-25.991a58.924 58.924 0 0 0-1-.009h2c-.314 0-.647.003-1 .009 14.273.241 59.874 5.498 75 25.991 12.4 16.8 5.167 27 0 30-3 6.667-10.6 19.9-17 19.5-4.5-2.667-14.2-9.4-17-15C184.667 86.833 177.4 94 171 96c-3.667-2.667-11.4-8.9-13-12.5-2.167 4.333-7.3 13-10.5 13s-9.667-8.667-12.5-13c-1.6 3.6-9.333 9.833-13 12.5-6.4-2-13.667-9.167-16.5-12.5-2.8 5.6-12.5 12.333-17 15-6.4.4-14-12.833-17-19.5Z"/>
  </g>
`,
  'brock': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g fill="${colors.hair.value}">
    <path opacity=".75" d="M63.5 119.552c0-70.8 51.5-82 82.5-82h1c31 0 82.5 11.2 82.5 82-10.5 0-10 0-15-23-10.5 0-10.5 0-16-18.5-11.833-1.334-38.7-4-51.5-4h-1c-12.8 0-39.667 2.666-51.5 4-5.5 18.5-5.5 18.5-16 18.5-5 23-4.5 23-15 23Z"/>
    <path d="M49 63.045c1.995 20.135 9.31 36.061 15.96 41.507h11.47l1.995-7.507c5.486 0 10.473 3.091 15.959-16.337 15.294-1.178 46.78-3.533 50.37-3.533 16.791.589 50.97 2.12 53.364 3.533 4.488 12.363 5.486 17.22 15.959 16.337l1.995 7.507h11.969c6.65-5.446 13.964-21.372 15.959-41.507-4.322-1.766-14.862-5.298-22.442-5.298-.832-10.892-4.389-34.177-11.97-40.182-7.148.441-23.041 2.473-29.424 7.065 0-2.208-31.42-22.078-35.41-22.078-3.191 0-22.608 14.718-31.918 22.078-6.383-4.592-22.276-6.624-29.424-7.065-7.58 6.005-11.138 29.29-11.97 40.182-7.58 0-18.12 3.532-22.442 5.298Z"/>
  </g>
`,
  'dino': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g fill="${colors.hair.value}">
    <path opacity=".75" d="M63.5 120c0-70.8 51.5-82 82.5-82h1c31 0 82.5 11.2 82.5 82-10.5 0-10 0-15-23-10.5 0-10.5 0-16-18.5-11.833-1.333-38.7-4-51.5-4h-1c-12.8 0-39.667 2.667-51.5 4C89 97 89 97 78.5 97c-5 23-4.5 23-15 23Z"/>
    <path d="M92.788 16.178C78.75 29.836 70.868 61.99 70.35 81.523c17.48-1.974 37.499-6.417 77-6.417 36.755 0 53.403 4.161 75.396 6.135-.519-19.532-8.216-50.457-22.253-64.115-3.478.474-9.626 2.94-13.799 9.01-.869-4.936-4.969-14.132-14.833-23.237-5.059.79-18.978 4.742-25.807 14.227C139.225 7.641 126.308 3.69 121.25 2.9c-9.864 9.105-13.366 16.89-13.366 23.238-4.174-6.07-11.619-9.485-15.096-9.96Z"/>
  </g>
`,
}
