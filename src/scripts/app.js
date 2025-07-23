import "@fortawesome/fontawesome-free/css/all.css"
import Alpine from "alpinejs"
import {mainApp} from "./CatView"

// 實作寫在這裡！


// 取得購物車
// 建立購物車視覺

// 1. 認養功能：要將 1.1 名字 1.2 價格 資料傳送到 認養清單
// 2. 調整數量功能
// 3. 抓取手續費
// 4. 計算價格功能
// 5. 刪除功能
// 6. 總價功能
// 7. 全清功能


window.Alpine = Alpine

Alpine.store("catsData", {
    cats: [],
    cart: [],
})


Alpine.data('mainApp', mainApp)

Alpine.start()




