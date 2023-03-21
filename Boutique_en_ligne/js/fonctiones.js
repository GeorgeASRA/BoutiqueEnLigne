/* PAGE - LOGIN */
var newUser = []

function garderInfoDansLocalStorage(){
    var nomForm = document.getElementById("txtNom").value;
    var prenomForm = document.getElementById("txtPrenom").value;
    var courrielForm = document.getElementById("txtCourriel").value;
    var motPasseForm = document.getElementById("txtMotPasse").value;
    var jourForm = document.getElementById("jourN").value;
    var moisForm = document.getElementById("moisN").value;
    var anneeForm = document.getElementById("anneeN").value;
    
    var sexeForm = document.getElementsByName("sexe")
    var sexeSelect = "";
    for(var i = 0; i < sexeForm.length; i++){
        if(sexeForm[i].checked){
            sexeSelect = sexeForm[i].value;
            break;
        }
    }

    var obj = {
        nom : nomForm,
        prenom : prenomForm,
        courriel: courrielForm,
        motP : motPasseForm,
        dateN : jourForm + "/" + moisForm + "/" + anneeForm,
        sexe : sexeSelect
    }
    newUser.push(obj)
    localStorage.setItem("user", JSON.stringify(newUser))
}

function chargerUser(){
    var bdUser = JSON.parse(localStorage.getItem("user"))
    if(bdUser){
        newUser = bdUser;
    }
}

function validerUtilisateur(){
    var utilisateurJSON = newUser;

    utilisateurJSON.forEach((item) => {
        var nomForm = document.getElementById("nomUtilisateur").value;
        var motPasseForm = document.getElementById("motPasse").value;
        var nomObj = item.nom
        var motPObj = item.motP

        if((nomObj === nomForm) && (motPObj === motPasseForm)){
            console.log("dentro del if")
            window.location.href="../html/accueil.html";
        }
        else {
            var msgErreur = document.getElementById("msgErreur");
            console.log("dentro del else")
            msgErreur.style.visibility = "visible";
        }
    })
}

function recupererCompte(){
    var body = document.getElementById("body")
    var pLogin = document.getElementById("pageLogin");
    var pRecupererC = document.getElementById("pageRecupererCompte");

    body.style.background = "none"
    pLogin.style.display = "none";
    pRecupererC.style.display = "block";
}

function buttonAnnuler(){
    var body = document.getElementById("body")
    var pLogin = document.getElementById("pageLogin");
    var pRecupererC = document.getElementById("pageRecupererCompte");

    pRecupererC.style.display = "none";
    pLogin.style.display = "block"
    body.style.background = "rgba(0, 0, 0, 0.6) url('../images/Background-Login.png')";
}

function formulaireCompte(){
    var body = document.getElementById("body")
    var pLogin = document.getElementById("pageLogin");
    var pFormulaire = document.getElementById("pageFormulaire");
    var idFormulaire = document.getElementById("idFormulaire");

    body.style.background = "none";
    pLogin.style.display = "none";
    pFormulaire.style.display = "block";
    idFormulaire.style.display = "block";
}

function afficherCoordonees(){
    var nom = document.getElementById("nomU");
    var prenom = document.getElementById("prenomU");
    var courriel = document.getElementById("courrielU");
    var motPasse = document.getElementById("mPasseU");
    var dateN = document.getElementById("dateNU");
    var sexe = document.getElementById("sexU");

    var nomForm = document.getElementById("txtNom").value;
    var prenomForm = document.getElementById("txtPrenom").value;
    var courrielForm = document.getElementById("txtCourriel").value;
    var motPasseForm = document.getElementById("txtMotPasse").value;
    var jourForm = document.getElementById("jourN").value;
    var moisForm = document.getElementById("moisN").value;
    var anneeForm = document.getElementById("anneeN").value;
    
    var sexeForm = document.getElementsByName("sexe")
    var sexeSelect = "";
    for(var i = 0; i < sexeForm.length; i++){
        if(sexeForm[i].checked){
            sexeSelect = sexeForm[i].value;
            break;
        }
    }

    nom.innerHTML = nomForm;
    prenom.innerHTML = prenomForm;
    courriel.innerHTML = courrielForm;
    motPasse.innerHTML = motPasseForm;
    dateN.innerHTML = jourForm + " / " + moisForm + " / " + anneeForm;
    sexe.innerHTML = sexeSelect;

    var inputFile = document.getElementById("photo");
    var nomFichier = inputFile.files[0].name;
    document.getElementById("imgU").src = nomFichier;

    var nouvelleCompte = document.getElementById("nouvelleCompte");
    nouvelleCompte.style.display = "block"

    var idFormulaire = document.getElementById("idFormulaire");
    var pNouvelleCompte = document.getElementById("nouvelleCompte");

    idFormulaire.style.display = "none";
    pNouvelleCompte.style.display = "block";
}

