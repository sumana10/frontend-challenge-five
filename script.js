const form = document.getElementById('form');


form.addEventListener('submit', e =>{

  e.preventDefault();

  const email = form['email'];

  const emailValue = email.value;

  
   if(!validateEmail(emailValue)){

     email.classList.add('error')
     form.classList.add('error')

  }else{

    email.classList.remove('error')
    form.classList.remove('error')

  }
})

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};