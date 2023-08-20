import mongoose from "mongoose";

const noticiaSchema = new mongoose.Schema(
    {
        id: mongoose.SchemaTypes.ObjectId,
        titulo: { type: String, required: true },
        descricao: { type: String, required: true },
        src: { type: String},
        data: { type: Date}
    }
);

const noticias = mongoose.model("noticias", noticiaSchema);

export default noticias;