const { getOne } = require('../controllers/controller');
const db = require('../db');

module.exports = {
    getAll: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    getOne: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros WHERE codigo = ?', [codigo], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    }
};