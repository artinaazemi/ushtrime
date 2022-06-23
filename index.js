function Metoda() {
    const Personi={
        emri: document.getElementById('emri').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    }
    var vargu=[Personi.emri, Personi.email, Personi.password]
    for(leti=0; i<vargu.length; i++){
        console.log(vargu[i]);
    }
}