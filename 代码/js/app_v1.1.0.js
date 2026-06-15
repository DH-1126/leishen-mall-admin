// ===== toast =====
function showToast(msg) {
  var wrap = document.getElementById('toastWrap');
  var el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(function() { el.remove(); }, 2000);
}

// ===== 数据存储 =====
var supplierGoodsData = {
  1: {
    total: 29,
    pages: [[
      { id: 33, name: '战争雷霆150金鹰币', stock: 24, type: 'CDK', discount: '9.5折', discountTime: '2026-06-01 ~ 2026-12-31', status: '已启用' },
      { id: 17, name: '枪械-莫辛纳甘', stock: 0, type: 'CDK', discount: '8.8折', discountTime: '2026-05-15 ~ 2026-11-15', status: '已启用' },
      { id: 14, name: '枪械-98K', stock: 1, type: 'CDK', discount: '9.0折', discountTime: '2026-06-10 ~ 2026-09-30', status: '已启用' },
      { id: 13, name: '枪械-AK47', stock: 33, type: 'CDK', discount: '', discountTime: '', status: '已启用' },
      { id: 19, name: '绝地求生-Xbox版', stock: 27, type: 'CDK', discount: '', discountTime: '', status: '已启用' },
      { id: 18, name: '绝地求生-Ps版', stock: 26, type: 'CDK', discount: '8.5折', discountTime: '2026-05-20 ~ 2026-08-20', status: '已启用' },
      { id: 12, name: '绝地求生-排位竞技', stock: 23, type: 'CDK', discount: '9.2折', discountTime: '2026-06-05 ~ 2026-12-05', status: '已启用' },
      { id: 11, name: '绝地求生-豪华版', stock: 21, type: 'CDK', discount: '8.8折', discountTime: '2026-03-01 ~ 2026-09-01', status: '已启用' },
      { id: 22, name: '完蛋!我也能追到美女了!-DLC', stock: 37, type: 'CDK', discount: '', discountTime: '', status: '已启用' },
      { id: 21, name: '完蛋!我也能追到美女了!-2', stock: 38, type: 'CDK', discount: '7.0折', discountTime: '2026-06-01 ~ 2026-08-31', status: '已启用' }
    ]]
  },
  3: {
    total: 1,
    pages: [[
      { id: 29, name: '台湾mycard点数50', stock: 15, type: 'CDK', discount: '9.0折', discountTime: '2026-05-01 ~ 2026-11-30', status: '已启用' }
    ]]
  },
  2: {
    total: 8,
    pages: [[
      { id: 41, name: '战争雷霆500金鹰币', stock: 18, type: 'CDK', discount: '9.0折', discountTime: '2026-06-01 ~ 2026-12-31', status: '已启用' },
      { id: 42, name: '绝地求生-标准版', stock: 12, type: 'CDK', discount: '', discountTime: '', status: '已启用' },
      { id: 43, name: 'MyCard点数100', stock: 30, type: '卡密', discount: '8.5折', discountTime: '2026-05-01 ~ 2026-10-31', status: '已启用' },
      { id: 44, name: '枪械-M4A1', stock: 5, type: 'CDK', discount: '9.5折', discountTime: '2026-07-01 ~ 2026-09-30', status: '已启用' },
      { id: 45, name: '完蛋!系列-合集包', stock: 22, type: 'CDK', discount: '8.0折', discountTime: '2026-04-15 ~ 2026-08-15', status: '已启用' },
      { id: 46, name: '绝地求生-竞技版', stock: 8, type: '账号', discount: '', discountTime: '', status: '已启用' },
      { id: 47, name: '战争雷霆1000金鹰币', stock: 10, type: 'CDK', discount: '7.5折', discountTime: '2026-06-15 ~ 2026-11-15', status: '已启用' },
      { id: 48, name: '台湾MyCard点数200', stock: 25, type: '卡密', discount: '9.0折', discountTime: '2026-05-20 ~ 2026-09-20', status: '已启用' }
    ]]
  },
  4: {
    total: 6,
    pages: [[
      { id: 51, name: '战争雷霆2500金鹰币', stock: 7, type: 'CDK', discount: '8.8折', discountTime: '2026-06-01 ~ 2026-10-31', status: '已启用' },
      { id: 52, name: '绝地求生-冠军版', stock: 14, type: 'CDK', discount: '9.2折', discountTime: '2026-05-01 ~ 2026-08-31', status: '已启用' },
      { id: 53, name: '枪械-AWM', stock: 0, type: 'CDK', discount: '', discountTime: '', status: '已启用' },
      { id: 54, name: 'MyCard点数500', stock: 20, type: '卡密', discount: '8.0折', discountTime: '2026-07-01 ~ 2026-12-31', status: '已启用' },
      { id: 55, name: '完蛋!我也能追到美女了!-3', stock: 16, type: 'CDK', discount: '7.0折', discountTime: '2026-06-10 ~ 2026-09-10', status: '已启用' },
      { id: 56, name: '绝地求生-生存通行证', stock: 11, type: '直充', discount: '9.0折', discountTime: '2026-05-15 ~ 2026-11-15', status: '已启用' }
    ]]
  }
};

var goodsPageState = {};

// ===== 侧边栏子菜单展开/收起 =====
function toggleSubmenu(el) {
  var children = el.querySelector('.submenu-children');
  var arrow = el.querySelector('.arrow');
  if (children && arrow) {
    children.classList.toggle('open');
    arrow.classList.toggle('open');
  }
}

// ===== 侧边栏收起 =====
function toggleSidebar() {
  var sider = document.querySelector('.sider');
  sider.style.display = sider.style.display === 'none' ? '' : 'none';
}

// ===== 菜单点击 =====
function switchMenu(el) {
  document.querySelectorAll('.menu-item').forEach(function(i) { i.classList.remove('active'); });
  el.classList.add('active');
  var page = el.getAttribute('data-page');
  if (page) openTab(page);
}

// ===== 页面动态加载 =====
var pageCache = {};

function loadPageContent(tabId) {
  var pageEl = document.getElementById('page-' + tabId);
  if (!pageEl || pageEl.dataset.loaded === '1') return;

  pageEl.innerHTML = '<div class="page-loading">加载中...</div>';

  fetch('pages/' + tabId + '.html')
    .then(function(r) {
      if (!r.ok) throw new Error('Page not found: ' + tabId);
      return r.text();
    })
    .then(function(html) {
      pageEl.innerHTML = html;
      pageEl.dataset.loaded = '1';
      afterPageLoad(tabId);
    })
    .catch(function() {
      pageEl.innerHTML = '';
      pageEl.dataset.loaded = '1';
    });
}

function afterPageLoad(tabId) {
  if (tabId === 'supplierPromotion') { renderPromoTable(); }
  if (tabId === 'mallGoodsManager') { renderMallGoodsTable(mallGoodsFilterName, mallGoodsFilterStatus, 0); }
  if (tabId === 'mallGoodsAdd') { initMallGoodsFormOptions(); }
}

// ===== 标签页管理 =====
var openTabs = ['home', 'mallGoodsManager'];

function openTab(tabId, label) {
  var existingTab = document.querySelector('.tab-item[data-tab="' + tabId + '"]');
  if (existingTab) {
    activateTab(tabId);
    return;
  }

  if (!label) {
    var labelMap = {
      'home': '首页',
      'mallGoodsManager': '商品管理',
      'supplierList': '供货商管理',
      'goodsManager': '商品管理',
      'goodsType': '商品分类',
      'supplierPromotion': '供货商活动推广',
      'mallGoodsAdd': '商品新增'
    };
    label = labelMap[tabId] || tabId;
  }

  var tab = document.createElement('div');
  tab.className = 'tab-item';
  tab.setAttribute('data-tab', tabId);
  tab.innerHTML = '<span>' + label + '</span><span class="tab-close" onclick="closeTab(event, \'' + tabId + '\')">✕</span>';
  tab.onclick = function(e) {
    if (!e.target.classList.contains('tab-close')) activateTab(tabId);
  };
  document.getElementById('tabsBar').appendChild(tab);
  openTabs.push(tabId);
  activateTab(tabId);
}

function activateTab(tabId) {
  document.querySelectorAll('.tab-item').forEach(function(t) { t.classList.remove('active'); });
  var tab = document.querySelector('.tab-item[data-tab="' + tabId + '"]');
  if (tab) tab.classList.add('active');

  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  var page = document.getElementById('page-' + tabId);
  if (page) {
    page.classList.add('active');
    loadPageContent(tabId);
  }

  document.querySelectorAll('.menu-item').forEach(function(i) { i.classList.remove('active'); });
  var menuItem = document.querySelector('.menu-item[data-page="' + tabId + '"]');
  if (menuItem) menuItem.classList.add('active');
}

function closeTab(e, tabId) {
  e.stopPropagation();
  if (tabId === 'home') return;

  var tab = document.querySelector('.tab-item[data-tab="' + tabId + '"]');
  if (!tab) return;

  var isActive = tab.classList.contains('active');
  var idx = openTabs.indexOf(tabId);
  if (idx > -1) openTabs.splice(idx, 1);
  tab.remove();

  var dynPage = document.getElementById('page-' + tabId);
  if (dynPage && dynPage.parentElement.id === 'dynamicPages') {
    dynPage.remove();
  }

  if (isActive && openTabs.length > 0) {
    activateTab(openTabs[openTabs.length - 1]);
  }
}

// ===== 打开货源管理/货源列表 =====
function openGoodsTab(supplierId, supplierName, cooperationType) {
  var tabId, label;
  if (cooperationType === '导入') {
    tabId = 'goodsSource_' + supplierId;
    label = '货源管理';
  } else {
    tabId = 'supplier_' + supplierId;
    label = '货源列表';
  }

  if (openTabs.indexOf(tabId) > -1) {
    activateTab(tabId);
    return;
  }

  var tab = document.createElement('div');
  tab.className = 'tab-item';
  tab.setAttribute('data-tab', tabId);
  tab.innerHTML = '<span>' + label + '</span><span class="tab-close" onclick="closeTab(event, \'' + tabId + '\')">✕</span>';
  tab.onclick = function(e) {
    if (!e.target.classList.contains('tab-close')) activateTab(tabId);
  };
  document.getElementById('tabsBar').appendChild(tab);
  openTabs.push(tabId);

  createGoodsPage(tabId, supplierId, supplierName, cooperationType);
  activateTab(tabId);
}

