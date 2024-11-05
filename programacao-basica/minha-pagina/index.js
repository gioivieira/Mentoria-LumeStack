let button = document.getElementById('button')
let text = document.getElementById('text-green')

button.addEventListener('click', () => {
    text.textContent = 'Texto mudado pelo botão'
})
