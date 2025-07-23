import { dataManager } from "./catModel"


const controller = {
    async loadData() {
        const cats = await dataManager.getCatsData()
        return cats
        }
    }

export { controller }