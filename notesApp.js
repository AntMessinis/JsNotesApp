const daysGR = ['Κυριακή', 
    'Δευτέρα', 
    'Τρίτη', 
    'Τετάρτη', 
    'Πέμπτη', 
    'Παρασκευή', 
    'Σάββατο'
]
const monthsGR = [
    'Ιανουαρίου', 
    'Φεβρουαρίου',
    'Μάρτιος',
    'Απρίλιος',
    'Μάϊος',
    'Ιούνιος',
    'Ιούλιος',
    'Αύγουστος',
    'Σεπτεμβριος',
    'Οκτώμβριος',
    'Νοεμβριος',
    'Δεκέμβριος'
]

let id = 0

/**
 * Controller
 */
document.onreadystatechange = function () {

    if (document.readyState === 'interactive'){
        setInterval(printGrDate, 1)


        document.querySelector('.btn').addEventListener('click', function(){
            insertNote(document.querySelector('#noteText').value.trim())
        })


       document.querySelector('#noteText').addEventListener('keyup', function(e){
            if (e.key === 'Enter'){
                insertNote(this.value.trim())
            }
       })
        
    }
}

function printGrDate(){
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const formattedDay = daysGR[day]
    const formattedMonth = monthsGR[month]

    const formattedDate = `${formattedDay}, ${date} ${formattedMonth} ${year}`
    const formattedTime = `${((hours < 10) ? '0' :'')} ${hours}:${((minutes < 10) ? '0' :'')} ${minutes}:${((seconds < 10) ? '0' :'')}${seconds}`

    document.querySelector('.header').innerHTML = formattedDate + '<br>' + formattedTime
}

function insertNote(note){
    if (!note) {
        return
    }

    id++
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', 'item' + id)
    checkbox.addEventListener('click', function(){
        strikeThrough(this.nextElementSibling)
    })

    const label = document.createElement('label')
    label.setAttribute('for', 'item' + id)
    label.innerHTML = note

    const div = document.createElement('div')
    div.setAttribute('class', 'chklbl')
    div.append(checkbox, label)

    const btn = document.createElement('button')
    btn.innerHTML = 'X'
    btn.addEventListener('click', function(){
        deleteNote(this.parentNode)
    })

    const li = document.createElement('li')
    li.append(div, btn)

    document.querySelector('.main>ul').append(li)

   
}

function strikeThrough(label){
    label.classList.toggle('line-through')
}

function deleteNote(note) {
    note.remove()
}