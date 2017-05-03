var checkString = /[^a-zA-Z]/;  // stringa di controllo per i campi che possono contenere solo lettere

function verificaNome() {
    if (document.registrazione.nome.value == "") {
        alert("Il campo Nome e' obbligatorio");
        document.registrazione.nome.focus();
        return false;
    } else if (checkString.test(document.registrazione.nome.value)) {   // true significa che contiene caratteri non validi
        alert("Inserisci un nome valido");
        document.registrazione.nome.focus();
        return false;
    }
    return true;
}

function verificaCognome() {
    if (document.registrazione.cognome.value == "") {
        alert("Il campo Cognome e' obbligatorio");
        document.registrazione.cognome.focus();
        return false;
    } else if (checkString.test(document.registrazione.cognome.value)) {   // true significa che contiene caratteri non validi
        alert("Inserisci un cognome valido");
        document.registrazione.cognome.focus();
        return false;
    }
    return true;
}

function verificaData() {
    if (document.registrazione.data_nascita.value == "") {
        alert("Il campo Data di nascita e' obbligatorio");
        document.registrazione.data_nascita.focus();
        return false;
    }
    return true;
}

function verificaProvincia() {
    if (document.registrazione.provincia.value == "") {
        alert("Il campo Provincia e' obbligatorio");
        document.registrazione.provincia.focus();
        return false;
    }
    return true;
}

function verificaComune() {
    if (document.registrazione.comune.value == "") {
        alert("Il campo Comune e' obbligatorio");
        document.registrazione.comune.focus();
        return false;
    } else if (checkString.test(document.registrazione.comune.value)) {   // true significa che contiene caratteri non validi
        alert("Inserisci un comune valido");
        document.registrazione.comune.focus();
        return false;
    }
    return true;
}

function verificaTelefono() {
    if (isNan(document.registrazione.telefono.value)) {
        alert("Inserisci un numero di telefono valido");
        document.registrazione.telefono.focus();
        return false;
    }
    return true;
}

function verificaEmail() {
    if (document.registrazione.email.value == "") {
        alert("Il campo e-mail e' obbligatorio");
        document.registrazione.email.focus();
        return false;
    } else if (document.registrazione.email.value.indexOf("@")==-1 || document.registrazione.email.value.indexOf(".")==-1) {
        alert("Inserisci un indirizzo e-mail valido");
        document.registrazione.email.focus();
        return false;
    }
    return true;
}

function verificaUsername() {
    if (document.registrazione.username.value == "") {
        alert("Devi inserire un nome utente");
        document.registrazione.username.focus();
        return false;
    }
    return true;
}

function verificaPassword() {
    if (document.registrazione.pass.value == "") {
        alert("Devi inserire una password");
        document.registrazione.pass.focus();
        return false;
    }else if(document.registrazione.passC.value == ""){
        alert("Devi ripetere la password");
        document.registrazione.passC.focus();
        return false;
    }else if(document.registrazione.pass.value != document.registrazione.passC.value){
        alert("Le due password non coincidono");
        document.registrazione.passC.focus();
        return false;
    }
    return true;
}

function verificaForm() {
    if (document.registrazione.nome.value == "") {
        alert("Il campo Nome e' obbligatorio");
        document.registrazione.nome.focus();
        return false;
    } else if (checkString.test(document.registrazione.nome.value)) {   // true significa che contiene caratteri non validi
        alert("Inserisci un nome valido");
        document.registrazione.nome.focus();
        return false;
    }
    
    else if (document.registrazione.cognome.value == "") {
        alert("Il campo Cognome e' obbligatorio");
        document.registrazione.cognome.focus();
        return false;
    } else if (checkString.test(document.registrazione.cognome.value)) {   // true significa che contiene caratteri non validi
        alert("Inserisci un cognome valido");
        document.registrazione.cognome.focus();
        return false;
    }
    
    else if (document.registrazione.data_nascita.value == "") {
        alert("Il campo Data di nascita e' obbligatorio");
        document.registrazione.data_nascita.focus();
        return false;
    }
    
    else if (document.registrazione.provincia.value == "") {
        alert("Il campo Provincia e' obbligatorio");
        document.registrazione.provincia.focus();
        return false;
    }

    else if (document.registrazione.comune.value == "") {
        alert("Il campo Comune e' obbligatorio");
        document.registrazione.comune.focus();
        return false;
    }else if (checkString.test(document.registrazione.comune.value)) {   // true significa che contiene caratteri non validi
        alert("Inserisci un comune valido");
        document.registrazione.comune.focus();
        return false;
   
    }else if (document.registrazione.email.value == "") {
        alert("Il campo e-mail e' obbligatorio");
        document.registrazione.email.focus();
        return false;
    }else if (document.registrazione.email.value.indexOf("@")==-1 || document.registrazione.email.value.indexOf(".")==-1) {
        alert("Inserisci un indirizzo e-mail valido");
        document.registrazione.email.focus();
        return false;
    }

    else if (document.registrazione.username.value == "") {
        alert("Devi inserire un nome utente");
        document.registrazione.username.focus();
        return false;
    }

    else if (document.registrazione.pass.value == "") {
        alert("Devi inserire una password");
        document.registrazione.pass.focus();
        return false;
    }else if(document.registrazione.passC.value == ""){
        alert("Devi ripetere la password");
        document.registrazione.passC.focus();
        return false;
    }else if(document.registrazione.pass.value !== document.registrazione.passC.value){
        alert("La password confermata e' diversa da quella scelta");
        document.registrazione.passC.focus();
        return false;
    }
    
    return true;
}