function retournerLogin(){
    var pNouvelleCompte = document.getElementById("nouvelleCompte");
    var pLogin = document.getElementById("pageLogin");
    var body = document.getElementById("body");

    garderInfoDansLocalStorage()

    document.querySelector("#idFormulaire").reset();

    pLogin.style.display = "block";
    pNouvelleCompte.style.display = "none";
    body.style.background = "rgba(0, 0, 0, 0.6) url('../images/Background-Login.png')";
}

function modifier(){
    var pNouvelleCompte = document.getElementById("nouvelleCompte");
    var idFormulaire = document.getElementById("idFormulaire");

    pNouvelleCompte.style.display = "none";
    idFormulaire.style.display = "block";
}


/* PAGE - ACCUEIL */
function carrousel(){
    var tabImages = ["../images/1.jpg", "../images/2.jpg", "../images/3.jpg",
    "../images/4.jpg", "../images/5.jpg", "../images/6.jpg",
    "../images/7.jpg", "../images/8.jpg", "../images/9.jpg", "../images/10.png"]

    document.getElementById("idImage").src = tabImages[0];
    var i = 1;

    setInterval(function(){
        document.getElementById("idImage").src = tabImages[i];
        i++;
        if( i == 10 ){ i = 0; }
    },2000)
}

/* INFORMATIQUE */
function logoAccueil(){
    var pAccueil = document.getElementById("pageAccueil");
    var pInformatique = document.getElementById("pageInformatique");
    var pGeographie = document.getElementById("pageGeographie");
    var pConstruction = document.getElementById("pageConstruction");
    var pContact = document.getElementById("pageContact");
    var pVide = document.getElementById("panierVide");
    var pItems = document.getElementById("panierItems");

    pAccueil.style.display = "block";
    pInformatique.style.display = "none";
    pGeographie.style.display = "none";
    pConstruction.style.display = "none";
    pContact.style.display = "none";
    pVide.style.display = "none";
    pItems.style.display = "none";

}

function pageInformatique(){
    var pAccueil = document.getElementById("pageAccueil");
    var pInformatique = document.getElementById("pageInformatique");
    var pGeographie = document.getElementById("pageGeographie");
    var pConstruction = document.getElementById("pageConstruction");
    var pContact = document.getElementById("pageContact");
    var pVide = document.getElementById("panierVide");
    var pItems = document.getElementById("panierItems");
    var menuInf = document.getElementById("mInf");
    var zoneInf = document.getElementById("zoneDetail");
    var zoneGeo = document.getElementById("zoneDetailGeo");

    pAccueil.style.display = "none";
    pInformatique.style.display = "block";
    pGeographie.style.display = "none";
    pConstruction.style.display = "none";
    pContact.style.display = "none";
    pVide.style.display = "none";
    pItems.style.display = "none";
    menuInf.style.backgroundColor = "rgb(255, 199, 46)";
    zoneInf.style.display = "none";
    zoneGeo.style.display = "none";
}

/* GEOGRAPHIE */
function pageGeographie(){
    var pAccueil = document.getElementById("pageAccueil");
    var pGeographie = document.getElementById("pageGeographie");
    var pInformatique = document.getElementById("pageInformatique");
    var pContact = document.getElementById("pageContact");
    var pConstruction = document.getElementById("pageConstruction");
    var pVide = document.getElementById("panierVide");
    var pItems = document.getElementById("panierItems");
    var menuGeo = document.getElementById("mGeo");
    var zoneGeo = document.getElementById("zoneDetailGeo");
    var zoneInf = document.getElementById("zoneDetail");

    pAccueil.style.display = "none";
    pGeographie.style.display = "block";
    pInformatique.style.display = "none";
    pConstruction.style.display = "none";
    pContact.style.display = "none";
    pVide.style.display = "none";
    pItems.style.display = "none";
    menuGeo.style.backgroundColor = "rgb(255, 199, 46)";
    zoneGeo.style.display = "none";
    zoneInf.style.display = "none";
}

