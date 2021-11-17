const { expect } = require('chai');

// simulação do model
const moviesModel = {
    create: () => {}
};

describe('Insere um novo filme no BD', () => {
    const payloadMovie = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
    };

    describe('Qyabdi é inserido com sucesso', () => {
        it('retorna um objeto', async () => {
            const response = await moviesModel.create(payloadMovie);

            expect(response).to.be.a('object');
        });

        it('tal objeto possui o id do novo filme inserido', async () => {
            const response = await moviesModel.create(payloadMovie);

            expect(response).to.have.a.property('id');
        });
    });
});