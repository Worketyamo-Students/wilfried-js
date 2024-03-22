// 1-declaration et initialisation
// Déclartion d'un tableau vide qui affecte une variable par la suite
let tab = []; 
let variable = "clément"; 
tab = [variable]; 
console.log(tab); 
//ajout d'un autre élément du tableau
let variable1 = "wilfried";
tab.push=(variable1);
console.log(tab);

// declaration d'un tableau contenant 5 prénoms
let tableau =[ 
    "yve",
    "fabien",
    "styve",
    "donald",
    "denis",
];
console.log(tableau);

// déclaration d'un tableau contenant les nombres de 1 à 10
let tableau1 = [
    "1","2","3","4","5","6","7","8","9","10"
];
console.log(tableau1);
// déclaration d'un tableau contenant un string , un nombre et un boolean
let tab1 = [
    "you", "25", "true",
];
console.log(tab1);
// 2-accès et modification
// accès au deuxième élément d'un tableau et affichons le dans la console
tab1 [1];
console.log(tab1["1"]);
// ajout d'un élément à la fin du tableau
let value ="âge";
tab1.push(value);
console.log(tab1);
// supprimez le dernier élément du tableau

tab1.splice((1,3));
console.log(tab1);

// 3- parcours et itération 
// parcourirs un tableau et afficher chaque élément à la console
let table = [
    5, 12, 25, 44, 14 ,10
];
// table.forEach(function(element){
//     console.log(element);
// });
for( i=0; i< table.length; i++){
    console.log(table[i]);
}
// itérez sur un tableau et calculez la somme de tous ses élements
let somme = 0 ;
for( i=0 ; i< table.length;i++){
    somme += table[i];
      };
    console.log(somme);

// trouvez l'indice de la première occurence d'un élément dans un tableau
let element = 25;
let indice = table.indexOf(element);
console.log(indice);
// déterminer si un élément est présent dans un tableau
let element1 =44;
let estpresent = table.includes(element1)
console.log(estpresent);
// 4 - Fonctions et mehtodes
// fonction qui prend un tableau en paramètre et affiche sa longueur
var tabe = ["chaise", "bureau", "table", "sac"];
tabe.length; 
console.log(tabe.length);
// fonction qui trie un tableau par ordre croissant
let ta =["josey","ode","ives","nathan","armand","george","willy"];
ta.sort();
console.log(ta.sort());
// fonction qui inverse l'ordre des élément d'un tableau
let ta1 =["josey","ode","ives","nathan","armand","george","willy"];
 ta1.reverse();
console.log(ta1);
// utilisation de la méthode filter pour obtenir un tableau contenant uniquement des nombres pairs
var monTableaux=[4,13,72,8,11,19,42 ,44,3,16,10,0,25]
var tableauPairs = monTableaux.filter(function(element){
    return element % 2 === 0;
});
console.log(tableauPairs);
// 5-exercices avancés
// concatenez deux tableaux en un seul
let tonTableau =[2,4,98,0,8,9,4,];
let sonTableau =[6,89,5,82,3,28];
let tableauconcatene = tonTableau.concat(sonTableau);
console.log(tonTableau.concat(sonTableau));
// diviser un tableau en deux sous tableaux égal
// var monTableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var [sousTableau1, sousTableau2] = monTableau.length/2(monTableau);
// console.log(sousTableau1);
// console.log(sousTableau2);
var montab = [43,65,76,89,27,29,80,98,36,93];
var sous_tableau1 = montab.slice(0, 5);
var sous_tableau2 = montab.slice(5,10);
console.log(sous_tableau1 ,sous_tableau2);
// calculer la moyenne des valeurs d'un tableau
 let tabla = [43,65,76,89,27,29,80,98,36,93];
  let sum = 0;
  for (var i = 0; i < tabla.length; i++) {
    somme += parseInt(tabla[i], 10);
  }
  var moyenne = somme / tabla.length;
  console.log(moyenne);
