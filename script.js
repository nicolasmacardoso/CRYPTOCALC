function calculaCripto () {
    $("#resultado").text('')

    const salinicial   = parseFloat($("#salinicial").val());
    const criptcompra  = parseFloat($("#criptcompra").val());
    const criptmax     = parseFloat($("#criptmax").val());
    const intervalo    = parseFloat($("#intervalo").val());
    const dolar        = parseFloat($("#dolar").val());
    
    const criptprecos = Array.from({ length: Math.floor((criptmax - criptcompra) / intervalo) + 2 }, (_, i) => criptcompra + i * intervalo);
    
    const lucros = [];
    
    criptprecos.forEach(criptnovopreco => {
        const novosaldo = salinicial * (criptnovopreco / criptcompra);
        const lucro = novosaldo - salinicial;
        const percentlucro = Math.round((lucro / salinicial) * 100);
    
        lucros.push({
            percentual: percentlucro,
            lucroliq: `R$ ${ (lucro * dolar).toFixed(2) }, $ ${ (lucro).toFixed(2) }`,
            valtt: `R$ ${ (novosaldo * dolar).toFixed(2) }, $ ${ (novosaldo).toFixed(2) }`,
            precocript:` R$ ${ (criptnovopreco * dolar).toFixed(2) }, $${ criptnovopreco.toFixed(2) })`
        });
    });
    
    lucros.forEach(lucro => {
        $("#resultado").append(`
            <div class="info-container">
                <h4>Lucro de ${lucro.percentual}%</h4>

                <span>Lucro líquido: ${lucro.lucroliq}</span>
                <span>Valor total: ${lucro.valtt}</span>
                <span>Preço da criptomoeda: ${lucro.precocript}</span>
            </div>
        `)        
    })
}
