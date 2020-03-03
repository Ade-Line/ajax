// XHR
// // Requête avec txt
// document.getElementById('button').addEventListener('click', message)

// function message() {
//     // Object XHR
//     const xhr = new XMLHttpRequest();

//     // OPEN
//     xhr.open('GET', 'data.txt', true)

//     // console.log('READYSTATE', xhr.readyState);
    

//     xhr.onload = function() {
//         if(this.status === 200) {
//             document.getElementById('reponse').innerHTML = `
//             <P>${this.responseText}</p>`
//             // console.log(this.responseText);
            
//         }
//     }

//     xhr.send()

// }

// Valeur readyState
// 0 : requête n'est pas initialisé
// 1 : la connection avec le serveur est établi
// 2 : réquête est reçue
// 3 : requéte en cours de procédure
// 4 : requête terminée et la réponse est prête

 // Requête avec json

 document.getElementById('button').addEventListener('click', message)

function message() {
    // Object XHR
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'user.json', true) 

    xhr.onload = function() {

        if(this.status === 200) {

            const user = JSON.parse(this.responseText);

            document.getElementById('reponse').innerHTML = `
                <ul>
                    <li>id : ${user.id}</li>
                    <li>Nom : ${user.name}</li>
                    <li>Marrié : ${user.married}</li>
                </ul>
            `
        }
    }

    xhr.send()

}