function createGoodsPage(tabId, supplierId, supplierName, cooperationType) {
  var container = document.getElementById('dynamicPages');
  var pageDiv = document.createElement('div');
  pageDiv.className = 'page';
  pageDiv.id = 'page-' + tabId;

  var data = supplierGoodsData[supplierId] || { total: 0, pages: [[]] };
  var currentPage = 0;
  goodsPageState[tabId] = currentPage;

  var hasData = data.total > 0;
  var pageData = data.pages[0] || [];
  var totalPages = data.pages.length;
  var totalCount = data.total;

  var html = '<div class="card">';
  html += '<div class="search-form"><div class="form-row">';
  html += '<div class="form-item"><label>商品名称</label><input type="text" placeholder="请输入"></div>';
  html += '<div class="form-item"><label>历史库存</label><input type="text" placeholder="请选择库存时间" readonly></div>';
  html += '<div class="form-actions">';
  html += '<button class="btn btn-primary">导 出</button>';
  html += '<button class="btn btn-primary" style="margin:0 12px;">🔍 查询</button>';
  html += '<button class="btn" style="margin-right:12px;">🔄 重置</button>';
  html += '<button class="btn btn-green">＋ 新增</button>';
  html += '</div></div></div>';

  html += '<div class="table-wrap"><table>';
  html += '<colgroup><col style="width:300px;min-width:300px;"><col><col><col><col><col><col><col></colgroup>';
  html += '<thead><tr><th>操作</th><th>商品ID</th><th>商品名称</th><th>商品库存</th><th>商品类型</th><th>商品折扣</th><th>折扣时间</th><th>状态</th></tr></thead><tbody>';

  if (hasData) {
    for (var i = 0; i < pageData.length; i++) {
      var row = pageData[i];
      html += '<tr>';
      html += '<td class="table-actions"><a>编辑</a><span class="divider">|</span><a>禁用</a><span class="divider">|</span><a>批次管理</a><span class="divider">|</span><a>库存管理</a></td>';
      html += '<td>' + row.id + '</td><td>' + row.name + '</td><td>' + row.stock + '</td><td>' + row.type + '</td>';
      html += '<td>' + (row.discount || '-') + '</td><td>' + (row.discountTime || '-') + '</td>';
      html += '<td><span class="badge">' + row.status + '</span></td></tr>';
    }
  }

  html += '</tbody></table></div>';

  html += '<div class="pagination">';
  if (hasData) {
    var start = currentPage * 10 + 1;
    var end = Math.min(start + pageData.length - 1, totalCount);
    html += '<span class="total">' + start + '-' + end + ' 共' + totalCount + '条</span>';
    html += '<button class="page-btn" ' + (currentPage === 0 ? 'disabled' : 'onclick="goToGoodsPage(\'' + tabId + '\',' + supplierId + ',' + (currentPage - 1) + ')"') + '>◀</button>';
    for (var p = 0; p < totalPages; p++) {
      html += '<button class="page-btn' + (p === currentPage ? ' active' : '') + '" onclick="goToGoodsPage(\'' + tabId + '\',' + supplierId + ',' + p + ')">' + (p + 1) + '</button>';
    }
    html += '<button class="page-btn" ' + (currentPage >= totalPages - 1 ? 'disabled' : 'onclick="goToGoodsPage(\'' + tabId + '\',' + supplierId + ',' + (currentPage + 1) + ')"') + '>▶</button>';
  } else {
    html += '<span class="total">0-0 共0条</span><button class="page-btn" disabled>◀</button><button class="page-btn active">1</button><button class="page-btn" disabled>▶</button>';
  }
  html += '<span class="page-size">10 条/页 ▼</span></div></div>';
  pageDiv.innerHTML = html;
  pageDiv.dataset.loaded = '1';
  container.appendChild(pageDiv);
}

function goToGoodsPage(tabId, supplierId, pageNum) {
  var data = supplierGoodsData[supplierId];
  if (!data || pageNum < 0 || pageNum >= data.pages.length) return;

  goodsPageState[tabId] = pageNum;
  var pageData = data.pages[pageNum];
  var totalPages = data.pages.length;
  var totalCount = data.total;

  var pageDiv = document.getElementById('page-' + tabId);
  if (!pageDiv) return;

  var tbody = pageDiv.querySelector('tbody');
  var html = '';
  for (var i = 0; i < pageData.length; i++) {
    var row = pageData[i];
    html += '<tr>';
    html += '<td class="table-actions"><a>编辑</a><span class="divider">|</span><a>禁用</a><span class="divider">|</span><a>批次管理</a><span class="divider">|</span><a>库存管理</a></td>';
    html += '<td>' + row.id + '</td><td>' + row.name + '</td><td>' + row.stock + '</td><td>' + row.type + '</td>';
    html += '<td>' + (row.discount || '-') + '</td><td>' + (row.discountTime || '-') + '</td>';
    html += '<td><span class="badge">' + row.status + '</span></td></tr>';
  }
  tbody.innerHTML = html;

  var pagination = pageDiv.querySelector('.pagination');
  var start = pageNum * 10 + 1;
  var end = Math.min(start + pageData.length - 1, totalCount);
  var pagHtml = '<span class="total">' + start + '-' + end + ' 共' + totalCount + '条</span>';
  pagHtml += '<button class="page-btn" ' + (pageNum === 0 ? 'disabled' : 'onclick="goToGoodsPage(\'' + tabId + '\',' + supplierId + ',' + (pageNum - 1) + ')"') + '>◀</button>';
  for (var p = 0; p < totalPages; p++) {
    pagHtml += '<button class="page-btn' + (p === pageNum ? ' active' : '') + '" onclick="goToGoodsPage(\'' + tabId + '\',' + supplierId + ',' + p + ')">' + (p + 1) + '</button>';
  }
  pagHtml += '<button class="page-btn" ' + (pageNum >= totalPages - 1 ? 'disabled' : 'onclick="goToGoodsPage(\'' + tabId + '\',' + supplierId + ',' + (pageNum + 1) + ')"') + '>▶</button>';
  pagHtml += '<span class="page-size">10 条/页 ▼</span>';
  pagination.innerHTML = pagHtml;
}

// ===== 供货商活动推广 =====
var supplierList = [
  { id: 4, name: '福福', cooperation: '接口' },
  { id: 3, name: '新巢科技', cooperation: '导入' },
  { id: 2, name: '福禄（新）', cooperation: '接口' },
  { id: 1, name: '商店自营', cooperation: '导入' }
];

