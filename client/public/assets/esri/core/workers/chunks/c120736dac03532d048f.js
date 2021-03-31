self.webpackChunkRemoteClient([200],{424:function(e,t,r){"use strict";r.r(t);var i,s=r(18),a=(r(7),r(5)),l=r(9),o=(r(3),r(4),r(20)),n=r(52),c=r(19),u=r(51),p=r(14),d=r(24),m=(r(34),r(35),r(2)),y=r(57),h=r(58),f=r(55),b=r(80),g=r(83),O=r(84),w=r(98),j=r(128),v=r(95),x=r(166),I=r(124),M=r(126),S=r(516),T=r(331),L=r(50);let E=i=class extends L.a{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new i;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};Object(s.a)([Object(o.b)({type:y.a,json:{read:{source:"fullExtent"}}})],E.prototype,"fullExtent",void 0),Object(s.a)([Object(o.b)({type:String,json:{read:{source:"id"}}})],E.prototype,"id",void 0),Object(s.a)([Object(o.b)({type:M.a,json:{read:{source:"tileInfo"}}})],E.prototype,"tileInfo",void 0),E=i=Object(s.a)([Object(c.a)("esri.layer.support.TileMatrixSet")],E);var P,F=E;let C=P=class extends L.a{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new P;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};Object(s.a)([Object(o.b)({json:{read:{source:"id"}}})],C.prototype,"id",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"title"}}})],C.prototype,"title",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"abstract"}}})],C.prototype,"description",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"legendUrl"}}})],C.prototype,"legendUrl",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"isDefault"}}})],C.prototype,"isDefault",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"keywords"}}})],C.prototype,"keywords",void 0),C=P=Object(s.a)([Object(c.a)("esri.layer.support.WMTSStyle")],C);var _,R=C;let V=_=class extends L.a{constructor(e){super(e),this.fullExtent=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?y.a.fromJSON(e):null}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find(e=>e.id===this.tileMatrixSetId):null}clone(){const e=new _;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};Object(s.a)([Object(o.b)()],V.prototype,"description",null),Object(s.a)([Object(o.b)()],V.prototype,"fullExtent",void 0),Object(s.a)([Object(n.a)("fullExtent",["fullExtent"])],V.prototype,"readFullExtent",null),Object(s.a)([Object(o.b)({dependsOn:["imageFormats"]})],V.prototype,"imageFormat",null),Object(s.a)([Object(o.b)({json:{read:{source:"formats"}}})],V.prototype,"imageFormats",void 0),Object(s.a)([Object(o.b)()],V.prototype,"id",void 0),Object(s.a)([Object(o.b)()],V.prototype,"layer",void 0),Object(s.a)([Object(o.b)({dependsOn:["styles"]})],V.prototype,"styleId",null),Object(s.a)([Object(o.b)({type:h.a.ofType(R),json:{read:{source:"styles"}}})],V.prototype,"styles",void 0),Object(s.a)([Object(o.b)({value:null,json:{write:{ignoreOrigin:!0}}})],V.prototype,"title",null),Object(s.a)([Object(o.b)()],V.prototype,"tileMatrixSetId",void 0),Object(s.a)([Object(o.b)({readOnly:!0,dependsOn:["tileMatrixSetId"]})],V.prototype,"tileMatrixSet",null),Object(s.a)([Object(o.b)({type:h.a.ofType(F),json:{read:{source:"tileMatrixSets"}}})],V.prototype,"tileMatrixSets",void 0),V=_=Object(s.a)([Object(c.a)("esri.layers.support.WMTSSublayer")],V);var A=V,U=r(376),k=r(56),N=r(64),W=r(338);const B=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function D(e,t){const r=t.getElementsByTagName(e);return r&&r.length>0?r[0]:null}function K(e,t){return Array.prototype.slice.call(t.getElementsByTagName(e)).map(e=>e.textContent)}function H(e,t){return e.split(">").forEach(e=>{t&&(t=D(e,t))}),t&&t.textContent}function G(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some(i=>{if(i.nodeName.indexOf(e)>-1){const e=D(t,i),a=e&&e.textContent;if(a===r||r.split(":")&&r.split(":")[1]===a)return s=i,!0}return!1}),s}function q(e,t){const r=[],i=e.layerMap.get(t);if(!i)return;const s=Array.prototype.slice.call(i.getElementsByTagName("ResourceURL")),a=i.getElementsByTagName("Dimension");let l,o,n,c;return a.length&&(l=H("Identifier",a[0]),o=K("Default",a[0])||K("Value",a[0])),a.length>1&&(n=H("Identifier",a[1]),c=K("Default",a[1])||K("Value",a[1])),e.dimensionMap.set(t,{dimensions:o,dimensions2:c}),s.forEach(e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(l&&o.length)if(t.indexOf("{"+l+"}")>-1)t=t.replace("{"+l+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+l.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+l.length+2))}if(n&&c.length)if(t.indexOf("{"+n+"}")>-1)t=t.replace("{"+n+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+n.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}}),r}function J(e,t,r,i){const s=H("Identifier",e),a=H("ScaleDenominator",e).split("E").map(e=>Number(e));let l;l=a.length>1?a[0]*Math.pow(10,a[1]):a[0];const o=z(t,l,i);return l*=1.058267716535433,{level:r,levelValue:s,scale:l,resolution:o}}function z(e,t,r){let i;return i=U.a.hasOwnProperty(String(e))?U.a.values[U.a[e]]:"default028mm"===r?6370997*Math.PI/180:Object(W.f)(e).metersPerDegree,7*t/25e3/i}const X={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},Y=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let Q=class extends(Object(j.a)(Object(x.a)(Object(I.a)(Object(w.a)(Object(v.a)(Object(O.a)(g.a))))))){constructor(...e){super(...e),this._sublayersHandles=new b.a,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.watch("activeLayer",(e,t)=>{t&&(t.layer=null),e&&(e.layer=this)},!0),this.watch("sublayers",(e,t)=>{t&&(t.forEach(e=>{e.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach(e=>{e.layer=this}),this._sublayersHandles||(this._sublayersHandles=new b.a),this._sublayersHandles.add([e.on("after-add",({item:e})=>{e.layer=this}),e.on("after-remove",({item:e})=>{e.layer=null})]))},!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>this._fetchService(e)).catch(e=>{throw new p.a("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})})),Object(m.s)(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){let i;return this.activeLayer?t.layers.some(e=>e.id===this.activeLayer.id&&(i=e,!0)):(this.activeLayer=new A,i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,a=i&&i.layerIdentifier;let l=null;const o=i&&i.tileMatrixSet;o&&(Array.isArray(o)?o.length&&(l=o[0]):l=o);const n=s&&s.format,c=s&&s.style;return new A({id:a,imageFormat:n,styleId:c,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const a=Object(l.b)("tileMatrixSet.tileInfo",s);t.tileInfo=a?a.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){const e=[];return this.activeLayer.tileMatrixSets.forEach(t=>{t.fullExtent&&e.push(t.fullExtent)}),e}readServiceMode(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function(e,t){return e.map(e=>{const r=new A;return r.read(e,t),r})}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map(e=>e.tileInfo.spatialReference).toArray()}get title(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title")}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,s=new S.a({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new T.default({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}fetchTile(e,t,r){const i=this.getTileUrl(e,t,r);return Object(f.default)(i,{responseType:"image"}).then(e=>e.data)}findSublayerById(e){return this.sublayers.find(t=>t.id===e)}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],s=i?i.levelValue?i.levelValue:""+i.level:""+e;let a=this.resourceInfo?"":function(e,t,r,i,s,a,l,o){const{dimensionMap:n}=e,c=q(e,t),u=n.get(t).dimensions&&n.get(t).dimensions[0],p=n.get(t).dimensions2&&n.get(t).dimensions2[0];let d="";if(c&&c.length>0){let e=null;c.some(t=>t.format===i&&(e=t,!0)),e||(e=c[l%c.length]),d=e.template.replace(/\{Style\}/gi,s).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,a).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+o).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,p)}return d}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return a||(a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,""+t).replace(/\{col\}/gi,""+r)),a=this._appendCustomLayerParameters(a),a}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=function(e,t,r,i){const{dimensionMap:s}=e,a=q(e,t);let l="";if(a&&a.length>0){const e=s.get(t).dimensions&&s.get(t).dimensions[0],o=s.get(t).dimensions2&&s.get(t).dimensions2[0];l=a[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=l.replace(/\{Style\}/gi,i),l=l.replace(/\{TileMatrixSet\}/gi,r),l=l.replace(/\{TileMatrix\}/gi,"{level}"),l=l.replace(/\{TileRow\}/gi,"{row}"),l=l.replace(/\{TileCol\}/gi,"{col}"),l=l.replace(/\{dimensionValue\}/gi,e),l=l.replace(/\{dimensionValue2\}/gi,o)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return X[r.toLowerCase()]&&(s=X[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e)}catch{const r="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),this.serviceMode=r}catch(e){throw new p.a("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e})}}this.resourceInfo?t.data=function(e){return e.layers.forEach(e=>{e.tileMatrixSets.forEach(e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach(r=>{r.scale=96*r.scale/t.dpi,r.resolution=z(t.spatialReference.wkid,90.71428571428571*r.scale/96,e.id)}),t.dpi=96)})}),e}(t.data):t.data=function(e,t){e=e.replace(/ows:/gi,"");const r=(new DOMParser).parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,a=D("Contents",r);if(!a)throw new p.a("wmtslayer:wmts-capabilities-xml-is-not-valid");const l=D("OperationsMetadata",r),o=l&&l.querySelector("[name='GetTile']"),n=o&&o.getElementsByTagName("Get"),c=n&&Array.prototype.slice.call(n),u=t&&t.url&&t.url.indexOf("https")>-1;let d,m,h=t.serviceMode,f=t&&t.url;if(c&&c.length&&c.some(e=>{const t=D("Constraint",e);return!t||G("AllowedValues","Value",h,t)?(f=e.attributes[0].nodeValue,!0):(!t||G("AllowedValues","Value","RESTful",t)||G("AllowedValues","Value","REST",t)?m=e.attributes[0].nodeValue:t&&!G("AllowedValues","Value","KVP",t)||(d=e.attributes[0].nodeValue),!1)}),!f)if(m)f=m,h="RESTful";else if(d)f=d,h="KVP";else{const e=D("ServiceMetadataURL",r);f=e&&e.getAttribute("xlink:href")}const b=f.indexOf("1.0.0/");return-1===b&&"RESTful"===h?f+="/":b>-1&&(f=f.substring(0,b)),"KVP"===h&&(f+=b>-1?"":"?"),u&&(f=f.replace(/^http:/i,"https:")),{copyright:H("ServiceIdentification>AccessConstraints",r),layers:Array.prototype.slice.call(a.getElementsByTagName("Layer")).map(e=>{const t=H("Identifier",e);return i.set(t,e),function(e,t,r,i){const s=H("Abstract",t),a=K("Format",t),l=function(e){const t=D("WGS84BoundingBox",e),r=t?H("LowerCorner",t).split(" "):["-180","-90"],i=t?H("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}(t),o=function(e,t){return Array.prototype.slice.call(e.getElementsByTagName("Style")).map(e=>{const r=D("LegendURL",e),i=D("Keywords",e),s=i&&K("Keyword",i);let a=r&&r.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:H("Abstract",e),id:H("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:s,legendUrl:a,title:H("Title",e)}})}(t,i),n=H("Title",t),c=function(e,t){return K("TileMatrixSet",e).map(r=>function(e,t,r){const i=K("TileMatrix",G("TileMatrixSetLink","TileMatrixSet",e,t)),s=G("TileMatrixSet","Identifier",e,r),a=function(e){let t=H("SupportedCRS",e);t&&(t=t.toLowerCase());let r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);let i=!1;t.indexOf("crs84")>-1||t.indexOf("crs:84")>-1?(r=4326,i=!0):t.indexOf("crs83")>-1||t.indexOf("crs:83")>-1?(r=4269,i=!0):(t.indexOf("crs27")>-1||t.indexOf("crs:27")>-1)&&(r=4267,i=!0);const s=new k.a({wkid:r}),a=H("TopLeftCorner",D("TileMatrix",e)).split(" "),l=a[0].split("E").map(e=>Number(e)),o=a[1].split("E").map(e=>Number(e));let n,c=l[0],u=o[0];l.length>1&&(c=l[0]*Math.pow(10,l[1])),o.length>1&&(u=o[0]*Math.pow(10,o[1]));const p=i&&4326===r&&90===c&&-180===u;return B.some((e,a)=>{const l=Number(t.split(":").pop());return l>=e[0]&&l<=e[1]||4326===r&&(!i||p)?(n=new N.a(u,c,s),!0):(a===B.length-1&&(n=new N.a(c,u,s)),!1)}),n}(s),l=a.spatialReference,o=l.wkid,n=D("TileMatrix",s),c=[parseInt(H("TileWidth",n),10),parseInt(H("TileHeight",n),10)],u=[];i.length?i.forEach((t,r)=>{const i=G("TileMatrix","Identifier",t,s);u.push(J(i,o,r,e))}):Array.prototype.slice.call(s.getElementsByTagName("TileMatrix")).forEach((t,r)=>{u.push(J(t,o,r,e))});const p=function(e,t,r,i){const s=D("BoundingBox",e);let a,l,o,n,c,u;if(s&&(a=H("LowerCorner",s).split(" "),l=H("UpperCorner",s).split(" ")),a&&a.length>1&&l&&l.length>1)o=parseFloat(a[0]),c=parseFloat(a[1]),n=parseFloat(l[0]),u=parseFloat(l[1]);else{const s=D("TileMatrix",e),a=parseFloat(H("MatrixWidth",s)),l=parseFloat(H("MatrixHeight",s));o=t.x,u=t.y,n=o+a*r[0]*i.resolution,c=u-l*r[1]*i.resolution}return new y.a(o,c,n,u,t.spatialReference)}(s,a,c,u[0]);return{id:e,fullExtent:p.toJSON(),tileInfo:new M.a({dpi:96,spatialReference:l,size:c,origin:a,lods:u}).toJSON()}}(r,e,t))}(t,r);return{id:e,fullExtent:l,description:s,formats:a,styles:o,title:n,tileMatrixSets:c}}(t,e,a,u)}),tileUrl:f,serviceMode:h,layerMap:i,dimensionMap:s}}(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await Object(f.default)(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find(t=>t.id===e)}_appendCustomParameters(e){if(this.customParameters)for(const t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e}_appendCustomLayerParameters(e){if(this.customLayerParameters||this.customParameters){const t={...Object(a.a)(this.customParameters||{}),...this.customLayerParameters};for(const r in t)e+=(-1===e.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(t[r])}return e}_getCapabilitiesUrl(e){let t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t}_getLowerCasedUrlParams(e){if(!e)return null;const t=Object(d.I)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach(e=>{r[e.toLowerCase()]=t[e]}),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?Object(a.a)(e):{},t.forEach(t=>{e.hasOwnProperty(t)||Y.has(t)||(e[t]=r[t])}))}return e}};Object(s.a)([Object(o.b)()],Q.prototype,"dimensionMap",void 0),Object(s.a)([Object(o.b)()],Q.prototype,"layerMap",void 0),Object(s.a)([Object(o.b)({type:A,dependsOn:["sublayers"],json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],Q.prototype,"activeLayer",null),Object(s.a)([Object(n.a)("service","activeLayer",["layers"])],Q.prototype,"readActiveLayerFromService",null),Object(s.a)([Object(n.a)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],Q.prototype,"readActiveLayerFromItemOrWebDoc",null),Object(s.a)([Object(u.a)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:M.a},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],Q.prototype,"writeActiveLayer",null),Object(s.a)([Object(o.b)({type:String,value:"",json:{write:!0}})],Q.prototype,"copyright",void 0),Object(s.a)([Object(o.b)({type:["show","hide"]})],Q.prototype,"listMode",void 0),Object(s.a)([Object(o.b)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],Q.prototype,"customParameters",void 0),Object(s.a)([Object(n.a)("web-document","customParameters"),Object(n.a)("portal-item","customParameters")],Q.prototype,"readCustomParameters",null),Object(s.a)([Object(o.b)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],Q.prototype,"customLayerParameters",void 0),Object(s.a)([Object(o.b)({type:y.a,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],Q.prototype,"fullExtent",void 0),Object(s.a)([Object(o.b)({readOnly:!0,dependsOn:["activeLayer"]})],Q.prototype,"fullExtents",null),Object(s.a)([Object(o.b)({type:["WebTiledLayer"]})],Q.prototype,"operationalLayerType",void 0),Object(s.a)([Object(o.b)()],Q.prototype,"resourceInfo",void 0),Object(s.a)([Object(o.b)()],Q.prototype,"serviceMode",void 0),Object(s.a)([Object(n.a)(["portal-item","web-document"],"serviceMode",["templateUrl"])],Q.prototype,"readServiceMode",null),Object(s.a)([Object(o.b)({type:h.a.ofType(A)})],Q.prototype,"sublayers",void 0),Object(s.a)([Object(n.a)("service","sublayers",["layers"])],Q.prototype,"readSublayersFromService",null),Object(s.a)([Object(o.b)({readOnly:!0,dependsOn:["activeLayer"]})],Q.prototype,"supportedSpatialReferences",null),Object(s.a)([Object(o.b)({dependsOn:["activeLayer"],json:{read:{source:"title"}}})],Q.prototype,"title",null),Object(s.a)([Object(o.b)({json:{read:!1},readOnly:!0,value:"wmts"})],Q.prototype,"type",void 0),Object(s.a)([Object(o.b)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],Q.prototype,"url",null),Object(s.a)([Object(o.b)()],Q.prototype,"version",void 0),Q=Object(s.a)([Object(c.a)("esri.layers.WMTSLayer")],Q);var Z=Q;t.default=Z}});