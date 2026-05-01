import livro from "../models/livro.js";

class LivroController {
  static async listarLivros(req, res) {
    const listaLivros = await livro.find({});
    res.status(200).jsonli(listaLivros);
  }
};

export default LivroController;
