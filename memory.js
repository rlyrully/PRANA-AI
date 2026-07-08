class Memory{


constructor(){

this.data =
JSON.parse(
localStorage.getItem(
"prana_memory"
)
)
||
[];


}



save(role,text){


this.data.push({

role:role,

content:text

});


localStorage.setItem(
"prana_memory",

JSON.stringify(
this.data
)

);


}



load(){

return this.data;

}



clear(){

localStorage.removeItem(
"prana_memory"
);

this.data=[];

}


}