/* PAGE CONTACT */

function pageContact(){
    var pAccueil = document.getElementById("pageAccueil");
    var pGeographie = document.getElementById("pageGeographie");
    var pInformatique = document.getElementById("pageInformatique");
    var pConstruction = document.getElementById("pageConstruction");
    var pContact = document.getElementById("pageContact");
    var pVide = document.getElementById("panierVide");
    var pItems = document.getElementById("panierItems");
    var menuGeo = document.getElementById("mGeo");
    var zoneGeo = document.getElementById("zoneDetailGeo");
    var zoneInf = document.getElementById("zoneDetail");
    var pCarte = document.getElementById("divCarte");
    var contactConst = document.getElementById("contactContruction");


    pAccueil.style.display = "none";
    pGeographie.style.display = "none";
    pInformatique.style.display = "none";
    pConstruction.style.display = "none";
    pContact.style.display = "block";
    pVide.style.display = "none";
    pItems.style.display = "none";
    menuGeo.style.backgroundColor = "rgb(255, 199, 46)";
    zoneGeo.style.display = "none";
    zoneInf.style.display = "none";
    pCarte.style.display = "block";
    contactConst.style.display =  "none";
}

/* CONSTRUCTION */
function pageConstruction(){
    var pAccueil = document.getElementById("pageAccueil");
    var pInformatique = document.getElementById("pageInformatique");
    var pGeographie = document.getElementById("pageGeographie");
    var pContact = document.getElementById("pageContact");
    var pConstruction = document.getElementById("pageConstruction");
    var pVide = document.getElementById("panierVide");
    var pItems = document.getElementById("panierItems");

    pConstruction.style.display = "block";
    pAccueil.style.display = "none";
    pInformatique.style.display = "none";
    pGeographie.style.display = "none";
    pContact.style.display = "none";
    pVide.style.display = "none";
    pItems.style.display = "none";
}

function pageConstructionContact(){
    var pAccueil = document.getElementById("pageAccueil");
    var pInformatique = document.getElementById("pageInformatique");
    var pGeographie = document.getElementById("pageGeographie");
    var pVide = document.getElementById("panierVide");
    var pItems = document.getElementById("panierItems");
    var pCarte = document.getElementById("divCarte");
    var contactConst = document.getElementById("contactContruction");

    pAccueil.style.display = "none";
    pInformatique.style.display = "none";
    pGeographie.style.display = "none";
    pCarte.style.display = "none"
    contactConst.style.display = "block";
    pVide.style.display = "none";
    pItems.style.display = "none";
}

/* PANIER */
var nbrPanier = 0;

function pagePanier(){
    var pVide = document.getElementById("panierVide");
    var pItems = document.getElementById("panierItems");

    var pAccueil = document.getElementById("pageAccueil");
    var pInformatique = document.getElementById("pageInformatique");
    var pGeographie = document.getElementById("pageGeographie");
    var pConstruction = document.getElementById("pageConstruction");
    var pContact = document.getElementById("pageContact");

    var nombreItemPanier = nbrPanier;

    if(nombreItemPanier == 0){
        pVide.style.display = "block";
        pItems.style.display = "none";
        pAccueil.style.display = "none";
        pInformatique.style.display = "none";
        pGeographie.style.display = "none";
        pConstruction.style.display = "none";
        pContact.style.display = "none";
    }
    if(nombreItemPanier > 0){
        pItems.style.display = "block";
        pVide.style.display = "none";
        pAccueil.style.display = "none";
        pInformatique.style.display = "none";
        pGeographie.style.display = "none";
        pConstruction.style.display = "none";
        pContact.style.display = "none";
    }
}

/* AJAX ET JSON */

var listeLivreInformatique;
var listeLivreGeographie;
var panier = [];
const TAUX_TPS = 0.05;
const TAUX_TVQ = 0.09975;

