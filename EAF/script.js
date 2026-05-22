// ==================== 选型规则配置 ====================
// 当前选型规则：'ac' = 按空调箱选型（旧规则），'fc' = 按风机盘管选型（新规则）
let currentSelectionRule = 'ac';

// 设置选型规则
function onSelectionRuleChange() {
    const select = document.getElementById('selectionRuleSelect');
    currentSelectionRule = select.value;
    
    // 更新选型说明文本
    updateSelectionExplanation();
    
    // 重新计算所有行
    recalculateAllBatchRows();
}

// ==================== 配件数据配置 ====================
// 默认的配件数据（风机盘管场景）
const defaultFcAccessories = [
    { id: 'eaf1-if', model: 'EAF1-IF', name: '内法兰固定件_A1型', config: '吊顶暗装净高>90mm<br>裸顶明装净高>140mm', price: 105, note: '配合 EAF 正抽式安装使用；<br>单台 EAF 必须选配法兰固定件 (EAF-IF/EAF-OF)1 套<br>（本价格为 1 套，内含固定件 4 个）', category: 'fc', styles: ['1'], visible: true, quantity: 0, backgroundColor: 'green' },
    { id: 'eaf1-of', model: 'EAF1-OF', name: '外法兰固定件_B1型', config: '吊顶暗装净高>90mm<br>裸顶明装净高>140mm', price: 92, note: '配合 EAF 正抽式安装使用；<br>单台 EAF 必须选配法兰固定件 (EAF-IF/EAF-OF)1 套<br>（本价格为 1 套，内含固定件 4 个）', category: 'fc', styles: ['1'], visible: true, quantity: 0, backgroundColor: 'lightBlue' },
    { id: 'eaf2-if', model: 'EAF2-IF', name: '内法兰固定件_A2型', config: '吊顶暗装净高>90mm<br>裸顶明装净高>140mm', price: 105, note: '配合 EAF 正抽式安装使用；<br>单台 EAF 必须选配法兰固定件 (EAF-IF/EAF-OF)1 套<br>（本价格为 1 套，内含固定件 4 个）', category: 'fc', styles: ['2'], visible: true, quantity: 0, backgroundColor: 'green' },
    { id: 'eaf2-of', model: 'EAF2-OF', name: '外法兰固定件_B2型', config: '吊顶暗装净高>90mm<br>裸顶明装净高>140mm', price: 92, note: '配合 EAF 正抽式安装使用；<br>单台 EAF 必须选配法兰固定件 (EAF-IF/EAF-OF)1 套<br>（本价格为 1 套，内含固定件 4 个）', category: 'fc', styles: ['2'], visible: true, quantity: 0, backgroundColor: 'lightBlue' },
    { id: 'afs003', model: 'AFS003', name: '风动开关', config: '/', price: 420, note: '单台 EAF 用作 FFC 时，必须配置 1 个风动开关', category: 'fc', styles: ['1', '2'], visible: true, quantity: 0, backgroundColor: 'gray' },
    { id: 'mft-20-5-fc', model: 'MFT-20-5', name: '密封条', config: '材质：PE密封棉；阻燃：符合B1级<br>规格(宽x厚)：20x5mm；长度：10米/卷', price: 118, note: '我司核算为最低用量，现场建议适当多备。', category: 'fc', styles: ['1', '2'], visible: true, quantity: 0, backgroundColor: 'white' }
];

// 默认的配件数据（空调箱场景）
const defaultAhuAccessories = [
    { id: 'sus301-2', model: 'EAF-SWF-2', name: 'EAF-2英寸钢丝扣', config: 'SUS301', price: 14, note: '空调箱田字格框架内正抽式安装，如现场有则无需选购。<br>一个EAF需选配4根，本价格仅包括1根钢丝扣。', category: 'ahu', styles: ['2'], visible: true, quantity: 0, backgroundColor: 'white' },
    { id: 'sus301-4', model: 'EAF-SWF-4', name: 'EAF-4英寸钢丝扣', config: 'SUS301', price: 15, note: '空调箱田字格框架内正抽式安装，如现场有则无需选购。<br>一个EAF需选配4根，本价格仅包括1根钢丝扣。', category: 'ahu', styles: ['4home', '4biz'], visible: true, quantity: 0, backgroundColor: 'white' },
    { id: 'dc5525', model: 'DC5525 Power Cord', name: 'EAF 1米连接线', config: '1m', price: 40, note: '单台 EAF 卧装和每层 EAF 均各配 1 根连接线', category: 'ahu', styles: ['2', '4home', '4biz', '5'], visible: true, quantity: 0, backgroundColor: 'gray' },
    { id: 'eaf-box-c', model: 'EAF-BOX-C', name: 'EAF-BOX 接线盒', config: '/', price: 120, note: '中国经济款，需要搭配电源适配器EAF-PS05M-60W使用', category: 'ahu', styles: ['1', '2', '4home', '4biz', '5'], visible: true, quantity: 0, backgroundColor: 'green' },
    { id: 'eaf-ps05m-60w', model: 'EAF-PS05M-60W', name: 'DC12V电源适配器', config: '引线式 100-240V, 50/60Hz', price: 235, note: '全球通用', category: 'ahu', styles: ['1', '2', '4home', '4biz', '5'], visible: true, quantity: 0, backgroundColor: 'green' },
    { id: 'eaf-ps03m-60w', model: 'EAF-PS03M-60W', name: 'DC12V电源适配器', config: '插头式（美标三叉）100-240V, 50/60Hz', price: 200, note: '美国专用，用完不备货', category: 'ahu', styles: ['1', '2', '4home'], visible: true, quantity: 0, backgroundColor: 'green' },
    { id: 'eaf-box1-dc12v', model: 'EAF-BOX1-DC12V', name: 'EAF-BOX 电控箱', config: '/', price: 5650, note: '适用于 EAF2"', category: 'ahu', styles: ['2'], visible: true, quantity: 0, backgroundColor: 'lightBlue' },
    { id: 'eaf-box1-dc24v', model: 'EAF-BOX1-DC24V', name: 'EAF-BOX 电控箱', config: '/', price: 5650, note: '适用于 EAF4"+5"', category: 'ahu', styles: ['4home', '4biz', '5'], visible: true, quantity: 0, backgroundColor: 'lightBlue' },
    { id: 'mft-20-5-ahu', model: 'MFT-20-5', name: '密封条', config: '材质：PE密封棉；阻燃：符合B1级<br>规格(宽x厚)：20x5mm；长度：10米/卷', price: 118, note: '我司核算为最低用量，现场建议适当多备。', category: 'ahu', styles: ['1', '2', '4home', '4biz', '5'], visible: true, quantity: 0, backgroundColor: 'white' }
];

// 默认的配件数据（美式风管机场景）
const defaultUsDuctAccessories = [
    { id: 'usd-ps05m-60w', model: 'EAF-PS05M-60W', name: 'DC12V电源适配器', config: '引线式 100-240V, 50/60Hz', price: 235, note: '全球通用', category: 'usDuct', styles: ['1', '2', '4home'], visible: true, quantity: 0, backgroundColor: 'green' },
    { id: 'usd-ps03m-60w', model: 'EAF-PS03M-60W', name: 'DC12V电源适配器', config: '插头式（美标三叉）100-240V, 50/60Hz', price: 200, note: '美国专用，用完不备货', category: 'usDuct', styles: ['1', '2', '4home'], visible: true, quantity: 0, backgroundColor: 'green' },
    { id: 'usd-mft-20-5', model: 'MFT-20-5', name: '密封条', config: '材质：PE密封棉；阻燃：符合B1级<br>规格(宽x厚)：20x5mm；长度：10米/卷', price: 118, note: '我司核算为最低用量，现场建议适当多备。', category: 'usDuct', styles: ['1', '2', '4home'], visible: true, quantity: 0, backgroundColor: 'white' }
];

// 全局配件数据变量
let fcAccessories = [];
let ahuAccessories = [];
let usDuctAccessories = [];

// 更新尺寸范围说明
function updateSizeRange() {
    const rangeContent = document.getElementById('rangeContent');
    if (!rangeContent) return;
    
    // 获取等价关系数据（从localStorage读取）
    const equivalentMap = JSON.parse(localStorage.getItem('equivalentMap') || '{}');
    
    // 获取所有标准英寸值和对应的mm值
    const inchValues = Object.keys(equivalentMap).filter(key => !isNaN(parseInt(key)));
    const mmValues = inchValues.map(key => parseInt(equivalentMap[key]));
    
    // 计算最小和最大尺寸
    const minInch = inchValues.length > 0 ? Math.min(...inchValues.map(v => parseInt(v))) : 0;
    const maxInch = inchValues.length > 0 ? Math.max(...inchValues.map(v => parseInt(v))) : 0;
    const minMm = mmValues.length > 0 ? Math.min(...mmValues) : 0;
    const maxMm = mmValues.length > 0 ? Math.max(...mmValues) : 0;
    
    // 定义各款式的尺寸范围规则
    const styleRanges = {
        '1': { widthMin: minInch, widthMax: maxInch, heightMin: 12, heightMax: Math.min(32, maxInch) },
        '2': { widthMin: minInch, widthMax: maxInch, heightMin: 12, heightMax: maxInch },
        '4': { widthMin: Math.max(12, minInch), widthMax: maxInch, heightMin: Math.max(12, minInch), heightMax: maxInch },
        '5': { widthMin: Math.max(12, minInch), widthMax: maxInch, heightMin: Math.max(12, minInch), heightMax: maxInch }
    };
    
    let html = '';
    for (const [style, range] of Object.entries(styleRanges)) {
        const widthMinMm = equivalentMap[range.widthMin.toString().padStart(2, '0')] || range.widthMin * 25.4;
        const widthMaxMm = equivalentMap[range.widthMax.toString().padStart(2, '0')] || range.widthMax * 25.4;
        const heightMinMm = equivalentMap[range.heightMin.toString().padStart(2, '0')] || range.heightMin * 25.4;
        const heightMaxMm = equivalentMap[range.heightMax.toString().padStart(2, '0')] || range.heightMax * 25.4;
        
        html += `<div class="range-item">EAF${style}"：宽${range.widthMin.toString().padStart(2, '0')}~${range.widthMax.toString().padStart(2, '0')}（${Math.round(widthMinMm)}~${Math.round(widthMaxMm)}mm）、高${range.heightMin.toString().padStart(2, '0')}~${range.heightMax.toString().padStart(2, '0')}（${Math.round(heightMinMm)}~${Math.round(heightMaxMm)}mm）</div>`;
    }
    
    rangeContent.innerHTML = html;
}

// 更新选型说明文本
function updateSelectionExplanation() {
    const explanationContent = document.querySelector('.selection-explanation .explanation-content');
    if (explanationContent) {
        const baseText = '输入现场介质过滤器的尺寸（mm）和数量，自动匹配对应的EAF型号。';
        if (currentSelectionRule === 'ac') {
            explanationContent.innerHTML = baseText + '<br>' + '空调箱选型（降档匹配法）<br>按实际安装尺寸匹配标准规格，只要实际尺寸大于或等于某一档标准值，就选用该标准对应的型号。<br>例：尺寸为600mm×495mm，因600≥592（对应型号 24）、495≥490（对应型号 20），故选用 EAF2420。';
        } else if (currentSelectionRule === 'fc') {
            explanationContent.innerHTML = baseText + '<br>' + '风机盘管选型（就近匹配法）<br>按实际安装尺寸匹配标准规格，优先选用数值最接近的标准型号；若实际尺寸正好卡在两档标准值中间，则取较小档。<br>例：尺寸为590mm×495mm，因590最接近 592（对应型号 24）、495最接近490（对应型号 20），故选用 EAF2420。';
        } else {
            explanationContent.innerHTML = baseText + '<br>' + '非标选型（升档匹配法）<br>实际安装尺寸不对应标准规格时，统一向上取整到最近的大一档标准值，再选用对应型号。<br>例：尺寸为489mm×491mm，因489mm上一档490（对应型号 20）、491mm上一档515（对应型号 21），故选用 EAF2021。<br>非标选型，非标价格按升档报价，产品按非标制作。';
        }
    }
}

// 重新计算所有批量行
function recalculateAllBatchRows() {
    const tbody = document.querySelector('#batchTable tbody');
    const rows = tbody.querySelectorAll('tr:not(.empty-row)');
    
    rows.forEach((row) => {
        const widthInput = row.querySelector('input.width-input');
        const heightInput = row.querySelector('input.height-input');
        const quantityInput = row.querySelector('input.quantity-input');
        
        if (widthInput && heightInput && quantityInput) {
            updateBatchRow(row);
        }
    });
    
    calculateBatchTotals();
}

