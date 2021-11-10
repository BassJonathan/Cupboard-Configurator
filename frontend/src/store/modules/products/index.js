const state = {
  products: [
    {
      id: 0,
      name: "Highboard white",
      price: 440,
      priceStarting: false,
      customizable: false,
      imageUrl: "/img/Products/luso-highboard-a073367-001-11.jpg",
    },
    {
      id: 1,
      name: "Lowboard brown",
      price: 720,
      priceStarting: false,
      customizable: false,
      imageUrl: "/img/Products/lowboard-eiche-massiv-nach-mass-neu.jpg",
    },
    {
      id: 2,
      name: "Cupboard",
      price: 120,
      priceStarting: true,
      customizable: true,
      imageUrl: "/img/Products/kleiderschrank-weiss.jpg",
    },
  ],
  selectables2: {
    id: 2,
    name: "Cupboard",
    price: 120,
    priceStarting: true,
    customizable: true,
    imageUrl: "/img/Products/kleiderschrank-weiss.jpg",
    exteriors: [
      {
        id: 90,
        name: "Frame",
        price: 120,
        selectableCategory: "exterior",
        customizable: true,
        imageUrl: "/img/Configurator/korpus-weiss.jpg",
      },
    ],
    interiors: [
      {
        id: 91,
        name: "Shelf",
        price: 20,
        selectableCategory: "interior",
        customizable: true,
        imageUrl:
          "/img/Configurator/komplement-boden-weiss__0721164_PE733094_S5.JPG",
      },
      {
        id: 92,
        name: "Clothes rail",
        price: 10,
        selectableCategory: "interior",
        customizable: true,
        imageUrl:
          "/img/Configurator/komplement-kleiderstange-weiss__0650342_PE706138_S5.JPG",
      },
      {
        id: 93,
        name: "Mesh basket",
        price: 20,
        selectableCategory: "interior",
        customizable: true,
        imageUrl:
          "/img/Configurator/komplement-netzdrahtkorb-mit-auszugschiene-weiss__0643765_PE702093_S5.JPG",
      },
      {
        id: 94,
        name: "Drawer",
        price: 40,
        selectableCategory: "interior",
        customizable: true,
        imageUrl:
          "/img/Configurator/komplement-schublade-weiss__0762194_PE751731_S5.JPG",
      },
    ],
    materials: [
      {
        id: 95,
        name: "White",
        price: 0,
        selectableCategory: "material",
        customizable: false,
        imageUrl: "/img/Configurator/white.jpg",
      },
      {
        id: 96,
        name: "Maple",
        price: 40,
        selectableCategory: "material",
        customizable: false,
        imageUrl: "/img/Configurator/ahorn.jpg",
      },
      {
        id: 97,
        name: "Walnut",
        price: 80,
        selectableCategory: "material",
        customizable: false,
        imageUrl: "/img/Configurator/nussbaum.jpg",
      },
      {
        id: 98,
        name: "Brich",
        price: 40,
        selectableCategory: "material",
        customizable: false,
        imageUrl: "/img/Configurator/birke.jpg",
      },
    ],
    accessories: [
      {
        id: 99,
        name: "Lamp",
        price: 20,
        selectableCategory: "accessories",
        customizable: false,
        imageUrl: "/img/Configurator/lamp.jpg",
      },
    ],
  },
};

const getters = {
  getProducts: (state) => {
    return state.products;
  },

  getSelectables2: (state) => {
    return state.selectables2;
  },
};

export default { state, getters };
