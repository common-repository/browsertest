// Generated by CoffeeScript 1.6.3
(function(){jQuery(function(){var e,t;e=jQuery("#wp-admin-bar-browsertest");t=e.find(">a");t.click(function(){e.hasClass("browsertest-set")&&window.open(this.href);return!1});return e.find(".browsertest_browser a").click(function(){var n,r,i,s,o;i=jQuery(this).parents(".browsertest_os").find(">.ab-item").html();n=jQuery(this).html();s=i+" "+n;o=this.href;r={action:"browsertest_set",title:s,url:o};jQuery.post(ajax_object.ajax_url,r,function(){t.find(".ab-label").html(s);t.attr("href",o);return e.addClass("browsertest-set")});window.open(this.href);return!1})})}).call(this);