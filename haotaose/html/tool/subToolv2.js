/*pub-1|2012-05-03 14:20:36*/var LOG=new LOG(LOG.specialConfig(".main-nav,.tab-contents"));function tabSet(A){var C=this;this.containDom=A.containDom||false;this.tabClass=A.tabClass;this.tabContentClass=A.tabContentClass;var D=A.tabActiveClass;this.tabs="";this.tabContents="";this.$container="";var B=false;this.active={tab:"",tabContent:""};C.init()}tabSet.prototype={regTabDom:function(){var A=$(this.containDom);this.tabContents=A.find("."+this.tabContentClass);this.tabs=A.find("."+this.tabClass)},getActiveTabIndex:function(B){var A=0;this.tabs.each(function(C){(this==B)&&(A=C)});return A+1},eventBind:function(){var A=this.tabs;var C=this.tabContents;var B=this;A.click(function(E){var D=this;B.activeTab(B.getActiveTabIndex(D))})},activeTab:function(B){var B=(B-1)||0;$(this.active.tab).removeClass("active");$(this.active.tabContent).removeClass("show");var C=this.tabs[B];var A=this.tabContents[B];$(C).addClass("active");$(A).addClass("show");if($(A).find("textarea").length!=0){$(A).html($(A).find("textarea")[0].value)}this.active={tab:C,tabContent:A}},initState:function(){var D=false;for(var C=0,B=this.tabs.length;C<B;C++){var A=this.tabs[C];if($(A).hasClass("active")){this.active.tab=A;this.active.tabContent=this.tabContents[C];D=true;break}}!D&&this.activeTab(1)},init:function(){this.regTabDom();this.initState();this.eventBind()}};new tabSet({containDom:$("#tabModule1")[0],tabClass:"tab",tabContentClass:"tab-content",tabActiveClass:"active"});$(".popup").click(function(){var A=$(this);var B=window.open(A.attr("href"),"","width="+A.attr("data-width")+",height="+A.attr("data-height")+",left="+(screen.width-A.attr("data-width"))/2+",top="+(screen.height-A.attr("data-height"))/2);return false});$(".tab-content a").click(function(E){var D=$(this);var A=D.find("strong");var C=$(".main-nav .active a").text();var B=(A.length)?A.text():this.innerHTML;LOG.saveLog({name:B,position:C,pos:this})});$(".main-nav .tab a").click(function(B){var A=$(this);LOG.saveLog({name:A.text(),position:"tab\u70b9\u51fb",pos:this})});