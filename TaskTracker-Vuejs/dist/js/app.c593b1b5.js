(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("c21b")},"0b16":function(e,t,n){"use strict";n("f019")},"2bcd":function(e,t,n){},"2f44":function(e,t,n){},"3a86":function(e,t,n){"use strict";n("2bcd")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("Header",{attrs:{title:"Task Tracker",showAddTask:e.showAddTask},on:{"toggle-add-task":e.toggleAddTask}}),n("router-view",{attrs:{showAddTask:e.showAddTask}}),n("Footer")],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("\n        "+e._s(e.title)+" - "+e._s(e.$route.name)+"\n    ")]),n("Button",{directives:[{name:"show",rawName:"v-show",value:e.homePage,expression:"homePage"}],attrs:{text:e.showAddTask?"Close":"Add Task",color:e.showAddTask?"red":"green"},on:{"btn-click":function(t){e.$emit("toggle-add-task")}}})],1)},i=[],c=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"btn",style:{background:e.color},on:{click:function(t){e.onClick()}}},[e._v(e._s(e.text))])}),u=[],l={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}},d=l,f=n("2877"),m=Object(f["a"])(d,c,u,!1,null,"03ee6f1b",null),p=m.exports,h={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:p},computed:{homePage:function(){return"Home"==this.$route.name}}},k=h,v=(n("66e5"),Object(f["a"])(k,o,i,!1,null,"670b18f4",null)),b=v.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v("Copyright © 2021")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)},x=[],y=(n("960f"),{}),w=Object(f["a"])(y,g,x,!1,null,"650806ba",null),T=w.exports,_={name:"App",components:{Header:b,Footer:T},data:function(){return{showAddTask:!1}},methods:{toggleAddTask:function(){this.showAddTask=!this.showAddTask}}},j=_,O=(n("034f"),Object(f["a"])(j,a,s,!1,null,null,null)),A=O.exports,$=n("8c4f"),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showAddTask,expression:"showAddTask"}]},[n("AddTask",{on:{"add-task":e.addTask}})],1),n("Tasks",{attrs:{tasks:e.tasks},on:{"toggle-reminder":e.toggleReminder,"delete-task":e.deleteTask}})],1)},R=[],S=n("5530"),C=n("2909"),E=(n("96cf"),n("1da1")),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.tasks,function(t){return n("div",{key:t.id},[n("Task",{attrs:{task:t},on:{"toggle-reminder":function(n){e.$emit("toggle-reminder",t.id)},"delete-task":function(n){e.$emit("delete-task",t.id)}}})],1)}))},B=[],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.task.reminder?"reminder":"","task"],on:{dblclick:function(t){e.$emit("toggle-reminder",e.task.id)}}},[n("h3",[e._v("\n        "+e._s(e.task.text)+"\n        "),n("i",{staticClass:"fas fa-times",on:{click:function(t){e.$emit("delete-task",e.task.id)}}})]),n("p",[e._v(e._s(e.task.day))])])},D=[],J={name:"Task",props:{task:Object}},M=J,F=(n("3a86"),Object(f["a"])(M,H,D,!1,null,null,null)),L=F.exports,U={name:"Tasks",props:{tasks:Array},components:{Task:L},emits:["delete-task","toggle-reminder"]},V=U,q=Object(f["a"])(V,N,B,!1,null,"456105d1",null),z=q.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"add-form",on:{submit:e.onSubmit}},[n("div",{staticClass:"form-control"},[n("label",[e._v("Task")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text",name:"text",placeholder:"Add Task"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})]),n("div",{staticClass:"form-control"},[n("label",[e._v("Day & Time")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],attrs:{type:"text",name:"day",placeholder:"Add Day & Time"},domProps:{value:e.day},on:{input:function(t){t.target.composing||(e.day=t.target.value)}}})]),n("div",{staticClass:"form-control form-control-check"},[n("label",[e._v("Set Reminder")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.reminder,expression:"reminder"}],attrs:{type:"checkbox",name:"reminder"},domProps:{checked:Array.isArray(e.reminder)?e._i(e.reminder,null)>-1:e.reminder},on:{change:function(t){var n=e.reminder,r=t.target,a=!!r.checked;if(Array.isArray(n)){var s=null,o=e._i(n,s);r.checked?o<0&&(e.reminder=n.concat([s])):o>-1&&(e.reminder=n.slice(0,o).concat(n.slice(o+1)))}else e.reminder=a}}})]),n("input",{staticClass:"btn btn-block",attrs:{type:"submit",value:"Save Task"}})])},I=[],K={name:"AddTask",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",t),this.text="",this.day="",this.reminder=!1}else alert("Please add a task")}}},Q=K,W=(n("0b16"),Object(f["a"])(Q,G,I,!1,null,"47d3e405",null)),X=W.exports,Y={name:"Home",props:{showAddTask:Boolean},components:{Tasks:z,AddTask:X},data:function(){return{tasks:[]}},methods:{addTask:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,this.tasks=[].concat(Object(C["a"])(this.tasks),[r]);case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),deleteTask:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!confirm("Are you sure?")){e.next=5;break}return e.next=3,fetch("api/tasks/".concat(t),{method:"DELETE"});case 3:n=e.sent,200===n.status?this.tasks=this.tasks.filter(function(e){return e.id!==t}):alert("Error deleting task!");case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),toggleReminder:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchTask(t);case 2:return n=e.sent,r=Object(S["a"])(Object(S["a"])({},n),{},{reminder:!n.reminder}),e.next=6,fetch("api/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return a=e.sent,e.next=9,a.json();case 9:s=e.sent,this.tasks=this.tasks.map(function(e){return e.id===t?Object(S["a"])(Object(S["a"])({},e),{},{reminder:s.reminder}):e});case 11:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),fetchTasks:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),fetchTask:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},created:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchTasks();case 2:this.tasks=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},Z=Y,ee=Object(f["a"])(Z,P,R,!1,null,"5cec827a",null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Version 1.0.0")]),n("router-link",{attrs:{to:"/"}},[e._v("Back")])],1)},re=[],ae={},se=Object(f["a"])(ae,ne,re,!1,null,null,null),oe=se.exports,ie=[{path:"/",name:"Home",component:te},{path:"/about",name:"About",component:oe}],ce=new $["a"]({routes:ie}),ue=ce;r["a"].use($["a"]),new r["a"]({render:function(e){return e(A)},router:ue}).$mount("#app")},"66e5":function(e,t,n){"use strict";n("727d")},"727d":function(e,t,n){},"960f":function(e,t,n){"use strict";n("2f44")},c21b:function(e,t,n){},f019:function(e,t,n){}});
//# sourceMappingURL=app.c593b1b5.js.map