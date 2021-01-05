// import Qs from 'qs'
// import Axios from 'axios'

const ClientID = "XXXX"
export default {
    login() {
        window.location = "https://api.imgur.com/oauth2/authorize?client_id=" + ClientID + "&response_type=token"
    }
}