(this.webpackJsonphashlips_nft_minting_dapp_fazelpejmanfar=this.webpackJsonphashlips_nft_minting_dapp_fazelpejmanfar||[]).push([[0],{371:function(n,e){},374:function(n,e){},377:function(n,e){},381:function(n,e){},382:function(n,e){},408:function(n,e){},410:function(n,e){},419:function(n,e){},421:function(n,e){},431:function(n,e){},433:function(n,e){},448:function(n,e){},476:function(n,e){},477:function(n,e){},552:function(n,e){},554:function(n,e){},561:function(n,e){},562:function(n,e){},804:function(n,e,t){},805:function(n,e,t){"use strict";t.r(e);var i,o,a,r,c,s,p,x,d,l,b,h,g,u,f,j,m,w,O,y,v,C,S,k,E,T,A,_,N,M,F,z,D,R,L,I,P,K,U,W,X,Y,G,H,B,q,Q=t(0),J=t.n(Q),V=t(35),Z=t.n(V),$=t(26),nn=t(49),en=t(24),tn=t(10),on=t(45),an=t(85),rn=t.n(an),cn=t(89),sn=t.n(cn),pn=t(104),xn=t(334),dn=t(22),ln={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},bn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ln,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(dn.a)(Object(dn.a)({},ln),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(dn.a)(Object(dn.a)({},n),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(dn.a)(Object(dn.a)({},ln),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(dn.a)(Object(dn.a)({},n),{},{account:e.payload.account});default:return n}},hn={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},gn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:hn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(dn.a)(Object(dn.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(dn.a)(Object(dn.a)({},n),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(dn.a)(Object(dn.a)({},hn),{},{loading:!1,error:!0,errorMsg:e.payload});default:return n}},un=Object(pn.b)({blockchain:bn,data:gn}),fn=[xn.a],jn=Object(pn.c)(pn.a.apply(void 0,fn)),mn=Object(pn.d)(un,jn),wn=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},On=function(){return function(){var n=Object(nn.a)(Object($.a)().mark((function n(e){var t;return Object($.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,mn.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=n.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),e(wn("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},yn=function(n){return{type:"CONNECTION_FAILED",payload:n}},vn=function(){return function(){var n=Object(nn.a)(Object($.a)().mark((function n(e){var t,i,o,a,r,c,s,p,x,d,l,b;return Object($.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return i=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return o=n.sent,n.next=12,o.json();case 12:if(a=n.sent,r=window,c=r.ethereum,!(c&&c.isMetaMask)){n.next=50;break}return rn.a.setProvider(c),s=new sn.a(c),n.prev=18,n.next=21,c.request({method:"eth_requestAccounts"});case 21:return p=n.sent,n.next=24,c.request({method:"net_version"});case 24:if(n.sent!=a.NETWORK.ID){n.next=33;break}x=new rn.a(i,a.CONTRACT_ADDRESS),d=new rn.a(i,a.TOKEN),e({type:"CONNECTION_SUCCESS",payload:{account:p[0],smartContract:x,smartToken:d,web3:s}}),c.on("accountsChanged",(function(n){e(Cn(n[0]))})),c.on("chainChanged",(function(){window.location.reload()})),n.next=43;break;case 33:return l=a.NETWORK.ID,b=sn.a.utils.toHex(l.toString()),n.prev=35,n.next=38,c.request({method:"wallet_switchEthereumChain",params:[{chainId:b}]});case 38:n.next=43;break;case 40:n.prev=40,n.t0=n.catch(35),4902===n.t0.code&&e(yn("Please Add ".concat(a.NETWORK.NAME," Network to your Metamask.")));case 43:n.next=48;break;case 45:n.prev=45,n.t1=n.catch(18),e(yn("Something went wrong."));case 48:n.next=51;break;case 50:e(yn("Install Metamask."));case 51:case"end":return n.stop()}}),n,null,[[18,45],[35,40]])})));return function(e){return n.apply(this,arguments)}}()},Cn=function(n){return function(){var e=Object(nn.a)(Object($.a)().mark((function e(t){return Object($.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:n}}),t(On());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},Sn=t(11),kn=Sn.b.div(i||(i=Object(tn.a)(["\n  background-color: #fff;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),En=Sn.b.div(o||(o=Object(tn.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Tn=Sn.b.div(a||(a=Object(tn.a)(["\n  height: 16px;\n  width: 16px;\n"]))),An=Sn.b.div(r||(r=Object(tn.a)(["\n  height: 24px;\n  width: 24px;\n"]))),_n=Sn.b.div(c||(c=Object(tn.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Nn=Sn.b.div(s||(s=Object(tn.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){var e=n.jc;return e||"flex-start"}),(function(n){var e=n.ai;return e||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),Mn=Sn.b.div(p||(p=Object(tn.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: center;\n  justify-content: center;\n  align-items: center;\n  //border: 2px solid #A673EF;\n  border-radius: 10px;\n  //box-shadow: 0px 0px 3px 0px #A673EF;\n"])),(function(n){var e=n.flex;return e||0})),Fn=Sn.b.p(x||(x=Object(tn.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 20px;\n  font-weight: 200;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  text-align: center;\n  @media (max-width: 565px) {\n    font-size: 25px;\n    text-align: center;\n    letter-spacing: 2px;\n  }\n"]))),zn=Sn.b.p(d||(d=Object(tn.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 24px;\n  font-weight: 400;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    letter-spacing: 2px;\n  }\n"]))),Dn=Sn.b.p(l||(l=Object(tn.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 0.75rem;\n    letter-spacing: 2px;\n  }\n"]))),Rn=(Sn.b.p(b||(b=Object(tn.a)(["\n  font-family: 'Upheaval';\n  color: white;\n  font-size: 3rem;\n  font-weight: bold;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  border: 2px solid midnightblue;\n  width: 400px;\n  background: #9DC5F0;\n  text-align: center;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    letter-spacing: 2px;\n    width: 200px;\n  }\n"]))),Sn.b.p(h||(h=Object(tn.a)(["\n  font-family: 'Renomono';\n  color: var(--primary-text);\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 0.75rem;\n    letter-spacing: 2px;\n    text-align: center;\n  }\n"])))),Ln=Sn.b.p(g||(g=Object(tn.a)(["\n  color: var(--primary-text);\n  font-size: 60px;\n  line-height: 1.6;\n"]))),In=Sn.b.p(u||(u=Object(tn.a)(["\n  color: var(--primary-text);\n  font-size: 30px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    line-height: 0;\n  }\n"]))),Pn=(Sn.b.div(f||(f=Object(tn.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),Sn.b.hr(j||(j=Object(tn.a)(["\n  border: 2px solid white;  \n  background-color: white;\n  border-radius: 2px;\n  width: 450px;\n  @media (max-width: 565px) {\n    width: 350px;\n  }\n"]))),Sn.b.a(m||(m=Object(tn.a)(["\n  color: var(--primary-text);\n  text-decoration: none;\n  margin-right: 5rem;\n  cursor: pointer;\n  :hover {\n    color: #FF8938;\n  }\n  @media (max-width: 565px) {\n    margin-right: 0.75rem;\n    margin-top: 1rem;\n  }\n"]))),Sn.b.img(w||(w=Object(tn.a)(["\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin-right: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    :hover {\n      transform: scale(1.5);\n      transition: transform 0.5s;\n    }\n"])))),Kn=Sn.b.div(O||(O=Object(tn.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: 3.5rem;\n@media (max-width: 565px) {\n  margin-right: 0;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  flex-direction: column;\n}\n"]))),Un=Sn.b.div(y||(y=Object(tn.a)(["\ndisplay: flex;\nalign-items: center;\n@media (max-width: 565px) {\n  margin-right: 0;\n  margin-top: 20px;\n  flex-direction: row;\n}\n"]))),Wn=(Sn.b.div(v||(v=Object(tn.a)(["\n    display: flex;\n    align-items: center;\n    @media (max-width: 565px) {\n      margin-top: 10px;\n      margin-bottom: 10px;\n    }\n"]))),Sn.b.div(C||(C=Object(tn.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: center;;\n  align-items: center;\n  background-color: ",";\n  width: 100%;\n  margin-top: 5%;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){return n.test?"pink":"none"}))),Xn=Sn.b.p(S||(S=Object(tn.a)(["\ntext-align: center;\nfont-size: 1rem;\nletter-spacing: 1px;\nline-height: 2;\nwidth: 70%;\n"]))),Yn=(Sn.b.button(k||(k=Object(tn.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 40px;\n  border: none;\n  background: linear-gradient(86.57deg, #D8AE43 6.92%, rgba(255, 92, 0, 0.79) 100.73%);\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: black;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),Sn.b.div(E||(E=Object(tn.a)(["\n  display: flex;\n  background: #171717;\n  border-radius: 40px;\n  width: max-content;\n  margin-top: 5%;\n  align-items: center;\n    justify-content: center;\n    @media (max-width: 565px) {\n      width: 100%;\n    }\n"]))),Sn.b.div(T||(T=Object(tn.a)(["\n  display: flex;\n  margin-top: 5%;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 5%;\n  @media (max-width: 565px) {\n    flex-direction: column;\n  }\n"]))),Sn.b.div(A||(A=Object(tn.a)(["\nheight: 120px;\nwidth: 250px;\nborder-radius: 20px;\nbackground: #171717;\npadding: 10px;\n@media (max-width: 565px) {\n  margin-top: 10px;\n}\n:hover {\n  transform: scale(1.2);\n}\n\n"]))),Sn.b.div(_||(_=Object(tn.a)(["\n    flex-direction: row;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-content: center;\n    padding: 10px;\n"]))),Sn.b.img(N||(N=Object(tn.a)(["\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin-right: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n"]))),Sn.b.p(M||(M=Object(tn.a)(["\ntext-align: left;\nwidth: 125px;\nfont-size: 1rem;\n"]))),Sn.b.p(F||(F=Object(tn.a)(["\ntext-align: left;\nfont-size: 0.75rem;\n"]))),Sn.b.div(z||(z=Object(tn.a)(["\nwidth: 30%;\n@media (max-width: 565px) {\n  width: 80%;\n}\n"]))),t(665),t(666),t(812)),Gn=t(814),Hn=t(813),Bn=t(815),qn=t(1),Qn=Sn.b.button(D||(D=Object(tn.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: none;\n  background-color: black;\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px black;\n  -webkit-box-shadow: 0px 6px 0px -2px black;\n  -moz-box-shadow: 0px 6px 0px -2px black;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),Jn=Sn.b.button(R||(R=Object(tn.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: none;\n  background-color: black;\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px black;\n  -webkit-box-shadow: 0px 6px 0px -2px black;\n  -moz-box-shadow: 0px 6px 0px -2px black;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),Vn=Sn.b.button(L||(L=Object(tn.a)(["\n  font-family: 'coder';\n  font-size: 0.75rem;\n  border-radius: 10px;\n  background-color: whte;\n  font-weight: bold;\n  color: black;\n  width: 80px;\n  height: 30px;\n  cursor: pointer;\n  letter-spacing: 2px;\n  :hover {\n    color: black;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),Zn=(Sn.b.button(I||(I=Object(tn.a)(["\n  font-family: 'coder';\n  font-size: 0.75rem;\n  border-radius: 10px;\n  background-color: whte;\n  font-weight: bold;\n  color: black;\n  width: 80px;\n  height: 30px;\n  cursor: pointer;\n  letter-spacing: 2px;\n  :hover {\n    color: black;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),Sn.b.button(P||(P=Object(tn.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: transparent;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n"])))),$n=Sn.b.div(K||(K=Object(tn.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nalign-content: center;\ngap: 10%;\nmargin-top:40px;\nwidth: 300px;\n"]))),ne=Sn.b.div(U||(U=Object(tn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: center;\n  margin: auto;\n  width: 70%;\n  border: 2px solid white;\n  border-radius: 40px;\n  background: black;\n  opacity: 50%;\n    @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ee=Sn.b.div(W||(W=Object(tn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-height: 80px;\n  padding: 10px;\n  background-color : transparent;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n  @media (max-width: 565px) {\n    max-height: 220px;\n  }\n"]))),te=Sn.b.img(X||(X=Object(tn.a)(["\n  display: inline;\n  width: 200px;\n  @media (max-width: 767px) {\n    width: 150px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ie=(Sn.b.img(Y||(Y=Object(tn.a)(["\n  width: 450px;\n  border-radius: 5px;\n  @media (min-width: 900px) {\n    width: 450px;\n  }\n  @media (min-width: 1000px) {\n    width: 450px;\n  }\n  transition: width 0.5s;\n  @media (max-width: 565px) {\n    width: 200px;\n  }\n"]))),Sn.b.img(G||(G=Object(tn.a)(["\n  width: 100%;\n  border-radius: 5px;\n  transition: width 0.5s;\n"]))),Sn.b.img(H||(H=Object(tn.a)(["\n  width: 220px;\n  height: 220px;\n  border-radius: 5px;\n  @media (min-width: 900px) {\n    width: 220px;\n    height: 220px;\n  }\n  @media (min-width: 1000px) {\n    width: 220px;\n    height: 220px;\n  }\n  transition: width 0.5s;\n  @media (max-width: 565px) {\n    width: 200px;\n  }\n"]))),Sn.b.a(B||(B=Object(tn.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])))),oe=Sn.b.div(q||(q=Object(tn.a)(["\n  text-decoration: none;\n  border-radius: 10px;\n  border: 2px solid white;\n  background-color: transparent;\n  //padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  width: 180px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px white;\n  -webkit-box-shadow: 0px 4px 0px -2px white;\n  -moz-box-shadow: 0px 4px 0px -2px white;\n  @media (max-width: 565px) {\n    margin-top: 20px;\n  \n"])));var ae,re,ce,se,pe,xe,de,le,be=function(){var n=Object(on.b)(),e=Object(on.c)((function(n){return n.blockchain})),t=Object(on.c)((function(n){return n.data})),i=Object(Q.useState)("Not Connected"),o=Object(en.a)(i,2),a=o[0],r=o[1],c=Object(Q.useState)(!1),s=Object(en.a)(c,2),p=s[0],x=s[1],d=Object(Q.useState)(!1),l=Object(en.a)(d,2),b=(l[0],l[1],Object(Q.useState)("")),h=Object(en.a)(b,2),g=h[0],u=h[1],f=Object(Q.useState)(1),j=Object(en.a)(f,2),m=j[0],w=j[1],O=Object(Q.useState)("2px solid #FFFFFF"),y=Object(en.a)(O,2),v=y[0],C=y[1],S=Object(Q.useState)("0px 0px 3px 0px #FFFFFF"),k=Object(en.a)(S,2),E=k[0],T=k[1],A=Object(Q.useState)("red"),_=Object(en.a)(A,2),N=_[0],M=_[1],F=J.a.useState("info"),z=Object(en.a)(F,2),D=(z[0],z[1],J.a.useState("topStart")),R=Object(en.a)(D,2),L=R[0],I=(R[1],Object(qn.jsx)(Yn.a,{type:"error",header:"error",closable:!0,children:"Sorry, something went wrong please try again later."})),P=Object(qn.jsx)(Yn.a,{type:"success",header:"success",closable:!0,children:"Congrats, Mint Was successfull."}),K=Object(qn.jsxs)(Yn.a,{type:"info",header:"success",closable:!0,children:[Object(qn.jsx)(Hn.a,{})," Minting in Progress...."]}),U=Object(Q.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,DISPLAY_COST:0,FREE_COST:0,WL_Display:0,GAS_LIMIT:0,MAX_PER_TX:0,MARKETPLACE:"",MARKETPLACE_LINK:"",Telegram:"",Discord:"",Twitter:"",SHOW_BACKGROUND:!0}),W=Object(en.a)(U,2),X=W[0],Y=W[1],G=function(){""!==e.account&&null!==e.smartContract&&(n(On(e.account)),r(e.account.substring(0,4)+"..."+e.account.substring(38,42)),M("green"))},H=function(){var n=Object(nn.a)(Object($.a)().mark((function n(){var e,t;return Object($.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,Y(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(Q.useEffect)((function(){H()}),[]),Object(Q.useEffect)((function(){G()}),[e.account]),Object(qn.jsx)(kn,{children:Object(qn.jsxs)(Nn,{flex:1,style:{backgroundColor:"var(--primary)"},image:!X.SHOW_BACKGROUND||"/config/images/bg.png",children:[Object(qn.jsxs)(ee,{children:[Object(qn.jsx)($n,{children:Object(qn.jsx)("a",{href:"#",target:"_blank",children:Object(qn.jsx)(te,{alt:"logo",src:"/config/images/logo.png"})})}),Object(qn.jsx)(Kn,{children:Object(qn.jsx)(oe,{children:""!==e.account?Object(qn.jsx)(qn.Fragment,{children:Object(qn.jsxs)(Rn,{style:{fontSize:"1rem",color:"white"},children:[Object(qn.jsx)(Bn.a,{color:N})," ",a]})}):null})})]}),Object(qn.jsx)(_n,{}),Object(qn.jsx)(Nn,{flex:1,jc:"center",ai:"center"}),Object(qn.jsx)(Tn,{}),Object(qn.jsxs)(ne,{flex:1,style:{padding:24},test:!0,children:[Object(qn.jsx)(Tn,{}),Object(qn.jsxs)(Nn,{flex:1,jc:"center",ai:"center",children:[Object(qn.jsx)(Fn,{children:X.NFT_NAME}),Object(qn.jsx)(Fn,{children:"2 Free Bored Apes in Space + Gas, want an additional one."}),Object(qn.jsx)(Fn,{children:"We got you covered for a cheap price of 0.009eth + Gas per NFT."}),Number(t.totalSupply)>=X.MAX_SUPPLY?Object(qn.jsxs)(qn.Fragment,{children:[Object(qn.jsx)(zn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:"The sale has ended."}),Object(qn.jsxs)(Ln,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:["You can still find ",X.NFT_NAME," on"]}),Object(qn.jsx)(Tn,{}),Object(qn.jsx)(ie,{target:"_blank",href:X.MARKETPLACE_LINK,children:X.MARKETPLACE})]}):Object(qn.jsxs)(qn.Fragment,{children:[Object(qn.jsxs)(zn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:[t.totalSupply," | ",X.MAX_SUPPLY]}),Object(qn.jsx)(Tn,{}),Object(qn.jsxs)(Dn,{style:{background:"white",borderRadius:5,padding:8,color:"black"},children:["Price\u2003\u2003\u2003\u2003\u2003",X.DISPLAY_COST," ",X.NETWORK.SYMBOL]}),Object(qn.jsx)(An,{}),""===e.account||null===e.smartContract?Object(qn.jsx)(qn.Fragment,{children:Object(qn.jsxs)(Nn,{ai:"center",jc:"center",children:[Object(qn.jsx)(Tn,{}),Object(qn.jsxs)(Jn,{onClick:function(e){e.preventDefault(),n(vn()),G()},children:["CONNECT Wallet",Object(qn.jsx)("img",{style:{width:30,paddingLeft:10},src:"/config/images/mm.svg"})]}),""!==e.errorMsg?Object(qn.jsxs)(qn.Fragment,{children:[Object(qn.jsx)(Tn,{}),Object(qn.jsx)(Ln,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder",fontSize:20},children:e.errorMsg})]}):null]})}):Object(qn.jsxs)(qn.Fragment,{children:[Object(qn.jsxs)(Mn,{style:{border:v,boxShadow:E},children:[Object(qn.jsx)(Zn,{style:{lineHeight:.4},disabled:p?1:0,onClick:function(n){n.preventDefault(),function(){var n=m-1;n<1&&(n=1),w(n)}()},children:"-"}),Object(qn.jsxs)(In,{children:["\u2002\u2002\u2002\u2002",m,"\u2002\u2002\u2002\u2002"]}),Object(qn.jsx)(An,{}),Object(qn.jsx)(Zn,{disabled:p?1:0,onClick:function(n){n.preventDefault(),function(){var n=m+1;n>X.MAX_PER_TX&&(n=X.MAX_PER_TX),w(n)}()},children:"+"})]}),Object(qn.jsx)(Tn,{}),Object(qn.jsx)(Qn,{disabled:p?3:0,onClick:function(t){t.preventDefault(),function(){if(m>3){var t=X.DISPLAY_COST*m-X.FREE_COST,i=sn.a.utils.toWei(t.toString(),"ether"),o=X.GAS_LIMIT,a=X.FREE_COST,r=String(o),c=String(a);console.log("Cost: ",i),console.log("Gas limit: ",o),console.log("Free Cost : ",c),u("Minting your ".concat(X.NFT_NAME,"...")),x(!0),C("2px solid yellow"),T("0px 0px 3px 0px yellow"),Gn.a.push(K,{placement:L}),e.smartContract.methods.mint(m).send({gasLimit:String(r),to:X.CONTRACT_ADDRESS,from:e.account,value:i}).once("error",(function(n){console.log(n),u("Sorry, something went wrong please try again later."),x(!1),Gn.a.push(I,{placement:L}),C("2px solid red"),T("0px 0px 3px 0px red")})).then((function(t){console.log(t),u("WOW, the ".concat(X.NFT_NAME," is yours! go visit Opensea.io to view it.")),Gn.a.push(P,{placement:L}),C("2px solid green"),T("0px 0px 3px 0px green"),x(!1),n(On(e.account))}))}else{var s=X.GAS_LIMIT,p=String(s);console.log("Gas limit: ",p),u("Minting your ".concat(X.NFT_NAME,"...")),x(!0),C("2px solid yellow"),T("0px 0px 3px 0px yellow"),Gn.a.push(K,{placement:L}),e.smartContract.methods.mint(m).send({gasLimit:String(p),to:X.CONTRACT_ADDRESS,from:e.account,value:0}).once("error",(function(n){console.log(n),u("Sorry, something went wrong please try again later."),x(!1),Gn.a.push(I,{placement:L}),C("2px solid red"),T("0px 0px 3px 0px red")})).then((function(t){console.log(t),u("WOW, the ".concat(X.NFT_NAME," is yours! go visit Opensea.io to view it.")),Gn.a.push(P,{placement:L}),C("2px solid green"),T("0px 0px 3px 0px green"),x(!1),n(On(e.account))}))}var d=sn.a.utils.toWei(cost.toString(),"ether"),l=X.GAS_LIMIT,b=X.FREE_COST,h=String(l),g=String(b);console.log("Cost: ",d),console.log("Gas limit: ",l),console.log("Free Cost : ",g),u("Minting your ".concat(X.NFT_NAME,"...")),x(!0),C("2px solid yellow"),T("0px 0px 3px 0px yellow"),Gn.a.push(K,{placement:L}),e.smartContract.methods.mint(m).send({gasLimit:String(h),to:X.CONTRACT_ADDRESS,from:e.account,value:0}).once("error",(function(n){console.log(n),u("Sorry, something went wrong please try again later."),x(!1),Gn.a.push(I,{placement:L}),C("2px solid red"),T("0px 0px 3px 0px red")})).then((function(t){console.log(t),u("WOW, the ".concat(X.NFT_NAME," is yours! go visit Opensea.io to view it.")),Gn.a.push(P,{placement:L}),C("2px solid green"),T("0px 0px 3px 0px green"),x(!1),n(On(e.account))}))}(),G()},children:p?Object(qn.jsx)(Hn.a,{speed:"fast",content:"Minting..."}):"MINT"}),Object(qn.jsx)(Tn,{}),Object(qn.jsx)(Tn,{}),Object(qn.jsxs)(Dn,{style:{color:"black"},children:["Total\u2003\u2003\u2003\u2003\u2003",(X.DISPLAY_COST*m-X.FREE_COST).toString().substring(0,6)," ",X.NETWORK.SYMBOL]}),Object(qn.jsx)(Tn,{}),Object(qn.jsx)(En,{}),Object(qn.jsx)(Nn,{ai:"center",jc:"center",fd:"column",children:Object(qn.jsx)(Vn,{onClick:function(n){n.preventDefault(),w(X.MAX_PER_TX)},children:"SetMax"})}),Object(qn.jsx)(En,{}),Object(qn.jsxs)(Rn,{style:{fontSize:15},children:["Max ",X.MAX_PER_TX," Per Tx"]}),Object(qn.jsx)(En,{}),Object(qn.jsx)(Rn,{style:{textAlign:"center",fontSize:"1rem"},children:g})]})]}),Object(qn.jsx)(An,{})]}),Object(qn.jsx)(_n,{})]}),Object(qn.jsxs)(Wn,{id:"",children:[Object(qn.jsxs)(Un,{children:[Object(qn.jsx)("a",{href:X.Telegram,target:"_blank",children:Object(qn.jsx)(Pn,{src:"/config/images/telegram.svg",alt:"telegram"})}),Object(qn.jsx)("a",{href:X.Twitter,target:"_blank",children:Object(qn.jsx)(Pn,{src:"/config/images/twitter.svg",alt:"twitter"})}),Object(qn.jsx)("a",{href:X.Discord,target:"_blank",children:Object(qn.jsx)(Pn,{src:"/config/images/discord.svg",alt:"discord"})}),Object(qn.jsx)("a",{href:X.MARKETPLACE_LINK,target:"_blank",children:Object(qn.jsx)(Pn,{src:"/config/images/opensea.svg",alt:"opensea"})})]}),Object(qn.jsx)(_n,{}),Object(qn.jsxs)(Xn,{children:["Copyright \xa9 2022 ",X.NFT_NAME]})]}),Object(qn.jsx)(An,{})]})})};Sn.b.button(ae||(ae=Object(tn.a)(["\n  font-family: 'Upheaval';\n  padding: 10px;\n  font-size: 24px;\n  border-radius: 6px;\n  border: none;\n  background-color: #fff;\n  padding: 10px;\n  letter-spacing: 6px;\n  // font-weight: bold;\n  color: #7167E3;\n  width: 450px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),Sn.b.button(re||(re=Object(tn.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: #fff;\n  padding: 10px;\n  // font-weight: bold;\n  font-size: 50px;\n  color: #7167E3;\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),Sn.b.div(ce||(ce=Object(tn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  // margin: auto;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),Sn.b.div(se||(se=Object(tn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),Sn.b.img(pe||(pe=Object(tn.a)(["\n  display: inline;\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),Sn.b.img(xe||(xe=Object(tn.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  // border: 4px dashed var(--secondary);\n  // background-color: var(--accent);\n  // border-radius: 100%;\n  width: 300px;\n  @media (min-width: 900px) {\n    width: 350px;\n  }\n  @media (min-width: 1000px) {\n    width: 400px;\n  }\n  transition: width 0.5s;\n"]))),Sn.b.a(de||(de=Object(tn.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))),Sn.b.div(le||(le=Object(tn.a)(["\n  text-decoration: none;\n  border-radius: 10px;\n  border: 2px solid white;\n  background-color: #7167E3;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  width: 250px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n"])));var he,ge=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,816)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),o(n),a(n),r(n)}))},ue=(t(804),t.p+"static/media/RenoMono.8b239c68.otf"),fe=t.p+"static/media/upheavtt.e3d365ba.ttf",je=Object(Sn.a)(he||(he=Object(tn.a)(["\n    @font-face {\n        font-family: 'Upheaval';\n        src: url(",") format('truetype');\n    }\n\n    @font-face {\n        font-family: 'Renomono';\n        src: url(",") format('opentype');\n    }\n"])),fe,ue);Z.a.render(Object(qn.jsxs)(on.a,{store:mn,children:[Object(qn.jsx)(je,{}),Object(qn.jsx)(be,{})]}),document.getElementById("root")),ge()}},[[805,1,2]]]);
//# sourceMappingURL=main.474d7c94.chunk.js.map