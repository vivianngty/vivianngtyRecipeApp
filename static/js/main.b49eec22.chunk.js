(this.webpackJsonprecipe_app=this.webpackJsonprecipe_app||[]).push([[0],{17:function(e,t,c){},42:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),i=c(33),s=c.n(i),o=(c(42),c(36)),u=c(34),p=c(19),h=c(2),l=c.n(h),j=c(9),b=c(3),d=c(4),O=c(6),x=c(5),m=c(7),f=c(10),v=c(8),g=c.n(v),y=(c(17),function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"API Reference: "}),Object(n.jsx)("button",{type:"button",onClick:function(e){return window.open("https://spoonacular.com/food-api")},children:"Spoonacular"})]})})}}]),c}(r.a.Component)),k=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getAfrican",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=african",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=african");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getAfrican()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),S=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getChinese",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=chinese",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=chinese");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getChinese()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),w=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getAmerican",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=american",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=american");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getAmerican()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),C=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getBritish",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=british",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=british");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getBritish()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),K=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getCajun",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=cajun",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=cajun");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getCajun()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),M=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getCaribbean",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=caribbean",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=caribbean");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getCaribbean()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),D=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getEasternEuropean",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=easterneuropean",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=easterneuropean");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getEasternEuropean()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),I=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getEuropean",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=european",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=european");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getEuropean()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),E=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getFrench",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=french",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=french");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getFrench()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),A=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getGerman",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=german",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=german");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getGerman()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),N=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getGreek",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=greek",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=greek");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getGreek()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),J=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getIndian",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=indian",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=indian");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getIndian()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),G=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getIrish",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=irish",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=irish");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getIrish()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),R=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getItalian",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=italian",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=italian");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getItalian()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),F=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getJapanese",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=japanese",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=japanese");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getJapanese()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),L=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getJewish",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=jewish",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=jewish");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getJewish()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),B=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getKorean",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=korean",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=korean");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getKorean()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),T=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getLatinAmerican",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=LatinAmerican",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=LatinAmerican");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getLatinAmerican()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),V=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getMiddleEastern",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=middleeastern",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=middleeastern");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getMiddleEastern()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),P=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getAfrican",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=Mexican",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=Mexican");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getMexican()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),W=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getMediterranean",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=Mediterranean",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=Mediterranean");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getMediterranean()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),_=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getSpanish",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=Spanish",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=Spanish");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getSpanish()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),z=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getThai",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=thai",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=thai");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getThai()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),H=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getVietnamese",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=Vietnamese",e.prev=1,e.next=4,g.a.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine=Vietnamese");case 4:t=e.sent,console.log(t.data),this.setState({recipes:t.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getVietnamese()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.recipes&&this.state.recipes.results.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("img",{src:e.image})]})}))})}}]),c}(r.a.Component),q=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){return Object(b.a)(this,c),t.call(this,e)}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(m.a,{children:[Object(n.jsxs)("ul",{className:"cuisine-nav",children:[Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/African",children:"African"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/American",children:"American"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/British",children:"British"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Cajun",children:"Cajun"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Chinese",children:"Chinese"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Caribbean",children:"Caribbean"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/EasternEuropean",children:"Eastern European"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/European",children:"European"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/French",children:"French"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/German",children:"German"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Greek",children:"Greek"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Indian",children:"Indian"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Irish",children:"Irish"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Italian",children:"Italian"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Japanese",children:"Japanese"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Jewish",children:"Jewish"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Korean",children:"Korean"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/LatinAmerican",children:"Latin American"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Mediterranean",children:"Mediterranean"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Mexican",children:"Mexican"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/MiddleEastern",children:"Middle Eastern"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Spanish",children:"Spanish"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Thai",children:"Thai"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/Vietnamese",children:"Vietnamese"})})]}),Object(n.jsxs)(f.c,{children:[Object(n.jsx)(f.a,{path:"/African",children:Object(n.jsx)(k,{})}),Object(n.jsx)(f.a,{path:"/Chinese",children:Object(n.jsx)(S,{})}),Object(n.jsx)(f.a,{path:"/American",children:Object(n.jsx)(w,{})}),Object(n.jsx)(f.a,{path:"/British",children:Object(n.jsx)(C,{})}),Object(n.jsx)(f.a,{path:"/Cajun",children:Object(n.jsx)(K,{})}),Object(n.jsx)(f.a,{path:"/Caribbean",children:Object(n.jsx)(M,{})}),Object(n.jsx)(f.a,{path:"/EasternEuropean",children:Object(n.jsx)(D,{})}),Object(n.jsx)(f.a,{path:"/European",children:Object(n.jsx)(I,{})}),Object(n.jsx)(f.a,{path:"/French",children:Object(n.jsx)(E,{})}),Object(n.jsx)(f.a,{path:"/German",children:Object(n.jsx)(A,{})}),Object(n.jsx)(f.a,{path:"/Greek",children:Object(n.jsx)(N,{})}),Object(n.jsx)(f.a,{path:"/Indian",children:Object(n.jsx)(J,{})}),Object(n.jsx)(f.a,{path:"/Irish",children:Object(n.jsx)(G,{})}),Object(n.jsx)(f.a,{path:"/Italian",children:Object(n.jsx)(R,{})}),Object(n.jsx)(f.a,{path:"/Japanese",children:Object(n.jsx)(F,{})}),Object(n.jsx)(f.a,{path:"/Jewish",children:Object(n.jsx)(L,{})}),Object(n.jsx)(f.a,{path:"/Korean",children:Object(n.jsx)(B,{})}),Object(n.jsx)(f.a,{path:"/LatinAmerican",children:Object(n.jsx)(T,{})}),Object(n.jsx)(f.a,{path:"/Mediterranean",children:Object(n.jsx)(W,{})}),Object(n.jsx)(f.a,{path:"/Mexican",children:Object(n.jsx)(P,{})}),Object(n.jsx)(f.a,{path:"/MiddleEastern",children:Object(n.jsx)(V,{})}),Object(n.jsx)(f.a,{path:"/Spanish",children:Object(n.jsx)(_,{})}),Object(n.jsx)(f.a,{path:"/Thai",children:Object(n.jsx)(z,{})}),Object(n.jsx)(f.a,{path:"/Vietnamese",children:Object(n.jsx)(H,{})})]})]})})}}]),c}(r.a.Component),Q=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("h1",{children:"Welcome!"})})}}]),c}(r.a.Component),U=c.p+"static/media/fridge.af600c7e.png",X=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Welcome to recipe-land"}),Object(n.jsx)("br",{}),Object(n.jsx)("h1",{children:"Don't know what to cook? No worries. We gotchu!"}),Object(n.jsx)("img",{className:"fridgeImage",src:U,alt:"fridge-image"})]})}}]),c}(r.a.Component),Y="https://api.spoonacular.com/recipes/random?apiKey=0948bc163b8946b7babe602438de08d4&number=10";console.log(Y);var Z=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){return Object(b.a)(this,c),t.call(this,e)}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(Q,{}),Object(n.jsx)(m.a,{children:Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/",className:"home-nav",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/randomrecipe",className:"randomrecipe-nav",children:"Get random recipe"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/searchbyingredients",className:"searchbyingredients-nav",children:"Search by ingredients"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/searchbycuisine",className:"searchbycuisine-nav",children:"Search by Cuisine"})})]}),Object(n.jsx)("hr",{className:"line"}),Object(n.jsxs)(f.c,{children:[Object(n.jsx)(f.a,{path:"/randomrecipe",children:Object(n.jsx)(ee,{})}),Object(n.jsx)(f.a,{path:"/searchbyingredients",exact:!0,children:Object(n.jsx)(te,{})}),Object(n.jsx)(f.a,{path:"/searchbyingredients/:id",component:ce}),Object(n.jsx)(f.a,{path:"/searchbycuisine",exact:!0,children:Object(n.jsx)(q,{})}),Object(n.jsx)(f.a,{path:"/",exact:!0,children:Object(n.jsx)($,{})})]})]})}),Object(n.jsx)(y,{})]})}}]),c}(r.a.Component),$=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(X,{})})}}]),c}(r.a.Component),ee=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"getRandomRecipes",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(Y);case 3:t=e.sent,this.setState({recipes:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getRandomRecipes()}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"randomRecipesCards",children:this.state.recipes&&this.state.recipes.recipes.map((function(e){return Object(n.jsx)("div",{className:"cards",children:Object(n.jsxs)("div",{className:"individualRandomRecipe",children:[Object(n.jsxs)("h3",{children:[" \ud83c\udf7d\ufe0f ",e.title," "]}),Object(n.jsxs)("h4",{children:[" Servings: ",e.servings," "]}),Object(n.jsxs)("figure",{children:[" ",Object(n.jsx)("img",{src:e.image})," "]}),Object(n.jsx)("p",{children:e.instructions})]},e.id)})}))})}}]),c}(r.a.Component),te=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(b.a)(this,c),n=t.call(this,e),console.log(e),n.state={},n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.onChange=n.onChange.bind(Object(p.a)(n)),n}return Object(d.a)(c,[{key:"getInformation",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.spoonacular.com/recipes/findByIngredients?apiKey=0948bc163b8946b7babe602438de08d4&ingredients="+this.state.ingredient,console.log(t),e.prev=2,e.next=5,g.a.get(t);case 5:c=e.sent,this.setState({recipes:c.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0,e.t0.message);case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"onSubmit",value:function(e){e.preventDefault(),this.getInformation()}},{key:"onChange",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{className:"App-header",children:Object(n.jsxs)("form",{onSubmit:this.onSubmit,onChange:this.onChange,children:[Object(n.jsxs)("label",{children:["Ingredient: ",Object(n.jsx)("input",{type:"text",name:"ingredient"})]}),Object(n.jsx)("input",{type:"submit",value:"Search"})]})}),this.state.recipes&&this.state.recipes.map((function(e){return Object(n.jsx)("div",{className:"randomRecipesCards",children:Object(n.jsx)("div",{className:"cards",children:Object(n.jsxs)("div",{className:"individualRandomRecipe",children:[Object(n.jsx)("h3",{children:Object(n.jsxs)(m.b,{to:"/searchbyingredients/".concat(e.id),children:[" ",e.title," "]})},e.id),Object(n.jsxs)("figure",{children:[" ",Object(n.jsx)("img",{src:e.image})," "]})]})})})}))]})}}]),c}(r.a.Component);function ce(e){var t=e.match;Object(a.useEffect)((function(){s(),console.log(t)}),[]);var c=Object(a.useState)({}),r=Object(o.a)(c,2),i=(r[0],r[1]),s=function(){var e=Object(j.a)(l.a.mark((function e(){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spoonacular.com/recipes/".concat(t.params.id,"/analyzedInstructions?apiKey=0948bc163b8946b7babe602438de08d4"));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,i(n.data),console.log(n[0]),console.log(n[0].steps[0].step);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{children:Object(n.jsx)("h3",{children:"Detail"})})}var ne=Z,ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(ne,{})}),document.getElementById("root")),ae()}},[[67,1,2]]]);
//# sourceMappingURL=main.b49eec22.chunk.js.map