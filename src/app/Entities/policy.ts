export interface Policy {
  name: string;
  description: string;
  amountMonthsCoverage: number
  price: number;
  coveringType: number;
  coveragePercentage: number;
  riskType: number;
}