const service = require('../services/service');

module.exports = {
    getAll: async (req, res) => {
        let json = { error: '', result: [] };
        let carros = await service.getAll();

        for (let i in carros) {
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            })
        }
        res.json(json);
    }
}