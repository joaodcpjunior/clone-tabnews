function status(request, response) {
  response.status(200).json({ chave: "sou foda são" });
}

export default status;
