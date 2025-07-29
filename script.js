const form = document.querySelector('.contact-form')

form.addEventListener('submit', (e) => {
    e.preventDefault() //prevent actual submission


    //clear old error
    document.getElementById('fName-error').textContent = ''
    document.getElementById('lName-error').textContent = ''

  
    const fNameInput = form.elements.fName
    const lNameInput = form.elements.lName
   
    const fName = form.elements.fName.value.trim()
    const lName = form.elements.lName.value.trim()
    let hasError = false

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;


    if (!fName) {
        document.getElementById('fName-error').textContent = 'This field is required'
        fNameInput.classList.add('input-error')
        hasError = true
    } else if (fName.length < 3) {
        document.getElementById('fName-error').textContent = 'Name must be atleast 3 character'
        hasError = true
    }else{
        fNameInput.classList.add('input-success')
    }

    if (!lName) {
        document.getElementById('lName-error').textContent = 'This field is required'
        lNameInput.classList.add('input-error')
        hasError = true
    } else if (lName.length < 3) {
        document.getElementById('lName-error').textContent = 'Name must be atleast 3 character'
        hasError = true
    }else{
        lNameInput.classList.add('input-success')
    }

    // email
    const emailInput = form.elements.email
    const email = form.elements.email.value.trim()
    let emailError = ''
    if (!email) {
        emailError = 'This field is required '
        emailInput.classList.add('input-error')
        hasError = true;

    } else if (!emailPattern.test(email)) {
        emailError = 'Please enter a valid email address';
        hasError = true
    }else{
        emailInput.classList.add('input-success')
    }
    document.getElementById('email-error').textContent = emailError;
  

    //radio
    const radio = form.elements.type.value.trim()
    let radioError = ''
    if (!radio) {
        radioError = 'Please select a query type'
        hasError = true
        
 
    }
    document.getElementById('query-error').textContent = radioError

    //message
    const message = form.elements.message.value.trim()
    const messageInput  = form.elements.message
  
    let messageError = ''
    if (!message) {
        messageError = 'This field is required'
        messageInput.classList.add('input-error')
        hasError = true
    }else{
        messageInput.classList.add('input-success')
    }

    document.querySelector('#message-error').textContent = messageError

    //checkbox
    const checkbox = form.elements.consents
    let checkError = ''
    if (!checkbox.checked) {
        checkError = 'To submit this Form, please consent to being contacted'
        hasError = true
    }
    document.querySelector('#check-error').textContent = checkError


    //success
    if (!hasError) {
        alert('Message Sent! Thanks for completing the form. We will be in touch soon!');
        form.reset();
    }

})