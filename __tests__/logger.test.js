'use strict';

const loggerMeddleware =require('../src/middleware/logRecord');


describe('logger middleware',()=>{
    let consoleSpy;
let req={};
let res={};
let next=jest.fn();;

beforeEach(()=>{
consoleSpy=jest.spyOn(console,'log').mockImplementation();
})

afterEach(()=>{
consoleSpy.mockRestore();

})


it('should console log',()=>{

loggerMeddleware(req,res,next);

expect(consoleSpy).toHaveBeenCalled();
});

it('should move to middleware',()=>{

loggerMeddleware(req,res,next);

expect(next).toHaveBeenCalledWith();

})

})