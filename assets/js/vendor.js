!function(t,h,n){var e,a,i,r,s,o,u,d,c,p,l,m,g,v,f;g={classes:"",inline:m=!(l="datepicker"),language:"ru",startDate:new Date,firstDay:"",weekends:[6,0],dateFormat:"",altField:"",altFieldDateFormat:"@",toggleSelected:!0,keyboardNav:!0,position:"bottom left",offset:12,view:"days",minView:"days",showOtherMonths:!0,selectOtherMonths:!0,moveToOtherMonthsOnSelect:!0,showOtherYears:!0,selectOtherYears:!0,moveToOtherYearsOnSelect:!0,minDate:"",maxDate:"",disableNavWhenOutOfRange:!0,multipleDates:!1,multipleDatesSeparator:",",range:!1,todayButton:!1,clearButton:!1,showEvent:"focus",autoClose:!1,monthsField:"monthsShort",prevHtml:'<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',nextHtml:'<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',navTitles:{days:"MM, <i>yyyy</i>",months:"yyyy",years:"yyyy1 - yyyy2"},timepicker:!1,onlyTimepicker:!1,dateTimeSeparator:" ",timeFormat:"",minHours:0,maxHours:24,minMinutes:0,maxMinutes:59,hoursStep:1,minutesStep:1,onSelect:"",onShow:"",onHide:"",onChangeMonth:"",onChangeYear:"",onChangeDecade:"",onChangeView:"",onRenderCell:""},v={ctrlRight:[17,39],ctrlUp:[17,38],ctrlLeft:[17,37],ctrlDown:[17,40],shiftRight:[16,39],shiftUp:[16,38],shiftLeft:[16,37],shiftDown:[16,40],altUp:[18,38],altRight:[18,39],altLeft:[18,37],altDown:[18,40],ctrlShiftUp:[16,17,38]},(p=f=function(t,e){this.el=t,this.$el=h(t),this.opts=h.extend(!0,{},g,e,this.$el.data()),d==n&&(d=h("body")),this.opts.startDate||(this.opts.startDate=new Date),"INPUT"==this.el.nodeName&&(this.elIsInput=!0),this.opts.altField&&(this.$altField="string"==typeof this.opts.altField?h(this.opts.altField):this.opts.altField),this.inited=!1,this.visible=!1,this.silent=!1,this.currentDate=this.opts.startDate,this.currentView=this.opts.view,this._createShortCuts(),this.selectedDates=[],this.views={},this.keys=[],this.minRange="",this.maxRange="",this._prevOnSelectValue="",this.init()}).prototype={VERSION:"2.2.3",viewIndexes:["days","months","years"],init:function(){m||this.opts.inline||!this.elIsInput||this._buildDatepickersContainer(),this._buildBaseHtml(),this._defineLocale(this.opts.language),this._syncWithMinMaxDates(),this.elIsInput&&(this.opts.inline||(this._setPositionClasses(this.opts.position),this._bindEvents()),this.opts.keyboardNav&&!this.opts.onlyTimepicker&&this._bindKeyboardEvents(),this.$datepicker.on("mousedown",this._onMouseDownDatepicker.bind(this)),this.$datepicker.on("mouseup",this._onMouseUpDatepicker.bind(this))),this.opts.classes&&this.$datepicker.addClass(this.opts.classes),this.opts.timepicker&&(this.timepicker=new h.fn.datepicker.Timepicker(this,this.opts),this._bindTimepickerEvents()),this.opts.onlyTimepicker&&this.$datepicker.addClass("-only-timepicker-"),this.views[this.currentView]=new h.fn.datepicker.Body(this,this.currentView,this.opts),this.views[this.currentView].show(),this.nav=new h.fn.datepicker.Navigation(this,this.opts),this.view=this.currentView,this.$el.on("clickCell.adp",this._onClickCell.bind(this)),this.$datepicker.on("mouseenter",".datepicker--cell",this._onMouseEnterCell.bind(this)),this.$datepicker.on("mouseleave",".datepicker--cell",this._onMouseLeaveCell.bind(this)),this.inited=!0},_createShortCuts:function(){this.minDate=this.opts.minDate?this.opts.minDate:new Date(-86399999136e5),this.maxDate=this.opts.maxDate?this.opts.maxDate:new Date(86399999136e5)},_bindEvents:function(){this.$el.on(this.opts.showEvent+".adp",this._onShowEvent.bind(this)),this.$el.on("mouseup.adp",this._onMouseUpEl.bind(this)),this.$el.on("blur.adp",this._onBlur.bind(this)),this.$el.on("keyup.adp",this._onKeyUpGeneral.bind(this)),h(t).on("resize.adp",this._onResize.bind(this)),h("body").on("mouseup.adp",this._onMouseUpBody.bind(this))},_bindKeyboardEvents:function(){this.$el.on("keydown.adp",this._onKeyDown.bind(this)),this.$el.on("keyup.adp",this._onKeyUp.bind(this)),this.$el.on("hotKey.adp",this._onHotKey.bind(this))},_bindTimepickerEvents:function(){this.$el.on("timeChange.adp",this._onTimeChange.bind(this))},isWeekend:function(t){return-1!==this.opts.weekends.indexOf(t)},_defineLocale:function(t){"string"==typeof t?(this.loc=h.fn.datepicker.language[t],this.loc||(console.warn("Can't find language \""+t+'" in Datepicker.language, will use "ru" instead'),this.loc=h.extend(!0,{},h.fn.datepicker.language.ru)),this.loc=h.extend(!0,{},h.fn.datepicker.language.ru,h.fn.datepicker.language[t])):this.loc=h.extend(!0,{},h.fn.datepicker.language.ru,t),this.opts.dateFormat&&(this.loc.dateFormat=this.opts.dateFormat),this.opts.timeFormat&&(this.loc.timeFormat=this.opts.timeFormat),""!==this.opts.firstDay&&(this.loc.firstDay=this.opts.firstDay),this.opts.timepicker&&(this.loc.dateFormat=[this.loc.dateFormat,this.loc.timeFormat].join(this.opts.dateTimeSeparator)),this.opts.onlyTimepicker&&(this.loc.dateFormat=this.loc.timeFormat);var e=this._getWordBoundaryRegExp;(this.loc.timeFormat.match(e("aa"))||this.loc.timeFormat.match(e("AA")))&&(this.ampm=!0)},_buildDatepickersContainer:function(){m=!0,d.append('<div class="datepickers-container" id="datepickers-container"></div>'),c=h("#datepickers-container")},_buildBaseHtml:function(){var t,e=h('<div class="datepicker-inline">');t="INPUT"==this.el.nodeName?this.opts.inline?e.insertAfter(this.$el):c:e.appendTo(this.$el),this.$datepicker=h('<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>').appendTo(t),this.$content=h(".datepicker--content",this.$datepicker),this.$nav=h(".datepicker--nav",this.$datepicker)},_triggerOnChange:function(){if(!this.selectedDates.length){if(""===this._prevOnSelectValue)return;return this._prevOnSelectValue="",this.opts.onSelect("","",this)}var t,e=this.selectedDates,i=p.getParsedDate(e[0]),s=this,a=new Date(i.year,i.month,i.date,i.hours,i.minutes);t=e.map(function(t){return s.formatDate(s.loc.dateFormat,t)}).join(this.opts.multipleDatesSeparator),(this.opts.multipleDates||this.opts.range)&&(a=e.map(function(t){var e=p.getParsedDate(t);return new Date(e.year,e.month,e.date,e.hours,e.minutes)})),this._prevOnSelectValue=t,this.opts.onSelect(t,a,this)},next:function(){var t=this.parsedDate,e=this.opts;switch(this.view){case"days":this.date=new Date(t.year,t.month+1,1),e.onChangeMonth&&e.onChangeMonth(this.parsedDate.month,this.parsedDate.year);break;case"months":this.date=new Date(t.year+1,t.month,1),e.onChangeYear&&e.onChangeYear(this.parsedDate.year);break;case"years":this.date=new Date(t.year+10,0,1),e.onChangeDecade&&e.onChangeDecade(this.curDecade)}},prev:function(){var t=this.parsedDate,e=this.opts;switch(this.view){case"days":this.date=new Date(t.year,t.month-1,1),e.onChangeMonth&&e.onChangeMonth(this.parsedDate.month,this.parsedDate.year);break;case"months":this.date=new Date(t.year-1,t.month,1),e.onChangeYear&&e.onChangeYear(this.parsedDate.year);break;case"years":this.date=new Date(t.year-10,0,1),e.onChangeDecade&&e.onChangeDecade(this.curDecade)}},formatDate:function(t,e){e=e||this.date;var i,s=t,a=this._getWordBoundaryRegExp,n=this.loc,h=p.getLeadingZeroNum,r=p.getDecade(e),o=p.getParsedDate(e),d=o.fullHours,c=o.hours,l=t.match(a("aa"))||t.match(a("AA")),u="am",m=this._replacer;switch(this.opts.timepicker&&this.timepicker&&l&&(d=h((i=this.timepicker._getValidHoursFromDate(e,l)).hours),c=i.hours,u=i.dayPeriod),!0){case/@/.test(s):s=s.replace(/@/,e.getTime());case/aa/.test(s):s=m(s,a("aa"),u);case/AA/.test(s):s=m(s,a("AA"),u.toUpperCase());case/dd/.test(s):s=m(s,a("dd"),o.fullDate);case/d/.test(s):s=m(s,a("d"),o.date);case/DD/.test(s):s=m(s,a("DD"),n.days[o.day]);case/D/.test(s):s=m(s,a("D"),n.daysShort[o.day]);case/mm/.test(s):s=m(s,a("mm"),o.fullMonth);case/m/.test(s):s=m(s,a("m"),o.month+1);case/MM/.test(s):s=m(s,a("MM"),this.loc.months[o.month]);case/M/.test(s):s=m(s,a("M"),n.monthsShort[o.month]);case/ii/.test(s):s=m(s,a("ii"),o.fullMinutes);case/i/.test(s):s=m(s,a("i"),o.minutes);case/hh/.test(s):s=m(s,a("hh"),d);case/h/.test(s):s=m(s,a("h"),c);case/yyyy/.test(s):s=m(s,a("yyyy"),o.year);case/yyyy1/.test(s):s=m(s,a("yyyy1"),r[0]);case/yyyy2/.test(s):s=m(s,a("yyyy2"),r[1]);case/yy/.test(s):s=m(s,a("yy"),o.year.toString().slice(-2))}return s},_replacer:function(t,e,a){return t.replace(e,function(t,e,i,s){return e+a+s})},_getWordBoundaryRegExp:function(t){var e="\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";return new RegExp("(^|>|"+e+")("+t+")($|<|"+e+")","g")},selectDate:function(t){var e=this,i=e.opts,s=e.parsedDate,a=e.selectedDates.length,n="";if(Array.isArray(t))t.forEach(function(t){e.selectDate(t)});else if(t instanceof Date){if(this.lastSelectedDate=t,this.timepicker&&this.timepicker._setTime(t),e._trigger("selectDate",t),this.timepicker&&(t.setHours(this.timepicker.hours),t.setMinutes(this.timepicker.minutes)),"days"==e.view&&t.getMonth()!=s.month&&i.moveToOtherMonthsOnSelect&&(n=new Date(t.getFullYear(),t.getMonth(),1)),"years"==e.view&&t.getFullYear()!=s.year&&i.moveToOtherYearsOnSelect&&(n=new Date(t.getFullYear(),0,1)),n&&(e.silent=!0,e.date=n,e.silent=!1,e.nav._render()),i.multipleDates&&!i.range){if(a===i.multipleDates)return;e._isSelected(t)||e.selectedDates.push(t)}else i.range?2==a?(e.selectedDates=[t],e.minRange=t,e.maxRange=""):1==a?(e.selectedDates.push(t),e.maxRange?e.minRange=t:e.maxRange=t,p.bigger(e.maxRange,e.minRange)&&(e.maxRange=e.minRange,e.minRange=t),e.selectedDates=[e.minRange,e.maxRange]):(e.selectedDates=[t],e.minRange=t):e.selectedDates=[t];e._setInputValue(),i.onSelect&&e._triggerOnChange(),i.autoClose&&!this.timepickerIsActive&&(i.multipleDates||i.range?i.range&&2==e.selectedDates.length&&e.hide():e.hide()),e.views[this.currentView]._render()}},removeDate:function(i){var s=this.selectedDates,a=this;if(i instanceof Date)return s.some(function(t,e){return p.isSame(t,i)?(s.splice(e,1),a.selectedDates.length?a.lastSelectedDate=a.selectedDates[a.selectedDates.length-1]:(a.minRange="",a.maxRange="",a.lastSelectedDate=""),a.views[a.currentView]._render(),a._setInputValue(),a.opts.onSelect&&a._triggerOnChange(),!0):void 0})},today:function(){this.silent=!0,this.view=this.opts.minView,this.silent=!1,this.date=new Date,this.opts.todayButton instanceof Date&&this.selectDate(this.opts.todayButton)},clear:function(){this.selectedDates=[],this.minRange="",this.maxRange="",this.views[this.currentView]._render(),this._setInputValue(),this.opts.onSelect&&this._triggerOnChange()},update:function(t,e){var i=arguments.length,s=this.lastSelectedDate;return 2==i?this.opts[t]=e:1==i&&"object"==typeof t&&(this.opts=h.extend(!0,this.opts,t)),this._createShortCuts(),this._syncWithMinMaxDates(),this._defineLocale(this.opts.language),this.nav._addButtonsIfNeed(),this.opts.onlyTimepicker||this.nav._render(),this.views[this.currentView]._render(),this.elIsInput&&!this.opts.inline&&(this._setPositionClasses(this.opts.position),this.visible&&this.setPosition(this.opts.position)),this.opts.classes&&this.$datepicker.addClass(this.opts.classes),this.opts.onlyTimepicker&&this.$datepicker.addClass("-only-timepicker-"),this.opts.timepicker&&(s&&this.timepicker._handleDate(s),this.timepicker._updateRanges(),this.timepicker._updateCurrentTime(),s&&(s.setHours(this.timepicker.hours),s.setMinutes(this.timepicker.minutes))),this._setInputValue(),this},_syncWithMinMaxDates:function(){var t=this.date.getTime();this.silent=!0,this.minTime>t&&(this.date=this.minDate),this.maxTime<t&&(this.date=this.maxDate),this.silent=!1},_isSelected:function(e,i){var s=!1;return this.selectedDates.some(function(t){return p.isSame(t,e,i)?(s=t,!0):void 0}),s},_setInputValue:function(){var t,e=this,i=e.opts,s=e.loc.dateFormat,a=i.altFieldDateFormat,n=e.selectedDates.map(function(t){return e.formatDate(s,t)});i.altField&&e.$altField.length&&(t=(t=this.selectedDates.map(function(t){return e.formatDate(a,t)})).join(this.opts.multipleDatesSeparator),this.$altField.val(t)),n=n.join(this.opts.multipleDatesSeparator),this.$el.val(n)},_isInRange:function(t,e){var i=t.getTime(),s=p.getParsedDate(t),a=p.getParsedDate(this.minDate),n=p.getParsedDate(this.maxDate),h=new Date(s.year,s.month,a.date).getTime(),r=new Date(s.year,s.month,n.date).getTime(),o={day:i>=this.minTime&&i<=this.maxTime,month:h>=this.minTime&&r<=this.maxTime,year:s.year>=a.year&&s.year<=n.year};return e?o[e]:o.day},_getDimensions:function(t){var e=t.offset();return{width:t.outerWidth(),height:t.outerHeight(),left:e.left,top:e.top}},_getDateFromCell:function(t){var e=this.parsedDate,i=t.data("year")||e.year,s=t.data("month")==n?e.month:t.data("month"),a=t.data("date")||1;return new Date(i,s,a)},_setPositionClasses:function(t){var e=(t=t.split(" "))[0],i="datepicker -"+e+"-"+t[1]+"- -from-"+e+"-";this.visible&&(i+=" active"),this.$datepicker.removeAttr("class").addClass(i)},setPosition:function(t){t=t||this.opts.position;var e,i,s=this._getDimensions(this.$el),a=this._getDimensions(this.$datepicker),n=t.split(" "),h=this.opts.offset,r=n[0],o=n[1];switch(r){case"top":e=s.top-a.height-h;break;case"right":i=s.left+s.width+h;break;case"bottom":e=s.top+s.height+h;break;case"left":i=s.left-a.width-h}switch(o){case"top":e=s.top;break;case"right":i=s.left+s.width-a.width;break;case"bottom":e=s.top+s.height-a.height;break;case"left":i=s.left;break;case"center":/left|right/.test(r)?e=s.top+s.height/2-a.height/2:i=s.left+s.width/2-a.width/2}this.$datepicker.css({left:i,top:e})},show:function(){var t=this.opts.onShow;this.setPosition(this.opts.position),this.$datepicker.addClass("active"),this.visible=!0,t&&this._bindVisionEvents(t)},hide:function(){var t=this.opts.onHide;this.$datepicker.removeClass("active").css({left:"-100000px"}),this.focused="",this.keys=[],this.inFocus=!1,this.visible=!1,this.$el.blur(),t&&this._bindVisionEvents(t)},down:function(t){this._changeView(t,"down")},up:function(t){this._changeView(t,"up")},_bindVisionEvents:function(t){this.$datepicker.off("transitionend.dp"),t(this,!1),this.$datepicker.one("transitionend.dp",t.bind(this,this,!0))},_changeView:function(t,e){t=t||this.focused||this.date;var i="up"==e?this.viewIndex+1:this.viewIndex-1;2<i&&(i=2),i<0&&(i=0),this.silent=!0,this.date=new Date(t.getFullYear(),t.getMonth(),1),this.silent=!1,this.view=this.viewIndexes[i]},_handleHotKey:function(t){var e,i,s,a=p.getParsedDate(this._getFocusedDate()),n=this.opts,h=!1,r=!1,o=!1,d=a.year,c=a.month,l=a.date;switch(t){case"ctrlRight":case"ctrlUp":c+=1,h=!0;break;case"ctrlLeft":case"ctrlDown":c-=1,h=!0;break;case"shiftRight":case"shiftUp":r=!0,d+=1;break;case"shiftLeft":case"shiftDown":r=!0,d-=1;break;case"altRight":case"altUp":o=!0,d+=10;break;case"altLeft":case"altDown":o=!0,d-=10;break;case"ctrlShiftUp":this.up()}s=p.getDaysCount(new Date(d,c)),i=new Date(d,c,l),s<l&&(l=s),i.getTime()<this.minTime?i=this.minDate:i.getTime()>this.maxTime&&(i=this.maxDate),this.focused=i,e=p.getParsedDate(i),h&&n.onChangeMonth&&n.onChangeMonth(e.month,e.year),r&&n.onChangeYear&&n.onChangeYear(e.year),o&&n.onChangeDecade&&n.onChangeDecade(this.curDecade)},_registerKey:function(e){this.keys.some(function(t){return t==e})||this.keys.push(e)},_unRegisterKey:function(t){var e=this.keys.indexOf(t);this.keys.splice(e,1)},_isHotKeyPressed:function(){var t,e=!1,i=this.keys.sort();for(var s in v)t=v[s],i.length==t.length&&t.every(function(t,e){return t==i[e]})&&(this._trigger("hotKey",s),e=!0);return e},_trigger:function(t,e){this.$el.trigger(t,e)},_focusNextCell:function(t,e){e=e||this.cellType;var i=p.getParsedDate(this._getFocusedDate()),s=i.year,a=i.month,n=i.date;if(!this._isHotKeyPressed()){switch(t){case 37:"day"==e&&(n-=1),"month"==e&&(a-=1),"year"==e&&(s-=1);break;case 38:"day"==e&&(n-=7),"month"==e&&(a-=3),"year"==e&&(s-=4);break;case 39:"day"==e&&(n+=1),"month"==e&&(a+=1),"year"==e&&(s+=1);break;case 40:"day"==e&&(n+=7),"month"==e&&(a+=3),"year"==e&&(s+=4)}var h=new Date(s,a,n);h.getTime()<this.minTime?h=this.minDate:h.getTime()>this.maxTime&&(h=this.maxDate),this.focused=h}},_getFocusedDate:function(){var t=this.focused||this.selectedDates[this.selectedDates.length-1],e=this.parsedDate;if(!t)switch(this.view){case"days":t=new Date(e.year,e.month,(new Date).getDate());break;case"months":t=new Date(e.year,e.month,1);break;case"years":t=new Date(e.year,0,1)}return t},_getCell:function(t,e){e=e||this.cellType;var i,s=p.getParsedDate(t),a='.datepicker--cell[data-year="'+s.year+'"]';switch(e){case"month":a='[data-month="'+s.month+'"]';break;case"day":a+='[data-month="'+s.month+'"][data-date="'+s.date+'"]'}return(i=this.views[this.currentView].$el.find(a)).length?i:h("")},destroy:function(){var t=this;t.$el.off(".adp").data("datepicker",""),t.selectedDates=[],t.focused="",t.views={},t.keys=[],t.minRange="",t.maxRange="",t.opts.inline||!t.elIsInput?t.$datepicker.closest(".datepicker-inline").remove():t.$datepicker.remove()},_handleAlreadySelectedDates:function(t,e){this.opts.range?this.opts.toggleSelected?this.removeDate(e):2!=this.selectedDates.length&&this._trigger("clickCell",e):this.opts.toggleSelected&&this.removeDate(e),this.opts.toggleSelected||(this.lastSelectedDate=t,this.opts.timepicker&&(this.timepicker._setTime(t),this.timepicker.update()))},_onShowEvent:function(t){this.visible||this.show()},_onBlur:function(){!this.inFocus&&this.visible&&this.hide()},_onMouseDownDatepicker:function(t){this.inFocus=!0},_onMouseUpDatepicker:function(t){this.inFocus=!1,t.originalEvent.inFocus=!0,t.originalEvent.timepickerFocus||this.$el.focus()},_onKeyUpGeneral:function(t){this.$el.val()||this.clear()},_onResize:function(){this.visible&&this.setPosition()},_onMouseUpBody:function(t){t.originalEvent.inFocus||this.visible&&!this.inFocus&&this.hide()},_onMouseUpEl:function(t){t.originalEvent.inFocus=!0,setTimeout(this._onKeyUpGeneral.bind(this),4)},_onKeyDown:function(t){var e=t.which;if(this._registerKey(e),37<=e&&e<=40&&(t.preventDefault(),this._focusNextCell(e)),13==e&&this.focused){if(this._getCell(this.focused).hasClass("-disabled-"))return;if(this.view!=this.opts.minView)this.down();else{var i=this._isSelected(this.focused,this.cellType);if(!i)return this.timepicker&&(this.focused.setHours(this.timepicker.hours),this.focused.setMinutes(this.timepicker.minutes)),void this.selectDate(this.focused);this._handleAlreadySelectedDates(i,this.focused)}}27==e&&this.hide()},_onKeyUp:function(t){var e=t.which;this._unRegisterKey(e)},_onHotKey:function(t,e){this._handleHotKey(e)},_onMouseEnterCell:function(t){var e=h(t.target).closest(".datepicker--cell"),i=this._getDateFromCell(e);this.silent=!0,this.focused&&(this.focused=""),e.addClass("-focus-"),this.focused=i,this.silent=!1,this.opts.range&&1==this.selectedDates.length&&(this.minRange=this.selectedDates[0],this.maxRange="",p.less(this.minRange,this.focused)&&(this.maxRange=this.minRange,this.minRange=""),this.views[this.currentView]._update())},_onMouseLeaveCell:function(t){h(t.target).closest(".datepicker--cell").removeClass("-focus-"),this.silent=!0,this.focused="",this.silent=!1},_onTimeChange:function(t,e,i){var s=new Date,a=!1;this.selectedDates.length&&(a=!0,s=this.lastSelectedDate),s.setHours(e),s.setMinutes(i),a||this._getCell(s).hasClass("-disabled-")?(this._setInputValue(),this.opts.onSelect&&this._triggerOnChange()):this.selectDate(s)},_onClickCell:function(t,e){this.timepicker&&(e.setHours(this.timepicker.hours),e.setMinutes(this.timepicker.minutes)),this.selectDate(e)},set focused(t){if(!t&&this.focused){var e=this._getCell(this.focused);e.length&&e.removeClass("-focus-")}this._focused=t,this.opts.range&&1==this.selectedDates.length&&(this.minRange=this.selectedDates[0],this.maxRange="",p.less(this.minRange,this._focused)&&(this.maxRange=this.minRange,this.minRange="")),this.silent||(this.date=t)},get focused(){return this._focused},get parsedDate(){return p.getParsedDate(this.date)},set date(t){return t instanceof Date?(this.currentDate=t,this.inited&&!this.silent&&(this.views[this.view]._render(),this.nav._render(),this.visible&&this.elIsInput&&this.setPosition()),t):void 0},get date(){return this.currentDate},set view(t){return this.viewIndex=this.viewIndexes.indexOf(t),this.viewIndex<0?void 0:(this.prevView=this.currentView,this.currentView=t,this.inited&&(this.views[t]?this.views[t]._render():this.views[t]=new h.fn.datepicker.Body(this,t,this.opts),this.views[this.prevView].hide(),this.views[t].show(),this.nav._render(),this.opts.onChangeView&&this.opts.onChangeView(t),this.elIsInput&&this.visible&&this.setPosition()),t)},get view(){return this.currentView},get cellType(){return this.view.substring(0,this.view.length-1)},get minTime(){var t=p.getParsedDate(this.minDate);return new Date(t.year,t.month,t.date).getTime()},get maxTime(){var t=p.getParsedDate(this.maxDate);return new Date(t.year,t.month,t.date).getTime()},get curDecade(){return p.getDecade(this.date)}},p.getDaysCount=function(t){return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()},p.getParsedDate=function(t){return{year:t.getFullYear(),month:t.getMonth(),fullMonth:t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,date:t.getDate(),fullDate:t.getDate()<10?"0"+t.getDate():t.getDate(),day:t.getDay(),hours:t.getHours(),fullHours:t.getHours()<10?"0"+t.getHours():t.getHours(),minutes:t.getMinutes(),fullMinutes:t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()}},p.getDecade=function(t){var e=10*Math.floor(t.getFullYear()/10);return[e,e+9]},p.template=function(t,i){return t.replace(/#\{([\w]+)\}/g,function(t,e){return i[e]||0===i[e]?i[e]:void 0})},p.isSame=function(t,e,i){if(!t||!e)return!1;var s=p.getParsedDate(t),a=p.getParsedDate(e),n=i||"day";return{day:s.date==a.date&&s.month==a.month&&s.year==a.year,month:s.month==a.month&&s.year==a.year,year:s.year==a.year}[n]},p.less=function(t,e,i){return!(!t||!e)&&e.getTime()<t.getTime()},p.bigger=function(t,e,i){return!(!t||!e)&&e.getTime()>t.getTime()},p.getLeadingZeroNum=function(t){return parseInt(t)<10?"0"+t:t},p.resetTime=function(t){return"object"==typeof t?(t=p.getParsedDate(t),new Date(t.year,t.month,t.date)):void 0},h.fn.datepicker=function(e){return this.each(function(){if(h.data(this,l)){var t=h.data(this,l);t.opts=h.extend(!0,t.opts,e),t.update()}else h.data(this,l,new f(this,e))})},h.fn.datepicker.Constructor=f,h.fn.datepicker.language={ru:{days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вос","Пон","Вто","Сре","Чет","Пят","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",dateFormat:"dd.mm.yyyy",timeFormat:"hh:ii",firstDay:1}},h(function(){h(".datepicker-here").datepicker()}),s={days:'<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',months:'<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',years:'<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'},o=h.fn.datepicker,u=o.Constructor,o.Body=function(t,e,i){this.d=t,this.type=e,this.opts=i,this.$el=h(""),this.opts.onlyTimepicker||this.init()},o.Body.prototype={init:function(){this._buildBaseHtml(),this._render(),this._bindEvents()},_bindEvents:function(){this.$el.on("click",".datepicker--cell",h.proxy(this._onClickCell,this))},_buildBaseHtml:function(){this.$el=h(s[this.type]).appendTo(this.d.$content),this.$names=h(".datepicker--days-names",this.$el),this.$cells=h(".datepicker--cells",this.$el)},_getDayNamesHtml:function(t,e,i,s){return e=e!=n?e:t,i=i||"",7<(s=s!=n?s:0)?i:7==e?this._getDayNamesHtml(t,0,i,++s):(i+='<div class="datepicker--day-name'+(this.d.isWeekend(e)?" -weekend-":"")+'">'+this.d.loc.daysMin[e]+"</div>",this._getDayNamesHtml(t,++e,i,++s))},_getCellContents:function(t,e){var i="datepicker--cell datepicker--cell-"+e,s=new Date,a=this.d,n=u.resetTime(a.minRange),h=u.resetTime(a.maxRange),r=a.opts,o=u.getParsedDate(t),d={},c=o.date;switch(e){case"day":a.isWeekend(o.day)&&(i+=" -weekend-"),o.month!=this.d.parsedDate.month&&(i+=" -other-month-",r.selectOtherMonths||(i+=" -disabled-"),r.showOtherMonths||(c=""));break;case"month":c=a.loc[a.opts.monthsField][o.month];break;case"year":var l=a.curDecade;c=o.year,(o.year<l[0]||o.year>l[1])&&(i+=" -other-decade-",r.selectOtherYears||(i+=" -disabled-"),r.showOtherYears||(c=""))}return r.onRenderCell&&(c=(d=r.onRenderCell(t,e)||{}).html?d.html:c,i+=d.classes?" "+d.classes:""),r.range&&(u.isSame(n,t,e)&&(i+=" -range-from-"),u.isSame(h,t,e)&&(i+=" -range-to-"),1==a.selectedDates.length&&a.focused?((u.bigger(n,t)&&u.less(a.focused,t)||u.less(h,t)&&u.bigger(a.focused,t))&&(i+=" -in-range-"),u.less(h,t)&&u.isSame(a.focused,t)&&(i+=" -range-from-"),u.bigger(n,t)&&u.isSame(a.focused,t)&&(i+=" -range-to-")):2==a.selectedDates.length&&u.bigger(n,t)&&u.less(h,t)&&(i+=" -in-range-")),u.isSame(s,t,e)&&(i+=" -current-"),a.focused&&u.isSame(t,a.focused,e)&&(i+=" -focus-"),a._isSelected(t,e)&&(i+=" -selected-"),(!a._isInRange(t,e)||d.disabled)&&(i+=" -disabled-"),{html:c,classes:i}},_getDaysHtml:function(t){for(var e,i,s=u.getDaysCount(t),a=new Date(t.getFullYear(),t.getMonth(),1).getDay(),n=new Date(t.getFullYear(),t.getMonth(),s).getDay(),h=a-this.d.loc.firstDay,r=6-n+this.d.loc.firstDay,o="",d=1-(h=h<0?h+7:h),c=s+(r=6<r?r-7:r);d<=c;d++)i=t.getFullYear(),e=t.getMonth(),o+=this._getDayHtml(new Date(i,e,d));return o},_getDayHtml:function(t){var e=this._getCellContents(t,"day");return'<div class="'+e.classes+'" data-date="'+t.getDate()+'" data-month="'+t.getMonth()+'" data-year="'+t.getFullYear()+'">'+e.html+"</div>"},_getMonthsHtml:function(t){for(var e="",i=u.getParsedDate(t),s=0;s<12;)e+=this._getMonthHtml(new Date(i.year,s)),s++;return e},_getMonthHtml:function(t){var e=this._getCellContents(t,"month");return'<div class="'+e.classes+'" data-month="'+t.getMonth()+'">'+e.html+"</div>"},_getYearsHtml:function(t){for(var e=(u.getParsedDate(t),u.getDecade(t)),i="",s=e[0]-1;s<=e[1]+1;s++)i+=this._getYearHtml(new Date(s,0));return i},_getYearHtml:function(t){var e=this._getCellContents(t,"year");return'<div class="'+e.classes+'" data-year="'+t.getFullYear()+'">'+e.html+"</div>"},_renderTypes:{days:function(){var t=this._getDayNamesHtml(this.d.loc.firstDay),e=this._getDaysHtml(this.d.currentDate);this.$cells.html(e),this.$names.html(t)},months:function(){var t=this._getMonthsHtml(this.d.currentDate);this.$cells.html(t)},years:function(){var t=this._getYearsHtml(this.d.currentDate);this.$cells.html(t)}},_render:function(){this.opts.onlyTimepicker||this._renderTypes[this.type].bind(this)()},_update:function(){var i,s,a,t=h(".datepicker--cell",this.$cells),n=this;t.each(function(t,e){s=h(this),a=n.d._getDateFromCell(h(this)),i=n._getCellContents(a,n.d.cellType),s.attr("class",i.classes)})},show:function(){this.opts.onlyTimepicker||(this.$el.addClass("active"),this.acitve=!0)},hide:function(){this.$el.removeClass("active"),this.active=!1},_handleClick:function(t){var e=t.data("date")||1,i=t.data("month")||0,s=t.data("year")||this.d.parsedDate.year,a=this.d;if(a.view==this.opts.minView){var n=new Date(s,i,e),h=this.d._isSelected(n,this.d.cellType);return h?void a._handleAlreadySelectedDates.bind(a,h,n)():void a._trigger("clickCell",n)}a.down(new Date(s,i,e))},_onClickCell:function(t){var e=h(t.target).closest(".datepicker--cell");e.hasClass("-disabled-")||this._handleClick.bind(this)(e)}},i=h.fn.datepicker,r=i.Constructor,i.Navigation=function(t,e){this.d=t,this.opts=e,this.$buttonsContainer="",this.init()},i.Navigation.prototype={init:function(){this._buildBaseHtml(),this._bindEvents()},_bindEvents:function(){this.d.$nav.on("click",".datepicker--nav-action",h.proxy(this._onClickNavButton,this)),this.d.$nav.on("click",".datepicker--nav-title",h.proxy(this._onClickNavTitle,this)),this.d.$datepicker.on("click",".datepicker--button",h.proxy(this._onClickNavButton,this))},_buildBaseHtml:function(){this.opts.onlyTimepicker||this._render(),this._addButtonsIfNeed()},_addButtonsIfNeed:function(){this.opts.todayButton&&this._addButton("today"),this.opts.clearButton&&this._addButton("clear")},_render:function(){var t=this._getTitle(this.d.currentDate),e=r.template('<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',h.extend({title:t},this.opts));this.d.$nav.html(e),"years"==this.d.view&&h(".datepicker--nav-title",this.d.$nav).addClass("-disabled-"),this.setNavStatus()},_getTitle:function(t){return this.d.formatDate(this.opts.navTitles[this.d.view],t)},_addButton:function(t){this.$buttonsContainer.length||this._addButtonsContainer();var e={action:t,label:this.d.loc[t]},i=r.template('<span class="datepicker--button" data-action="#{action}">#{label}</span>',e);h("[data-action="+t+"]",this.$buttonsContainer).length||this.$buttonsContainer.append(i)},_addButtonsContainer:function(){this.d.$datepicker.append('<div class="datepicker--buttons"></div>'),this.$buttonsContainer=h(".datepicker--buttons",this.d.$datepicker)},setNavStatus:function(){if((this.opts.minDate||this.opts.maxDate)&&this.opts.disableNavWhenOutOfRange){var t=this.d.parsedDate,e=t.month,i=t.year,s=t.date;switch(this.d.view){case"days":this.d._isInRange(new Date(i,e-1,1),"month")||this._disableNav("prev"),this.d._isInRange(new Date(i,e+1,1),"month")||this._disableNav("next");break;case"months":this.d._isInRange(new Date(i-1,e,s),"year")||this._disableNav("prev"),this.d._isInRange(new Date(i+1,e,s),"year")||this._disableNav("next");break;case"years":var a=r.getDecade(this.d.date);this.d._isInRange(new Date(a[0]-1,0,1),"year")||this._disableNav("prev"),this.d._isInRange(new Date(a[1]+1,0,1),"year")||this._disableNav("next")}}},_disableNav:function(t){h('[data-action="'+t+'"]',this.d.$nav).addClass("-disabled-")},_activateNav:function(t){h('[data-action="'+t+'"]',this.d.$nav).removeClass("-disabled-")},_onClickNavButton:function(t){var e=h(t.target).closest("[data-action]").data("action");this.d[e]()},_onClickNavTitle:function(t){return h(t.target).hasClass("-disabled-")?void 0:"days"==this.d.view?this.d.view="months":void(this.d.view="years")}},e=h.fn.datepicker,a=e.Constructor,e.Timepicker=function(t,e){this.d=t,this.opts=e,this.init()},e.Timepicker.prototype={init:function(){var t="input";this._setTime(this.d.date),this._buildHTML(),navigator.userAgent.match(/trident/gi)&&(t="change"),this.d.$el.on("selectDate",this._onSelectDate.bind(this)),this.$ranges.on(t,this._onChangeRange.bind(this)),this.$ranges.on("mouseup",this._onMouseUpRange.bind(this)),this.$ranges.on("mousemove focus ",this._onMouseEnterRange.bind(this)),this.$ranges.on("mouseout blur",this._onMouseOutRange.bind(this))},_setTime:function(t){var e=a.getParsedDate(t);this._handleDate(t),this.hours=e.hours<this.minHours?this.minHours:e.hours,this.minutes=e.minutes<this.minMinutes?this.minMinutes:e.minutes},_setMinTimeFromDate:function(t){this.minHours=t.getHours(),this.minMinutes=t.getMinutes(),this.d.lastSelectedDate&&this.d.lastSelectedDate.getHours()>t.getHours()&&(this.minMinutes=this.opts.minMinutes)},_setMaxTimeFromDate:function(t){this.maxHours=t.getHours(),this.maxMinutes=t.getMinutes(),this.d.lastSelectedDate&&this.d.lastSelectedDate.getHours()<t.getHours()&&(this.maxMinutes=this.opts.maxMinutes)},_setDefaultMinMaxTime:function(){var t=this.opts;this.minHours=t.minHours<0||23<t.minHours?0:t.minHours,this.minMinutes=t.minMinutes<0||59<t.minMinutes?0:t.minMinutes,this.maxHours=t.maxHours<0||23<t.maxHours?23:t.maxHours,this.maxMinutes=t.maxMinutes<0||59<t.maxMinutes?59:t.maxMinutes},_validateHoursMinutes:function(t){this.hours<this.minHours?this.hours=this.minHours:this.hours>this.maxHours&&(this.hours=this.maxHours),this.minutes<this.minMinutes?this.minutes=this.minMinutes:this.minutes>this.maxMinutes&&(this.minutes=this.maxMinutes)},_buildHTML:function(){var t=a.getLeadingZeroNum,e={hourMin:this.minHours,hourMax:t(this.maxHours),hourStep:this.opts.hoursStep,hourValue:this.hours,hourVisible:t(this.displayHours),minMin:this.minMinutes,minMax:t(this.maxMinutes),minStep:this.opts.minutesStep,minValue:t(this.minutes)},i=a.template('<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',e);this.$timepicker=h(i).appendTo(this.d.$datepicker),this.$ranges=h('[type="range"]',this.$timepicker),this.$hours=h('[name="hours"]',this.$timepicker),this.$minutes=h('[name="minutes"]',this.$timepicker),this.$hoursText=h(".datepicker--time-current-hours",this.$timepicker),this.$minutesText=h(".datepicker--time-current-minutes",this.$timepicker),this.d.ampm&&(this.$ampm=h('<span class="datepicker--time-current-ampm">').appendTo(h(".datepicker--time-current",this.$timepicker)).html(this.dayPeriod),this.$timepicker.addClass("-am-pm-"))},_updateCurrentTime:function(){var t=a.getLeadingZeroNum(this.displayHours),e=a.getLeadingZeroNum(this.minutes);this.$hoursText.html(t),this.$minutesText.html(e),this.d.ampm&&this.$ampm.html(this.dayPeriod)},_updateRanges:function(){this.$hours.attr({min:this.minHours,max:this.maxHours}).val(this.hours),this.$minutes.attr({min:this.minMinutes,max:this.maxMinutes}).val(this.minutes)},_handleDate:function(t){this._setDefaultMinMaxTime(),t&&(a.isSame(t,this.d.opts.minDate)?this._setMinTimeFromDate(this.d.opts.minDate):a.isSame(t,this.d.opts.maxDate)&&this._setMaxTimeFromDate(this.d.opts.maxDate)),this._validateHoursMinutes(t)},update:function(){this._updateRanges(),this._updateCurrentTime()},_getValidHoursFromDate:function(t,e){var i=t;t instanceof Date&&(i=a.getParsedDate(t).hours);var s="am";if(e||this.d.ampm)switch(!0){case 0==i:i=12;break;case 12==i:s="pm";break;case 11<i:i-=12,s="pm"}return{hours:i,dayPeriod:s}},set hours(t){this._hours=t;var e=this._getValidHoursFromDate(t);this.displayHours=e.hours,this.dayPeriod=e.dayPeriod},get hours(){return this._hours},_onChangeRange:function(t){var e=h(t.target),i=e.attr("name");this.d.timepickerIsActive=!0,this[i]=e.val(),this._updateCurrentTime(),this.d._trigger("timeChange",[this.hours,this.minutes]),this._handleDate(this.d.lastSelectedDate),this.update()},_onSelectDate:function(t,e){this._handleDate(e),this.update()},_onMouseEnterRange:function(t){var e=h(t.target).attr("name");h(".datepicker--time-current-"+e,this.$timepicker).addClass("-focus-")},_onMouseOutRange:function(t){var e=h(t.target).attr("name");this.d.inFocus||h(".datepicker--time-current-"+e,this.$timepicker).removeClass("-focus-")},_onMouseUpRange:function(t){this.d.timepickerIsActive=!1}}}(window,jQuery);