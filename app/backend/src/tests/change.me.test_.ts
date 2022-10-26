import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import  {app} from '../app';
// import Example from '../database/models/ExampleModel';
import * as jwt from 'jsonwebtoken';
import { Response } from 'superagent';
import { Sequelize } from 'sequelize/types';

chai.use(chaiHttp);

const { expect } = chai;

const userLogin = {email: 'admin@admin.com', password: 'secret_admin' }
const userRetornado = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  iat: 1666740922
}
const meuToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkeGkuSHhrMWN6QU8wblpSLi5CMzkzdTEwYUVEMFJRMU4zUEFFWFE3SHh0TGpLUEVaQnUuUFciLCJpYXQiOjE2NjY3NDA3MDl9.rh85ukZ9UFzCL7O-UlUHJyLMCF5RPHIEm7euj6a9CA8'


describe('Fazendo login', () =>{
  it('Se logar com sucesso deve retornar status 200 e o token', async () => {
    sinon.stub(jwt, 'sign').returns(meuToken as any);
    const response = await chai
    .request(app)
    .post('/login')
    .send(userLogin);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.key('token');
    expect(response.body).to.deep.equal({token: meuToken});
  });
});

// describe('Seu teste', () => {
//   /**
//    * Exemplo do uso de stubs com tipos
//    */

//   // let chaiHttpResponse: Response;

//   // before(async () => {
//   //   sinon
//   //     .stub(Example, "findOne")
//   //     .resolves({
//   //       ...<Seu mock>
//   //     } as Example);
//   // });

//   // after(()=>{
//   //   (Example.findOne as sinon.SinonStub).restore();
//   // })

//   // it('...', async () => {
//   //   chaiHttpResponse = await chai
//   //      .request(app)
//   //      ...

//   //   expect(...)
//   // });

//   it('Seu sub-teste', () => {
//     expect(false).to.be.eq(true);
//   });
// });
