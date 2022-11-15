function talk(){
    var know={
        "Who are you?":"Hello im a basic chatbot ",
        "How are you": "Been better",
        "What can I do for you": " Be my friend?",
        "How are your cats":"They're good and very cute",
        "Hello":"Hi",
        "Bye":"Until we meet again"

    };
    var user=document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML=user+"<br>";
    if(user in know){
        document.getElementById('chatLog').innerHTML=know[user]+"<br>";

    }else{
        document.getElementById("chatLog").innerHTML="Sorry I Didnt understand you <br>"
    }
}