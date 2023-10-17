interface PerformerType {
    id: string;
    imgsrc: string;
    name: string;
    budget: number;
    percent: number;
  }
  
  const ProductTableData: PerformerType[] = [
    {
      id: "1",
      imgsrc: "/images/profile/user1.jpg",
      name: "Supplier Name 1. State, Country",
      percent: 55,
      budget: 400
    },
    {
      id: "2",
      imgsrc: "/images/profile/user2.jpg",
      name: "Supplier Name 2. State, Country",
      percent: 25,
      budget: 220
    },
    {
      id: "3",
      imgsrc: "/images/profile/user3.jpg",
      name: "Supplier Name 3. State, Country",
      percent: 15,
      budget: 155
    },
    {
      id: "4",
      imgsrc: "/images/profile/user4.jpg",
      name: "Supplier Name 4. State, Country",
      percent: 25,
      budget: 190
    },
    {
      id: "5",
      imgsrc: "/images/profile/user5.jpg",
      name: "Supplier Name 5. State, Country",
      percent: 55,
      budget: 136
    },
  ];
  
  export default ProductTableData;
  