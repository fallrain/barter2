export default {
  namespaced: true,
  state: {
    choosedLeader: {
      id: '',
      name: ''
    }
  },
  mutations: {
    changeChoosedLeader({choosedLeader}, data) {
      choosedLeader.id = data.id;
      choosedLeader.name = data.val;
    }
  }
};
