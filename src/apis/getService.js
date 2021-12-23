import API from './api'

export default{
     getPerson(){
        console.log('getservice');
        return API().get('person', '');
    }
}