const puzzleBoard = document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-button')
const squares = 81
const submission = []

for(let i = 0; i < squares; i++) {
    const inputElement = document.createElement('input')
    inputElement.setAttribute('type', 'number')
    inputElement.setAttribute('min', 1)
    inputElement.setAttribute('max', 9)
    puzzleBoard.appendChild(inputElement)
}

const joinValues = () => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        if(input.value){
            submission.push(input.value)
        } else {
            submission.push('.')
        }
    })
    console.log(submission)
}

const value = () => {
    joinValues()
    const data = submission.join('')
    console.log('data', data)
    const options = {
        method:'POST',
        url: 'https://solve.sudoku.p.rapidapi.com/',
        headers: {
            'content-type' : 'application/json',
            'x-rapidapi-host' : 'solve-sudoku.p.rapidapi.com', 'x-rapidapi-key' : '6835772f3emsh8db59b19eep132ed4jsndd22b502a839'
        },
        data: {
            puzzle: data
        }
    };

    axios.request(options).then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.error(error)
    })
}






solveButton.addEventListener("click", solve)