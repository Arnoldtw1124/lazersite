/**
 * 諾雕 ALE - 產品資料庫 (Products Data)
 * 供靜態網頁 (GitHub Pages) 前端即時渲染與訂單計算使用
 * 目前工坊常態主力商品：
 * 1. 軟木杯墊(10*10)
 * 2. 珪藻土杯墊(10*10)
 * 3. 實木手機架(6*6)
 */
const PRODUCTS_DATA = {
    'coaster': {
        id: 'coaster',
        name: '軟木杯墊(10*10)',
        price: 'NT$ 150',
        unit_price: 150,
        original_price: 'NT$ 200',
        discount_label: '單件起印・現貨熱銷',
        desc: '高密度天然厚實軟木，具備優異的隔熱防燙與水分吸收特性，10*10cm 經典規格。獨特溢水吸收特性讓桌面時刻乾爽，深雕刻印手感立體，散發天然木質焦香。',
        specs: [
            '尺寸規格：10cm x 10cm (10*10cm)',
            '厚度選項：厚磅 5mm / 凹槽款 10mm',
            '材質成份：天然高密度軟木 (Natural Cork)',
            '雕刻工藝：高能光學雷射深雕・線條高對比',
            '產品特點：天然吸水・隔熱防燙・不傷桌面'
        ],
        image: 'coaster_default.png',
        images: ['coaster_default.png', 'coaster_square.png', 'coaster_round.png'],
        variants: [
            { name: '10*10 方形款 (厚5mm)', image: 'coaster_square.png', price: 'NT$ 150', unit_price: 150 },
            { name: '10*10 凹槽款 (厚10mm)', image: 'coaster_groove.png', price: 'NT$ 150', unit_price: 150 },
            { name: '直徑10cm 圓形款 (厚5mm)', image: 'coaster_round.png', price: 'NT$ 150', unit_price: 150 }
        ],
        addons: [],
        is_recommended: true,
        is_popular: true,
        is_out_of_stock: false
    },
    'diatomite_coaster': {
        id: 'diatomite_coaster',
        name: '珪藻土杯墊(10*10)',
        price: 'NT$ 180',
        unit_price: 180,
        original_price: 'NT$ 250',
        discount_label: '瞬吸速乾・熱銷新品',
        desc: '天然珪藻土材質，擁有微米級天然多孔結構，冷熱飲溢水即刻瞬吸、速乾揮發，告別濕黏桌面。高解析雷雕線條俐落，質感純淨典雅。',
        specs: [
            '尺寸規格：10cm x 10cm (10*10cm)',
            '厚度規格：約 9mm (手感扎實硬挺)',
            '材質成份：天然珪藻土 (Natural Diatomite)',
            '雕刻工藝：微米光纖雷射汽化刻印',
            '產品特點：超強瞬吸・防潮防霉・速乾易清潔'
        ],
        image: 'diatomite_coaster.png',
        images: ['diatomite_coaster.png'],
        variants: [
            { name: '10*10 純淨白款', price: 'NT$ 180', unit_price: 180 },
            { name: '10*10 淺石灰款', price: 'NT$ 180', unit_price: 180 }
        ],
        addons: [],
        is_recommended: true,
        is_popular: true,
        is_out_of_stock: false
    },
    'wood_phone_stand': {
        id: 'wood_phone_stand',
        name: '實木手機架(6*6)',
        price: 'NT$ 180',
        unit_price: 180,
        original_price: 'NT$ 250',
        discount_label: '桌上必備・天然溫潤',
        desc: '嚴選天然實木精密切割打磨，6*6cm 巧巧掌心便攜尺寸，倒角手感溫潤光滑。斜面凹槽支援市售絕大多數手機與平板直立/橫放，正面可雷雕專屬圖樣、簽名或客製文字。',
        specs: [
            '尺寸規格：6cm x 6cm (6*6cm)',
            '適用裝置：市售各大品牌手機、電子書、小型平板',
            '材質成份：天然實木 (櫸木 / 橡木)',
            '雕刻工藝：立體碳化深雕',
            '產品特點：厚實防滑不傾倒・巧巧便攜・雙面皆可客製'
        ],
        image: 'wood_phone_stand.png',
        images: ['wood_phone_stand.png'],
        variants: [
            { name: '6*6 天然櫸木原木色', price: 'NT$ 180', unit_price: 180 },
            { name: '6*6 沉穩胡桃深木色', price: 'NT$ 180', unit_price: 180 }
        ],
        addons: [],
        is_recommended: true,
        is_popular: true,
        is_out_of_stock: false
    }
};

// 輔助函式：取得所有產品清單
function getAllProducts() {
    return Object.values(PRODUCTS_DATA);
}

// 輔助函式：根據 ID 取得單一產品
function getProductById(id) {
    return PRODUCTS_DATA[id] || null;
}
