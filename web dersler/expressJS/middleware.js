const accessControl = (req,res,next)=>{
    console.log ("Middleware: Access Control");
    next();

};
module.export = {
    accessControl
};

