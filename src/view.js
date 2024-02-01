// export const renderItems = (data) => {
//   console.log(data)
//   // Aquí comienza tu código y puedes retornar lo que tu necesites
//   return 'example';
// };

export const renderItems = (data) => {
  const data2 = data.map((item) => {
    return {
      name: item.name,
      imageUrl: item.imageUrl,
      shortDescription: item.shortDescription,
      alturaPlanta: item.facts.alturaPlanta,
      precoPlanta: item.facts.precoPlanta,
      tempoDeVida: item.facts.tempoDeVida,
      facilidadeCriacao: item.facts.facilidadeCriacao,
      capturaPresas: item.facts.capturaPresas
    }
  })
  let blocoItems = ""
  data2.forEach(item => {
    blocoItems += `
        <li itemscope itemtype="plant__item" class="plant__item">
          <div class="plant__content">
            <img src="${item.imageUrl}" class="plant__img">
            <dd itemprop="select-sort"><strong>${item.name}</strong></dd>
            <dd itemprop="select-sort">Altura em cm: ${item.alturaPlanta}</dd>
            <dd itemprop="select-sort">Preço: R$ ${item.precoPlanta.toFixed(2)}</dd>
            <dd itemprop="plant__description" class="plant__description">${item.shortDescription}</dd>
            <dd itemprop="sort-filter">Tempo de vida em anos: ${item.tempoDeVida}</dd>
            <dd itemprop="sort-filter">Facilidade de Criação: ${item.facilidadeCriacao}</dd>
            <dd itemprop="sort-filter">Tipo de captura das presas: ${item.capturaPresas}</dd>
          </div>
        </li>
  `
  });
  return `<ul id="plant__list">${blocoItems} </ul>` ;
};

export const renderFilter = (filter) => {

  let blocoFilter = ""

  if (filter === "tempoDeVida") {
    blocoFilter = `
    <option value="2">2 anos</option>
    <option value="3">3 anos</option>
    <option value="5">5 anos</option>
    <option value="10">10 anos</option>
    `
  } else if (filter === "capturaPresas") {
    blocoFilter = `
    <option value="Ativa">Ativa</option>
    <option value="Semiativa">Semiativa</option>
    <option value="Passiva">Passiva</option>
    `
  } else {
    blocoFilter = `
    <option value="default"> </option>
    <option value="facil">Fácil</option>
    <option value="Moderado">Moderado</option>
    <option value="Díficil">Díficil</option>
    `
  }
  return blocoFilter
};

