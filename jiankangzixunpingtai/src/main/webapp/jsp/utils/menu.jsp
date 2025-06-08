<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
var menus = [{
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
			"buttons": ["修改", "删除"],
			"menu": "用户咨询信息",
			"menuJump": "列表",
			"tableName": "jiaoliu"
		}],
		"menu": "用户咨询管理"
	},	{
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
			"buttons": ["修改"],
			"menu": "用户咨询信息",
			"menuJump": "列表",
			"tableName": "jiaoliu"
		}],
		"menu": "用户咨询管理"
	},	{
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
			"buttons": [],
			"menu": "用户资讯信息管理",
			"menuJump": "列表",
			"tableName": "jiaoliu"
		}],
		"menu": "用户咨询管理"
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
var hasMessage = '';
