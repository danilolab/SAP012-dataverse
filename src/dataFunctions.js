export const filterBy = (data, filterValue) => {

  const filterString = filterValue;
  const filteredData = data.filter(item => {

    return item.facts.tempoDeVida === parseInt(filterString) || item.facts.facilidadeCriacao === filterString || item.facts.capturaPresas === filterString;
  });

  return filteredData;
};

export const sortBy = (data, itemSelecionado, order) => {
  data.sort((a, b) => {
    if (itemSelecionado === "alturaPlanta" || itemSelecionado === "precoPlanta") {

      return a.facts[itemSelecionado] - b.facts[itemSelecionado];
    } else if (itemSelecionado === "name") {

      return a[itemSelecionado].localeCompare(b[itemSelecionado]);
    } else {

      return 0;
    }
  });

  if (order === "desc") {
    data.reverse();
  }

  return data;
};

export const calculaMediaVida = (data) => {
  const soma = data.reduce(
    function (acumulador, item) {
      return acumulador + item.facts.tempoDeVida
    }, 0
  );
  const media = soma / data.length;
  return media.toFixed(0)
}

export const calculaMediaAltura = (data) => {
  const soma = data.reduce(
    function (acumulador, item) {
      return acumulador + item.facts.alturaPlanta
    }, 0
  );
  const media = soma / data.length;
  return media.toFixed(0)
}

export default sortBy
