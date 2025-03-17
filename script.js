async function generateFakerUser(){

    var qt = document.querySelector("#quantUsers").value;
    var nat = document.querySelector("#natUser").value;
    var inputGender = document.getElementsByTagName("input");

    var gender = "";

    for(let input of inputGender){
        if(input.checked == true) 
            gender = input.value;
    }

    var reply = await fetch(`https://randomuser.me/api/?results=${qt}&gender=${gender}&nat=${nat}`);

    var data = await reply.json();

    document.querySelector(".allUsers").innerHTML = "";

    for(let user of data.results){ 
        let userDiv = document.createElement("div"); //criando a div
        userDiv.classList.add("user"); //adicionando a class #user na div

        userDiv.innerHTML = `
        <img
          width="100"
          src=${user.picture.medium}
        />
        <div class="info">
          <span><b>Nome:</b> ${user.name.first + " " + user.name.last}</span>
          <span><b>Email:</b> ${user.email}</span>
          <span><b>CPF:</b> ${user.id.value}</span>
          <span><b>Celular:</b> ${user.cell}</span>
          <span><b>Idade:</b> ${user.dob.age}</span>
          <span><b>Estado:</b> ${user.location.state}</span>
          <span><b>Cidade:</b> ${user.location.city}</span>

        </div>
        `;
        document.querySelector(".allUsers").appendChild(userDiv); //adicionando a div ao elemento #allUsers
    }
}


        //   <span><b>Nascimento:</b> 91</span>

        //   <span><b>Estado:</b> Ceará</span>
        //   <span><b>Telefone:</b> (85)898337744</span>