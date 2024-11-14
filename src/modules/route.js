import {handleActions} from 'redux-actions';

const initialValue = {
    jobs : {
        dev : {
            name : '박토린',
            skills : ["개발","새발"]
        },
        pla : {
            name : '박콩',
            skills : ["콩발","앞발"]
        }
    }
}

const route = handleActions({

}, initialValue);

export default route;