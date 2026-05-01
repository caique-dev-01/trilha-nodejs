import livro from "../models/livro.js";

class LivroController {
  static async listarLivros(req, res) {
    const listaLivros = await livro.find({});
    res.status(200).jsonli(listaLivros);
  }

  static async cadastrarLivro(req, res) {
    try {
      const novolivro = await livro.create(req.body);
      res.status(201).json({ message: "criado com sucesso", livro: novolivro });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro` });
    }
  }
}

export default LivroController;
