const API_KEY =
"MASUKKAN_API_KEY_DEEPSEEK";


async function send(){


let input =
document.getElementById("input");


let chat =
document.getElementById("chat");



let question =
input.value;



chat.innerHTML +=
`
<p>
<b>Kamu:</b>
${question}
</p>
`;



let response =
await fetch(
"https://api.deepseek.com/chat/completions",
{

method:"POST",

headers:{

"Content-Type":
"application/json",

"Authorization":
"Bearer "+API_KEY

},


body:
JSON.stringify({

model:
"deepseek-chat",


messages:[
{
role:"system",
content:
"Kamu adalah PRANA AI, asisten pintar buatan Rully."
},

{
role:"user",
content:question
}

]


})

}

);



let data =
await response.json();



let answer =
data.choices[0]
.message.content;



chat.innerHTML +=
`
<p>
<b>PRANA:</b>
${answer}
</p>
`;


input.value="";


}