// ==================== 语言国际化配置 ====================
// 多语言支持对象，包含中文、英文、法语、德语、西班牙语、日语、韩语、葡萄牙语、意大利语、俄语、阿拉伯语
// 每个语言对象包含系统中所有需要显示的文本字符串
const languages = {
    // 中文语言配置
    zh: {
        title: 'EAF自动报价查询系统',                 // 系统标题
        subtitle: '选择参数，快速查询产品报价',        // 系统副标题
        warning_tip: '⚠️ 官方温馨提示：EAF2016与EAF1620为两款完全不同的产品，请勿混淆选型及使用。',  // 温馨提示
        query_single_quote: '🔍 查询单个报价',         // 查询单个报价按钮
        query_batch_quote: '📦 批量查询报价',          // 批量查询报价按钮
        admin: '🔧 管理员基础数据管理',              // 管理员按钮文本
        admin_show: '🔧 查看数据管理',               // 显示管理员面板按钮
        admin_hide: '🔧 隐藏数据管理',               // 隐藏管理员面板按钮
        product_list_show: '📋 查看详细列表',         // 显示产品列表按钮
        product_list_hide: '📋 隐藏详细列表',         // 隐藏产品列表按钮
        product_list_title: '📋 产品详细列表',        // 产品列表标题
        export_excel: '📥 导出Excel',               // 导出Excel按钮
        all: '全部',                               // 全部选项
        not_selected: '未选择',                     // 未选择提示
        filter_condition: '筛选条件',               // 筛选条件标签
        data_not_loaded: '数据未加载',               // 数据未加载提示
        download_template: '📥 下载模板',           // 下载模板按钮
        upload_data: '📤 上传数据',                 // 上传数据按钮
        save_all: '💾 保存所有数据',               // 保存所有数据按钮
        reset: '🔄 恢复默认值',                     // 恢复默认值按钮
        width: '宽度',                             // 宽度标签
        height: '高度',                            // 高度标签
        style: '款式',                             // 款式标签
        style_1: '1"',                             // 1英寸款式
        style_2: '2"',                             // 2英寸款式
        style_4home: '4"家用',                      // 4英寸家用款式
        style_4biz: '4"商用',                       // 4英寸商用款式
        style_5: '5"',                             // 5英寸款式
        brand: '品牌',                             // 品牌标签
        currency: '币别',                          // 货币类型标签
        currency_cny: '本币(人民币)',               // 人民币选项
        currency_usd: '外币(如美元)',               // 外币选项
        exchange_rate: '汇率',                      // 汇率标签
        confirm_query: '确认查询',                  // 确认查询按钮
        query_result: '查询结果',                    // 查询结果标题
        empty_state: '请选择参数并点击确认查询',      // 空状态提示
        calculation_info: '计算说明',               // 计算说明标签
        product_model: '产品型号',                  // 产品型号标签
        air_flow: '标示风量',                       // 标示风量标签
        dimensions: '外形尺寸',                     // 外形尺寸标签
        net_weight: '产品净重',                     // 产品净重标签
        single_pack: '单台包装尺寸(L*W*H)mm',        // 单台包装尺寸标签
        gross_weight_1: '毛重（KG）（1台/箱）',     // 单台毛重标签
        five_pack: '五台包装尺寸(L*W*H)mm',         // 五台包装尺寸标签
        gross_weight_5: '毛重（KG）（5台/箱）',     // 五台毛重标签
        price: '面价',                             // 面价标签
        outer_dimension: '外形尺寸(L*H*D)mm',       // 外形尺寸(列表)标签
        net_weight_kg: '产品净重(KG)',              // 产品净重(列表)标签
        single_pack_dimension: '单台包装尺寸(L*W*H)mm',  // 单台包装尺寸(列表)标签
        gross_weight_kg_1: '毛重(KG)(1台/箱)',      // 单台毛重(列表)标签
        five_pack_dimension: '五台包装尺寸(L*W*H)mm',     // 五台包装尺寸(列表)标签
        gross_weight_kg_5: '毛重(KG)(5台/箱)',      // 五台毛重(列表)标签
        air_flow_m3h: '标示风量(m³/h)',            // 标示风量(列表)标签
        equivalent_title: '数值等价关系（输入值 → 实际mm值）',  // 数值等价关系标题
        style_config_title: '款式参数配置',          // 款式参数配置标题
        price_title: '面价数据管理',                 // 面价数据管理标题
        fc_accessory_title: '风机盘管配件管理',      // 风机盘管配件管理标题
        ahu_accessory_title: '空调箱配件管理',       // 空调箱配件管理标题
        us_duct_accessory_title: '美式风管机配件管理', // 美式风管机配件管理标题

        save_success: '✓ 所有数据已保存',           // 保存成功提示
        reset_success: '✓ 已恢复默认值',             // 恢复默认值成功提示
        download_success: '✓ 模板下载成功',         // 下载成功提示
        download_error: '✗ 下载模板失败，请重试',    // 下载失败提示
        input_value: '输入值',                      // 输入值标签
        mm_value: '实际mm值',                      // 实际mm值标签
        style_code: '款式代码',                     // 款式代码标签
        style_name: '款式名称',                     // 款式名称标签
        thickness: '厚度(mm)',                     // 厚度标签
        density_factor: '密度系数',                 // 密度系数标签
        single_pack_thickness: '1台包装厚度',        // 1台包装厚度标签
        five_pack_thickness: '5台包装厚度',         // 5台包装厚度标签
        suffix: '后缀',                            // 后缀标签
        remark: '备注',                            // 备注标签
        height_width: '高度\\宽度',                 // 高度宽度标签
        no_five_pack: '无五台包装',                 // 无五台包装提示
        no_part_number: '无零件号',                  // 无零件号提示
        part_number: '零件号',                      // 零件号标签
        unavailable: '无法生产',                   // 无法生产提示
        // 表格列标题
        operation: '操作',                         // 操作列
        product_model_short: '产品型号',            // 产品型号列
        product_name: '产品名称',                   // 产品名称列
        standard_config: '标准配置',                // 标准配置列
        price_col: '价格',                         // 价格列
        compatible_style: '适配款式',               // 适配款式列
        background_color: '背景色',                // 背景色列
        remarks: '备注',                           // 备注列
        add_accessory: '+ 添加配件',               // 添加配件按钮
        delete: '删除',                             // 删除按钮
        // 计算公式说明
        calc_product_model: '产品型号：EAF+宽度+高度+后缀（1"：1M-E；2"：2M-E；4"家用：4M-E；4"商用：4MA-E；5"：5MB-E）',
        calc_air_flow: '标示风量：4"/5"款式=MROUND(宽度×25.4×高度×25.4×风速2.54×3600/1000000, 10)；1"/2"款式=MROUND((宽度×25.4-13-30)×(高度×25.4-13-65)×风速1.5×3600/1000000×系数1.018, 10)',
        calc_dimensions: '外形尺寸：宽度(实际mm值)×高度(实际mm值)×厚度(实际mm值)',
        calc_net_weight: '产品净重：宽度(实际mm值)×高度(实际mm值)×所对应款式的密度系数值/1000000',
        calc_single_pack: '单台包装尺寸(L*W*H)mm：L=ROUND((宽度mm+65)/5,0)×5，W=对应款式的1台包装厚度，H=ROUND((高度mm+65)/5,0)×5',
        calc_gross_weight_1: '毛重（KG）（1台/箱）：产品净重×1.3',
        calc_five_pack: '五台包装尺寸(L*W*H)mm：L=ROUND((宽度mm+65)/5,0)×5，W=对应款式的5台包装厚度，H=ROUND((高度mm+65)/5,0)×5',
        calc_gross_weight_5: '毛重（KG）（5台/箱）：毛重（KG）（1台/箱）×5×1.1'
    },
    // 英文语言配置
    en: {
        title: 'EAF Automatic Quotation Query System',     // System title
        subtitle: 'Select parameters to quickly query product quotations',  // System subtitle
        warning_tip: '⚠️ Official Reminder: EAF2016 and EAF1620 are two completely different products. Please do not confuse them when selecting and using.',  // Warning tip
        query_single_quote: '🔍 Query Single Quote',      // Query single quote button
        query_batch_quote: '📦 Batch Query Quote',         // Batch query quote button
        admin: '🔧 Admin Basic Data Management',           // Admin button text
        admin_show: '🔧 Show Data Management',            // Show admin panel button
        admin_hide: '🔧 Hide Data Management',            // Hide admin panel button
        product_list_show: '📋 Show Product List',        // Show product list button
        product_list_hide: '📋 Hide Product List',        // Hide product list button
        product_list_title: '📋 Product Details List',    // Product list title
        export_excel: '📥 Export Excel',                  // Export Excel button
        all: 'All',                                       // All option
        not_selected: 'Not Selected',                     // Not selected hint
        filter_condition: 'Filter Conditions',             // Filter condition label
        data_not_loaded: 'Data not loaded',               // Data not loaded hint
        download_template: '📥 Download Template',        // Download template button
        upload_data: '📤 Upload Data',                    // Upload data button
        save_all: '💾 Save All Data',                    // Save all data button
        reset: '🔄 Reset to Default',                     // Reset to default button
        width: 'Width',                                   // Width label
        height: 'Height',                                 // Height label
        style: 'Style',                                   // Style label
        style_1: '1"',                                    // 1 inch style
        style_2: '2"',                                    // 2 inch style
        style_4home: '4" Home',                           // 4 inch home style
        style_4biz: '4" Business',                        // 4 inch business style
        style_5: '5"',                                    // 5 inch style
        brand: 'Brand',                                   // Brand label
        currency: 'Currency',                             // Currency label
        currency_cny: 'CNY (Chinese Yuan)',              // CNY option
        currency_usd: 'Foreign Currency (e.g. USD)',      // Foreign currency option
        exchange_rate: 'Exchange Rate',                   // Exchange rate label
        confirm_query: 'Confirm Query',                   // Confirm query button
        query_result: 'Query Result',                     // Query result title
        empty_state: 'Please select parameters and click Confirm Query',  // Empty state hint
        calculation_info: 'Calculation Instructions',     // Calculation instructions label
        product_model: 'Product Model',                   // Product model label
        air_flow: 'Marked Air Flow',                      // Marked air flow label
        dimensions: 'Dimensions',                         // Dimensions label
        net_weight: 'Net Weight',                         // Net weight label
        single_pack: 'Single Pack Size (L*W*H)mm',        // Single pack size label
        gross_weight_1: 'Gross Weight (KG) (1 unit/box)', // Single pack gross weight label
        five_pack: 'Five Pack Size (L*W*H)mm',           // Five pack size label
        gross_weight_5: 'Gross Weight (KG) (5 units/box)', // Five pack gross weight label
        part_number: 'Part Number',                       // Part number label
        price: 'List Price',                              // List price label
        outer_dimension: 'Outer Dimensions (L*H*D)mm',    // Outer dimensions label (list)
        net_weight_kg: 'Net Weight (KG)',                 // Net weight label (list)
        single_pack_dimension: 'Single Pack Size (L*W*H)mm', // Single pack size label (list)
        gross_weight_kg_1: 'Gross Weight (KG) (1 unit/box)', // Single pack gross weight label (list)
        five_pack_dimension: 'Five Pack Size (L*W*H)mm',    // Five pack size label (list)
        gross_weight_kg_5: 'Gross Weight (KG) (5 units/box)', // Five pack gross weight label (list)
        air_flow_m3h: 'Marked Air Flow (m³/h)',           // Marked air flow label (list)
        equivalent_title: 'Value Equivalence (Input → Actual mm)',  // Value equivalence title
        style_config_title: 'Style Parameter Configuration', // Style config title
        price_title: 'Price Data Management',             // Price data management title
        fc_accessory_title: 'FC Accessory Management',    // FC accessory management title
        ahu_accessory_title: 'AHU Accessory Management',  // AHU accessory management title
        // Table column headers
        operation: 'Operation',                           // Operation column
        product_model_short: 'Model',                     // Product model column
        product_name: 'Product Name',                     // Product name column
        standard_config: 'Standard Config',               // Standard config column
        price_col: 'Price',                               // Price column
        compatible_style: 'Compatible Style',             // Compatible style column
        background_color: 'Background',                   // Background color column
        remarks: 'Remarks',                               // Remarks column
        add_accessory: '+ Add Accessory',                 // Add accessory button
        delete: 'Delete',                                 // Delete button
        save_success: '✓ All data saved',                 // Save success hint
        reset_success: '✓ Reset to default',              // Reset success hint
        download_success: '✓ Template downloaded successfully', // Download success hint
        download_error: '✗ Failed to download template, please retry', // Download error hint
        input_value: 'Input Value',                       // Input value label
        mm_value: 'Actual mm Value',                      // Actual mm value label
        style_code: 'Style Code',                         // Style code label
        style_name: 'Style Name',                         // Style name label
        thickness: 'Thickness (mm)',                      // Thickness label
        density_factor: 'Density Factor',                 // Density factor label
        single_pack_thickness: 'Single Pack Thickness',    // Single pack thickness label
        five_pack_thickness: 'Five Pack Thickness',       // Five pack thickness label
        suffix: 'Suffix',                                 // Suffix label
        remark: 'Remark',                                 // Remark label
        height_width: 'Height\\Width',                    // Height width label
        no_five_pack: 'No five-unit packaging',           // No five pack hint
        no_part_number: 'No part number',                 // No part number hint
        unavailable: 'Not Available',                    // Unavailable hint
        // Calculation instructions
        calc_product_model: 'Product Model: EAF+Width+Height+Suffix (1": 1M-E; 2": 2M-E; 4" Home: 4M-E; 4" Business: 4MA-E; 5": 5MB-E)',
        calc_air_flow: 'Marked Air Flow: 4"/5" styles=MROUND(Width×25.4×Height×25.4×Air Speed 2.54×3600/1000000, 10); 1"/2" styles=MROUND((Width×25.4-13-30)×(Height×25.4-13-65)×Air Speed 1.5×3600/1000000×Factor 1.018, 10)',
        calc_dimensions: 'Dimensions: Width(actual mm)×Height(actual mm)×Thickness(actual mm)',
        calc_net_weight: 'Net Weight: Width(actual mm)×Height(actual mm)×Density Factor/1000000',
        calc_single_pack: 'Single Pack Size(L*W*H)mm: L=ROUND((Width mm+65)/5,0)×5, W=Single pack thickness, H=ROUND((Height mm+65)/5,0)×5',
        calc_gross_weight_1: 'Gross Weight (KG) (1 unit/box): Net Weight×1.3',
        calc_five_pack: 'Five Pack Size(L*W*H)mm: L=ROUND((Width mm+65)/5,0)×5, W=Five pack thickness, H=ROUND((Height mm+65)/5,0)×5',
        calc_gross_weight_5: 'Gross Weight (KG) (5 units/box): Gross Weight (KG) (1 unit/box)×5×1.1'
    },
    // 法语语言配置
    fr: {
        title: 'EAF Système de requête de devis automatique',
        subtitle: 'Sélectionnez les paramètres pour rechercher rapidement les devis de produits',
        warning_tip: '⚠️ Avertissement officiel: EAF2016 et EAF1620 sont deux produits complètement différents. Veuillez ne pas les confondre lors de la sélection et de l\'utilisation.',
        query_single_quote: '🔍 Demander un devis',        // 查询单个报价按钮
        query_batch_quote: '📦 Demander des devis groupés', // 批量查询报价按钮
        admin: '🔧 Gestion des données de base de l\'administrateur',
        admin_show: '🔧 Afficher la gestion des données',
        admin_hide: '🔧 Cacher la gestion des données',
        product_list_show: '📋 Afficher la liste détaillée',
        product_list_hide: '📋 Cacher la liste détaillée',
        product_list_title: '📋 Liste détaillée des produits',
        export_excel: '📥 Exporter Excel',
        all: 'Tout',
        not_selected: 'Non sélectionné',
        filter_condition: 'Conditions de filtrage',
        data_not_loaded: 'Données non chargées',
        download_template: '📥 Télécharger le modèle',
        upload_data: '📤 Téléverser les données',
        save_all: '💾 Enregistrer toutes les données',
        reset: '🔄 Réinitialiser par défaut',
        width: 'Largeur',
        height: 'Hauteur',
        style: 'Style',
        style_1: '1"',
        style_2: '2"',
        style_4home: '4" Maison',
        style_4biz: '4" Professionnel',
        style_5: '5"',
        brand: 'Marque',
        currency: 'Devise',
        currency_cny: 'CNY (Yuan chinois)',
        currency_usd: 'Devise étrangère (ex: USD)',
        exchange_rate: 'Taux de change',
        confirm_query: 'Confirmer la requête',
        query_result: 'Résultat de la requête',
        empty_state: 'Veuillez sélectionner les paramètres et cliquer sur Confirmer',
        calculation_info: 'Instructions de calcul',
        product_model: 'Modèle de produit',
        air_flow: 'Débit d\'air marqué',
        dimensions: 'Dimensions',
        net_weight: 'Poids net',
        single_pack: 'Taille d\'emballage unique (L*W*H)mm',
        gross_weight_1: 'Poids brut (KG) (1 unité/boîte)',
        five_pack: 'Taille d\'emballage cinq unités (L*W*H)mm',
        gross_weight_5: 'Poids brut (KG) (5 unités/boîte)',
        part_number: 'Numéro de pièce',
        price: 'Prix de liste',
        outer_dimension: 'Dimensions extérieures (L*H*D)mm',
        net_weight_kg: 'Poids net (KG)',
        single_pack_dimension: 'Taille d\'emballage unique (L*W*H)mm',
        gross_weight_kg_1: 'Poids brut (KG) (1 unité/boîte)',
        five_pack_dimension: 'Taille d\'emballage cinq unités (L*W*H)mm',
        gross_weight_kg_5: 'Poids brut (KG) (5 unités/boîte)',
        air_flow_m3h: 'Débit d\'air marqué (m³/h)',
        equivalent_title: 'Équivalence de valeur (Entrée → mm réel)',
        style_config_title: 'Configuration des paramètres de style',
        price_title: 'Gestion des données de prix',
        fc_accessory_title: 'Gestion des accessoires FC',
        ahu_accessory_title: 'Gestion des accessoires AHU',
        // Table column headers
        operation: 'Opération',                           // Operation column
        product_model_short: 'Modèle',                    // Product model column
        product_name: 'Nom du produit',                   // Product name column
        standard_config: 'Configuration standard',        // Standard config column
        price_col: 'Prix',                               // Price column
        compatible_style: 'Style compatible',             // Compatible style column
        background_color: 'Arrière-plan',                 // Background color column
        remarks: 'Remarques',                             // Remarks column
        add_accessory: '+ Ajouter accessoire',            // Add accessory button
        delete: 'Supprimer',                               // Delete button
        save_success: '✓ Toutes les données enregistrées',
        reset_success: '✓ Réinitialisé par défaut',
        download_success: '✓ Modèle téléchargé avec succès',
        download_error: '✗ Échec du téléchargement du modèle, veuillez réessayer',
        input_value: 'Valeur d\'entrée',
        mm_value: 'Valeur mm réelle',
        style_code: 'Code style',
        style_name: 'Nom du style',
        thickness: 'Épaisseur (mm)',
        density_factor: 'Facteur de densité',
        single_pack_thickness: 'Épaisseur d\'emballage unique',
        five_pack_thickness: 'Épaisseur d\'emballage cinq unités',
        suffix: 'Suffixe',
        remark: 'Remarque',
        height_width: 'Hauteur\\Largeur',
        no_five_pack: 'Pas d\'emballage de cinq unités',
        no_part_number: 'Aucun numéro de pièce',
        unavailable: 'Non disponible',
        calc_product_model: 'Modèle de produit: EAF+Largeur+Hauteur+Suffixe (1": 1M-E; 2": 2M-E; 4" Maison: 4M-E; 4" Professionnel: 4MA-E; 5": 5MB-E)',
        calc_air_flow: 'Débit d\'air marqué: Styles 4"/5"=MROUND(Largeur×25.4×Hauteur×25.4×Vitesse 2.54×3600/1000000, 10); Styles 1"/2"=MROUND((Largeur×25.4-13-30)×(Hauteur×25.4-13-65)×Vitesse 1.5×3600/1000000×Facteur 1.018, 10)',
        calc_dimensions: 'Dimensions: Largeur(mm réel)×Hauteur(mm réel)×Épaisseur(mm réel)',
        calc_net_weight: 'Poids net: Largeur(mm réel)×Hauteur(mm réel)×Facteur de densité/1000000',
        calc_single_pack: 'Taille d\'emballage unique(L*W*H)mm: L=ROUND((Largeur mm+65)/5,0)×5, W=Épaisseur emballage unique, H=ROUND((Hauteur mm+65)/5,0)×5',
        calc_gross_weight_1: 'Poids brut (KG) (1 unité/boîte): Poids net×1.3',
        calc_five_pack: 'Taille d\'emballage cinq unités(L*W*H)mm: L=ROUND((Largeur mm+65)/5,0)×5, W=Épaisseur emballage cinq unités, H=ROUND((Hauteur mm+65)/5,0)×5',
        calc_gross_weight_5: 'Poids brut (KG) (5 unités/boîte): Poids brut (KG) (1 unité/boîte)×5×1.1'
    },
    de: {
        title: 'EAF Automatisches Angebotsabfragesystem',
        subtitle: 'Wählen Sie Parameter aus, um Produktangebote schnell abzufragen',
        warning_tip: '⚠️ Offizielle Erinnerung: EAF2016 und EAF1620 sind zwei völlig unterschiedliche Produkte. Bitte nicht verwechseln bei Auswahl und Verwendung.',
        query_single_quote: '🔍 Einzelangebot anfragen',  // 查询单个报价按钮
        query_batch_quote: '📦 Gruppenangebot anfragen',   // 批量查询报价按钮
        admin: '🔧 Admin Grunddatenverwaltung',
        admin_show: '🔧 Datenverwaltung anzeigen',
        admin_hide: '🔧 Datenverwaltung ausblenden',
        product_list_show: '📋 Detail liste anzeigen',
        product_list_hide: '📋 Detail liste ausblenden',
        product_list_title: '📋 Produkt-Details-Liste',
        export_excel: '📥 Excel exportieren',
        all: 'Alle',
        not_selected: 'Nicht ausgewählt',
        filter_condition: 'Filterbedingungen',
        data_not_loaded: 'Daten nicht geladen',
        download_template: '📥 Vorlage herunterladen',
        upload_data: '📤 Daten hochladen',
        save_all: '💾 Alle Daten speichern',
        reset: '🔄 Auf Standard zurücksetzen',
        width: 'Breite',
        height: 'Höhe',
        style: 'Stil',
        style_1: '1"',
        style_2: '2"',
        style_4home: '4" Haushalt',
        style_4biz: '4" Gewerbe',
        style_5: '5"',
        brand: 'Marke',
        currency: 'Währung',
        currency_cny: 'CNY (Chinesischer Yuan)',
        currency_usd: 'Fremdwährung (z.B. USD)',
        exchange_rate: 'Wechselkurs',
        confirm_query: 'Abfrage bestätigen',
        query_result: 'Abfrageergebnis',
        empty_state: 'Bitte wählen Sie Parameter aus und klicken Sie auf Bestätigen',
        calculation_info: 'Berechnungsanweisungen',
        product_model: 'Produktmodell',
        air_flow: 'Markierter Luftstrom',
        dimensions: 'Maße',
        net_weight: 'Nettogewicht',
        single_pack: 'Einzelverpackungsgröße (L*W*H)mm',
        gross_weight_1: 'Bruttogewicht (KG) (1 Einheit/Kiste)',
        five_pack: 'Fünf-Einheiten-Verpackungsgröße (L*W*H)mm',
        gross_weight_5: 'Bruttogewicht (KG) (5 Einheiten/Kiste)',
        part_number: 'Teilenummer',
        price: 'Listenpreis',
        outer_dimension: 'Außenmaße (L*H*D)mm',
        net_weight_kg: 'Nettogewicht (KG)',
        single_pack_dimension: 'Einzelverpackungsgröße (L*W*H)mm',
        gross_weight_kg_1: 'Bruttogewicht (KG) (1 Einheit/Kiste)',
        five_pack_dimension: 'Fünf-Einheiten-Verpackungsgröße (L*W*H)mm',
        gross_weight_kg_5: 'Bruttogewicht (KG) (5 Einheiten/Kiste)',
        air_flow_m3h: 'Markierter Luftstrom (m³/h)',
        equivalent_title: 'Wertequivalenz (Eingabe → Tatsächliches mm)',
        style_config_title: 'Stilparameterkonfiguration',
        price_title: 'Preisdatenverwaltung',
        fc_accessory_title: 'FC-Zubehörverwaltung',
        ahu_accessory_title: 'AHU-Zubehörverwaltung',
        // Table column headers
        operation: 'Operation',                           // Operation column
        product_model_short: 'Modell',                    // Product model column
        product_name: 'Produktname',                      // Product name column
        standard_config: 'Standardkonfiguration',         // Standard config column
        price_col: 'Preis',                               // Price column
        compatible_style: 'Kompatibler Stil',             // Compatible style column
        background_color: 'Hintergrund',                  // Background color column
        remarks: 'Bemerkungen',                           // Remarks column
        add_accessory: '+ Zubehör hinzufügen',            // Add accessory button
        delete: 'Löschen',                                 // Delete button
        save_success: '✓ Alle Daten gespeichert',
        reset_success: '✓ Auf Standard zurückgesetzt',
        download_success: '✓ Vorlage erfolgreich heruntergeladen',
        download_error: '✗ Herunterladen der Vorlage fehlgeschlagen, bitte versuchen Sie es erneut',
        input_value: 'Eingabewert',
        mm_value: 'Tatsächlicher mm-Wert',
        style_code: 'Stilcode',
        style_name: 'Stilname',
        thickness: 'Dicke (mm)',
        density_factor: 'Dichtefaktor',
        single_pack_thickness: 'Einzelverpackungsdicke',
        five_pack_thickness: 'Fünf-Einheiten-Verpackungsdicke',
        suffix: 'Suffix',
        remark: 'Bemerkung',
        height_width: 'Höhe\\Breite',
        no_five_pack: 'Keine Fünf-Einheiten-Verpackung',
        no_part_number: 'Keine Teilenummer',
        unavailable: 'Nicht verfügbar',
        calc_product_model: 'Produktmodell: EAF+Breite+Höhe+Suffix (1": 1M-E; 2": 2M-E; 4" Haushalt: 4M-E; 4" Gewerbe: 4MA-E; 5": 5MB-E)',
        calc_air_flow: 'Markierter Luftstrom: Stile 4"/5"=MROUND(Breite×25.4×Höhe×25.4×Geschwindigkeit 2.54×3600/1000000, 10); Stile 1"/2"=MROUND((Breite×25.4-13-30)×(Höhe×25.4-13-65)×Geschwindigkeit 1.5×3600/1000000×Faktor 1.018, 10)',
        calc_dimensions: 'Maße: Breite(tatsächliche mm)×Höhe(tatsächliche mm)×Dicke(tatsächliche mm)',
        calc_net_weight: 'Nettogewicht: Breite(tatsächliche mm)×Höhe(tatsächliche mm)×Dichtefaktor/1000000',
        calc_single_pack: 'Einzelverpackungsgröße(L*W*H)mm: L=ROUND((Breite mm+65)/5,0)×5, W=Einzelverpackungsdicke, H=ROUND((Höhe mm+65)/5,0)×5',
        calc_gross_weight_1: 'Bruttogewicht (KG) (1 Einheit/Kiste): Nettogewicht×1.3',
        calc_five_pack: 'Fünf-Einheiten-Verpackungsgröße(L*W*H)mm: L=ROUND((Breite mm+65)/5,0)×5, W=Fünf-Einheiten-Verpackungsdicke, H=ROUND((Höhe mm+65)/5,0)×5',
        calc_gross_weight_5: 'Bruttogewicht (KG) (5 Einheiten/Kiste): Bruttogewicht (KG) (1 Einheit/Kiste)×5×1.1'
    },
    // 西班牙语语言配置
    es: {
        title: 'EAF Sistema de consulta de cotizaciones automáticas',
        subtitle: 'Seleccione parámetros para consultar rápidamente cotizaciones de productos',
        warning_tip: '⚠️ Recordatorio oficial: EAF2016 y EAF1620 son dos productos completamente diferentes. Por favor, no los confunda al seleccionar y usar.',
        query_single_quote: '🔍 Consultar cotización',     // 查询单个报价按钮
        query_batch_quote: '📦 Consultar cotizaciones grupales', // 批量查询报价按钮
        admin: '🔧 Gestión de datos básicos del administrador',
        admin_show: '🔧 Mostrar gestión de datos',
        admin_hide: '🔧 Ocultar gestión de datos',
        product_list_show: '📋 Mostrar lista detallada',
        product_list_hide: '📋 Ocultar lista detallada',
        product_list_title: '📋 Lista detallada de productos',
        export_excel: '📥 Exportar Excel',
        all: 'Todos',
        not_selected: 'No seleccionado',
        filter_condition: 'Condiciones de filtrado',
        data_not_loaded: 'Datos no cargados',
        download_template: '📥 Descargar plantilla',
        upload_data: '📤 Subir datos',
        save_all: '💾 Guardar todos los datos',
        reset: '🔄 Restablecer por defecto',
        width: 'Anchura',
        height: 'Altura',
        style: 'Estilo',
        style_1: '1"',
        style_2: '2"',
        style_4home: '4" Hogar',
        style_4biz: '4" Negocio',
        style_5: '5"',
        brand: 'Marca',
        currency: 'Moneda',
        currency_cny: 'CNY (Yuan chino)',
        currency_usd: 'Moneda extranjera (ej. USD)',
        exchange_rate: 'Tipo de cambio',
        confirm_query: 'Confirmar consulta',
        query_result: 'Resultado de la consulta',
        empty_state: 'Seleccione los parámetros y haga clic en Confirmar',
        calculation_info: 'Instrucciones de cálculo',
        product_model: 'Modelo de producto',
        air_flow: 'Flujo de aire marcado',
        dimensions: 'Dimensiones',
        net_weight: 'Peso neto',
        single_pack: 'Tamaño de empaque individual (L*W*H)mm',
        gross_weight_1: 'Peso bruto (KG) (1 unidad/caja)',
        five_pack: 'Tamaño de empaque de cinco unidades (L*W*H)mm',
        gross_weight_5: 'Peso bruto (KG) (5 unidades/caja)',
        part_number: 'Número de pieza',
        price: 'Precio de lista',
        outer_dimension: 'Dimensiones exteriores (L*H*D)mm',
        net_weight_kg: 'Peso neto (KG)',
        single_pack_dimension: 'Tamaño de empaque individual (L*W*H)mm',
        gross_weight_kg_1: 'Peso bruto (KG) (1 unidad/caja)',
        five_pack_dimension: 'Tamaño de empaque de cinco unidades (L*W*H)mm',
        gross_weight_kg_5: 'Peso bruto (KG) (5 unidades/caja)',
        air_flow_m3h: 'Flujo de aire marcado (m³/h)',
        equivalent_title: 'Equivalencia de valor (Entrada → mm real)',
        style_config_title: 'Configuración de parámetros de estilo',
        price_title: 'Gestión de datos de precios',
        fc_accessory_title: 'Gestión de accesorios FC',
        ahu_accessory_title: 'Gestión de accesorios AHU',
        // Table column headers
        operation: 'Operación',                            // Operation column
        product_model_short: 'Modelo',                     // Product model column
        product_name: 'Nombre del producto',               // Product name column
        standard_config: 'Configuración estándar',         // Standard config column
        price_col: 'Precio',                               // Price column
        compatible_style: 'Estilo compatible',             // Compatible style column
        background_color: 'Fondo',                         // Background color column
        remarks: 'Comentarios',                            // Remarks column
        add_accessory: '+ Agregar accesorio',              // Add accessory button
        delete: 'Eliminar',                                // Delete button
        save_success: '✓ Todos los datos guardados',
        reset_success: '✓ Restablecido por defecto',
        download_success: '✓ Plantilla descargada correctamente',
        download_error: '✗ Error al descargar la plantilla, por favor intente de nuevo',
        input_value: 'Valor de entrada',
        mm_value: 'Valor mm real',
        style_code: 'Código de estilo',
        style_name: 'Nombre de estilo',
        thickness: 'Grosor (mm)',
        density_factor: 'Factor de densidad',
        single_pack_thickness: 'Grosor de empaque individual',
        five_pack_thickness: 'Grosor de empaque de cinco unidades',
        suffix: 'Sufijo',
        remark: 'Comentario',
        height_width: 'Altura\\Anchura',
        no_five_pack: 'Sin empaque de cinco unidades',
        no_part_number: 'Sin número de pieza',
        unavailable: 'No disponible',
        calc_product_model: 'Modelo de producto: EAF+Anchura+Altura+Sufijo (1": 1M-E; 2": 2M-E; 4" Hogar: 4M-E; 4" Negocio: 4MA-E; 5": 5MB-E)',
        calc_air_flow: 'Flujo de aire marcado: Estilos 4"/5"=MROUND(Anchura×25.4×Altura×25.4×Velocidad 2.54×3600/1000000, 10); Estilos 1"/2"=MROUND((Anchura×25.4-13-30)×(Altura×25.4-13-65)×Velocidad 1.5×3600/1000000×Factor 1.018, 10)',
        calc_dimensions: 'Dimensiones: Anchura(mm real)×Altura(mm real)×Grosor(mm real)',
        calc_net_weight: 'Peso neto: Anchura(mm real)×Altura(mm real)×Factor de densidad/1000000',
        calc_single_pack: 'Tamaño de empaque individual(L*W*H)mm: L=ROUND((Anchura mm+65)/5,0)×5, W=Grosor de empaque individual, H=ROUND((Altura mm+65)/5,0)×5',
        calc_gross_weight_1: 'Peso bruto (KG) (1 unidad/caja): Peso neto×1.3',
        calc_five_pack: 'Tamaño de empaque de cinco unidades(L*W*H)mm: L=ROUND((Anchura mm+65)/5,0)×5, W=Grosor de empaque de cinco unidades, H=ROUND((Altura mm+65)/5,0)×5',
        calc_gross_weight_5: 'Peso bruto (KG) (5 unidades/caja): Peso bruto (KG) (1 unidad/caja)×5×1.1'
    },
    // 日语语言配置
    ja: {
        title: 'EAF 自動見積り照会システム',
        subtitle: 'パラメータを選択し、製品の見積りを迅速に照会',
        warning_tip: '⚠️ 公式リマインダー: EAF2016とEAF1620は全く異なる二つの製品です。選択と使用時に混同しないでください。',
        query_single_quote: '🔍 単一見積りを照会',         // 查询单个报价按钮
        query_batch_quote: '📦 一括見積りを照会',           // 批量查询报价按钮
        admin: '🔧 管理者基本データ管理',
        admin_show: '🔧 データ管理を表示',
        admin_hide: '🔧 データ管理を非表示',
        product_list_show: '📋 詳細リストを表示',
        product_list_hide: '📋 詳細リストを非表示',
        product_list_title: '📋 製品詳細リスト',
        export_excel: '📥 Excelをエクスポート',
        all: '全て',
        not_selected: '未選択',
        filter_condition: 'フィルタ条件',
        data_not_loaded: 'データが読み込まれていません',
        download_template: '📥 テンプレートをダウンロード',
        upload_data: '📤 データをアップロード',
        save_all: '💾 すべてのデータを保存',
        reset: '🔄 デフォルトにリセット',
        width: '幅',
        height: '高さ',
        style: 'スタイル',
        style_1: '1"',
        style_2: '2"',
        style_4home: '4"ホーム',
        style_4biz: '4"ビジネス',
        style_5: '5"',
        brand: 'ブランド',
        currency: '通貨',
        currency_cny: 'CNY（人民元）',
        currency_usd: '外国通貨（例：USD）',
        exchange_rate: '為替レート',
        confirm_query: '照会を確認',
        query_result: '照会結果',
        empty_state: 'パラメータを選択して照会を確認してください',
        calculation_info: '計算の説明',
        product_model: '製品モデル',
        air_flow: '表示風量',
        dimensions: '外形寸法',
        net_weight: '製品重量',
        single_pack: '単一梱包寸法(L*W*H)mm',
        gross_weight_1: '総重量 (KG) (1台/箱)',
        five_pack: '5台梱包寸法(L*W*H)mm',
        gross_weight_5: '総重量 (KG) (5台/箱)',
        part_number: '品番',
        price: '定価',
        outer_dimension: '外形寸法(L*H*D)mm',
        net_weight_kg: '製品重量(KG)',
        single_pack_dimension: '単一梱包寸法(L*W*H)mm',
        gross_weight_kg_1: '総重量(KG)(1台/箱)',
        five_pack_dimension: '5台梱包寸法(L*W*H)mm',
        gross_weight_kg_5: '総重量(KG)(5台/箱)',
        air_flow_m3h: '表示風量(m³/h)',
        equivalent_title: '数値等価関係（入力値 → 実際のmm値）',
        style_config_title: 'スタイルパラメータ設定',
        price_title: '定価データ管理',
        fc_accessory_title: 'FCアクセサリー管理',
        ahu_accessory_title: 'AHUアクセサリー管理',
        // Table column headers
        operation: '操作',                                 // Operation column
        product_model_short: '製品モデル',                  // Product model column
        product_name: '製品名',                             // Product name column
        standard_config: '標準構成',                        // Standard config column
        price_col: '価格',                                 // Price column
        compatible_style: '互換スタイル',                   // Compatible style column
        background_color: '背景色',                        // Background color column
        remarks: '備考',                                   // Remarks column
        add_accessory: '+ アクセサリーを追加',              // Add accessory button
        delete: '削除',                                     // Delete button
        save_success: '✓ すべてのデータを保存しました',
        reset_success: '✓ デフォルトにリセットしました',
        download_success: '✓ テンプレートを正常にダウンロードしました',
        download_error: '✗ テンプレートのダウンロードに失敗しました。再試行してください',
        input_value: '入力値',
        mm_value: '実際のmm値',
        style_code: 'スタイルコード',
        style_name: 'スタイル名',
        thickness: '厚さ(mm)',
        density_factor: '密度係数',
        single_pack_thickness: '単一梱包厚さ',
        five_pack_thickness: '5台梱包厚さ',
        suffix: 'サフィックス',
        remark: '備考',
        height_width: '高さ\\幅',
        no_five_pack: '5台梱包なし',
        no_part_number: '品番なし',
        unavailable: '生産不可',
        calc_product_model: '製品モデル：EAF+幅+高さ+サフィックス（1"：1M-E；2"：2M-E；4"ホーム：4M-E；4"ビジネス：4MA-E；5"：5MB-E）',
        calc_air_flow: '表示風量：4"/5"スタイル=MROUND(幅×25.4×高さ×25.4×風速2.54×3600/1000000, 10)；1"/2"スタイル=MROUND((幅×25.4-13-30)×(高さ×25.4-13-65)×風速1.5×3600/1000000×係数1.018, 10)',
        calc_dimensions: '外形寸法：幅(実際のmm値)×高さ(実際のmm値)×厚さ(実際のmm値)',
        calc_net_weight: '製品重量：幅(実際のmm値)×高さ(実際のmm値)×該当スタイルの密度係数値/1000000',
        calc_single_pack: '単一梱包寸法(L*W*H)mm：L=ROUND((幅mm+65)/5,0)×5，W=該当スタイルの1台梱包厚さ，H=ROUND((高さmm+65)/5,0)×5',
        calc_gross_weight_1: '総重量 (KG) (1台/箱)：製品重量×1.3',
        calc_five_pack: '5台梱包寸法(L*W*H)mm：L=ROUND((幅mm+65)/5,0)×5，W=該当スタイルの5台梱包厚さ，H=ROUND((高さmm+65)/5,0)×5',
        calc_gross_weight_5: '総重量 (KG) (5台/箱)：総重量 (KG) (1台/箱)×5×1.1'
    },
    // 韩语语言配置
    ko: {
        title: 'EAF 자동 견적 조회 시스템',
        subtitle: '매개변수를 선택하고 제품 견적을 빠르게 조회',
        warning_tip: '⚠️ 공식 알림: EAF2016과 EAF1620은 완전히 다른 두 제품입니다. 선택 및 사용 시 혼동하지 마십시오.',
        query_single_quote: '🔍 단일 견적 조회',           // 查询单个报价按钮
        query_batch_quote: '📦 일괄 견적 조회',           // 批量查询报价按钮
        admin: '🔧 관리자 기본 데이터 관리',
        admin_show: '🔧 데이터 관리 보기',
        admin_hide: '🔧 데이터 관리 숨기기',
        product_list_show: '📋 상세 목록 보기',
        product_list_hide: '📋 상세 목록 숨기기',
        product_list_title: '📋 제품 상세 목록',
        export_excel: '📥 Excel 내보내기',
        all: '모두',
        not_selected: '선택 안 됨',
        filter_condition: '필터 조건',
        data_not_loaded: '데이터가 로드되지 않았습니다',
        download_template: '📥 템플릿 다운로드',
        upload_data: '📤 데이터 업로드',
        save_all: '💾 모든 데이터 저장',
        reset: '🔄 기본값으로 재설정',
        width: '너비',
        height: '높이',
        style: '스타일',
        style_1: '1"',
        style_2: '2"',
        style_4home: '4" 홈',
        style_4biz: '4" 비즈니스',
        style_5: '5"',
        brand: '브랜드',
        currency: '통화',
        currency_cny: 'CNY（위안）',
        currency_usd: '외화（예：USD）',
        exchange_rate: '환율',
        confirm_query: '조회 확인',
        query_result: '조회 결과',
        empty_state: '매개변수를 선택하고 확인을 클릭하세요',
        calculation_info: '계산 설명',
        product_model: '제품 모델',
        air_flow: '표시 풍량',
        dimensions: '외형 치수',
        net_weight: '제품 중량',
        single_pack: '단일 포장 치수(L*W*H)mm',
        gross_weight_1: '총 중량 (KG) (1대/상자)',
        five_pack: '5대 포장 치수(L*W*H)mm',
        gross_weight_5: '총 중량 (KG) (5대/상자)',
        part_number: '품번',
        price: '정가',
        outer_dimension: '외형 치수(L*H*D)mm',
        net_weight_kg: '제품 중량(KG)',
        single_pack_dimension: '단일 포장 치수(L*W*H)mm',
        gross_weight_kg_1: '총 중량(KG)(1대/상자)',
        five_pack_dimension: '5대 포장 치수(L*W*H)mm',
        gross_weight_kg_5: '총 중량(KG)(5대/상자)',
        air_flow_m3h: '표시 풍량(m³/h)',
        equivalent_title: '수치 등가 관계（입력값 → 실제 mm값）',
        style_config_title: '스타일 매개변수 구성',
        price_title: '정가 데이터 관리',
        fc_accessory_title: 'FC 액세서리 관리',
        ahu_accessory_title: 'AHU 액세서리 관리',
        // Table column headers
        operation: '조작',                                  // Operation column
        product_model_short: '제품 모델',                    // Product model column
        product_name: '제품 이름',                           // Product name column
        standard_config: '표준 구성',                        // Standard config column
        price_col: '가격',                                  // Price column
        compatible_style: '호환 스타일',                     // Compatible style column
        background_color: '배경색',                         // Background color column
        remarks: '비고',                                    // Remarks column
        add_accessory: '+ 액세서리 추가',                   // Add accessory button
        delete: '삭제',                                     // Delete button
        save_success: '✓ 모든 데이터가 저장되었습니다',
        reset_success: '✓ 기본값으로 재설정되었습니다',
        download_success: '✓ 템플릿이 성공적으로 다운로드되었습니다',
        download_error: '✗ 템플릿 다운로드에 실패했습니다. 다시 시도하세요',
        input_value: '입력값',
        mm_value: '실제 mm값',
        style_code: '스타일 코드',
        style_name: '스타일 이름',
        thickness: '두께(mm)',
        density_factor: '밀도 계수',
        single_pack_thickness: '단일 포장 두께',
        five_pack_thickness: '5대 포장 두께',
        suffix: '접미사',
        remark: '비고',
        height_width: '높이\\너비',
        no_five_pack: '5대 포장 없음',
        no_part_number: '품번 없음',
        unavailable: '생산 불가',
        calc_product_model: '제품 모델：EAF+너비+높이+접미사（1"：1M-E；2"：2M-E；4" 홈：4M-E；4" 비즈니스：4MA-E；5"：5MB-E）',
        calc_air_flow: '표시 풍량：4"/5" 스타일=MROUND(너비×25.4×높이×25.4×풍속2.54×3600/1000000, 10)；1"/2" 스타일=MROUND((너비×25.4-13-30)×(높이×25.4-13-65)×풍속1.5×3600/1000000×계수1.018, 10)',
        calc_dimensions: '외형 치수：너비(실제 mm값)×높이(실제 mm값)×두께(실제 mm값)',
        calc_net_weight: '제품 중량：너비(실제 mm값)×높이(실제 mm값)×해당 스타일의 밀도 계수값/1000000',
        calc_single_pack: '단일 포장 치수(L*W*H)mm：L=ROUND((너비mm+65)/5,0)×5，W=해당 스타일의 1대 포장 두께，H=ROUND((높이mm+65)/5,0)×5',
        calc_gross_weight_1: '총 중량 (KG) (1대/상자)：제품 중량×1.3',
        calc_five_pack: '5대 포장 치수(L*W*H)mm：L=ROUND((너비mm+65)/5,0)×5，W=해당 스타일의 5대 포장 두께，H=ROUND((높이mm+65)/5,0)×5',
        calc_gross_weight_5: '총 중량 (KG) (5대/상자)：총 중량 (KG) (1대/상자)×5×1.1'
    },
    // 葡萄牙语语言配置
    pt: {
        title: 'EAF Sistema de Consulta de Cotação Automática',
        subtitle: 'Selecione parâmetros para consultar rapidamente cotações de produtos',
        warning_tip: '⚠️ Aviso oficial: EAF2016 e EAF1620 são dois produtos completamente diferentes. Por favor, não os confunda ao selecionar e usar.',
        query_single_quote: '🔍 Consultar cotação',         // 查询单个报价按钮
        query_batch_quote: '📦 Consultar cotações em lote', // 批量查询报价按钮
        admin: '🔧 Gerenciamento de Dados Básicos do Administrador',
        admin_show: '🔧 Mostrar Gerenciamento de Dados',
        admin_hide: '🔧 Ocultar Gerenciamento de Dados',
        product_list_show: '📋 Mostrar Lista Detalhada',
        product_list_hide: '📋 Ocultar Lista Detalhada',
        product_list_title: '📋 Lista Detalhada de Produtos',
        export_excel: '📥 Exportar Excel',
        all: 'Todos',
        not_selected: 'Não selecionado',
        filter_condition: 'Condições de Filtro',
        data_not_loaded: 'Dados não carregados',
        download_template: '📥 Baixar Modelo',
        upload_data: '📤 Enviar Dados',
        save_all: '💾 Salvar Todos os Dados',
        reset: '🔄 Redefinir para Padrão',
        width: 'Largura',
        height: 'Altura',
        style: 'Estilo',
        style_1: '1"',
        style_2: '2"',
        style_4home: '4" Residencial',
        style_4biz: '4" Empresarial',
        style_5: '5"',
        brand: 'Marca',
        currency: 'Moeda',
        currency_cny: 'CNY (Yuan Chinês)',
        currency_usd: 'Moeda Estrangeira (ex: USD)',
        exchange_rate: 'Taxa de Câmbio',
        confirm_query: 'Confirmar Consulta',
        query_result: 'Resultado da Consulta',
        empty_state: 'Selecione os parâmetros e clique em Confirmar',
        calculation_info: 'Instruções de Cálculo',
        product_model: 'Modelo do Produto',
        air_flow: 'Fluxo de Ar Marcado',
        dimensions: 'Dimensões',
        net_weight: 'Peso Líquido',
        single_pack: 'Tamanho de Embalagem Única (L*W*H)mm',
        gross_weight_1: 'Peso Bruto (KG) (1 unidade/caixa)',
        five_pack: 'Tamanho de Embalagem de Cinco (L*W*H)mm',
        gross_weight_5: 'Peso Bruto (KG) (5 unidades/caixa)',
        part_number: 'Número de Peça',
        price: 'Preço de Lista',
        outer_dimension: 'Dimensões Externas (L*H*D)mm',
        net_weight_kg: 'Peso Líquido (KG)',
        single_pack_dimension: 'Tamanho de Embalagem Única (L*W*H)mm',
        gross_weight_kg_1: 'Peso Bruto (KG) (1 unidade/caixa)',
        five_pack_dimension: 'Tamanho de Embalagem de Cinco (L*W*H)mm',
        gross_weight_kg_5: 'Peso Bruto (KG) (5 unidades/caixa)',
        air_flow_m3h: 'Fluxo de Ar Marcado (m³/h)',
        equivalent_title: 'Equivalência de Valor (Entrada → mm Real)',
        style_config_title: 'Configuração de Parâmetros de Estilo',
        price_title: 'Gerenciamento de Dados de Preço',
        fc_accessory_title: 'Gerenciamento de Acessórios FC',
        ahu_accessory_title: 'Gerenciamento de Acessórios AHU',
        // Table column headers
        operation: 'Operação',                              // Operation column
        product_model_short: 'Modelo',                      // Product model column
        product_name: 'Nome do Produto',                    // Product name column
        standard_config: 'Configuração Padrão',             // Standard config column
        price_col: 'Preço',                                 // Price column
        compatible_style: 'Estilo Compatível',              // Compatible style column
        background_color: 'Fundo',                          // Background color column
        remarks: 'Comentários',                             // Remarks column
        add_accessory: '+ Adicionar Acessório',             // Add accessory button
        delete: 'Excluir',                                  // Delete button
        save_success: '✓ Todos os dados salvos',
        reset_success: '✓ Redefinido para padrão',
        download_success: '✓ Modelo baixado com sucesso',
        download_error: '✗ Falha ao baixar modelo, tente novamente',
        input_value: 'Valor de Entrada',
        mm_value: 'Valor mm Real',
        style_code: 'Código de Estilo',
        style_name: 'Nome do Estilo',
        thickness: 'Espessura (mm)',
        density_factor: 'Fator de Densidade',
        single_pack_thickness: 'Espessura de Embalagem Única',
        five_pack_thickness: 'Espessura de Embalagem de Cinco',
        suffix: 'Sufixo',
        remark: 'Observação',
        height_width: 'Altura\\Largura',
        no_five_pack: 'Sem embalagem de cinco unidades',
        no_part_number: 'Sem número de peça',
        unavailable: 'Indisponível',
        calc_product_model: 'Modelo do Produto: EAF+Largura+Altura+Sufixo (1": 1M-E; 2": 2M-E; 4" Residencial: 4M-E; 4" Empresarial: 4MA-E; 5": 5MB-E)',
        calc_air_flow: 'Fluxo de Ar Marcado: Estilos 4"/5"=MROUND(Largura×25.4×Altura×25.4×Velocidade 2.54×3600/1000000, 10); Estilos 1"/2"=MROUND((Largura×25.4-13-30)×(Altura×25.4-13-65)×Velocidade 1.5×3600/1000000×Fator 1.018, 10)',
        calc_dimensions: 'Dimensões: Largura(mm real)×Altura(mm real)×Espessura(mm real)',
        calc_net_weight: 'Peso Líquido: Largura(mm real)×Altura(mm real)×Fator de Densidade/1000000',
        calc_single_pack: 'Tamanho de Embalagem Única(L*W*H)mm: L=ROUND((Largura mm+65)/5,0)×5, W=Espessura de embalagem única, H=ROUND((Altura mm+65)/5,0)×5',
        calc_gross_weight_1: 'Peso Bruto (KG) (1 unidade/caixa): Peso Líquido×1.3',
        calc_five_pack: 'Tamanho de Embalagem de Cinco(L*W*H)mm: L=ROUND((Largura mm+65)/5,0)×5, W=Espessura de embalagem de cinco, H=ROUND((Altura mm+65)/5,0)×5',
        calc_gross_weight_5: 'Peso Bruto (KG) (5 unidades/caixa): Peso Bruto (KG) (1 unidade/caixa)×5×1.1'
    },
    // 意大利语语言配置
    it: {
        title: 'EAF Sistema di Ricerca Automatica di Preventivi',
        subtitle: 'Seleziona i parametri per cercare rapidamente i preventivi dei prodotti',
        warning_tip: '⚠️ Avviso ufficiale: EAF2016 e EAF1620 sono due prodotti completamente diversi. Si prega di non confonderli durante la selezione e l\'uso.',
        query_single_quote: '🔍 Richiedi preventivo',       // 查询单个报价按钮
        query_batch_quote: '📦 Richiedi preventivi in batch', // 批量查询报价按钮
        admin: '🔧 Gestione Dati Base Amministratore',
        admin_show: '🔧 Mostra Gestione Dati',
        admin_hide: '🔧 Nascondi Gestione Dati',
        product_list_show: '📋 Mostra Lista Dettagliata',
        product_list_hide: '📋 Nascondi Lista Dettagliata',
        product_list_title: '📋 Lista Dettagliata Prodotti',
        export_excel: '📥 Esporta Excel',
        all: 'Tutti',
        not_selected: 'Non selezionato',
        filter_condition: 'Condizioni di Filtro',
        data_not_loaded: 'Dati non caricati',
        download_template: '📥 Scarica Modello',
        upload_data: '📤 Carica Dati',
        save_all: '💾 Salva Tutti i Dati',
        reset: '🔄 Ripristina Impostazioni Predefinite',
        width: 'Larghezza',
        height: 'Altezza',
        style: 'Stile',
        style_1: '1"',
        style_2: '2"',
        style_4home: '4" Casa',
        style_4biz: '4" Aziendale',
        style_5: '5"',
        brand: 'Marchio',
        currency: 'Valuta',
        currency_cny: 'CNY (Yuan Cinese)',
        currency_usd: 'Valuta Estera (es. USD)',
        exchange_rate: 'Tasso di Cambio',
        confirm_query: 'Conferma Ricerca',
        query_result: 'Risultato della Ricerca',
        empty_state: 'Seleziona i parametri e fai clic su Conferma',
        calculation_info: 'Istruzioni di Calcolo',
        product_model: 'Modello del Prodotto',
        air_flow: 'Flusso d\'Aria Indicato',
        dimensions: 'Dimensioni',
        net_weight: 'Peso Netto',
        single_pack: 'Dimensione Confezione Singola (L*W*H)mm',
        gross_weight_1: 'Peso Lordo (KG) (1 unità/scatola)',
        five_pack: 'Dimensione Confezione Cinque (L*W*H)mm',
        gross_weight_5: 'Peso Lordo (KG) (5 unità/scatola)',
        part_number: 'Numero di Parte',
        price: 'Prezzo di Listino',
        outer_dimension: 'Dimensioni Esterno (L*H*D)mm',
        net_weight_kg: 'Peso Netto (KG)',
        single_pack_dimension: 'Dimensione Confezione Singola (L*W*H)mm',
        gross_weight_kg_1: 'Peso Lordo (KG) (1 unità/scatola)',
        five_pack_dimension: 'Dimensione Confezione Cinque (L*W*H)mm',
        gross_weight_kg_5: 'Peso Lordo (KG) (5 unità/scatola)',
        air_flow_m3h: 'Flusso d\'Aria Indicato (m³/h)',
        equivalent_title: 'Equivalenza di Valore (Ingresso → mm Reale)',
        style_config_title: 'Configurazione Parametri Stile',
        price_title: 'Gestione Dati Prezzo',
        fc_accessory_title: 'Gestione Accessori FC',
        ahu_accessory_title: 'Gestione Accessori AHU',
        // Table column headers
        operation: 'Operazione',                            // Operation column
        product_model_short: 'Modello',                     // Product model column
        product_name: 'Nome Prodotto',                      // Product name column
        standard_config: 'Configurazione Standard',         // Standard config column
        price_col: 'Prezzo',                                // Price column
        compatible_style: 'Stile Compatibile',              // Compatible style column
        background_color: 'Sfondo',                         // Background color column
        remarks: 'Note',                                    // Remarks column
        add_accessory: '+ Aggiungi Accessorio',             // Add accessory button
        delete: 'Elimina',                                  // Delete button
        save_success: '✓ Tutti i dati salvati',
        reset_success: '✓ Ripristinato alle impostazioni predefinite',
        download_success: '✓ Modello scaricato con successo',
        download_error: '✗ Download modello fallito, riprovare',
        input_value: 'Valore di Ingresso',
        mm_value: 'Valore mm Reale',
        style_code: 'Codice Stile',
        style_name: 'Nome Stile',
        thickness: 'Spessore (mm)',
        density_factor: 'Fattore di Densità',
        single_pack_thickness: 'Spessore Confezione Singola',
        five_pack_thickness: 'Spessore Confezione Cinque',
        suffix: 'Suffisso',
        remark: 'Osservazione',
        height_width: 'Altezza\\Larghezza',
        no_five_pack: 'Nessuna confezione di cinque unità',
        no_part_number: 'Nessun numero di parte',
        unavailable: 'Non disponibile',
        calc_product_model: 'Modello del Prodotto: EAF+Larghezza+Altezza+Suffisso (1": 1M-E; 2": 2M-E; 4" Casa: 4M-E; 4" Aziendale: 4MA-E; 5": 5MB-E)',
        calc_air_flow: 'Flusso d\'Aria Indicato: Stili 4"/5"=MROUND(Larghezza×25.4×Altezza×25.4×Velocità 2.54×3600/1000000, 10); Stili 1"/2"=MROUND((Larghezza×25.4-13-30)×(Altezza×25.4-13-65)×Velocità 1.5×3600/1000000×Fattore 1.018, 10)',
        calc_dimensions: 'Dimensioni: Larghezza(mm reale)×Altezza(mm reale)×Spessore(mm reale)',
        calc_net_weight: 'Peso Netto: Larghezza(mm reale)×Altezza(mm reale)×Fattore di Densità/1000000',
        calc_single_pack: 'Dimensione Confezione Singola(L*W*H)mm: L=ROUND((Larghezza mm+65)/5,0)×5, W=Spessore confezione singola, H=ROUND((Altezza mm+65)/5,0)×5',
        calc_gross_weight_1: 'Peso Lordo (KG) (1 unità/scatola): Peso Netto×1.3',
        calc_five_pack: 'Dimensione Confezione Cinque(L*W*H)mm: L=ROUND((Larghezza mm+65)/5,0)×5, W=Spessore confezione cinque, H=ROUND((Altezza mm+65)/5,0)×5',
        calc_gross_weight_5: 'Peso Lordo (KG) (5 unità/scatola): Peso Lordo (KG) (1 unità/scatola)×5×1.1'
    },
    // 俄语语言配置
    ru: {
        title: 'EAF Автоматизированная система запроса котировок',
        subtitle: 'Выберите параметры для быстрого запроса котировок продуктов',
        warning_tip: '⚠️ Официальное напоминание: EAF2016 и EAF1620 - это два совершенно разных продукта. Пожалуйста, не путайте их при выборе и использовании.',
        query_single_quote: '🔍 Запросить котировку',       // 查询单个报价按钮
        query_batch_quote: '📦 Запросить котировки пакетно', // 批量查询报价按钮
        admin: '🔧 Управление базовыми данными администратора',
        admin_show: '🔧 Показать управление данными',
        admin_hide: '🔧 Скрыть управление данными',
        product_list_show: '📋 Показать детальный список',
        product_list_hide: '📋 Скрыть детальный список',
        product_list_title: '📋 Детальный список продуктов',
        export_excel: '📥 Экспорт в Excel',
        all: 'Все',
        not_selected: 'Не выбран',
        filter_condition: 'Условия фильтрации',
        data_not_loaded: 'Данные не загружены',
        download_template: '📥 Скачать шаблон',
        upload_data: '📤 Загрузить данные',
        save_all: '💾 Сохранить все данные',
        reset: '🔄 Сбросить по умолчанию',
        width: 'Ширина',
        height: 'Высота',
        style: 'Стиль',
        style_1: '1"',
        style_2: '2"',
        style_4home: '4" Домашний',
        style_4biz: '4" Бизнес',
        style_5: '5"',
        brand: 'Бренд',
        currency: 'Валюта',
        currency_cny: 'CNY (Китайский юань)',
        currency_usd: 'Иностранная валюта (например, USD)',
        exchange_rate: 'Курс обмена',
        confirm_query: 'Подтвердить запрос',
        query_result: 'Результат запроса',
        empty_state: 'Выберите параметры и нажмите Подтвердить',
        calculation_info: 'Инструкции по расчету',
        product_model: 'Модель продукта',
        air_flow: 'Маркированный воздушный поток',
        dimensions: 'Размеры',
        net_weight: 'Чистый вес',
        single_pack: 'Размер упаковки на 1 единицу (L*W*H)mm',
        gross_weight_1: 'Брутто-вес (KG) (1 единица/коробка)',
        five_pack: 'Размер упаковки на 5 единиц (L*W*H)mm',
        gross_weight_5: 'Брутто-вес (KG) (5 единиц/коробка)',
        part_number: 'Номер детали',
        price: 'Цена списка',
        outer_dimension: 'Внешние размеры (L*H*D)mm',
        net_weight_kg: 'Чистый вес (KG)',
        single_pack_dimension: 'Размер упаковки на 1 единицу (L*W*H)mm',
        gross_weight_kg_1: 'Брутто-вес (KG) (1 единица/коробка)',
        five_pack_dimension: 'Размер упаковки на 5 единиц (L*W*H)mm',
        gross_weight_kg_5: 'Брутто-вес (KG) (5 единиц/коробка)',
        air_flow_m3h: 'Маркированный воздушный поток (m³/h)',
        equivalent_title: 'Эквивалентность значений (Вход → Фактическое мм)',
        style_config_title: 'Конфигурация параметров стиля',
        price_title: 'Управление ценовыми данными',
        fc_accessory_title: 'Управление аксессуарами FC',
        ahu_accessory_title: 'Управление аксессуарами AHU',
        // Table column headers
        operation: 'Операция',                              // Operation column
        product_model_short: 'Модель',                      // Product model column
        product_name: 'Название продукта',                  // Product name column
        standard_config: 'Стандартная конфигурация',        // Standard config column
        price_col: 'Цена',                                  // Price column
        compatible_style: 'Совместимый стиль',              // Compatible style column
        background_color: 'Фон',                            // Background color column
        remarks: 'Примечания',                              // Remarks column
        add_accessory: '+ Добавить аксессуар',              // Add accessory button
        delete: 'Удалить',                                  // Delete button
        save_success: '✓ Все данные сохранены',
        reset_success: '✓ Сброшено по умолчанию',
        download_success: '✓ Шаблон успешно загружен',
        download_error: '✗ Ошибка загрузки шаблона, повторите попытку',
        input_value: 'Входное значение',
        mm_value: 'Фактическое мм-значение',
        style_code: 'Код стиля',
        style_name: 'Название стиля',
        thickness: 'Толщина (mm)',
        density_factor: 'Коэффициент плотности',
        single_pack_thickness: 'Толщина упаковки на 1 единицу',
        five_pack_thickness: 'Толщина упаковки на 5 единиц',
        suffix: 'Суффикс',
        remark: 'Примечание',
        height_width: 'Высота\\Ширина',
        no_five_pack: 'Нет упаковки на 5 единиц',
        no_part_number: 'Нет номера детали',
        unavailable: 'Недоступно',
        calc_product_model: 'Модель продукта: EAF+Ширина+Высота+Суффикс (1": 1M-E; 2": 2M-E; 4" Домашний: 4M-E; 4" Бизнес: 4MA-E; 5": 5MB-E)',
        calc_air_flow: 'Маркированный воздушный поток: Стили 4"/5"=MROUND(Ширина×25.4×Высота×25.4×Скорость 2.54×3600/1000000, 10); Стили 1"/2"=MROUND((Ширина×25.4-13-30)×(Высота×25.4-13-65)×Скорость 1.5×3600/1000000×Коэффициент 1.018, 10)',
        calc_dimensions: 'Размеры: Ширина(фактическое мм)×Высота(фактическое мм)×Толщина(фактическое мм)',
        calc_net_weight: 'Чистый вес: Ширина(фактическое мм)×Высота(фактическое мм)×Коэффициент плотности/1000000',
        calc_single_pack: 'Размер упаковки на 1 единицу(L*W*H)mm: L=ROUND((Ширина mm+65)/5,0)×5, W=Толщина упаковки на 1 единицу, H=ROUND((Высота mm+65)/5,0)×5',
        calc_gross_weight_1: 'Брутто-вес (KG) (1 единица/коробка): Чистый вес×1.3',
        calc_five_pack: 'Размер упаковки на 5 единиц(L*W*H)mm: L=ROUND((Ширина mm+65)/5,0)×5, W=Толщина упаковки на 5 единиц, H=ROUND((Высота mm+65)/5,0)×5',
        calc_gross_weight_5: 'Брутто-вес (KG) (5 единиц/коробка): Брутто-вес (KG) (1 единица/коробка)×5×1.1'
    },
    // 阿拉伯语语言配置
    ar: {
        title: 'EAF نظام استعلام الاقتراحات التلقائي',
        subtitle: 'حدد المعلمات لاستعلام أسعار المنتجات بسرعة',
        warning_tip: '⚠️ ملاحظة رسمية: EAF2016 و EAF1620 هما منتجات مختلفة تمامًا. يرجى عدم الخلط بينهما عند الاختيار والاستخدام.',
        query_single_quote: '🔍 استعلام سعر واحد',          // 查询单个报价按钮
        query_batch_quote: '📦 استعلام أسعار جماعي',       // 批量查询报价按钮
        admin: '🔧 إدارة بيانات الأدمن الأساسية',
        admin_show: '🔧 عرض إدارة البيانات',
        admin_hide: '🔧 إخفاء إدارة البيانات',
        product_list_show: '📋 عرض القائمة التفصيلية',
        product_list_hide: '📋 إخفاء القائمة التفصيلية',
        product_list_title: '📋 قائمة المنتجات التفصيلية',
        export_excel: '📥 تصدير Excel',
        all: 'الكل',
        not_selected: 'لم يتم اختياره',
        filter_condition: 'شروط التصفية',
        data_not_loaded: 'البيانات لم تُحمَل',
        download_template: '📥 تنزيل القالب',
        upload_data: '📤 رفع البيانات',
        save_all: '💾 حفظ جميع البيانات',
        reset: '🔄 إعادة التعيين إلى الافتراضي',
        width: 'العرض',
        height: 'الارتفاع',
        style: 'النمط',
        style_1: '1"',
        style_2: '2"',
        style_4home: '4" منزلي',
        style_4biz: '4" تجاري',
        style_5: '5"',
        brand: 'العلامة التجارية',
        currency: 'العملة',
        currency_cny: 'CNY (اليوان الصيني)',
        currency_usd: 'عملة أجنبية (مثل USD)',
        exchange_rate: 'سعر الصرف',
        confirm_query: 'تأكيد الاستعلام',
        query_result: 'نتيجة الاستعلام',
        empty_state: 'حدد المعلمات وانقر على تأكيد',
        calculation_info: 'تعليمات الحساب',
        product_model: 'موديل المنتج',
        air_flow: 'تدفق الهواء المميز',
        dimensions: 'الأبعاد',
        net_weight: 'الوزن الصافي',
        single_pack: 'حجم التعبئة الواحدة (L*W*H)mm',
        gross_weight_1: 'الوزن الإجمالي (KG) (وحدة واحدة/صندوق)',
        five_pack: 'حجم التعبئة الخمسة (L*W*H)mm',
        gross_weight_5: 'الوزن الإجمالي (KG) (5 وحدات/صندوق)',
        part_number: 'رقم القطعة',
        price: 'السعر السوقي',
        outer_dimension: 'الأبعاد الخارجية (L*H*D)mm',
        net_weight_kg: 'الوزن الصافي (KG)',
        single_pack_dimension: 'حجم التعبئة الواحدة (L*W*H)mm',
        gross_weight_kg_1: 'الوزن الإجمالي (KG) (وحدة واحدة/صندوق)',
        five_pack_dimension: 'حجم التعبئة الخمسة (L*W*H)mm',
        gross_weight_kg_5: 'الوزن الإجمالي (KG) (5 وحدات/صندوق)',
        air_flow_m3h: 'تدفق الهواء المميز (m³/h)',
        equivalent_title: 'التكافؤ القيمة (الإدخال → مم الفعلي)',
        style_config_title: 'تهيئة معلمات النمط',
        price_title: 'إدارة بيانات السعر',
        fc_accessory_title: 'إدارة ملحقات FC',
        ahu_accessory_title: 'إدارة ملحقات AHU',
        // Table column headers
        operation: 'عملية',                                 // Operation column
        product_model_short: 'نموذج المنتج',                // Product model column
        product_name: 'اسم المنتج',                         // Product name column
        standard_config: 'التكوين القياسي',                 // Standard config column
        price_col: 'السعر',                                 // Price column
        compatible_style: 'النمط المتوافق',                 // Compatible style column
        background_color: 'لون الخلفية',                    // Background color column
        remarks: 'ملاحظات',                                 // Remarks column
        add_accessory: '+ إضافة ملحق',                      // Add accessory button
        delete: 'حذف',                                     // Delete button
        save_success: '✓ لقد تم حفظ جميع البيانات',
        reset_success: '✓ تم إعادة التعيين إلى الافتراضي',
        download_success: '✓ تم تنزيل القالب بنجاح',
        download_error: '✗ فشل في تنزيل القالب، يرجى المحاولة مرة أخرى',
        input_value: 'قيمة الإدخال',
        mm_value: 'قيمة مم الفعلي',
        style_code: 'كود النمط',
        style_name: 'اسم النمط',
        thickness: 'السمك (mm)',
        density_factor: 'معامل الكثافة',
        single_pack_thickness: 'سمك التعبئة الواحدة',
        five_pack_thickness: 'سمك التعبئة الخمسة',
        suffix: 'اللاحقة',
        remark: 'ملاحظة',
        height_width: 'الارتفاع\\العرض',
        no_five_pack: 'لا توجد تعبئة خمسة وحدات',
        no_part_number: 'لا يوجد رقم قطعة',
        unavailable: 'غير متاح',
        calc_product_model: 'موديل المنتج: EAF+العرض+الارتفاع+اللاحقة (1": 1M-E; 2": 2M-E; 4" منزلي: 4M-E; 4" تجاري: 4MA-E; 5": 5MB-E)',
        calc_air_flow: 'تدفق الهواء المميز: أنماط 4"/5"=MROUND(العرض×25.4×الارتفاع×25.4×سرعة الهواء 2.54×3600/1000000, 10); أنماط 1"/2"=MROUND((العرض×25.4-13-30)×(الارتفاع×25.4-13-65)×سرعة الهواء 1.5×3600/1000000×معامل 1.018, 10)',
        calc_dimensions: 'الأبعاد: العرض(مم فعلي)×الارتفاع(مم فعلي)×السمك(مم فعلي)',
        calc_net_weight: 'الوزن الصافي: العرض(مم فعلي)×الارتفاع(مم فعلي)×معامل الكثافة/1000000',
        calc_single_pack: 'حجم التعبئة الواحدة(L*W*H)mm: L=ROUND((العرض mm+65)/5,0)×5, W=سمك التعبئة الواحدة, H=ROUND((الارتفاع mm+65)/5,0)×5',
        calc_gross_weight_1: 'الوزن الإجمالي (KG) (وحدة واحدة/صندوق): الوزن الصافي×1.3',
        calc_five_pack: 'حجم التعبئة الخمسة(L*W*H)mm: L=ROUND((العرض mm+65)/5,0)×5, W=سمك التعبئة الخمسة, H=ROUND((الارتفاع mm+65)/5,0)×5',
        calc_gross_weight_5: 'الوزن الإجمالي (KG) (5 وحدات/صندوق): الوزن الإجمالي (KG) (وحدة واحدة/صندوق)×5×1.1'
    }
};

