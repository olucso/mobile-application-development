//Alias

type Pares = 0 | 2 | 4 | 6 | 8 | 10;

const a : Pares = 8;

type Cores = "amarelo" | "vermelho" | "verde" | "azul" | "branco" | "preto";

const cor : Cores = "amarelo";

type StringEspecial = string | undefined | null;

const b : StringEspecial = undefined;
const c : StringEspecial = undefined;
const d : StringEspecial = "Teste";




//----- Exercício 1 -----

type Motor = 1.0 | 1.3 | 1.4 | 1.5 | 1.6 | 1.8 | 2.0

enum Combustivel {
  ETANOL,
  GASOLINA,
  FLEX,
  GNV,
  DIESEL,
  ELETRICO,
  HIBRIDO,
  HIDROGENIO_VERDE
}

interface Carro {
  marca : string
  modelo : string
  ano : number
  chassi : string
  motor: Motor
  placa: string
  combustivel : Combustivel
  autonomia : number
}

interface Produto {
  ean13? : string
  nome : string
  fabricante : string
  valor : number
}

interface Endereco {
  logradouro : string
  numero : number
  complemento : string
  bairro : string
  cidade : string
  estado : string
  cep : string
}

enum Horario {
  MANHÃ,
  TARDE,
  NOITE
}

interface Telefone {
  codigoDeArea : string
  numero : string
  operadora : "Vivo" | "Claro" | "Tim" | "Oi"
  horario : Horario
}

type Genero = "masculino" | "feminino"