import '../style/style.css'
import javascriptLogo from '../public/assets/images/javascript.svg'
import viteLogo from '../public/assets/images/vite.svg'
import fissionLogo from '../public/assets/images/fission.svg'
import elmLogo from '../public/assets/images/elm.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="https://elm-lang.org/" target="_blank">
      <img src="${elmLogo}" class="logo" alt="Elm logo" />
    </a>
    <a href="https://fission.codes" target="_blank">
      <img src="${fissionLogo}" class="logo" alt="Fission logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
