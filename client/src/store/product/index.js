const state = {
  testProducts: [
    { name: '기획상품', price: '10000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cup.jpg') },
    { name: '마스크/세정제', price: '20000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cup.jpg') },
    { name: '차포트', price: '30000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cup.jpg') },
    { name: '물병/주전', price: '40000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cup.jpg') },
    { name: '컵/잔', price: '50000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cup.jpg') },
    { name: '텀블러 보틀', price: '60000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cup.jpg') },
    { name: '워머/트레이/보관함', price: '70000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cup.jpg') },
    { name: '플로이', price: '80000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cup.jpg') },
    { name: '차류', price: '90000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cup.jpg') },
    { name: '세트 상품', price: '100000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cup.jpg') }
  ],
  products: []
}

const getters = {
  getProduct: state => id => state.products[id]
}

const mutations = {
  setProducts (state, products) {
    state.products  = products
  }
}

const actions = {
  fetchProducts
}

function fetchProducts (store, q) {
  const items = []

  for (let i = 0; i < 30; i++) {
    items.push({ ...store.state.testProducts[q], id: i })
  }

  store.commit('setProducts', items)
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
