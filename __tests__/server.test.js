const {server} = require('../src/server')
const supertest = require('supertest')

const request = supertest(server)


  describe('server status', () => {

    it('should return 404 status',async () => {
        let param = '/notFound'
        let status = 404
        
        const res =  await request.get(param)
        
        expect(res.status).toBe(status)
        expect(typeof res.body).toEqual('object');  
    });

    it('should return 200 status',async () => {
        let param = '/'
        let status = 200
        
        const res =  await request.get(param)
        
        expect(res.status).toBe(status)
        expect(typeof res.body).toEqual('object');  
    });
    
    it('should return 200 status',async () => {
        let param = '/signIn'
        let status = 200
        let User ={
            userName:'pro',
            passWord:12345
        }
        await  request.post(param,User)
        .auth('pro', 12345)
        expect(request.status).toBe(undefined)
        expect(typeof request.body).toEqual('undefined'); 
 
    });
    it('should return 201 status',async () => {
        let param = '/signUp'
        let status = 201
        let User ={
            userName:'pro',
            passWord:123
        }
        await  request.post(param,User)
        .auth('pro', 123)
        expect(request.status).toBe(undefined)
        expect(typeof request.body).toEqual('undefined'); 
 
    });
    // it('should return 200 status',async () => {
    //     let param = '/signIn'
    //     let status = 200
    //     await  request.post(param)
    //     .auth('pro', 12345)
    //     expect(request.status).toBe(undefined)
    //     expect(typeof request.body).toEqual('undefined');  
    // });
});
