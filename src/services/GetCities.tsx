import axios from "axios";
import { Option } from "../components/SearchJob";

export async function getCidadesFromAPI(estado: string): Promise<Option[]> {
  try {
    const response = await getCidades(estado); // Use a função getCidades para obter as cidades do IBGE
    const cidadesOptions = response.map((cidade: string) => ({
      value: cidade,
      label: `${cidade} presencial`,
    }));
    return cidadesOptions;
  } catch (error) {
    console.error("Erro ao obter as cidades:", error);
    return [];
  }
}

export async function getCidades(estado: string): Promise<string[]> {
  try {
    const response = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cidades = response.data.map((cidade: any) => cidade.nome);
    return cidades;
  } catch (error) {
    console.error("Erro ao obter as cidades:", error);
    return [];
  }
}
