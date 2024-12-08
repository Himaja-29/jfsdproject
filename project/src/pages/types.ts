interface MutualFund {
    id: string;
    name: string;
    category: string;
    riskLevel: string;
    nav: number;
    aum: number;
    returns: {
      oneYear: number;
      threeYear: number;
      fiveYear: number;
    };
    description: string;
  }
  
  interface FundCardProps {
    fund: MutualFund;
    onSelect: (fund: MutualFund) => void;
  }
  
  interface FundDetailModalProps {
    fund: MutualFund;
    onClose: () => void;
  }