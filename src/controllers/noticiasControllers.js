import noticia from "../models/Noticia.js";

class NoticiasController {

    static listarNoticias = async (req, res) => {
        try {
            const result = await noticia.find();
            res.status(200).json(result);
        } catch (error) {
            console.error("Erro ao listar notícias:", error);
            res.status(500).json({ error: "Erro interno do servidor" });
        }
    }

    static listarNoticiasPorID = async (req, res) => {
        const id = req.params.id;
        try {
            const noticias = await noticia.findById(id);
            res.status(200).send(noticias);
        }
        catch (error) {
            res.status(400).send({ error: `${error.message} - id nao localizado` });
        }
    }

    static cadastrarNoticia = async (req, res) => {
        try {
            const {id, titulo, descricao, data} = req.body;

            const file = req.file; 

            const newNoticia = new noticia({
                id,
                titulo,
                descricao,
                data,
                src: file.path,
            })
            await newNoticia.save();
            res.status(201).send(newNoticia.toJSON());
        } catch (error) {
            res.status(501).send({ message: `${error.message} - erro ao cadastrar livro` }
            )
        }
    }

    static atualizarNoticia = async (req, res) => {
        const id = req.params.id;
        try {
            await noticia.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).send({ message: 'Noticia foi atualizado com sucesso' });
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
    static excluirNoticia = async (req, res) => {
        const id = req.params.id;

        try {
            await noticia.findByIdAndDelete(id);
            res.status(200).send({ message: 'Noticia removida com sucesso' });
        } catch(err) {
            res.status(500).send({ message: err.message });
        }
    }
}



export default NoticiasController;
