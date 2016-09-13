//----产品详情页 价格日历展示
var month_gap = 0;
var year_gap = 0;
var nstr = null;
var ynow = null;
var mnow = null;
nstr = new Date(); //当前Date资讯
ynow = nstr.getFullYear(); //年份
mnow = nstr.getMonth(); //月份
var today = null;
var data_array = '';
// 保存每个日期方框的字符串
var cell_td_s = '';
function is_leap(year) {
	return (year % 100 == 0 ? res = (year % 400 == 0 ? 1 : 0) : res = (year % 4 == 0 ? 1 : 0));
} //是否为闰年

function make_table(n) {
	//var today_unix = Date.parse(new Date()) / 1000;
	var today_unix = new Date().getTime() / 1000;

	var some_day = 0;

	//var x_day = Date.parse(new Date('2014-12-20')) / 1000;

	//预售天的秒数
	var days_gap = sell_pre_days * 86400;

	//alert((today_unix - x_day) / 86400);
	month_gap = month_gap + n;

	year_gap = parseInt(month_gap / 12);
	var date_n = document.getElementById("TOURDATE");
	tod = date_n.innerHTML;
	tods = tod.split('-');
	//alert(tod);
	today = date_n.innerHTML.split('-')[2];
	mnow = mnow + n;
	if (mnow > 11) {
		ynow++;
		if (mnow == 12) {
			mnow = 0;
		}
	}
	if (mnow < 0) {
		ynow--;
		mnow = 11;
	}
	//alert(tods[1]);
	//if (tods[1] != ''){
	//
	//    mnow = parseInt(tods[1]);
	//}
	var dnow = nstr.getDate(); //今日日期
	today = dnow;

	var n1str = new Date(ynow, mnow, 1); //当月第一天Date资讯

	var firstday = n1str.getDay(); //当月第一天星期几

	var m_days = new Array(31, 28 + is_leap(ynow), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); //各月份的总天数

	var tr_str = Math.ceil((m_days[mnow] + firstday) / 7); //表格所需要行数

	//打印表格第一行（有星期标志）
	var table_s = "<table><thead><tr><td colspan='2'><a href='javascript:make_table(-1)' class='previous-month'>上一月</a></td><td colspan='3'><b class='current-month'>" + ynow + "年" + (mnow + 1) + "月价格</b></td><td colspan='2'><a href='javascript:make_table(1)' class='next-month'>下一月</a></td></tr><tr class='title'><td>星期日</td><td>星期一</td><td>星期二</td><td>星期三</td><td>星期四</td><td>星期五</td><td>星期六</td></tr></thead><tbody>";

	//var t_price = '';

	var float_position = '';

	var tmp_data = '';

	//var onclick_str = '';
	var onmouseover_str = '';
	var onmouseout_str = '';

	var x = '';
	var tmp_m = '';
	var tmp_date_str = '';

	if ((mnow + 1) < 10) {
		tmp_m = '0' + (mnow + 1);
	} else {
		tmp_m = (mnow + 1);
	}

	var current_cell_id = '';

	for (i = 0; i < tr_str; i++) {
		//表格的行
		table_s += "<tr height='50'>";
		for (k = 0; k < 7; k++) {
			//表格每行的单元格
			idx = i * 7 + k; //单元格自然序列号
			date_str = idx - firstday + 1; //计算日期

			current_cell_id = "cell_" + idx;

			cell_td_s += current_cell_id + ',';

			// 取得价格

			tmp_data = get_data(ynow, tmp_m, date_str);

			//t_price = "<a class='red'>" + tmp_data + "</a>";

			(date_str <= 0 || date_str > m_days[mnow]) ? date_str = "": date_str = idx - firstday + 1; //过滤无效日期（小于等于零的、大于月总天数的）

			if (date_str < 10 && date_str > 0) {
				date_str = '0' + date_str;
			}

			some_day = my_new_date(ynow + '-' + tmp_m + '-' + date_str).getTime() / 1000;


			if (tmp_data != '' && (some_day - today_unix > days_gap)) {
				//alert(tmp_data,some_day,today_unix,days_gap);
				//onclick_str = 'onclick="show_info(' + ynow + ',' + tmp_m + ', ' + date_str + ');"';
				onmouseover_str = 'onclick="show_info(' + ynow + ',' + tmp_m + ',' + date_str + ');"';
				onmouseout_str = 'onmouseout="hidden_box();"';
			} else {
				//onclick_str = '';
				tmp_data = '';
				onmouseover_str = '';
				onmouseout_str = '';
			}

			float_postion = get_float_position(ynow, mnow + 1, date_str);
			//打印日期：今天底色为红
			if (date_str == dnow) {
				table_s += "<td bgcolor='#FFCCBB' id=\'" + current_cell_id + "\' title=\'" + float_postion + "\'" + onmouseover_str + onmouseout_str + "style='cursor:pointer;'><div>" + date_str + "</div><div><a class='val'>" + tmp_data + "</a></div></td>";
			} else {
				table_s += "<td id=\'" + current_cell_id + "\' title=\'" + float_postion + "\'" + onmouseover_str + onmouseout_str + "style='cursor:pointer;'><div>" + date_str + "</div><div><a class='val'>" + tmp_data + "</a></div></td>";
			}
		}
		table_s += "</tr>"; //表格的行结束
	}
	table_s += "</tbody></table>"; //表格结束
	$("#cal_div").html(table_s);
}
make_table(0);
// 取得指定日期的余位
function get_float_position(y, m, d) {
	if (d > 0 && d < 32) {
		var ds = y + '-' + m + '-' + d;
		var dr = price_data.split('|');
		var l = dr.length;

		for (var i = 0; i < l; i++) {
			var tmp = dr[i].split(':');

			var tmp_1 = tmp[0].split('-');

			if (y == tmp_1[0] && m == tmp_1[1] && d == tmp_1[2]) {
				x = tmp[1].split('+');

				return ds + ' 所剩余位：' + x[3];
			}
		}
		return ds + '没有余位数据';
	} else {
		return '';
	}
}
function get_stock(y, m, d) {
	if (d > 0 && d < 32) {
		var ds = y + '-' + m + '-' + d;
		var dr = price_data.split('|');
		var l = dr.length;
		for (var i = 0; i < l; i++) {
			var tmp = dr[i].split(':');
			var tmp_1 = tmp[0].split('-');
			if (y == tmp_1[0] && m == tmp_1[1] && d == tmp_1[2]) {
				x = tmp[1].split('+');
				return x[3];
			}
		}
		return '0';
	} else {
		return '0';
	}
}
// 根据选中的日期，在右侧页面中显示对应的价格
function show_info(y, m, d) {
	// 在这里把selected_date赋值
	//alert('onlcick');
	selected_date = y + '-' + m + '-' + d;
	//alert(selected_date);
	var data_array = price_data.split('|');
	var l = data_array.length;
	var order_button = document.getElementById("order_button");
	var order_button2 = document.getElementById("order_button2");
	//    var position_span2 = document.getElementById("position_span2");
	// 点击表格之后，需要把发团日期也修改过来
	var date_o = document.getElementById("TOURDATE");
	//    var date_return = document.getElementById("TOURDATE_return");
	var stock = document.getElementById("T_stock");
	day = selected_date.split('-')[2];
	//alert(day);
	date_o.innerHTML = selected_date;
	stock.innerHTML = get_stock(y, m, d);
	//date_return.innerHTML = selected_date;
	for (var i = 0; i < l; i++) {
		var tmp = data_array[i].split(':');
		var tmp_1 = tmp[0].split('-');
		if (y == tmp_1[0] && m == tmp_1[1] && d == tmp_1[2]) {
			var x = tmp[1].split('+');
			var href_r = order_button.href.split('commit');
			var href_2 = order_button2.href.split('add_cart');
			// 把SKU_ID加到订购链接字符串的最后面
			//var new_href = href_r[0] + '/' + href_r[1] + '/' + href_r[2] + '/' + href_r[3] + '/' + href_r[4] + '/' + href_r[5] + '/' + x[4];
			//alert(order_button);
			if (get_stock(y, m, d) != '0') {
				var new_href = href_r[0] + 'commit' + '/' + x[4];
				var new_href2 = href_2[0] + 'add_cart' + '/' + x[4];

				order_button.href = new_href;
				order_button2.href = new_href2;
				$('#order_button').css({
					'backgroundColor': '#F13F4C',
					'color': '#F6F6F6'
				});
				$('#order_button2').css({
					'backgroundColor': '#F13F4C',
					'color': '#F6F6F6'
				});
			} else {
				//alert('aaa');
				//order_button.removeAttr('onclick');
				//$('#order_button').onclick = checkDepart;
				//order_button.css('color','blue');
				//order_button2.css('color','blue');
				order_button.href = order_button;
				order_button2.href = order_button2;
				$('#order_button').css({
					'backgroundColor': '#F6F6F6',
					'color': '#F6F6F6',
					'cursor': 'pointer'
				});
				$('#order_button2').css({
					'backgroundColor': '#F6F6F6',
					'color': '#F6F6F6',
					'cursor': 'pointer'
				});
				//$('#order_button2').onclick = checkDepart;
				//alert('ccc');
			}
			return '';
		}
	}

}
// 页面加载完之后，需要加载报价数据