// ===== 商品管理（商品流水）数据 =====
var mallGoods = [
  { id: 1, name: '战争雷霆150金鹰币', subTitle: '', gameCategoryId: 1, version: '', platform: '', channels: [{channelName:'Steam',channelGameId:'wt_150'}], accountType: 'CDK', sourceKeyType: 'CDK', goodsCategory: '游戏币', subCategory: '', supplierId: 1, supplierName: '商店自营', sort: 1, rmbPrice: 150.00, rmbOriginPrice: 200.00, currencies: [{currencyType:'NB',sellPrice:'1500',originalPrice:'2000'},{currencyType:'LS',sellPrice:'150',originalPrice:'200'}], nCoinPrice: 1500, lsCoinPrice: 150, purchaseLimit: 10, showSales: 520, stockAlert: 5, stock: 24, sales: 156, status: '上架', spec: '', specIntro: '', goodsDesc: '', bannerImg: null },
  { id: 2, name: '枪械-莫辛纳甘', subTitle: '', gameCategoryId: 2, version: '', platform: '', channels: [], accountType: 'CDK', sourceKeyType: 'CDK', goodsCategory: '枪械', subCategory: '', supplierId: 1, supplierName: '商店自营', sort: 2, rmbPrice: 88.00, rmbOriginPrice: 120.00, currencies: [{currencyType:'NB',sellPrice:'880',originalPrice:'1200'},{currencyType:'LS',sellPrice:'88',originalPrice:'120'}], nCoinPrice: 880, lsCoinPrice: 88, purchaseLimit: 5, showSales: 320, stockAlert: 3, stock: 0, sales: 320, status: '上架', spec: '', specIntro: '', goodsDesc: '', bannerImg: null },
  { id: 3, name: '枪械-98K', subTitle: '', gameCategoryId: 2, version: '', platform: '', channels: [], accountType: 'CDK', sourceKeyType: '卡密', goodsCategory: '枪械', subCategory: '', supplierId: 1, supplierName: '商店自营', sort: 3, rmbPrice: 128.00, rmbOriginPrice: 168.00, currencies: [{currencyType:'NB',sellPrice:'1280',originalPrice:'1680'},{currencyType:'LS',sellPrice:'128',originalPrice:'168'}], nCoinPrice: 1280, lsCoinPrice: 128, purchaseLimit: 3, showSales: 89, stockAlert: 2, stock: 1, sales: 89, status: '上架', spec: '', specIntro: '', goodsDesc: '', bannerImg: null },
  { id: 4, name: '枪械-AK47', subTitle: '', gameCategoryId: 2, version: '', platform: '', channels: [], accountType: 'CDK', sourceKeyType: 'CDK', goodsCategory: '枪械', subCategory: '', supplierId: 1, supplierName: '商店自营', sort: 4, rmbPrice: 168.00, rmbOriginPrice: 228.00, currencies: [{currencyType:'NB',sellPrice:'1680',originalPrice:'2280'},{currencyType:'LS',sellPrice:'168',originalPrice:'228'}], nCoinPrice: 1680, lsCoinPrice: 168, purchaseLimit: 5, showSales: 445, stockAlert: 5, stock: 33, sales: 445, status: '上架', spec: '', specIntro: '', goodsDesc: '', bannerImg: null },
  { id: 5, name: '绝地求生-豪华版', subTitle: '', gameCategoryId: 2, version: '', platform: '', channels: [], accountType: '账号', sourceKeyType: '直充', goodsCategory: '游戏账号', subCategory: '', supplierId: 3, supplierName: '新巢科技', sort: 5, rmbPrice: 298.00, rmbOriginPrice: 398.00, currencies: [{currencyType:'NB',sellPrice:'2980',originalPrice:'3980'},{currencyType:'LS',sellPrice:'298',originalPrice:'398'}], nCoinPrice: 2980, lsCoinPrice: 298, purchaseLimit: 1, showSales: 67, stockAlert: 5, stock: 21, sales: 67, status: '上架', spec: '', specIntro: '', goodsDesc: '', bannerImg: null },
  { id: 6, name: '台湾mycard点数50', subTitle: '', gameCategoryId: 3, version: '', platform: '', channels: [], accountType: 'CDK', sourceKeyType: '卡密', goodsCategory: '点数卡', subCategory: '', supplierId: 3, supplierName: '新巢科技', sort: 6, rmbPrice: 50.00, rmbOriginPrice: 65.00, currencies: [{currencyType:'NB',sellPrice:'500',originalPrice:'650'},{currencyType:'LS',sellPrice:'50',originalPrice:'65'}], nCoinPrice: 500, lsCoinPrice: 50, purchaseLimit: 20, showSales: 1203, stockAlert: 10, stock: 15, sales: 1203, status: '上架', spec: '', specIntro: '', goodsDesc: '', bannerImg: null },
  { id: 7, name: '完蛋!我也能追到美女了!-DLC', subTitle: '', gameCategoryId: 4, version: '', platform: '', channels: [], accountType: 'CDK', sourceKeyType: 'CDK', goodsCategory: 'DLC', subCategory: '', supplierId: 1, supplierName: '商店自营', sort: 7, rmbPrice: 39.00, rmbOriginPrice: 59.00, currencies: [{currencyType:'NB',sellPrice:'390',originalPrice:'590'},{currencyType:'LS',sellPrice:'39',originalPrice:'59'}], nCoinPrice: 390, lsCoinPrice: 39, purchaseLimit: 10, showSales: 88, stockAlert: 5, stock: 37, sales: 88, status: '下架', spec: '', specIntro: '', goodsDesc: '', bannerImg: null },
  { id: 8, name: '绝地求生-排位竞技', subTitle: '', gameCategoryId: 2, version: '', platform: '', channels: [], accountType: '账号', sourceKeyType: '直充', goodsCategory: '游戏账号', subCategory: '', supplierId: 1, supplierName: '商店自营', sort: 8, rmbPrice: 199.00, rmbOriginPrice: 259.00, currencies: [{currencyType:'NB',sellPrice:'1990',originalPrice:'2590'},{currencyType:'LS',sellPrice:'199',originalPrice:'259'}], nCoinPrice: 1990, lsCoinPrice: 199, purchaseLimit: 2, showSales: 512, stockAlert: 3, stock: 23, sales: 512, status: '上架', spec: '', specIntro: '', goodsDesc: '', bannerImg: null },
  { id: 9, name: '绝地求生-Ps版', subTitle: '', gameCategoryId: 2, version: '', platform: '', channels: [], accountType: 'CDK', sourceKeyType: 'CDK', goodsCategory: '游戏本体', subCategory: '', supplierId: 1, supplierName: '商店自营', sort: 9, rmbPrice: 259.00, rmbOriginPrice: 329.00, currencies: [{currencyType:'NB',sellPrice:'2590',originalPrice:'3290'},{currencyType:'LS',sellPrice:'259',originalPrice:'329'}], nCoinPrice: 2590, lsCoinPrice: 259, purchaseLimit: 3, showSales: 198, stockAlert: 3, stock: 26, sales: 198, status: '上架', spec: '', specIntro: '', goodsDesc: '', bannerImg: null },
  { id: 10, name: '绝地求生-Xbox版', subTitle: '', gameCategoryId: 2, version: '', platform: '', channels: [], accountType: 'CDK', sourceKeyType: 'CDK', goodsCategory: '游戏本体', subCategory: '', supplierId: 1, supplierName: '商店自营', sort: 10, rmbPrice: 239.00, rmbOriginPrice: 299.00, currencies: [{currencyType:'NB',sellPrice:'2390',originalPrice:'2990'},{currencyType:'LS',sellPrice:'239',originalPrice:'299'}], nCoinPrice: 2390, lsCoinPrice: 239, purchaseLimit: 3, showSales: 76, stockAlert: 3, stock: 27, sales: 76, status: '下架', spec: '', specIntro: '', goodsDesc: '', bannerImg: null },
  // 组合商品
  { id: 11, name: '绝地求生大礼包', subTitle: '', gameCategoryId: 2, goodsType: 'combo', version: '', platform: '', channels: [], accountType: '', sourceKeyType: '', goodsCategory: '', subCategory: '', supplierId: 1, supplierName: '商店自营', sort: 11, rmbPrice: 500.00, rmbOriginPrice: 700.00, currencies: [{currencyType:'NB',sellPrice:'5000',originalPrice:'7000'},{currencyType:'LS',sellPrice:'500',originalPrice:'700'}], nCoinPrice: 5000, lsCoinPrice: 500, comboGoods: [{goodsId:5,goodsName:'绝地求生-豪华版'},{goodsId:9,goodsName:'绝地求生-Ps版'}], comboStartDate: '2026-06-01', comboEndDate: '2026-12-31', purchaseLimit: 1, showSales: 42, stockAlert: 3, stock: 15, sales: 42, status: '上架', spec: '', specIntro: '', goodsDesc: '', bannerImg: null },
  { id: 12, name: '枪械收藏套装', subTitle: '', gameCategoryId: 2, goodsType: 'combo', version: '', platform: '', channels: [], accountType: '', sourceKeyType: '', goodsCategory: '', subCategory: '', supplierId: 1, supplierName: '商店自营', sort: 12, rmbPrice: 350.00, rmbOriginPrice: 500.00, currencies: [{currencyType:'NB',sellPrice:'3500',originalPrice:'5000'},{currencyType:'LS',sellPrice:'350',originalPrice:'500'}], nCoinPrice: 3500, lsCoinPrice: 350, comboGoods: [{goodsId:2,goodsName:'枪械-莫辛纳甘'},{goodsId:3,goodsName:'枪械-98K'},{goodsId:4,goodsName:'枪械-AK47'}], comboStartDate: '2026-05-01', comboEndDate: '2026-11-30', purchaseLimit: 3, showSales: 28, stockAlert: 2, stock: 8, sales: 28, status: '上架', spec: '', specIntro: '', goodsDesc: '', bannerImg: null },
  { id: 13, name: '战争雷霆入门包', subTitle: '', gameCategoryId: 1, goodsType: 'combo', version: '', platform: '', channels: [], accountType: '', sourceKeyType: '', goodsCategory: '', subCategory: '', supplierId: 3, supplierName: '新巢科技', sort: 13, rmbPrice: 200.00, rmbOriginPrice: 300.00, currencies: [{currencyType:'NB',sellPrice:'2000',originalPrice:'3000'},{currencyType:'LS',sellPrice:'200',originalPrice:'300'}], nCoinPrice: 2000, lsCoinPrice: 200, comboGoods: [{goodsId:1,goodsName:'战争雷霆150金鹰币'}], comboStartDate: '2026-06-15', comboEndDate: '2026-09-15', purchaseLimit: 5, showSales: 15, stockAlert: 5, stock: 30, sales: 15, status: '下架', spec: '', specIntro: '', goodsDesc: '', bannerImg: null }
];
var mallGoodsNextId = 14;
var mallGoodsEditingId = null;
var mallGoodsFilterName = '';
var mallGoodsFilterStatus = '';
var mallGoodsFilterType = 'independent';
var mallGoodsCurrentPage = 0;
var mallGoodsPageSize = 10;

// 游戏类别ID→名称映射
var gameCategoryMap = { 1: '战争雷霆', 2: '绝地求生', 3: 'MyCard', 4: '完蛋!系列' };
function getGameCategoryName(id) { return gameCategoryMap[id] || id; }

var promotions = [
  { id: 1, name: '暑期促销活动', supplierIds: [1], goodsIds: [33, 14], supplierNames: '商店自营', goodsNames: '战争雷霆150金鹰币, 枪械-98K', discount: '9.0折', startDate: '2026-06-01T00:00', endDate: '2026-07-31T00:00', createTime: '2026-06-01 10:30:00', status: '启用' },
  { id: 2, name: '新巢科技专享', supplierIds: [3], goodsIds: [29], supplierNames: '新巢科技', goodsNames: '台湾mycard点数50', discount: '8.5折', startDate: '2026-05-15T00:00', endDate: '2026-08-15T00:00', createTime: '2026-05-10 14:20:00', status: '启用' },
  { id: 3, name: '国庆大促', supplierIds: [1], goodsIds: [13, 19], supplierNames: '商店自营', goodsNames: '枪械-AK47, 绝地求生-Xbox版', discount: '7.5折', startDate: '2026-09-01T00:00', endDate: '2026-10-07T00:00', createTime: '2026-05-20 09:00:00', status: '启用' },
  { id: 4, name: '双十一预热', supplierIds: [1], goodsIds: [14, 17], supplierNames: '商店自营', goodsNames: '枪械-98K, 枪械-莫辛纳甘', discount: '8.0折', startDate: '2026-11-01T00:00', endDate: '2026-11-11T00:00', createTime: '2026-06-01 11:00:00', status: '启用' },
  { id: 5, name: '春节特惠', supplierIds: [1], goodsIds: [33, 21], supplierNames: '商店自营', goodsNames: '战争雷霆150金鹰币, 完蛋!我也能追到美女了!-2', discount: '8.8折', startDate: '2026-01-25T00:00', endDate: '2026-02-05T00:00', createTime: '2026-01-20 08:00:00', status: '启用' },
  { id: 6, name: '女神节活动', supplierIds: [3], goodsIds: [29], supplierNames: '新巢科技', goodsNames: '台湾mycard点数50', discount: '9.0折', startDate: '2026-03-01T00:00', endDate: '2026-03-08T00:00', createTime: '2026-02-25 16:00:00', status: '启用' },
  { id: 7, name: '圣诞季推广', supplierIds: [1], goodsIds: [18, 11], supplierNames: '商店自营', goodsNames: '绝地求生-Ps版, 绝地求生-豪华版', discount: '7.0折', startDate: '2026-12-20T00:00', endDate: '2026-12-31T00:00', createTime: '2026-05-15 10:00:00', status: '禁用' },
  { id: 8, name: '新巢春季特惠', supplierIds: [3], goodsIds: [29], supplierNames: '新巢科技', goodsNames: '台湾mycard点数50', discount: '9.0折', startDate: '2026-04-01T00:00', endDate: '2026-06-30T00:00', createTime: '2026-03-28 09:00:00', status: '禁用' },
  { id: 9, name: '年中大促', supplierIds: [1], goodsIds: [13, 19, 22], supplierNames: '商店自营', goodsNames: '枪械-AK47, 绝地求生-Xbox版, 完蛋!我也能追到美女了!-DLC', discount: '6.5折', startDate: '2026-06-01T00:00', endDate: '2026-06-30T00:00', createTime: '2026-05-28 13:00:00', status: '禁用' },
  { id: 10, name: '元旦促销', supplierIds: [3], goodsIds: [29], supplierNames: '新巢科技', goodsNames: '台湾mycard点数50', discount: '8.0折', startDate: '2025-12-28T00:00', endDate: '2026-01-03T00:00', createTime: '2025-12-25 10:00:00', status: '禁用' },
  { id: 11, name: '劳动节特卖', supplierIds: [1], goodsIds: [33], supplierNames: '商店自营', goodsNames: '战争雷霆150金鹰币', discount: '7.5折', startDate: '2026-04-28T00:00', endDate: '2026-05-05T00:00', createTime: '2026-04-25 09:30:00', status: '禁用' }
];
var promoNextId = 12;
var editingPromoId = null;

