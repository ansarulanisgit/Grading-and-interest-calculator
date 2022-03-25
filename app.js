//Calculating grading
const showGrade = () => {
    const gradingInput = document.getElementById('grade-input');
    const gradingSubmit = document.getElementById('grade-submit');
    const gradingMessage = document.getElementById('grade-message');
    const gradingNumber = gradingInput.value;
    gradingInput.value = '';

    if(isNaN(gradingNumber) || gradingNumber.length == 0){
        gradingMessage.innerHTML = `<p class ="text-danger"> Please input number. </p>`;
        return;
    }
    else if(gradingNumber>100 || gradingNumber<0){
        gradingMessage.innerHTML = `<p class ="text-danger"> Number should not be more than 100 or less than 0. </p>`;
        return;
    }
    else if(gradingNumber<=100 && gradingNumber>=80){
        gradingMessage.innerHTML = `<p class ="text-primary fw-bold"> Congrats! Your grade is A+.</p>`;
        return;
    }
    else if(gradingNumber<80 && gradingNumber>=70){
        gradingMessage.innerHTML = `<p class ="text-success"> Well Done! Your grade is A. </p>`;
        return;
    }
    else if(gradingNumber<70 && gradingNumber>=60){
        gradingMessage.innerHTML = `<p class ="text-success"> Fantastic! Your grade is A-. </p>`;
        return;
    }
    else if(gradingNumber<60 && gradingNumber>=50){
        gradingMessage.innerHTML = `<p class ="text-success"> Inpressive! Your grade is B. </p>`;
        return;
    }
    else if(gradingNumber<50 && gradingNumber>=40){
        gradingMessage.innerHTML = `<p class ="text-success"> Not bad! Your grade is C. </p>`;
        return;
    }
    else if(gradingNumber<40 && gradingNumber>=33){
        gradingMessage.innerHTML = `<p class ="text-warning"> Good! Your grade is D. </p>`;
        return;
    }
    else if(gradingNumber<33 && gradingNumber>=0){
        gradingMessage.innerHTML = `<p class ="text-danger"> Opps! Your are failed. </p>`;
        return;
    }
    else{
        gradingMessage.innerHTML = `<p class ="text-danger"> Sorry! Unknown Error. Try again. </p>`;
    }
}


document.getElementById('grade-input').addEventListener('keypress', function(event){
    if(event.key == "Enter"){        
    const gradingSubmit = document.getElementById('grade-submit');
    gradingSubmit.click();
    }
})

//Interest Calculator
const calculateInterest = () => {
    const message =document.getElementById('interest-message');
    const capitalInput =document.getElementById('capital-input');
    const interestInput =document.getElementById('interest-input');
    const yearInput =document.getElementById('year-input');
    const capital = capitalInput.value;
    const interestRate = interestInput.value;
    const year = yearInput.value;
    
    capitalInput.value = '';
    interestInput.value = '';
    yearInput.value = '';

    if(capital.length == 0 || interestRate.length == 0 || year.length == 0){
        message.innerHTML = `<p class ="text-danger"> Please input in all above fields. </p>`;
        return;
    }
    else if(isNaN(capital) || isNaN(interestRate) || isNaN(year)){
        message.innerHTML = `<p class ="text-danger"> Please input numbers only. Try again. </p>`;
        return;
    }
    else{
        // I = PNR (I = Interest Rate, P = Principle/Capital, N = Time, R = Interest rate)
        const interest = (capital*year*interestRate)/100;
        message.innerHTML = `<p class ="text-primary"> Interest is <span class="text-danger fs-5 fw-bold">${interest}</span> taka.</p>`;
    }
}