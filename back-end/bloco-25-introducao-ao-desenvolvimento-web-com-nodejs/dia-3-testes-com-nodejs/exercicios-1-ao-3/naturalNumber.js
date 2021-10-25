const statusNumber = (number) => {
    if(typeof number !== 'number') return 'valor inválido';

    if (number < 0) return 'negativo';
    
    if (number > 0) return 'positivo';
    
    return 'neutro';
};

module.exports = statusNumber;