function getGoodsBySupplierIds(supplierIds) {
  var result = [];
  for (var i = 0; i < supplierIds.length; i++) {
    var data = supplierGoodsData[supplierIds[i]];
    if (data && data.pages) {
      for (var p = 0; p < data.pages.length; p++) {
        for (var j = 0; j < data.pages[p].length; j++) {
          var g = data.pages[p][j];
          result.push({ goodsId: g.id, goodsName: g.name, supplierId: supplierIds[i], supplierName: getSupplierName(supplierIds[i]) });
        }
      }
    }
  }
  return result;
}

function getSupplierName(id) {
  for (var i = 0; i < supplierList.length; i++) {
    if (supplierList[i].id === id) return supplierList[i].name;
  }
  return '';
}

var selectedSupplierId = null;
function renderPromoSupplierList(selectedIds) {
  selectedSupplierId = (selectedIds && selectedIds.length > 0) ? selectedIds[0] : null;
  var container = document.getElementById('promoSupplierDropdown');
  var html = '';
  for (var i = 0; i < supplierList.length; i++) {
    var s = supplierList[i];
    var cls = s.id === selectedSupplierId ? ' option selected' : ' option';
    html += '<div class="' + cls + '" onclick="selectSupplier(' + s.id + ',\'' + s.name + '\')">' + s.name + '（' + s.cooperation + '）</div>';
  }
  container.innerHTML = html;
  var textEl = document.getElementById('promoSupplierText');
  if (selectedSupplierId) {
    textEl.textContent = getSupplierName(selectedSupplierId);
  } else {
    textEl.textContent = '请选择供应商';
  }
}

function selectSupplier(id, name) {
  selectedSupplierId = id;
  document.getElementById('promoSupplierText').textContent = name;
  document.getElementById('promoSupplierDropdown').classList.remove('show');
  document.getElementById('promoSupplierArrow').classList.remove('open');
  renderPromoSupplierList([id]);
  renderPromoGoodsList();
}

function toggleSupplierDropdown() {
  var dd = document.getElementById('promoSupplierDropdown');
  var arrow = document.getElementById('promoSupplierArrow');
  var isOpen = dd.classList.contains('show');
  document.getElementById('promoGoodsDropdown').classList.remove('show');
  document.getElementById('promoGoodsArrow').classList.remove('open');
  if (isOpen) {
    dd.classList.remove('show');
    arrow.classList.remove('open');
  } else {
    dd.classList.add('show');
    arrow.classList.add('open');
  }
}

var selectedGoodsIds = [];
var selectedGoodsNames = [];
function renderPromoGoodsList(selectedIds) {
  selectedGoodsIds = selectedIds ? selectedIds.slice() : [];
  selectedGoodsNames = [];
  var container = document.getElementById('promoGoodsDropdown');
  if (!selectedSupplierId) {
    container.innerHTML = '<div class="option" style="color:#999;cursor:default;">请先选择供应商</div>';
    updateGoodsTriggerText();
    return;
  }
  var goods = getGoodsBySupplierIds([selectedSupplierId]);
  if (goods.length === 0) {
    container.innerHTML = '<div class="option" style="color:#999;cursor:default;">所选供应商暂无货源数据</div>';
    updateGoodsTriggerText();
    return;
  }
  window._currentGoodsList = goods;
  var html = '';
  for (var j = 0; j < goods.length; j++) {
    var g = goods[j];
    var checked = selectedGoodsIds.indexOf(g.goodsId) > -1 ? ' checked' : '';
    html += '<label class="option"><input type="checkbox" value="' + g.goodsId + '"' + checked + ' onchange="onGoodsCheckChange()">' + g.goodsName + ' <span style="color:#999;font-size:11px;">（' + g.supplierName + '）</span></label>';
  }
  container.innerHTML = html;
  updateGoodsTriggerText();
}

function onGoodsCheckChange() {
  var checks = document.querySelectorAll('#promoGoodsDropdown input[type=checkbox]');
  selectedGoodsIds = [];
  selectedGoodsNames = [];
  var goodsList = window._currentGoodsList || [];
  for (var i = 0; i < checks.length; i++) {
    if (checks[i].checked) {
      var id = parseInt(checks[i].value);
      selectedGoodsIds.push(id);
      for (var j = 0; j < goodsList.length; j++) {
        if (goodsList[j].goodsId === id) { selectedGoodsNames.push(goodsList[j].goodsName); break; }
      }
    }
  }
  updateGoodsTriggerText();
}

function updateGoodsTriggerText() {
  var textEl = document.getElementById('promoGoodsText');
  if (selectedGoodsNames.length > 0) {
    textEl.textContent = selectedGoodsNames.join(', ');
  } else {
    textEl.textContent = '请选择货源';
  }
}

function toggleGoodsDropdown() {
  if (!selectedSupplierId) return;
  var dd = document.getElementById('promoGoodsDropdown');
  var arrow = document.getElementById('promoGoodsArrow');
  var isOpen = dd.classList.contains('show');
  document.getElementById('promoSupplierDropdown').classList.remove('show');
  document.getElementById('promoSupplierArrow').classList.remove('open');
  if (isOpen) {
    dd.classList.remove('show');
    arrow.classList.remove('open');
  } else {
    dd.classList.add('show');
    arrow.classList.add('open');
  }
}

function openPromoModal(promoId) {
  editingPromoId = promoId || null;
  document.getElementById('promoModalTitle').textContent = promoId ? '编辑活动推广' : '新增活动推广';

  var record = null;
  if (promoId) {
    for (var i = 0; i < promotions.length; i++) {
      if (promotions[i].id === promoId) { record = promotions[i]; break; }
    }
  }

  document.getElementById('promoSupplierDropdown').classList.remove('show');
  document.getElementById('promoSupplierArrow').classList.remove('open');
  document.getElementById('promoGoodsDropdown').classList.remove('show');
  document.getElementById('promoGoodsArrow').classList.remove('open');

  renderPromoSupplierList(record ? record.supplierIds : []);
  renderPromoGoodsList(record ? record.goodsIds : []);

  var nameInput = document.getElementById('promoName');
  nameInput.value = record ? (record.name || '') : '';
  nameInput.readOnly = !!promoId;

  document.getElementById('promoStartDate').value = record ? record.startDate : '';
  document.getElementById('promoEndDate').value = record ? record.endDate : '';
  document.getElementById('promoDiscount').value = record ? (record.discount || '') : '';

  var radios = document.getElementsByName('promoStatus');
  var statusVal = record ? record.status : '启用';
  for (var r = 0; r < radios.length; r++) { radios[r].checked = (radios[r].value === statusVal); }

  document.getElementById('promoModal').style.display = 'flex';
}

function closePromoModal() {
  document.getElementById('promoModal').style.display = 'none';
  editingPromoId = null;
  selectedSupplierId = null;
  selectedGoodsIds = [];
  selectedGoodsNames = [];
  var nameInput = document.getElementById('promoName');
  nameInput.value = '';
  nameInput.readOnly = false;
}

