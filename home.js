
let welcome = "welcome";


showMessage(welcome);


//Listening to button click
const button = document.getElementById('see-review');

button.addEventListener('click', function(){
    console.log('click');
    const review = document.getElementById('review');
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent='CLOSE REVIEW';
    }else{
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
})



