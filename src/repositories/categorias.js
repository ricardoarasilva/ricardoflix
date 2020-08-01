import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();

      return resposta;
    }

    throw new Error('Não foi possível pegar os dados! :(');
  });
}

function getAll() {
  return fetch(`${URL_CATEGORIAS}`).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();

      return resposta;
    }

    throw new Error('Não foi possível pegar os dados! :(');
  });
}

export default {
  getAllWithVideos,
  getAll,
};