function chargerZoneItem(){
    chargerPanier()
    var xhr;
    var xhr2;

    try{
        xhr = new ActiveXObject ("Msxm12.XMLHTTP");
        xhr2 = new ActiveXObject ("Msxm12.XMLHTTP");
        //alert("Internet Explorer OK");
    }
    catch(e){
        //alert("Erreur - Il faut internet Explorer");
    }
    try{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
        xhr2 = new ActiveXObject("Microsoft.XMLHTTP");
        //alert("Microsoft Edge OK");
    }
    catch(e1){
        //alert("Erreur - Il faut Microsoft Edge");
    }
    try{
        xhr = new XMLHttpRequest();
        xhr2 = new XMLHttpRequest();
        //alert("Firefox, Chrome et autres OK");
    }
    catch(e2){
        xhr = false;
        xhr2 = false;
        //alert("Ajax impossible");
    }

    //Établir la connexion avec le serveur
    xhr.open("Get", "../json/livresInformatique.json", false);
    xhr2.open("Get", "../json/livresGeographie.json", false);
    xhr.send();
    xhr2.send();
    
    
    //Récupérer la réponse du serveur
    if(xhr.readyState == 4 && xhr2.readyState == 4){
        var reponse = xhr.responseText;
        var objJSON = JSON.parse(reponse);
        listeLivreInformatique = objJSON.livresInformatique;

        var reponse2 = xhr2.responseText;
        var objJSON2 = JSON.parse(reponse2);
        listeLivreGeographie = objJSON2.livresGeographie;

        afficherListeProduits();
    }
}

//Pour remettre l'affichage a zero et bien ajouter la quantité d'item
var chargerZoneDetail;
var chargerZoneDetailGeo;

window.addEventListener("load", function(){
    chargerZoneDetail = document.querySelector("#zoneDetail").innerHTML
    chargerZoneDetailGeo = document.querySelector("#zoneDetailGeo").innerHTML
})

function afficherListeProduits(){
    /* INFORMATIQUE */
    listeLivreInformatique.forEach(function(item){
        var description = item.description;
        var image = item.image;
        var prix = item.prix;

        var noeudDivItem = document.createElement("div");
        noeudDivItem.setAttribute("class", "item offset-sm-1 col-sm-5 offset-md-1 col-md-3 offset-lg-2 col-lg-4 offset-xl-1 col-xl-3 col-xxl-2");
        
        var noeudImage = document.createElement("img");
        noeudImage.setAttribute("class", "imageItem");
        noeudImage.setAttribute("src", image);
        noeudDivItem.appendChild(noeudImage);

        noeudImage.addEventListener("click", function(){
            fermerDetail();
            afficherDetailInf(item);
        });

        var noeudDescription = document.createElement("div");
        noeudDescription.setAttribute("class", "description");
        noeudDescription.appendChild(document.createTextNode(description));
        noeudDivItem.appendChild(noeudDescription);

        var noeudPrix = document.createElement("div");
        noeudPrix.setAttribute("class", "prix");
        noeudPrix.appendChild(document.createTextNode(prix));
        noeudDivItem.appendChild(noeudPrix);

        var noeudDollar = document.createElement("span");
        noeudDollar.setAttribute("class", "dollar");
        noeudDollar.appendChild(document.createTextNode("$"));
        noeudPrix.appendChild(noeudDollar);

        var noeudBtnAjouter = document.createElement("div");
        noeudBtnAjouter.setAttribute("class", "ajouter");
        noeudBtnAjouter.appendChild(document.createTextNode("Ajouter"));
        noeudDivItem.appendChild(noeudBtnAjouter);

        noeudBtnAjouter.addEventListener("click",function(){
            addToPanierItem(item);
        });

        document.getElementById("zoneContenuItemInf").appendChild(noeudDivItem);
    })

    /* GEOGRAPHIE */
    listeLivreGeographie.forEach(function(itemGeo){
        var descriptionGeo = itemGeo.description;
        var imageGeo = itemGeo.image;
        var prixGeo = itemGeo.prix;

        var noeudDivItemGeo = document.createElement("div");
        noeudDivItemGeo.setAttribute("class", "item offset-sm-1 col-sm-5 offset-md-1 col-md-3 offset-lg-2 col-lg-4 offset-xl-1 col-xl-3 col-xxl-2");
        
        var noeudImageGeo = document.createElement("img");
        noeudImageGeo.setAttribute("class", "imageItem");
        noeudImageGeo.setAttribute("src", imageGeo);
        noeudDivItemGeo.appendChild(noeudImageGeo);

        noeudImageGeo.addEventListener("click", function(){
            fermerDetail();
            afficherDetailGeo(itemGeo);
        });

        var noeudDescriptionGeo = document.createElement("div");
        noeudDescriptionGeo.setAttribute("class", "description");
        noeudDescriptionGeo.appendChild(document.createTextNode(descriptionGeo));
        noeudDivItemGeo.appendChild(noeudDescriptionGeo);

        var noeudPrixGeo = document.createElement("div");
        noeudPrixGeo.setAttribute("class", "prix");
        noeudPrixGeo.appendChild(document.createTextNode(prixGeo));
        noeudDivItemGeo.appendChild(noeudPrixGeo);

        var noeudDollarGeo = document.createElement("span");
        noeudDollarGeo.setAttribute("class", "dollar");
        noeudDollarGeo.appendChild(document.createTextNode("$"));
        noeudPrixGeo.appendChild(noeudDollarGeo);

        var noeudBtnAjouterGeo = document.createElement("div");
        noeudBtnAjouterGeo.setAttribute("class", "ajouter");
        noeudBtnAjouterGeo.appendChild(document.createTextNode("Ajouter"));
        noeudDivItemGeo.appendChild(noeudBtnAjouterGeo);

        noeudBtnAjouterGeo.addEventListener("click",function(){
            addToPanierItem(itemGeo);
        });

        document.getElementById("zoneContenuItemGeo").appendChild(noeudDivItemGeo);
    })
}

