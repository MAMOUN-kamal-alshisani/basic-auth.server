/// middleware to log the info coming from the function that is middling
module.exports = function record(req,res,next){

    console.log(`logIn Record: Request path: ${req.path}, Request Method: ${req.method}, Time: ${new Date()}`);

    next()
}