function savePromotion() {
  var promoName = document.getElementById('promoName').value.trim();
  if (!promoName) { showToast('请输入活动名称'); return; }

  if (!selectedSupplierId) { showToast('请选择一个供应商'); return; }
  var supplierIds = [selectedSupplierId];
  var supplierNames = [getSupplierName(selectedSupplierId)];

  var goodsChecks = document.querySelectorAll('#promoGoodsDropdown input[type=checkbox]');
  var goodsIds = [];
  var goodsNames = [];
  for (var j = 0; j < goodsChecks.length; j++) {
    if (goodsChecks[j].checked) { goodsIds.push(parseInt(goodsChecks[j].value)); }
  }
  var goodsList = window._currentGoodsList || [];
  for (var k = 0; k < goodsChecks.length; k++) {
    if (goodsChecks[k].checked) {
      var gid = parseInt(goodsChecks[k].value);
      for (var g = 0; g < goodsList.length; g++) {
        if (goodsList[g].goodsId === gid) { goodsNames.push(goodsList[g].goodsName); break; }
      }
    }
  }
  if (goodsIds.length === 0) { showToast('请至少选择一个货源'); return; }

  var startDate = document.getElementById('promoStartDate').value;
  var endDate = document.getElementById('promoEndDate').value;
  var discount = document.getElementById('promoDiscount').value;
  if (!startDate) { showToast('请选择开始时间'); return; }
  if (!endDate) { showToast('请选择结束时间'); return; }
  if (endDate < startDate) { showToast('结束时间不能早于开始时间'); return; }

  var statusVal = '启用';
  var radios = document.getElementsByName('promoStatus');
  for (var r = 0; r < radios.length; r++) { if (radios[r].checked) statusVal = radios[r].value; }

  var now = new Date();
  var createTime = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0') + ' ' + String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0') + ':' + String(now.getSeconds()).padStart(2, '0');

  if (editingPromoId) {
    for (var e = 0; e < promotions.length; e++) {
      if (promotions[e].id === editingPromoId) {
        promotions[e].supplierIds = supplierIds;
        promotions[e].goodsIds = goodsIds;
        promotions[e].supplierNames = supplierNames.join(', ');
        promotions[e].goodsNames = goodsNames.join(', ');
        promotions[e].discount = discount;
        promotions[e].startDate = startDate;
        promotions[e].endDate = endDate;
        promotions[e].status = statusVal;
        break;
      }
    }
  } else {
    promotions.push({
      id: promoNextId++, name: promoName, supplierIds: supplierIds, goodsIds: goodsIds,
      supplierNames: supplierNames.join(', '), goodsNames: goodsNames.join(', '),
      discount: discount, startDate: startDate, endDate: endDate, createTime: createTime, status: statusVal
    });
  }

  closePromoModal();
  renderPromoTable();
}

function getPromoDisplayStatus(p) {
  var now = new Date();
  var start = p.startDate ? new Date(p.startDate) : null;
  var end = p.endDate ? new Date(p.endDate) : null;
  if (p.status === '启用') {
    if (start && now < start) return '待执行';
    if (start && end && now >= start && now <= end) return '执行中';
    if (end && now > end) return '已完成';
    return '执行中';
  } else {
    if (start && end && now >= start && now <= end) return '已暂停';
    if (end && now > end) return '已过期';
    return '禁用';
  }
}

function getStatusTagClass(status) {
  if (status === '执行中') return 'tag-success';
  if (status === '待执行') return 'tag-blue';
  if (status === '已完成') return 'tag-default';
  if (status === '已暂停') return 'tag-warning';
  if (status === '已过期') return 'tag-error';
  return 'tag-default';
}

function refreshPromotions() {
  renderPromoTable();
  showToast('活动数据已刷新');
}

function renderPromoTable(filterText, filterStart, filterEnd, filterStatus) {
  var filtered = promotions.slice();
  if (filterText) { filtered = filtered.filter(function(p) { return p.supplierNames.indexOf(filterText) > -1 || p.goodsNames.indexOf(filterText) > -1; }); }
  if (filterStart) { filtered = filtered.filter(function(p) { return p.startDate >= filterStart; }); }
  if (filterEnd) { filtered = filtered.filter(function(p) { return p.endDate <= filterEnd; }); }
  if (filterStatus) { filtered = filtered.filter(function(p) { return getPromoDisplayStatus(p) === filterStatus; }); }

  var tbody = document.getElementById('promoTableBody');
  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="11" style="padding:40px;color:#999;">暂无数据</td></tr>';
  } else {
    var html = '';
    for (var i = 0; i < filtered.length; i++) {
      var p = filtered[i];
      html += '<tr>';
      html += '<td>' + p.id + '</td>';
      var now2 = new Date();
      var endDt = p.endDate ? new Date(p.endDate) : null;
      var canEdit = !endDt || endDt >= now2;
      html += '<td class="table-actions">' + (canEdit ? '<a onclick="openPromoModal(' + p.id + ')">编辑</a>' : '') + '</td>';
      html += '<td>' + (p.name || '') + '</td>';
      html += '<td>' + p.supplierNames + '</td>';
      html += '<td>' + p.goodsNames + '</td>';
      html += '<td>' + (p.discount || '-') + '</td>';
      html += '<td>' + (p.startDate ? p.startDate.replace('T', ' ') : '') + '</td>';
      html += '<td>' + (p.endDate ? p.endDate.replace('T', ' ') : '') + '</td>';
      html += '<td>' + p.createTime + '</td>';
      var ds = getPromoDisplayStatus(p);
      html += '<td><span class="tag ' + getStatusTagClass(ds) + '">' + ds + '</span></td>';
      html += '</tr>';
    }
    tbody.innerHTML = html;
  }

  var pagination = document.getElementById('promoPagination');
  pagination.innerHTML = '<span class="total">1-' + filtered.length + ' 共' + filtered.length + '条</span>' +
    '<button class="page-btn" disabled>◀</button>' +
    '<button class="page-btn active">1</button>' +
    '<button class="page-btn" disabled>▶</button>' +
    '<span class="page-size">10 条/页 ▼</span>';
}

function filterPromotions() {
  renderPromoTable(
    document.getElementById('promoFilterSupplier').value,
    document.getElementById('promoFilterStart').value,
    document.getElementById('promoFilterEnd').value,
    document.getElementById('promoFilterStatus').value
  );
}

function resetPromoFilter() {
  document.getElementById('promoFilterSupplier').value = '';
  document.getElementById('promoFilterStart').value = '';
  document.getElementById('promoFilterEnd').value = '';
  document.getElementById('promoFilterStatus').value = '';
  renderPromoTable();
}

// ===== 商品管理（商品流水） =====
function onMallGoodsTypeChange() {
  var radios = document.getElementsByName('mallGoodsFilterType');
  for (var i = 0; i < radios.length; i++) { if (radios[i].checked) mallGoodsFilterType = radios[i].value; }
  mallGoodsCurrentPage = 0;
  renderMallGoodsTable(mallGoodsFilterName, mallGoodsFilterStatus, 0);
}

function renderMallGoodsTableHeader() {
  var thead = document.getElementById('mallGoodsTableHead');
  var table = document.getElementById('mallGoodsTable');
  if (!thead || !table) return;

  if (mallGoodsFilterType === 'independent') {
    table.innerHTML = '<colgroup>' +
      '<col style="width:110px;min-width:110px;"><col style="width:55px;min-width:55px;">' +
      '<col style="width:150px;min-width:150px;"><col style="width:75px;min-width:75px;">' +
      '<col style="width:60px;min-width:60px;"><col style="width:70px;min-width:70px;">' +
      '<col style="width:80px;min-width:80px;"><col style="width:90px;min-width:90px;">' +
      '<col style="width:50px;min-width:50px;"><col style="width:80px;min-width:80px;">' +
      '<col style="width:70px;min-width:70px;"><col style="width:80px;min-width:80px;">' +
      '<col style="width:50px;min-width:50px;"><col style="width:50px;min-width:50px;">' +
      '<col style="width:60px;min-width:60px;">' +
      '</colgroup>' +
      '<thead id="mallGoodsTableHead"><tr>' +
      '<th>操作</th><th>商品ID</th><th>商品名称</th><th>游戏类别</th>' +
      '<th>账号类型</th><th>卡密类型</th><th>商品分类</th><th>供货商信息</th>' +
      '<th>排序</th><th>人民币售价</th><th>N币售价</th><th>雷神币售价</th>' +
      '<th>库存</th><th>销量</th><th>状态</th>' +
      '</tr></thead><tbody id="mallGoodsTableBody"></tbody>';
  } else {
    table.innerHTML = '<colgroup>' +
      '<col style="width:110px;min-width:110px;"><col style="width:55px;min-width:55px;">' +
      '<col style="width:150px;min-width:150px;"><col style="width:80px;min-width:80px;">' +
      '<col style="width:120px;min-width:120px;"><col style="width:200px;min-width:200px;">' +
      '<col style="width:50px;min-width:50px;"><col style="width:80px;min-width:80px;">' +
      '<col style="width:70px;min-width:70px;"><col style="width:80px;min-width:80px;">' +
      '<col style="width:50px;min-width:50px;"><col style="width:50px;min-width:50px;">' +
      '<col style="width:60px;min-width:60px;">' +
      '</colgroup>' +
      '<thead id="mallGoodsTableHead"><tr>' +
      '<th>操作</th><th>商品ID</th><th>商品名称</th><th>游戏类别</th>' +
      '<th>生效时间</th><th>关联商品</th>' +
      '<th>排序</th><th>人民币售价</th>' +
      '<th>N币售价</th><th>雷神币售价</th>' +
      '<th>库存</th><th>销量</th><th>状态</th>' +
      '</tr></thead><tbody id="mallGoodsTableBody"></tbody>';
  }
}

