(this.webpackJsonpattendance=this.webpackJsonpattendance||[]).push([[0],{147:function(e,t,a){},182:function(e,t,a){e.exports=a(326)},187:function(e,t,a){},188:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},189:function(e,t,a){},320:function(e,t,a){e.exports=a.p+"static/media/1.4f196243.jpeg"},321:function(e,t,a){},326:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(36),o=a.n(r),c=(a(187),a(12)),i=a(13),s=a(15),u=a(14),m=(a(188),a(189),a(16)),p=a.n(m),d=a(334),g=a(335),h=a(11),E=a(18),f=Object(E.a)({forceRefresh:!0}),b=function(){return l.a.createElement("div",null,l.a.createElement("div",{style:{border:"2px solid black",backgroundColor:"black",color:"white"}},l.a.createElement("ul",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}},l.a.createElement(h.b,{to:"/",style:{textDecoration:"none",listStyle:"none",color:"white"},activeStyle:{color:"orange"}},l.a.createElement("li",null,"Login")),l.a.createElement(h.b,{to:"/register",style:{textDecoration:"none",listStyle:"none",color:"white"},activeStyle:{color:"orange"}},l.a.createElement("li",null,"Register")),l.a.createElement(h.b,{to:"/image",style:{textDecoration:"none",listStyle:"none",color:"white"},activeStyle:{color:"orange"}},l.a.createElement("li",null,"Upload Image")),l.a.createElement(h.b,{to:"/attendance",style:{textDecoration:"none",listStyle:"none",color:"white"},activeStyle:{color:"orange"}},l.a.createElement("li",null,"Take Attendance")),l.a.createElement(h.b,{to:"/getinfo",style:{textDecoration:"none",listStyle:"none",color:"white"},activeStyle:{color:"orange"}},l.a.createElement("li",null,"Get Information")),l.a.createElement(h.b,{to:"/report",style:{textDecoration:"none",listStyle:"none",color:"white"},activeStyle:{color:"orange"}},l.a.createElement("li",null,"Get Report")),localStorage.getItem("token")?l.a.createElement(g.a,{style:{textDecoration:"none",listStyle:"none",color:"white",backgroundColor:"black",border:"transparent"},onClick:function(){localStorage.getItem("token")&&localStorage.removeItem("token"),f.push("/")}},l.a.createElement("li",null,"LogOut")):null)))},v=(a(147),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={fname:"",email:"",lname:"",password:"",cpassword:"",error:""},e.post=function(){var t={fname:e.state.fname,lname:e.state.lname,email:e.state.email,password:e.state.password};p.a.post("http://127.0.0.1:5000/post",t).then((function(e){200===e.status&&f.push("/login")})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{height:"100vh"},className:"BgImage"},l.a.createElement(b,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d.a,{style:{position:"absolute",left:"50%",top:"55%",width:"60vh",transform:"translate(-50%,-50%)",border:"1px solid black",padding:"1em",borderRadius:"1em",boxShadow:"2px 2px 2px 2px black",backgroundColor:"white"}},l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"First Name"),l.a.createElement("input",{placeholder:"First Name",onChange:function(t){return e.setState({fname:t.target.value})}})),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Last Name"),l.a.createElement("input",{placeholder:"Last Name",onChange:function(t){return e.setState({lname:t.target.value})}})),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Email"),l.a.createElement("input",{placeholder:"Email",onChange:function(t){return e.setState({email:t.target.value})}})),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Password"),l.a.createElement("input",{placeholder:"Password",type:"password",onChange:function(t){return e.setState({password:t.target.value})}})),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Confirm Password"),l.a.createElement("input",{placeholder:"Confirm Password",type:"password",onChange:function(t){return e.setState({cpassword:t.target.value})}})),l.a.createElement(g.a,{type:"submit",onClick:this.post,id:"Btn"},"Submit"),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement(h.b,{style:{textDecoration:"none",listStyle:"none",color:"black"},to:"/"},"Already Have An Account? Login"))))}}]),a}(l.a.Component)),y=(a(320),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:"",error:null},e.login=function(){if(localStorage.getItem("token"))localStorage.removeItem("token"),f.push("/");else{var t={email:e.state.email,password:e.state.password};p.a.post("http://127.0.0.1:5000/login",t).then((function(t){200===t.status?(localStorage.setItem("token",t.data.token),f.push("/attendance")):404===t.status?e.setState({error:"Invalid email or password"}):e.setState({error:"Email doesnt exists"})})).catch((function(t){404===t.request.status?e.setState({error:"Invalid email or password"}):400===t.request.status&&e.setState({error:"Email doesnt exists"})}))}},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{boxShadow:"2px solid black",height:"100vh"},className:"BgImage"},l.a.createElement(b,null),l.a.createElement(d.a,{style:{position:"absolute",left:"50%",top:"50%",width:"60vh",transform:"translate(-50%,-50%)",border:"1px solid black",padding:"1em",borderRadius:"1em",boxShadow:"2px 2px 2px 2px black",backgroundColor:"white"}},l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Email"),l.a.createElement("input",{placeholder:"Email",onChange:function(t){return e.setState({email:t.target.value})}})),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Password"),l.a.createElement("input",{placeholder:"Password",type:"password",onChange:function(t){return e.setState({password:t.target.value})}})),l.a.createElement(g.a,{type:"submit",onClick:this.login,id:"Btn"},localStorage.getItem("token")?l.a.createElement("span",null,"Logout"):l.a.createElement("span",null,"Login")),l.a.createElement("br",null),null!==this.state.error?l.a.createElement("span",{style:{color:"red"}},this.state.error):null,l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement(h.b,{style:{textDecoration:"none",listStyle:"none",color:"black"},to:"/register"},"Dont Have An Account? Sign In"))))}}]),a}(l.a.Component)),S=a(8),w=(a(68),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={year:"",type:"",lec:"",branch:""},e.postAttendance=function(t){t.preventDefault();var a={year:e.state.year,lec:e.state.lec.concat(e.state.type)};p.a.post("http://127.0.0.1:5000/info",a).then((function(e){200===e.status&&f.push("/image")})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return localStorage.getItem("token")||f.push("/"),l.a.createElement("div",{style:{height:"115vh"},className:"BgImage"},l.a.createElement(b,null),l.a.createElement(d.a,{style:{position:"absolute",left:"50%",top:"60%",width:"60vh",transform:"translate(-50%,-50%)",border:"1px solid black",padding:"1em",borderRadius:"1em",boxShadow:"2px 2px 2px 2px black",backgroundColor:"white"}},l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Select Year"),l.a.createElement("select",{onChange:function(t){return e.setState({year:t.target.value})}},l.a.createElement("option",{value:"",selected:!0},"Select a year"),l.a.createElement("option",{value:"FE"},"FE"),l.a.createElement("option",{value:"SE"},"SE"),l.a.createElement("option",{value:"TE"},"TE"),l.a.createElement("option",{value:"BE"},"BE"))),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Select Lecture"),l.a.createElement("select",{onChange:function(t){return e.setState({lec:t.target.value})}},l.a.createElement("option",{value:"",selected:!0},"Select a specific lecture"),l.a.createElement("option",{value:"WDL-"},"WDL"),l.a.createElement("option",{value:"DBMS-"},"DBMS"),l.a.createElement("option",{value:"AA-"},"AA"),l.a.createElement("option",{value:"TCS-"},"TCS"))),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Type"),l.a.createElement("select",{onChange:function(t){return e.setState({type:t.target.value})}},l.a.createElement("option",{value:"",selected:!0},"Select the type of lecture"),l.a.createElement("option",{value:"T"},"Theory"),l.a.createElement("option",{value:"P"},"Practical"))),l.a.createElement(g.a,{type:"submit",onClick:this.postAttendance,id:"Btn"},"Submit")))}}]),a}(l.a.Component)),x=(a(321),function(){return l.a.createElement("div",{style:{minHeight:"70vh"}},l.a.createElement("div",{className:"Loader"},"Loading..."))}),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={image1:null,image2:null,image3:null,form:0,error:null},e.postAttendance=function(t){t.preventDefault(),e.setState({form:1});var a=new FormData;a.append("image1",e.state.image1),a.append("image2",e.state.image2),a.append("image3",e.state.image3);p.a.post("http://127.0.0.1:5000/attendance",a,{headers:{"content-type":"multipart/form-data"}}).then((function(e){200===e.status&&f.push("/getinfo")})).catch((function(t){e.setState({error:1})}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return localStorage.getItem("token")||f.push("/"),null!==this.state.error&&f.push("/attendance"),l.a.createElement("div",{style:{height:"115vh"},className:"BgImage"},l.a.createElement(b,null),0===this.state.form?l.a.createElement(d.a,{style:{position:"absolute",left:"50%",top:"60%",width:"60vh",transform:"translate(-50%,-50%)",border:"1px solid black",padding:"1em",borderRadius:"1em",boxShadow:"2px 2px 2px 2px black",backgroundColor:"white"}},l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Upload Image1"),l.a.createElement("input",{type:"file",accept:"image/png,image/jpeg,image/jpg",onChange:function(t){return e.setState({image1:t.target.files[0]})}})),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Upload Image2"),l.a.createElement("input",{type:"file",accept:"image/png,image/jpeg,image/jpg",onChange:function(t){return e.setState({image2:t.target.files[0]})}})),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Upload Image3"),l.a.createElement("input",{type:"file",accept:"image/png,image/jpeg,image/jpg",onChange:function(t){return e.setState({image3:t.target.files[0]})}})),l.a.createElement(g.a,{type:"submit",onClick:this.postAttendance,id:"Btn"},"Submit")):l.a.createElement(x,null))}}]),a}(n.Component),C=a(169),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={data:[]},e.showFrom=function(){f.push("/add")},e.getReport=function(){f.push("/report")},e.getInfo=function(){p.a.get("http://127.0.0.1:5000/getinfo",{headers:{"content-type":"multipart/form-data"}}).then((function(t){var a=[];for(var n in console.log(t.data),t.data.data)a.push(Object(C.a)({},t.data.data[n]));e.setState({data:a})})).catch((function(e){return console.log(e)}))},e.Delete=function(t){var a,n={Roll:(a=Object.values(t))[0],Name:a[1]};p.a.post("http://127.0.0.1:5000/delete",n).then((function(t){console.log(t),e.getInfo()})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("cid"),this.getInfo()}},{key:"render",value:function(){var e=this;localStorage.getItem("token")||f.push("/");var t=[],a=null,n=null;return this.state.data!==[]&&(a=this.state.data.map((function(a){return console.log("hello"),t=Object.values(a),console.log(a),console.log(t),l.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",fontWeight:"500",margin:"0% 5% 0% 10%",fontSize:"1em"}},l.a.createElement("div",{style:{fontSize:"1.2em"}},t[0]),l.a.createElement("div",{style:{fontSize:"1.2em"}},t[1]),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return e.Delete(a)},style:{backgroundColor:"black",color:"white",cursor:"pointer",borderRadius:"0.5em",outline:"none",alignSelf:"center",padding:"10px 13px"}},"Delete")),l.a.createElement("br",null))}))),!a.length>0&&(n=l.a.createElement("h1",{className:"cart"},"No student found")),console.log(a),l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement("br",null),l.a.createElement("br",null),this.state.data!==[]?l.a.createElement("div",null,l.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",fontWeight:"500",margin:"0% 5% 0% 10%",fontSize:"1.5em"}},l.a.createElement("div",null,"Roll No"),l.a.createElement("div",null,"Name"),l.a.createElement("div",{style:{visibility:"hidden"}},"button")),l.a.createElement("hr",null),l.a.createElement("br",null),a,n,l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("button",{style:{backgroundColor:"black",color:"white",cursor:"pointer",borderRadius:"0.5em",outline:"none",alignSelf:"center",margin:"20px",padding:"10px 13px"},onClick:this.showFrom},"Add a student")):l.a.createElement("h1",null,"Loading"))}}]),a}(n.Component),O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={name:"",roll:""},e.add=function(t){t.preventDefault();var a={Roll:e.state.roll,Name:e.state.name};p.a.post("http://127.0.0.1:5000/add",a).then((function(e){console.log(e),f.push("/getinfo")})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return localStorage.getItem("token")||f.push("/"),l.a.createElement("div",{style:{boxShadow:"2px solid black",height:"100vh"},className:"BgImage"},l.a.createElement(b,null),l.a.createElement(d.a,{style:{position:"absolute",left:"50%",top:"50%",width:"60vh",transform:"translate(-50%,-50%)",border:"1px solid black",padding:"1em",borderRadius:"1em",boxShadow:"2px 2px 2px 2px black",backgroundColor:"white"}},l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Name"),l.a.createElement("input",{placeholder:"Name",onChange:function(t){return e.setState({name:t.target.value})}})),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Roll No"),l.a.createElement("input",{placeholder:"Roll No",type:"text",onChange:function(t){return e.setState({roll:t.target.value})}})),l.a.createElement(g.a,{type:"submit",onClick:this.add,id:"Btn"},"Submit")))}}]),a}(n.Component),D=a(167),I=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={lec:"",sdate:"",edate:"",type:"",data:null},e.report=function(t){t.preventDefault(),console.log(e.state.sdate);var a={lec:e.state.lec.concat(e.state.type),sdate:e.state.sdate,edate:e.state.edate};p.a.post("http://127.0.0.1:5000/report",a).then((function(t){console.log(t.data);var a=[];console.log(typeof a),a=t.data.replace(/['"]+/g,""),console.log(a),e.setState({data:a})})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;console.log(this.state.data);var t=null;return localStorage.getItem("token")||f.push("/"),null!==this.state.data&&(t=l.a.createElement(D.CSVLink,{data:this.state.data},"Download me")),l.a.createElement("div",{style:{height:"100vh"},className:"BgImage"},l.a.createElement(b,null),l.a.createElement(d.a,{style:{position:"absolute",left:"50%",top:"50%",width:"60vh",transform:"translate(-50%,-50%)",border:"1px solid black",padding:"1em",borderRadius:"1em",boxShadow:"2px 2px 2px 2px black",backgroundColor:"white"}},l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Subject"),l.a.createElement("select",{onChange:function(t){return e.setState({lec:t.target.value})}},l.a.createElement("option",{value:"",selected:!0},"Select a specific lecture"),l.a.createElement("option",{value:"WDL-"},"WDL"),l.a.createElement("option",{value:"DBMS-"},"DBMS"),l.a.createElement("option",{value:"AA-"},"AA"),l.a.createElement("option",{value:"TCS-"},"TCS"))),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Type"),l.a.createElement("select",{onChange:function(t){return e.setState({type:t.target.value})}},l.a.createElement("option",{value:"",selected:!0},"Select the type of lecture"),l.a.createElement("option",{value:"T"},"Theory"),l.a.createElement("option",{value:"P"},"Practical"))),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"Start Date"),l.a.createElement("input",{type:"date",onChange:function(t){return e.setState({sdate:t.target.value})}})),l.a.createElement(d.a.Field,null,l.a.createElement("label",null,"End Date"),l.a.createElement("input",{type:"date",onChange:function(t){return e.setState({edate:t.target.value})}})),l.a.createElement(g.a,{type:"submit",onClick:this.report,id:"Btn"},"Submit"),l.a.createElement("br",null),t))}}]),a}(n.Component),A=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,{basename:"/"},l.a.createElement("div",{className:"App"},l.a.createElement(S.a,{exact:!0,path:"/",component:y}),l.a.createElement(S.a,{exact:!0,path:"/register",component:v}),l.a.createElement(S.a,{exact:!0,path:"/attendance",component:w}),l.a.createElement(S.a,{exact:!0,path:"/image",component:k}),l.a.createElement(S.a,{exact:!0,path:"/getinfo",component:j}),l.a.createElement(S.a,{exact:!0,path:"/add",component:O}),l.a.createElement(S.a,{exact:!0,path:"/report",component:I})))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(325);o.a.render(l.a.createElement(S.b,{history:f},l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){}},[[182,1,2]]]);
//# sourceMappingURL=main.3be5e31d.chunk.js.map