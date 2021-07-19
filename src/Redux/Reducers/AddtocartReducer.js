export const initialState = [];
export let Quantity = 0;
export const cartReducer = (state = initialState, { type, payload }) => {
    if (type == "AddCart") {
        if (state.length === 0) {
            payload = { ...payload, Quantity: Quantity + 1 };
            state = [...state, payload];
        } else {
            if (payload.Quantity) {
                let i = 0;
                while (state[i]) {
                    if (state[i].id === payload.id) {
                        state[i].Quantity += 1;
                        break;
                    }
                    i++;
                }
            } else {
                payload = { ...payload, Quantity: Quantity + 1 };
                let i = 0;
                while (state[i]) {
                    if (state[i].id === payload.id) {
                        state[i].Quantity += 1;
                        break;
                    } else if (i + 1 === state.length) {
                        state.push(payload);
                        break
                    }
                    i++;
                }
            }
        }
        return state;
    } else if (type === "RemoveFromCart") {
        state.forEach(function (data, index) {
            if (data.id === payload.id) {
                if (payload.Quantity === 1) {
                    state.splice(index, 1);
                    return true;
                } else {
                    state[index].Quantity -= 1;
                    return true;
                }
            }
        })
        return state;
    }
     else if (type == "Remove") {
        let i = 0;
        while (state[i]) {
            if (state[i].id === payload.id) {
                state.splice(i, 1);
                break;
            }
        }
        return state;
    }
     else {
        return state;
    }
}