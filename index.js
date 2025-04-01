const fotosMain = {
    "homemNegroComSkateEToca": document.querySelector('.container-homem-negro-com-skate-e-toca'),
    "containerOldSkoolSkate": document.querySelector('.container-old-skool-skate'),
    "containerCriancaJaponesa": document.querySelector('.container-crianca-japonesa'),
    "containerHomemNaPistaDeSkate": document.querySelector('.container-homem-na-pista-de-skate'),
    "containerMulherPousandoComSkate": document.querySelector('.container-mulher-pousando-para-a-foto-com-skate'),
    "containerJovensComSkate": document.querySelector('.container-jovens-com-skate'),
}

document.addEventListener('DOMContentLoaded', function() {
    fotosMain.homemNegroComSkateEToca.classList.toggle('animacaoMovendoFotoDoHomemNegro');

    fotosMain.containerOldSkoolSkate.classList.toggle('animacaoMovendoFotoDoOldSkool')

    fotosMain.containerCriancaJaponesa.classList.toggle('animacaoMovendoFotoDaCriancaJaponesa')

    fotosMain.containerHomemNaPistaDeSkate.classList.toggle('animacaoMovendoFotoDoHomemNaPistaDeSkate')

    fotosMain.containerMulherPousandoComSkate.classList.toggle('animacaoMovendoFotoDaMulher')

    fotosMain.containerJovensComSkate.classList.toggle('animacaoMovendoFotoDosJovensNaPistaDeSkate')
});