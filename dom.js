var enviar = document.getElementById("enviar");
var tabelaResultados = document.getElementById("tabelaResultados");

enviar.addEventListener("click", function() {
    var nomeAluno = nome.value;
    var notas = [
        [parseFloat(n1.value), parseFloat(n2.value), parseFloat(n3.value), parseFloat(n4.value)],
        [parseFloat(n5.value), parseFloat(n6.value), parseFloat(n7.value), parseFloat(n8.value)],
        [parseFloat(n9.value), parseFloat(n10.value), parseFloat(n11.value), parseFloat(n12.value)],
        [parseFloat(n13.value), parseFloat(n14.value), parseFloat(n15.value), parseFloat(n16.value)],
        [parseFloat(n17.value), parseFloat(n18.value), parseFloat(n19.value), parseFloat(n20.value)]
    ];
    
    var mediaGeral = 0;
    for (let i = 0; i < notas.length; i++) {
        var somaNotas = notas[i].reduce((acc, val) => acc + val, 0);
        var mediaMateria = (somaNotas / 100) * 100; 
        mediaGeral += mediaMateria;
        
        var status = "";
        if (mediaMateria >= 60) {
            status = "Aprovado";
        } else if (mediaMateria >= 40) {
            status = "Recuperação";
        } else {
            status = "Reprovado";
        }
        
        console.log(`Matéria ${i + 1}: ${status} - Média: ${mediaMateria.toFixed(2)}%`);
    }
    
    mediaGeral /= notas.length;
    var statusGeral = "";
    if (mediaGeral >= 60) {
        statusGeral = "Aprovado";
    } else if (mediaGeral >= 40) {
        statusGeral = "Recuperação";
    } else {
        statusGeral = "Reprovado";
    }
    
    console.log(`Média Geral: ${mediaGeral.toFixed(2)}% - Status Geral: ${statusGeral}`);
    
    
    var newRow = tabelaResultados.insertRow();
    var alunoCell = newRow.insertCell(0);
    var statusCell = newRow.insertCell(1);
    var mediaCell = newRow.insertCell(2);
    alunoCell.innerHTML = nomeAluno;
    statusCell.innerHTML = statusGeral;
    mediaCell.innerHTML = mediaGeral.toFixed(2);
    
    
    if (statusGeral === "Aprovado") {
        statusCell.style.color = "green";
        mediaCell.style.color = "green"; 
    } else if (statusGeral === "Recuperação") {
        statusCell.style.color = "yellow";
        mediaCell.style.color = "yellow"; 
    } else {
        statusCell.style.color = "red";
        mediaCell.style.color = "red"; 
    }
    
    
    nome.value = "";
    for (let i = 1; i <= 20; i++) {
        document.getElementById("n" + i).value = "";
    }
});