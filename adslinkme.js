fetch('./empresas.json')
    .then((response) => response.json())
    .then((json) => {
        let href = window.location.href;
        let empresa = '';
        if (href.includes('?')) {
            empresa = href.split('?')[1];
        }
        let conteudo = window.document.getElementById("links");
        conteudo.innerHTML = '';
        if (empresa != '') {
            let logo = document.getElementById('logoImg');
            logo.src = 'logos/' + empresa + '.png';
            let links = json[empresa];
            links.forEach(e => {
                let elementoLabel = document.createElement('label');
                elementoLabel.innerHTML = e.rotulo;
                let classElementoI = '';
                let conteudoHref = '';
                if (e.tipo == 'site') {
                    classElementoI = 'fa fa-globe';
                    conteudoHref = e.conteudo;
                } else if (e.tipo == 'whatsapp') {
                    classElementoI = 'fa fa-whatsapp';
                    conteudoHref = 'https://api.whatsapp.com/send/?phone=' + e.conteudo + '&text&type=phone_number&app_absent=0';
                } else if (e.tipo == 'facebook') {
                    classElementoI = 'fa fa-facebook-official';
                    conteudoHref = 'https://www.facebook.com/' + e.conteudo;
                } else if (e.tipo == 'instagram') {
                    classElementoI = 'fa fa-instagram';
                    conteudoHref = 'https://www.instagram.com/' + e.conteudo + '/';
                } else if (e.tipo == 'email') {
                    classElementoI = 'fa fa-envelope';
                    conteudoHref = 'mailto:' + e.conteudo;
                } else if (e.tipo == 'youtube') {
                    conteudoHref = 'https://www.youtube.com/' + e.conteudo + '/featured';
                    classElementoI = 'fa fa-youtube';
                } else if (e.tipo == 'contato') {
                    classElementoI = 'fa fa-user';
                    conteudoHref = e.conteudo;
                }
                let elementoI = document.createElement('i');
                elementoI.style.fontSize = '22px';
                elementoI.className = classElementoI;
                let elementoA = document.createElement('a');
                elementoA.href = conteudoHref;
                elementoA.className = e.tipo;
                elementoA.appendChild(elementoLabel);
                elementoA.appendChild(elementoI);
                conteudo.appendChild(elementoA);
            });
        }
    });