var date_n = document.getElementById("TOURDATE");
tod = date_n.innerHTML;

tods = tod.split('-');
//alert(tod);
today = date_n.innerHTML.split('-')[2];

if (today == undefined) {
	today = null;
	show_info(ynow, mnow + 1, today);
	date_n.innerHTML = "无";
} else {

	show_info(ynow, mnow + 1, today);
}
if (tod != '') {
	show_info(tods[0], tods[1], tods[2]);
}
function my_new_date(str) {
	str = str.split('-');
	var date = new Date();
	date.setUTCFullYear(str[0], str[1] - 1, str[2]);
	date.setUTCHours(0, 0, 0, 0);
	return date;
}
// 从python传入的数据中提取某一天的价格
function get_data(y, m, d) {
	data_array = price_data.split('|');
	var l = data_array.length;
	for (var i = 0; i < l; i++) {
		var tmp = data_array[i].split(':');
		var tmp_1 = tmp[0].split('-');
		if (y == tmp_1[0] && m == tmp_1[1] && d == tmp_1[2]) {
			// 开始拆分数据
			var x = tmp[1].split('+');
			//alert(x);
			s = '成:' + x[1] + '<br>儿:' + x[2] + '<br>库:' + x[3];
			return s;
		}
	}
	return '';
}