// ==================== 语言切换功能 ====================

let currentLang = 'zh';  // 当前语言，默认为中文

/**
 * 获取指定key的翻译文本
 * @param {string} key - 翻译键名
 * @returns {string} 翻译后的文本，如果找不到则返回中文，再找不到则返回key本身
 */
function getLang(key) {
    return languages[currentLang][key] || languages.zh[key] || key;
}

/**
 * 切换系统语言
 * @param {string} lang - 目标语言代码（如'zh'、'en'、'fr'等）
 */
function changeLanguage(lang) {
    currentLang = lang;  // 更新当前语言
    console.log('Changing language to:', lang);
    
    // 更新所有带有data-lang属性的元素文本
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        const translation = getLang(key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // 更新页面标题和副标题
    document.querySelector('header h1').textContent = getLang('title');
    document.querySelector('header p').textContent = getLang('subtitle');
    
    // 更新管理员按钮文本
    const adminBtn = document.querySelector('#adminBtn');
    const adminPanel = document.getElementById('adminPanel');
    if (adminBtn) {
        adminBtn.textContent = adminPanel && adminPanel.style.display !== 'none' ? getLang('admin_hide') : getLang('admin_show');
    }
    
    // 更新产品列表按钮文本
    const listBtn = document.querySelector('#listBtn');
    const productListSection = document.getElementById('productListSection');
    if (listBtn) {
        listBtn.textContent = productListSection && productListSection.style.display !== 'none' ? getLang('product_list_hide') : getLang('product_list_show');
    }
    
    // 更新管理面板中的按钮文本
    if (adminPanel) {
        const downloadBtn = adminPanel.querySelector('.download-template-btn');
        const uploadBtn = adminPanel.querySelector('.upload-excel-btn');
        const saveBtn = adminPanel.querySelector('.save-all-btn');
        const resetBtn = adminPanel.querySelector('.reset-btn');
        
        if (downloadBtn) downloadBtn.textContent = getLang('download_template');
        if (uploadBtn) uploadBtn.innerHTML = `<span>${getLang('upload_data')}</span>`;
        if (saveBtn) saveBtn.textContent = getLang('save_all');
        if (resetBtn) resetBtn.textContent = getLang('reset');
    }
    
    // 更新语言选择器的选中状态
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = lang;
    }
    
    // 更新计算说明、重新渲染管理面板和搜索数据
    updateCalculationInstructions();
    renderAdminPanel();
    searchData();
    
    // 如果产品列表显示中，则重新渲染产品列表
    if (productListSection && productListSection.style.display !== 'none') {
        renderProductList();
    }
}

/**
 * 更新计算说明区域的语言
 */
function updateCalculationInstructions() {
    const calculationList = document.getElementById('calculationList');
    console.log('updateCalculationInstructions called, calculationList:', calculationList);
    if (!calculationList) return;  // 如果元素不存在则直接返回
    
    // 更新所有带有data-lang属性的列表项
    const items = calculationList.querySelectorAll('li[data-lang]');
    console.log('Found', items.length, 'items to update');
    items.forEach(element => {
        const key = element.getAttribute('data-lang');
        const translation = getLang(key);
        console.log('Updating key:', key, 'to:', translation);
        if (translation) {
            element.textContent = translation;
        }
    });
}

// ==================== 默认数据配置 ====================

/**
 * 默认数值等价关系映射表
 * 输入值（英寸）→ 实际mm值
 * 例如：'08'表示8英寸，对应200mm
 */
const defaultEquivalentMap = {
    '08': '200', '09': '225', '10': '250', '11': '275', '12': '287', '13': '312', '14': '338', '15': '363',
    '16': '390', '17': '415', '18': '440', '19': '465', '20': '490', '21': '515', '22': '540', '23': '565',
    '24': '592', '25': '618', '26': '642', '27': '668', '28': '693', '29': '718', '30': '745', '31': '770',
    '32': '795', '33': '825', '34': '850', '35': '875', '36': '900', '37': '925', '38': '950', '39': '975',
    '40': '1000', '41': '1025', '42': '1050', '43': '1075', '44': '1100', '45': '1125', '46': '1150', '47': '1075',
    '48': '1200', '49': '1225', '50': '1250', '51': '1275', '52': '1300', '53': '1325', '54': '1350', '55': '1375', '56': '1400'
};

/**
 * 默认款式参数配置数组
 * 每个对象包含：
 * - style: 款式代码（1/2/4home/4biz/5）
 * - thickness: 厚度(mm)
 * - kgFactor: 密度系数（用于计算净重）
 * - singlePackThickness: 1台包装厚度
 * - fivePackThickness: 5台包装厚度（'/'表示无五台包装）
 * - suffix: 产品型号后缀
 */
const defaultStyleConfig = [
    { style: '1', thickness: 23.5, kgFactor: 8.983, singlePackThickness: 110, fivePackThickness: 400, suffix: '1M-E' },    // 1"款式
    { style: '2', thickness: 47, kgFactor: 13.47, singlePackThickness: 110, fivePackThickness: 400, suffix: '2M-E' },      // 2"款式
    { style: '4home', thickness: 95, kgFactor: 19.11751278, singlePackThickness: 160, fivePackThickness: '/', suffix: '4M-E' },  // 4"家用款式
    { style: '4biz', thickness: 95, kgFactor: 19.11751278, singlePackThickness: 160, fivePackThickness: '/', suffix: '4MA-E' }, // 4"商用款式
    { style: '5', thickness: 125, kgFactor: 0, singlePackThickness: 190, fivePackThickness: '/', suffix: '5MB-E' }           // 5"款式
];

const defaultPriceData = {
    '1"': {
        '12': { '08': 1342, '09': 1372, '10': 1422, '11': 1447, '12': 1537, '13': 1557, '14': 1647, '15': 1667, '16': 1682, '17': 1702, '18': 1857, '19': 1872, '20': 1892, '21': 1907, '22': 2062, '23': 2082, '24': 2102, '25': 2127 },
        '13': { '08': 1408, '09': 1441, '10': 1495, '11': 1522, '12': 1619, '13': 1641, '14': 1738, '15': 1760, '16': 1776, '17': 1798, '18': 1966, '19': 1982, '20': 2004, '21': 2020, '22': 2188, '23': 2210, '24': 2231, '25': 2258 },
        '14': { '08': 1475, '09': 1510, '10': 1568, '11': 1597, '12': 1702, '13': 1725, '14': 1830, '15': 1854, '16': 1871, '17': 1895, '18': 2075, '19': 2093, '20': 2116, '21': 2134, '22': 2315, '23': 2338, '24': 2361, '25': 2390 },
        '15': { '08': 1541, '09': 1579, '10': 1641, '11': 1672, '12': 1785, '13': 1810, '14': 1922, '15': 1947, '16': 1966, '17': 1991, '18': 2185, '19': 2204, '20': 2229, '21': 2247, '22': 2441, '23': 2466, '24': 2491, '25': 2522 },
        '16': { '08': 1608, '09': 1648, '10': 1714, '11': 1748, '12': 1868, '13': 1894, '14': 2014, '15': 2041, '16': 2061, '17': 2088, '18': 2294, '19': 2314, '20': 2341, '21': 2361, '22': 2568, '23': 2594, '24': 2621, '25': 2654 },
        '17': { '08': 1674, '09': 1717, '10': 1788, '11': 1823, '12': 1950, '13': 1979, '14': 2106, '15': 2135, '16': 2156, '17': 2184, '18': 2404, '19': 2425, '20': 2453, '21': 2475, '22': 2694, '23': 2723, '24': 2751, '25': 2786 },
        '18': { '08': 1741, '09': 1786, '10': 1861, '11': 1898, '12': 2033, '13': 2063, '14': 2198, '15': 2228, '16': 2251, '17': 2281, '18': 2513, '19': 2536, '20': 2566, '21': 2588, '22': 2821, '23': 2851, '24': 2881, '25': 2918 },
        '19': { '08': 1807, '09': 1855, '10': 1934, '11': 1974, '12': 2116, '13': 2148, '14': 2290, '15': 2322, '16': 2346, '17': 2377, '18': 2623, '19': 2646, '20': 2678, '21': 2702, '22': 2947, '23': 2979, '24': 3011, '25': 3050 },
        '20': { '08': 1874, '09': 1924, '10': 2007, '11': 2049, '12': 2199, '13': 2232, '14': 2382, '15': 2416, '16': 2441, '17': 2474, '18': 2732, '19': 2757, '20': 2791, '21': 2816, '22': 3074, '23': 3107, '24': 3141, '25': 3182 },
        '21': { '08': 1940, '09': 1993, '10': 2080, '11': 2124, '12': 2282, '13': 2317, '14': 2474, '15': 2509, '16': 2535, '17': 2570, '18': 2842, '19': 2868, '20': 2903, '21': 2929, '22': 3200, '23': 3235, '24': 3270, '25': 3314 },
        '22': { '08': 2007, '09': 2062, '10': 2154, '11': 2199, '12': 2364, '13': 2401, '14': 2566, '15': 2603, '16': 2630, '17': 2667, '18': 2951, '19': 2979, '20': 3015, '21': 3043, '22': 3327, '23': 3364, '24': 3400, '25': 3446 },
        '23': { '08': 2073, '09': 2131, '10': 2227, '11': 2275, '12': 2447, '13': 2486, '14': 2658, '15': 2696, '16': 2725, '17': 2763, '18': 3061, '19': 3089, '20': 3128, '21': 3156, '22': 3453, '23': 3492, '24': 3530, '25': 3578 },
        '24': { '08': 2140, '09': 2200, '10': 2300, '11': 2350, '12': 2530, '13': 2570, '14': 2750, '15': 2790, '16': 2820, '17': 2860, '18': 3170, '19': 3200, '20': 3240, '21': 3270, '22': 3580, '23': 3620, '24': 3660, '25': 3710 },
        '25': { '08': 2207, '09': 2269, '10': 2373, '11': 2425, '12': 2613, '13': 2654, '14': 2842, '15': 2884, '16': 2915, '17': 2957, '18': 3279, '19': 3311, '20': 3352, '21': 3384, '22': 3707, '23': 3748, '24': 3790, '25': 3842 },
        '26': { '08': 2273, '09': 2338, '10': 2446, '11': 2501, '12': 2696, '13': 2739, '14': 2934, '15': 2977, '16': 3010, '17': 3053, '18': 3389, '19': 3421, '20': 3465, '21': 3497, '22': 3833, '23': 3876, '24': 3920, '25': 3974 },
        '27': { '08': 2340, '09': 2407, '10': 2520, '11': 2576, '12': 2778, '13': 2823, '14': 3026, '15': 3071, '16': 3105, '17': 3150, '18': 3498, '19': 3532, '20': 3577, '21': 3611, '22': 3960, '23': 4005, '24': 4050, '25': 4106 },
        '28': { '08': 2406, '09': 2476, '10': 2593, '11': 2651, '12': 2861, '13': 2908, '14': 3118, '15': 3165, '16': 3200, '17': 3246, '18': 3608, '19': 3643, '20': 3690, '21': 3725, '22': 4086, '23': 4133, '24': 4180, '25': 4238 },
        '29': { '08': 2473, '09': 2545, '10': 2666, '11': 2726, '12': 2944, '13': 2992, '14': 3210, '15': 3258, '16': 3294, '17': 3343, '18': 3717, '19': 3754, '20': 3802, '21': 3838, '22': 4213, '23': 4261, '24': 4309, '25': 4370 },
        '30': { '08': 2539, '09': 2614, '10': 2739, '11': 2802, '12': 3027, '13': 3077, '14': 3302, '15': 3352, '16': 3389, '17': 3439, '18': 3827, '19': 3864, '20': 3914, '21': 3952, '22': 4339, '23': 4389, '24': 4439, '25': 4502 },
        '31': { '08': 2606, '09': 2683, '10': 2812, '11': 2877, '12': 3110, '13': 3161, '14': 3394, '15': 3445, '16': 3484, '17': 3536, '18': 3936, '19': 3975, '20': 4027, '21': 4065, '22': 4466, '23': 4517, '24': 4569, '25': 4634 },
        '32': { '08': 2672, '09': 2752, '10': 2886, '11': 2952, '12': 3192, '13': 3246, '14': 3486, '15': 3539, '16': 3579, '17': 3632, '18': 4046, '19': 4086, '20': 4139, '21': 4179, '22': 4592, '23': 4646, '24': 4699, '25': 4766 },
        '33': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '34': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '35': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '36': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '37': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '38': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '39': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '40': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '41': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '42': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '43': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '44': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '45': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '46': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '47': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '48': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '49': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '50': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '51': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '52': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '53': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '54': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '55': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '56': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' }
    },
    '2"': {
        '12': { '08': 1692, '09': 1727, '10': 1842, '11': 1877, '12': 1972, '13': 2007, '14': 2152, '15': 2187, '16': 2217, '17': 2252, '18': 2392, '19': 2427, '20': 2467, '21': 2502, '22': 2662, '23': 2692, '24': 2772, '25': 2807 },
        '13': { '08': 1774, '09': 1811, '10': 1936, '11': 1974, '12': 2077, '13': 2115, '14': 2272, '15': 2310, '16': 2342, '17': 2380, '18': 2532, '19': 2570, '20': 2613, '21': 2651, '22': 2824, '23': 2857, '24': 2944, '25': 2981 },
        '14': { '08': 1855, '09': 1896, '10': 2030, '11': 2071, '12': 2182, '13': 2223, '14': 2392, '15': 2433, '16': 2468, '17': 2508, '18': 2672, '19': 2713, '20': 2759, '21': 2800, '22': 2987, '23': 3022, '24': 3115, '25': 3156 },
        '15': { '08': 1937, '09': 1980, '10': 2124, '11': 2168, '12': 2287, '13': 2330, '14': 2512, '15': 2555, '16': 2593, '17': 2637, '18': 2812, '19': 2855, '20': 2905, '21': 2949, '22': 3149, '23': 3187, '24': 3287, '25': 3330 },
        '16': { '08': 2018, '09': 2065, '10': 2218, '11': 2265, '12': 2391, '13': 2438, '14': 2631, '15': 2678, '16': 2718, '17': 2765, '18': 2951, '19': 2998, '20': 3051, '21': 3098, '22': 3311, '23': 3351, '24': 3458, '25': 3505 },
        '17': { '08': 2100, '09': 2149, '10': 2312, '11': 2362, '12': 2496, '13': 2546, '14': 2751, '15': 2801, '16': 2843, '17': 2893, '18': 3091, '19': 3141, '20': 3197, '21': 3247, '22': 3474, '23': 3516, '24': 3630, '25': 3679 },
        '18': { '08': 2181, '09': 2234, '10': 2406, '11': 2459, '12': 2601, '13': 2654, '14': 2871, '15': 2924, '16': 2969, '17': 3021, '18': 3231, '19': 3284, '20': 3344, '21': 3396, '22': 3636, '23': 3681, '24': 3801, '25': 3854 },
        '19': { '08': 2263, '09': 2318, '10': 2500, '11': 2555, '12': 2706, '13': 2761, '14': 2991, '15': 3046, '16': 3094, '17': 3149, '18': 3371, '19': 3426, '20': 3490, '21': 3545, '22': 3798, '23': 3846, '24': 3973, '25': 4028 },
        '20': { '08': 2344, '09': 2402, '10': 2594, '11': 2652, '12': 2811, '13': 2869, '14': 3111, '15': 3169, '16': 3219, '17': 3277, '18': 3511, '19': 3569, '20': 3636, '21': 3694, '22': 3961, '23': 4011, '24': 4144, '25': 4202 },
        '21': { '08': 2426, '09': 2487, '10': 2688, '11': 2749, '12': 2916, '13': 2977, '14': 3231, '15': 3292, '16': 3344, '17': 3406, '18': 3651, '19': 3712, '20': 3782, '21': 3843, '22': 4123, '23': 4176, '24': 4316, '25': 4377 },
        '22': { '08': 2507, '09': 2571, '10': 2782, '11': 2846, '12': 3020, '13': 3085, '14': 3350, '15': 3415, '16': 3470, '17': 3534, '18': 3790, '19': 3855, '20': 3928, '21': 3992, '22': 4285, '23': 4340, '24': 4487, '25': 4551 },
        '23': { '08': 2589, '09': 2656, '10': 2876, '11': 2943, '12': 3125, '13': 3192, '14': 3470, '15': 3537, '16': 3595, '17': 3662, '18': 3930, '19': 3997, '20': 4074, '21': 4141, '22': 4448, '23': 4505, '24': 4659, '25': 4726 },
        '24': { '08': 2670, '09': 2740, '10': 2970, '11': 3040, '12': 3230, '13': 3300, '14': 3590, '15': 3660, '16': 3720, '17': 3790, '18': 4070, '19': 4140, '20': 4220, '21': 4290, '22': 4610, '23': 4670, '24': 4830, '25': 4900 },
        '25': { '08': 2752, '09': 2824, '10': 3064, '11': 3137, '12': 3335, '13': 3408, '14': 3710, '15': 3783, '16': 3845, '17': 3918, '18': 4210, '19': 4283, '20': 4366, '21': 4439, '22': 4772, '23': 4835, '24': 5002, '25': 5074 },
        '26': { '08': 2833, '09': 2909, '10': 3158, '11': 3234, '12': 3440, '13': 3516, '14': 3830, '15': 3906, '16': 3971, '17': 4046, '18': 4350, '19': 4426, '20': 4512, '21': 4588, '22': 4935, '23': 5000, '24': 5173, '25': 5249 },
        '27': { '08': 2915, '09': 2993, '10': 3252, '11': 3331, '12': 3545, '13': 3623, '14': 3950, '15': 4028, '16': 4096, '17': 4175, '18': 4490, '19': 4568, '20': 4658, '21': 4737, '22': 5097, '23': 5165, '24': 5345, '25': 5423 },
        '28': { '08': 2996, '09': 3078, '10': 3346, '11': 3428, '12': 3649, '13': 3731, '14': 4069, '15': 4151, '16': 4221, '17': 4303, '18': 4629, '19': 4711, '20': 4804, '21': 4886, '22': 5259, '23': 5329, '24': 5516, '25': 5598 },
        '29': { '08': 3078, '09': 3162, '10': 3440, '11': 3525, '12': 3754, '13': 3839, '14': 4189, '15': 4274, '16': 4346, '17': 4431, '18': 4769, '19': 4854, '20': 4950, '21': 5035, '22': 5422, '23': 5494, '24': 5688, '25': 5772 },
        '30': { '08': 3159, '09': 3247, '10': 3534, '11': 3622, '12': 3859, '13': 3947, '14': 4309, '15': 4397, '16': 4472, '17': 4559, '18': 4909, '19': 4997, '20': 5097, '21': 5184, '22': 5584, '23': 5659, '24': 5859, '25': 5947 },
        '31': { '08': 3241, '09': 3331, '10': 3628, '11': 3718, '12': 3964, '13': 4054, '14': 4429, '15': 4519, '16': 4597, '17': 4687, '18': 5049, '19': 5139, '20': 5243, '21': 5333, '22': 5746, '23': 5824, '24': 6031, '25': 6121 },
        '32': { '08': 3322, '09': 3415, '10': 3722, '11': 3815, '12': 4069, '13': 4162, '14': 4549, '15': 4642, '16': 4722, '17': 4815, '18': 5189, '19': 5282, '20': 5389, '21': 5482, '22': 5909, '23': 5989, '24': 6202, '25': 6295 },
        '33': { '08': 3404, '09': 3500, '10': 3816, '11': 3912, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '34': { '08': 3485, '09': 3584, '10': 3910, '11': 4009, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '35': { '08': 3567, '09': 3669, '10': 4004, '11': 4106, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '36': { '08': 3648, '09': 3753, '10': 4098, '11': 4203, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '37': { '08': 3730, '09': 3837, '10': 4192, '11': 4300, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '38': { '08': 3811, '09': 3922, '10': 4286, '11': 4397, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '39': { '08': 3893, '09': 4006, '10': 4380, '11': 4494, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '40': { '08': 3974, '09': 4091, '10': 4474, '11': 4591, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '41': { '08': 4056, '09': 4175, '10': 4568, '11': 4688, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '42': { '08': 4137, '09': 4260, '10': 4662, '11': 4785, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '43': { '08': 4219, '09': 4344, '10': 4756, '11': 4881, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '44': { '08': 4300, '09': 4428, '10': 4850, '11': 4978, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '45': { '08': 4382, '09': 4513, '10': 4944, '11': 5075, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '46': { '08': 4463, '09': 4597, '10': 5038, '11': 5172, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '47': { '08': 4545, '09': 4682, '10': 5132, '11': 5269, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '48': { '08': 4626, '09': 4766, '10': 5226, '11': 5366, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '49': { '08': 4708, '09': 4850, '10': 5320, '11': 5463, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '50': { '08': 4789, '09': 4935, '10': 5414, '11': 5560, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '51': { '08': 4871, '09': 5019, '10': 5508, '11': 5657, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '52': { '08': 4952, '09': 5104, '10': 5602, '11': 5754, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '53': { '08': 5034, '09': 5188, '10': 5696, '11': 5851, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '54': { '08': 5115, '09': 5273, '10': 5790, '11': 5948, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '55': { '08': 5197, '09': 5357, '10': 5884, '11': 6044, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '56': { '08': 5278, '09': 5441, '10': 5978, '11': 6141, '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' }
    },
    '4"家用': {
        '12': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 2488, '13': 2518, '14': 2648, '15': 2668, '16': 2798, '17': 2878, '18': 2988, '19': 3023, '20': 3153, '21': 3183, '22': 3308, '23': 3343, '24': 3478, '25': 3513 },
        '13': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 2615, '13': 2647, '14': 2788, '15': 2810, '16': 2951, '17': 3037, '18': 3157, '19': 3194, '20': 3335, '21': 3368, '22': 3503, '23': 3541, '24': 3687, '25': 3725 },
        '14': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 2742, '13': 2777, '14': 2928, '15': 2952, '16': 3103, '17': 3197, '18': 3325, '19': 3366, '20': 3518, '21': 3553, '22': 3698, '23': 3739, '24': 3897, '25': 3938 },
        '15': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 2869, '13': 2906, '14': 3069, '15': 3094, '16': 3256, '17': 3356, '18': 3494, '19': 3537, '20': 3700, '21': 3737, '22': 3894, '23': 3937, '24': 4106, '25': 4150 },
        '16': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 2995, '13': 3035, '14': 3209, '15': 3235, '16': 3409, '17': 3515, '18': 3662, '19': 3709, '20': 3882, '21': 3922, '22': 4089, '23': 4135, '24': 4315, '25': 4362 },
        '17': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3122, '13': 3165, '14': 3349, '15': 3377, '16': 3561, '17': 3675, '18': 3831, '19': 3880, '20': 4064, '21': 4107, '22': 4284, '23': 4333, '24': 4525, '25': 4574 },
        '18': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3249, '13': 3294, '14': 3489, '15': 3519, '16': 3714, '17': 3834, '18': 3999, '19': 4052, '20': 4247, '21': 4292, '22': 4479, '23': 4532, '24': 4734, '25': 4787 },
        '19': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3376, '13': 3423, '14': 3629, '15': 3661, '16': 3867, '17': 3993, '18': 4168, '19': 4223, '20': 4429, '21': 4476, '22': 4674, '23': 4730, '24': 4943, '25': 4999 },
        '20': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3503, '13': 3553, '14': 3769, '15': 3803, '16': 4019, '17': 4153, '18': 4336, '19': 4394, '20': 4611, '21': 4661, '22': 4869, '23': 4928, '24': 5153, '25': 5211 },
        '21': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3630, '13': 3682, '14': 3910, '15': 3945, '16': 4172, '17': 4312, '18': 4505, '19': 4566, '20': 4793, '21': 4846, '22': 5065, '23': 5126, '24': 5362, '25': 5423 },
        '22': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3756, '13': 3811, '14': 4050, '15': 4086, '16': 4325, '17': 4471, '18': 4673, '19': 4737, '20': 4976, '21': 5031, '22': 5260, '23': 5324, '24': 5571, '25': 5636 },
        '23': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3883, '13': 3941, '14': 4190, '15': 4228, '16': 4477, '17': 4631, '18': 4842, '19': 4909, '20': 5158, '21': 5215, '22': 5455, '23': 5522, '24': 5781, '25': 5848 },
        '24': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 4010, '13': 4070, '14': 4330, '15': 4370, '16': 4630, '17': 4790, '18': 5010, '19': 5080, '20': 5340, '21': 5400, '22': 5650, '23': 5720, '24': 5990, '25': 6060 },
        '25': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 4137, '13': 4199, '14': 4470, '15': 4512, '16': 4783, '17': 4949, '18': 5179, '19': 5251, '20': 5522, '21': 5585, '22': 5845, '23': 5918, '24': 6199, '25': 6272 },
        '26': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '27': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '28': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '29': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '30': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '31': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '32': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '33': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '34': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '35': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '36': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '37': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '38': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '39': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '40': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '41': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '42': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '43': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '44': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '45': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '46': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '47': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '48': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '49': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '50': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '51': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '52': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '53': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '54': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '55': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '56': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' }
    },
    '4"商用': {
        '12': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 2513, '13': 2538, '14': 2673, '15': 2693, '16': 2828, '17': 2903, '18': 3018, '19': 3053, '20': 3183, '21': 3218, '22': 3348, '23': 3378, '24': 3518, '25': 3548 },
        '13': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 2642, '13': 2669, '14': 2815, '15': 2837, '16': 2983, '17': 3064, '18': 3189, '19': 3227, '20': 3368, '21': 3406, '22': 3547, '23': 3579, '24': 3731, '25': 3763 },
        '14': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 2771, '13': 2800, '14': 2958, '15': 2981, '16': 3138, '17': 3226, '18': 3360, '19': 3401, '20': 3553, '21': 3593, '22': 3745, '23': 3780, '24': 3943, '25': 3978 },
        '15': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 2900, '13': 2931, '14': 3100, '15': 3125, '16': 3294, '17': 3387, '18': 3531, '19': 3575, '20': 3737, '21': 3781, '22': 3944, '23': 3981, '24': 4156, '25': 4194 },
        '16': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3029, '13': 3062, '14': 3242, '15': 3269, '16': 3449, '17': 3549, '18': 3702, '19': 3749, '20': 3922, '21': 3969, '22': 4142, '23': 4182, '24': 4369, '25': 4409 },
        '17': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3158, '13': 3193, '14': 3384, '15': 3413, '16': 3604, '17': 3710, '18': 3873, '19': 3923, '20': 4107, '21': 4156, '22': 4341, '23': 4383, '24': 4581, '25': 4624 },
        '18': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3287, '13': 3324, '14': 3527, '15': 3557, '16': 3759, '17': 3872, '18': 4044, '19': 4097, '20': 4292, '21': 4344, '22': 4539, '23': 4584, '24': 4794, '25': 4839 },
        '19': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3415, '13': 3455, '14': 3669, '15': 3700, '16': 3914, '17': 4033, '18': 4215, '19': 4270, '20': 4476, '21': 4532, '22': 4738, '23': 4785, '24': 5007, '25': 5054 },
        '20': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3544, '13': 3586, '14': 3811, '15': 3844, '16': 4069, '17': 4194, '18': 4386, '19': 4444, '20': 4661, '21': 4719, '22': 4936, '23': 4986, '24': 5219, '25': 5269 },
        '21': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3673, '13': 3717, '14': 3953, '15': 3988, '16': 4225, '17': 4356, '18': 4557, '19': 4618, '20': 4846, '21': 4907, '22': 5135, '23': 5187, '24': 5432, '25': 5485 },
        '22': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3802, '13': 3848, '14': 4096, '15': 4132, '16': 4380, '17': 4517, '18': 4728, '19': 4792, '20': 5031, '21': 5095, '22': 5333, '23': 5388, '24': 5645, '25': 5700 },
        '23': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3931, '13': 3979, '14': 4238, '15': 4276, '16': 4535, '17': 4679, '18': 4899, '19': 4966, '20': 5215, '21': 5282, '22': 5532, '23': 5589, '24': 5857, '25': 5915 },
        '24': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 4060, '13': 4110, '14': 4380, '15': 4420, '16': 4690, '17': 4840, '18': 5070, '19': 5140, '20': 5400, '21': 5470, '22': 5730, '23': 5790, '24': 6070, '25': 6130 },
        '25': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 4189, '13': 4241, '14': 4522, '15': 4564, '16': 4845, '17': 5001, '18': 5241, '19': 5314, '20': 5585, '21': 5658, '22': 5929, '23': 5991, '24': 6283, '25': 6345 },
        '26': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '27': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '28': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '29': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '30': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '31': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '32': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '33': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '34': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '35': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '36': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '37': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '38': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '39': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '40': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '41': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '42': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '43': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '44': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '45': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '46': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '47': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '48': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '49': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '50': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '51': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '52': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '53': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '54': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '55': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '56': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' }
    },
    '5"': {
        '12': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 2584, '13': 2619, '14': 2764, '15': 2784, '16': 2934, '17': 3024, '18': 3149, '19': 3194, '20': 3334, '21': 3374, '22': 3519, '23': 3554, '24': 3709, '25': 3749 },
        '13': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 2715, '13': 2753, '14': 2910, '15': 2932, '16': 3094, '17': 3192, '18': 3327, '19': 3376, '20': 3527, '21': 3571, '22': 3728, '23': 3766, '24': 3934, '25': 3977 },
        '14': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 2846, '13': 2887, '14': 3056, '15': 3080, '16': 3255, '17': 3360, '18': 3505, '19': 3558, '20': 3721, '21': 3768, '22': 3937, '23': 3978, '24': 4159, '25': 4205 },
        '15': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 2978, '13': 3021, '14': 3203, '15': 3228, '16': 3415, '17': 3528, '18': 3684, '19': 3740, '20': 3915, '21': 3965, '22': 4146, '23': 4190, '24': 4384, '25': 4434 },
        '16': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3109, '13': 3156, '14': 3349, '15': 3376, '16': 3576, '17': 3696, '18': 3862, '19': 3922, '20': 4109, '21': 4162, '22': 4356, '23': 4402, '24': 4609, '25': 4662 },
        '17': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3240, '13': 3290, '14': 3495, '15': 3524, '16': 3736, '17': 3864, '18': 4041, '19': 4105, '20': 4303, '21': 4360, '22': 4565, '23': 4615, '24': 4834, '25': 4891 },
        '18': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3372, '13': 3424, '14': 3642, '15': 3672, '16': 3897, '17': 4032, '18': 4219, '19': 4287, '20': 4497, '21': 4557, '22': 4774, '23': 4827, '24': 5059, '25': 5119 },
        '19': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3503, '13': 3559, '14': 3788, '15': 3820, '16': 4057, '17': 4200, '18': 4398, '19': 4469, '20': 4691, '21': 4754, '22': 4984, '23': 5039, '24': 5284, '25': 5348 },
        '20': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3635, '13': 3693, '14': 3935, '15': 3968, '16': 4218, '17': 4368, '18': 4576, '19': 4651, '20': 4885, '21': 4951, '22': 5193, '23': 5251, '24': 5510, '25': 5576 },
        '21': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3766, '13': 3827, '14': 4081, '15': 4116, '16': 4378, '17': 4536, '18': 4755, '19': 4833, '20': 5078, '21': 5148, '22': 5402, '23': 5463, '24': 5735, '25': 5805 },
        '22': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 3897, '13': 3961, '14': 4227, '15': 4264, '16': 4539, '17': 4704, '18': 4933, '19': 5016, '20': 5272, '21': 5346, '22': 5611, '23': 5676, '24': 5960, '25': 6033 },
        '23': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 4029, '13': 4096, '14': 4374, '15': 4412, '16': 4699, '17': 4872, '18': 5112, '19': 5198, '20': 5466, '21': 5543, '22': 5821, '23': 5888, '24': 6185, '25': 6262 },
        '24': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 4160, '13': 4230, '14': 4520, '15': 4560, '16': 4860, '17': 5040, '18': 5290, '19': 5380, '20': 5660, '21': 5740, '22': 6030, '23': 6100, '24': 6410, '25': 6490 },
        '25': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 4291, '13': 4364, '14': 4666, '15': 4708, '16': 5021, '17': 5208, '18': 5468, '19': 5562, '20': 5854, '21': 5937, '22': 6239, '23': 6312, '24': 6635, '25': 6718 },
        '26': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '27': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '28': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '29': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '30': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '31': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '32': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '33': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '34': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '35': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '36': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '37': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '38': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '39': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '40': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '41': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '42': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '43': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '44': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '45': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '46': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '47': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '48': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '49': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '50': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '51': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '52': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '53': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '54': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '55': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' },
        '56': { '08': 'NA', '09': 'NA', '10': 'NA', '11': 'NA', '12': 'NA', '13': 'NA', '14': 'NA', '15': 'NA', '16': 'NA', '17': 'NA', '18': 'NA', '19': 'NA', '20': 'NA', '21': 'NA', '22': 'NA', '23': 'NA', '24': 'NA', '25': 'NA' }
    }
};

