from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

comentarios = []
contador_id = 0

@app.route('/getall', methods=['GET'])
def get_all():
    return jsonify(comentarios)

@app.route('/comentario/<int:id>', methods=['GET'])
def get_comentario(id):
    for comentario in comentarios:
        if comentario["id"] == id:
            return jsonify({"comentario": comentario["comentario"]})
    return jsonify({"erro": "Comentário não encontrado"}), 404

@app.route('/novo', methods=['POST'])
def novo():
    global contador_id
    
    nome = request.form.get("nome")
    comentario = request.form.get("comentario")

    novo_comentario = {
        "id": contador_id,
        "nome": nome,
        "comentario": comentario
    }

    comentarios.append(novo_comentario)
    contador_id += 1

    return jsonify({"msg": "Comentário criado"}), 201

if __name__ == '__main__':
    app.run(debug=True)