function renderMallGoodsTable(filterName, filterStatus, pageNum) {
  if (pageNum === undefined) pageNum = mallGoodsCurrentPage;

  // 先按商品类型过滤
  var filtered = mallGoods.slice();
  if (mallGoodsFilterType === 'independent') {
    filtered = filtered.filter(function(g) { return g.goodsType !== 'combo'; });
  } else {
    filtered = filtered.filter(function(g) { return g.goodsType === 'combo'; });
  }
  if (filterName) { filtered = filtered.filter(function(g) { return g.name.indexOf(filterName) > -1; }); }
  if (filterStatus) { filtered = filtered.filter(function(g) { return g.status === filterStatus; }); }

  var totalCount = filtered.length;
  var totalPages = Math.ceil(totalCount / mallGoodsPageSize) || 1;
  if (pageNum >= totalPages) pageNum = totalPages - 1;
  if (pageNum < 0) pageNum = 0;
  mallGoodsCurrentPage = pageNum;

  var start = pageNum * mallGoodsPageSize;
  var pageData = filtered.slice(start, start + mallGoodsPageSize);

  // 渲染表头
  renderMallGoodsTableHeader();

  var tbody = document.getElementById('mallGoodsTableBody');
  if (!tbody) return;
  var colSpan = mallGoodsFilterType === 'independent' ? 15 : 13;
  if (pageData.length === 0) {
    tbody.innerHTML = '<tr><td colspan="' + colSpan + '" style="padding:40px;color:#999;">暂无数据</td></tr>';
  } else {
    var html = '';
    for (var i = 0; i < pageData.length; i++) {
      var g = pageData[i];
      var statusTag = g.status === '上架' ? '<span class="tag tag-success">上架</span>' : '<span class="tag tag-default">下架</span>';
      html += '<tr>';
      html += '<td class="table-actions">';
      html += '<a onclick="openTab(\'mallGoodsAdd\', \'商品编辑\'); setTimeout(function(){ fillMallGoodsForm(' + g.id + '); }, 50);">编辑</a>';
      html += '<span class="divider">|</span>';
      html += '<a onclick="toggleMallGoodsStatus(' + g.id + ')">' + (g.status === '上架' ? '下架' : '上架') + '</a>';
      html += '</td>';
      html += '<td>' + g.id + '</td><td>' + g.name + '</td><td>' + getGameCategoryName(g.gameCategoryId) + '</td>';
      if (mallGoodsFilterType === 'independent') {
        html += '<td>' + g.accountType + '</td><td>' + (g.sourceKeyType || '-') + '</td><td>' + g.goodsCategory + '</td><td>' + g.supplierName + '</td>';
      } else {
        // 组合商品：生效时间 + 关联商品
        var timeRange = (g.comboStartDate || '') + ' ~ ' + (g.comboEndDate || '');
        var relatedGoods = '';
        if (g.comboGoods && g.comboGoods.length > 0) {
          var names = [];
          for (var ci = 0; ci < g.comboGoods.length; ci++) { names.push(g.comboGoods[ci].goodsName); }
          relatedGoods = names.join('、');
        }
        html += '<td>' + timeRange + '</td><td>' + (relatedGoods || '-') + '</td>';
      }
      html += '<td>' + g.sort + '</td><td>' + g.rmbPrice.toFixed(2) + '</td><td>' + g.nCoinPrice + '</td><td>' + g.lsCoinPrice + '</td>';
      html += '<td>' + g.stock + '</td><td>' + g.sales + '</td><td>' + statusTag + '</td></tr>';
    }
    tbody.innerHTML = html;
  }

  var pagination = document.getElementById('mallGoodsPagination');
  if (!pagination) return;
  var startDisplay = totalCount === 0 ? 0 : (pageNum * mallGoodsPageSize + 1);
  var endDisplay = Math.min(startDisplay + pageData.length - 1, totalCount);
  var pagHtml = '<span class="total">' + startDisplay + '-' + endDisplay + ' 共' + totalCount + '条</span>';
  pagHtml += '<button class="page-btn" ' + (pageNum === 0 ? 'disabled' : 'onclick="renderMallGoodsTable(mallGoodsFilterName,mallGoodsFilterStatus,' + (pageNum - 1) + ')"') + '>◀</button>';
  for (var p = 0; p < totalPages; p++) {
    pagHtml += '<button class="page-btn' + (p === pageNum ? ' active' : '') + '" onclick="renderMallGoodsTable(mallGoodsFilterName,mallGoodsFilterStatus,' + p + ')">' + (p + 1) + '</button>';
  }
  pagHtml += '<button class="page-btn" ' + (pageNum >= totalPages - 1 ? 'disabled' : 'onclick="renderMallGoodsTable(mallGoodsFilterName,mallGoodsFilterStatus,' + (pageNum + 1) + ')"') + '>▶</button>';
  pagHtml += '<span class="page-size">' + mallGoodsPageSize + ' 条/页 ▼</span>';
  pagination.innerHTML = pagHtml;
}

function filterMallGoods() {
  mallGoodsFilterName = document.getElementById('mallGoodsFilterName').value.trim();
  mallGoodsFilterStatus = document.getElementById('mallGoodsFilterStatus').value;
  mallGoodsCurrentPage = 0;
  renderMallGoodsTable(mallGoodsFilterName, mallGoodsFilterStatus, 0);
}

function resetMallGoodsFilter() {
  document.getElementById('mallGoodsFilterName').value = '';
  document.getElementById('mallGoodsFilterStatus').value = '';
  mallGoodsFilterName = '';
  mallGoodsFilterStatus = '';
  mallGoodsCurrentPage = 0;
  renderMallGoodsTable('', '', 0);
}

function toggleMallGoodsStatus(goodsId) {
  for (var i = 0; i < mallGoods.length; i++) {
    if (mallGoods[i].id === goodsId) {
      mallGoods[i].status = mallGoods[i].status === '上架' ? '下架' : '上架';
      showToast('商品「' + mallGoods[i].name + '」已' + mallGoods[i].status);
      break;
    }
  }
  renderMallGoodsTable(mallGoodsFilterName, mallGoodsFilterStatus, mallGoodsCurrentPage);
}

function initMallGoodsFormOptions() {
  // 供货商下拉
  var supplierSelect = document.getElementById('mgSupplier');
  if (!supplierSelect) return;
  var supplierHtml = '<option value="">请选择供货商</option>';
  for (var i = 0; i < supplierList.length; i++) {
    supplierHtml += '<option value="' + supplierList[i].id + '">' + supplierList[i].name + '</option>';
  }
  supplierSelect.innerHTML = supplierHtml;

  // 初始化渠道（仅新增时，编辑时 fillMallGoodsForm 会重新渲染）
  if (!mallGoodsEditingId) {
    renderChannelRows([]);
    // 默认商品类型为独立商品
    var typeRadios = document.getElementsByName('mgGoodsType');
    if (typeRadios.length > 0) typeRadios[0].checked = true;
    onGoodsTypeChange();
  }
}

// ===== 生效渠道 动态行 =====
var channelOptions = ['Steam', 'Epic Games', 'WeGame', 'Origin', 'Uplay', 'GOG', 'Battle.net', 'Xbox Live', 'PSN', 'Nintendo eShop'];
var defaultChannels = [];

function renderChannelRows(channels) {
  var container = document.getElementById('channelRows');
  if (!container) return;
  var data = channels || defaultChannels;
  var html = '';
  for (var i = 0; i < data.length; i++) {
    var ch = data[i];
    html += '<div class="channel-row">';
    // 渠道名称
    html += '<div class="field-group"><div class="field-label">渠道名称</div><div class="field-control"><select class="mgChannelName">';
    html += '<option value="">选择渠道名称</option>';
    for (var j = 0; j < channelOptions.length; j++) {
      html += '<option value="' + channelOptions[j] + '"' + (ch.channelName === channelOptions[j] ? ' selected' : '') + '>' + channelOptions[j] + '</option>';
    }
    html += '</select></div></div>';
    // 渠道游戏ID
    html += '<div class="field-group"><div class="field-label">渠道游戏ID</div><div class="field-control"><input type="text" class="mgChannelGameId" placeholder="输入平台游戏ID" value="' + (ch.channelGameId || '') + '"></div></div>';
    // 删除
    html += '<span class="row-del" onclick="delChannelRow(this)" title="删除此渠道">⊖</span>';
    html += '</div>';
  }
  container.innerHTML = html;
}

function addChannelRow() {
  var container = document.getElementById('channelRows');
  if (!container) return;
  var row = document.createElement('div');
  row.className = 'channel-row';
  var optHtml = '<option value="">选择渠道名称</option>';
  for (var j = 0; j < channelOptions.length; j++) {
    optHtml += '<option value="' + channelOptions[j] + '">' + channelOptions[j] + '</option>';
  }
  row.innerHTML = '<div class="field-group"><div class="field-label">渠道名称</div><div class="field-control"><select class="mgChannelName">' + optHtml + '</select></div></div>' +
    '<div class="field-group"><div class="field-label">渠道游戏ID</div><div class="field-control"><input type="text" class="mgChannelGameId" placeholder="输入平台游戏ID"></div></div>' +
    '<span class="row-del" onclick="delChannelRow(this)" title="删除此渠道">⊖</span>';
  container.appendChild(row);
}

function delChannelRow(el) {
  el.parentElement.remove();
}

function collectChannels() {
  var result = [];
  var rows = document.querySelectorAll('#channelRows .channel-row');
  for (var i = 0; i < rows.length; i++) {
    var sel = rows[i].querySelector('.mgChannelName');
    var input = rows[i].querySelector('.mgChannelGameId');
    var name = sel ? sel.value : '';
    var gameId = input ? input.value.trim() : '';
    if (name) result.push({ channelName: name, channelGameId: gameId });
  }
  return result;
}

// ===== 商品类型切换 =====
function onGoodsTypeChange() {
  var radios = document.getElementsByName('mgGoodsType');
  var isCombo = false;
  for (var r = 0; r < radios.length; r++) {
    if (radios[r].checked && radios[r].value === 'combo') isCombo = true;
  }
  var independentDiv = document.getElementById('independentFields');
  var comboDiv = document.getElementById('comboFields');
  if (independentDiv) independentDiv.style.display = isCombo ? 'none' : '';
  if (comboDiv) comboDiv.style.display = isCombo ? '' : 'none';
}

function onGameCategoryChange() {
  refreshComboGoodsDropdowns();
}

function getGoodsByGameCategory(categoryId) {
  if (!categoryId) return [];
  var result = [];
  for (var i = 0; i < mallGoods.length; i++) {
    if (mallGoods[i].gameCategoryId === categoryId) {
      result.push({ goodsId: mallGoods[i].id, goodsName: mallGoods[i].name });
    }
  }
  return result;
}

function refreshComboGoodsDropdowns() {
  var gameCategoryId = parseInt(document.getElementById('mgGameCategory').value) || 0;
  var allGoods = getGoodsByGameCategory(gameCategoryId);
  var selects = document.querySelectorAll('#comboGoodsRows .mgComboGoods');
  for (var i = 0; i < selects.length; i++) {
    var currentVal = selects[i].value;
    var optHtml = '<option value="">选择商品</option>';
    for (var j = 0; j < allGoods.length; j++) {
      optHtml += '<option value="' + allGoods[j].goodsId + '"' + (parseInt(currentVal) === allGoods[j].goodsId ? ' selected' : '') + '>' + allGoods[j].goodsName + '</option>';
    }
    selects[i].innerHTML = optHtml;
  }
}