// ==================== 全局数据变量 ====================
let equivalentMap = {};        // 数值等价关系映射表（输入值 -> 实际mm值）
let equivalentValues = [];     // 数值等价关系数组，用于管理界面展示
let styleConfig = [];          // 款式配置数组，包含厚度、密度系数等参数
let priceData = {};            // 面价数据对象

// ==================== 工具函数 ====================

/**
 * 四舍五入到指定倍数
 * @param {number} value - 要处理的数值
 * @param {number} multiple - 倍数（如10表示四舍五入到十位）
 * @returns {number} 四舍五入后的结果
 */
function mround(value, multiple) {
    return Math.round(value / multiple) * multiple;
}

/**
 * 计算产品型号
 * @param {string|number} width - 宽度（英寸）
 * @param {string|number} height - 高度（英寸）
 * @param {string} style - 款式代码（1/2/4home/4biz/5）
 * @returns {string} 产品型号（如EAF12121M-E）
 */
function calculateProductModel(width, height, style) {
    // 款式后缀映射表
    const styleSuffixMap = {
        '1': '1M-E',      // 1"款式后缀
        '2': '2M-E',      // 2"款式后缀
        '4home': '4M-E',  // 4"家用款式后缀
        '4biz': '4MA-E',  // 4"商用款式后缀
        '5': '5MB-E'      // 5"款式后缀
    };
    const suffix = styleSuffixMap[style] || '';  // 获取对应款式的后缀，若不存在则为空
    return `EAF${width}${height}${suffix}`;      // 拼接产品型号
}

/**
 * 获取款式配置信息
 * @param {string} style - 款式代码
 * @returns {object|null} 款式配置对象（包含厚度、密度系数等）
 */
function getStyleInfo(style) {
    if (!styleConfig || styleConfig.length === 0) {
        console.warn('样式配置未加载');
        return null;
    }
    const info = styleConfig.find(s => s.style === style);
    if (!info) {
        console.warn('样式未找到:', style, '可用样式:', styleConfig.map(s => s.style));
    }
    return info;
}

/**
 * 获取数值的等价mm值
 * @param {string|number} key - 输入值
 * @returns {string|number} 实际mm值，如果未配置则返回原值
 */
function getEquivalentValue(key) {
    return equivalentMap[key] || key;
}

/**
 * 获取面价数据
 * @param {string} style - 款式代码
 * @param {string|number} width - 宽度
 * @param {string|number} height - 高度
 * @returns {string} 面价（如"123.45"）或"NA"表示无数据
 */
function getPrice(style, width, height) {
    const styleMap = {
        '1': '1"',
        '2': '2"',
        '4home': '4"家用',
        '4biz': '4"商用',
        '5': '5"'
    };
    const priceStyle = styleMap[style] || style;
    
    if (!priceData[priceStyle] || !priceData[priceStyle][height] || !priceData[priceStyle][height][width]) {
        return 'NA';
    }
    return priceData[priceStyle][height][width];
}



/**
 * 计算外形尺寸
 * @param {string|number} width - 宽度
 * @param {string|number} height - 高度
 * @param {string} style - 款式代码
 * @returns {object} 包含widthMm、heightMm、thickness的对象
 */
function calculateDimensions(width, height, style) {
    const widthMm = parseFloat(getEquivalentValue(width));
    const heightMm = parseFloat(getEquivalentValue(height));
    const info = getStyleInfo(style);
    const thickness = info ? info.thickness : 0;
    return { widthMm, heightMm, thickness };
}

/**
 * 计算单台包装尺寸和重量
 * @param {string|number} width - 宽度
 * @param {string|number} height - 高度
 * @param {string} style - 款式代码
 * @returns {object} 包含singlePackLength、singlePackWidth、singlePackHeight、singlePackWeight的对象
 */
function calculateSinglePackSize(width, height, style) {
    const info = getStyleInfo(style);
    if (!info) return { singlePackLength: '', singlePackWidth: '', singlePackHeight: '', singlePackWeight: '' };
    
    const { widthMm, heightMm } = calculateDimensions(width, height, style);
    const netWeight = calculateNetWeight(width, height, style);
    
    const singlePackLength = Math.round((widthMm + 65) / 5) * 5;
    const singlePackWidth = info.singlePackThickness;
    const singlePackHeight = Math.round((heightMm + 65) / 5) * 5;
    const singlePackWeight = netWeight ? (Math.floor(netWeight * 1.3 * 10) / 10) : '';
    
    return { singlePackLength, singlePackWidth, singlePackHeight, singlePackWeight };
}

/**
 * 计算五台包装尺寸和重量
 * @param {string|number} width - 宽度
 * @param {string|number} height - 高度
 * @param {string} style - 款式代码
 * @returns {object} 包含fivePackLength、fivePackWidth、fivePackHeight、fivePackWeight的对象
 */
function calculateFivePackSize(width, height, style) {
    const info = getStyleInfo(style);
    if (!info || info.fivePackThickness === '/') return { fivePackLength: '', fivePackWidth: '', fivePackHeight: '', fivePackWeight: '' };
    
    const { widthMm, heightMm } = calculateDimensions(width, height, style);
    const netWeight = calculateNetWeight(width, height, style);
    
    const fivePackLength = Math.round((widthMm + 65) / 5) * 5;
    const fivePackWidth = info.fivePackThickness;
    const fivePackHeight = Math.round((heightMm + 65) / 5) * 5;
    
    let fivePackWeight = '';
    if (netWeight) {
        const singlePackWeight = netWeight * 1.3;
        fivePackWeight = Math.floor(singlePackWeight * 5 * 1.1 * 10) / 10;
    }
    
    return { fivePackLength, fivePackWidth, fivePackHeight, fivePackWeight };
}

/**
 * 计算产品净重
 * @param {string|number} width - 宽度
 * @param {string|number} height - 高度
 * @param {string} style - 款式代码
 * @returns {number|string} 净重（KG），无数据时返回空字符串
 */
function calculateNetWeight(width, height, style) {
    const info = getStyleInfo(style);
    if (!info) return '';
    
    const { widthMm, heightMm } = calculateDimensions(width, height, style);  // 获取实际尺寸（mm）
    const area = widthMm * heightMm / 1000000;                                  // 计算面积（平方米）
    const weight = area * info.kgFactor;                                        // 面积乘以密度系数得到净重
    
    return weight;
}

/**
 * 计算单台毛重
 * @param {number} netWeight - 净重
 * @returns {number|string} 毛重（KG），无数据时返回空字符串
 */
function calculateGrossWeight(netWeight) {
    if (!netWeight) return '';       // 如果没有净重数据，返回空字符串
    return netWeight * 1.3;          // 毛重 = 净重 × 1.3
}

/**
 * 计算五台毛重
 * @param {number} grossWeight - 单台毛重
 * @param {boolean} hasFivePack - 是否有五台包装
 * @returns {number|string} 五台毛重（KG），无数据时返回空字符串
 */
function calculateFivePackGrossWeight(grossWeight, hasFivePack) {
    if (!grossWeight || !hasFivePack) return '';  // 无数据或无五台包装时返回空
    return grossWeight * 1.1 * 5;                 // 五台毛重 = 单台毛重 × 1.1 × 5
}

/**
 * 计算标示风量
 * @param {string|number} width - 宽度（英寸）
 * @param {string|number} height - 高度（英寸）
 * @param {string} style - 款式代码
 * @returns {number} 风量值（四舍五入到十位）
 */
function calculateAirFlow(width, height, style) {
    const widthInch = parseFloat(width);   // 转换宽度为浮点数
    const heightInch = parseFloat(height); // 转换高度为浮点数
    
    // 根据款式选择不同的计算公式
    if (style === '4home' || style === '4biz' || style === '5') {
        // 4"/5"款式公式：MROUND(宽度×25.4×高度×25.4×风速2.54×3600/1000000, 10)
        return mround(widthInch * 25.4 * heightInch * 25.4 * 2.54 * 3600 / 1000000, 10);
    } else {
        // 1"/2"款式公式：MROUND((宽度×25.4-13-30)×(高度×25.4-13-65)×风速1.5×3600/1000000×系数1.018, 10)
        return mround((widthInch * 25.4 - 13 - 30) * (heightInch * 25.4 - 13 - 65) * 1.5 * 3600 / 1000000 * 1.018, 10);
    }
}

/**
 * 计算产品报价结果
 * @param {string|number} width - 宽度（英寸）
 * @param {string|number} height - 高度（英寸）
 * @param {string} style - 款式代码
 * @param {string} brand - 品牌
 * @param {string} currency - 货币类型（CNY/外币）
 * @param {number} exchangeRate - 汇率
 * @returns {object} 包含计算结果的对象
 */
function calculateResults(width, height, style, brand, currency = 'CNY', exchangeRate = 1) {
    // 获取各项计算数据
    const { widthMm, heightMm, thickness } = calculateDimensions(width, height, style);  // 尺寸
    const netWeight = calculateNetWeight(width, height, style);                           // 净重
    const grossWeight = calculateGrossWeight(netWeight);                                 // 单台毛重
    const originalPrice = getPrice(style, width, height);                                // 原始面价
    const singlePackSize = calculateSinglePackSize(width, height, style);                // 单台包装尺寸
    const fivePackSize = calculateFivePackSize(width, height, style);                    // 五台包装尺寸
    const hasFivePack = fivePackSize.fivePackLength !== '';                              // 是否有五台包装
    
    // 处理货币转换：如果选择外币且价格有效，进行汇率转换
    let price = originalPrice;
    if (originalPrice !== 'NA' && currency === '外币(如美元)') {
        const priceValue = parseFloat(originalPrice);
        if (!isNaN(priceValue) && exchangeRate > 0) {
            price = Math.round(priceValue / exchangeRate);  // 面价 ÷ 汇率，四舍五入取整
        }
    }
    
    const isPriceNA = price === 'NA';  // 判断面价是否为NA
    
    // 格式化包装尺寸字符串（如：300×110×300）
    const singlePackStr = singlePackSize.singlePackLength ? `${singlePackSize.singlePackLength}×${singlePackSize.singlePackWidth}×${singlePackSize.singlePackHeight}` : '';
    const fivePackStr = fivePackSize.fivePackLength ? `${fivePackSize.fivePackLength}×${fivePackSize.fivePackWidth}×${fivePackSize.fivePackHeight}` : getLang('no_five_pack');
    
    // 面价为NA时显示"无法生产"
    const unavailableText = getLang('unavailable');
    
    // 返回计算结果对象
    return {
        key: `${brand}_${width}_${height}_${style}`,  // 唯一标识键
        params: { brand, width, height, style },       // 查询参数
        results: {
            '产品型号': calculateProductModel(width, height, style),  // 计算产品型号
            '面价': price,                                            // 面价（已转换货币）
            '外形尺寸(L*H*D)mm': isPriceNA ? unavailableText : `${Math.round(widthMm)}×${Math.round(heightMm)}×${thickness}`,  // 外形尺寸
            '产品净重(KG)': isPriceNA ? unavailableText : (netWeight ? Math.floor(netWeight * 10) / 10 : ''),  // 净重（保留1位小数）
            '单台包装尺寸(L*W*H)mm': isPriceNA ? unavailableText : singlePackStr,  // 单台包装尺寸
            '毛重(KG)(1台/箱)': isPriceNA ? unavailableText : (grossWeight ? Math.floor(grossWeight * 10) / 10 : ''),  // 单台毛重
            '五台包装尺寸(L*W*H)mm': isPriceNA ? unavailableText : fivePackStr,    // 五台包装尺寸
            '毛重(KG)(5台/箱)': isPriceNA ? unavailableText : (hasFivePack ? (fivePackSize.fivePackWeight || '') : getLang('no_five_pack')),  // 五台毛重
            '标示风量(m³/h)': calculateAirFlow(width, height, style)  // 标示风量（始终正常计算）
        }
    };
}

// ==================== 页面初始化与事件处理 ====================

/**
 * 页面加载完成后的初始化函数
 */
document.addEventListener('DOMContentLoaded', function() {
    const confirmBtn = document.getElementById('confirmBtn');
    
    // 加载保存的数据（必须先加载，确保styleConfig等配置就绪）
    loadData();
    
    // 页面加载时自动切换为中文
    changeLanguage('zh');
    
    // 渲染管理面板，更新计算说明
    renderAdminPanel();
    updateCalculationInstructions();
    
    // 获取页面上的选择器元素
    const styleSelect = document.getElementById('styleSelect');
    const currencySelect = document.getElementById('currencySelect');
    const rateInput = document.getElementById('exchangeRateInput');
    
    // 将当前选择值保存到全局变量
    window.currentStyle = styleSelect ? styleSelect.value : '';
    window.currentBrand = 'AQ';
    window.currentCurrency = currencySelect ? currencySelect.value : '';
    window.currentExchangeRate = rateInput ? rateInput.value : '1';
    
    // 初始化宽度和高度下拉菜单选项（过滤掉NA的选项）
    onStyleChange();
    
    // 绑定确认查询按钮的点击事件
    confirmBtn.addEventListener('click', function() {
        searchData();
    });
    
    // 页面加载后立即执行一次搜索
    searchData();
});

/**
 * 从localStorage加载保存的数据
 * 如果没有保存的数据，则使用默认数据
 */
function loadData() {
    // 从localStorage获取保存的数据
    const savedEquivalent = localStorage.getItem('equivalentMap');
    const savedStyle = localStorage.getItem('styleConfig');
    const savedPrice = localStorage.getItem('priceData');
    const savedFcAccessories = localStorage.getItem('fcAccessories');
    const savedAhuAccessories = localStorage.getItem('ahuAccessories');
    const savedUsDuctAccessories = localStorage.getItem('usDuctAccessories');
    
    // 加载数值等价关系映射表
    if (savedEquivalent) {
        try {
            equivalentMap = JSON.parse(savedEquivalent);
        } catch {
            equivalentMap = { ...defaultEquivalentMap };  // 解析失败时使用默认值
        }
    } else {
        equivalentMap = { ...defaultEquivalentMap };
    }
    
    // 将等价关系转换为数组格式，方便渲染选择器
    equivalentValues = Object.keys(equivalentMap).sort().map(input => ({
        input: input.padStart(2, '0'),  // 补零，确保两位数格式
        mm: parseFloat(equivalentMap[input]) || 0  // 转换为数值
    }));
    
    // 加载款式配置（使用深拷贝避免修改默认值）
    styleConfig = JSON.parse(JSON.stringify(defaultStyleConfig));
    
    // 加载面价数据
    if (savedPrice) {
        try {
            priceData = JSON.parse(savedPrice);
        } catch {
            priceData = JSON.parse(JSON.stringify(defaultPriceData));
        }
    } else {
        priceData = JSON.parse(JSON.stringify(defaultPriceData));
    }
    
    // 加载风机盘管配件数据
    if (savedFcAccessories) {
        try {
            fcAccessories = JSON.parse(savedFcAccessories);
            // 自动更新旧数据中的名称（"内法固定件" -> "内法兰固定件"，"外法固定件" -> "外法兰固定件"）
            fcAccessories.forEach(item => {
                if (item.name && item.name.includes('内法固定件')) {
                    item.name = item.name.replace('内法固定件', '内法兰固定件');
                }
                if (item.name && item.name.includes('外法固定件')) {
                    item.name = item.name.replace('外法固定件', '外法兰固定件');
                }
            });
        } catch {
            fcAccessories = JSON.parse(JSON.stringify(defaultFcAccessories));
        }
    } else {
        fcAccessories = JSON.parse(JSON.stringify(defaultFcAccessories));
    }
    
    // 加载空调箱配件数据
    if (savedAhuAccessories) {
        try {
            ahuAccessories = JSON.parse(savedAhuAccessories);
        } catch {
            ahuAccessories = JSON.parse(JSON.stringify(defaultAhuAccessories));
        }
    } else {
        ahuAccessories = JSON.parse(JSON.stringify(defaultAhuAccessories));
    }
    
    // 加载美式风管机配件数据（强制使用默认预设值）
    try {
        localStorage.removeItem('usDuctAccessories');
    } catch (e) {
        // 忽略存储操作错误
    }
    usDuctAccessories = JSON.parse(JSON.stringify(defaultUsDuctAccessories));
}

/**
 * 保存所有数据到localStorage
 */
function saveAllData() {
    localStorage.setItem('equivalentMap', JSON.stringify(equivalentMap));
    localStorage.setItem('styleConfig', JSON.stringify(styleConfig));
    localStorage.setItem('priceData', JSON.stringify(priceData));
    localStorage.setItem('fcAccessories', JSON.stringify(fcAccessories));
    localStorage.setItem('ahuAccessories', JSON.stringify(ahuAccessories));
    localStorage.setItem('usDuctAccessories', JSON.stringify(usDuctAccessories));
    
    updateSizeRange();
    searchData();
    renderFcAccessoryTable();
    renderAhuAccessoryTable();
    renderUsDuctAccessoryTable();
    renderAccessoryTables();
    updateFanCoilAccessories();
    
    document.getElementById('saveStatus').textContent = getLang('save_success');
    document.getElementById('saveStatus').className = 'status success';
    
    setTimeout(() => {
        document.getElementById('saveStatus').textContent = '';
        document.getElementById('saveStatus').className = 'status';
    }, 3000);
}

/**
 * 重置所有数据为默认值
 */
function resetAllData() {
    equivalentMap = { ...defaultEquivalentMap };
    styleConfig = JSON.parse(JSON.stringify(defaultStyleConfig));
    priceData = JSON.parse(JSON.stringify(defaultPriceData));
    fcAccessories = JSON.parse(JSON.stringify(defaultFcAccessories));
    ahuAccessories = JSON.parse(JSON.stringify(defaultAhuAccessories));
    usDuctAccessories = JSON.parse(JSON.stringify(defaultUsDuctAccessories));
    
    // 清除 localStorage 中的旧数据，确保下次加载时使用新的默认数据
    localStorage.removeItem('fcAccessories');
    localStorage.removeItem('ahuAccessories');
    localStorage.removeItem('usDuctAccessories');
    
    renderAdminPanel();
    searchData();
    renderFcAccessoryTable();
    renderAhuAccessoryTable();
    renderUsDuctAccessoryTable();
    
    document.getElementById('saveStatus').textContent = getLang('reset_success');
    document.getElementById('saveStatus').className = 'status success';
    
    setTimeout(() => {
        document.getElementById('saveStatus').textContent = '';
        document.getElementById('saveStatus').className = 'status';
    }, 3000);
}

/**
 * 切换管理员面板的显示/隐藏状态
 */
function toggleAdminPanel() {
    const panel = document.getElementById('adminPanel');
    const inputSection = document.querySelector('.input-section');
    const resultSection = document.getElementById('resultSection');
    const productListSection = document.getElementById('productListSection');
    const batchQuerySection = document.getElementById('batchQuerySection');
    const btn = document.getElementById('adminBtn');
    
    if (panel.style.display === 'none') {
        // 显示管理员面板，隐藏其他区域
        panel.style.display = 'block';
        inputSection.style.display = 'none';
        resultSection.style.display = 'none';
        productListSection.style.display = 'none';
        batchQuerySection.style.display = 'none';
        btn.textContent = getLang('admin_hide');  // 按钮文本改为"隐藏"
    } else {
        // 隐藏管理员面板，显示输入和结果区域
        panel.style.display = 'none';
        inputSection.style.display = 'block';
        resultSection.style.display = 'block';
        btn.textContent = getLang('admin_show');  // 按钮文本改为"显示"
    }
}

/**
 * 切换产品列表的显示/隐藏状态
 */
function toggleProductList() {
    const productListSection = document.getElementById('productListSection');
    const inputSection = document.querySelector('.input-section');
    const resultSection = document.getElementById('resultSection');
    const adminPanel = document.getElementById('adminPanel');
    const batchQuerySection = document.getElementById('batchQuerySection');
    const btn = document.getElementById('listBtn');
    
    if (productListSection.style.display === 'none' || productListSection.style.display === '') {
        // 获取当前选择的筛选条件
        const styleSelect = document.getElementById('styleSelect');
        const currencySelect = document.getElementById('currencySelect');
        const rateInput = document.getElementById('exchangeRateInput');
        
        // 保存当前选择到全局变量
        window.currentStyle = styleSelect ? styleSelect.value : '';
        window.currentBrand = 'AQ';
        window.currentCurrency = currencySelect ? currencySelect.value : '';
        window.currentExchangeRate = rateInput ? rateInput.value : '1';
        
        // 显示产品列表，隐藏其他区域
        productListSection.style.display = 'block';
        if (inputSection) inputSection.style.display = 'none';
        if (resultSection) resultSection.style.display = 'none';
        if (adminPanel) adminPanel.style.display = 'none';
        if (batchQuerySection) batchQuerySection.style.display = 'none';
        btn.textContent = getLang('product_list_hide');  // 按钮文本改为"隐藏"
        
        // 渲染产品列表
        renderProductList();
    } else {
        // 隐藏产品列表，显示输入和结果区域
        productListSection.style.display = 'none';
        if (inputSection) inputSection.style.display = 'block';
        if (resultSection) resultSection.style.display = 'block';
        btn.textContent = getLang('product_list_show');  // 按钮文本改为"显示"
    }
}

/**
 * 渲染简单的产品列表（测试数据）
 */
function renderProductListSimple() {
    const container = document.getElementById('productList');
    if (!container) {
        alert('productList container not found');
        return;
    }
    
    // 获取筛选条件
    const styleSelect = document.getElementById('styleSelect');
    const currencySelect = document.getElementById('currencySelect');
    const rateInput = document.getElementById('exchangeRateInput');
    
    // 建立款式代码与显示名称的映射
    const styleCode = styleSelect ? styleSelect.value : '';
    const styleMap = {
        '': '全部',
        '1': '1"',
        '2': '2"',
        '4home': '4"家用',
        '4biz': '4"商用',
        '5': '5"'
    };
    const currentStyle = styleMap[styleCode] || '全部';
    const currency = currencySelect ? currencySelect.options[currencySelect.selectedIndex].text : '未选择';
    const exchangeRate = rateInput ? rateInput.value : '1';
    
    // 构建筛选条件显示区域
    let html = '<div style="margin-bottom: 15px; padding: 8px 15px; background: #f8f9fa; border-radius: 6px; text-align: left; color: #666; font-size: 13px;">';
    html += getLang('filter_condition') + ': ' + getLang('style') + '=' + currentStyle + ' | ' + getLang('currency') + '=' + currency + ' | ' + getLang('exchange_rate') + '=' + exchangeRate;
    html += '</div>';
    
    // 构建表格头部
    html += '<table class="product-list-table" id="productDataTable">';
    html += '<thead><tr>';
    html += '<th>' + getLang('product_model') + '</th>';
    html += '<th>' + getLang('air_flow_m3h') + '</th>';
    html += '<th>' + getLang('price') + '</th>';
    html += '<th>' + getLang('outer_dimension') + '</th>';
    html += '<th>' + getLang('net_weight_kg') + '</th>';
    html += '<th>' + getLang('single_pack_dimension') + '</th>';
    html += '<th>' + getLang('gross_weight_kg_1') + '</th>';
    html += '<th>' + getLang('five_pack_dimension') + '</th>';
    html += '<th>' + getLang('gross_weight_kg_5') + '</th>';
    html += '</tr></thead>';
    html += '<tbody>';
    
    html += '</tbody></table>';
    container.innerHTML = html;
}

/**
 * 渲染完整的产品列表（根据实际数据）
 */
