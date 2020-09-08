(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{296:function(e,t,n){e.exports=n(521)},301:function(e,t,n){},520:function(e,t,n){},521:function(e,t,n){"use strict";n.r(t),n.d(t,"history",(function(){return We}));var a=n(0),r=n.n(a),o=n(13),c=n.n(o),i=(n(301),n(264)),l=n(534),s=n(536),u=n(544),d=n(542),m=n(540),p=n(42),h=n(19),g=n.n(h),f=n(36),b=n(132),E=n(7),w=n(72),v=n.n(w),y=n(58);v.a.defaults.baseURL="http://localhost:8000/api",v.a.interceptors.response.use(void 0,(function(e){var t=e.status,n=(e.data,e.config);throw console.log(JSON.stringify(e,null,"\t")),"Network error"===e.message&&void 0===e.response&&y.a.error("Network error"),404===t&&We.push("/notfound"),400===t&&"get"===n.method&&We.push("/notfound"),500===t&&y.a.error("Server error - check the terminal for more info"),e.response}));var C=function(e){return e.data},O=function(e){return v.a.get(e).then(C)},j=function(e,t){return v.a.post(e,t).then(C)},k={User:{current:function(){return O("/user")},login:function(e){j("/login",e)},register:function(e){console.log(e),j("/register",e)}},WordBank:{list:function(){return O("/allWord")},details:function(e){return O("/findById/".concat(e))},categories:function(){return O("/categories")}},WordCount:{list:function(){return O("/wordcount")},add:function(e){return j("/wordcount/add",e)}}},x=function(){function e(t){var n=this;Object(p.a)(this,e),this.user=null,this.login=function(){var e=Object(f.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.User.login(t);case 3:a=e.sent,console.log("user from userStore: ",a),Object(E.h)((function(){n.user=a,We.push("/wordbank")})),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),this.register=function(){var e=Object(f.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.User.register(t);case 3:a=e.sent,Object(E.h)((function(){n.user=a,We.push("/wordbank")})),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.getUser=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.User.current();case 3:t=e.sent,Object(E.h)((function(){n.user=t})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.logout=function(){n.user=null,We.push("/")},this.rootStore=t}return Object(b.a)(e,[{key:"isLoggedIn",get:function(){return!!this.user}}]),e}();Object(E.e)(x,{user:E.g,login:E.b,register:E.b,getUser:E.b,logout:E.b,isLoggedIn:E.c});var S=n(284),A={adjectives:"#91DCE2",interjections:"#5ED2DA",nouns:"#5BC4E2",prepositions:"#6EABE7",pronouns:"#7B95E6",verbs:"#8091CD"},W=function(e,t){return e.category=t[e.category_idx-1].category_name,e},L=function(){function e(t){var n=this;Object(p.a)(this,e),this.loading=!1,this.wordRegistry=new Map,this.word=null,this.wordCountRegistry=[],this.categories=[],this.loadCategories=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.WordBank.categories();case 3:t=e.sent,n.categories=t.data,Object(E.h)("loading categories",(function(){})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y.a.error("Cannot retrieve/match categories");case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),this.loadWords=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.loading=!0,e.prev=1,n.loadCategories(),e.next=5,k.WordBank.list();case 5:t=e.sent,Object(E.h)("loading words",(function(){t.data.forEach((function(e){e=W(e,n.categories),n.wordRegistry.set(e.word_idx,e)})),n.loading=!1})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),Object(E.h)("load words error",(function(){n.loading=!1}));case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),this.loadWord=function(){var e=Object(f.a)(g.a.mark((function e(t){var a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=n.getWord(t))){e.next=6;break}return n.word=a,e.abrupt("return",a);case 6:return n.loading=!0,e.next=9,k.WordBank.details(t);case 9:r=e.sent;try{Object(E.h)("getting word",(function(){n.word=r,n.wordRegistry.set(r.id,r),n.loading=!1}))}catch(o){Object(E.h)("get word error",(function(){n.loading=!1})),console.log(o)}case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getWord=function(e){return n.wordRegistry.get(e)},this.clearWord=function(){n.word=null},this.loadWordCount=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n.rootStore.userStore.user){e.next=13;break}return e.prev=2,e.next=5,k.wordCount.list();case 5:t=e.sent,Object(E.h)("loading words",(function(){t.forEach((function(e){n.wordCountRegistry.set(e,t)}))})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),Object(E.h)("load word count error",(function(){})),console.log(e.t0);case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(0),y.a.error("Please log in or register to find out your word stats");case 18:case"end":return e.stop()}}),e,null,[[0,15],[2,9]])}))),this.rootStore=t}return Object(b.a)(e,[{key:"groupWordsByCategory",value:function(e){var t=e.sort((function(e,t){return e.category.localeCompare(t.category)}));return Object.entries(t.reduce((function(e,t){var n=t.category;return e[n]=e[n]?[].concat(Object(S.a)(e[n]),[t]):[t],e}),{}))}},{key:"wordsByCategories",get:function(){return this.groupWordsByCategory(Array.from(this.wordRegistry.values()))}}]),e}();Object(E.e)(L,{wordRegistry:E.g,word:E.g,loading:E.g,loadWords:E.b,loadWord:E.b,clearWord:E.b,loadWordCount:E.b,wordCountRegistry:E.g,wordsByCategories:E.c,loadCategories:E.b,categories:E.g});var B=function e(t){var n=this;Object(p.a)(this,e),this.appLoaded=!1,this.setAppLoaded=function(){n.appLoaded=!0},this.rootStore=t};Object(E.e)(B,{appLoaded:E.g,setAppLoaded:E.b});var D=function e(t){var n=this;Object(p.a)(this,e),this.sentence="",this.addToSentence=function(e){n.sentence+=e+" "},this.clearSentence=function(){n.sentence=""},this.addWordCount=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.WordCount.add(n.sentence);case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),y.a.error("Error adding to your word stats");case 9:case"end":return e.stop()}}),e,null,[[0,5]])}))),this.rootStore=t};Object(E.e)(D,{sentence:E.g,addToSentence:E.b,clearSentence:E.b,addWordCount:E.b});var R=Object(a.createContext)(new function e(){Object(p.a)(this,e),this.userStore=new x(this),this.wordStore=new L(this),this.commonStore=new B(this),this.SentenceStore=new D(this)}),I=n(27),_=n(37),T=n(71),U=function(e){var t=e.error,n=e.text;return r.a.createElement(m.a,{error:!0},r.a.createElement(m.a.Header,null,t.statusText),n&&r.a.createElement(m.a,{content:n}))},H=n(143),F=function(e){var t=e.input,n=e.width,a=e.type,o=e.placeholder,c=e.meta,i=c.touched,l=c.error,u=e.label;return r.a.createElement(s.a.Field,{error:i&&!!l,type:a,width:n,inline:!0},r.a.createElement("label",null,u),r.a.createElement(s.a.Input,Object.assign({},t,{placeholder:o,fluid:!0,focus:!0})),i&&l&&r.a.createElement(H.a,{basic:!0,color:"red"},l))},M=Object(I.createValidator)((function(e){return function(t){if(t&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t))return e}}),"Invalid email address"),q=Object(I.combineValidators)({email:Object(I.composeValidators)(Object(I.isRequired)("Email"),M)(),password:Object(I.isRequired)("Password")}),z=function(){var e=Object(a.useContext)(R).userStore.login;return r.a.createElement(l.a,{style:{marginTop:"5em"}},r.a.createElement(_.b,{onSubmit:function(t){return e(t).catch((function(e){return Object(i.a)({},T.a,e)}))},validate:q,render:function(e){var t=e.handleSubmit,n=e.submitting,a=e.submitError,o=e.invalid,c=e.pristine,i=e.dirtySinceLastSubmit;return r.a.createElement(s.a,{onSubmit:t,error:!0},r.a.createElement(u.a,{as:"h2",content:"Login to miah",style:{color:"#9AADED"},textAlign:"center"}),r.a.createElement(_.a,{name:"email",component:F,placeholder:"Email",type:"email"}),r.a.createElement(_.a,{name:"password",component:F,placeholder:"Password",type:"password"}),r.a.createElement(d.a,{disabled:o&&!i||c,loading:n,style:{backgroundColor:"#D2D0FE",color:"white"},content:"Login",fluid:!0}),a&&!i&&r.a.createElement(U,{error:a,text:"Invalid email or password"}),r.a.createElement(m.a,{style:{backgroundColor:"#9AADED",color:"white"}},"Haven't registered yet? ",r.a.createElement("a",{href:"/register"},"Sign Up")))}}))},N=n(142),V=n(545),Z=n(543),P=n(285),Y=n(538),J=n(56),$=n(26),G=Object(J.a)((function(){var e=Object(a.useContext)(R).userStore,t=e.user,n=e.logout,o=Object(a.useState)("home"),c=Object(N.a)(o,2),i=c[0],l=c[1],s=function(e,t){var n=t.name;l(n)};return r.a.createElement(V.a,null,r.a.createElement(Z.a,{fixed:"top",inverted:!0,size:"huge"},r.a.createElement(Z.a.Item,{header:!0,as:$.c,exact:!0,to:"/",active:"home"===i,name:"home",onClick:s,style:{marginLeft:"1em"}},r.a.createElement(P.a,{size:"mini",src:"/assets/logo.jpg",alt:"miah",circular:!0,spaced:"right"}),"miah"),t?r.a.createElement(Z.a.Menu,null,r.a.createElement(Z.a.Item,{as:$.c,to:"/wordcount",active:"wordcount"===i,name:"wordcount",onClick:s},"Your Stats"),r.a.createElement(Z.a.Item,{as:$.c,to:"/wordbank",active:"wordbank"===i,name:"",onClick:s},"Word Bank"),r.a.createElement(Z.a.Item,{position:"right"},r.a.createElement(Y.a,{pointing:"top left",text:t.displayName},r.a.createElement(Y.a.Menu,null,r.a.createElement(Y.a.Item,{onClick:n,text:"Logout",icon:"power"}))))):r.a.createElement(Z.a.Item,{position:"right"},r.a.createElement(d.a,{as:$.c,to:"/wordbank",style:{backgroundColor:"white",marginLeft:"2em"},compact:!0},"Discover"),r.a.createElement(d.a,{as:$.c,to:"/login",style:{backgroundColor:"white",marginLeft:"2em"},compact:!0},"Log in"),r.a.createElement(d.a,{as:$.c,to:"/register",compact:!0,style:{backgroundColor:"white",marginLeft:"2em"}},"Sign Up"))))})),K=n(541),Q=n(535),X=function(e){var t=e.inverted,n=void 0===t||t,a=e.content;return r.a.createElement(K.a,{active:!0,inverted:n},r.a.createElement(Q.a,{content:a}))},ee=n(15),te=n(546),ne=function(){return r.a.createElement(te.a,{padded:!0,relaxed:!0},r.a.createElement(te.a.Row,{centered:!0},r.a.createElement(te.a.Column,{width:8,textAlign:"center",verticalAlign:"middle"},r.a.createElement(u.a,{style:{fontSize:"4em"}},"meet miah"),r.a.createElement(u.a,{as:"h1"},"ML-Informed AAC Helper"),r.a.createElement(u.a,{as:"h3"}," ","miah (ML-Informed AAC Helper) is a state-of-the-art augmentative and alternative communication (AAC) tool to aid the speech impaired. By leveraging machine learning, the mission of miah is to provide equitable speech solutions and actionable data-driven insights for all users."," ")),r.a.createElement(te.a.Column,{width:4,verticalAlign:"top"},r.a.createElement(P.a,{src:"../../public/assets/iphone-miah.png",size:"medium"}))))},ae=function(){return r.a.createElement(te.a,{style:{margin:"2em 0"},centered:!0},r.a.createElement(u.a,{as:"h2"},"How miah works"),r.a.createElement(te.a.Row,{columns:5},r.a.createElement(te.a.Column,null,r.a.createElement(u.a,null,"Log In"),r.a.createElement("p",null,"Log in to miah to access our word bank. If you are a new user, create an account!")),r.a.createElement(te.a.Column,null,r.a.createElement(u.a,null,"Communicate"),r.a.createElement("p",null,"Our interactive word bank will help you communicate with ease!")),r.a.createElement(te.a.Column,null,r.a.createElement(u.a,null,"Track*"),r.a.createElement("p",null,"Follow your progress and the number of times you've used each word in your user profile."),r.a.createElement("p",null,"*To be added!"))),r.a.createElement(te.a.Row,null,r.a.createElement(d.a,{size:"massive",style:{backgroundColor:"#7A93E5",padding:".78571429em 7em",color:"white"},as:$.b,to:"/register"},"Get Started!")))},re=function(){return r.a.createElement(V.a,{style:{backgroundColor:"#929292",position:"absolute",width:"100%",top:"93.3%"}},"Info and what not")},oe=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(V.a,{className:"masthead",textAlign:"center"},r.a.createElement(ne,null)),r.a.createElement(ae,null),r.a.createElement(re,null))},ce=n(88),ie=function(){return r.a.createElement(V.a,{placeholder:!0,style:{paddingTop:"10em",paddingBottom:"10em"}},r.a.createElement(u.a,{icon:!0},r.a.createElement(ce.a,{name:"search"}),"Oops - We've looked everywhere but couldn't find this."),r.a.createElement(V.a.Inline,null,r.a.createElement(d.a,{as:$.b,to:"/home",primary:!0},"Return to Home")))},le=n(280),se=(n(519),["dd MM yyyy"]),ue=function(e){var t=e.input,n=e.placeholder,a=e.meta,o=a.touched,c=a.error;return r.a.createElement(s.a.Field,{error:o&&!!c,parse:se},r.a.createElement(le.DateTimePicker,{placeholder:n,value:t.value||null,onChange:t.onChange,onBlur:t.onBlur,time:!1,max:new Date}),o&&c&&r.a.createElement(H.a,{basic:!0,color:"red"},c))},de=n(281),me=n.n(de),pe=Object(I.createValidator)((function(e){return function(t){if(t&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t))return e}}),"Invalid email address"),he=Object(I.combineValidators)({first_name:Object(I.isRequired)("first_name"),last_name:Object(I.isRequired)("last_name"),dob:Object(I.isRequired)("dob"),email:Object(I.composeValidators)(Object(I.isRequired)("Email"),pe)(),password:Object(I.isRequired)("password")}),ge=function(){var e=Object(a.useContext)(R).userStore.register;return r.a.createElement(l.a,{style:{marginTop:"5em"}},r.a.createElement(_.b,{validate:he,onSubmit:function(t){var n=me()(t.dob).format("YYYY-MM-DD");t.dob=n,e(t)},render:function(e){var t=e.handleSubmit,n=e.submitting,a=e.submitError,o=e.invalid,c=e.pristine,i=e.dirtySinceLastSubmit;return r.a.createElement(s.a,{onSubmit:t,error:!0},r.a.createElement(u.a,{as:"h2",content:"Sign up to miah",style:{color:"#9AADED"},textAlign:"center"}),r.a.createElement(_.a,{name:"first_name",component:F,placeholder:"First Name",type:"text"}),r.a.createElement(_.a,{name:"last_name",component:F,placeholder:"Last Name",type:"text"}),r.a.createElement(_.a,{name:"dob",placeholder:"Date Of Birth",component:ue}),r.a.createElement(_.a,{name:"email",component:F,placeholder:"Email",type:"email"}),r.a.createElement(_.a,{name:"password",component:F,placeholder:"Password",type:"password"}),a&&!i&&r.a.createElement(U,{error:a}),r.a.createElement(d.a,{disabled:o&&!i||c,loading:n,style:{backgroundColor:"#D2D0FE",color:"white"},content:"Sign Up",fluid:!0}),r.a.createElement(m.a,{style:{backgroundColor:"#9AADED",color:"white"}},"Have an account? ",r.a.createElement("a",{href:"/login"},"Login")))}}))},fe=n(539),be=function(){var e=Object(a.useContext)(R).wordStore.wordCountRegistry;return r.a.createElement(l.a,null,e?r.a.createElement(fe.a,{celled:!0,padded:!0},r.a.createElement(fe.a.Header,null,r.a.createElement(fe.a.Row,null,r.a.createElement(fe.a.HeaderCell,{singleLine:!0},"Word"),r.a.createElement(fe.a.HeaderCell,null,"Word Count"))),e.map((function(e){return r.a.createElement(fe.a.Body,null,r.a.createElement(fe.a.Cell,null,e.name),r.a.createElement(fe.a.Cell,null,e.wordCount))}))):r.a.createElement(V.a,null,"Start using the app!"))},Ee=function(){var e=Object(a.useContext)(R),t=e.userStore.user,n=e.wordStore.loadWordCount;return Object(a.useEffect)((function(){t&&n()}),[t,n]),r.a.createElement(l.a,{style:{marginTop:"5em"}},t?r.a.createElement(be,null):r.a.createElement(V.a,null,"User not logged in"))},we=function(e){var t=e.word,n=Object(a.useContext)(R).SentenceStore.addToSentence;return r.a.createElement(d.a,{style:{backgroundColor:A[t.category],margin:"1em",border:"1px black solid"},onClick:function(){return n(t.word_name)},size:"mini"},r.a.createElement(d.a.Content,null,t.word_name),r.a.createElement(P.a,{src:"/assets/word-bank/".concat(t.category,"/").concat(t.word_name,".png"),size:"mini",circular:!0,centered:!0}))},ve=function(){var e=Object(a.useContext)(R).wordStore.wordsByCategories;return r.a.createElement(te.a,{centered:!0},e.map((function(e){var t=Object(N.a)(e,2),n=t[0],a=t[1];return r.a.createElement(te.a.Column,{width:2,key:n},r.a.createElement(d.a,{style:{display:"block",backgroundColor:A[n]},size:"medium",fluid:!0},n),a.map((function(e){return r.a.createElement(we,{word:e})})))})))},ye=n(282),Ce=n.n(ye),Oe=Object(J.a)((function(){var e=Object(a.useContext)(R).SentenceStore,t=e.sentence,n=e.clearSentence,o=e.addWordCount;return r.a.createElement(l.a,{text:!0},r.a.createElement("p",{className:"sentence_block","data-placeholder":"Click icons below..."},t),r.a.createElement(d.a,{floated:"left",color:"red",inverted:!0,onClick:n},"Clear"),r.a.createElement(d.a,{floated:"right",color:"blue",inverted:!0}," ",r.a.createElement(Ce.a,{styles:{container:{},text:{},buttons:{},play:{hover:{},button:{cursor:"pointer",pointerEvents:"none",outline:"none",borderStyle:"none"}},pause:{hover:{},button:{}},stop:{hover:{},button:{}},resume:{hover:{},button:{}}},text:t,voice:"Daniel",lang:"en-US",displayText:"Speak",textAsButton:!0,onClick:o,rate:"0.5"})))})),je=Object(J.a)((function(){var e=Object(a.useContext)(R).wordStore,t=e.loadWords,n=e.loading;return Object(a.useEffect)((function(){t()}),[t]),n?r.a.createElement(X,{content:"Loading word bank..."}):r.a.createElement(te.a,{style:{marginTop:"5em"}},r.a.createElement(te.a.Column,{width:16},r.a.createElement(Oe,null)),r.a.createElement(te.a.Column,{width:16},r.a.createElement(ve,null)))})),ke=Object(J.a)((function(){var e=Object(a.useContext)(R),t=e.commonStore,n=t.setAppLoaded,o=t.token,c=t.appLoaded,i=e.userStore.getUser;return Object(a.useEffect)((function(){o?i().finally((function(){return n()})):n()}),[i,n,o]),c?r.a.createElement(a.Fragment,null,r.a.createElement(a.Fragment,null,r.a.createElement(G,null),r.a.createElement(ee.c,null,r.a.createElement(ee.a,{exact:!0,path:"/",component:oe}),r.a.createElement(ee.a,{path:"/login",component:z}),r.a.createElement(ee.a,{path:"/register",component:ge}),r.a.createElement(ee.a,{path:"/wordbank",component:je}),r.a.createElement(ee.a,{path:"/wordcount",component:Ee}),r.a.createElement(ee.a,{component:ie})))):r.a.createElement(X,{content:"Loading miah..."})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=n(29),Se=(n(520),Object(ee.f)((function(e){var t=e.children,n=e.location.pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[n]),t||null}))),Ae=n(283);n.n(Ae)()();var We=Object(xe.a)();c.a.render(r.a.createElement($.a,{history:We},r.a.createElement(Se,null,r.a.createElement(ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[296,1,2]]]);
//# sourceMappingURL=main.bf3c60c9.chunk.js.map