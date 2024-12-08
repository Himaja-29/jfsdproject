export interface User {
  id: string;
  name: string;
  role: 'admin' | 'investor' | 'advisor' | 'analyst';
  email: string;
}

export interface MutualFund {
  id: string;
  name: string;
  category: string;
  riskLevel: 'Low' | 'Moderate' | 'High';
  nav: number;
  aum: number;
  returns: {
    oneYear: number;
    threeYear: number;
    fiveYear: number;
  };
  description: string;
}