import axios from 'axios';
import router from '../../router';

const state = {
    person: {
        name: null,
        age: null,
        job: null,
    },
    people: null,
};

const getters = {
    person: state => state.person,
    people: state => state.people,
    isDisabled: state => !state.person.name || !state.person.age || !state.person.job,
};

const actions = {
    getPerson({ commit }, id) {
        axios.get(`/api/people/${id}`)
            .then(res => {
                commit('setPerson', res.data.data);
            })
            .catch(error => {
                console.error('Error getting person:', error);
            });
    },
    getPeople({ commit }) {
        axios.get('/api/people')
            .then(res => {
                commit('setPeople', res.data.data);
            })
            .catch(error => {
                console.error('Error getting person:', error);
            });
    },
    deletePerson({ dispatch }, id) {
        axios.delete(`/api/people/${id}`)
            .then(res => {
                dispatch('getPeople');
            });
    },
    updatePerson({ }, person) {
        axios.patch(`/api/people/${person.id}`, person)
            .then(res => {
                router.push({ name: 'person.show', params: { id: person.id } });
            });
    },
    storePerson({ }, person) {
        axios.post('/api/people', person)
            .then(res => {
                router.push({ name: 'person.index' });
            });
    },
};

const mutations = {
    setPerson(state, person) {
        state.person = person;
    },
    setPeople(state, people) {
        state.people = people;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
