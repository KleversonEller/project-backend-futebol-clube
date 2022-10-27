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
import TeamModel from '../database/models/TeamModel';

chai.use(chaiHttp);

const { expect } = chai;

// let userLogin = {email: 'admin@admin.com', password: 'secret_admin' }
const todosTimes = [
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  },
  {
    "id": 3,
    "teamName": "Botafogo"
  },
];

const meuToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkeGkuSHhrMWN6QU8wblpSLi5CMzkzdTEwYUVEMFJRMU4zUEFFWFE3SHh0TGpLUEVaQnUuUFciLCJpYXQiOjE2NjY3NDA3MDl9.rh85ukZ9UFzCL7O-UlUHJyLMCF5RPHIEm7euj6a9CA8'


describe('Manipulando os Times', () =>{

  afterEach(() => {
    sinon.restore();
  });

  it('Deve ser uma rota GET com resposta com status 200 e com um json contendo todos os times', async () => {
    sinon.stub(TeamModel, 'findAll').resolves(todosTimes as any);
    // sinon.stub(, 'findOne')
    const response = await chai
      .request(app)
      .get('/teams');
      // .send(userLogin);
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(todosTimes);
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