function renderProductList() {
    const container = document.getElementById('productList');
    
    if (!container) {
        alert('productList container not found');
        return;
    }
    
    // 获取筛选条件（从全局变量）
    let filterStyle = window.currentStyle || '';
    let filterBrand = window.currentBrand || 'AQ';
    
    if (!filterBrand) {
        filterBrand = 'AQ';  // 默认品牌为AQ
    }
    
    // 建立款式代码与显示名称的映射
    const styleMap = { 
        '': getLang('all'), 
        '1': getLang('style_1'), 
        '2': getLang('style_2'), 
        '4home': getLang('style_4home'), 
        '4biz': getLang('style_4biz'), 
        '5': getLang('style_5') 
    };
    const priceStyleMap = { '1': '1"', '2': '2"', '4home': '4"家用', '4biz': '4"商用', '5': '5"' };
    const partStyleMap = { '1': '1"', '2': '2"', '4home': '4"家用', '4biz': '4"商用', '5': '5"' };
    
    console.log('renderProductList called, filterStyle:', filterStyle, 'filterBrand:', filterBrand);
    console.log('priceData keys:', Object.keys(priceData || {}));
    console.log('priceStyleMap[filterStyle]:', priceStyleMap[filterStyle]);
    
    // 获取货币和汇率设置
    const currencyCode = window.currentCurrency || '';
    const exchangeRate = window.currentExchangeRate || '1';
    
    const currencyMap = {
        '本币(人民币)': getLang('currency_cny'),
        '外币(如美元)': getLang('currency_usd'),
        '': getLang('not_selected')
    };
    const currency = currencyMap[currencyCode] || getLang('not_selected');
    
    // 构建筛选条件和导出按钮区域（同一行）
    let html = '<div style="margin-bottom: 15px; padding: 8px 15px; background: #f8f9fa; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">';
    html += '<span style="color: #666; font-size: 13px;">' + getLang('filter_condition') + ': ' + getLang('style') + '=' + styleMap[filterStyle] + ' | ' + getLang('currency') + '=' + currency;
    if (currencyCode !== '本币(人民币)') {
        html += ' | ' + getLang('exchange_rate') + '=' + exchangeRate;
    }
    html += '</span>';
    html += '<button id="downloadListBtn" class="admin-btn" onclick="downloadProductList()" data-lang="export_excel">📤 导出Excel</button>';
    html += '</div>';
    
    // 构建表格头部
    html += '<table class="product-list-table" id="productDataTable">';
    html += '<thead><tr>';
    html += '<th>' + getLang('product_model') + '</th>';
    html += '<th>' + getLang('air_flow_m3h') + '</th>';
    html += '<th>' + getLang('price') + '</th>';
    html += '<th>' + getLang('outer_dimension') + '</th>';
    html += '<th>' + getLang('net_weight_kg') + '</th>';
    html += '<th>' + getLang('single_pack_dimension') + '</th>';
    html += '<th>' + getLang('gross_weight_kg_1') + '</th>';
    html += '<th>' + getLang('five_pack_dimension') + '</th>';
    html += '<th>' + getLang('gross_weight_kg_5') + '</th>';
    html += '</tr></thead>';
    html += '<tbody>';
    
    // 确定需要遍历的款式
    const styles = filterStyle ? [filterStyle] : ['1', '2', '4home', '4biz', '5'];
    
    let rowCount = 0;  // 记录渲染的行数
    
    // 检查数据是否有效
    if (!priceData || typeof priceData !== 'object') {
        console.log('priceData is empty or not an object:', priceData);
        // 显示数据未加载提示
        html += '<tr><td colspan="10" style="text-align:center;color:#999;">' + getLang('data_not_loaded') + '</td></tr>';
        html += '</tbody></table>';
        container.innerHTML = html;
        return;
    }
    
    console.log('priceData loaded successfully, styles:', styles, 'brand:', filterBrand);
    
    // 遍历所有款式
    for (let i = 0; i < styles.length; i++) {
            const style = styles[i];
            const priceKey = priceStyleMap[style];
            
            // 如果该款式没有价格数据，跳过
            if (!priceData[priceKey]) continue;
            
            // 获取该款式下的所有高度
            const heights = Object.keys(priceData[priceKey]);
            for (let j = 0; j < heights.length; j++) {
                const height = heights[j];
                if (!priceData[priceKey][height]) continue;
                
                // 获取该高度下的所有宽度
                const widths = Object.keys(priceData[priceKey][height]);
                for (let k = 0; k < widths.length; k++) {
                    const width = widths[k];
                    const price = priceData[priceKey][height][width];
                    
                    // 跳过无效价格（空、NA等）
                    if (price === null || price === undefined || price === '' || price === 'NA') continue;
                    
                    // 计算各项产品数据
                    const productModel = calculateProductModel(width, height, style);
                    const dims = calculateDimensions(width, height, style);
                    const netWeight = calculateNetWeight(width, height, style);
                    const markedAirflow = calculateAirFlow(width, height, style);
                    const singlePack = calculateSinglePackSize(width, height, style);
                    const fivePack = calculateFivePackSize(width, height, style);
                    
                    // 处理货币转换
                    let displayPrice = price;
                    if (currencyCode === '外币(如美元)') {
                        const priceValue = parseFloat(price);
                        const rateValue = parseFloat(exchangeRate);
                        if (!isNaN(priceValue) && !isNaN(rateValue) && rateValue > 0) {
                            displayPrice = Math.floor(priceValue / rateValue);
                        }
                    }
                    
                    // 渲染表格行
                    html += '<tr>';
                    html += '<td>' + productModel + '</td>';
                    html += '<td>' + markedAirflow + '</td>';
                    html += '<td>' + displayPrice + '</td>';
                    html += '<td>' + Math.round(dims.widthMm) + '×' + Math.round(dims.heightMm) + '×' + dims.thickness + '</td>';
                    html += '<td>' + (netWeight ? (Math.floor(netWeight * 10) / 10) : '') + '</td>';
                    html += '<td>' + singlePack.singlePackLength + '×' + singlePack.singlePackWidth + '×' + singlePack.singlePackHeight + '</td>';
                    html += '<td>' + singlePack.singlePackWeight + '</td>';
                    if (fivePack.fivePackLength === '') {
                        html += '<td colspan="2" style="text-align:center;color:#999;">' + getLang('no_five_pack') + '</td>';
                    } else {
                        html += '<td>' + fivePack.fivePackLength + '×' + fivePack.fivePackWidth + '×' + fivePack.fivePackHeight + '</td>';
                        html += '<td>' + fivePack.fivePackWeight + '</td>';
                    }
                    html += '</tr>';
                    rowCount++;
                }
            }
        }
    
    // 如果没有匹配的数据，显示提示和测试数据
    if (rowCount === 0) {
        html += '<tr><td colspan="9" style="text-align:center;color:#999;">暂无数据 - 筛选条件: 款式=' + filterStyle + '</td></tr>';
        html += '<tr><td colspan="9" style="text-align:center;color:#666;">测试数据示例：</td></tr>';
        html += '<tr><td>EAF08121M-E</td><td>100</td><td>1342</td><td>203×305×150</td><td>2.5</td><td>250×350×200</td><td>3.0</td><td>500×700×400</td><td>15.0</td></tr>';
        html += '<tr><td>EAF09132M-E</td><td>150</td><td>1441</td><td>229×330×150</td><td>3.0</td><td>280×380×200</td><td>3.5</td><td>560×760×400</td><td>17.5</td></tr>';
    }
    
    html += '</tbody></table>';
    container.innerHTML = html;
}

/**
 * 下载产品列表为CSV文件
 */
function downloadProductList() {
    const table = document.getElementById('productDataTable');
    if (!table) {
        alert('没有可导出的数据');
        return;
    }
    
    let csv = '';
    const headers = ['产品型号', '标示风量(m³/h)', '面价', '外形尺寸(L*H*D)mm', '产品净重(KG)', '单台包装尺寸(L*W*H)mm', '毛重(KG)(1台/箱)', '五台包装尺寸(L*W*H)mm', '毛重(KG)(5台/箱)'];
    csv += headers.join(',') + '\n';
    
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowData = Array.from(cells).map(cell => {
            const text = cell.textContent || '';
            return `"${text.replace(/"/g, '""')}"`;
        });
        csv += rowData.join(',') + '\n';
    });
    
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', '产品详细列表.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function renderAdminPanel() {
    renderEquivalentTable();
    renderStyleTable();
    renderPriceTable();
    renderFcAccessoryTable();
    renderAhuAccessoryTable();
    renderUsDuctAccessoryTable();
}

function renderEquivalentTable() {
    const container = document.getElementById('equivalentTable');
    const keys = Object.keys(equivalentMap).sort();
    const quarterLength = Math.ceil(keys.length / 4);
    const group1 = keys.slice(0, quarterLength);
    const group2 = keys.slice(quarterLength, quarterLength * 2);
    const group3 = keys.slice(quarterLength * 2, quarterLength * 3);
    const group4 = keys.slice(quarterLength * 3);
    
    let html = '<table class="equivalent-8col">';
    html += `<thead><tr><th>${getLang('input_value')}</th><th>${getLang('mm_value')}</th><th>${getLang('input_value')}</th><th>${getLang('mm_value')}</th><th>${getLang('input_value')}</th><th>${getLang('mm_value')}</th><th>${getLang('input_value')}</th><th>${getLang('mm_value')}</th></tr></thead>`;
    html += '<tbody>';
    
    const maxLength = Math.max(group1.length, group2.length, group3.length, group4.length);
    for (let i = 0; i < maxLength; i++) {
        const key1 = group1[i] || '';
        const key2 = group2[i] || '';
        const key3 = group3[i] || '';
        const key4 = group4[i] || '';
        
        html += `<tr>
            <td>${key1}</td>
            <td>${key1 ? `<input type="text" class="data-input equivalent-input" value="${equivalentMap[key1]}" data-type="equivalent" data-key="${key1}" onchange="updateEquivalent(this)">` : ''}</td>
            <td>${key2}</td>
            <td>${key2 ? `<input type="text" class="data-input equivalent-input" value="${equivalentMap[key2]}" data-type="equivalent" data-key="${key2}" onchange="updateEquivalent(this)">` : ''}</td>
            <td>${key3}</td>
            <td>${key3 ? `<input type="text" class="data-input equivalent-input" value="${equivalentMap[key3]}" data-type="equivalent" data-key="${key3}" onchange="updateEquivalent(this)">` : ''}</td>
            <td>${key4}</td>
            <td>${key4 ? `<input type="text" class="data-input equivalent-input" value="${equivalentMap[key4]}" data-type="equivalent" data-key="${key4}" onchange="updateEquivalent(this)">` : ''}</td>
        </tr>`;
    }
    
    html += '</tbody></table>';
    container.innerHTML = html;
}

function renderStyleTable() {
    const container = document.getElementById('styleTable');
    const displayStyleMap = {
        '1': '1"',
        '2': '2"',
        '4home': '4"家用',
        '4biz': '4"商用',
        '5': '5"'
    };
    
    let html = '<table>';
    html += `<thead><tr><th>${getLang('style')}</th><th>${getLang('thickness')}</th><th>${getLang('density_factor')}</th><th>${getLang('single_pack_thickness')}</th><th>${getLang('five_pack_thickness')}</th></tr></thead>`;
    html += '<tbody>';
    
    styleConfig.forEach((item, index) => {
        html += `<tr>
            <td>${displayStyleMap[item.style] || item.style}</td>
            <td><input type="number" step="0.1" class="data-input" value="${item.thickness}" data-type="style" data-index="${index}" data-field="thickness" onchange="updateStyle(this)"></td>
            <td><input type="number" step="0.01" class="data-input" value="${item.kgFactor}" data-type="style" data-index="${index}" data-field="kgFactor" onchange="updateStyle(this)"></td>
            <td><input type="number" class="data-input" value="${item.singlePackThickness}" data-type="style" data-index="${index}" data-field="singlePackThickness" onchange="updateStyle(this)"></td>
            <td><input type="text" class="data-input" value="${item.fivePackThickness}" data-type="style" data-index="${index}" data-field="fivePackThickness" onchange="updateStyle(this)"></td>
        </tr>`;
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
}

function renderPriceTable() {
    const container = document.getElementById('priceTable');
    const widths = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];
    const heights = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56'];
    
    let html = '';
    
    const priceStyleNames = {
        '1"': getLang('style_1'),
        '2"': getLang('style_2'),
        '4"家用': getLang('style_4home'),
        '4"商用': getLang('style_4biz'),
        '5"': getLang('style_5')
    };
    
    ['1"', '2"', '4"家用', '4"商用', '5"'].forEach(style => {
        html += `<div class="price-section">`;
        html += `<h5>${priceStyleNames[style]}${getLang('price')}</h5>`;
        html += `<div class="price-table-container">`;
        html += `<table class="price-table">`;
        html += `<thead><tr><th>${getLang('height_width')}</th>`;
        widths.forEach(w => {
            html += `<th>${w}</th>`;
        });
        html += '</tr></thead>';
        html += '<tbody>';
        
        heights.forEach(h => {
            html += '<tr>';
            html += `<td>${h}</td>`;
            widths.forEach(w => {
                let value = 'NA';  // 默认值设为'NA'
                if (priceData[style] && priceData[style][h] && w in priceData[style][h]) {
                    value = priceData[style][h][w];
                }
                html += `<td><input type="text" class="price-input" value="${value}" data-style="${style}" data-height="${h}" data-width="${w}" onchange="updatePrice(this)"></td>`;
            });
            html += '</tr>';
        });
        
        html += '</tbody></table>';
        html += '</div>';
        html += '</div>';
    });
    
    container.innerHTML = html;
}



function updateEquivalent(input) {
    const key = input.getAttribute('data-key');
    const value = input.value.trim();
    if (value) {
        equivalentMap[key] = value;
    }
}

function updateStyle(input) {
    const index = parseInt(input.getAttribute('data-index'));
    const field = input.getAttribute('data-field');
    const value = input.value.trim();
    
    if (field === 'thickness' || field === 'singlePackThickness') {
        styleConfig[index][field] = parseFloat(value) || 0;
    } else if (field === 'kgFactor') {
        styleConfig[index][field] = parseFloat(value) || 0;
    } else if (field === 'fivePackThickness') {
        styleConfig[index][field] = value;
    }
}

function updatePrice(input) {
    const style = input.getAttribute('data-style');
    const height = input.getAttribute('data-height');
    const width = input.getAttribute('data-width');
    const value = input.value.trim();
    
    if (!priceData[style]) priceData[style] = {};
    if (!priceData[style][height]) priceData[style][height] = {};
    
    if (value === 'NA' || value === '') {
        delete priceData[style][height][width];
        input.value = 'NA';
    } else {
        priceData[style][height][width] = parseInt(value) || 0;
    }
}

/**
 * 获取指定款式下有有效面价数据的所有宽度
 * @param {string} style - 款式代码
 * @returns {string[]} 有效的宽度数组
 */
function getValidWidths(style) {
    const styleMap = {
        '1': '1"',
        '2': '2"',
        '4home': '4"家用',
        '4biz': '4"商用',
        '5': '5"'
    };
    const priceStyle = styleMap[style] || style;
    const widths = new Set();
    
    if (priceData[priceStyle]) {
        Object.keys(priceData[priceStyle]).forEach(height => {
            if (priceData[priceStyle][height]) {
                Object.keys(priceData[priceStyle][height]).forEach(width => {
                    const price = priceData[priceStyle][height][width];
                    if (price !== null && price !== undefined && price !== '' && price !== 'NA' && price > 0) {
                        widths.add(width);
                    }
                });
            }
        });
    }
    
    return Array.from(widths).sort((a, b) => parseInt(a) - parseInt(b));
}

/**
 * 获取指定款式和宽度下有有效面价数据的所有高度
 * @param {string} style - 款式代码
 * @param {string} width - 宽度
 * @returns {string[]} 有效的高度数组
 */
function getValidHeights(style, width) {
    const styleMap = {
        '1': '1"',
        '2': '2"',
        '4home': '4"家用',
        '4biz': '4"商用',
        '5': '5"'
    };
    const priceStyle = styleMap[style] || style;
    const heights = new Set();
    
    if (priceData[priceStyle]) {
        Object.keys(priceData[priceStyle]).forEach(height => {
            if (priceData[priceStyle][height] && priceData[priceStyle][height][width]) {
                const price = priceData[priceStyle][height][width];
                if (price !== null && price !== undefined && price !== '' && price !== 'NA' && price > 0) {
                    heights.add(height);
                }
            }
        });
    }
    
    return Array.from(heights).sort((a, b) => parseInt(a) - parseInt(b));
}

/**
 * 获取数值的实际mm值（优先从等价关系映射获取，否则使用标准英寸转换）
 * @param {string|number} value - 输入值
 * @returns {number} 实际mm值
 */
function getMmValue(value) {
    // 将输入转换为字符串，确保与映射表中的键格式一致
    const key = String(value);
    // 优先从等价关系映射获取（带前导零的格式）
    const paddedKey = key.padStart(2, '0');
    const mappedValue = equivalentMap[paddedKey] || equivalentMap[key];
    
    if (mappedValue !== undefined && mappedValue !== null && mappedValue !== '') {
        return mappedValue;
    }
    // 如果没有映射，使用标准英寸转换
    const inch = parseFloat(value);
    if (!isNaN(inch)) {
        return Math.round(inch * 25.4);
    }
    return value;
}

/**
 * 更新宽度下拉菜单选项
 * @param {string} style - 当前款式
 */
function updateWidthSelect(style) {
    const widthSelect = document.getElementById('widthSelect');
    const currentValue = widthSelect.value;
    const validWidths = getValidWidths(style);
    
    // 保存原始选项列表
    if (!widthSelect.originalOptions) {
        widthSelect.originalOptions = Array.from(widthSelect.options).map(opt => ({
            value: opt.value,
            text: opt.text
        }));
    }
    
    // 清空并重新添加有效选项
    widthSelect.innerHTML = '';
    
    if (validWidths.length > 0) {
        validWidths.forEach(width => {
            const option = document.createElement('option');
            option.value = width;
            const mmValue = getMmValue(width);
            option.textContent = `${width}(${mmValue}mm)`;
            if (width === currentValue) {
                option.selected = true;
            }
            widthSelect.appendChild(option);
        });
    } else {
        // 如果没有有效数据，显示所有原始选项
        widthSelect.originalOptions.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.value;
            const mmValue = getMmValue(opt.value);
            option.textContent = `${opt.text}(${mmValue}mm)`;
            if (opt.value === currentValue) {
                option.selected = true;
            }
            widthSelect.appendChild(option);
        });
    }
    
    // 触发高度更新
    updateHeightSelect(style, widthSelect.value);
}

/**
 * 更新高度下拉菜单选项
 * @param {string} style - 当前款式
 * @param {string} width - 当前宽度
 */
function updateHeightSelect(style, width) {
    const heightSelect = document.getElementById('heightSelect');
    const currentValue = heightSelect.value;
    const validHeights = getValidHeights(style, width);
    
    // 保存原始选项列表
    if (!heightSelect.originalOptions) {
        heightSelect.originalOptions = Array.from(heightSelect.options).map(opt => ({
            value: opt.value,
            text: opt.text
        }));
    }
    
    // 清空并重新添加有效选项
    heightSelect.innerHTML = '';
    
    if (validHeights.length > 0) {
        validHeights.forEach(height => {
            const option = document.createElement('option');
            option.value = height;
            const mmValue = getMmValue(height);
            option.textContent = `${height}(${mmValue}mm)`;
            if (height === currentValue) {
                option.selected = true;
            }
            heightSelect.appendChild(option);
        });
    } else {
        // 如果没有有效数据，显示所有原始选项
        heightSelect.originalOptions.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.value;
            const mmValue = getMmValue(opt.value);
            option.textContent = `${opt.text}(${mmValue}mm)`;
            if (opt.value === currentValue) {
                option.selected = true;
            }
            heightSelect.appendChild(option);
        });
    }
}

/**
 * 款式改变时的处理函数
 */
function onStyleChange() {
    const style = document.getElementById('styleSelect').value;
    updateWidthSelect(style);
}

/**
 * 宽度改变时的处理函数
 */
function onWidthChange() {
    const style = document.getElementById('styleSelect').value;
    const width = document.getElementById('widthSelect').value;
    updateHeightSelect(style, width);
}

function searchData() {
    const width = document.getElementById('widthSelect').value;
    const height = document.getElementById('heightSelect').value;
    const style = document.getElementById('styleSelect').value;
    const currency = document.getElementById('currencySelect').value;
    const exchangeRate = parseFloat(document.getElementById('exchangeRateInput').value) || 1;
    
    const calculatedData = calculateResults(width, height, style, 'AQ', currency, exchangeRate);
    displayResult(calculatedData);
}

function displayResult(data) {
    const resultTable = document.getElementById('resultTable');
    
    if (!data || !data.results || Object.keys(data.results).length === 0) {
        resultTable.innerHTML = '<div class="empty-state"><p data-lang="empty_state">请选择参数并点击确认查询</p></div>';
        return;
    }
    
    const results = data.results;
    
    let html = '<div class="result-grid-container">';
    
    html += '<div class="grid-row">';
    html += `<div class="grid-item"><div class="item-label">${getLang('product_model')}</div><div class="item-value">${results['产品型号'] || ''}</div></div>`;
    html += `<div class="grid-item"><div class="item-label">${getLang('air_flow_m3h')}</div><div class="item-value">${results['标示风量(m³/h)'] || ''}</div></div>`;
    html += `<div class="grid-item"><div class="item-label">${getLang('price')}</div><div class="item-value">${results['面价'] || ''}</div></div>`;
    html += '</div>';
    
    html += '<div class="grid-row">';
    html += `<div class="grid-item"><div class="item-label">${getLang('outer_dimension')}</div><div class="item-value">${results['外形尺寸(L*H*D)mm'] || ''}</div></div>`;
    html += `<div class="grid-item"><div class="item-label">${getLang('single_pack_dimension')}</div><div class="item-value">${results['单台包装尺寸(L*W*H)mm'] || ''}</div></div>`;
    html += `<div class="grid-item"><div class="item-label">${getLang('five_pack_dimension')}</div><div class="item-value">${results['五台包装尺寸(L*W*H)mm'] || ''}</div></div>`;
    html += '</div>';
    
    html += '<div class="grid-row">';
    html += `<div class="grid-item"><div class="item-label">${getLang('net_weight_kg')}</div><div class="item-value">${results['产品净重(KG)'] || ''}</div></div>`;
    html += `<div class="grid-item"><div class="item-label">${getLang('gross_weight_kg_1')}</div><div class="item-value">${results['毛重(KG)(1台/箱)'] || ''}</div></div>`;
    html += `<div class="grid-item"><div class="item-label">${getLang('gross_weight_kg_5')}</div><div class="item-value">${results['毛重(KG)(5台/箱)'] || ''}</div></div>`;
    html += '</div>';
    
    html += '</div>';
    
    resultTable.innerHTML = html;
}

/**
 * 下载数据模板（CSV格式）
 * 将当前系统中的所有数据导出为CSV文件，包含数值等价关系、款式参数配置、面价数据
 */
function downloadTemplate() {
    try {
        let csvContent = '';
        
        // CSV单元格转义函数：处理包含逗号、换行符、双引号的内容
        function escapeCsv(value) {
            if (typeof value !== 'string') {
                value = String(value || '');
            }
            // 如果包含逗号、换行符或双引号，需要用双引号包裹
            if (value.includes(',') || value.includes('\n') || value.includes('\r') || value.includes('"')) {
                // 将双引号转义为两个双引号
                return '"' + value.replace(/"/g, '""') + '"';
            }
            return value;
        }
        
        // 导出数值等价关系数据
        csvContent += '数值等价关系（输入值 → 实际mm值）\n';
        csvContent += '输入值,实际mm值,输入值,实际mm值,输入值,实际mm值,输入值,实际mm值\n';
        
        const quarterLength = Math.ceil(equivalentValues.length / 4);
        const group1 = equivalentValues.slice(0, quarterLength);
        const group2 = equivalentValues.slice(quarterLength, quarterLength * 2);
        const group3 = equivalentValues.slice(quarterLength * 2, quarterLength * 3);
        const group4 = equivalentValues.slice(quarterLength * 3);
        
        const maxLength = Math.max(group1.length, group2.length, group3.length, group4.length);
        for (let i = 0; i < maxLength; i++) {
            const row = [];
            const item1 = group1[i];
            const item2 = group2[i];
            const item3 = group3[i];
            const item4 = group4[i];
            
            row.push(String(item1 ? item1.input : ''));
            row.push(String(item1 ? item1.mm : ''));
            row.push(String(item2 ? item2.input : ''));
            row.push(String(item2 ? item2.mm : ''));
            row.push(String(item3 ? item3.input : ''));
            row.push(String(item3 ? item3.mm : ''));
            row.push(String(item4 ? item4.input : ''));
            row.push(String(item4 ? item4.mm : ''));
            
            csvContent += row.join(',') + '\n';
        }
        
        // 导出款式参数配置
        csvContent += '\n';
        csvContent += '款式参数配置\n';
        csvContent += '款式代码,款式名称,厚度(mm),密度系数,1台包装厚度,5台包装厚度,后缀,备注\n';
        styleConfig.forEach(item => {
            const styleNames = {
                '1': '1"',
                '2': '2"',
                '4home': '4"家用',
                '4biz': '4"商用',
                '5': '5"'
            };
            csvContent += [
                String(item.style || ''),
                String(styleNames[item.style] || ''),
                String(item.thickness || ''),
                String(item.kgFactor || ''),
                String(item.singlePackThickness || ''),
                String(item.fivePackThickness || ''),
                String(item.suffix || ''),
                item.style === '4home' || item.style === '4biz' || item.style === '5' ? getLang('no_five_pack') : ''
            ].join(',') + '\n';
        });
        
        // 导出面价数据
        const priceStyles = ['1"', '2"', '4"家用', '4"商用', '5"'];
        const priceLabels = ['1"面价（人民币）', '2"面价（人民币）', '4"家用面价（人民币）', '4"商用面价（人民币）', '5"面价（人民币）'];
        
        for (let s = 0; s < priceStyles.length; s++) {
            csvContent += '\n';
            csvContent += priceLabels[s] + '\n';
            csvContent += '高度\\宽度,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25\n';
            
            const style = priceStyles[s];
            for (let h = 12; h <= 56; h++) {
                const row = [h];
                for (let w = 8; w <= 25; w++) {
                    const width = `${w.toString().padStart(2, '0')}`;
                    let value = '';
                    if (priceData[style] && priceData[style][h] && priceData[style][h][width] !== undefined) {
                        value = String(priceData[style][h][width]);
                    }
                    row.push(value);
                }
                csvContent += row.join(',') + '\n';
            }
        }
        
        // 导出风机盘管配件数据
        csvContent += '\n';
        csvContent += '风机盘管配件\n';
        csvContent += [
            escapeCsv('产品型号'),
            escapeCsv('产品名称'),
            escapeCsv('标准配置'),
            escapeCsv('价格'),
            escapeCsv('适配款式'),
            escapeCsv('背景色'),
            escapeCsv('备注')
        ].join(',') + '\n';
        fcAccessories.forEach(item => {
            const styleLabels = {
                '1': '1"',
                '2': '2"',
                '4home': '4"家用',
                '4biz': '4"商用',
                '5': '5"'
            };
            const styles = item.styles || [];
            const styleStr = styles.map(s => styleLabels[s] || s).join(';');
            const bgColor = item.backgroundColor || 'white';
            csvContent += [
                escapeCsv(item.model),
                escapeCsv(item.name),
                escapeCsv((item.config || '').replace(/<br>/g, '\n')),
                escapeCsv(item.price),
                escapeCsv(styleStr),
                escapeCsv(bgColor),
                escapeCsv((item.note || '').replace(/<br>/g, '\n'))
            ].join(',') + '\n';
        });
        
        // 导出空调箱配件数据
        csvContent += '\n';
        csvContent += '空调箱配件\n';
        csvContent += [
            escapeCsv('产品型号'),
            escapeCsv('产品名称'),
            escapeCsv('标准配置'),
            escapeCsv('价格'),
            escapeCsv('适配款式'),
            escapeCsv('背景色'),
            escapeCsv('备注')
        ].join(',') + '\n';
        ahuAccessories.forEach(item => {
            const styleLabels = {
                '1': '1"',
                '2': '2"',
                '4home': '4"家用',
                '4biz': '4"商用',
                '5': '5"'
            };
            const styles = item.styles || [];
            const styleStr = styles.map(s => styleLabels[s] || s).join(';');
            const bgColor = item.backgroundColor || 'white';
            csvContent += [
                escapeCsv(item.model),
                escapeCsv(item.name),
                escapeCsv((item.config || '').replace(/<br>/g, '\n')),
                escapeCsv(item.price),
                escapeCsv(styleStr),
                escapeCsv(bgColor),
                escapeCsv((item.note || '').replace(/<br>/g, '\n'))
            ].join(',') + '\n';
        });
        
        // 导出美式风管机配件数据
        csvContent += '\n';
        csvContent += '美式风管机配件\n';
        csvContent += [
            escapeCsv('产品型号'),
            escapeCsv('产品名称'),
            escapeCsv('标准配置'),
            escapeCsv('价格'),
            escapeCsv('适配款式'),
            escapeCsv('背景色'),
            escapeCsv('备注')
        ].join(',') + '\n';
        usDuctAccessories.forEach(item => {
            const styleLabels = {
                '1': '1"',
                '2': '2"',
                '4home': '4"家用',
                '4biz': '4"商用',
                '5': '5"'
            };
            const styles = item.styles || [];
            const styleStr = styles.map(s => styleLabels[s] || s).join(';');
            const bgColor = item.backgroundColor || 'white';
            csvContent += [
                escapeCsv(item.model),
                escapeCsv(item.name),
                escapeCsv((item.config || '').replace(/<br>/g, '\n')),
                escapeCsv(item.price),
                escapeCsv(styleStr),
                escapeCsv(bgColor),
                escapeCsv((item.note || '').replace(/<br>/g, '\n'))
            ].join(',') + '\n';
        });
        
        const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = '基础数据模板.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        const status = document.getElementById('saveStatus');
        if (status) {
            status.textContent = getLang('download_success');
            status.className = 'status success';
            setTimeout(() => {
                status.textContent = '';
                status.className = 'status';
            }, 3000);
        }
    } catch (error) {
        console.error('下载模板失败:', error);
        const status = document.getElementById('saveStatus');
        if (status) {
            status.textContent = getLang('download_error');
            status.className = 'status error';
            setTimeout(() => {
                status.textContent = '';
                status.className = 'status';
            }, 3000);
        }
    }
}

function uploadExcelData() {
    const fileInput = document.getElementById('excelUpload');
    if (!fileInput.files || fileInput.files.length === 0) return;
    
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const wb = XLSX.read(data, { type: 'array' });
            
            if (!wb.SheetNames || wb.SheetNames.length === 0) {
                throw new Error('Excel文件中没有工作表');
            }
            
            const ws = wb.Sheets[wb.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });
            
            if (!jsonData || jsonData.length === 0) {
                throw new Error('Excel文件内容为空');
            }
            
            let rowIndex = 0;
            
            equivalentValues = [];
            equivalentMap = {};
            styleConfig = [];
            priceData = {};
            
            while (rowIndex < jsonData.length && jsonData[rowIndex][0] !== '数值等价关系（输入值 → 实际mm值）') {
                rowIndex++;
            }
            
            if (rowIndex >= jsonData.length) {
                throw new Error('未找到"数值等价关系（输入值 → 实际mm值）"表头');
            }
            rowIndex += 2;
            
            const group1 = [];
            const group2 = [];
            const group3 = [];
            const group4 = [];
            
            while (rowIndex < jsonData.length && jsonData[rowIndex][0] && jsonData[rowIndex][0] !== '') {
                const row = jsonData[rowIndex];
                
                const input1 = row[0];
                const mm1 = row[1];
                if (input1 && mm1) {
                    group1.push({
                        input: String(input1).padStart(2, '0'),
                        mm: parseFloat(mm1) || 0
                    });
                }
                
                const input2 = row[2];
                const mm2 = row[3];
                if (input2 && mm2) {
                    group2.push({
                        input: String(input2).padStart(2, '0'),
                        mm: parseFloat(mm2) || 0
                    });
                }
                
                const input3 = row[4];
                const mm3 = row[5];
                if (input3 && mm3) {
                    group3.push({
                        input: String(input3).padStart(2, '0'),
                        mm: parseFloat(mm3) || 0
                    });
                }
                
                const input4 = row[6];
                const mm4 = row[7];
                if (input4 && mm4) {
                    group4.push({
                        input: String(input4).padStart(2, '0'),
                        mm: parseFloat(mm4) || 0
                    });
                }
                
                rowIndex++;
            }
            
            const newEquivalentValues = [...group1, ...group2, ...group3, ...group4];
            if (newEquivalentValues.length > 0) {
                equivalentValues = newEquivalentValues;
                equivalentMap = {};
                newEquivalentValues.forEach(item => {
                    equivalentMap[item.input] = item.mm;
                });
            }
            
            while (rowIndex < jsonData.length && (!jsonData[rowIndex][0] || jsonData[rowIndex][0] !== '款式参数配置')) {
                rowIndex++;
            }
            rowIndex += 2;
            
            const newStyleConfig = [];
            while (rowIndex < jsonData.length && jsonData[rowIndex][0] && jsonData[rowIndex][0] !== '') {
                const row = jsonData[rowIndex];
                const fivePackVal = String(row[5] || '').trim();
                newStyleConfig.push({
                    style: String(row[0]),
                    thickness: parseFloat(row[2]) || 0,
                    kgFactor: parseFloat(row[3]) || 0,
                    singlePackThickness: parseFloat(row[4]) || 0,
                    fivePackThickness: fivePackVal === '/' ? '/' : (parseFloat(fivePackVal) || 0),
                    suffix: String(row[6] || '')
                });
                rowIndex++;
            }
            if (newStyleConfig.length > 0) {
                styleConfig = newStyleConfig;
            }
            
            while (rowIndex < jsonData.length && (!jsonData[rowIndex][0] || jsonData[rowIndex][0] !== '1"面价（人民币）')) {
                rowIndex++;
            }
            rowIndex += 2;
            
            while (rowIndex < jsonData.length && jsonData[rowIndex][0] && jsonData[rowIndex][0] !== '' && jsonData[rowIndex][0] !== '2"面价（人民币）') {
                const row = jsonData[rowIndex];
                const height = parseInt(row[0]);
                if (!isNaN(height)) {
                    if (!priceData['1"']) priceData['1"'] = {};
                    if (!priceData['1"'][height]) {
                        priceData['1"'][height] = {};
                    }
                    for (let i = 1; i <= 18; i++) {
                        const width = String(i + 7).padStart(2, '0');
                        const price = parseFloat(row[i]);
                        if (!isNaN(price)) {
                            priceData['1"'][height][width] = price;
                        }
                    }
                }
                rowIndex++;
            }
            
            while (rowIndex < jsonData.length && (!jsonData[rowIndex][0] || jsonData[rowIndex][0] !== '2"面价（人民币）')) {
                rowIndex++;
            }
            rowIndex += 2;
            
            while (rowIndex < jsonData.length && jsonData[rowIndex][0] && jsonData[rowIndex][0] !== '' && jsonData[rowIndex][0] !== '4"家用面价（人民币）') {
                const row = jsonData[rowIndex];
                const height = parseInt(row[0]);
                if (!isNaN(height)) {
                    if (!priceData['2"']) priceData['2"'] = {};
                    if (!priceData['2"'][height]) {
                        priceData['2"'][height] = {};
                    }
                    for (let i = 1; i <= 18; i++) {
                        const width = String(i + 7).padStart(2, '0');
                        const price = parseFloat(row[i]);
                        if (!isNaN(price)) {
                            priceData['2"'][height][width] = price;
                        }
                    }
                }
                rowIndex++;
            }
            
            while (rowIndex < jsonData.length && (!jsonData[rowIndex][0] || jsonData[rowIndex][0] !== '4"家用面价（人民币）')) {
                rowIndex++;
            }
            rowIndex += 2;
            
            while (rowIndex < jsonData.length && jsonData[rowIndex][0] && jsonData[rowIndex][0] !== '' && jsonData[rowIndex][0] !== '4"商用面价（人民币）') {
                const row = jsonData[rowIndex];
                const height = parseInt(row[0]);
                if (!isNaN(height)) {
                    if (!priceData['4"家用']) priceData['4"家用'] = {};
                    if (!priceData['4"家用'][height]) {
                        priceData['4"家用'][height] = {};
                    }
                    for (let i = 1; i <= 18; i++) {
                        const width = String(i + 7).padStart(2, '0');
                        const price = parseFloat(row[i]);
                        if (!isNaN(price)) {
                            priceData['4"家用'][height][width] = price;
                        }
                    }
                }
                rowIndex++;
            }
            
            while (rowIndex < jsonData.length && (!jsonData[rowIndex][0] || jsonData[rowIndex][0] !== '4"商用面价（人民币）')) {
                rowIndex++;
            }
            rowIndex += 2;
            
            while (rowIndex < jsonData.length && jsonData[rowIndex][0] && jsonData[rowIndex][0] !== '' && jsonData[rowIndex][0] !== '5"面价（人民币）') {
                const row = jsonData[rowIndex];
                const height = parseInt(row[0]);
                if (!isNaN(height)) {
                    if (!priceData['4"商用']) priceData['4"商用'] = {};
                    if (!priceData['4"商用'][height]) {
                        priceData['4"商用'][height] = {};
                    }
                    for (let i = 1; i <= 18; i++) {
                        const width = String(i + 7).padStart(2, '0');
                        const price = parseFloat(row[i]);
                        if (!isNaN(price)) {
                            priceData['4"商用'][height][width] = price;
                        }
                    }
                }
                rowIndex++;
            }
            
            while (rowIndex < jsonData.length && (!jsonData[rowIndex][0] || jsonData[rowIndex][0] !== '5"面价（人民币）')) {
                rowIndex++;
            }
            rowIndex += 2;
            
            while (rowIndex < jsonData.length && jsonData[rowIndex][0] && jsonData[rowIndex][0] !== '') {
                const row = jsonData[rowIndex];
                const height = parseInt(row[0]);
                if (!isNaN(height)) {
                    if (!priceData['5"']) priceData['5"'] = {};
                    if (!priceData['5"'][height]) {
                        priceData['5"'][height] = {};
                    }
                    for (let i = 1; i <= 18; i++) {
                        const width = String(i + 7).padStart(2, '0');
                        const price = parseFloat(row[i]);
                        if (!isNaN(price)) {
                            priceData['5"'][height][width] = price;
                        }
                    }
                }
                rowIndex++;
            }
            
            saveAllData();
            renderEquivalentTable();
            renderStyleTable();
            renderPriceTable();
            renderFcAccessoryTable();
            renderAhuAccessoryTable();
            renderUsDuctAccessoryTable();
            
            const status = document.getElementById('saveStatus');
            if (status) {
                status.textContent = '✓ 数据上传成功';
                status.className = 'status success';
                setTimeout(() => {
                    status.textContent = '';
                    status.className = 'status';
                }, 3000);
            }
            
            fileInput.value = '';
        } catch (error) {
            console.error('Excel解析错误:', error);
            const status = document.getElementById('saveStatus');
            if (status) {
                status.textContent = '✗ Excel文件解析失败: ' + error.message;
                status.className = 'status error';
                setTimeout(() => {
                    status.textContent = '';
                    status.className = 'status';
                }, 5000);
            }
            fileInput.value = '';
        }
    };
    
    reader.readAsArrayBuffer(file);
}

