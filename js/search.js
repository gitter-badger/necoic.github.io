!function(t){var e={};function o(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=2)}([function(t,e){t.exports=jQuery},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var a,n,i,s=o(0),r=function(){return(r=Object.assign||function(t){for(var e,o=1,a=arguments.length;o<a;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},l=function(){function t(t){var e=this;this.BODY_MODAL_ACTIVE_CLASS="us-modal__active",this.AJAX_CONTENT_LOADED_CLASS="loaded",this.TEMPLATE='\n    <div id="universal-search">\n      <div class="us-modal">\n        <header class="us-modal__header clearfix">\n          <form class="us-modal__header__form u-search-form" name="universal_search_form">\n            <input type="text" class="us-modal__header__form__input u-search-input" />\n            <button type="submit" class="us-modal__header__form__submit">\n              <span class="icon icon-search"></span>\n            </button>\n          </form>\n          <a class="us-modal__close">\n            <span class="icon icon-close"></span>\n          </a>\n          <div class="us-modal__loading">\n            <div class="us-modal__loading__bar"></div>\n          </div>\n        </header>\n        <main class="us-modal__body">\n          <ul class="us-modal__results us-modal__ajax-content"></ul>\n        </main>\n        <footer class="us-modal__footer clearfix">\n          <div class="us-modal__footer__metadata us-modal__ajax-content">\n            <strong class="us-modal__footer__metadata__range"></strong> of <strong class="us-modal__footer__metadata__total"></strong>\n          </div>\n          <div class="us-modal__logo"></div>\n          <a class="us-modal__nav us-modal__nav__next us-modal__ajax-content">\n            <span class="text">NEXT</span>\n            <span class="icon icon-chevron-right"></span>\n          </a>\n          <a class="us-modal__nav us-modal__nav__prev us-modal__ajax-content">\n            <span class="icon icon-chevron-left"></span>\n            <span class="text">PREV</span>\n          </a>\n        </footer>\n      </div>\n      <div class="us-modal__overlay"></div>\n    </div>\n  ',this.config={selectors:{body:"body",container:"#universal-search",searchForm:".u-search-form",searchInput:".u-search-input",modal:"#universal-search .us-modal",modalBody:"#universal-search .us-modal__body",modalFooter:"#universal-search .us-modal__footer",modalOverlay:"#universal-search .us-modal__overlay",modalResults:"#universal-search .us-modal__results",modalMetadata:"#universal-search .us-modal__footer__metadata",modalMetadataTotal:"#universal-search .us-modal__footer__metadata__total",modalMetadataRange:"#universal-search .us-modal__footer__metadata__range",modalLoadingBar:"#universal-search .us-modal__loading__bar",modalAjaxContent:"#universal-search .us-modal__ajax-content",modalLogo:"#universal-search .us-modal__logo",buttonClose:"#universal-search .us-modal__close",buttonNext:"#universal-search .us-modal__nav__next",buttonPrev:"#universal-search .us-modal__nav__prev"},services:{google:{logo:"google.svg",url:"https://cse.google.com"},algolia:{logo:"algolia.svg",url:"https://www.algolia.com"},azure:{logo:"azure.svg",url:"https://azure.microsoft.com/en-us/services/search/"},hexo:{logo:"",url:""}},imagePath:"/img/",resultsPerPage:10},this.dom={},this.percentLoaded=0,this.isOpened=!1,this.queryText="",this.pagination={next:-1,prev:-1,total:0,current:1},this.config=r({},this.config,t),s("body").append(this.TEMPLATE),Object.keys(this.config.selectors).forEach(function(t){e.dom[t]=s(e.config.selectors[t])}),this.dom.modalFooter.show(),this.dom.modalOverlay.on("click",this.close.bind(this)),this.dom.buttonClose.on("click",this.close.bind(this)),this.dom.buttonNext.on("click",this.nextPage.bind(this)),this.dom.buttonPrev.on("click",this.prevPage.bind(this)),this.dom.searchForm.each(function(t,o){s(o).on("submit",e.onSubmit.bind(e))})}return t.buildResult=function(t){return'\n      <li>\n        <a class="us-modal__result" href="'+t.url+'">\n          <span class="us-modal__result__title">'+t.title+'</span>\n          <span class="us-modal__result__excerpt">'+t.excerpt+'</span>\n          <span class="icon icon-chevron-thin-right"></span>\n        </a>\n      </li>\n    '},t.prototype.close=function(){this.isOpened=!1,this.dom.container.fadeOut(),this.dom.body.removeClass(this.BODY_MODAL_ACTIVE_CLASS)},t.prototype.beforeQuery=function(){var t=this;this.isOpened||(this.dom.container.fadeIn(),this.dom.body.addClass(this.BODY_MODAL_ACTIVE_CLASS)),this.dom.searchInput.each(function(e,o){s(o).val(t.queryText)}),s(document.activeElement).trigger("blur"),this.dom.modalAjaxContent.removeClass(this.AJAX_CONTENT_LOADED_CLASS),this.dom.modalLoadingBar.show(),this.loadingTimer=setInterval(function(){t.percentLoaded=Math.min(t.percentLoaded+5,95),t.dom.modalLoadingBar.css("width",t.percentLoaded+"%")},100)},t.prototype.afterQuery=function(){var t=this;this.dom.modalBody.scrollTop(0),this.dom.modalAjaxContent.addClass(this.AJAX_CONTENT_LOADED_CLASS),clearInterval(this.loadingTimer),this.dom.modalLoadingBar.css("width","100%"),this.dom.modalLoadingBar.fadeOut(),setTimeout(function(){t.percentLoaded=0,t.dom.modalLoadingBar.css("width","0%")},300)},t.prototype.onSubmit=function(t){t.preventDefault(),this.queryText=""+s(t.target).find(".u-search-input").val(),this.queryText&&this.search(1)},t.prototype.query=function(t,e,o){return o()},t.prototype.search=function(t){this.beforeQuery(),this.query(this.queryText,t,this.afterQuery.bind(this))},t.prototype.nextPage=function(){-1!==this.pagination.next&&this.search(this.pagination.next)},t.prototype.prevPage=function(){-1!==this.pagination.prev&&this.search(this.pagination.prev)},t.prototype.onError=function(t,e){var o="";switch(e){case"success":o="No result found for "+t+".";break;case"timeout":o="Search timed out.";break;default:o="Mysterious error."}var a='\n      <li class="us-modal__error">\n        '+o+"\n      </li>\n    ";this.dom.modalResults.html(a)},t.prototype.addLogo=function(t){var e="",o=this.config.services[t];o&&o.logo&&(e+='\n        <a href="'+o.url+'" class="'+t+'">\n          <img src="'+(this.config.baseUrl||"")+this.config.imagePath+o.logo+'" />\n        </a>\n      '),this.dom.modalLogo.html(e)},t}(),u=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=function(t){function e(e){var o=t.call(this,e)||this;return o.serviceId="algolia",o.serviceConfig=o.config,o.endpoint="https://{appId}-dsn.algolia.net/1/indexes/{indexName}",o.endpoint=o.endpoint.replace("{appId}",e.appId).replace("{indexName}",e.indexName),o.addLogo(o.serviceId),o}return u(e,t),e.prototype.buildResults=function(t){var o="";return t.forEach(function(t){var a=t.permalink||"/"+t.path||"",n=t.title,i=t._highlightResult.excerptStrip.value||"";o+=e.buildResult({url:a,title:n,excerpt:i})}),o},e.prototype.buildMetadata=function(t){var e=t.hits.length;this.pagination.current=t.page*t.hitsPerPage+1,this.pagination.total=parseInt(t.nbHits),this.dom.modalMetadataTotal.html(""+this.pagination.total),this.dom.modalMetadataRange.html(this.pagination.current+" - "+(this.pagination.current+e-1)),0<this.pagination.total?this.dom.modalMetadata.show():this.dom.modalMetadata.hide(),t.page<t.nbPages-1?(this.pagination.next=t.page+1+1,this.dom.buttonNext.show()):(this.pagination.next=-1,this.dom.buttonNext.hide()),0<t.page?(this.pagination.prev=t.page+1-1,this.dom.buttonPrev.show()):(this.pagination.prev=-1,this.dom.buttonPrev.hide())},e.prototype.query=function(t,e,o){var a=this;s.get(this.endpoint,{query:t,page:e-1,hitsPerPage:this.serviceConfig.resultsPerPage,"x-algolia-application-id":this.serviceConfig.appId,"x-algolia-api-key":this.serviceConfig.apiKey},function(e,n){if("success"===n&&e.hits&&0<e.hits.length){var i=a.buildResults(e.hits);a.dom.modalResults.html(i)}else a.onError(t,n);a.buildMetadata(e),"function"==typeof o&&o(e)})},e}(l),d=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),h=function(t){function e(e){var o=t.call(this,e)||this;return o.ODATA_COUNT="@odata.count",o.serviceId="azure",o.serviceConfig=o.config,o.endpoint="https://{serviceName}.search.windows.net/indexes/{indexName}/docs?api-version=2015-02-28",o.serviceConfig=o.config,o.addLogo(o.serviceId),o.endpoint=o.endpoint.replace("{serviceName}",e.serviceName).replace("{indexName}",e.indexName),o.pagination.current=1,o}return d(e,t),e.prototype.buildResults=function(t){var o="";return t.forEach(function(t){var a=t.permalink||"/"+t.path||"",n=t.title,i=t.excerpt||"";o+=e.buildResult({url:a,title:n,excerpt:i})}),o},e.prototype.buildMetadata=function(t,e){var o=e+t.value.length;this.pagination.current=e,this.pagination.total=parseInt(t[this.ODATA_COUNT]),this.dom.modalMetadataTotal.html(""+this.pagination.total),this.dom.modalMetadataRange.html(this.pagination.current+" - "+(o-1)),0<this.pagination.total?this.dom.modalMetadata.show():this.dom.modalMetadata.hide(),o<=this.pagination.total?(this.pagination.next=o,this.dom.buttonNext.show()):(this.pagination.next=-1,this.dom.buttonNext.hide()),1<this.pagination.current?(this.pagination.prev=this.pagination.current-this.serviceConfig.resultsPerPage,this.dom.buttonPrev.show()):(this.pagination.prev=-1,this.dom.buttonPrev.hide())},e.prototype.query=function(t,e,o){var a=this;s.ajax({url:this.endpoint,headers:{Accept:"application/json","api-key":this.serviceConfig.apiKey},data:{search:t,$orderby:"date desc",$skip:e-1,$top:this.serviceConfig.resultsPerPage,$count:!0},type:"GET",success:function(n,i){if("success"===i&&n.value&&0<n.value.length){var s=a.buildResults(n.value);a.dom.modalResults.html(s)}else a.onError(t,i);a.buildMetadata(n,e),"function"==typeof o&&o(n)}})},e}(l),p=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),m=function(t){function e(e){var o=t.call(this,e)||this;return o.serviceId="google",o.serviceConfig=o.config,o.endpoint="https://www.googleapis.com/customsearch/v1",o.serviceConfig=o.config,o.addLogo(o.serviceId),o}return p(e,t),e.prototype.buildResults=function(t){var o="";return t.forEach(function(t){var a=t.link,n=t.title,i=(t.htmlSnippet||"").replace("<br>","");o+=e.buildResult({url:a,title:n,excerpt:i})}),o},e.prototype.buildMetadata=function(t){if(t.queries&&t.queries.request&&"0"!==t.queries.request[0].totalResults){var e=t.queries.request[0],o=e.count;this.pagination.current=e.startIndex,this.pagination.total=parseInt(e.totalResults),this.dom.modalMetadataTotal.html(""+this.pagination.total),this.dom.modalMetadataRange.html(this.pagination.current+" - "+(this.pagination.current+o-1))}else this.dom.modalMetadata.hide();t.queries&&t.queries.nextPage?(this.pagination.next=t.queries.nextPage[0].startIndex,this.dom.buttonNext.show()):(this.pagination.next=-1,this.dom.buttonNext.hide()),t.queries&&t.queries.previousPage?(this.pagination.prev=t.queries.previousPage[0].startIndex,this.dom.buttonPrev.show()):(this.pagination.prev=-1,this.dom.buttonPrev.hide())},e.prototype.query=function(t,e,o){var a=this;s.get(this.endpoint,{key:this.serviceConfig.apiKey,cx:this.serviceConfig.engineId,q:t,start:e,num:this.serviceConfig.resultsPerPage},function(e,n){if("success"===n&&e.items&&0<e.items.length){var i=a.buildResults(e.items);a.dom.modalResults.html(i)}else a.onError(t,n);a.buildMetadata(e),"function"==typeof o&&o()})},e}(l);o(1),function(){var t=window.universalSearchConfig||{};switch(t.searchService){case"algolia":new c(t);break;case"azure":new h(t);break;case"google":new m(t);break;default:console.warn("Unsupported search service id: "+t.searchService+".")}}()}]);