import{r as t,h as i}from"./p-2968d1ce.js";import{B as s}from"./p-6e03ed17.js";let n=class{constructor(i){t(this,i),this.loading=!0,this.updating=!1,this.handleDelete=()=>{s.deleteBlogPost(this.BlogPost.id),this.history.goBack()},this.handleUpdate=()=>{this.updating=!0},this.handleChange=t=>{t.preventDefault(),this.handleSubmit()}}componentWillLoad(){s.getBlogPost(Number(this.match.params.id)).then((t=>{this.BlogPost=t,this.loading=!this.loading}))}handleSubmit(){this.BlogPost.title=this.title,this.BlogPost.content=this.content,s.updateBlogPost(this.BlogPost),this.updating=!1,this.history.goBack()}render(){return console.log(this.title,this.content),i("div",null,this.loading?i("h1",null,"Loading"):i("form",{onSubmit:t=>this.handleChange(t)},i("div",{class:"main"},i("table",null,i("tr",null,i("th",null,"Title"),i("th",null,"Content"),i("th",null,"Actions")),i("tr",null,i("div",null,i("td",null,i("input",{type:"text",id:"title",name:"title",value:this.BlogPost.title,readOnly:!this.updating,onChange:t=>{this.title=t.target.value}})),i("td",null,i("textarea",{id:"content",name:"content",value:this.BlogPost.content,readOnly:!this.updating,rows:4,cols:50,onChange:t=>{this.content=t.target.value}}))),i("td",null,i("button",{type:"button",onClick:()=>{this.handleUpdate()}},"update"),i("button",{type:"button",onClick:this.handleDelete},"Del"))))),this.updating&&i("button",{type:"submit"},"Make Chnages")))}};n.style=":host{display:block}";export{n as app_single_post}