function addComboGoodsRow(selectedGoodsId) {
  var container = document.getElementById('comboGoodsRows');
  if (!container) return;
  var gameCategoryId = parseInt(document.getElementById('mgGameCategory').value) || 0;
  var goods = getGoodsByGameCategory(gameCategoryId);
  var row = document.createElement('div');
  row.className = 'combo-goods-row';
  var optHtml = '<option value="">选择商品</option>';
  for (var j = 0; j < goods.length; j++) {
    var sel = (selectedGoodsId && goods[j].goodsId === selectedGoodsId) ? ' selected' : '';
    optHtml += '<option value="' + goods[j].goodsId + '"' + sel + '>' + goods[j].goodsName + '</option>';
  }
  row.innerHTML = '<div class="field-group"><div class="field-label">勾选商品</div><div class="field-control"><select class="mgComboGoods">' + optHtml + '</select></div></div>' +
    '<span class="row-del" onclick="delComboGoodsRow(this)" title="删除">⊖</span>';
  container.appendChild(row);
}

function delComboGoodsRow(el) {
  el.parentElement.remove();
}

function renderComboGoodsRows(goodsList) {
  var container = document.getElementById('comboGoodsRows');
  if (!container) return;
  var data = goodsList || [];
  var gameCategoryId = parseInt(document.getElementById('mgGameCategory').value) || 0;
  var allGoods = getGoodsByGameCategory(gameCategoryId);
  var html = '';
  for (var i = 0; i < data.length; i++) {
    html += '<div class="combo-goods-row">';
    html += '<div class="field-group"><div class="field-label">勾选商品</div><div class="field-control"><select class="mgComboGoods">';
    html += '<option value="">选择商品</option>';
    for (var j = 0; j < allGoods.length; j++) {
      html += '<option value="' + allGoods[j].goodsId + '"' + (data[i].goodsId === allGoods[j].goodsId ? ' selected' : '') + '>' + allGoods[j].goodsName + '</option>';
    }
    html += '</select></div></div>';
    html += '<span class="row-del" onclick="delComboGoodsRow(this)" title="删除">⊖</span>';
    html += '</div>';
  }
  container.innerHTML = html;
}

function collectComboGoods() {
  var result = [];
  var selects = document.querySelectorAll('#comboGoodsRows .mgComboGoods');
  for (var i = 0; i < selects.length; i++) {
    var goodsId = parseInt(selects[i].value);
    if (goodsId) {
      var goodsName = selects[i].options[selects[i].selectedIndex].text;
      result.push({ goodsId: goodsId, goodsName: goodsName });
    }
  }
  return result;
}

// ===== 币种定价 动态行 =====
var currencyTypeOptions = ['NB', 'LS', 'USD', 'HKD', 'TWD'];
var defaultCurrencies = [
  { currencyType: 'NB', sellPrice: '', originalPrice: '' },
  { currencyType: 'LS', sellPrice: '', originalPrice: '' }
];

function renderCurrencyRows(currencies) {
  var container = document.getElementById('currencyRows');
  if (!container) return;
  var data = currencies || defaultCurrencies;
  var html = '';
  for (var i = 0; i < data.length; i++) {
    var cu = data[i];
    html += '<div class="currency-row">';
    // 售价
    html += '<div class="field-group"><div class="field-label">' + cu.currencyType + '售价</div><div class="field-control"><div class="price-input-group">';
    html += '<input type="text" class="mgCurrencySellPrice" placeholder="请输入" value="' + (cu.sellPrice || '') + '">';
    html += '<select class="mgCurrencyType">';
    for (var j = 0; j < currencyTypeOptions.length; j++) {
      html += '<option value="' + currencyTypeOptions[j] + '"' + (cu.currencyType === currencyTypeOptions[j] ? ' selected' : '') + '>' + currencyTypeOptions[j] + '</option>';
    }
    html += '</select></div></div></div>';
    // 原价
    html += '<div class="field-group"><div class="field-label">' + cu.currencyType + '原价</div><div class="field-control"><div class="price-input-group">';
    html += '<input type="text" class="mgCurrencyOrigPrice" placeholder="请输入" value="' + (cu.originalPrice || '') + '">';
    html += '<select class="mgCurrencyType2">';
    for (var k = 0; k < currencyTypeOptions.length; k++) {
      html += '<option value="' + currencyTypeOptions[k] + '"' + (cu.currencyType === currencyTypeOptions[k] ? ' selected' : '') + '>' + currencyTypeOptions[k] + '</option>';
    }
    html += '</select></div></div></div>';
    // 删除
    html += '<span class="row-del" onclick="delCurrencyRow(this)" title="删除此币种">⊖</span>';
    html += '</div>';
  }
  container.innerHTML = html;
}

function addCurrencyRow() {
  var container = document.getElementById('currencyRows');
  if (!container) return;
  var row = document.createElement('div');
  row.className = 'currency-row';
  var optHtml = '';
  for (var j = 0; j < currencyTypeOptions.length; j++) {
    optHtml += '<option value="' + currencyTypeOptions[j] + '">' + currencyTypeOptions[j] + '</option>';
  }
  row.innerHTML = '<div class="field-group"><div class="field-label">币种售价</div><div class="field-control"><div class="price-input-group">' +
    '<input type="text" class="mgCurrencySellPrice" placeholder="请输入">' +
    '<select class="mgCurrencyType">' + optHtml + '</select></div></div></div>' +
    '<div class="field-group"><div class="field-label">币种原价</div><div class="field-control"><div class="price-input-group">' +
    '<input type="text" class="mgCurrencyOrigPrice" placeholder="请输入">' +
    '<select class="mgCurrencyType2">' + optHtml + '</select></div></div></div>' +
    '<span class="row-del" onclick="delCurrencyRow(this)" title="删除此币种">⊖</span>';
  container.appendChild(row);
}

function delCurrencyRow(el) {
  var container = document.getElementById('currencyRows');
  if (!container) return;
  var rows = container.querySelectorAll('.currency-row');
  if (rows.length <= 1) {
    // 至少保留一行，清空值
    var inputs = rows[0].querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) inputs[i].value = '';
    return;
  }
  el.parentElement.remove();
}

function collectCurrencies() {
  var result = [];
  var rows = document.querySelectorAll('#currencyRows .currency-row');
  for (var i = 0; i < rows.length; i++) {
    var typeSel = rows[i].querySelector('.mgCurrencyType');
    var sellInput = rows[i].querySelector('.mgCurrencySellPrice');
    var origInput = rows[i].querySelector('.mgCurrencyOrigPrice');
    var type = typeSel ? typeSel.value : '';
    var sell = sellInput ? sellInput.value.trim() : '';
    var orig = origInput ? origInput.value.trim() : '';
    if (type && sell) {
      result.push({ currencyType: type, sellPrice: sell, originalPrice: orig });
    }
  }
  return result;
}