function addToPanierItem(e){
    var newItem = {
        img: e.image,
        description: e.description,
        prix: e.prix,
        details: e.details,
        quantite: 1
    }
    addItemPanier(newItem)
}

function addItemPanier(newItem){
    var tbody = document.querySelector("#corpsTableau");
    var IputElemento = tbody.getElementsByClassName("inputElement")
    nombreItemPanier = document.getElementById("idItem");

    for(let i=0; i < panier.length; i++){
        if(panier[i].description.trim() === newItem.description.trim()){
            panier[i].quantite++;
            var inputValue = IputElemento[i]
            inputValue.value++;
            panierTotal()

            return null;
        }
    }
    panier.push(newItem)
    renderPanier()   
}

function renderPanier(){
    var tbody = document.querySelector("#corpsTableau");
        tbody.innerHTML= " ";
        panier.map(item => {
        var tr = document.createElement("tr");
        tr.classList.add("tableauItems");

        var content = `
        <td><img class="imgStyle" src=${item.img}></td>
        <td class="titule">${item.description}</td>
        <td><input type="number" value=${item.quantite} class="td inputElement"></td>
        <td class="td prixItem">${item.prix} $<br><button class="btnSupprimer">Supprimer</button></td>
        `
        tr.innerHTML = content;
        tbody.append(tr)

        tr.querySelector(".btnSupprimer").addEventListener("click",removeItemPanier)
        tr.querySelector(".inputElement").addEventListener("change", sommeQuantite)  
    })
    panierTotal()
}

function panierTotal(){
    var sousTotal = 0;
    var cont = 0

    panier.forEach((item) => {
        var prix = item.prix;
        var qte = item.quantite
        sousTotal += parseFloat(prix) * parseInt(qte);
        cont += parseInt(qte);
    })

    nbrPanier = cont;
   
    var totalTPS = sousTotal * TAUX_TPS;
    var totalTVQ = sousTotal * TAUX_TVQ;
    var total = sousTotal + totalTPS + totalTVQ;
    document.querySelector("#idAvantTaxes").innerHTML = sousTotal.toFixed(2) + " $";
    document.querySelector("#idTVQ").innerHTML = totalTVQ.toFixed(2) + " $";
    document.querySelector("#idTPS").innerHTML = totalTPS.toFixed(2) + " $";
    document.querySelector("#idMontantTotal").innerHTML = total.toFixed(2) + " $ CAD";
    document.querySelector("#idItem").innerHTML = nbrPanier;
    document.querySelector("#qteItems").innerHTML = "Items : " + nbrPanier

    localStorage.setItem("bdPanier",nbrPanier)
    addLocalStorage();
}

function removeItemPanier(e){
    var buttonDelete = e.target;
    var tr = buttonDelete.closest(".tableauItems");
    var titule = tr.querySelector(".titule").textContent;
    for (i=0; i<panier.length; i++){
        if(panier[i].description.trim() === titule.trim()){
            panier.splice(i,1)
        }
    }
    tr.remove();
    panierTotal();
}

