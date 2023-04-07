document.body.addEventListener('click', action)

function action() {
    
    var colour = ['grey', 'green', 'red', 'yellow', 'purple', 'blue']

    var counter = Math.floor(Math.random()*5)

    document.body.style.backgroundColor = colour[counter]

}