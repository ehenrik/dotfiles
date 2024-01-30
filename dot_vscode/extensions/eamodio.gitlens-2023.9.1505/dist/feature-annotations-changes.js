exports.id=817,exports.ids=[817],exports.modules={34:(t,e,n)=>{n.d(e,{GutterChangesAnnotationProvider:()=>GutterChangesAnnotationProvider});var i=n(9496),o=n(2540),r=n(1062),s=n(5148),a=n(4241),c=n(6004),u=n(6398),l=n(2022),h=n(623),d=Object.defineProperty,g=Object.getOwnPropertyDescriptor;const v=2**30;class GutterChangesAnnotationProvider extends l.HU{constructor(t,e,n){super(o.VP.Changes,t,e),this.container=n}state;hoverProviderDisposable;mustReopen(t){return this.annotationContext?.sha!==t?.sha||this.annotationContext?.only!==t?.only}clear(){this.state=void 0,null!=this.hoverProviderDisposable&&(this.hoverProviderDisposable.dispose(),this.hoverProviderDisposable=void 0),super.clear()}selection(t){return Promise.resolve()}validate(){return Promise.resolve(!0)}async onProvideAnnotation(t){const e=(0,c.UH)();this.mustReopen(t)&&this.clear(),this.annotationContext=t;let n,o=this.trackedDocument.uri.sha,r=null!=t?.sha&&t.sha!==o?`${t.sha}^`:void 0,s=null==o&&null==r;if(s){let t=await this.container.git.getOldestUnpushedRefForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri);if(null!=t)t=`${t}^`,n=await this.container.git.getCommitForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri,{ref:t}),null!=n?null!=r?r=t:(o=t,r=""):s=!1;else{const t=await this.container.git.getStatusForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri),e=t?.getPseudoCommits(this.container,await this.container.git.getCurrentUser(this.trackedDocument.uri.repoPath));e?.length?(n=await this.container.git.getCommitForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri),o="HEAD"):this.trackedDocument.dirty?o="HEAD":s=!1}}if(!s){if(n=await this.container.git.getCommitForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri,{ref:r??o}),null==n)return!1;null!=r||(o=`${n.ref}^`),r=n.ref}const a=(await Promise.all(null==r&&this.editor.document.isDirty?[this.container.git.getDiffForFileContents(this.trackedDocument.uri,o,this.editor.document.getText()),this.container.git.getDiffForFile(this.trackedDocument.uri,o,r)]:[this.container.git.getDiffForFile(this.trackedDocument.uri,o,r)])).filter((t=>Boolean(t)));if(!a?.length)return!1;const l=(0,u.k)(e),d=new Map,g=null!=t?.sha&&t?.only?await this.container.git.getBlame(this.trackedDocument.uri,this.editor?.document):void 0;let f;for(const e of a)for(const n of e.hunks){if(null!=g){let e=!0;const i=t.sha;for(let t=n.current.position.start-1;t<n.current.position.end;t++)g.lines[t]?.sha===i&&(e=!1);if(e)continue}let e=Math.max(n.current.position.start-2,-1),o=-1;for(const t of n.lines){if(o++,e++,"unchanged"===t.current?.state)continue;const r=this.editor.document.validateRange(new i.Range(new i.Position(e,0),new i.Position(e,v)));let s;if(null==f&&(f=new i.Selection(r.start,r.end)),null==t.current){const i=n.lines[o-1];if(null==t.previous||null!=i&&null==i.current){e--;continue}if(!(n.previous.count>n.current.count)){e--;continue}s="removed"}else if("added"===t.current?.state)s="removed"===t.previous?.state?"changed":"added";else if("removed"===t?.current.state){if(!(n.previous.count>n.current.count)){e--;continue}s="removed"}else s="changed";let a=d.get(s);null==a?(a={decorationType:"added"===s?h.Iq.changesLineAddedAnnotation:"removed"===s?h.Iq.changesLineDeletedAnnotation:h.Iq.changesLineChangedAnnotation,rangesOrOptions:[{range:r}]},d.set(s,a)):a.rangesOrOptions.push({range:r})}}return l?.restart({suffix:" to compute recent changes annotations"}),d.size&&(this.setDecorations([...d.values()]),l?.stop({suffix:" to apply all recent changes annotations"}),null!=f&&!1!==t?.selection&&(this.editor.selection=f,this.editor.revealRange(f,i.TextEditorRevealType.InCenterIfOutsideViewport))),this.state={commit:n,diffs:a},this.registerHoverProvider(),!0}registerHoverProvider(){const t=s.D.get("hovers");t.enabled&&t.annotations.enabled&&(this.hoverProviderDisposable=i.languages.registerHoverProvider({pattern:this.document.uri.fsPath},{provideHover:(t,e,n)=>this.provideHover(t,e,n)}))}async provideHover(t,e,n){if(null==this.state)return;if("line"!==s.D.get("hovers.annotations.over")&&0!==e.character)return;const{commit:o,diffs:a}=this.state;for(const n of a)for(const s of n.hunks){const n="changed"===s.state&&s.previous.count>s.current.count;if(e.line>=s.current.position.start-1&&e.line<=s.current.position.end-(n?0:1)){const a=await(0,r.yq)(o,this.trackedDocument.uri,e.line,s);if(null==a)return;return new i.Hover(a,t.validateRange(new i.Range(s.current.position.start-1,0,s.current.position.end-(n?0:1),v)))}}}}((t,e,n,i)=>{for(var o,r=i>1?void 0:i?g(e,n):e,s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);i&&r&&d(e,n,r)})([(0,a.cM)()],GutterChangesAnnotationProvider.prototype,"onProvideAnnotation",1)}};