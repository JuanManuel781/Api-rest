const prueba = (req, res) =>{

    const {CO} = req.query;
    const buff = Buffer.from(CO, 'base64');
    const str = buff.toString('utf-8');
    console.log(str);
    res.json(req.query);
}

module.exports= {prueba};