var initialState = [
   {
      id: 1,
      name: 'iPhone 6 Plus',
      price: 400,
      status: true
   },
   {
      id: 2,
      name: 'iPhone 7 Plus',
      price: 700,
      status: false
   },
   {
      id: 3,
      name: 'iPhone 8',
      price: 600,
      status: true
   }
];

const products = (state = initialState, action) => {
   switch (action.type) {
      default: return [...state];
   }
};

export default products;