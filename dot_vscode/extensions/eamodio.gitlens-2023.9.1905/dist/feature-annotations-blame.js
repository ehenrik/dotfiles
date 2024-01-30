exports.id=519,exports.ids=[519],exports.modules={8178:(e,t,n)=>{n.d(t,{d:()=>BlameAnnotationProviderBase});var o=n(9496),a=n(7462),r=n(1062),i=n(5148),s=n(4241),l=n(2022),c=n(248),h=Object.defineProperty,g=Object.getOwnPropertyDescriptor;class BlameAnnotationProviderBase extends l.HU{constructor(e,t,n,o){super(e,t,n),this.container=o,this.blame=this.container.git.getBlame(this.trackedDocument.uri,t.document),t.document.isDirty&&n.setForceDirtyStateChangeOnNextDocumentChange()}blame;hoverProviderDisposable;clear(){null!=this.hoverProviderDisposable&&(this.hoverProviderDisposable.dispose(),this.hoverProviderDisposable=void 0),super.clear()}async validate(){const e=await this.blame;return null!=e&&0!==e.lines.length}async getBlame(){const e=await this.blame;if(null!=e&&0!==e.lines.length)return e}getComputedHeatmap(e){const t=[];let n,o;for(const a of e.lines)o!==a.sha&&(o=a.sha,n=e.commits.get(a.sha),null!=n&&t.push(n.date));t.sort(((e,t)=>e.getTime()-t.getTime()));const a=new Date;a.setDate(a.getDate()-(i.D.get("heatmap.ageThreshold")||90));const r=a.getTime(),s=[],l=[];for(const e of t)e.getTime()<r?l.push(e):s.push(e);let h;h=s.length&&l.length?{hot:u(s),cold:u(l)}:u(t);const g=(e,t)=>Array.isArray(h)?h:t?h.hot.concat(h.cold):e.getTime()<r?h.cold:h.hot,d=(e,t)=>{const n=e.getTime();let o=0;for(let e=0;e<t.length&&(o=e,!(n>=t[e]));e++);return o};return{coldThresholdTimestamp:r,colors:(0,c.HM)(),computeRelativeAge:e=>d(e,g(e)),computeOpacity:e=>{const t=g(e,!0),n=d(e,t);return Math.max(.2,Math.round(100*(1-n/t.length))/100)}}}registerHoverProviders(e){const t=i.D.get("hovers");t.enabled&&t.annotations.enabled&&(e.details||e.changes)&&(this.hoverProviderDisposable=o.languages.registerHoverProvider({pattern:this.document.uri.fsPath},{provideHover:(t,n,o)=>this.provideHover(e,t,n,o)}))}async provideHover(e,t,n,s){if("line"!==i.D.get("hovers.annotations.over")&&0!==n.character)return;if(this.document.uri.toString()!==t.uri.toString())return;const l=await this.getBlame();if(null==l)return;const c=l.lines[n.line],h=l.commits.get(c.sha);if(null==h)return;const g=(await Promise.all([e.details?this.getDetailsHoverMessage(h,t):void 0,e.changes?(0,r.jw)(h,await a.YY.fromUri(t.uri),n.line,t):void 0])).filter((e=>Boolean(e)));return new o.Hover(g,t.validateRange(new o.Range(n.line,0,n.line,1073741824)))}async getDetailsHoverMessage(e,t){let n=this.editor.selection.active.line;const o=n+1;n=(e.lines.find((e=>e.line===o))??e.lines[0]).originalLine-1;const s=i.D.get("hovers");return(0,r.nN)(e,await a.YY.fromUri(t.uri),n,{autolinks:s.autolinks.enabled,dateFormat:i.D.get("defaultDateFormat"),format:s.detailsMarkdownFormat,pullRequests:{enabled:s.pullRequests.enabled}})}}function u(e){const t=[],n=Math.floor(e.length/2),o=e.length%2?e[n].getTime():(e[n-1].getTime()+e[n].getTime())/2;let a=(e[e.length-1].getTime()-o)/5;for(let e=5;e>0;e--)t.push(o+a*e);t.push(o);a=(o-e[0].getTime())/4;for(let e=1;e<=4;e++)t.push(o-a*e);return t}((e,t,n,o)=>{for(var a,r=o>1?void 0:o?g(t,n):t,i=e.length-1;i>=0;i--)(a=e[i])&&(r=(o?a(t,n,r):a(r))||r);o&&r&&h(t,n,r)})([(0,s.cM)({args:!1})],BlameAnnotationProviderBase.prototype,"getComputedHeatmap",1)},4455:(e,t,n)=>{n.d(t,{GutterBlameAnnotationProvider:()=>GutterBlameAnnotationProvider});var o=n(9496),a=n(2540),r=n(5255),i=n(9338),s=n(2800),l=n(5148),c=n(4241),h=n(3105),g=n(6004),u=n(6398),d=n(4627),p=n(248),m=n(8178),v=n(623),f=Object.defineProperty,D=Object.getOwnPropertyDescriptor,b=(e,t,n,o)=>{for(var a,r=o>1?void 0:o?D(t,n):t,i=e.length-1;i>=0;i--)(a=e[i])&&(r=(o?a(t,n,r):a(r))||r);return o&&r&&f(t,n,r),r};class GutterBlameAnnotationProvider extends m.d{constructor(e,t,n){super(a.VP.Blame,e,t,n)}clear(){if(super.clear(),null!=v.Iq.gutterBlameHighlight)try{this.editor.setDecorations(v.Iq.gutterBlameHighlight,[])}catch{}}async onProvideAnnotation(e,t){const n=(0,g.UH)();this.annotationContext=e;const a=await this.getBlame();if(null==a)return!1;const s=(0,u.k)(n),c=l.D.get("blame"),h=(0,d.Gg)(c.format).reduce(((e,t)=>(e[t.key]=t.options,e)),Object.create(null));let m;i.i.has(c.format,"tips")&&(m=await this.container.git.getBranchesAndTagsTipsFn(a.repoPath));const f={dateFormat:null===c.dateFormat?l.D.get("defaultDateFormat"):c.dateFormat,getBranchAndTagTips:m,tokenOptions:h},D=c.avatars,b=l.D.get("defaultGravatarsStyle"),y=c.separateLines,P=(0,p.Vz)(y,c.heatmap,c.avatars,c.format,f),w=[],B=new Map,x=D?new Map:void 0;let T,H,A,O,M=!1;c.heatmap.enabled&&(O=this.getComputedHeatmap(a));for(const e of a.lines){const t=e.line-1;if(A!==e.sha)M=!1,A=e.sha,T=a.commits.get(e.sha),null!=T&&(H=B.get(e.sha),null==H?(H=(0,p.U5)(T,c.format,f,P),null!=O&&(0,p.iF)(H,T.date,O),H.range=new o.Range(t,0,t,0),w.push(H),D&&null!=T.author.email&&await this.applyAvatarDecoration(T,H,b,x),B.set(e.sha,H)):(H={...H,range:new o.Range(t,0,t,0)},w.push(H)));else{if(null==H)continue;H={...H},c.compact&&!M&&(H.renderOptions={before:{...H.renderOptions.before,contentText:r.NE.Space.repeat((0,d.dz)(H.renderOptions.before.contentText))}},y&&(H.renderOptions.before.textDecoration="none;box-sizing: border-box"+(D?";padding: 0 0 0 18px":"")),M=!0),H.range=new o.Range(t,0,t,0),w.push(H)}}return s?.restart({suffix:" to compute gutter blame annotations"}),w.length&&(this.setDecorations([{decorationType:v.Iq.gutterBlameAnnotation,rangesOrOptions:w}]),s?.stop({suffix:" to apply all gutter blame annotations"})),this.registerHoverProviders(l.D.get("hovers.annotations")),!0}async selection(e,t){if(!1===e||null==v.Iq.gutterBlameHighlight)return;if(null==t&&(t=await this.blame,!t?.lines.length))return;let n;if(null!=e?.sha)n=e.sha;else if(null!=e?.line){if(e.line>=0){const o=t.lines[e.line];n=o?.sha}}else n=(0,h.Ps)(t.commits.values())?.sha;if(!n)return void this.editor.setDecorations(v.Iq.gutterBlameHighlight,[]);const a=(0,s.DZ)(t.lines,(e=>e.sha===n?this.editor.document.validateRange(new o.Range(e.line-1,0,e.line-1,1073741824)):void 0));this.editor.setDecorations(v.Iq.gutterBlameHighlight,a)}async applyAvatarDecoration(e,t,n,o){let a=o.get(e.author.email??"");if(null==a){const t=(await e.getAvatarUri({defaultStyle:n,size:16})).toString(!0);a={contentText:"",height:"16px",width:"16px",textDecoration:`none;position:absolute;top:1px;left:5px;background:url(${encodeURI(t)});background-size:16px 16px;margin-left: 0 !important`},o.set(e.author.email??"",a)}t.renderOptions.after=a}}b([(0,c.cM)()],GutterBlameAnnotationProvider.prototype,"onProvideAnnotation",1),b([(0,c.cM)({args:!1})],GutterBlameAnnotationProvider.prototype,"selection",1)}};