const holidaysStore = {
    state : {
        holidays : [],
        total : null
    },
    mutations : {
        setHolidays(state, payload){
            state.holidays = payload;
        }
    },
    getters : {
        holidays : (state) => state.holidays,
        total : (state) => state.holidays.length
    },
    actions : {
        async getHolidays({commit}){
            try {
                const apiUrl = 'https://date.nager.at/api/v2/publicholidays/2020/US';
                const response = await fetch(
                    apiUrl,
                    {
                        method : 'GET',
                        headers : {
                            "Content-Type": "application/json"
                        }
                    }
                );
                if(!response.ok){
                    throw new Error("Failed to fetch friends");
                }
                const result = await response.json();
                commit('setHolidays', result);
                
            } catch (error) {
                console.error('pb fetch holidays');
            }
        },
        setHolidaysAfterAdding({commit}, payload){
            commit('setHolidays', payload);
        }
    }
}
export default holidaysStore;