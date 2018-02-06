import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

// ESTE É O ENDEREÇO DE RETORNO DEPOIS DE LOGIN E AUTORIZAÇÃO
// O LARAVEL ENVIA AUTOMATICAMENTE (ATRAVÉS DE GET) PARA ESTE ENDEREÇO UM CÓDIGO QUE SERVIRÁ PARA OBTER O TOKEN DE SESSÃO

class Callback extends Component {

    constructor(props) {
        super(props);

        this.state = {
            token: props.token
        };

        //console.log("TOKEN NO CALLBACK ------> " + this.state.token);
    }

    render() {
        // ler o código que é devolvido pelo laravel através do URL (isto está feito às 3 pancadas, deve haver formas mais fiáveis)
        // No React devem obter o parâmetro "code" que se encontra na querystring do URL
        let code = document.location.search.substring(6);

        // Criar a chamada AJAX para obter o token, atenção aos parâmetros, novamente têm de ser iguais aos criados no laravel
        // No React podem usar o método fetch ou axios
        let http = new XMLHttpRequest();
        let url = "http://hojeparajantar.zapto.org/oauth/token";
        let params = "grant_type=authorization_code";
        params += '&client_id=1';
        params += '&client_secret=1aGyamb72vo7bXa1ZYnYZxBNZHNzAN9FgtyGop1l';
        params += '&redirect_uri=http://localhost:3001/callback';
        params += '&code=' + code;

        //console.log("CODE -----> " + code);

        http.open("POST", url, true);

        // Definir os headers
        http.setRequestHeader('Accept', 'application/json, application/x-www-form-urlencoded');
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        // função que irá obter a resposta do servidor
        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {

                //mostra na consola o token
                console.log("TOKEN: ----> " + http.responseText);

                // obtem o objeto retornado e transforma-o num JSON válido.
                let response = JSON.parse(http.responseText);

                if (response.token_type == "Bearer") {

                    // este é o token que devemos guardar para enviar em todas as chamas daqui para a frente
                    let token = "Bearer " + response.access_token;
                    let saveToken = localStorage.setItem('token', token);

                    // exemplo de uma chamada para obter o utilizador autenticado
                    let http2 = new XMLHttpRequest();
                    let url = "http://hojeparajantar.zapto.org/api/details";

                    http2.open("POST", url, true);

                    // novamente definir os headers, desta vez notar o header "Authorization" onde passamos o token
                    http2.setRequestHeader('Accept', 'application/json, application/x-www-form-urlencoded');
                    http2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    http2.setRequestHeader("Authorization", token);

                    //console.log("TOKEN BEARER: ------>" + token);

                    http2.onreadystatechange = function () {
                        if (http2.readyState == 4 && http2.status == 200) {

                            // ver na consola a informação do utilizador autenticado!
                            let resp = JSON.parse(http2.responseText);
                            let myuser = resp.success;

                            sessionStorage.setItem('loggedin', 'true');
                            sessionStorage.setItem('user_name', myuser.name);
                            sessionStorage.setItem('user_email', myuser.email);
                            sessionStorage.setItem('user_id', myuser.id);
                        }
                    };

                    http2.send();
                    //console.log("-------TESTE----- "+ token);
                }

            }
        };
        http.send(params);
        return (
            <Redirect to={"/portfolio"}/>
        )
    }
}

export default Callback;