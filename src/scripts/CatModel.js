import axios from "axios";

const dataManager = {
    async getCatsData() {
        try {
            const url = "http://localhost:3002/cats"
            const response = await axios.get(url)
            return response.data
        } catch (error) {
            console.log(error)
            return []
        }       
    },
}
export { dataManager }