/**
 * 切换查询区域显示/隐藏
 */
function toggleQuerySection() {
    const adminPanel = document.getElementById('adminPanel');
    const productListSection = document.getElementById('productListSection');
    const inputSection = document.querySelector('.input-section');
    const resultSection = document.getElementById('resultSection');
    const batchQuerySection = document.getElementById('batchQuerySection');
    
    // 隐藏其他面板
    if (adminPanel) adminPanel.style.display = 'none';
    if (productListSection) productListSection.style.display = 'none';
    if (batchQuerySection) batchQuerySection.style.display = 'none';
    
    // 显示查询区域
    if (inputSection) inputSection.style.display = 'block';
    
    // 确保查询结果也显示
    if (resultSection) {
        resultSection.style.display = 'block';
    }
    
    // 显示后立即执行一次查询，显示默认结果
    searchData();
}

// ==================== 批量查询功能 ====================

/**
 * 切换批量查询区域的显示/隐藏状态
 */
function toggleBatchQuerySection() {
    const batchSection = document.getElementById('batchQuerySection');
    const adminPanel = document.getElementById('adminPanel');
    const productListSection = document.getElementById('productListSection');
    const inputSection = document.querySelector('.input-section');
    const resultSection = document.getElementById('resultSection');
    
    if (batchSection.style.display === 'none' || batchSection.style.display === '') {
        // 显示批量查询区域，隐藏其他区域
        batchSection.style.display = 'block';
        if (adminPanel) adminPanel.style.display = 'none';
        if (productListSection) productListSection.style.display = 'none';
        if (inputSection) inputSection.style.display = 'none';
        if (resultSection) resultSection.style.display = 'none';
        
        // 初始化表格，添加一行
        const tbody = document.querySelector('#batchTable tbody');
        if (tbody && tbody.children.length === 0) {
            addBatchRow();
        }
    } else {
        // 隐藏批量查询区域，显示输入和结果区域
        batchSection.style.display = 'none';
        if (inputSection) inputSection.style.display = 'block';
        if (resultSection) resultSection.style.display = 'block';
    }
}

/**
 * 当款式改变时更新所有行的数据
 */
function onBatchStyleChange() {
    const rows = document.querySelectorAll('#batchTable tbody tr');
    rows.forEach(row => {
        updateBatchRow(row);
    });
    calculateBatchTotals();
}

/**
 * 添加一行新的批量查询
 */
function addBatchRow() {
    const tbody = document.querySelector('#batchTable tbody');
    if (!tbody) return;
    
    const rowIndex = tbody.children.length + 1;
    const row = document.createElement('tr');
    row.setAttribute('data-row-index', rowIndex);
    
    row.innerHTML = `
        <td><input type="number" class="batch-input width-input" placeholder="宽度" min="1" onchange="updateBatchRow(this.parentElement.parentElement)"></td>
        <td><input type="number" class="batch-input height-input" placeholder="高度" min="1" onchange="updateBatchRow(this.parentElement.parentElement)"></td>
        <td><input type="number" class="batch-input quantity-input" placeholder="数量" min="1" value="1" onchange="updateBatchRow(this.parentElement.parentElement)"></td>
        <td class="product-info-cell model-cell">-</td>
        <td class="product-info-cell air-flow-cell">-</td>
        <td class="product-info-cell dimensions-cell">-</td>
        <td class="product-info-cell net-weight-cell">-</td>
        <td class="product-info-cell price-cell">-</td>
        <td class="product-info-cell eaf-quantity-cell">-</td>
        <td class="product-info-cell subtotal-cell">-</td>
        <td><button class="delete-row-btn" onclick="deleteBatchRow(this.parentElement.parentElement)">✕</button></td>
    `;
    
    tbody.appendChild(row);
}

/**
 * 删除指定行
 */
function deleteBatchRow(row) {
    const tbody = document.querySelector('#batchTable tbody');
    if (tbody && tbody.children.length > 1) {
        row.remove();
        calculateBatchTotals();
    } else if (tbody && tbody.children.length === 1) {
        // 至少保留一行，清空内容
        const inputs = row.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
        const infoCells = row.querySelectorAll('.product-info-cell');
        infoCells.forEach(cell => cell.textContent = 'NA');
        calculateBatchTotals();
    }
}

/**
 * 更新行数据（自动匹配产品型号等）
 */
function updateBatchRow(row) {
    const widthInput = row.querySelector('.width-input');
    const heightInput = row.querySelector('.height-input');
    const quantityInput = row.querySelector('.quantity-input');
    
    const width = parseInt(widthInput.value) || 0;
    const height = parseInt(heightInput.value) || 0;
    const quantity = parseInt(quantityInput.value) || 1;
    
    const styleSelect = document.getElementById('batchStyleSelect');
    const style = styleSelect ? styleSelect.value : '4biz';
    
    // 获取款式配置
    const styleConfigItem = styleConfig.find(s => s.style === style);
    if (!styleConfigItem) return;
    
    // 获取显示名称
    const styleDisplayMap = {
        '1': '1"',
        '2': '2"', 
        '4home': '4"家用',
        '4biz': '4"商用',
        '5': '5"'
    };
    const styleDisplay = styleDisplayMap[style] || style;
    
    // 根据实际mm尺寸匹配标准规格
    // 支持三种规则：
    // 'ac'（空调箱）：实际尺寸≥标准值即选用对应型号，选择满足条件的最大规格
    // 'fc'（风机盘管）：实际尺寸最接近标准值即选用对应型号，如果卡在正中间的取小的那个
    // 'custom'（非标）：向上取整到下一档标准规格
    const getStandardInch = (mmValue) => {
        if (mmValue <= 0) return 0;
        // 获取所有标准规格并按英寸值升序排序
        const standards = Object.keys(equivalentMap).map(key => ({
            inch: parseInt(key),
            mm: parseInt(equivalentMap[key])
        })).sort((a, b) => a.inch - b.inch);
        
        if (currentSelectionRule === 'ac') {
            // 空调箱规则：找到所有满足实际尺寸 >= 标准mm值的规格，取最大的那个
            let matchedInch = 0;
            for (const standard of standards) {
                if (mmValue >= standard.mm) {
                    matchedInch = standard.inch;
                }
            }
            return matchedInch;
        } else if (currentSelectionRule === 'fc') {
            // 风机盘管规则：找到最接近的标准规格，若数值处于两档中间，则取较小值
            let closestInch = standards[0].inch;
            let minDifference = Math.abs(mmValue - standards[0].mm);
            
            for (const standard of standards) {
                const difference = Math.abs(mmValue - standard.mm);
                if (difference < minDifference) {
                    minDifference = difference;
                    closestInch = standard.inch;
                } else if (difference === minDifference) {
                    // 刚好卡在中间，取较小的那个
                    if (standard.inch < closestInch) {
                        closestInch = standard.inch;
                    }
                }
            }
            return closestInch;
        } else {
            // 非标规则：向上取整到下一档标准规格
            // 如果正好等于某个标准尺寸，就用该尺寸；否则向上取整
            for (let i = 0; i < standards.length; i++) {
                if (mmValue === standards[i].mm) {
                    return standards[i].inch;
                } else if (mmValue < standards[i].mm) {
                    // 找到第一个比实际尺寸大的标准规格
                    return standards[i].inch;
                }
            }
            // 如果实际尺寸大于所有标准规格，返回最大的
            return standards[standards.length - 1].inch;
        }
    };
    
    const widthInch = getStandardInch(width);
    const heightInch = getStandardInch(height);
    const widthKey = widthInch.toString().padStart(2, '0');
    const heightKey = heightInch.toString().padStart(2, '0');
    
    const widthMm = equivalentMap[widthKey] || width;
    const heightMm = equivalentMap[heightKey] || height;
    
    // 计算产品型号（使用英寸值，确保两位数字）
    const model = width && height ? `EAF${widthKey}${heightKey}${styleConfigItem.suffix}` : 'NA';
    
    // 计算标示风量（使用英寸值计算）
    let airFlow = 'NA';
    if (width && height && styleConfigItem) {
        if (style === '1' || style === '2') {
            // 1"/2"款式公式：MROUND((宽度×25.4-13-30)×(高度×25.4-13-65)×风速1.5×3600/1000000×系数1.018, 10)
            const effectiveWidth = widthInch * 25.4 - 13 - 30;
            const effectiveHeight = heightInch * 25.4 - 13 - 65;
            if (effectiveWidth > 0 && effectiveHeight > 0) {
                airFlow = Math.round((effectiveWidth * effectiveHeight * 1.5 * 3600 / 1000000 * 1.018) / 10) * 10;
            }
        } else {
            // 4"/5"款式公式：MROUND(宽度×25.4×高度×25.4×风速2.54×3600/1000000, 10)
            airFlow = Math.round((widthInch * 25.4 * heightInch * 25.4 * 2.54 * 3600 / 1000000) / 10) * 10;
        }
    }
    
    // 外形尺寸
    const dimensions = width && height ? `${widthMm}×${heightMm}×${styleConfigItem.thickness}` : 'NA';
    
    // 净重（精确到0.1）
    let netWeight = 'NA';
    if (width && height && styleConfigItem.kgFactor) {
        netWeight = (widthMm * heightMm * styleConfigItem.kgFactor / 1000000).toFixed(1);
    }
    
    // 面价
    let price = 'NA';
    if (width && height) {
        const priceDataForStyle = priceData[styleDisplay];
        if (priceDataForStyle && priceDataForStyle[heightInch] && priceDataForStyle[heightInch][widthKey]) {
            const priceValue = priceDataForStyle[heightInch][widthKey];
            price = priceValue === 'NA' ? '无法生产' : priceValue;
        }
    }
    
    // 如果面价为NA或无法生产，其他字段也显示NA
    const isPriceAvailable = price !== 'NA' && price !== '无法生产';
    
    // EAF数量（与输入数量相同）
    const eafQuantity = isPriceAvailable && quantity ? quantity : 'NA';
    
    // 小计
    let subtotal = 'NA';
    if (isPriceAvailable && quantity) {
        subtotal = (parseFloat(price) * quantity).toFixed(0);
    }
    
    // 更新单元格
    row.querySelector('.model-cell').textContent = isPriceAvailable ? model : 'NA';
    row.querySelector('.air-flow-cell').textContent = isPriceAvailable ? airFlow : 'NA';
    row.querySelector('.dimensions-cell').textContent = isPriceAvailable ? dimensions : 'NA';
    row.querySelector('.net-weight-cell').textContent = isPriceAvailable ? netWeight : 'NA';
    row.querySelector('.price-cell').textContent = price;
    row.querySelector('.eaf-quantity-cell').textContent = eafQuantity;
    row.querySelector('.subtotal-cell').textContent = subtotal;
    
    calculateBatchTotals();
}

/**
 * 计算合计
 */
function calculateBatchTotals() {
    const rows = document.querySelectorAll('#batchTable tbody tr');
    
    let totalAirFlow = 0;
    let totalNetWeight = 0;
    let totalQuantity = 0;
    let totalSubtotal = 0;
    
    rows.forEach(row => {
        const airFlow = parseFloat(row.querySelector('.air-flow-cell').textContent);
        const netWeight = parseFloat(row.querySelector('.net-weight-cell').textContent);
        const quantity = parseFloat(row.querySelector('.eaf-quantity-cell').textContent);
        const subtotal = parseFloat(row.querySelector('.subtotal-cell').textContent);
        
        const qty = isNaN(quantity) ? 0 : quantity;
        
        if (!isNaN(airFlow)) totalAirFlow += airFlow * qty;
        if (!isNaN(netWeight)) totalNetWeight += netWeight * qty;
        if (!isNaN(quantity)) totalQuantity += quantity;
        if (!isNaN(subtotal)) totalSubtotal += subtotal;
    });
    
    // 更新合计行
    document.getElementById('totalAirFlow').textContent = totalAirFlow || 'NA';
    document.getElementById('totalNetWeight').textContent = totalNetWeight ? totalNetWeight.toFixed(1) : 'NA';
    document.getElementById('totalQuantity').textContent = totalQuantity || 'NA';
    document.getElementById('totalSubtotal').textContent = totalSubtotal || 'NA';
    
    // 重新计算配件总合计，确保总合计 = EAF合计 + 配件合计
    calculateAccessoryTotal();
}

/**
 * 根据款式更新风机盘管配件的显示
 */
function updateFanCoilAccessories() {
    const styleSelect = document.getElementById('batchStyleSelect');
    const style = styleSelect ? styleSelect.value : '4biz';
    
    // 处理风机盘管配件
    const fcCategory = document.getElementById('fcCategory');
    if (fcCategory) {
        // 始终显示风机盘管配件区域
        fcCategory.style.display = 'block';
        
        // 根据当前选择的款式过滤配件
        fcAccessories.forEach(item => {
            const row = document.getElementById(`row-${item.id}`);
            if (row) {
                const styles = item.styles || [];
                const isVisible = styles.includes(style);
                row.style.display = isVisible ? 'table-row' : 'none';
                
                // 更新输入框的值为保存在配件数据中的数量（保留用户之前设置的值）
                const quantityInput = row.querySelector('.accessory-quantity');
                const subtotalCell = row.querySelector('.accessory-subtotal');
                if (quantityInput) {
                    quantityInput.value = item.quantity || 0;
                }
                if (subtotalCell) {
                    const subtotal = (item.quantity || 0) * item.price;
                    subtotalCell.textContent = '¥' + subtotal.toFixed(0);
                }
            }
        });
    }
    
    // 处理空调箱配件
    const ahuCategory = document.getElementById('ahuCategory');
    if (ahuCategory) {
        // 根据当前选择的款式过滤配件
        ahuAccessories.forEach(item => {
            const row = document.getElementById(`row-${item.id}`);
            if (row) {
                const styles = item.styles || [];
                const isVisible = styles.includes(style);
                row.style.display = isVisible ? 'table-row' : 'none';
                
                // 更新输入框的值为保存在配件数据中的数量（保留用户之前设置的值）
                const quantityInput = row.querySelector('.accessory-quantity');
                const subtotalCell = row.querySelector('.accessory-subtotal');
                if (quantityInput) {
                    quantityInput.value = item.quantity || 0;
                }
                if (subtotalCell) {
                    const subtotal = (item.quantity || 0) * item.price;
                    subtotalCell.textContent = '¥' + subtotal.toFixed(0);
                }
            }
        });
    }
    
    // 重新计算合计
    calculateAccessoryTotal();
}

/**
 * 显示元素数组
 */
function showElements(elements) {
    elements.forEach(el => {
        if (el) el.style.display = '';
    });
}

/**
 * 隐藏元素数组
 */
function hideElements(elements) {
    elements.forEach(el => {
        if (el) el.style.display = 'none';
    });
}

/**
 * 计算配件合计价格
 */
function calculateAccessoryTotal() {
    const quantities = document.querySelectorAll('.accessory-quantity');
    let total = 0;
    let fcTotal = 0;  // 风机盘管场景合计
    let fcQuantityTotal = 0;  // 风机盘管场景数量合计
    let ahuTotal = 0;  // 空调箱场景合计
    let ahuQuantityTotal = 0;  // 空调箱场景数量合计
    let usDuctTotal = 0;  // 美式风管机场景合计
    let usDuctQuantityTotal = 0;  // 美式风管机场景数量合计
    
    quantities.forEach(input => {
        const quantity = parseInt(input.value) || 0;
        const quantityCell = input.parentElement;  // 获取数量单元格
        const priceCell = quantityCell.previousElementSibling;  // 获取价格单元格（数量单元格的前一个）
        const priceText = priceCell ? priceCell.textContent : '';
        const price = parseFloat(priceText.replace('¥', '')) || 0;
        const subtotal = quantity * price;
        
        // 更新单项小计（数量单元格的下一个单元格）
        const subtotalCell = quantityCell.nextElementSibling;
        if (subtotalCell && subtotalCell.classList.contains('accessory-subtotal')) {
            subtotalCell.textContent = '¥' + subtotal.toFixed(0);
        }
        
        // 保存数量到配件数据对象中
            const row = quantityCell.parentElement;
            if (row.id && row.id.startsWith('row-')) {
                const accessoryId = row.id.replace('row-', '');
                // 在风机盘管配件中查找
                const fcAccessory = fcAccessories.find(a => a.id === accessoryId);
                if (fcAccessory) {
                    fcAccessory.quantity = quantity;
                }
                // 在空调箱配件中查找
                const ahuAccessory = ahuAccessories.find(a => a.id === accessoryId);
                if (ahuAccessory) {
                    ahuAccessory.quantity = quantity;
                }
                // 在美式风管机配件中查找
                const usDuctAccessory = usDuctAccessories.find(a => a.id === accessoryId);
                if (usDuctAccessory) {
                    usDuctAccessory.quantity = quantity;
                }
            }
        
        // 只计算可见行的数量到合计中
        if (row.style.display !== 'none') {
            total += subtotal;
            
            // 判断是否为风机盘管场景的配件（根据行ID）
            if (row.id && (row.id.startsWith('row-eaf1') || row.id.startsWith('row-eaf2') || row.id === 'row-afs003' || row.id === 'row-mft-20-5-fc')) {
                fcTotal += subtotal;
                fcQuantityTotal += quantity;
            } else if (row.id && row.id.startsWith('row-usd-')) {
                // 美式风管机场景配件
                usDuctTotal += subtotal;
                usDuctQuantityTotal += quantity;
            } else if (row.id && row.id.startsWith('row-')) {
                // 其他配件归为空调箱场景
                ahuTotal += subtotal;
                ahuQuantityTotal += quantity;
            }
        }
    });
    
    // 更新风机盘管场景表格内的数量合计
    const fcQuantityTotalEl = document.getElementById('fcQuantityTotal');
    if (fcQuantityTotalEl) {
        fcQuantityTotalEl.textContent = fcQuantityTotal;
    }
    
    // 更新风机盘管场景表格内的总合计
    const fcTotalEl = document.getElementById('fcTotal');
    if (fcTotalEl) {
        fcTotalEl.textContent = '¥' + fcTotal.toFixed(0);
    }
    
    // 更新空调箱场景表格内的数量合计
    const ahuQuantityTotalEl = document.getElementById('ahuQuantityTotal');
    if (ahuQuantityTotalEl) {
        ahuQuantityTotalEl.textContent = ahuQuantityTotal;
    }
    
    // 更新空调箱场景表格内的总合计
    const ahuTotalEl = document.getElementById('ahuTotal');
    if (ahuTotalEl) {
        ahuTotalEl.textContent = '¥' + ahuTotal.toFixed(0);
    }
    
    // 更新美式风管机场景表格内的数量合计
    const usDuctQuantityTotalEl = document.getElementById('usDuctQuantityTotal');
    if (usDuctQuantityTotalEl) {
        usDuctQuantityTotalEl.textContent = usDuctQuantityTotal;
    }
    
    // 更新美式风管机场景表格内的总合计
    const usDuctTotalEl = document.getElementById('usDuctTotal');
    if (usDuctTotalEl) {
        usDuctTotalEl.textContent = '¥' + usDuctTotal.toFixed(0);
    }
    
    // 获取EAF产品的合计（从批量查询表格的合计行获取）
    const batchTotalEl = document.getElementById('totalSubtotal');
    const batchTotal = batchTotalEl ? parseFloat(batchTotalEl.textContent.replace('¥', '').replace('-', '0')) || 0 : 0;
    
    // 总合计 = EAF产品合计 + 风机盘管配件合计 + 空调箱配件合计 + 美式风管机配件合计
    const grandTotal = batchTotal + fcTotal + ahuTotal + usDuctTotal;
    
    // 更新总合计
    const totalEl = document.getElementById('accessoryTotal');
    if (totalEl) {
        totalEl.textContent = '¥' + grandTotal.toFixed(0);
    }
}

/**
 * 监听批量查询款式变化
 */
function setupBatchStyleListener() {
    const styleSelect = document.getElementById('batchStyleSelect');
    if (styleSelect) {
        styleSelect.addEventListener('change', updateFanCoilAccessories);
    }
}

// 页面加载完成后初始化配件显示
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    renderAdminPanel();
    renderAccessoryTables();
    updateFanCoilAccessories();
    setupBatchStyleListener();
    updateSelectionExplanation();
    updateSizeRange();
});

/**
 * 导出批量查询结果到Excel
 */
function exportBatchToExcel() {
    const rows = document.querySelectorAll('#batchTable tbody tr');
    if (rows.length === 0) {
        alert('没有数据可导出');
        return;
    }
    
    // 获取当前选中的款式
    const styleSelect = document.getElementById('batchStyleSelect');
    const currentStyle = styleSelect ? styleSelect.value : '4biz';
    
    // 准备数据
    const data = [];
    
    // 添加表头
    data.push([
        '宽度', '高度', '数量', '产品型号', '标示风量(m³/h)', 
        '外形尺寸', '净重', '面价', 'EAF数量', '小计'
    ]);
    
    // 添加数据行
    rows.forEach(row => {
        const width = row.querySelector('.width-input').value || '-';
        const height = row.querySelector('.height-input').value || '-';
        const quantity = row.querySelector('.quantity-input').value || '-';
        const model = row.querySelector('.model-cell').textContent;
        const airFlow = row.querySelector('.air-flow-cell').textContent;
        const dimensions = row.querySelector('.dimensions-cell').textContent;
        const netWeight = row.querySelector('.net-weight-cell').textContent;
        const price = row.querySelector('.price-cell').textContent;
        const eafQuantity = row.querySelector('.eaf-quantity-cell').textContent;
        const subtotal = row.querySelector('.subtotal-cell').textContent;
        
        data.push([width, height, quantity, model, airFlow, dimensions, netWeight, price, eafQuantity, subtotal]);
    });
    
    // 添加合计行
    data.push(['', '', '', '', '', '', '', '', '', '']);
    data.push([
        '合计', '', '', '', 
        document.getElementById('totalAirFlow').textContent,
        '',
        document.getElementById('totalNetWeight').textContent,
        '-',
        document.getElementById('totalQuantity').textContent,
        document.getElementById('totalSubtotal').textContent
    ]);
    
    // 添加空行分隔
    data.push(['', '', '', '', '', '', '', '', '', '']);
    data.push(['配件选型', '', '', '', '', '', '', '', '', '']);
    data.push(['', '', '', '', '', '', '', '', '', '']);
    
    // 添加风机盘管配件数据
    data.push(['风机盘管配件', '', '', '', '', '', '', '', '', '']);
    data.push(['产品型号', '产品名称', '标准配置', '价格', '数量', '合计', '备注', '', '', '']);
    
    // 记录配件行背景色信息
    const rowStyles = {};
    
    fcAccessories.forEach(item => {
        const styles = item.styles || [];
        const showRow = styles.includes(currentStyle);
        if (showRow) {
            const quantity = item.quantity || 0;
            const subtotal = quantity * item.price;
            data.push([item.model, item.name, item.config.replace(/<br>/g, '\n'), '¥' + item.price, quantity, '¥' + subtotal, item.note.replace(/<br>/g, '\n'), '', '', '']);
            rowStyles[data.length - 1] = item.backgroundColor || 'white';
        }
    });
    
    // 添加风机盘管配件合计
    const fcTotal = document.getElementById('fcTotal')?.textContent || '¥0';
    const fcQuantityTotal = document.getElementById('fcQuantityTotal')?.textContent || '0';
    data.push(['', '', '', '', '', '', '', '', '', '']);
    data.push(['合计', '', '', '', fcQuantityTotal, fcTotal, '', '', '', '']);
    
    // 添加空行分隔
    data.push(['', '', '', '', '', '', '', '', '', '']);
    
    // 添加空调箱配件数据
    data.push(['空调箱配件', '', '', '', '', '', '', '', '', '']);
    data.push(['产品型号', '产品名称', '标准配置', '价格', '数量', '合计', '备注', '', '', '']);
    
    ahuAccessories.forEach(item => {
        const styles = item.styles || [];
        const showRow = styles.includes(currentStyle);
        if (showRow) {
            const quantity = item.quantity || 0;
            const subtotal = quantity * item.price;
            data.push([item.model, item.name, item.config.replace(/<br>/g, '\n'), '¥' + item.price, quantity, '¥' + subtotal, item.note.replace(/<br>/g, '\n'), '', '', '']);
            rowStyles[data.length - 1] = item.backgroundColor || 'white';
        }
    });
    
    // 添加空调箱配件合计
    const ahuTotal = document.getElementById('ahuTotal')?.textContent || '¥0';
    const ahuQuantityTotal = document.getElementById('ahuQuantityTotal')?.textContent || '0';
    data.push(['', '', '', '', '', '', '', '', '', '']);
    data.push(['合计', '', '', '', ahuQuantityTotal, ahuTotal, '', '', '', '']);
    
    // 添加空行分隔
    data.push(['', '', '', '', '', '', '', '', '', '']);
    
    // 添加美式风管机配件数据
    data.push(['美式风管机配件', '', '', '', '', '', '', '', '', '']);
    data.push(['产品型号', '产品名称', '标准配置', '价格', '数量', '合计', '备注', '', '', '']);
    
    usDuctAccessories.forEach(item => {
        const styles = item.styles || [];
        const showRow = styles.includes(currentStyle);
        if (showRow) {
            const quantity = item.quantity || 0;
            const subtotal = quantity * item.price;
            data.push([item.model, item.name, item.config.replace(/<br>/g, '\n'), '¥' + item.price, quantity, '¥' + subtotal, item.note.replace(/<br>/g, '\n'), '', '', '']);
            rowStyles[data.length - 1] = item.backgroundColor || 'white';
        }
    });
    
    // 添加美式风管机配件合计
    const usDuctTotal = document.getElementById('usDuctTotal')?.textContent || '¥0';
    const usDuctQuantityTotal = document.getElementById('usDuctQuantityTotal')?.textContent || '0';
    data.push(['', '', '', '', '', '', '', '', '', '']);
    data.push(['合计', '', '', '', usDuctQuantityTotal, usDuctTotal, '', '', '', '']);
    
    // 添加空行分隔
    data.push(['', '', '', '', '', '', '', '', '', '']);
    
    // 添加总合计
    const accessoryTotal = document.getElementById('accessoryTotal')?.textContent || '¥0';
    data.push(['总合计', '', '', '', '', accessoryTotal, '', '', '', '']);
    
    // 创建工作簿和工作表
    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // 设置列宽
    const wscols = [
        { wch: 15 }, // 宽度/产品型号
        { wch: 15 }, // 高度/产品名称
        { wch: 25 }, // 数量/标准配置
        { wch: 10 }, // 产品型号/价格
        { wch: 10 }, // 标示风量/数量
        { wch: 10 }, // 外形尺寸/合计
        { wch: 30 }, // 净重/备注
        { wch: 10 }, // 面价
        { wch: 10 }, // EAF数量
        { wch: 10 }  // 小计
    ];
    ws['!cols'] = wscols;
    
    // 添加配件行背景色样式
    // 颜色映射
    const colorMap = {
        'white': 'FFFFFF',
        'gray': 'FAFAFA',
        'green': 'F8FCF8',
        'lightBlue': 'F8FAFF'
    };
    
    // 遍历所有需要设置背景色的行
    Object.keys(rowStyles).forEach(rowIdxStr => {
        const rowIdx = parseInt(rowIdxStr);
        const bgColor = rowStyles[rowIdxStr];
        const rgbColor = colorMap[bgColor] || 'FFFFFF';
        
        for (let col = 0; col < 10; col++) {
            const cellAddr = XLSX.utils.encode_cell({ r: rowIdx, c: col });
            if (ws[cellAddr]) {
                ws[cellAddr].s = {
                    fill: {
                        type: 'pattern',
                        patternType: 'solid',
                        fgColor: { rgb: rgbColor },
                        bgColor: { rgb: rgbColor }
                    }
                };
            }
        }
    });
    
    // 创建工作簿并添加工作表
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, '批量查询结果');
    
    // 使用带有样式的写入选项
    XLSX.writeFile(wb, 'EAF 批量查询结果.xlsx', {
        bookType: 'xlsx',
        cellStyles: true
    });
}

function renderFcAccessoryTable() {
    const container = document.getElementById('fcAccessoryTable');
    if (!container) return;
    
    let html = `<table class="admin-data-table"><thead><tr><th style="width: 40px;">${getLang('operation')}</th><th style="width: 110px;">${getLang('product_model_short')}</th><th style="width: 100px;">${getLang('product_name')}</th><th style="width: 200px;">${getLang('standard_config')}</th><th style="width: 60px;">${getLang('price_col')}</th><th style="width: 230px;">${getLang('compatible_style')}</th><th style="width: 60px;">${getLang('background_color')}</th><th>${getLang('remarks')}</th></tr></thead><tbody>`;
    
    fcAccessories.forEach((item, index) => {
        const styles = item.styles || ['1', '2', '4', '5'];
        const bgColor = item.backgroundColor || 'white';
        html += `<tr><td><button class="delete-btn" onclick="deleteFcAccessory(${index})">${getLang('delete')}</button></td><td><input type="text" value="${item.model}" onchange="updateFcAccessory(${index}, 'model', this.value)" class="form-control"></td><td><input type="text" value="${item.name}" onchange="updateFcAccessory(${index}, 'name', this.value)" class="form-control"></td><td><input type="text" value="${item.config}" onchange="updateFcAccessory(${index}, 'config', this.value)" class="form-control"></td><td><input type="number" value="${item.price}" onchange="updateFcAccessory(${index}, 'price', this.value)" class="form-control"></td><td><div class="style-checkboxes">${renderStyleCheckboxes('fc', index, styles)}</div></td><td><select onchange="updateFcAccessory(${index}, 'backgroundColor', this.value)" class="form-control">${renderBackgroundColorOptions(bgColor)}</select></td><td><textarea onchange="updateFcAccessory(${index}, 'note', this.value)" class="form-control" rows="2">${item.note}</textarea></td></tr>`;
    });
    
    html += '</tbody></table>';
    html += `<div class="admin-actions"><button class="add-row-btn" onclick="addFcAccessory()">${getLang('add_accessory')}</button></div>`;
    container.innerHTML = html;
}

function renderAhuAccessoryTable() {
    const container = document.getElementById('ahuAccessoryTable');
    if (!container) return;
    
    let html = `<table class="admin-data-table"><thead><tr><th style="width: 40px;">${getLang('operation')}</th><th style="width: 110px;">${getLang('product_model_short')}</th><th style="width: 100px;">${getLang('product_name')}</th><th style="width: 200px;">${getLang('standard_config')}</th><th style="width: 60px;">${getLang('price_col')}</th><th style="width: 230px;">${getLang('compatible_style')}</th><th style="width: 60px;">${getLang('background_color')}</th><th>${getLang('remarks')}</th></tr></thead><tbody>`;
    
    ahuAccessories.forEach((item, index) => {
        const styles = item.styles || ['1', '2', '4', '5'];
        const bgColor = item.backgroundColor || 'white';
        html += `<tr><td><button class="delete-btn" onclick="deleteAhuAccessory(${index})">${getLang('delete')}</button></td><td><input type="text" value="${item.model}" onchange="updateAhuAccessory(${index}, 'model', this.value)" class="form-control"></td><td><input type="text" value="${item.name}" onchange="updateAhuAccessory(${index}, 'name', this.value)" class="form-control"></td><td><input type="text" value="${item.config}" onchange="updateAhuAccessory(${index}, 'config', this.value)" class="form-control"></td><td><input type="number" value="${item.price}" onchange="updateAhuAccessory(${index}, 'price', this.value)" class="form-control"></td><td><div class="style-checkboxes">${renderStyleCheckboxes('ahu', index, styles)}</div></td><td><select onchange="updateAhuAccessory(${index}, 'backgroundColor', this.value)" class="form-control">${renderBackgroundColorOptions(bgColor)}</select></td><td><textarea onchange="updateAhuAccessory(${index}, 'note', this.value)" class="form-control" rows="2">${item.note}</textarea></td></tr>`;
    });
    
    html += '</tbody></table>';
    html += `<div class="admin-actions"><button class="add-row-btn" onclick="addAhuAccessory()">${getLang('add_accessory')}</button></div>`;
    container.innerHTML = html;
}

function renderStyleCheckboxes(category, index, selectedStyles) {
    const styles = ['1', '2', '4home', '4biz', '5'];
    const styleLabels = {
        '1': '1"',
        '2': '2"',
        '4home': '4"家用',
        '4biz': '4"商用',
        '5': '5"'
    };
    let html = '';
    styles.forEach(style => {
        const checked = selectedStyles.includes(style) ? 'checked' : '';
        html += `<label style="margin-right: 8px;"><input type="checkbox" ${checked} onclick="toggleStyle('${category}', ${index}, '${style}')">${styleLabels[style]}</label>`;
    });
    return html;
}

function renderBackgroundColorOptions(selectedValue) {
    const options = [
        { value: 'white', label: '白色', color: '#ffffff' },
        { value: 'gray', label: '浅灰', color: '#fafafa' },
        { value: 'green', label: '浅绿', color: '#f8fcf8' },
        { value: 'lightBlue', label: '浅蓝', color: '#f8faff' }
    ];
    let html = '';
    options.forEach(opt => {
        const selected = selectedValue === opt.value ? 'selected' : '';
        html += `<option value="${opt.value}" ${selected} data-color="${opt.color}">${opt.label}</option>`;
    });
    return html;
}

function toggleStyle(category, index, style) {
    let accessories;
    if (category === 'fc') {
        accessories = fcAccessories;
    } else if (category === 'ahu') {
        accessories = ahuAccessories;
    } else if (category === 'usDuct') {
        accessories = usDuctAccessories;
    }
    if (!accessories[index].styles) {
        accessories[index].styles = [];
    }
    const styleIndex = accessories[index].styles.indexOf(style);
    if (styleIndex > -1) {
        accessories[index].styles.splice(styleIndex, 1);
    } else {
        accessories[index].styles.push(style);
    }
}

function addFcAccessory() {
    fcAccessories.push({ id: 'new-' + Date.now(), model: '新型号', name: '新产品', config: '/', price: 0, note: '', category: 'fc', styles: ['1', '2', '4', '5'], visible: true });
    renderFcAccessoryTable();
}

