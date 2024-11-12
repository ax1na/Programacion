function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var mundo = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [
    1,
    0,
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    1,
  ],
  [
    1,
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    1,
  ],
  [
    1,
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    1,
  ],
  [
    1,
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    1,
  ],
  [
    1,
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    1,
  ],
  [
    1,
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    0,
    1,
  ],
  [
    1,
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    1,
  ],
  [
    1,
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    random(-1, 4),
    1,
  ],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
var mundoDict = {
  0: "blank",
  1: "pared",
  2: "burguer",
  3: "papitas",
};
var puntaje = 0;
console.log("puntaje= " + puntaje);

function dibujarMundo() {
  var output = "";
  for (var fila = 0; fila < mundo.length; fila++) {
    output += "<div class = 'fila'>";
    for (var x = 0; x < mundo[fila].length; x++) {
      output += "<div class = '" + mundoDict[mundo[fila][x]] + "'></div>";
      //mundoDict[mundo[fila][x]]
    }
    output += "</div>";
  }

  document.getElementById("mundo").innerHTML = output;
}
dibujarMundo();

var gato = {
  x: 1,
  y: 1,
};

function dibujarGato() {
  document.getElementById("gato").style.top = gato.y * 40 + "px";
  document.getElementById("gato").style.left = gato.x * 40 + "px";
}
dibujarGato();

var perro = {
  x: 2,
  y: 3,
};

function dibujaPerro() {
  document.getElementById("perro").style.top = perro.y * 40 + "px";
  document.getElementById("perro").style.left = perro.x * 40 + "px";
}

dibujaPerro();

function muevePerro() {
  var mueve = random(-1, 4);
  if (mueve === 0 && mundo[perro.y][perro.x - 1] !== 1) {
    //0 = left
    perro.x--;
  } else if (mueve === 1 && mundo[perro.y][perro.x + 1] !== 1) {
    //1 = right
    perro.x++;
  } else if (mueve === 2 && mundo[perro.y - 1][perro.x] !== 1) {
    //2 = up
    perro.y--;
  } else if (mueve === 3 && mundo[perro.y + 1][perro.x] !== 1) {
    //3 = down
    perro.y++;
  }
}

var vidas = 3;
console.log("vidas= " + vidas);

document.onkeydown = function (e) {
  if (e.keyCode === 37) {
    //izquierda
    if (mundo[gato.y][gato.x - 1] !== 1) {
      gato.x--;
    }
  }
  if (e.keyCode === 38) {
    //arriba
    if (mundo[gato.y - 1][gato.x] !== 1) {
      gato.y--;
    }
  }
  if (e.keyCode === 39) {
    //derecha
    if (mundo[gato.y][gato.x + 1] !== 1) {
      gato.x++;
    }
  }
  if (e.keyCode === 40) {
    //abajo
    if (mundo[gato.y + 1][gato.x] !== 1) {
      gato.y++;
    }
  }
  if (mundo[gato.y][gato.x] === 2) {
    mundo[gato.y][gato.x] = 0;
    puntaje += 10;
    console.log("puntaje= " + puntaje);
  } else if (mundo[gato.y][gato.x] === 3) {
    mundo[gato.y][gato.x] = 0;
    puntaje += 5;
    console.log("puntaje= " + puntaje);
  }

  if (gato.x === perro.x && gato.y === perro.y) {
    vidas -= 1;
    console.log("vidas= " + vidas);
  }
  if (vidas === 0) {
    document.write("Game Over!</br>Your puntaje= " + puntaje);
  }
  dibujarGato();
  dibujarMundo();
};
function bucle() {
  dibujarGato();
  dibujaPerro();
  muevePerro();
  dibujaPerro();

  setTimeout(bucle, 750);
}
bucle();
