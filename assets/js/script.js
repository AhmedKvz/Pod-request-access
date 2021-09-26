let btn = document.getElementById('btn');
let email = document.getElementById('email');

try {
    email.onchange = () => {
        let errorMsg = document.getElementsByClassName('oops')[0];
        if(errorMsg) {
            errorMsg.remove();
        }

        if (email.value != '') {
            let lastAtPos = email.value.lastIndexOf('@');
            let lastDotPos = email.value.lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.value.indexOf('@') === -1 && lastDotPos > 2 && (email.value.length - lastDotPos) > 2)) {
                const errorMsg = document.createElement('p');
                errorMsg.className = 'oops';
                const text = document.createTextNode('Oops! Please check your email');
                errorMsg.appendChild(text);
                const form = document.getElementById('form');
                form.appendChild(errorMsg);
            }
        }else {
            const errorMsg = document.createElement('p');
            errorMsg.className = 'oops';
            const text = document.createTextNode('Oops! Please enter an email adress');
            errorMsg.appendChild(text);
            const form = document.getElementById('form');
            form.appendChild(errorMsg);
    }
 }

} catch (error) {
    console.log("Error at file: " + error.stack);
    console.log("Error line number: " + error.lineNumber);
    console.log("Error: " + error.message);
}
  

