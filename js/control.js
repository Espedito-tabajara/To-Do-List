let imput1 = document.getElementById("imput-01");
let submit =  document.getElementById("but-add");
let janela = document.getElementById("windows");
let cont = 0;



function actives(id){
    document.getElementById(id).innerHTML = "radio_button_checked";
    document.getElementById(id).style.color = "blue";
    
    coati = document.getElementById(`container-bx${cont}`);
    coati.style.backgroundColor = "#9FFA95";

    
    
    
    
}

function backG(id){
    id = document.getElementById(id);
    id.style.color = "#B7AFB7";
    id.style.textDecoration = "line-through";
    
}

function addtext(){
    let valorImput = imput1.value;
    if ( (valorImput !== "") && (valorImput !== null) && (valorImput  !== undefined)){
        ++cont;
        let newBloco = `
        <div id="container-bx${cont}" class = "container">
            <div id="check-bx${cont}" class = "check-bx"{>
                
                    <span class="material-symbols-outlined" id="circle${cont}" onclick=(actives("circle${cont}"))>
                        radio_button_unchecked
                    </span>
                
            </div>
            <div id="text-${cont}" class="text-02" onclick=(backG(text-${cont}))>
                <p id="box-output">${imput1.value}</p>
            </div>
            <div id="but-del" onclick=(delet("container-bx${cont}"))>
                <span id="lixeira" class="material-symbols-outlined">
                    delete
                </span>
            </div>
            </div>
        </div>`;
        janela.innerHTML += newBloco;
        imput1.value = "";
        imput1.focus()
    }
    

}


imput1.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        submit.click();
    }
})

function delet(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}