//   impleter un tableau en binaire 








// Déclaration et création
// objet représentant une personne avec les propriétés nom âge et prénom
let personne = {
    nom: "THE brave",
    prenom: "clement",
    âge: 30
  };
  console.log(personne);
//   objet representant un livre avec ses propriétés nom auteur et nom de la page
let livre = {
    nom:"Bonaventure",
    auteur:"The Brave clement",
   nompage: "première de couverture"
};
console.log(livre);
// accès et modification
// accès à la propriété d'un objet et afficher-le à la console
console.log(personne.nom);
// modifier la valeur de la propriété âge d'un objet
personne.âge = 35;
console.log(personne.âge);
// ajouter une nouvelle propriété à un objet
personne.moi="adult"
console.log(personne);
// supprimer une propriété d'un objet
delete livre.nompage;
console.log(livre);
// Itération de la boucle 
// parcourir les propriétés d'un objet et les afficher dans la console

  const person = { nom: "the brave", prenom:"clement", âge: 30 };

  for (const property in person) {
    console.log(`${property}: ${person[property]}`);
  }
//   fonction qui trie les propriétés d'un objet par ordre alphabetique
var moi = [
    { name: "freeman", value: 21 },
    { name: "clement", value: 37 },
    { name: "wilfried", value: 45 },
    { name: "armando", value: -12 },
    { name: "fred", value: 13 },
    { name: "commando", value: 37 },
  ];
  moi.sort(function (a, b) {
    return a.value - b.value;
  });
  console.log(moi);
//   fonction qui convertit un objet en une chaine de caractères Json
const object = {
    1: 'Hello',
    2: 'World'
  };
  const array = [];
  
  for (var i in object) {
    array.push([i, object[i]]);
  }
  console.log(array);
//   utiliser la méthode objet.keys pour obtenir un tableau contenant les noms des propriété d'un objet
var perso = {
    nom: "Doe",
    prenom: "John",
    age: 30
  };
  
  var proprietes = Object.keys(perso );
  console.log(proprietes);
//  5-exercices avancés
// fusionnez deux objets en seul
let fusion = Object.assign({}, object,perso);
console.log(fusion);
// copier les propriétés d'un object à un autre
// implementer une fonction de comparaison entre deux objects

var num = 0;
var obj = new String("0");
var str = "0";
console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true
console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
// Créez un objet représentant une date avec des propriétés jour, mois et année.
var siècle ={
    date : [
        jour = "Jeudi",
        mois ="Mars",
        année ="2024",

    ]
};
console.log(siècle);
//6. Fonctions et méthodes avancées
// Utilisez la méthode map pour transformer un tableau en un autre tableau.
var tableauOriginal = [1, 2, 3, 4, 5];

var nouveauTableau = tableauOriginal.map(function(element) {
  return element * 2;
});
console.log(nouveauTableau);
// Utilisez la méthode reduce pour calculer une valeur unique à partir d'un tableau.
var banc = [1, 2, 3, 4, 5];
var resultat = banc.reduce(function(accumulateur, element) {
  return accumulateur + element;
}, 0);
console.log(resultat);
// Utilisez la méthode find pour trouver le premier élément d'un tableau qui satisfait une condition.
var tableaunew = [1, 2, 3, 4, 5];
var elementTrouve = tableaunew.find(function(element) {
  return element > 0;
});
console.log(elementTrouve);
// Utilisez la méthode findIndex pour trouver l'indice du premier élément d'un tableau qui satisfait une condition
var tableaune = [1, 2, 3, 4, 5];
var indiceTrouve = tableaune.findIndex(function(element) {
  return element > 1;
});
console.log(indiceTrouve);
// 7. Exercices avancés
// Implémentez une fonction de tri par sélection.
var tb = [5, 8, 11, 6, 1, 9, 3];
tb.sort();
console.log(tb.sort());
// Implémentez une fonction de recherche dichotomique.
var tou = [1, 3, 5, 7, 9, 11, 13];
var valeurRecherchee = 13;
var indiceTrouve = tou.indexOf( valeurRecherchee);
console.log(indiceTrouve);
// Déterminez si un tableau est vide.
let tableau5 = [] ;
function estTableauVide(tableau5) {
    return tableau.length === 0;
  }
 
