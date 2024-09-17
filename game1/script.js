document.getElementById('gui_uploader').addEventListener('click', function() {
    // Cria um novo objeto Blob com o conteúdo do arquivo "game.gba"
    // Nota: O conteúdo abaixo é apenas um exemplo e não representa um arquivo real
    var content = new Uint8Array([0x00, 0x01, 0x02, 0x03]); // Simule o conteúdo do seu arquivo "game.gba"
    var blob = new Blob([content], { type: 'application/x-gba-rom' });
    var file = new File([blob], "game.gba", { type: 'application/x-gba-rom' });

    // Simula a seleção do arquivo
    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    var fileInput = document.getElementById('gui_controls_file');
    fileInput.files = dataTransfer.files;

    // Aciona a função de carregamento
    runEmulator(fileInput.files);
});

function runEmulator(files) {
    // Lógica para rodar o emulador com o arquivo selecionado
    console.log('Arquivo carregado:', files[0].name);
    // Adicione o código para iniciar o emulador aqui
}