//初始化价格以及余位等默认信息
function init_info() {
	var info = price_data.split('|');
	//alert(redis_depart);
	// 默认只取第一个日期的信息
	var s = '';
	for (i in info) {
		v = info[i].split(':')[0];
		//alert(redis_depart == v);
		if (v == redis_depart) {
			s = info[i];
			//alert('==');
		}
	}

	//alert(s);
	if (s != '') {
		// 开始解析
		var r = s.split('+');
		var r1 = r[0].split(':');
		// 取得日期和市场价
		var first_day = r1[0];
		selected_date = first_day;
		var market_price = r1[1];
		var adult_price = r[1];
		var child_price = r[2];
		// 余位
		var position = r[3];
		$("#T_stock").text(position);
		var sku_id = r[4];
		// 判断 初始位置的库存
		var stock_init = $("#T_stock").text();
		//alert(stock_init);
		//alert('stock_init = ' + stock_init);
		//alert(stock_init);
		if (stock_init == '' || stock_init == '0') {

			$('#order_button').css({
				'backgroundColor': '#535353',
				'color': '#fff',
				'cursor': 'pointer'
			});
			$('#order_button2').css({
				'backgroundColor': '#535353',
				'color': '#fff',
				'cursor': 'pointer'
			});
		}
	}
}

// 初始化默认显示的数据
init_info();