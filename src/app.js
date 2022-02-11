import { LightningElement } from "lwc";

export default class App extends LightningElement {
  //criar variáveis, atributos.
  nome = "Antonio Rocha";
  telefone ="4002-8922";
  cpf = "111.222.333-44";
  idade = "26 anos";
  email = "tchakaray@gmail.com";
  insta ="https://instagram.com/oantoniorocha?utm_medium=copy_link";
  linkedin = "https://www.linkedin.com/in/antonio-rocha-024a4b138/";

  visible = true;

  /*
  
  função para ação de clicar no botão e ele trocar o valor do visible
  uso de variável da classe dentro do método usa-se this.variável

  */
  trocardiv(){
    this.visible = !this.visible;

    /*
            OU

    trocarDiv(){
        //this.visible = !this.visible;
        if(this.visible == true){
            this.visible = false;
        }
        else   {
            this.visible = true;
        } 
            
    }
    
    */

  }
/*método chamado alterarValores que muda os valores do nome, telefone, cpf, idade, email, instagram e linkedin
  criar um botão no html que altere essa função.
 */
alterarValores(){
  if(this.nome == "Antonio Rocha"){
  this.nome = "Cleiton Rasta";
  this.telefone ="8922-4002";
  this.cpf = "555.444.333-22";
  this.idade = "17 anos";
  this.email = "chamareggero@gmail.com";
  this.insta ="@cleitinRasta";
  this.linkedin = "https://www.linkedin.com/in/cleitonRasta-025a5b138/";
  }else{
  this.nome = "Antonio Rocha";
  this.telefone ="4002-8922";
  this.cpf = "111.222.333-44";
  this.idade = "26 anos";
  this.email = "tchakaray@gmail.com";
  this.insta ="https://instagram.com/oantoniorocha?utm_medium=copy_link";
  this.linkedin = "https://www.linkedin.com/in/antonio-rocha-024a4b138/";
  }
        
}



}