console.log(tableau5);
// Calculez la médiane d'un tableau.
function calculerMediane(tableau) {
    // Trier le tableau dans l'ordre croissant
    tableau.sort(function(a, b) {
      return a - b;
    });
  
    var longueur = tableau.length;
    var mediane;
  
    if (longueur % 2 === 0) {
      // Cas où le tableau a un nombre pair d'éléments
      var indexMilieu1 = longueur / 2;
      var indexMilieu2 = indexMilieu1 - 1;
      mediane = (tableau[indexMilieu1] + tableau[indexMilieu2]) / 2;
    } else {
      // Cas où le tableau a un nombre impair d'éléments
      var indexMilieu = Math.floor(longueur / 2);
      mediane = tableau[indexMilieu];
    }
  
    return mediane;
  }




// Trouvez le maximum et le minimum d'un tableau.
const array1 = [1, 3, 2];
console.log(Math.max(...array1),Math.min(...array1));
// 6. Fonctions et méthodes avancées
// Écrivez une fonction qui prend un objet en paramètre et retourne une copie de cet objet.
let user = { name: "John",
prenom:"william",
surnom:"fred" };
Object.assign(user);
console.log(user.name,user.prenom,user.surnom);
//  Écrivez une fonction qui compare deux objets et détermine s'ils sont identiques.
var objet1 = { nom: "John", age: 30 };
var objet3 = { nom: "Jane", age: 25 };
console.log((objet1===objet3)); 
// Écrivez une fonction qui permet d'accéder aux propriétés d'un objet de manièreimbriquée.
function maFonction(monObjet) {
  monObjet.marque = "Toyota";
}
var mavoiture = {
  marque: "Honda",
  modele: "Accord",
  annee: 1998,
};
console.log(mavoiture.marque);
maFonction(mavoiture);
console.log(mavoiture.marque);
// Utilisez la méthode Object.assign pour copier les propriétés d'un objet vers un autreobjet.
var objetSource = { a: 1, b: 2, c: 3 };
var objetCible = {d:5};
Object.assign(objetCible, objetSource);
console.log(objetCible);
// 7. Exercices avancés
// Implémentez une fonction de clonage profond d'un objet
let use = {
  name: "John",
  age: 30,
  taille:180,
};
let clone = {}; 
for (let key in use) {
  clone[key] = use[key];
}
clone.name = "Pete"; 
console.log( clone); 
// Implémentez une fonction de comparaison d'objets imbriqués.
var objet4 = {
  nom: "clément",
  age: 30,
  adresse: {
    rue: "4320 Rue Principale",
    ville: "Yaoundé"
  }
};

var objet5 = {
  nom: "clément",
  age: 30,
  adresse: {
    rue: "4320 Rue Principale",
    ville: "Yaoundé"
  }
};