function deleteFcAccessory(index) {
    if (confirm('确定要删除这个配件吗？')) {
        fcAccessories.splice(index, 1);
        renderFcAccessoryTable();
    }
}

function updateFcAccessory(index, field, value) {
    fcAccessories[index][field] = field === 'price' ? parseFloat(value) || 0 : value;
    // 如果更新的是背景色，重新渲染配件选型表格
    if (field === 'backgroundColor') {
        renderFcAccessoryTableInBatch();
    }
}

function addAhuAccessory() {
    ahuAccessories.push({ id: 'new-' + Date.now(), model: '新型号', name: '新产品', config: '/', price: 0, note: '', category: 'ahu', styles: ['1', '2', '4', '5'], visible: true });
    renderAhuAccessoryTable();
}

function deleteAhuAccessory(index) {
    if (confirm('确定要删除这个配件吗？')) {
        ahuAccessories.splice(index, 1);
        renderAhuAccessoryTable();
    }
}

function updateAhuAccessory(index, field, value) {
    ahuAccessories[index][field] = field === 'price' ? parseFloat(value) || 0 : value;
    // 如果更新的是背景色，重新渲染配件选型表格
    if (field === 'backgroundColor') {
        renderAhuAccessoryTableInBatch();
    }
}

// 美式风管机配件管理函数
function renderUsDuctAccessoryTable() {
    const container = document.getElementById('usDuctAccessoryTable');
    if (!container) return;
    
    let html = `<table class="admin-data-table"><thead><tr><th style="width: 40px;">${getLang('operation')}</th><th style="width: 110px;">${getLang('product_model_short')}</th><th style="width: 100px;">${getLang('product_name')}</th><th style="width: 200px;">${getLang('standard_config')}</th><th style="width: 60px;">${getLang('price_col')}</th><th style="width: 230px;">${getLang('compatible_style')}</th><th style="width: 60px;">${getLang('background_color')}</th><th>${getLang('remarks')}</th></tr></thead><tbody>`;
    
    usDuctAccessories.forEach((item, index) => {
        const styles = item.styles || ['1', '2', '4', '5'];
        const bgColor = item.backgroundColor || 'white';
        html += `<tr><td><button class="delete-btn" onclick="deleteUsDuctAccessory(${index})">${getLang('delete')}</button></td><td><input type="text" value="${item.model}" onchange="updateUsDuctAccessory(${index}, 'model', this.value)" class="form-control"></td><td><input type="text" value="${item.name}" onchange="updateUsDuctAccessory(${index}, 'name', this.value)" class="form-control"></td><td><input type="text" value="${item.config}" onchange="updateUsDuctAccessory(${index}, 'config', this.value)" class="form-control"></td><td><input type="number" value="${item.price}" onchange="updateUsDuctAccessory(${index}, 'price', this.value)" class="form-control"></td><td><div class="style-checkboxes">${renderStyleCheckboxes('usDuct', index, styles)}</div></td><td><select onchange="updateUsDuctAccessory(${index}, 'backgroundColor', this.value)" class="form-control">${renderBackgroundColorOptions(bgColor)}</select></td><td><textarea onchange="updateUsDuctAccessory(${index}, 'note', this.value)" class="form-control" rows="2">${item.note}</textarea></td></tr>`;
    });
    
    html += '</tbody></table>';
    html += `<div class="admin-actions"><button class="add-row-btn" onclick="addUsDuctAccessory()">${getLang('add_accessory')}</button></div>`;
    container.innerHTML = html;
}

function addUsDuctAccessory() {
    usDuctAccessories.push({ id: 'new-' + Date.now(), model: '新型号', name: '新产品', config: '/', price: 0, note: '', category: 'usDuct', styles: ['1', '2', '4', '5'], visible: true });
    renderUsDuctAccessoryTable();
}

function deleteUsDuctAccessory(index) {
    if (confirm('确定要删除这个配件吗？')) {
        usDuctAccessories.splice(index, 1);
        renderUsDuctAccessoryTable();
    }
}

function updateUsDuctAccessory(index, field, value) {
    usDuctAccessories[index][field] = field === 'price' ? parseFloat(value) || 0 : value;
}

function renderAccessoryTables() {
    renderFcAccessoryTableInBatch();
    renderAhuAccessoryTableInBatch();
    renderUsDuctAccessoryTableInBatch();
}

function renderFcAccessoryTableInBatch() {
    const tbody = document.querySelector('#fcCategory tbody');
    if (!tbody) return;
    
    let html = '';
    const styleSelect = document.getElementById('batchStyleSelect');
    const currentStyle = styleSelect ? styleSelect.value : '4biz';
    
    fcAccessories.forEach(item => {
        // 使用配件数据中保存的styles，如果没有则默认为空数组（不显示）
        const styles = item.styles || [];
        // 如果配件的适配款式包含当前选择的款式，则显示
        const showRow = styles.includes(currentStyle);
        // 使用保存在配件数据中的数量
        const quantity = item.quantity || 0;
        const subtotal = quantity * item.price;
        // 根据 backgroundColor 属性判断需要哪种背景色
        const bgColor = item.backgroundColor || 'white';
        let highlightClass = 'highlight-row'; // 默认白色背景
        if (bgColor === 'green') {
            highlightClass = 'highlight-row-green';
        } else if (bgColor === 'lightBlue') {
            highlightClass = 'highlight-row-light';
        } else if (bgColor === 'gray') {
            highlightClass = 'highlight-row-gray';
        }
        html += `<tr id="row-${item.id}" class="${highlightClass}" style="display: ${showRow ? 'table-row' : 'none'};"><td class="row-header">${item.model}</td><td>${item.name}</td><td>${item.config}</td><td>¥${item.price}</td><td><input type="number" class="accessory-quantity" min="0" value="${quantity}" onchange="calculateAccessoryTotal()"></td><td class="accessory-subtotal">¥${subtotal}</td><td class="accessory-note">${item.note}</td></tr>`;
    });
    
    tbody.innerHTML = html;
}

function renderAhuAccessoryTableInBatch() {
    const tbody = document.querySelector('#ahuCategory tbody');
    if (!tbody) return;
    
    let html = '';
    const styleSelect = document.getElementById('batchStyleSelect');
    const currentStyle = styleSelect ? styleSelect.value : '4biz';
    
    ahuAccessories.forEach(item => {
        // 使用配件数据中保存的styles，如果没有则默认为空数组（不显示）
        const styles = item.styles || [];
        // 如果配件的适配款式包含当前选择的款式，则显示
        const showRow = styles.includes(currentStyle);
        // 使用保存在配件数据中的数量
        const quantity = item.quantity || 0;
        const subtotal = quantity * item.price;
        // 根据 backgroundColor 属性判断需要哪种背景色
        const bgColor = item.backgroundColor || 'white';
        let highlightClass = 'highlight-row'; // 默认白色背景
        if (bgColor === 'green') {
            highlightClass = 'highlight-row-green';
        } else if (bgColor === 'lightBlue') {
            highlightClass = 'highlight-row-light';
        } else if (bgColor === 'gray') {
            highlightClass = 'highlight-row-gray';
        }
        html += `<tr id="row-${item.id}" class="${highlightClass}" style="display: ${showRow ? 'table-row' : 'none'};"><td class="row-header">${item.model}</td><td>${item.name}</td><td>${item.config}</td><td>¥${item.price}</td><td><input type="number" class="accessory-quantity" min="0" value="${quantity}" onchange="calculateAccessoryTotal()"></td><td class="accessory-subtotal">¥${subtotal}</td><td class="accessory-note">${item.note}</td></tr>`;
    });
    
    tbody.innerHTML = html;
}

function renderUsDuctAccessoryTableInBatch() {
    const tbody = document.querySelector('#usDuctCategory tbody');
    if (!tbody) return;
    
    let html = '';
    const styleSelect = document.getElementById('batchStyleSelect');
    const currentStyle = styleSelect ? styleSelect.value : '4biz';
    
    usDuctAccessories.forEach(item => {
        // 使用配件数据中保存的styles，如果没有则默认为空数组（不显示）
        const styles = item.styles || [];
        // 如果配件的适配款式包含当前选择的款式，则显示
        const showRow = styles.includes(currentStyle);
        // 使用保存在配件数据中的数量
        const quantity = item.quantity || 0;
        const subtotal = quantity * item.price;
        // 根据 backgroundColor 属性判断需要哪种背景色
        const bgColor = item.backgroundColor || 'white';
        let highlightClass = 'highlight-row'; // 默认白色背景
        if (bgColor === 'green') {
            highlightClass = 'highlight-row-green';
        } else if (bgColor === 'lightBlue') {
            highlightClass = 'highlight-row-light';
        } else if (bgColor === 'gray') {
            highlightClass = 'highlight-row-gray';
        }
        html += `<tr id="row-${item.id}" class="${highlightClass}" style="display: ${showRow ? 'table-row' : 'none'};"><td class="row-header">${item.model}</td><td>${item.name}</td><td>${item.config}</td><td>¥${item.price}</td><td><input type="number" class="accessory-quantity" min="0" value="${quantity}" onchange="calculateAccessoryTotal()"></td><td class="accessory-subtotal">¥${subtotal}</td><td class="accessory-note">${item.note}</td></tr>`;
    });
    
    tbody.innerHTML = html;
}

function updateFanCoilAccessories() {
    const styleSelect = document.getElementById('batchStyleSelect');
    const style = styleSelect ? styleSelect.value : '4biz';
    
    // 处理风机盘管配件
    const fcCategory = document.getElementById('fcCategory');
    if (fcCategory) {
        // 始终显示风机盘管配件区域
        fcCategory.style.display = 'block';
        
        // 根据当前选择的款式过滤配件
        fcAccessories.forEach(item => {
            const row = document.getElementById(`row-${item.id}`);
            if (row) {
                const styles = item.styles || [];
                const isVisible = styles.includes(style);
                row.style.display = isVisible ? 'table-row' : 'none';
                
                // 更新输入框的值为保存在配件数据中的数量（保留用户之前设置的值）
                const quantityInput = row.querySelector('.accessory-quantity');
                const subtotalCell = row.querySelector('.accessory-subtotal');
                if (quantityInput) {
                    quantityInput.value = item.quantity || 0;
                }
                if (subtotalCell) {
                    const subtotal = (item.quantity || 0) * item.price;
                    subtotalCell.textContent = '¥' + subtotal.toFixed(0);
                }
            }
        });
    }
    
    // 处理空调箱配件
    const ahuCategory = document.getElementById('ahuCategory');
    if (ahuCategory) {
        // 根据当前选择的款式过滤配件
        ahuAccessories.forEach(item => {
            const row = document.getElementById(`row-${item.id}`);
            if (row) {
                const styles = item.styles || [];
                const isVisible = styles.includes(style);
                row.style.display = isVisible ? 'table-row' : 'none';
                
                // 更新输入框的值为保存在配件数据中的数量（保留用户之前设置的值）
                const quantityInput = row.querySelector('.accessory-quantity');
                const subtotalCell = row.querySelector('.accessory-subtotal');
                if (quantityInput) {
                    quantityInput.value = item.quantity || 0;
                }
                if (subtotalCell) {
                    const subtotal = (item.quantity || 0) * item.price;
                    subtotalCell.textContent = '¥' + subtotal.toFixed(0);
                }
            }
        });
    }
    
    // 处理美式风管机配件
    const usDuctCategory = document.getElementById('usDuctCategory');
    if (usDuctCategory) {
        // 根据当前选择的款式过滤配件
        usDuctAccessories.forEach(item => {
            const row = document.getElementById(`row-${item.id}`);
            if (row) {
                const styles = item.styles || [];
                const isVisible = styles.includes(style);
                row.style.display = isVisible ? 'table-row' : 'none';
                
                // 更新输入框的值为保存在配件数据中的数量（保留用户之前设置的值）
                const quantityInput = row.querySelector('.accessory-quantity');
                const subtotalCell = row.querySelector('.accessory-subtotal');
                if (quantityInput) {
                    quantityInput.value = item.quantity || 0;
                }
                if (subtotalCell) {
                    const subtotal = (item.quantity || 0) * item.price;
                    subtotalCell.textContent = '¥' + subtotal.toFixed(0);
                }
            }
        });
    }
    
    // 重新计算合计
    calculateAccessoryTotal();
}
// 存储EAF总台数
let totalEafCount = 0;
let currentAssistantScene = ''; // 当前选型助手场景

// 将函数绑定到全局作用域
window.openAccessoryAssistant = function(scene) {
    const modal = document.getElementById('accessoryAssistantModal');
    if (!modal) {
        console.error('accessoryAssistantModal not found');
        return;
    }
    modal.style.display = 'flex';
    const modalTitle = document.querySelector('#accessoryAssistantModal .modal-header h4');
    const fcContent = document.getElementById('fcAssistantContent');
    const fcStep1 = document.getElementById('fcStep1');
    const fcStep2 = document.getElementById('fcStep2');
    const fcStep3 = document.getElementById('fcStep3');
    const fcInstructions = document.getElementById('fcInstructions');
    const fcInstructionsStep1 = document.getElementById('fcInstructionsStep1');
    const fcInstructionsStep3 = document.getElementById('fcInstructionsStep3');
    const ahuContent = document.getElementById('ahuAssistantContent');
    const ahuStep1 = document.getElementById('ahuStep1');
    const ahuStep2 = document.getElementById('ahuStep2');
    const ahuInstructions = document.getElementById('ahuInstructions');
    const eafCountInput = document.getElementById('eafCountInput');
    const ahuCountInput = document.getElementById('ahuCountInput');
    
    // 根据场景设置不同的标题和内容
    if (scene === 'fc') {
        currentAssistantScene = 'fc';
        if (modalTitle) modalTitle.textContent = '风机盘管配件选型助手';
        // 显示风机盘管场景内容，隐藏空调箱内容
        if (fcContent) fcContent.style.display = 'block';
        if (ahuContent) ahuContent.style.display = 'none';
        if (ahuInstructions) ahuInstructions.style.display = 'none';
        // 显示第一步，隐藏其他步骤
        if (fcStep1) fcStep1.style.display = 'block';
        if (fcStep2) fcStep2.style.display = 'none';
        if (fcStep3) fcStep3.style.display = 'none';
        // 设置说明文字
        const fcInstructionsText = '<strong>风机盘管场景配件选型说明：</strong><br>' +
            '1. 本场景仅适用于1"和2"款式的EAF产品<br>' +
            '2. 推荐选配法兰固定件（EAF-IF/EAF-OF）用于正抽式安装<br>' +
            '3. 如需要密封，请选配/自备密封条<br>' +
            '4. 单台EAF必须配置一个风动开关，设备可在尺寸上拼接，但电气相互独立，风动开关无法共用';
        if (fcInstructions) fcInstructions.innerHTML = fcInstructionsText;
        if (fcInstructionsStep1) fcInstructionsStep1.innerHTML = fcInstructionsText;
        if (fcInstructionsStep3) fcInstructionsStep3.innerHTML = fcInstructionsText;
        // 清空输入框
        if (eafCountInput) eafCountInput.value = '';
        const ifCountInput = document.getElementById('ifCountInput');
        if (ifCountInput) ifCountInput.value = '';
        const ofCountInput = document.getElementById('ofCountInput');
        if (ofCountInput) ofCountInput.value = '';
        const selfCountInput = document.getElementById('selfCountInput');
        if (selfCountInput) selfCountInput.value = '';
        // 重置总台数
        totalEafCount = 0;
    } else if (scene === 'ahu') {
        currentAssistantScene = 'ahu';
        // 直接获取modal-body并设置内容
        const modalBody = document.querySelector('#accessoryAssistantModal .modal-body');
        
        // 隐藏其他场景内容
        if (fcContent) fcContent.style.display = 'none';
        const usDuctContent = document.getElementById('usDuctAssistantContent');
        if (usDuctContent) usDuctContent.style.display = 'none';
        const ahuContent = document.getElementById('ahuAssistantContent');
        if (ahuContent) ahuContent.style.display = 'none';
        
        // 直接设置模态框内容 - 使用原来的样式
        if (modalBody) {
            modalBody.innerHTML = `
                <div class="assistant-question">
                    <p>1. 您需要为几台空调箱配置EAF？</p>
                    <div class="input-row">
                        <input type="number" id="tempAhuCount" min="0" placeholder="请输入非负整数" class="form-control">
                        <button class="modal-action-btn" onclick="validateTempAhuCount()">下一步</button>
                    </div>
                    ${ahuRemarkHtml()}
                </div>
            `;
        }
        
        if (modalTitle) {
            modalTitle.textContent = '空调箱配件选型助手';
        }
        if (ahuInstructions) {
            ahuInstructions.style.display = 'none';
        }
        // 清空输入框
        if (ahuCountInput) ahuCountInput.value = '';
        const totalEafRequired = document.getElementById('totalEafRequired');
        if (totalEafRequired) totalEafRequired.value = '';
        const horizontalCount = document.getElementById('horizontalCount');
        if (horizontalCount) horizontalCount.value = '';
        const maxPerRow = document.getElementById('maxPerRow');
        if (maxPerRow) maxPerRow.value = '';
        // 清空动态生成的分组输入框
        const dynamicGroups = document.getElementById('dynamicGroups');
        if (dynamicGroups) {
            dynamicGroups.innerHTML = '';
        }
        // 重置状态
        totalAhuCount = 0;
        selectedAhuScheme = 0;
        savedRedSchemeCount = 0;
        savedBlueSchemeCount = 0;
        savedHorizontalCount = 0;
        savedMaxPerRow = 1;
        needWireClip = true;
        needSealCotton = false;
    } else if (scene === 'usDuct') {
        currentAssistantScene = 'usDuct';
        if (modalTitle) modalTitle.textContent = '美式风管机配件选型助手';
        // 隐藏风机盘管和空调箱场景内容
        if (fcContent) fcContent.style.display = 'none';
        if (ahuContent) ahuContent.style.display = 'none';
        // 显示美式风管机选型助手内容
        const usDuctContent = document.getElementById('usDuctAssistantContent');
        if (usDuctContent) {
            usDuctContent.style.display = 'block';
        }
        
        // 检查当前款式是否符合要求（使用批量查询区域的款式选择器）
        const styleSelect = document.getElementById('batchStyleSelect');
        const currentStyle = styleSelect ? styleSelect.value : '';
        const validStyles = ['1', '2', '4home'];
        
        if (!validStyles.includes(currentStyle)) {
            // 如果不是允许的款式，显示警告信息
            alert('当前款式不支持美式风管机场景，请先选择1"、2"或4"家用款式');
            // 关闭弹窗
            closeAccessoryAssistant();
            return;
        }
        
        // 显示第一步，隐藏其他步骤
        const usDuctStep1 = document.getElementById('usDuctStep1');
        const usDuctStep2 = document.getElementById('usDuctStep2');
        const usDuctStep3 = document.getElementById('usDuctStep3');
        if (usDuctStep1) usDuctStep1.style.display = 'block';
        if (usDuctStep2) usDuctStep2.style.display = 'none';
        if (usDuctStep3) usDuctStep3.style.display = 'none';
        // 清空输入框
        document.getElementById('usDuctCountInput').value = '';
        // 清空分组容器
        const groupContainer = document.getElementById('usDuctGroupContainer');
        if (groupContainer) {
            groupContainer.innerHTML = '';
        }
        // 重置状态
        totalAhuCount = 0;
        selectedAhuScheme = 0;
        needSealCotton = false;
    } else {
        if (modalTitle) modalTitle.textContent = '配件选型助手';
        if (fcContent) fcContent.style.display = 'none';
        if (ahuContent) ahuContent.style.display = 'none';
        if (ahuInstructions) {
            ahuInstructions.style.display = 'block';
            ahuInstructions.textContent = '请选择具体的配件场景以获取详细的选型说明。';
        }
    }
    
    if (modal) {
        modal.style.display = 'flex';
    }
}

function goToFcStep2() {
    const input = document.getElementById('eafCountInput');
    const value = input.value.trim();
    
    // 验证是否为≥0的整数（允许0和空输入）
    if (value !== '' && !/^[0-9]\d*$/.test(value)) {
        alert('请输入有效的≥0整数');
        return;
    }
    
    // 空输入视为0
    const count = value === '' ? 0 : parseInt(value);
    
    // 保存总台数
    totalEafCount = count;
    
    // 隐藏第一步，显示第二步
    const fs1 = document.getElementById('fcStep1');
    const fs2 = document.getElementById('fcStep2');
    if (fs1) fs1.style.display = 'none';
    if (fs2) fs2.style.display = 'block';
}

function goBackToFcStep2() {
    // 隐藏第三步，显示第二步
    const fs2 = document.getElementById('fcStep2');
    const fs3 = document.getElementById('fcStep3');
    if (fs3) fs3.style.display = 'none';
    if (fs2) fs2.style.display = 'block';
}

// 美式风管机选型助手相关变量
let usDuctEafCount = 0;
let usDuctGroups = [];
let usDuctSkipStep2 = false;

// 展开/隐藏配件表格（隐藏表头和数据行，保留tfoot合计行）
function toggleAccessoryTable(category) {
    const table = document.querySelector(`#${category}Category .accessory-table`);
    const thead = table ? table.querySelector('thead') : null;
    const tbody = document.getElementById(category + 'CategoryBody');
    const btn = document.querySelector(`#${category}Category .toggle-btn`);
    
    if (thead && tbody && btn) {
        // 检查是否处于显示状态（style.display === 'table-row-group'）
        if (tbody.style.display === 'table-row-group') {
            // 当前是展开状态，点击后隐藏
            thead.style.display = 'none';
            tbody.style.display = 'none';
            btn.textContent = '展开';
        } else {
            // 当前是隐藏状态，点击后展开
            thead.style.display = 'table-header-group';
            tbody.style.display = 'table-row-group';
            btn.textContent = '隐藏';
        }
    }
}

function goToUsDuctStep2() {
    const input = document.getElementById('usDuctCountInput');
    const value = input.value.trim();
    
    // 验证是否为≥0的整数（允许0和空输入）
    if (value !== '' && !/^[0-9]\d*$/.test(value)) {
        alert('请输入有效的≥0整数');
        return;
    }
    
    // 空输入视为0
    const count = value === '' ? 0 : parseInt(value);
    
    // 保存总台数
    usDuctEafCount = count;
    totalAhuCount = count;
    
    // 获取当前选择的款式（使用批量查询区域的款式选择器）
    const styleSelect = document.getElementById('batchStyleSelect');
    const currentStyle = styleSelect ? styleSelect.value : '';
    
    // 如果是1"，直接跳到第三步
    const usDuctS1 = document.getElementById('usDuctStep1');
    const usDuctS2 = document.getElementById('usDuctStep2');
    const usDuctS3 = document.getElementById('usDuctStep3');
    if (currentStyle === '1') {
        usDuctSkipStep2 = true;
        // EAF-PS05M-60W数量 = 客户填写的数量
        usDuctGroups = [{ rows: 0, cols: 0, groups: count }];
        if (usDuctS1) usDuctS1.style.display = 'none';
        if (usDuctS3) usDuctS3.style.display = 'block';
    } else if (currentStyle === '2' || currentStyle === '4home') {
        // 2"或4"家用，显示第二步
        usDuctSkipStep2 = false;
        if (usDuctS1) usDuctS1.style.display = 'none';
        if (usDuctS2) usDuctS2.style.display = 'block';
        // 如果没有保存的分组数据，初始化一个分组；否则恢复之前的分组
        if (usDuctGroups.length === 0) {
            addUsDuctGroup();
        } else {
            // 恢复之前保存的分组数据
            renderUsDuctGroups();
        }
    } else {
        alert('请先选择款式（1"、2"或4"家用）');
        return;
    }
}

function goBackToUsDuctStep1() {
    // 隐藏第二步，显示第一步
    const s1 = document.getElementById('usDuctStep1');
    const s2 = document.getElementById('usDuctStep2');
    if (s2) s2.style.display = 'none';
    if (s1) s1.style.display = 'block';
    // 保存当前填写的分组数据（不清空，以便返回时恢复）
    updateUsDuctGroups();
}

function addUsDuctGroup(data) {
    const container = document.getElementById('usDuctGroupContainer');
    const groupIndex = container.children.length;
    
    const groupDiv = document.createElement('div');
    groupDiv.className = 'group-row';
    groupDiv.innerHTML = `
        <span class="group-label">分组 ${groupIndex + 1}：</span>
        <input type="number" class="group-input" placeholder="行" min="0" onchange="updateUsDuctGroups()" value="${data ? data.rows : ''}">
        <span>×</span>
        <input type="number" class="group-input" placeholder="列" min="0" onchange="updateUsDuctGroups()" value="${data ? data.cols : ''}">
        <span>×</span>
        <input type="number" class="group-input" placeholder="组" min="0" onchange="updateUsDuctGroups()" value="${data ? data.groups : ''}">
        <button type="button" class="remove-group-btn" onclick="removeUsDuctGroup(this)">删除</button>
    `;
    container.appendChild(groupDiv);
}

function renderUsDuctGroups() {
    const container = document.getElementById('usDuctGroupContainer');
    // 清空容器
    container.innerHTML = '';
    // 根据保存的数据重新渲染分组
    usDuctGroups.forEach(group => {
        addUsDuctGroup(group);
    });
}

function removeUsDuctGroup(btn) {
    const container = document.getElementById('usDuctGroupContainer');
    if (container.children.length > 1) {
        btn.parentElement.remove();
        updateUsDuctGroupLabels();
        updateUsDuctGroups();
    } else {
        alert('至少保留一个分组');
    }
}

function updateUsDuctGroupLabels() {
    const container = document.getElementById('usDuctGroupContainer');
    const groups = container.querySelectorAll('.group-row');
    groups.forEach((group, index) => {
        const label = group.querySelector('.group-label');
        if (label) {
            label.textContent = `分组 ${index + 1}：`;
        }
    });
}

function updateUsDuctGroups() {
    const container = document.getElementById('usDuctGroupContainer');
    const groups = container.querySelectorAll('.group-row');
    usDuctGroups = [];
    
    groups.forEach(group => {
        const inputs = group.querySelectorAll('input[type="number"]');
        const rows = parseInt(inputs[0].value) || 0;
        const cols = parseInt(inputs[1].value) || 0;
        const groupsCount = parseInt(inputs[2].value) || 0;
        usDuctGroups.push({ rows, cols, groups: groupsCount });
    });
}

function goToUsDuctStep3() {
    updateUsDuctGroups();
    
    // 验证所有输入都是≥0的整数
    const container = document.getElementById('usDuctGroupContainer');
    const groupRows = container.querySelectorAll('.group-row');
    
    for (let i = 0; i < groupRows.length; i++) {
        const inputs = groupRows[i].querySelectorAll('input[type="number"]');
        for (let j = 0; j < inputs.length; j++) {
            const value = inputs[j].value.trim();
            if (value !== '' && !/^[0-9]\d*$/.test(value)) {
                alert(`分组 ${i + 1} 的输入必须是≥0的整数`);
                return;
            }
        }
    }
    
    // 计算所有分组的 行×列×组 的总和
    let totalEafFromGroups = 0;
    usDuctGroups.forEach((g, index) => {
        totalEafFromGroups += g.rows * g.cols * g.groups;
    });
    
    // 验证总数必须等于EAF数量
    if (totalEafFromGroups !== usDuctEafCount) {
        alert(`所有分组的"行×列×组"总数（${totalEafFromGroups}）必须等于EAF数量（${usDuctEafCount}）`);
        return;
    }
    
    // 隐藏第二步，显示第三步
    const s2a = document.getElementById('usDuctStep2');
    const s3a = document.getElementById('usDuctStep3');
    if (s2a) s2a.style.display = 'none';
    if (s3a) s3a.style.display = 'block';
}

function goBackToUsDuctStep2FromStep3() {
    const s1 = document.getElementById('usDuctStep1');
    const s2 = document.getElementById('usDuctStep2');
    const s3 = document.getElementById('usDuctStep3');
    // 如果跳过了第二步，直接返回第一步
    if (usDuctSkipStep2) {
        if (s3) s3.style.display = 'none';
        if (s1) s1.style.display = 'block';
        usDuctSkipStep2 = false;
    } else {
        // 隐藏第三步，显示第二步
        if (s3) s3.style.display = 'none';
        if (s2) s2.style.display = 'block';
    }
}

function confirmUsDuctSelection(needSeal) {
    needSealCotton = needSeal;
    
    const usDuctTableBody = document.getElementById('usDuctCategoryBody');
    if (!usDuctTableBody) {
        alert('未找到美式风管机配件表格');
        return;
    }
    
    // 先清空所有数量
    const rows = usDuctTableBody.querySelectorAll('tr');
    rows.forEach(row => {
        const quantityInput = row.querySelector('input[type="number"]');
        if (quantityInput) {
            quantityInput.value = 0;
            quantityInput.dispatchEvent(new Event('change'));
        }
    });
    
    // 计算配件数量
    let ps05Count = 0;
    let ps03Count = 0;
    
    // 获取当前选择的款式（使用批量查询区域的款式选择器）
    const styleSelect = document.getElementById('batchStyleSelect');
    const currentStyle = styleSelect ? styleSelect.value : '';
    
    if (currentStyle === '1') {
        // 1"款式：EAF-PS05M-60W数量 = EAF数量
        ps05Count = usDuctEafCount;
    } else {
        // 2"或4"家用：
        // EAF-PS05M-60W数量：按排布行数核算，单行≤4台配1个适配器；单行＞4台时按「每≤4台加配1个」向上取整计算，再乘以组数
        // EAF-PS03M-60W不自动计算，保持默认值0
        usDuctGroups.forEach(g => {
            // 每行的设备数量 = 列数
            // 每行需要的适配器数量 = Math.ceil(列数 / 4)
            const adaptersPerRow = Math.ceil(g.cols / 4);
            // 每个组需要的适配器数量 = 行数 × 每行适配器数 × 组数
            ps05Count += g.rows * adaptersPerRow * g.groups;
            // PS03不自动计算
        });
    }
    
    // 设置配件数量
    rows.forEach(row => {
        const modelCell = row.querySelector('td:first-child');
        const quantityInput = row.querySelector('input[type="number"]');
        
        if (modelCell && quantityInput) {
            if (modelCell.textContent.includes('EAF-PS05M-60W')) {
                quantityInput.value = ps05Count;
                quantityInput.dispatchEvent(new Event('change'));
            }
            // EAF-PS03M-60W不自动计算，用户手动填写
            if (modelCell.textContent.includes('MFT-20-5')) {
                if (needSealCotton) {
                    const sealLength = calculateSealLength();
                    quantityInput.value = sealLength;
                } else {
                    quantityInput.value = 0;
                }
                quantityInput.dispatchEvent(new Event('change'));
            }
        }
    });
    
    closeAccessoryAssistant();
}

// 存储法兰选择数量
let selectedIfCount = 0;
let selectedOfCount = 0;
let selectedSelfCount = 0;

// 存储空调箱数量和选中方案
let totalAhuCount = 0;
let selectedAhuScheme = 0; // 1: 电控箱, 2: 接线盒
let savedRedSchemeCount = 0; // 保存第二步红方案数量
let savedBlueSchemeCount = 0; // 保存第二步蓝方案数量
let savedHorizontalCount = 0; // 保存第四步卧放数量
let savedMaxPerRow = 1; // 保存第四步总行数
let ahuGroups = []; // 保存空调箱分组信息
let needWireClip = true; // 是否需要钢丝扣
let needSealCotton = false; // 是否需要密封棉
let wireClipCount = 0; // 用户输入的需要钢丝扣的EAF数量

function goToFcStep1() {
    // 显示第一步，隐藏其他步骤
    const fs1 = document.getElementById('fcStep1');
    const fs2 = document.getElementById('fcStep2');
    const fs3 = document.getElementById('fcStep3');
    if (fs2) fs2.style.display = 'none';
    if (fs3) fs3.style.display = 'none';
    if (fs1) fs1.style.display = 'block';
}

function goToFcStep3() {
    const ifInput = document.getElementById('ifCountInput').value.trim();
    const ofInput = document.getElementById('ofCountInput').value.trim();
    const selfInput = document.getElementById('selfCountInput').value.trim();
    
    // 验证是否为≥0的整数（拒绝小数，但允许空输入）
    const intRegex = /^[0-9]\d*$/;
    if ((ifInput !== '' && !intRegex.test(ifInput)) || 
        (ofInput !== '' && !intRegex.test(ofInput)) || 
        (selfInput !== '' && !intRegex.test(selfInput))) {
        alert('请输入有效的非负整数（不允许小数）');
        return;
    }
    
    // 空输入视为0
    const ifCount = ifInput === '' ? 0 : parseInt(ifInput);
    const ofCount = ofInput === '' ? 0 : parseInt(ofInput);
    const selfCount = selfInput === '' ? 0 : parseInt(selfInput);
    
    const total = ifCount + ofCount + selfCount;
    if (total !== totalEafCount) {
        alert(`数量不匹配！三种方式数量之和(${total})应等于EAF总台数(${totalEafCount})`);
        return;
    }
    
    // 保存选择
    selectedIfCount = ifCount;
    selectedOfCount = ofCount;
    selectedSelfCount = selfCount;
    
    // 隐藏第二步，显示第三步
    const fs2 = document.getElementById('fcStep2');
    const fs3 = document.getElementById('fcStep3');
    if (fs2) fs2.style.display = 'none';
    if (fs3) fs3.style.display = 'block';
}

function confirmSealSelection(needSeal) {
    // 先更新法兰配件数量
    const fcTableBody = document.getElementById('fcCategoryBody');
    if (fcTableBody) {
        const rows = fcTableBody.querySelectorAll('tr');
        rows.forEach(row => {
            const modelCell = row.querySelector('td:first-child');
            const quantityInput = row.querySelector('input[type="number"]');
            
            if (modelCell && quantityInput) {
                if (modelCell.textContent.includes('EAF1-IF') || modelCell.textContent.includes('EAF2-IF')) {
                    quantityInput.value = selectedIfCount;
                    quantityInput.dispatchEvent(new Event('change'));
                } else if (modelCell.textContent.includes('EAF1-OF') || modelCell.textContent.includes('EAF2-OF')) {
                    quantityInput.value = selectedOfCount;
                    quantityInput.dispatchEvent(new Event('change'));
                } else if (modelCell.textContent.includes('AFS003')) {
                    // AFS风动开关数量设为总台数
                    quantityInput.value = totalEafCount;
                    quantityInput.dispatchEvent(new Event('change'));
                } else if (modelCell.textContent.includes('MFT-20-5')) {
                    // 密封条数量
                    if (needSeal) {
                        const sealLength = calculateSealLength();
                        quantityInput.value = sealLength;
                    } else {
                        quantityInput.value = 0;
                    }
                    quantityInput.dispatchEvent(new Event('change'));
                }
            }
        });
    }
    
    closeAccessoryAssistant();
}

function showCustomAlert(title, message) {
    const modal = document.getElementById('customAlertModal');
    const titleEl = document.getElementById('customAlertTitle');
    const messageEl = document.getElementById('customAlertMessage');
    
    if (modal && titleEl && messageEl) {
        titleEl.textContent = title;
        messageEl.textContent = message;
        modal.style.display = 'flex';
    }
}

