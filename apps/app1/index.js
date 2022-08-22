import { add } from '../../packages/utils/index.js'

function createElement() {
    const div = document.createElement('div')
    div.innerHTML = `add计算结果${add(1,2)}`
    document.body.appendChild(div)
}

createElement()
