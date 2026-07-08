const API_KEY =
"sk-e6f25142ec5c422c8a1a18174ea892d5";


const memory =
new Memory();



async function send(){


let input =
document.getElementById(
"input"
);


let chat =
document.getElementById(
"chat"
);



let question =
input.value;



chat.innerHTML +=
`
<p>
<b>Kamu:</b>
${question}
</p>
`;



memory.save(
"user",
question
);




let response =
await fetch(

"https://api.deepseek.com/chat/completions",

{


method:"POST",


headers:{


"Content-Type":
"application/json",


"Authorization":
"Bearer "
+
API_KEY


},



body:

JSON.stringify({


model:
"deepseek-chat",



messages:[


{
role:"system",

content:
`
Nama kamu PRANA AI.
Kamu ramah, pintar,
dan punya ingatan.
`
},


...memory.load()


]


})


}

);




let data =
await response.json();



let answer =
data.choices[0]
.message.content;



memory.save(
"assistant",
answer
);



chat.innerHTML +=
`
<p>
<b>PRANA:</b>
${answer}
</p>
`;



input.value="";


}
