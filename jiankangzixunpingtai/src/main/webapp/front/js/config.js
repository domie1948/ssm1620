
var projectName = '健康综合咨询问诊平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.jsp'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.jsp'
}
]


var indexNav = [

{
	name: '医生坐诊',
	url: './pages/yishengzuozhen/list.jsp'
}, 
{
	name: '健康资讯',
	url: './pages/jiankangzixun/list.jsp'
}, 
{
	name: '新闻资讯',
	url: './pages/news/list.jsp'
},
]

var adminurl =  "http://localhost:8080/jiankangzixunpingtai/index.jsp";

var cartFlag = false

var chatFlag = false


chatFlag = true
cartFlag = true


var menu = [{
    "backMenu": [{
        "child": [{
            "buttons": ["新增", "查看", "修改", "删除"],
            "menu": "科室",
            "menuJump": "列表",
            "tableName": "keshi"
        }],
        "menu": "科室管理"
    }, {
        "child": [{
            "buttons": ["新增", "查看", "修改", "删除"],
            "menu": "医生",
            "menuJump": "列表",
            "tableName": "yisheng"
        }],
        "menu": "医生管理"
    }, {
        "child": [{
            "buttons": ["查看", "修改", "删除"],
            "menu": "医生坐诊",
            "menuJump": "列表",
            "tableName": "yishengzuozhen"
        }],
        "menu": "医生坐诊管理"
    }, {
        "child": [{
            "buttons": ["新增", "查看", "修改", "删除"],
            "menu": "用户",
            "menuJump": "列表",
            "tableName": "yonghu"
        }],
        "menu": "用户管理"
    }, {
        "child": [{
            "buttons": ["查看", "修改", "删除"],
            "menu": "预约挂号",
            "menuJump": "列表",
            "tableName": "yuyueguahao"
        }],
        "menu": "预约挂号管理"
    }, {
        "child": [{
            "buttons": ["查看", "修改", "删除"],
            "menu": "用户病例",
            "menuJump": "列表",
            "tableName": "yonghubingli"
        }],
        "menu": "用户病例管理"
    }, {
        "child": [{
            "buttons": ["新增", "查看", "修改", "删除"],
            "menu": "健康资讯",
            "menuJump": "列表",
            "tableName": "jiankangzixun"
        }],
        "menu": "健康资讯管理"
    }, {
        "child": [{
            "buttons": ["新增", "查看", "修改", "删除"],
            "menu": "客服管理",
            "tableName": "kefuguanli"
        }, {
            "buttons": ["新增", "查看", "修改", "删除"],
            "menu": "轮播图管理",
            "tableName": "lunbotuguanli"
        }, {
            "buttons": ["新增", "查看", "修改", "删除"],
            "menu": "新闻资讯",
            "tableName": "news"
        }],
        "menu": "系统管理"
    }],
    "frontMenu": [{
        "child": [{
            "buttons": ["查看", "预约挂号"],
            "menu": "医生坐诊列表",
            "menuJump": "列表",
            "tableName": "yishengzuozhen"
        }],
        "menu": "医生坐诊模块"
    }, {
        "child": [{
            "buttons": ["查看"],
            "menu": "健康资讯列表",
            "menuJump": "列表",
            "tableName": "jiankangzixun"
        }],
        "menu": "健康资讯模块"
    }],
    "roleName": "管理员",
    "tableName": "users"
}, {
    "backMenu": [{
        "child": [{
            "buttons": ["新增", "查看", "修改", "删除"],
            "menu": "医生坐诊",
            "menuJump": "列表",
            "tableName": "yishengzuozhen"
        }],
        "menu": "医生坐诊管理"
    }, {
        "child": [{
            "buttons": ["查看", "审核", "添加病例"],
            "menu": "预约挂号",
            "menuJump": "列表",
            "tableName": "yuyueguahao"
        }],
        "menu": "预约挂号管理"
    }, {
        "child": [{
            "buttons": ["查看", "修改"],
            "menu": "用户病例",
            "menuJump": "列表",
            "tableName": "yonghubingli"
        }],
        "menu": "用户病例管理"
    }],
    "frontMenu": [{
        "child": [{
            "buttons": ["查看"],
            "menu": "医生坐诊列表",
            "menuJump": "列表",
            "tableName": "yishengzuozhen"
        }],
        "menu": "医生坐诊模块"
    }, {
        "child": [{
            "buttons": ["查看"],
            "menu": "健康资讯列表",
            "menuJump": "列表",
            "tableName": "jiankangzixun"
        }],
        "menu": "健康资讯模块"
    }],
    "roleName": "医生",
    "tableName": "yisheng"
}, {
    "backMenu": [{
        "child": [{
            "buttons": ["查看", "支付"],
            "menu": "预约挂号",
            "menuJump": "列表",
            "tableName": "yuyueguahao"
        }],
        "menu": "预约挂号管理"
    }, {
        "child": [{
            "buttons": ["查看"],
            "menu": "用户病例",
            "menuJump": "列表",
            "tableName": "yonghubingli"
        }],
        "menu": "用户病例管理"
    }, {
        "child": [{
            "buttons": ["查看", "删除"],
            "menu": "我的收藏管理",
            "tableName": "storeup"
        }],
        "menu": "我的收藏管理"
    }],
    "frontMenu": [{
        "child": [{
            "buttons": ["查看", "预约挂号"],
            "menu": "医生坐诊列表",
            "menuJump": "列表",
            "tableName": "yishengzuozhen"
        }],
        "menu": "医生坐诊模块"
    }, {
        "child": [{
            "buttons": ["查看"],
            "menu": "健康资讯列表",
            "menuJump": "列表",
            "tableName": "jiankangzixun"
        }],
        "menu": "健康资讯模块"
    }],
    "roleName": "用户",
    "tableName": "yonghu"
}];

var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