// 横图预览
function previewBannerImg(input) {
  var preview = document.getElementById('mgBannerImgPreview');
  if (!preview) return;
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function fillMallGoodsForm(goodsId) {
  initMallGoodsFormOptions();
  document.getElementById('mallGoodsAddTitle').textContent = '商品编辑';
  mallGoodsEditingId = goodsId;

  for (var j = 0; j < mallGoods.length; j++) {
    if (mallGoods[j].id === goodsId) {
      var g = mallGoods[j];

      // 基础信息
      var setVal = function(id, val) { var el = document.getElementById(id); if (el) el.value = val || ''; };
      setVal('mgName', g.name);
      setVal('mgSubTitle', g.subTitle);
      setVal('mgGameCategory', g.gameCategoryId);
      setVal('mgVersion', g.version);
      setVal('mgPlatform', g.platform);

      // 生效渠道
      renderChannelRows((g.channels && g.channels.length > 0) ? g.channels : []);

      // 商品类型
      var goodsType = g.goodsType || 'independent';
      var typeRadios = document.getElementsByName('mgGoodsType');
      for (var tr = 0; tr < typeRadios.length; tr++) { typeRadios[tr].checked = (typeRadios[tr].value === goodsType); }
      onGoodsTypeChange();
      // 组合商品
      if (goodsType === 'combo' && g.comboGoods && g.comboGoods.length > 0) {
        renderComboGoodsRows(g.comboGoods);
        setVal('mgComboStartDate', g.comboStartDate);
        setVal('mgComboEndDate', g.comboEndDate);
      } else {
        renderComboGoodsRows([]);
        setVal('mgComboStartDate', '');
        setVal('mgComboEndDate', '');
      }

      setVal('mgAccountType', g.accountType);
      setVal('mgSourceKeyType', g.sourceKeyType);
      setVal('mgGoodsCategory', g.goodsCategory);
      setVal('mgSubCategory', g.subCategory);
      setVal('mgSupplier', g.supplierId);

      // 商品信息
      setVal('mgRmbPrice', g.rmbPrice);
      setVal('mgRmbOriginPrice', g.rmbOriginPrice);

      // 币种定价（固定字段）
      var lsCur = null, nbCur = null;
      if (g.currencies && g.currencies.length > 0) {
        for (var ci = 0; ci < g.currencies.length; ci++) {
          if (g.currencies[ci].currencyType === 'LS') lsCur = g.currencies[ci];
          if (g.currencies[ci].currencyType === 'NB') nbCur = g.currencies[ci];
        }
      }
      setVal('mgLsPrice', lsCur ? lsCur.sellPrice : '');
      setVal('mgLsOriginPrice', lsCur ? lsCur.originalPrice : '');
      setVal('mgNbPrice', nbCur ? nbCur.sellPrice : '');
      setVal('mgNbOriginPrice', nbCur ? nbCur.originalPrice : '');

      setVal('mgPurchaseLimit', g.purchaseLimit);
      setVal('mgShowSales', g.showSales);
      setVal('mgStockAlert', g.stockAlert);
      setVal('mgSort', g.sort);

      var radios = document.getElementsByName('mgStatus');
      for (var r = 0; r < radios.length; r++) { radios[r].checked = (radios[r].value === g.status); }

      setVal('mgSpec', g.spec);
      setVal('mgSpecIntro', g.specIntro);
      setVal('mgGoodsDesc', g.goodsDesc);

      // 横图
      var preview = document.getElementById('mgBannerImgPreview');
      if (preview) {
        if (g.bannerImg) { preview.src = g.bannerImg; preview.style.display = 'block'; }
        else { preview.src = ''; preview.style.display = 'none'; }
      }
      bannerImgData = g.bannerImg || null;
      break;
    }
  }
}

function resetMallGoodsForm() {
  mallGoodsEditingId = null;
  bannerImgData = null;
  var titleEl = document.getElementById('mallGoodsAddTitle');
  if (titleEl) titleEl.textContent = '商品新增';
  var fields = ['mgName','mgSubTitle','mgGameCategory','mgVersion','mgPlatform','mgAccountType','mgSourceKeyType','mgGoodsCategory','mgSubCategory','mgSupplier','mgRmbPrice','mgRmbOriginPrice','mgLsPrice','mgLsOriginPrice','mgNbPrice','mgNbOriginPrice','mgPurchaseLimit','mgShowSales','mgStockAlert','mgSort','mgSpec','mgSpecIntro','mgGoodsDesc'];
  for (var i = 0; i < fields.length; i++) {
    var el = document.getElementById(fields[i]);
    if (el) el.value = '';
  }
  var radios = document.getElementsByName('mgStatus');
  if (radios.length > 0) radios[0].checked = true;

  // 重置横图预览
  var preview = document.getElementById('mgBannerImgPreview');
  if (preview) { preview.src = ''; preview.style.display = 'none'; }
  var fileInput = document.getElementById('mgBannerImgInput');
  if (fileInput) fileInput.value = '';

  // 重置渠道
  renderChannelRows([]);

  // 重置商品类型
  var typeRadios = document.getElementsByName('mgGoodsType');
  if (typeRadios.length > 0) typeRadios[0].checked = true;
  onGoodsTypeChange();
  renderComboGoodsRows([]);
  var comboStartEl = document.getElementById('mgComboStartDate');
  var comboEndEl = document.getElementById('mgComboEndDate');
  if (comboStartEl) comboStartEl.value = '';
  if (comboEndEl) comboEndEl.value = '';
}

function cancelMallGoodsAdd() {
  resetMallGoodsForm();
  var tabId = 'mallGoodsAdd';
  var tab = document.querySelector('.tab-item[data-tab="' + tabId + '"]');
  if (tab) {
    var idx = openTabs.indexOf(tabId);
    if (idx > -1) openTabs.splice(idx, 1);
    tab.remove();
  }
  activateTab('mallGoodsManager');
}

var bannerImgData = null;

function saveMallGoods() {
  var getVal = function(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
  var name = getVal('mgName');
  if (!name) { showToast('请输入商品名称'); return; }

  var gameCategoryId = parseInt(document.getElementById('mgGameCategory').value);
  if (!gameCategoryId) { showToast('请选择绑定游戏类别'); return; }

  // 商品类型
  var goodsType = 'independent';
  var typeRadios = document.getElementsByName('mgGoodsType');
  for (var tr = 0; tr < typeRadios.length; tr++) { if (typeRadios[tr].checked) goodsType = typeRadios[tr].value; }

  var accountType, sourceKeyType, goodsCategory, finalComboGoods, comboStartDate, comboEndDate;
  if (goodsType === 'combo') {
    finalComboGoods = collectComboGoods();
    if (finalComboGoods.length === 0) { showToast('请至少选择一个组合商品'); return; }
    comboStartDate = getVal('mgComboStartDate');
    comboEndDate = getVal('mgComboEndDate');
    if (!comboStartDate) { showToast('请选择组合商品生效开始时间'); return; }
    if (!comboEndDate) { showToast('请选择组合商品生效结束时间'); return; }
    if (comboEndDate < comboStartDate) { showToast('生效结束时间不能早于开始时间'); return; }
    accountType = '';
    sourceKeyType = '';
    goodsCategory = '';
  } else {
    accountType = document.getElementById('mgAccountType').value;
    if (!accountType) { showToast('请选择账号类型'); return; }
    sourceKeyType = document.getElementById('mgSourceKeyType').value;
    if (!sourceKeyType) { showToast('请选择货源卡密类型'); return; }
    goodsCategory = document.getElementById('mgGoodsCategory').value;
    if (!goodsCategory) { showToast('请选择商品分类'); return; }
    finalComboGoods = [];
    comboStartDate = '';
    comboEndDate = '';
  }

  var supplierId = parseInt(document.getElementById('mgSupplier').value);
  if (!supplierId) { showToast('请选择供货商'); return; }

  var rmbPriceStr = getVal('mgRmbPrice');
  if (!rmbPriceStr) { showToast('请输入人民币售价'); return; }
  var rmbPrice = parseFloat(rmbPriceStr);
  if (isNaN(rmbPrice) || rmbPrice < 0) { showToast('人民币售价格式不正确'); return; }

  var rmbOriginPriceStr = getVal('mgRmbOriginPrice');
  if (!rmbOriginPriceStr) { showToast('请输入人民币原价'); return; }
  var rmbOriginPrice = parseFloat(rmbOriginPriceStr);
  if (isNaN(rmbOriginPrice) || rmbOriginPrice < 0) { showToast('人民币原价格式不正确'); return; }

  var subTitle = getVal('mgSubTitle');
  var version = document.getElementById('mgVersion').value;
  var platform = document.getElementById('mgPlatform').value;
  var subCategory = document.getElementById('mgSubCategory').value;

  // 采集生效渠道
  var channels = collectChannels();
  // 币种从固定字段读取
  var lsPriceStr = getVal('mgLsPrice');
  var lsOriginPriceStr = getVal('mgLsOriginPrice');
  var nbPriceStr = getVal('mgNbPrice');
  var nbOriginPriceStr = getVal('mgNbOriginPrice');
  var currencies = [];
  if (lsPriceStr) currencies.push({ currencyType: 'LS', sellPrice: lsPriceStr, originalPrice: lsOriginPriceStr });
  if (nbPriceStr) currencies.push({ currencyType: 'NB', sellPrice: nbPriceStr, originalPrice: nbOriginPriceStr });

  var toInt = function(str, def) { var v = parseInt(str); return isNaN(v) || v < 0 ? (def || 0) : v; };
  var purchaseLimit = toInt(getVal('mgPurchaseLimit'), 0);
  var showSales = toInt(getVal('mgShowSales'), 0);
  var stockAlert = toInt(getVal('mgStockAlert'), 0);
  var sort = toInt(getVal('mgSort'), 0);

  var spec = getVal('mgSpec');
  var specIntro = getVal('mgSpecIntro');
  var goodsDesc = getVal('mgGoodsDesc');

  var statusVal = '上架';
  var radios = document.getElementsByName('mgStatus');
  for (var r = 0; r < radios.length; r++) { if (radios[r].checked) statusVal = radios[r].value; }

  var supplierName = '';
  for (var s = 0; s < supplierList.length; s++) { if (supplierList[s].id === supplierId) { supplierName = supplierList[s].name; break; } }

  // N币售价 和 雷神币售价（用于在商品流水表格中显示）
  var nCoinPrice = parseFloat(nbPriceStr) || 0;
  var lsCoinPrice = parseFloat(lsPriceStr) || 0;

  var baseData = {
    name: name, subTitle: subTitle, gameCategoryId: gameCategoryId,
    version: version, platform: platform, goodsType: goodsType,
    accountType: accountType, sourceKeyType: sourceKeyType,
    goodsCategory: goodsCategory, comboGoods: finalComboGoods,
    comboStartDate: comboStartDate, comboEndDate: comboEndDate,
    subCategory: subCategory, supplierId: supplierId, supplierName: supplierName,
    sort: sort, rmbPrice: rmbPrice, rmbOriginPrice: rmbOriginPrice,
    nCoinPrice: nCoinPrice, lsCoinPrice: lsCoinPrice,
    purchaseLimit: purchaseLimit, showSales: showSales, stockAlert: stockAlert,
    status: statusVal, spec: spec, specIntro: specIntro,
    goodsDesc: goodsDesc, bannerImg: bannerImgData,
    channels: channels, currencies: currencies
  };

  if (mallGoodsEditingId) {
    for (var e = 0; e < mallGoods.length; e++) {
      if (mallGoods[e].id === mallGoodsEditingId) {
        for (var key in baseData) { mallGoods[e][key] = baseData[key]; }
        break;
      }
    }
    showToast('商品编辑成功');
  } else {
    baseData.id = mallGoodsNextId++;
    baseData.stock = 0;
    baseData.sales = 0;
    baseData.nCoinPrice = nCoinPrice;
    baseData.lsCoinPrice = lsCoinPrice;
    mallGoods.push(baseData);
    showToast('商品新增成功');
  }

  resetMallGoodsForm();
  var tabId = 'mallGoodsAdd';
  var tab = document.querySelector('.tab-item[data-tab="' + tabId + '"]');
  if (tab) {
    var idx = openTabs.indexOf(tabId);
    if (idx > -1) openTabs.splice(idx, 1);
    tab.remove();
  }
  activateTab('mallGoodsManager');
  renderMallGoodsTable(mallGoodsFilterName, mallGoodsFilterStatus, mallGoodsCurrentPage);
}

// ===== 菜单点击高亮 =====
document.querySelectorAll('.menu-item').forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelectorAll('.menu-item').forEach(function(i) { i.classList.remove('active'); });
    this.classList.add('active');
  });
});

// ===== 点击弹窗外部关闭下拉 =====
document.addEventListener('click', function(e) {
  var supplierSelect = document.getElementById('promoSupplierSelect');
  var goodsWrap = document.getElementById('promoGoodsMultiWrap');
  if (supplierSelect && !supplierSelect.contains(e.target)) {
    var sd = document.getElementById('promoSupplierDropdown');
    var sa = document.getElementById('promoSupplierArrow');
    if (sd) sd.classList.remove('show');
    if (sa) sa.classList.remove('open');
  }
  if (goodsWrap && !goodsWrap.contains(e.target)) {
    var gd = document.getElementById('promoGoodsDropdown');
    var ga = document.getElementById('promoGoodsArrow');
    if (gd) gd.classList.remove('show');
    if (ga) ga.classList.remove('open');
  }
});

// ===== 默认激活商品管理 =====
activateTab('mallGoodsManager');
