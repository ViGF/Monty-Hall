let parametros = {}

export default function post(req, res) {
    if(req.method === 'POST') {
        setParams(req, res)
    } else if (req.method === 'GET') {
        getParams(req, res)
    } else {
        res.status(405).send()
    }
}

function setParams(req, res) {
    parametros = req.body
    res.status(200).json(parametros)
}

function getParams(req, res) {
    res.status(200).send(parametros)
}