var objet6 = {
  nom: "nhoa",
  age: 25,
  adresse: {
    rue: "123 Rue Principale",
    ville: "Douala"
  }
};
console.log((objet4 === objet4)); 
console.log((objet4 === objet6)); 
console.log((objet6 === objet5));
console.log((objet4 === objet5)); 
// Créez un objet représentant une personne avec des méthodes pour se présenter et pour calculer son âge
var humain = {
  nom: "clément",
  dateNaissance: new Date(2002, 0, 1),

  presenter: function() {
    console.log("Je m'appelle " + this.nom + ".");
  },

  calculerAge: function() {
    var maintenant = new Date();
    var differenceAnnees = maintenant.getFullYear() - this.dateNaissance.getFullYear();
    var moisActuel = maintenant.getMonth();
    var moisNaissance = this.dateNaissance.getMonth();

    if (moisActuel < moisNaissance || (moisActuel === moisNaissance && maintenant.getDate() < this.dateNaissance.getDate())) {
      differenceAnnees--;
    }

    console.log("J'ai " + differenceAnnees + " ans.");
  }
};
humain.presenter(); 
humain.calculerAge();
//  Créez un objet représentant une voiture avec des méthodes pour démarrer, conduire et s'arrêter
var voiture = {
  marque: "Toyota",
  modele: "Corolla",
  annee: 2022,
  enMarche: false,

  demarrer: function() {
    if (this.enMarche) {
      console.log("La voiture est déjà en marche !");
    } else {
      this.enMarche = true;
      console.log("La voiture démarre.");
    }
  },

  conduire: function() {
    if (this.enMarche) {
      console.log("La voiture est en train de rouler.");
    } else {
      console.log("La voiture doit être démarrée avant de pouvoir conduire.");
    }
  },

  arreter: function() {
    if (this.enMarche) {
      this.enMarche = false;
      console.log("La voiture s'arrête.");
    } else {
      console.log("La voiture est déjà arrêtée !");
    }
  }
};

voiture.demarrer();    // La voiture démarre.
voiture.conduire();    // La voiture doit être démarrée avant de pouvoir conduire.
voiture.arreter();     // La voiture s'arrête.
voiture.demarrer();    // La voiture démarre.
voiture.conduire();    // La voiture est en train de rouler.
voiture.arreter();     // La voiture s'arrête.
// 
// var navbarToggle = document.getElementById("navbar-toggle");
// var navbarList = document.getElementById("navbar-list");

// navbarToggle.addEventListener("click", function() {
//   navbarList.classList.toggle('open');
// });



























function createPerson(firstName, lastName) {
    return {
    firstName: firstName,
    lastName: lastName,
    fullName: function() {
    return this.firstName + " " + this.lastName;
    }
    };
    }
    let person1 = createPerson("Bob", "Johnson");
    let person2 = createPerson("Carol", "Williams");
    console.log(person1.fullName()); // Affiche "Bob Johnson"
    console.log(person2.fullName()); // Affiche



// exercices pendant le cours
// créer un object voiture 
// let voiture ={
//     nom :"yaris",
//     couleur:"grise",
//     vitesse :"2km/min",
//     pays:" china",
//     puissance: "12 chevaux",


// }

//créer un constructeur voiture et instantannée

// function createvoiture (nom,couleur,vitesse,pays,puissance) {
//     this.nom = nom,
//     this.couleur = couleur,
//     this.vitesse = vitesse,
//     this.pays = pays,
//     this.puissance = puissance,
//     // this.caracteristiques = () =>{
//     //     console.log("nom","couleur","vitesse","pays","puissance")
//     // }

// let maVoiture = new Voiture("Toyota", "noir","5km/min","cameroun","20 chevaux" );
// // let voiture1 = new voiture(nom,couleur,vitesse,pays,puissance")


// Constructeur Voiture
// var voiture = {
//     marque :"yaris",
//     modèle:"bmw",
//     année :2000
// };
// function Voiture(marque, modèle, année) {
//     this.marque = marque;
//     this.modèle = modèle;
//     this.année = année;
//     this.caractère = ()=>{
//         console.log(this.marque, this.modèle,this.année);
//     }
//   }
//   var maVoiture = new Voiture("Toyota", "Camry", 2022);
// //   fonction factory
//   function createVoiture(marque, modèle, année) {
//     return{   
//   marque : marque,
//   modèle : modèle,
//   année : année,
//   caractère : ()=>{
//       console.log(this.marque,this.modèle,this.année);
//   }
// }
// };
// let voiture1 = createvoiture("suziki","karima",2030)
// let voiture2 = createvoiture("mercedes","btg",3000)
// console.log(voiture1.caractère);
// console.log(voiture2.caractère);