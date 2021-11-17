const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');


const mongoConnection = require('../../models/connection');
const movieModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
    let connectionMock;

    const payloadMovie = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
    };

    before(async () => {
        const DBServer = new MongoMemoryServer();
        const URLMock = await DBServer.getUri();
        const OPTIONS = {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }
        connectionMock = await MongoClient
            .connect(URLMock, OPTIONS)
            .then((conn) => conn.db('model_example'));

        sinon.stub(mongoConnection, 'connection').resolves(connectionMock);
    });

    after(() => {
        mongoConnection.connection.restore();
    });

    describe('Quando é inserido com sucesso', () => {
        it('retorna um objeto', async () => {
            const response = await movieModel.create(payloadMovie);

            expect(response).to.be.a('object');
        });

        it('tal objeto possui o id do novo filme inserido', async () => {
            const response = await movieModel.create(payloadMovie);

            expect(response).to.have.a.property('id');
        });
    });
});