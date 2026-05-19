// ==================== 语言国际化配置 ====================
// 多语言支持对象，包含中文、英文、法语、德语、西班牙语、日语、韩语、葡萄牙语、意大利语、俄语、阿拉伯语
// 每个语言对象包含系统中所有需要显示的文本字符串
const languages = {
    // 中文语言配置
    zh: {
        title: 'EAF自动报价查询系统',                 // 系统标题
        subtitle: '选择参数，快速查询产品报价',        // 系统副标题
        warning_tip: '⚠️ 官方温馨提示：EAF2016与EAF1620为两款完全不同的产品，请勿混淆选型及使用。',  // 温馨提示
        query_quote: '🔍 查询报价',                  // 查询报价按钮
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
        unavailable: '无法生产',                   // 无法生产提示
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
        query_quote: '🔍 Query Quote',                    // Query quote button
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
        query_quote: '🔍 Demander un devis',              // 查询报价按钮
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
        query_quote: '🔍 Angebot anfragen',             // 查询报价按钮
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
        query_quote: '🔍 Consultar cotización',           // 查询报价按钮
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
        query_quote: '🔍 見積りを照会',                  // 查询报价按钮
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
        query_quote: '🔍 견적 조회',                      // 查询报价按钮
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
        query_quote: '🔍 Consultar cotação',               // 查询报价按钮
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
        query_quote: '🔍 Richiedi preventivo',             // 查询报价按钮
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
        query_quote: '🔍 Запросить котировку',            // 查询报价按钮
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
        query_quote: '🔍 استعلام السعر',                   // 查询报价按钮
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
    '48': '1200', '49': '1225', '50': '1500', '51': '1275', '52': '1300', '53': '1325', '54': '1350', '55': '1375', '56': '1400'
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
            price = Math.floor(priceValue / exchangeRate);  // 面价 ÷ 汇率
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
    
    // 页面加载时自动切换为中文
    changeLanguage('zh');
    
    // 加载保存的数据，渲染管理面板，更新计算说明
    loadData();
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
}

/**
 * 保存所有数据到localStorage
 */
function saveAllData() {
    // 将所有数据保存到localStorage
    localStorage.setItem('equivalentMap', JSON.stringify(equivalentMap));
    localStorage.setItem('styleConfig', JSON.stringify(styleConfig));
    localStorage.setItem('priceData', JSON.stringify(priceData));
    
    // 显示保存成功提示
    document.getElementById('saveStatus').textContent = getLang('save_success');
    document.getElementById('saveStatus').className = 'status success';
    
    // 3秒后清除提示信息
    setTimeout(() => {
        document.getElementById('saveStatus').textContent = '';
        document.getElementById('saveStatus').className = 'status';
    }, 3000);
    
    // 重新搜索数据以更新显示
    searchData();
}

/**
 * 重置所有数据为默认值
 */
function resetAllData() {
    // 恢复为默认数据
    equivalentMap = { ...defaultEquivalentMap };
    styleConfig = JSON.parse(JSON.stringify(defaultStyleConfig));
    priceData = JSON.parse(JSON.stringify(defaultPriceData));
    
    // 重新渲染管理面板和搜索数据
    renderAdminPanel();
    searchData();
    
    // 显示重置成功提示
    document.getElementById('saveStatus').textContent = getLang('reset_success');
    document.getElementById('saveStatus').className = 'status success';
    
    // 3秒后清除提示信息
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
    const btn = document.getElementById('adminBtn');
    
    if (panel.style.display === 'none') {
        // 显示管理员面板，隐藏其他区域
        panel.style.display = 'block';
        inputSection.style.display = 'none';
        resultSection.style.display = 'none';
        productListSection.style.display = 'none';
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
    
    // 构建筛选条件显示区域
    let html = '<div style="margin-bottom: 15px; padding: 8px 15px; background: #f8f9fa; border-radius: 6px; text-align: left; color: #666; font-size: 13px;">';
    html += getLang('filter_condition') + ': ' + getLang('style') + '=' + styleMap[filterStyle] + ' | ' + getLang('currency') + '=' + currency;
    if (currencyCode !== '本币(人民币)') {
        html += ' | ' + getLang('exchange_rate') + '=' + exchangeRate;
    }
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
    
    // 隐藏其他面板
    if (adminPanel) adminPanel.style.display = 'none';
    if (productListSection) productListSection.style.display = 'none';
    
    // 显示查询区域
    if (inputSection) inputSection.style.display = 'block';
    
    // 确保查询结果也显示
    if (resultSection) {
        resultSection.style.display = 'block';
    }
    
    // 显示后立即执行一次查询，显示默认结果
    searchData();
}