function sommeQuantite(e){
    var sommeInput = e.target
    var tr = sommeInput.closest(".tableauItems")
    var titule = tr.querySelector(".titule").textContent;

     panier.forEach(item => {
        if(item.description.trim() === titule.trim()){
            sommeInput.value < 1 ? (sommeInput.value = 1) : sommeInput.value;
            item.quantite = sommeInput.value;
            panierTotal();
        }
    })
}

function afficherDetailInf(leProduit){
    document.querySelector("#zoneDetail").style.display = "block";
    document.querySelector("#afficherImage").src = leProduit.image;
    document.querySelector("#afficherDescription").innerHTML = leProduit.description;
    document.querySelector("#afficherPrix").innerHTML = leProduit.prix;
    document.querySelector("#afficherDetail").innerHTML = leProduit.details;

   document.querySelector("#unAjout").addEventListener("click", function(){
    var qte = document.querySelector("#txtQte").value;
    var newItem = {
        img: leProduit.image,
        description: leProduit.description,
        prix: leProduit.prix,
        details: leProduit.details,
        quantite: qte
    }

    for(let i=0; i < panier.length; i++){

        if(panier[i].description.trim() === newItem.description.trim()){
            var a = parseInt(panier[i].quantite)
            var b = parseInt(qte)
            panier[i].quantite = a + b
            renderPanier()
            
            document.querySelector("#zoneDetail").innerHTML = chargerZoneDetail;
            document.querySelector("#zoneDetail").style.display = "none";
            document.querySelector("#zoneDetailGeo").innerHTML = chargerZoneDetailGeo
            document.querySelector("#zoneDetailGeo").style.display = "none";

            return null;
        }
    } 
        if(panier.length == 0){
            console.log("imprime length 0")
            addItemPanier(newItem)
            renderPanier()
    
            document.querySelector("#zoneDetail").innerHTML = chargerZoneDetail;
            document.querySelector("#zoneDetail").style.display = "none";
            document.querySelector("#zoneDetailGeo").innerHTML = chargerZoneDetailGeo
            document.querySelector("#zoneDetailGeo").style.display = "none";

            return null
        }
        else {
            addItemPanier(newItem)
            renderPanier()

            document.querySelector("#zoneDetail").innerHTML = chargerZoneDetail;
            document.querySelector("#zoneDetail").style.display = "none";
            document.querySelector("#zoneDetailGeo").innerHTML = chargerZoneDetailGeo
            document.querySelector("#zoneDetailGeo").style.display = "none";
        }
   })
}

function afficherDetailGeo(leProduit){
    document.querySelector("#zoneDetailGeo").style.display = "block";
    document.querySelector("#afficherImageGeo").src = leProduit.image;
    document.querySelector("#afficherDescriptionGeo").innerHTML = leProduit.description;
    document.querySelector("#afficherPrixGeo").innerHTML = leProduit.prix;
    document.querySelector("#afficherDetailGeo").innerHTML = leProduit.details;

   document.querySelector("#unAjoutGeo").addEventListener("click", function(){
    var qte = document.querySelector("#txtQteGeo").value;
    var newItem = {
        img: leProduit.image,
        description: leProduit.description,
        prix: leProduit.prix,
        details: leProduit.details,
        quantite: qte
    }

    for(let i=0; i < panier.length; i++){

        if(panier[i].description.trim() === newItem.description.trim()){
            var a = parseInt(panier[i].quantite)
            var b = parseInt(qte)
            panier[i].quantite = a + b
            renderPanier()
            
            document.querySelector("#zoneDetail").innerHTML = chargerZoneDetail;
            document.querySelector("#zoneDetail").style.display = "none";
            document.querySelector("#zoneDetailGeo").innerHTML = chargerZoneDetailGeo
            document.querySelector("#zoneDetailGeo").style.display = "none";

            return null;
        }
    } 
        if(panier.length == 0){
            addItemPanier(newItem)
            renderPanier()
    
            document.querySelector("#zoneDetail").innerHTML = chargerZoneDetail;
            document.querySelector("#zoneDetail").style.display = "none";
            document.querySelector("#zoneDetailGeo").innerHTML = chargerZoneDetailGeo
            document.querySelector("#zoneDetailGeo").style.display = "none";

            return null
        }
        else {
            addItemPanier(newItem)
            renderPanier()

            document.querySelector("#zoneDetail").innerHTML = chargerZoneDetail;
            document.querySelector("#zoneDetail").style.display = "none";
            document.querySelector("#zoneDetailGeo").innerHTML = chargerZoneDetailGeo
            document.querySelector("#zoneDetailGeo").style.display = "none";
        }
   })
}

