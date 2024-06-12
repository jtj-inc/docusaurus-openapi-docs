"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[235],{77210:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>c,default:()=>M,frontMatter:()=>g,metadata:()=>b,toc:()=>h});var l=t(68102),i=(t(63696),t(19916)),s=t(36923),n=(t(60151),t(59465)),d=t.n(n),m=(t(74065),t(94965)),r=t(1492),o=t(31421),p=t(90829),y=t(34838),u=(t(4996),t(88406),t(22491));const g={id:"get-satellite-by-id",title:"Get a satellite by ID",description:"Get a satellite with the specified ID",sidebar_label:"Get a satellite by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJydVN9v00AM/ldOfgIpa7tRaMnbGD9UCTQ0xlPVh+udu9x2uQtnp1BF+d+Rk7Qr20ATT0ns+LP92Z8bsEgmuYpdDJDDJ2SlFWlG7x2j+um4UFygogqN2zi0avEeMogVJi0xCws53CB/24e82y0sZFDppEtkTAT5soGgS4QcnLicJKo0F5A9yH4A6ZMk/FG7hBZyTjVmQKbAUkPeAO+qDi4w3mCCDDYxlZp705sptO1KwqmKgZAk4mwykcff8rnQI7gYVEJODrdoFdXGINGm9n4HGZgYGAMLjq4q70z3//iWBKx5XF5c36JhISMJX+z6Upx9VgvZQNrhV+Lkwo044s+A6UkPseaankfRMcHLfjRdxj3+AW2VATv2eMyYJMNfuqzEvOybmu9LhnNiTNFZ9SFpKzzFdIDN4bMmTGoRbC2FI91nyk/bVSuVTZ8a10ftPFrFUd0gHy3p0fCgi50+MerD/t7HhchqE+tgJer1f2dsMyiRizgooVt+LiCH8SGAxo2zrfSJabvXRJ085FAwV5SPxzM7m9vZenYyf/tqdjJ9racna2snJ0ZvpnN9djo7m9tRGc3dqCIuw8jFR/L5Es2dOv+6UH0WEBFIpd06DAO8TGvH2qsr3NSE6iJ6j4ZjUi8ury5eSvQj2OsC1eXVRYfsSGm1cUZc2ncmLjSrKsWts0gqIcU6GSQhba+kP+Sl17E+4pKUDlaJdmztUW6NS8qiiWXpiFwMI8hAOOuLmYzmo4nMq4rEpe6ENyzdw9u13vVn5I9umnsVP/vYDVJi/MXjymvXbVk3vWYY9RLu+4EMcmdFNEUkFl/TrDXh9+TbVsw/akw7yJerDLY6Ob0eJGQdybuFfKM94T8Kf3E1CPelenAynyx1MOogR2yrfS1fkMEd7vqb3K7aDArUVuS5bAbHuTFY8VHIo6MnC3ZY/U8frqFtfwNEESXh",sidebar_class_name:"get api-method",info_path:"orbital-refuse-collector-orc-api",custom_edit_url:null},c=void 0,b={unversionedId:"get-satellite-by-id",id:"get-satellite-by-id",title:"Get a satellite by ID",description:"Get a satellite with the specified ID",source:"@site/docs/get-satellite-by-id.api.mdx",sourceDirName:".",slug:"/get-satellite-by-id",permalink:"/docusaurus-openapi-docs/get-satellite-by-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-satellite-by-id",title:"Get a satellite by ID",description:"Get a satellite with the specified ID",sidebar_label:"Get a satellite by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJydVN9v00AM/ldOfgIpa7tRaMnbGD9UCTQ0xlPVh+udu9x2uQtnp1BF+d+Rk7Qr20ATT0ns+LP92Z8bsEgmuYpdDJDDJ2SlFWlG7x2j+um4UFygogqN2zi0avEeMogVJi0xCws53CB/24e82y0sZFDppEtkTAT5soGgS4QcnLicJKo0F5A9yH4A6ZMk/FG7hBZyTjVmQKbAUkPeAO+qDi4w3mCCDDYxlZp705sptO1KwqmKgZAk4mwykcff8rnQI7gYVEJODrdoFdXGINGm9n4HGZgYGAMLjq4q70z3//iWBKx5XF5c36JhISMJX+z6Upx9VgvZQNrhV+Lkwo044s+A6UkPseaankfRMcHLfjRdxj3+AW2VATv2eMyYJMNfuqzEvOybmu9LhnNiTNFZ9SFpKzzFdIDN4bMmTGoRbC2FI91nyk/bVSuVTZ8a10ftPFrFUd0gHy3p0fCgi50+MerD/t7HhchqE+tgJer1f2dsMyiRizgooVt+LiCH8SGAxo2zrfSJabvXRJ085FAwV5SPxzM7m9vZenYyf/tqdjJ9racna2snJ0ZvpnN9djo7m9tRGc3dqCIuw8jFR/L5Es2dOv+6UH0WEBFIpd06DAO8TGvH2qsr3NSE6iJ6j4ZjUi8ury5eSvQj2OsC1eXVRYfsSGm1cUZc2ncmLjSrKsWts0gqIcU6GSQhba+kP+Sl17E+4pKUDlaJdmztUW6NS8qiiWXpiFwMI8hAOOuLmYzmo4nMq4rEpe6ENyzdw9u13vVn5I9umnsVP/vYDVJi/MXjymvXbVk3vWYY9RLu+4EMcmdFNEUkFl/TrDXh9+TbVsw/akw7yJerDLY6Ob0eJGQdybuFfKM94T8Kf3E1CPelenAynyx1MOogR2yrfS1fkMEd7vqb3K7aDArUVuS5bAbHuTFY8VHIo6MnC3ZY/U8frqFtfwNEESXh",sidebar_class_name:"get api-method",info_path:"orbital-refuse-collector-orc-api",custom_edit_url:null},sidebar:"ORC",previous:{title:"Delete a satellite",permalink:"/docusaurus-openapi-docs/delete-satellite-by-id"},next:{title:"Get a list of satellites",permalink:"/docusaurus-openapi-docs/get-satellites"}},f={},h=[{value:"Request",id:"request",level:2}],v={toc:h},T="wrapper";function M(e){let{components:a,...t}=e;return(0,i.yg)(T,(0,l.A)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{className:"openapi__heading"},"Get a satellite by ID"),(0,i.yg)(d(),{method:"get",path:"/satellites/{id}",mdxType:"MethodEndpoint"}),(0,i.yg)("p",null,"Get a satellite with the specified ID"),(0,i.yg)("h2",{id:"request"},"Request"),(0,i.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{}},(0,i.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.yg)("div",null,(0,i.yg)("ul",null,(0,i.yg)(r.A,{className:"paramsItem",param:{name:"id",in:"path",description:"Satellite ID",required:!0,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"})))),(0,i.yg)("div",null,(0,i.yg)("div",null,(0,i.yg)(s.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,i.yg)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"Satellite information retrieved successfully")),(0,i.yg)("div",null,(0,i.yg)(m.A,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.yg)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.yg)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.yg)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.yg)("strong",null,"Schema")),(0,i.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.yg)("ul",{style:{marginLeft:"1rem"}},(0,i.yg)(p.A,{collapsible:!1,name:"id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,i.yg)(p.A,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.yg)(p.A,{collapsible:!1,name:"owner",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.yg)(p.A,{collapsible:!1,name:"status",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"})))),(0,i.yg)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.yg)(o.A,{responseExample:'{\n  "id": 0,\n  "name": "string",\n  "owner": "string",\n  "status": 0\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.yg)(u.default,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.yg)(o.A,{responseExample:'[\n  {\n    "id": 8,\n    "name": "Asteroid Eradicator",\n    "owner": "Laser Industries",\n    "status": 1\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.yg)(u.default,{label:"400",value:"400",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"Failed to get satellite information")),(0,i.yg)("div",null)),(0,i.yg)(u.default,{label:"404",value:"404",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"Specified satellite not found")),(0,i.yg)("div",null)),(0,i.yg)(u.default,{label:"500",value:"500",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"Failed to get satellite information")),(0,i.yg)("div",null))))))}M.isMDXComponent=!0}}]);