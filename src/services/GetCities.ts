import axios from 'axios';

const getCidades = async (estado: string): Promise<string[]> => {
  try {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cidades = response.data.map((cidade: any) => cidade.nome);
    // Remover duplicidades usando Set
    return Array.from(new Set(cidades));
  } catch (error) {
    console.error('Erro ao obter as cidades:', error);
    return [];
  }
};


export default getCidades;