function fermerDetail(){
    document.querySelector("#zoneDetail").innerHTML = chargerZoneDetail;
    document.querySelector("#zoneDetail").style.display = "none";
    document.querySelector("#zoneDetailGeo").innerHTML = chargerZoneDetailGeo
    document.querySelector("#zoneDetailGeo").style.display = "none";
}

/* LOCALSTORAGE */

function addLocalStorage(){
    localStorage.setItem("panier", JSON.stringify(panier));
}

function chargerPanier(){
    var storage = JSON.parse(localStorage.getItem("panier"));
    if(storage){
        panier = storage;
        localStorage.getItem("bdPanier")
        renderPanier();
    }
}

/* GOOOGLE MAPS */

function initialiserCarte(pA, pB){
    if(!navigator.geolocation){
        return false;
    }
    /* var centreGoogleMap = new google.maps.LatLng(45.483294, -73.868898); */
    var succursale1 = new google.maps.LatLng(45.52979, -73.51525);
    var succursale2 = new google.maps.LatLng(45.53740, -73.49383);
    var succursale3 = new google.maps.LatLng(45.50656, -73.52555);

    var optionsGoogleMap = {
        //facteur de zoom
        zoom: 12,
        //point de centrage
        center: succursale1,

        mapTypId: 'roadmap'
    };

    var maCarte = new google.maps.Map(document.getElementById("maCarte"), optionsGoogleMap);

    //Geolocalisation de l'utilisateur
    navigator.geolocation.getCurrentPosition(function(position){
        var geolocationUser = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var infoWindow = new google.maps.InfoWindow({
            map: maCarte,
            position: geolocationUser,
            content: 'Vous êtes ici'
        })
    })

    //Points rouge
    var pointSucc1 = new google.maps.Marker({
        position: {lat: 45.52979, lng: -73.51525},
        map: maCarte,
        title: "Brooke et Co. (Succursale 1)",
        animation: google.maps.Animation.BOUNCE
    })

    var pointSucc2 = new google.maps.Marker({
        position: {lat: 45.53740, lng: -73.49383},
        map: maCarte,
        title: "Brooke et Co. (Succursale 2)",
        animation: google.maps.Animation.BOUNCE
    });

    var pointSucc3 = new google.maps.Marker({
        position: {lat: 45.50656, lng: -73.52555},
        map: maCarte,
        title: "Brooke et Co. (Succursale 3)",
        animation: google.maps.Animation.BOUNCE
    });

    var info1 = new google.maps.InfoWindow({
        content: '<h6>Brooke et Co.<br></h6>Succursale #1'
    })
    var info2 = new google.maps.InfoWindow({
        content: '<h6>Brooke et Co.<br></h6>Succursale #2'
    })
    var info3 = new google.maps.InfoWindow({
        content: '<h6>Brooke et Co.<br></h6>Succursale #3'
    })

    //Montrer info en faisant click sur le marker
    google.maps.event.addListener(pointSucc1, 'click', function(){
        info1.open(maCarte, pointSucc1);
    })
    google.maps.event.addListener(pointSucc2, 'click', function(){
        info2.open(maCarte, pointSucc2);
    })
    google.maps.event.addListener(pointSucc3, 'click', function(){
        info3.open(maCarte, pointSucc3);
    })


    //ici
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();

    directionsRenderer.setMap(maCarte);

    navigator.geolocation.getCurrentPosition(function(position){
        var geolocationUser = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var succursale = {lat: pA, lng: pB};

    directionsService.route({
        origin:geolocationUser,
        destination: succursale,
        travelMode: google.maps.TravelMode["DRIVING"],
    },
    (response, status) => {
        if(status == "OK"){
            directionsRenderer.setDirections(response);
        }else {
            window.alert("Erreur - Accès refusé : " + status)
        }
    })
})

}


