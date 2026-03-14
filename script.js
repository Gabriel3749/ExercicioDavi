const API_URL = "http://localhost:10";

// Criar usuário
document.getElementById("formCriar").addEventListener("submit", async (e) => {
  e.preventDefault();
  const usuario = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    contato: document.getElementById("contato").value,
    senha: document.getElementById("senha").value
  };

  try {
    const resp = await fetch(`${API_URL}/usuarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario)
    });
    const data = await resp.json();
    document.getElementById("saida").textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById("saida").textContent = "Erro: " + err;
  }
});

// Listar usuários
document.getElementById("listarBtn").addEventListener("click", async () => {
  try {
    const resp = await fetch(`${API_URL}/usuarios`);
    const data = await resp.json();
    document.getElementById("saida").textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById("saida").textContent = "Erro: " + err;
  }
});

// Buscar usuário por ID
document.getElementById("buscarBtn").addEventListener("click", async () => {
  const id = document.getElementById("buscarId").value;
  try {
    const resp = await fetch(`${API_URL}/usuarios/${id}`);
    const data = await resp.json();
    document.getElementById("saidaBuscar").textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById("saidaBuscar").textContent = "Erro: " + err;
  }
});

// Atualizar usuário
document.getElementById("formAtualizar").addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.getElementById("idAtualizar").value;
  const usuario = {
    nome: document.getElementById("nomeAtualizar").value,
    contato: document.getElementById("contatoAtualizar").value
  };

  try {
    const resp = await fetch(`${API_URL}/usuarios/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario)
    });
    const data = await resp.json();
    document.getElementById("saidaAtualizar").textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById("saidaAtualizar").textContent = "Erro: " + err;
  }
});

// Deletar usuário
document.getElementById("deletarBtn").addEventListener("click", async () => {
  const id = document.getElementById("idDeletar").value;
  try {
    const resp = await fetch(`${API_URL}/usuarios/${id}`, {
      method: "DELETE"
    });
    const data = await resp.json();
    document.getElementById("saidaDeletar").textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById("saidaDeletar").textContent = "Erro: " + err;
  }
});
