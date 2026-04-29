function ConsultarMédiaSemestral() {

    const atividaden1 = Number(document.getElementById('atividaden1').value.trim());
    const provan1 = Number(document.getElementById('provan1').value);
    const provan2 = Number(document.getElementById('provan2').value);
    const atividaden3 = Number(document.getElementById('atividaden3').value);
    const provan3 = Number(document.getElementById('provan3').value);
    let mostrar = '';
    const inputIds = ['atividaden1', 'provan1', 'provan2', 'atividaden3', 'provan3'];
    const containerFoto = document.getElementById('container-foto');
    const notan1 = (atividaden1 + provan1) / 2;
    const notan3 = (provan3 + atividaden3) / 2;
    const notan2 = (provan2);
    const media = (notan1 + notan2 + notan3) / 3;
     for (let id of inputIds) {
        if (document.getElementById(id).value === "") {
            alert("Por favor, verifique se não ha campos vazios.");
            return;
        }
    }

    if (media >= 7) {
        mostrar = "Parabéns, você foi aprovado com a média: " + media.toFixed(2)
       document.getElementById('mostrar').style.color = "green";
       containerFoto.innerHTML = '<img src="https://png.pngtree.com/png-vector/20240621/ourmid/pngtree-3d-yellow-colour-wow-surprise-reaction-emoji-with-hand-png-image_12814533.png" alt="Aprovado" width="100">';   
    }
        else if (media >=5 && media <7){
            mostrar = "Você precisa fazer recuperação, pois a sua média foi: " + media.toFixed(2)
            document.getElementById('mostrar').style.color = "blue";
            containerFoto.innerHTML = '<img src="https://png.pngtree.com/png-vector/20240723/ourmid/pngtree-pensive-face-emoji-realistic-png-image_13220755.png" alt="Recuperação" width="100">';
        }
            else{
                mostrar = "Você não estudou o suficiente e atingiu a média " + media.toFixed(2) + " e por isso foi reprovado."
                document.getElementById('mostrar').style.color = "red";
                containerFoto.innerHTML = '<img src="https://i.pinimg.com/564x/59/54/f7/5954f7a334d7f87815e20413ad83bfe3.jpg" alt="Reprovado" width="200">'; 
            }
    document.getElementById('mostrar').textContent = mostrar
        }          
function limparFormulario() {
    document.getElementById('N1').reset();
    document.getElementById('container-foto').innerHTML = "";
    document.getElementById('mostrar').textContent = "";
}
function validarNota(campo){
    const valor = Number(campo.value);
        if (valor >10 || valor <0){
            alert("Por favor, digite um valor entre 0 e 10.");
            campo.value = "";
            campo.focus();
        }
    }
    
