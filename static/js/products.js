/**
 * 諾雕 ALE - 產品資料庫 (Products Data)
 * 供靜態網頁 (GitHub Pages) 前端即時渲染與訂單計算使用
 */
const PRODUCTS_DATA = {
    'priceboard': {
        id: 'priceboard',
        name: '【展會專用】客製化雷雕價目牌',
        price: 'NT$ 200',
        unit_price: 200,
        original_price: 'NT$ 350',
        discount_label: '先行者優惠 (Early Access)',
        desc: '同人展 (FF/CWT) 與市集攤位必備！告別軟爛紙張，用白橡木紋雷雕打造專業門面。防潑水、高對比、支援 QR Code 雕刻，不僅耐用更能吸引目光。',
        specs: [
            '用途：同人展 (FF/CWT) / 創意市集 / 商業櫃台',
            '尺寸：30cm x 20cm',
            '厚度：2.85 mm (硬挺不彎曲)',
            '材質：防潑水白橡木紋植纖板',
            '特色：工業級耐用 / 高對比雷雕 / 支援 QR Code'
        ],
        image: 'priceboard_mockup.png',
        images: ['priceboard_mockup.png'],
        variants: [
            { name: '標準直立款', price: 'NT$ 200', unit_price: 200 },
            { name: '附壓克力專用底座款', price: 'NT$ 250', unit_price: 250 }
        ],
        addons: [
            { name: '加購木質畫架', price: '+NT$ 79', unit_price: 79, desc: '專用立架，穩固支撐 (搭配價)' }
        ],
        is_recommended: true,
        is_popular: true,
        is_out_of_stock: false
    },
    'coaster': {
        id: 'coaster',
        name: '軟木杯墊',
        price: 'NT$ 150 起',
        unit_price: 150,
        original_price: null,
        discount_label: null,
        desc: '天然軟木材質，厚實堅固且具備優異的隔熱防燙效果。獨特的溢水吸收特性，讓桌面時刻保持乾爽。提供多種形狀與功能款可供選擇。',
        specs: [
            '特色：天然軟木 / 溢水吸收 / 隔熱防燙',
            '【凹槽款】直徑 100mm / 厚度 10mm',
            '【圓形款】直徑 98mm / 厚度 5mm',
            '【方形款】直徑 98mm / 厚度 5mm'
        ],
        image: 'coaster_default.png',
        images: ['coaster_default.png', 'coaster_groove.png', 'coaster_round.png', 'coaster_square.png'],
        variants: [
            { name: '凹槽款 (直徑100mm/厚10mm)', image: 'coaster_groove.png', price: 'NT$ 150', unit_price: 150 },
            { name: '圓形款 (直徑98mm/厚5mm)', image: 'coaster_round.png', price: 'NT$ 150', unit_price: 150 },
            { name: '方形款 (直徑98mm/厚5mm)', image: 'coaster_square.png', price: 'NT$ 150', unit_price: 150 }
        ],
        addons: [],
        is_recommended: true,
        is_popular: true,
        is_out_of_stock: false
    },
    'keychain': {
        id: 'keychain',
        name: '皮革鑰匙圈',
        price: 'NT$ 150 起',
        unit_price: 150,
        original_price: null,
        discount_label: null,
        desc: '質感皮革鑰匙圈，搭配精緻縫線與金屬扣環。可客製化刻印名字或紀念日期，展現個人獨特品味。',
        specs: [
            '尺寸：10cm x 2cm',
            '材質：PU皮革 / 合金',
            '工藝：高解析雷射雕刻'
        ],
        image: 'leather_keychain.jpg',
        images: ['leather_keychain.jpg'],
        variants: [
            { name: '曜石黑色', price: 'NT$ 150', unit_price: 150 },
            { name: '復古棕色', price: 'NT$ 150', unit_price: 150 }
        ],
        addons: [],
        is_recommended: true,
        is_popular: true,
        is_out_of_stock: false
    },
    'stand': {
        id: 'stand',
        name: '壓克力立牌',
        price: 'NT$ 450 起',
        unit_price: 450,
        original_price: null,
        discount_label: null,
        desc: '高透光壓克力精密切割與雕刻，適合動漫角色、偶像應援或展示名牌。邊緣鑽石拋光，質感晶瑩剔透。',
        specs: [
            '尺寸：可客製 (最大 20cm)',
            '厚度：3mm / 5mm 光學級壓克力',
            '底座：附可拆卸卡扣專用底座'
        ],
        image: 'mat_acrylic_engraved.png',
        images: ['mat_acrylic_engraved.png', 'mat_acrylic_raw.png'],
        variants: [
            { name: '3mm 光學標準款', price: 'NT$ 450', unit_price: 450 },
            { name: '5mm 重磅厚板款', price: 'NT$ 550', unit_price: 550 }
        ],
        addons: [],
        is_recommended: false,
        is_popular: false,
        is_out_of_stock: false
    },
    'tag': {
        id: 'tag',
        name: '寵物名牌 / 金屬吊牌',
        price: 'NT$ 200 起',
        unit_price: 200,
        original_price: null,
        discount_label: null,
        desc: '精緻金屬與皮革材質，耐用輕量。深層雕刻毛孩名字與聯絡電話，字跡清晰永久不磨損。',
        specs: [
            '尺寸：約 3cm x 2cm',
            '材質：304不鏽鋼 / 航太鋁合金 / 植鞣革',
            '工藝：深層光纖雷雕 (不易磨損)'
        ],
        image: 'mat_metal_engraved_v2.png',
        images: ['mat_metal_engraved_v2.png', 'mat_metal_raw_v2.png'],
        variants: [
            { name: '304 不鏽鋼鏡面款', price: 'NT$ 200', unit_price: 200 },
            { name: '植鞣皮革雙面縫線款', price: 'NT$ 250', unit_price: 250 }
        ],
        addons: [],
        is_recommended: false,
        is_popular: false,
        is_out_of_stock: false
    },
    'cardcheck': {
        id: 'cardcheck',
        name: '金屬名片 / 工業銘版',
        price: 'NT$ 300 起',
        unit_price: 300,
        original_price: null,
        discount_label: null,
        desc: '陽極處理金屬鋁卡或不鏽鋼，呈現極致俐落的賽博龐克與工業美學。適合商務名片或器材銘牌使用。',
        specs: [
            '尺寸：8.5cm x 5.4cm (標準名片規格)',
            '材質：陽極鋁合金 / 霧面拉絲不鏽鋼',
            '配色：深邃黑 / 鈦金銀 / 科技金'
        ],
        image: 'mat_metal_raw_v2.png',
        images: ['mat_metal_raw_v2.png', 'mat_metal_engraved.png'],
        variants: [
            { name: '深邃黑 (陽極鋁)', price: 'NT$ 300', unit_price: 300 },
            { name: '鈦金銀 (拉絲鋼)', price: 'NT$ 300', unit_price: 300 },
            { name: '科技金 (陽極鋁)', price: 'NT$ 300', unit_price: 300 }
        ],
        addons: [],
        is_recommended: false,
        is_popular: false,
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
