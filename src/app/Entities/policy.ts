export interface Policy {
  name: string;
  description: string;
  amountMonthsCoverage: number
  price: number;
  coveringType: number;
  coveragePercentage: number;
  riskType: number;
}

/*
● Tipo de cubrimiento(s) de la póliza (Terremoto, incendio, Robo, Pérdida, etc). La
cobertura se define en porcentaje.
● Inicio de vigencia de la póliza.
● Periodo de cobertura definido en meses
● Precio de la poliza.
● Tipo de Riesgo (bajo, medio, medio-alto, alto)
*/