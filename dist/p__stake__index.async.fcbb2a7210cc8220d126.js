(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{UiUj:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("hlFM"),c=t("ofer"),o=t("nCZa"),s=t("kKAo"),m=t("/EAt"),i=t("Imu7"),u=t("sRsu"),d=t("3PeG"),E=t("Uf6+"),p=t("469l"),k=t("hlie"),f=t("1NhI"),x=t("Z3vd"),h=t("3a4m"),y=t.n(h),C=t("Aeqt"),P=t("lgoI"),b=t.n(P);class g extends r.a.PureComponent{constructor(){super(...arguments),this.handleClickFarm=(e=>{y.a.push("/stake/".concat(e.name))})}render(){return r.a.createElement(l["a"],{className:b.a.StakePools,mb:2},r.a.createElement(o["a"],{component:s["a"]},r.a.createElement(m["a"],null,r.a.createElement(i["a"],null,r.a.createElement(u["a"],null,r.a.createElement(d["a"],null,"Pool"),r.a.createElement(d["a"],null,"Contract"))),r.a.createElement(E["a"],null,(C["b"]||[]).map(e=>r.a.createElement(u["a"],{key:e.contractAddr,onClick:()=>{this.handleClickFarm(e)}},r.a.createElement(d["a"],null,r.a.createElement(l["a"],{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},r.a.createElement(p["a"],{variant:"rounded",src:"/static/assets/pool-".concat(e.targetToken||e.tokenName,".svg"),alt:""}),r.a.createElement(l["a"],{ml:2},r.a.createElement(c["a"],{variant:"subtitle1",color:"textPrimary",align:"center"},e.displayName||e.name),r.a.createElement(c["a"],{variant:"caption"},e.tokenDisplayName||e.tokenName)))),r.a.createElement(d["a"],null,r.a.createElement(l["a"],{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},r.a.createElement(c["a"],{variant:"body1",color:"textPrimary",align:"center"},r.a.createElement(k["a"],{color:"textPrimary",href:"https://etherscan.io/address/".concat(e.contractAddr),target:"_blank",rel:"noreferrer",onClick:e=>{e.stopPropagation()}},"".concat((e.contractAddr||"").substr(0,8),"...").concat((e.contractAddr||"").substr(-8)))),r.a.createElement(f["a"],{xsDown:!0},r.a.createElement(x["a"],{variant:"contained",onClick:()=>{this.handleClickFarm(e)}},"Farm"))))))))))}}var w=g;class v extends r.a.PureComponent{render(){return r.a.createElement(l["a"],null,r.a.createElement(l["a"],{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",mb:2,pt:3,px:3},r.a.createElement(c["a"],{variant:"h5",color:"textPrimary"},"Select a farm to stake")),r.a.createElement(l["a"],null,r.a.createElement(w,null)))}}a["default"]=v},lgoI:function(e,a,t){e.exports={StakePools:"StakePools___1Uw23"}}}]);