function closeCustomAlert() {
    const modal = document.getElementById('customAlertModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function calculateSealLength() {
    // 获取批量选型表中选中的EAF信息
    let totalMillimeters = 0;
    
    // 查找批量查询表格（id="batchTable"）
    const batchTable = document.getElementById('batchTable');
    
    // 确保找到了正确的表格
    if (!batchTable) {
        console.error('未找到批量查询表格');
        return 0;
    }
    
    // 获取表格中的所有行
    const rows = batchTable.querySelectorAll('tbody tr');
    
    // 遍历每一行
    rows.forEach(row => {
        // 跳过合计行和空行
        if (row.textContent.includes('合计') || row.textContent.trim() === '') {
            return;
        }
        
        // 获取该行的所有单元格
        const cells = row.querySelectorAll('td');
        
        // 确保有单元格
        if (cells.length === 0) {
            return;
        }
        
        // 查找外形尺寸列（第6列，索引为5）
        if (cells.length > 5) {
            const sizeCell = cells[5];
            const cellText = sizeCell.textContent;
            
            // 匹配外形尺寸格式：宽×高×厚度（支持全角和半角乘号）
            const sizeMatch = cellText.match(/(\d+)\s*[×x]\s*(\d+)\s*[×x]\s*[\d.]+/);
            
            if (sizeMatch) {
                const width = parseInt(sizeMatch[1]);
                const height = parseInt(sizeMatch[2]);
                
                // 确保是有效的EAF产品尺寸（宽度和高度都大于100）
                if (width > 100 && height > 100) {
                    // 获取数量（从第3列的输入框，索引为2）
                    const qtyCell = cells[2].querySelector('input[type="number"]');
                    const qty = qtyCell ? parseInt(qtyCell.value) || 1 : 1;
                    
                    // 计算周长并累加到总长度
                    totalMillimeters += (width + height) * 2 * qty;
                }
            }
        }
    });
    
    // 计算：向上取整(总长度/10m/卷)
    // 总长度单位是毫米，转换为米需要除以1000，每卷10米
    const sealLength = Math.ceil(totalMillimeters / 1000 / 10);
    
    return sealLength;
}

// 空调箱场景函数
function validateAhuCount() {
    const input = document.getElementById('ahuCountInput');
    const inputValue = input.value.trim();
    
    // 空值默认为0
    if (inputValue === '') {
        totalAhuCount = 0;
        const step1 = document.getElementById('ahuStep1');
        const step2 = document.getElementById('ahuStep2');
        if (step1) step1.style.display = 'none';
        if (step2) step2.style.display = 'block';
        return;
    }
    
    // 使用正则表达式验证是否为非负整数
    const integerRegex = /^[0-9]\d*$/;
    if (!integerRegex.test(inputValue)) {
        alert('请输入有效的非负整数（不能是负数或小数）');
        return;
    }
    
    // 保存空调箱数量
    totalAhuCount = parseInt(inputValue);
    
    // 隐藏第一步，显示第二步
    const step1 = document.getElementById('ahuStep1');
    const step2 = document.getElementById('ahuStep2');
    if (step1) step1.style.display = 'none';
    if (step2) step2.style.display = 'block';
}

function goToAhuStep1() {
    // 保存第二步填写的数据（如果存在）
    const redInput = document.getElementById('redSchemeCount');
    const blueInput = document.getElementById('blueSchemeCount');
    if (redInput) {
        savedRedSchemeCount = parseInt(redInput.value) || 0;
    }
    if (blueInput) {
        savedBlueSchemeCount = parseInt(blueInput.value) || 0;
    }
    
    // 显示第一步，隐藏其他步骤
    const step1 = document.getElementById('ahuStep1');
    const step2 = document.getElementById('ahuStep2');
    if (step2) step2.style.display = 'none';
    if (step1) step1.style.display = 'block';
}

function goToAhuStep2() {
    // 显示第二步，隐藏其他步骤
    const step1 = document.getElementById('ahuStep1');
    const step2 = document.getElementById('ahuStep2');
    if (step1) step1.style.display = 'none';
    if (step2) step2.style.display = 'block';
}
function ahuRemarkHtml() {
    return `
                <div class="ahu-remark">
                    <p><strong>空调箱场景配件选型说明：</strong></p>
                    <p>1. 本场景适用于全系列EAF产品</p>
                    <p>2. 如需要密封，请选配/自备密封条</p>
                    <p>3. EAF-1"：单台设备必须配置1个电源适配器+1个EAF-BOX接线盒。</p>
                    <p>4. EAF08xx2M-E型号：单台设备必须配置1个电源适配器+1个EAF-BOX接线盒。</p>
                    <p>5. EAF-2"/4"/5"：按排布行数核算，单行≤4台配1个电源适配器；单行＞4台时按「每≤4 台加配1个」向上取整计算，也可采用非标电控箱方案。</p>
                </div>`;
}

function goToAhuStep4() {
    const redInput = document.getElementById('redSchemeCount').value.trim();
    const blueInput = document.getElementById('blueSchemeCount').value.trim();
    
    // 使用正则表达式验证是否为非负整数
    const integerRegex = /^[0-9]\d*$/;
    
    // 验证红方案数量
    if (redInput !== '' && !integerRegex.test(redInput)) {
        alert('红方案数量必须是非负整数（不能是负数或小数）');
        return;
    }
    
    // 验证蓝方案数量
    if (blueInput !== '' && !integerRegex.test(blueInput)) {
        alert('蓝方案数量必须是非负整数（不能是负数或小数）');
        return;
    }
    
    // 空值默认为0
    const redCount = redInput === '' ? 0 : parseInt(redInput);
    const blueCount = blueInput === '' ? 0 : parseInt(blueInput);
    
    if (redCount + blueCount !== totalAhuCount) {
        alert(`蓝色方案空调箱台数（${redCount}台）+绿色方案空调箱台数（${blueCount}台） 必须等于 空调箱总数（${totalAhuCount}台）`);
        return;
    }
    
    // 保存方案选择和数量
    if (redCount > 0 && blueCount > 0) {
        selectedAhuScheme = 3; // 混合方案
    } else if (redCount > 0) {
        selectedAhuScheme = 1; // 红方案
    } else {
        selectedAhuScheme = 2; // 蓝方案
    }
    
    // 保存第二步填写的数据，用于返回时恢复
    savedRedSchemeCount = redCount;
    savedBlueSchemeCount = blueCount;
    
    // 动态生成第四步内容
    const modalBody = document.querySelector('#accessoryAssistantModal .modal-body');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="assistant-question">
                <p>3. 请填写您选用的 EAF 拼接方案信息：</p>
                <div class="installation-options">
                    <div class="installation-item">
                        <label>EAF 拼接后的总行数</label>
                        <input type="number" id="maxPerRow" min="1" placeholder="总行数" class="form-control">
                    </div>
                    <div class="installation-item">
                        <label>卧放 EAF 的总数量</label>
                        <input type="number" id="horizontalCount" min="0" placeholder="卧放数量" class="form-control">
                    </div>
                </div>
                <div class="button-row">
                    <button class="modal-action-btn secondary" onclick="goBackToAhuStep2()">上一步</button>
                    <button class="modal-action-btn" onclick="goToAhuStep5()">下一步</button>
                </div>
                ${ahuRemarkHtml()}
            </div>
        `;
    }
}

function goToAhuStep5() {
    const horizontalInput = document.getElementById('horizontalCount').value.trim();
    const maxPerRowInput = document.getElementById('maxPerRow').value.trim();
    
    // 总行数：空值默认0，允许为0
    const maxPerRow = maxPerRowInput === '' ? 0 : parseInt(maxPerRowInput);
    if (maxPerRowInput !== '' && (isNaN(maxPerRow) || !/^\d+$/.test(maxPerRowInput) || maxPerRow < 0)) {
        alert('总行数必须是非负整数');
        return;
    }
    
    // 卧放数量：空值默认0，允许为0
    const horizontalCount = horizontalInput === '' ? 0 : parseInt(horizontalInput);
    if (horizontalInput !== '' && (isNaN(horizontalCount) || !/^\d+$/.test(horizontalInput) || horizontalCount < 0)) {
        alert('卧放数量必须是非负整数');
        return;
    }
    
    // 保存第四步填写的数据
    savedHorizontalCount = horizontalCount;
    savedMaxPerRow = maxPerRow;
    
    // 动态生成第五步内容
    const modalBody = document.querySelector('#accessoryAssistantModal .modal-body');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="assistant-question">
                <p>4.请填写选用「EAF-BOX 接线盒 + DC12V 电源适配器」方案的空调箱中，EAF 排布信息（行×列×组）：</p>
                <div id="dynamicGroups" style="margin-bottom: 20px;">
                    <div class="group-row">
                        <span class="group-label">分组1：</span>
                        <input type="number" id="groupRow1" min="1" placeholder="行" class="form-control small-input">
                        <span class="operator">×</span>
                        <input type="number" id="groupCol1" min="1" placeholder="列" class="form-control small-input">
                        <span class="operator">×</span>
                        <input type="number" id="groupSet1" min="1" placeholder="组" class="form-control small-input">
                        <button class="delete-btn" onclick="deleteGroup(this)">删除</button>
                    </div>
                </div>
                
                <div class="hint-section">
                    <p><strong>提示：</strong></p>
                    <p>EAF排布复杂可按行录入，不同尺寸的EAF均按个数输入；</p>
                    <p><strong>例如：</strong></p>
                    <p>第1行放置了EAF2424、EAF2024、EAF1624，即录入：1行×3列×1组</p>
                    <p>第2行及第3行均放置了EAF2223、EAF1523、EAF1223、EAF1123，即录入：1行×4列×2组</p>
                    <p><strong style="color: red;">请注意：</strong><span style="color: red;">EAF08xx2M-E型号是无法电气拼接的，如有此类型号，请自行增加电源适配器。</span></p>
                </div>
                
                <div class="button-row" style="margin-top: 20px;">
                    <button class="modal-action-btn secondary add-group-btn" onclick="addGroup()">+ 添加分组</button>
                </div>
                
                <div class="button-row">
                    <button class="modal-action-btn secondary" onclick="goBackToAhuStep4()">上一步</button>
                    <button class="modal-action-btn" onclick="goToAhuStep6()">下一步</button>
                </div>
                ${ahuRemarkHtml()}
            </div>
        `;
    }
}

function addGroup() {
    const dynamicGroups = document.getElementById('dynamicGroups');
    const groupCount = dynamicGroups.children.length + 1;
    
    const groupRow = document.createElement('div');
    groupRow.className = 'group-row';
    groupRow.innerHTML = `
        <span class="group-label">分组${groupCount}：</span>
        <input type="number" id="groupRow${groupCount}" min="1" placeholder="行" class="form-control small-input">
        <span class="operator">×</span>
        <input type="number" id="groupCol${groupCount}" min="1" placeholder="列" class="form-control small-input">
        <span class="operator">×</span>
        <input type="number" id="groupSet${groupCount}" min="1" placeholder="组" class="form-control small-input">
        <button class="delete-btn" onclick="deleteGroup(this)">删除</button>
    `;
    
    dynamicGroups.appendChild(groupRow);
}

function deleteGroup(btn) {
    const dynamicGroups = document.getElementById('dynamicGroups');
    const groupRows = dynamicGroups.children;
    
    if (groupRows.length > 1) {
        btn.parentElement.remove();
        
        // 更新分组编号
        for (let i = 0; i < groupRows.length; i++) {
            groupRows[i].querySelector('.group-label').textContent = `分组${i + 1}：`;
            const inputs = groupRows[i].querySelectorAll('input');
            inputs[0].id = `groupRow${i + 1}`;
            inputs[1].id = `groupCol${i + 1}`;
            inputs[2].id = `groupSet${i + 1}`;
        }
    }
}

function generateDynamicGroups(maxPerRow) {
    const dynamicGroups = document.getElementById('dynamicGroups');
    dynamicGroups.innerHTML = '';
    
    // 计算最大分组范围（4的倍数）
    let maxGroupEnd = Math.ceil(maxPerRow / 4) * 4;
    if (maxGroupEnd < 4) maxGroupEnd = 4;
    
    // 生成4的倍数分组
    for (let i = 1; i <= maxGroupEnd; i += 4) {
        const start = i;
        const end = i + 3;
        
        let labelText;
        let placeholder;
        
        if (i === 1) {
            labelText = `单行≤${end}个的有几组？`;
            placeholder = `≤${end}个/组`;
        } else {
            labelText = `单行${start}-${end}个的有几组？`;
            placeholder = `${start}-${end}个/组`;
        }
        
        const groupDiv = document.createElement('div');
        groupDiv.className = 'installation-item';
        
        const label = document.createElement('label');
        label.textContent = labelText;
        
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `group${end}`;
        input.min = '0';
        input.placeholder = placeholder;
        input.className = 'form-control';
        
        groupDiv.appendChild(label);
        groupDiv.appendChild(input);
        dynamicGroups.appendChild(groupDiv);
    }
}

function goToAhuStep6() {
    // 动态生成第六步内容
    const modalBody = document.querySelector('#accessoryAssistantModal .modal-body');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="assistant-question">
                <p>5.您是否需要采购我司的钢丝扣，来保障薄款设备正抽装入厚框架槽后稳固无晃动，或保障厚款设备正抽装入薄框架槽后稳固不掉落？</p>
                <!-- 钢丝扣产品图 -->
                <div class="accessory-diagram">
                    <img src="gangsigou.jpg" alt="钢丝扣产品图" class="seal-image">
                    <p class="diagram-caption">钢丝扣产品示意图</p>
                </div>
                <!-- 输入框区域 - 移到上方并居中 -->
                <div style="margin-top: 16px; text-align: center;">
                    <label style="font-size: 14px; display: block; margin-bottom: 8px;">需要使用钢丝扣的EAF数量：</label>
                    <input type="number" id="wireClipCount" min="0" placeholder="请输入非负整数" class="form-control" style="width: 200px;">
                </div>
                <div class="button-row" style="margin-top: 16px;">
                    <button class="modal-action-btn secondary" onclick="goBackToAhuStep4()">上一步</button>
                    <button class="modal-action-btn" onclick="validateWireClipCount()">下一步</button>
                </div>
                <!-- 提示词 - 移到按钮下方，靠左显示 -->
                <div class="hint-section" style="font-size: 11px; color: #666; margin-top: 16px; text-align: left;">
                    <p>提示：</p>
                    <p>空调箱田字格框架内正抽式安装，如现场有则无需选购。</p>
                    <p>一个EAF需选配4根，本价格仅包括1根钢丝扣。</p>
                </div>
                ${ahuRemarkHtml()}
            </div>
        `;
    }
}

function validateWireClipCount() {
    const input = document.getElementById('wireClipCount');
    const value = input.value.trim();
    
    if (value === '') {
        input.value = '0';
        wireClipCount = 0;
        selectWireClip(wireClipCount > 0);
        return;
    }
    
    const num = parseInt(value);
    if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
        showCustomAlert('请输入有效的非负整数');
        return;
    }
    
    wireClipCount = num;
    selectWireClip(num > 0);
}

function selectWireClip(need) {
    needWireClip = need;
    
    // 动态生成第七步内容（密封棉选择）
    const modalBody = document.querySelector('#accessoryAssistantModal .modal-body');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="assistant-question">
                <p>您是否需要采购我司的密封条，来改善连接处的气密性？</p>
                <!-- 密封条示意图 -->
                <div class="accessory-diagram">
                    <img src="seal.jpg" alt="密封条产品图" class="seal-image">
                    <p class="diagram-caption">密封条产品示意图</p>
                </div>
                <div style="display: flex; justify-content: flex-end; margin-bottom: 10px;">
                    <button class="modal-action-btn secondary" onclick="goToAhuStep6()">上一步</button>
                </div>
                <div class="option-buttons" style="justify-content: center;">
                    <button class="modal-action-btn green-btn" onclick="confirmAhuSelection(true)">是，需要采购</button>
                    <button class="modal-action-btn red-btn" onclick="confirmAhuSelection(false)">否，不需要</button>
                </div>
                <div class="hint-section" style="font-size: 11px; margin-top: 16px; color: #666;">
                    <p><strong>提示：</strong></p>
                    <p>密封条数量=向上取整[(EAF迎风面周长×数量)的总和÷10m/卷]</p>
                    <p>我司核算为最低用量，现场建议适当多备。</p>
                </div>
                ${ahuRemarkHtml()}
                <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
                    <button class="modal-action-btn" onclick="closeAccessoryAssistant()">关闭</button>
                </div>
            </div>
        `;
    }
}

function selectAhuScheme(scheme) {
    // 保存选中的方案
    selectedAhuScheme = scheme;
    
    // 根据方案设置阈值
    const threshold = scheme === 1 ? 18 : 16; // 电控箱: 18片, 接线盒: 16片
    document.getElementById('thresholdText').textContent = threshold;
}

function confirmAhuSelection(needSeal) {
    needSealCotton = needSeal;
    
    // 使用保存的全局变量
    const horizontalCount = savedHorizontalCount;
    const maxPerRow = savedMaxPerRow;
    
    // 计算竖装数量（允许为负数，表示卧装数量超过总台数）
    const verticalCount = totalAhuCount - horizontalCount;
    
    // 计算行数
    const rowCount = Math.ceil(verticalCount / maxPerRow);
    
    // 根据当前场景选择表格
    let tableBody, tableName;
    if (currentAssistantScene === 'usDuct') {
        tableBody = document.getElementById('usDuctCategoryBody');
        tableName = '美式风管机';
    } else {
        tableBody = document.getElementById('ahuCategoryBody');
        tableName = '空调箱';
    }
    
    if (!tableBody) {
        alert(`未找到${tableName}配件表格`);
        return;
    }
    
    // 先清空所有数量
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach(row => {
        const quantityInput = row.querySelector('input[type="number"]');
        if (quantityInput) {
            quantityInput.value = 0;
            quantityInput.dispatchEvent(new Event('change'));
        }
    });
    
    // 先计算 EAF-PS05M-60W 的数量（统一使用美式风管的计算逻辑）
    let ps05Count = 0;
    const styleSelect = document.getElementById('batchStyleSelect');
    const currentStyle = styleSelect ? styleSelect.value : '';
    if (currentStyle === '1') {
        ps05Count = totalAhuCount;
    } else {
        // 尝试读取动态分组（适用于“接线盒 + DC12V”或其它需要分组输入的步骤）
        const dynamicGroups = document.getElementById('dynamicGroups');
        if (dynamicGroups) {
            const groupRows = dynamicGroups.querySelectorAll('.group-row');
            if (groupRows.length > 0) {
                groupRows.forEach(g => {
                    const inputs = g.querySelectorAll('input[type="number"]');
                    const r = parseInt(inputs[0].value) || 0; // 行
                    const c = parseInt(inputs[1].value) || 0; // 列
                    const sg = parseInt(inputs[2].value) || 0; // 组
                    const adaptersPerRow = Math.ceil((c || 0) / 4) || 0;
                    ps05Count += r * adaptersPerRow * sg;
                });
            } else {
                // 没有分组输入时，退回为每台一台适配器的保守估算
                ps05Count = totalAhuCount;
            }
        } else {
            // 没找到动态分组容器，退回为每台一台适配器
            ps05Count = totalAhuCount;
        }
    }

    // 根据选择的方案设置配件数量
    rows.forEach(row => {
        const modelCell = row.querySelector('td:first-child');
        const quantityInput = row.querySelector('input[type="number"]');
        
        if (modelCell && quantityInput) {
            // 美式风管机场景只设置电源适配器和密封条
            if (currentAssistantScene === 'usDuct') {
                // 电源适配器
                if (modelCell.textContent.includes('EAF-PS05M-60W')) {
                    quantityInput.value = totalAhuCount;
                    quantityInput.dispatchEvent(new Event('change'));
                }
                // 密封棉（根据用户选择，使用统一的计算函数）
                if (modelCell.textContent.includes('MFT-20-5')) {
                    if (needSealCotton) {
                        const sealLength = calculateSealLength();
                        quantityInput.value = sealLength;
                    } else {
                        quantityInput.value = 0;
                    }
                    quantityInput.dispatchEvent(new Event('change'));
                }
            } else {
                // 空调箱场景
                if (selectedAhuScheme === 1 || selectedAhuScheme === 3) {
                    // 方案①：EAF-BOX 电控箱 或 混合方案
                    if (modelCell.textContent.includes('EAF-BOX-C')) {
                        quantityInput.value = savedBlueSchemeCount || 0;
                        quantityInput.dispatchEvent(new Event('change'));
                    }
                    // 电控箱：2"使用EAF-BOX1-DC12V，4"/5"使用EAF-BOX1-DC24V
                    if (currentStyle === '2' && modelCell.textContent.includes('EAF-BOX1-DC12V')) {
                        quantityInput.value = savedRedSchemeCount || 0;
                        quantityInput.dispatchEvent(new Event('change'));
                    }
                    if ((currentStyle === '4home' || currentStyle === '4biz' || currentStyle === '5') && modelCell.textContent.includes('EAF-BOX1-DC24V')) {
                        quantityInput.value = savedRedSchemeCount || 0;
                        quantityInput.dispatchEvent(new Event('change'));
                    }
                    // 电源适配器：仅自动计算 EAF-PS05M-60W，EAF-PS03M-60W 由用户手动填写
                    if (modelCell.textContent.includes('EAF-PS05M-60W')) {
                        quantityInput.value = ps05Count;
                        quantityInput.dispatchEvent(new Event('change'));
                    }
                    if (modelCell.textContent.includes('EAF-PS03M-60W')) {
                        // 保持默认，不自动填写（用户可手动输入）
                    }
                } else {
                    // 方案②：EAF-BOX 接线盒 + DC12V 电源适配器
                    if (modelCell.textContent.includes('EAF-BOX-C')) {
                        quantityInput.value = savedBlueSchemeCount || 0;
                        quantityInput.dispatchEvent(new Event('change'));
                    }
                    // 电源适配器：仅自动计算 EAF-PS05M-60W，EAF-PS03M-60W 由用户手动填写
                    if (modelCell.textContent.includes('EAF-PS05M-60W')) {
                        quantityInput.value = ps05Count;
                        quantityInput.dispatchEvent(new Event('change'));
                    }
                    if (modelCell.textContent.includes('EAF-PS03M-60W')) {
                        // 保持默认，不自动填写（用户可手动输入）
                    }
                }
                // 钢丝扣（根据用户选择和款式）
                if (modelCell.textContent.includes('EAF-SWF')) {
                    // 获取当前选中的款式
                    const styleSelect = document.getElementById('batchStyleSelect');
                    const currentStyle = styleSelect ? styleSelect.value : '';
                    
                    // 根据款式判断是否应该设置当前钢丝扣型号的数量
                    const is2Inch = currentStyle === '2';
                    const is4Inch = currentStyle === '4home' || currentStyle === '4biz';
                    
                    const isSwf2 = modelCell.textContent.includes('EAF-SWF-2');
                    const isSwf4 = modelCell.textContent.includes('EAF-SWF-4');
                    
                    // 如果是2"款式，设置EAF-SWF-2的数量
                    // 如果是4"款式，设置EAF-SWF-4的数量
                    let count = 0;
                    if (needWireClip) {
                        if ((is2Inch && isSwf2) || (is4Inch && isSwf4)) {
                            count = wireClipCount * 4;
                        }
                    }
                    quantityInput.value = count;
                    quantityInput.dispatchEvent(new Event('change'));
                }
                // 电源线（必选）= 总行数 + 卧放数量
                if (modelCell.textContent.includes('DC5525 Power Cord')) {
                    const cordCount = maxPerRow + horizontalCount;
                    quantityInput.value = cordCount;
                    quantityInput.dispatchEvent(new Event('change'));
                }
                // 密封棉（根据用户选择，使用统一的计算函数）
                if (modelCell.textContent.includes('MFT-20-5')) {
                    if (needSealCotton) {
                        const sealLength = calculateSealLength();
                        quantityInput.value = sealLength;
                    } else {
                        quantityInput.value = 0;
                    }
                    quantityInput.dispatchEvent(new Event('change'));
                }
            }
        }
    });
    
    closeAccessoryAssistant();
}

function closeAccessoryAssistant() {
    const modal = document.getElementById('accessoryAssistantModal');
    if (modal) {
        modal.style.display = 'none';
    }
    // 隐藏所有选型助手内容
    const fcContent = document.getElementById('fcAssistantContent');
    const ahuContent = document.getElementById('ahuAssistantContent');
    const usDuctContent = document.getElementById('usDuctAssistantContent');
    if (fcContent) fcContent.style.display = 'none';
    if (ahuContent) ahuContent.style.display = 'none';
    if (usDuctContent) usDuctContent.style.display = 'none';
    // 清空美式风管机分组容器
    const groupContainer = document.getElementById('usDuctGroupContainer');
    if (groupContainer) {
        groupContainer.innerHTML = '';
    }
    // 重置美式风管机相关变量
    usDuctGroups = [];
    usDuctSkipStep2 = false;
}

// 测试函数 - 直接显示空调箱选型助手
function testAhuAssistant() {
    const modal = document.getElementById('accessoryAssistantModal');
    const modalTitle = document.querySelector('#accessoryAssistantModal .modal-header h4');
    const body = document.querySelector('.modal-body');
    
    if (!modal || !body) {
        alert('元素未找到');
        return;
    }
    
    if (modalTitle) {
        modalTitle.textContent = '空调箱配件选型助手';
    }
    
    // 生成完整的步骤结构
    body.innerHTML = '<div id="testAhuStep1" style="display:block; padding:20px;">' +
                    '<p style="font-size:16px;">1. 您需要为几台空调箱配置EAF？</p>' +
                    '<input type="number" id="testAhuCountInput" min="0" placeholder="请输入非负整数" style="width:200px; padding:8px; margin-bottom:10px;">' +
                    '<button style="padding:8px 16px; margin-left:10px;" onclick="goToTestAhuStep2()">下一步</button>' +
                    '</div>' +
                    '<div id="testAhuStep2" style="display:none; padding:20px;">' +
                    '<p style="font-size:16px;">2. 请选择配件配置方案：</p>' +
                    '<div style="margin-bottom:10px;">' +
                    '<label style="display:block; margin-bottom:5px;"><input type="radio" name="scheme" value="1"> EAF-BOX 电控箱</label>' +
                    '<label style="display:block; margin-bottom:5px;"><input type="radio" name="scheme" value="2"> EAF-BOX 接线盒 + DC12V 电源适配器</label>' +
                    '</div>' +
                    '<button style="padding:8px 16px; margin-right:10px;" onclick="goToTestAhuStep1()">上一步</button>' +
                    '<button style="padding:8px 16px;">下一步</button>' +
                    '</div>';
    
    // 强制显示模态框
    modal.style.display = 'flex';
}

// 测试步骤切换函数
function goToTestAhuStep2() {
    const input = document.getElementById('testAhuCountInput');
    const value = input.value.trim();
    if (value !== '' && !/^[0-9]\d*$/.test(value)) {
        alert('请输入有效的非负整数');
        return;
    }
    document.getElementById('testAhuStep1').style.display = 'none';
    document.getElementById('testAhuStep2').style.display = 'block';
}

function goToTestAhuStep1() {
    document.getElementById('testAhuStep2').style.display = 'none';
    document.getElementById('testAhuStep1').style.display = 'block';
}

// 测试用的空调箱数量验证函数
function validateTempAhuCount() {
    const input = document.getElementById('tempAhuCount');
    let value = input.value.trim();
    
    // 空输入视为0
    if (value === '') {
        value = '0';
        input.value = '0';
    }
    
    if (!/^[0-9]\d*$/.test(value)) {
        alert('请输入有效的非负整数');
        return;
    }
    
    // 保存空调箱总数
    totalAhuCount = parseInt(value);
    
    // 模拟第二步 - 使用原来的样式
    const modalBody = document.querySelector('#accessoryAssistantModal .modal-body');
    if (modalBody) {
        // 获取保存的数据，没有保存则为空
        const redValue = typeof savedRedSchemeCount !== 'undefined' && savedRedSchemeCount > 0 ? savedRedSchemeCount : '';
        const blueValue = typeof savedBlueSchemeCount !== 'undefined' && savedBlueSchemeCount > 0 ? savedBlueSchemeCount : '';
        
        modalBody.innerHTML = `
            <div class="assistant-question">
                <p>2. 请选择配件配置方案：</p>
                <div class="ahu-options">
                    <div class="ahu-option">
                        <div class="option-header premium-header">EAF-BOX 电控箱</div>
                        <div class="option-content">
                            <p class="option-desc">功能更全面，价格更贵</p>
                        </div>
                        <div class="option-input-wrapper">
                            <input type="number" id="redSchemeCount" min="0" placeholder="选择此方案的空调箱台数" class="scheme-input-inner" value="${redValue}">
                        </div>
                        <div class="option-note">
                            <p>单台 EAF-BOX 控制箱最大带载：</p>
                            <p>18 个 EAF，且满足「每层≤8 个、最多 4 层」</p>
                            <p>超出需按非标处理。</p>
                        </div>
                    </div>
                    <div class="ahu-option">
                        <div class="option-header basic-header">EAF-BOX 接线盒 +<br>DC12V 电源适配器</div>
                        <div class="option-content">
                            <p class="option-desc">基础方案，价格更实惠</p>
                        </div>
                        <div class="option-input-wrapper">
                            <input type="number" id="blueSchemeCount" min="0" placeholder="选择此方案的空调箱台数" class="scheme-input-inner" value="${blueValue}">
                        </div>
                        <div class="option-note">
                            <p>单台 DC12V 电源适配器最大带载：</p>
                            <p>4 个 EAF</p>
                            <p></p>
                            <p>单台 EAF-BOX 接线盒最大带载：</p>
                            <p>16 个 EAF，且满足「每层≤4 个、最多 4 层」</p>
                            <p>超出需按非标处理。</p>
                        </div>
                    </div>
                </div>
                <div class="button-row">
                    <button class="modal-action-btn secondary" onclick="goBackToAhuStep1()">上一步</button>
                    <button class="modal-action-btn" onclick="goToAhuStep4()">下一步</button>
                </div>
                ${ahuRemarkHtml()}
            </div>
        `;
    }
}

// 返回第二步
// 返回第四步
function goBackToAhuStep4() {
    // 返回第四步：EAF排布信息
    const modalBody = document.querySelector('#accessoryAssistantModal .modal-body');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="assistant-question">
                <p>4.请填写选用「EAF-BOX 接线盒 + DC12V 电源适配器」方案的空调箱中，EAF 排布信息（行×列×组）：</p>
                <div id="dynamicGroups" class="installation-options" style="margin-top: 16px;">
                    <div class="installation-item" style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-weight: bold;">分组1:</span>
                        <input type="number" id="row1" min="1" placeholder="行" class="form-control small-input">
                        <span>×</span>
                        <input type="number" id="col1" min="1" placeholder="列" class="form-control small-input">
                        <span>×</span>
                        <input type="number" id="group1" min="1" placeholder="组" class="form-control small-input">
                        <button class="delete-btn" style="display: none;">删除</button>
                    </div>
                </div>
                
                <div class="hint-section" style="font-size: 10px; margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 8px;">
                    <p><strong>提示:</strong></p>
                    <p>EAF排布复杂可按行录入，不同尺寸的EAF均按个数输入；</p>
                    <p><strong>例如:</strong></p>
                    <p>第1行放置了EAF2424、EAF2024、EAF1624，即录入：1行×3列×1组</p>
                    <p>第2行及第3行均放置了EAF2223、EAF1523、EAF1223、EAF1123，即录入：1行×4列×2组</p>
                    <p style="color: #dc3545;"><strong>请注意：</strong>EAF08xx2M-E型号是无法电气拼接的，如有此类型号，请自行增加电源适配器。</p>
                </div>
                
                <div class="button-row" style="margin-top: 20px;">
                    <button class="modal-action-btn secondary add-group-btn" onclick="addGroup()">+ 添加分组</button>
                </div>
                
                <div class="button-row">
                    <button class="modal-action-btn secondary" onclick="goBackToAhuStep3()">上一步</button>
                    <button class="modal-action-btn" onclick="goToAhuStep6()">下一步</button>
                </div>
                ${ahuRemarkHtml()}
            </div>
        `;
    }
}

// 返回第三步：EAF拼接方案信息
function goBackToAhuStep3() {
    const modalBody = document.querySelector('#accessoryAssistantModal .modal-body');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="assistant-question">
                <p>3. 请填写您选用的 EAF 拼接方案信息：</p>
                <div class="installation-options">
                    <div class="installation-item">
                        <label>EAF 拼接后的总行数</label>
                        <input type="number" id="maxPerRow" min="0" placeholder="总行数" class="form-control">
                    </div>
                    <div class="installation-item">
                        <label>卧放 EAF 的总数量</label>
                        <input type="number" id="horizontalCount" min="0" placeholder="卧放数量" class="form-control">
                    </div>
                </div>
                <div class="button-row">
                    <button class="modal-action-btn secondary" onclick="goBackToAhuStep2()">上一步</button>
                    <button class="modal-action-btn" onclick="goToAhuStep5()">下一步</button>
                </div>
                ${ahuRemarkHtml()}
            </div>
        `;
    }
}

function goBackToAhuStep2() {
    const modalBody = document.querySelector('#accessoryAssistantModal .modal-body');
    if (modalBody) {
        // 获取保存的数据，没有保存则为空
        const redValue = typeof savedRedSchemeCount !== 'undefined' && savedRedSchemeCount > 0 ? savedRedSchemeCount : '';
        const blueValue = typeof savedBlueSchemeCount !== 'undefined' && savedBlueSchemeCount > 0 ? savedBlueSchemeCount : '';
        
        modalBody.innerHTML = `
            <div class="assistant-question">
                <p>2. 请选择配件配置方案：</p>
                <div class="ahu-options">
                    <div class="ahu-option">
                        <div class="option-header premium-header">EAF-BOX 电控箱</div>
                        <div class="option-content">
                            <p class="option-desc">功能更全面，价格更贵</p>
                        </div>
                        <div class="option-input-wrapper">
                            <input type="number" id="redSchemeCount" min="0" placeholder="选择此方案的空调箱台数" class="scheme-input-inner" value="${redValue}">
                        </div>
                        <div class="option-note">
                            <p>单台 EAF-BOX 控制箱最大带载：</p>
                            <p>18 个 EAF，且满足「每层≤8 个、最多 4 层」</p>
                            <p>超出需按非标处理。</p>
                        </div>
                    </div>
                    <div class="ahu-option">
                        <div class="option-header basic-header">EAF-BOX 接线盒 +<br>DC12V 电源适配器</div>
                        <div class="option-content">
                            <p class="option-desc">基础方案，价格更实惠</p>
                        </div>
                        <div class="option-input-wrapper">
                            <input type="number" id="blueSchemeCount" min="0" placeholder="选择此方案的空调箱台数" class="scheme-input-inner" value="${blueValue}">
                        </div>
                        <div class="option-note">
                            <p>单台 DC12V 电源适配器最大带载：</p>
                            <p>4 个 EAF</p>
                            <p></p>
                            <p>单台 EAF-BOX 接线盒最大带载：</p>
                            <p>16 个 EAF，且满足「每层≤4 个、最多 4 层」</p>
                            <p>超出需按非标处理。</p>
                        </div>
                    </div>
                </div>
                <div class="button-row">
                    <button class="modal-action-btn secondary" onclick="goBackToAhuStep1()">上一步</button>
                    <button class="modal-action-btn" onclick="goToAhuStep4()">下一步</button>
                </div>
                ${ahuRemarkHtml()}
            </div>
        `;
    }
}

// 返回第一步
function goBackToAhuStep1() {
    const modalBody = document.querySelector('#accessoryAssistantModal .modal-body');
    if (modalBody) {
        // 获取当前已填写的空调箱数量
        const currentCount = totalAhuCount > 0 ? totalAhuCount : '';
        modalBody.innerHTML = `
            <div class="assistant-question">
                <p>1. 您需要为几台空调箱配置EAF？</p>
                <div class="input-row">
                    <input type="number" id="tempAhuCount" min="0" placeholder="请输入非负整数" class="form-control" value="${currentCount}">
                    <button class="modal-action-btn" onclick="validateTempAhuCount()">下一步</button>
                </div>
                ${ahuRemarkHtml()}
            </div>
        `;
    }
}
