import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import  {app} from '../app';
// import Example from '../database/models/ExampleModel';
import * as jwt from 'jsonwebtoken';
import { Response } from 'superagent';
import { Sequelize } from 'sequelize/types';
import { type } from 'os';
import MatchModel from '../database/models/MatchModel';

chai.use(chaiHttp);

const { expect } = chai;

// let userLogin = {email: 'admin@admin.com', password: 'secret_admin' }
const mockPartidas = [
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 1,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 41,
    "homeTeam": 16,
    "homeTeamGoals": 2,
    "awayTeam": 9,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Internacional"
    }
  }
];

// const meuToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkeGkuSHhrMWN6QU8wblpSLi5CMzkzdTEwYUVEMFJRMU4zUEFFWFE3SHh0TGpLUEVaQnUuUFciLCJpYXQiOjE2NjY3NDA3MDl9.rh85ukZ9UFzCL7O-UlUHJyLMCF5RPHIEm7euj6a9CA8'


describe('Manipulando as Partidas', () =>{

  afterEach(() => {
    sinon.restore();
  });

  it('Deve ser uma rota GET com resposta com status 200 e com um json contendo todas as Partidas', async () => {
    sinon.stub(MatchModel, 'findAll').resolves(mockPartidas as any);
    const response = await chai
      .request(app)
      .get('/matches');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(mockPartidas);
  });

  // it('Se logar sem email deve retornar status 400', async () => {
  //   const userLogin = { password: 'secret_admin' };
  //   const response = await chai
  //     .request(app)
  //     .post('/login')
  //     .send(userLogin);
  //   expect(response.status).to.equal(400);
  // });

  // it('Se logar com email inválido deve retornar status 401', async () => {
  //   const userLogin = { email: 'email@email.com', password: 'secret_admin' };
  //   const response = await chai
  //     .request(app)
  //     .post('/login')
  //     .send(userLogin);
  //   expect(response.status).to.equal(401);
  // });
  
  // it('Se acessar /login/validate com o token válido, deve retornar status 200', async () => {
  //   const response = await chai
  //     .request(app)
  //     .get('/login/validate')
  //     .set({Authorization: meuToken});
  //   expect(response.status).to.equal(200);
  //   expect(response.body).to.deep.equal({role: 'admin'});
  // });

  // it('Se acessar /login/validate com o token INválido, deve retornar status 401', async () => {
  //   const response = await chai
  //     .request(app)
  //     .get('/login/validate')
  //     .set({AuthorizationX: 'meuToken'});
  //   expect(response.status).to.equal(401);
  // });

});