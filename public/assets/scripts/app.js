function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const itemId = Number(getQueryParam("id"));
console.log("ID capturado:", itemId);

const itens = [
    { id: 1, titulo: "Esporte", descricao: "Notícias sobre esportes", imagem: "/imgs/img1.svg" },
    { id: 2, titulo: "Política", descricao: "Notícias sobre política", imagem: "/imgs/img2.svg" },
    { id: 3, titulo: "Entretenimento", descricao: "Notícias sobre entretenimento", imagem: "/imgs/img3.svg" },
    { id: 4, titulo: "Automobilismo", descricao: "Notícias sobre automobilismo", imagem: "/imgs/img4.svg" },
    { id: 5, titulo: "Tecnologia", descricao: "Notícias sobre tecnologia", imagem: "/imgs/img5.svg" },
    { id: 6, titulo: "Cultura", descricao: "Notícias sobre cultura", imagem: "/imgs/img6.svg" },
];

const item = itens.find(i => i.id === itemId);

if (item) {
    const tituloEl = document.getElementById("titulo");
    const descricaoEl = document.getElementById("descricao");
    const imagemEl = document.getElementById("imagem");

    if (tituloEl && descricaoEl && imagemEl) {
        tituloEl.textContent = item.titulo;
        descricaoEl.textContent = item.descricao;
        imagemEl.src = item.imagem;
        imagemEl.alt = item.titulo;
    } else {
        console.error("Erro: Elementos HTML não encontrados.");
    }
} else {
    const conteudoEl = document.getElementById("conteudo");
    if (conteudoEl) {
        conteudoEl.innerHTML = "<p style='color:red;'>Item não encontrado.</p>";
    } else {
        console.error("Erro: Elemento 'conteudo' não encontrado.");
    }
}


if (window.location.pathname.includes('termos.html')) {
    fetch('termos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar o arquivo JSON');
        }
        return response.json(); 
      })
      .then(data => {
        const titleElement = document.getElementById('title');
        if (titleElement) {
          titleElement.textContent = data.title; 
        }
  
        const contentElement = document.getElementById('content');
        if (contentElement) {
          let allContent = ""; 
          data.sections.forEach(section => {
            allContent += `
              <div class="section">
                <h2>${section.title}</h2>
                <p>${section.content}</p>
              </div>
            `;
          });
          contentElement.innerHTML = allContent; 
        }
      })
      .catch(error => {
        console.error('Erro:', error); 
        const contentElement = document.getElementById('content');
        if (contentElement) {
          contentElement.innerHTML = "<p style='color:red;'>Erro ao carregar os Termos de Uso.</p>";
        }
      });
  }