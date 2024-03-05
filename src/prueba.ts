// document.querySelector<HTMLButtonElement>('#accionate')!.addEventListener('click', () => {
//     alert('Accionate')
//     // console.log('Accionate')
// })

document.getElementById('accionate')!.addEventListener('click', () => {
    let email = document.getElementById('floatingInput') as HTMLInputElement;
    let pass = document.getElementById('floatingPassword') as HTMLInputElement;
    let resultado = document.getElementById('resultado') as HTMLElement;

    console.log(email.value);
    console.log(pass.value);

    // let res = email.value + pass.value;
    // let res = parseInt(email.value) + parseInt(pass.value);

    resultado.innerHTML = `Email: ${email.value} <br> Password: ${pass.value}`;




});
