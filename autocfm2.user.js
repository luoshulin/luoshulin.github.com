// ==UserScript==
// @name        自动确认交易
// @namespace   luoshulin@163.com
// @description 让交易确认自动化
// @version     1
// @grant       none
// @match      http://112.78.104.13/app/member/*
// @require http://libs.baidu.com/jquery/2.0.0/jquery.min.js
// ==/UserScript==



ScriptWithJquery();function ScriptWithJquery(){0<$("#checkOrder").length&&0<=$("input[name='Submit']").val().indexOf("\u786e\u5b9a\u4ea4\u6613")&&($("#gbutton").append("<div id='aucfm'><script>window.confirm = function() { return !0;  ;}\x3c/script></div>"),$("input[name='Submit']").val("\u81ea\u52a8\u786e\u8ba4\u4ea4\u6613"))};

