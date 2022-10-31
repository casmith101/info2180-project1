/* Add your JavaScript to this file */
onload=function(){
    let message = document.querySelector('.message')
    let email = document.querySelector('#email')

    this.addEventListener('submit', (e) => {
        e.preventDefault()
        if(!email.value==''){
            message.innerHTML= `Thank you! Your email address ${email.value} has been added to our mailing list!`
            email.value = ''
        }
        else{
            message.innerHTML = 'Please enter a valid email address.'
            email.value = ''
        }
    })
}



/*const btn = document.querySelector("button");
btn.addEventListener("click", function(event){
    event.preventDefault();
    if (document.getElementById('email').value.length == 0)
    { 
        alert(message.textContent = 'Please enter a valid email address.');  	 
    }  	
        alert(message.textContent = `Thank you! Your email address ${document.getElementById('email')} has been added to mailing list!`); 
    }) */
