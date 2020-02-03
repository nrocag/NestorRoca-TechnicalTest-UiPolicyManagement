export interface Policy {
  _id: string;
  name: string;
  description: string;
  amountMonthsCoverage: number
  price: number;
  coveringType: number;
  coveragePercentage: number;
  riskType: number;
}