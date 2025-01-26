import Chess from "./chess.js";
import Chessboard2 from './chessboard2.js'

// Crear elementos y objetos principales
let div = document.createElement("div");
let startingSquare = null
let tmpArrowId = null

var MainBoard = Chessboard2("MainBoard", {
  position: "start",
  moveSpeed: 150,
  
  onMousedownSquare,
  onMouseenterSquare: function(square, piece) {
    onMouseenterSquare(square, piece); 
    logMouseenterSquare(square, piece);
  },
  onMouseleaveSquare: logMouseleaveSquare,
});

function removeGreySquares() {
  // Selecciona todos los elementos con las clases deseadas
  const lightSquares = document.getElementsByClassName("light_mouse_hover_square");
  const darkSquares = document.getElementsByClassName("dark_mouse_hover_square");

  // Convertir colecciones a arrays para iterar sobre ellas
  const lightArray = Array.from(lightSquares);
  const darkArray = Array.from(darkSquares);

  // Eliminar la clase de cada elemento
  lightArray.forEach((square) => {
    square.classList.remove("light_mouse_hover_square");
  });

  darkArray.forEach((square) => {
    square.classList.remove("dark_mouse_hover_square");
  });
}

function greySquare (square) {
  const $square = document.querySelector(`[data-square-coord="${square}"]`);
  if ($square.classList.contains("white-3b784")){
    $square.classList.add("light_mouse_hover_square")
  }else{
    $square.classList.add("dark_mouse_hover_square")
  }
  const moves = chess1.moves({
    square:square,
    verbose: true
  })

  // highlight the possible squares for this piece
  for (let i = 0; i < moves.length; i++) {
    greySquare(moves[i].to)
  }

}

function logMouseenterSquare (evt, domEvt) {
  greySquare(evt['square'])
}

function logMouseleaveSquare (evt, domEvt) {
  removeGreySquares()
}

document.addEventListener("contextmenu", function (e){
  e.preventDefault();
}, false);

function onMousedownSquare (evt, domEvt) {
  if (startingSquare && startingSquare !== evt.square){ 
    MainBoard.addArrow({
      start: startingSquare,
      end: evt.square
    })

    // clear the pending and tmp arrows
    startingSquare = null
    MainBoard.removeArrow(tmpArrowId)
    tmpArrowId = null
  } else {
    // store the pending arrow info
    startingSquare = evt.square    
    }
}

function onMouseenterSquare (evt, domEvt) {
  if (!startingSquare) return

  if (tmpArrowId && startingSquare !== evt.square) {
      //pensar en la condición para que no de error startingSquare !== evt.square
      MainBoard.removeArrow(tmpArrowId)
    }

  // add a tmp arrow to the board
    if(startingSquare !== evt.square){
      tmpArrowId = MainBoard.addArrow({
        start: startingSquare,
        end: evt.square
    })
      }
  }
  
document.body.addEventListener("click", function (evt) {
  MainBoard.clearArrows();
});

var InterfaceMovements = document.getElementById("Interface-Movements");
let chess = new Chess();
const chess1 = new Chess();

// Definir la partida PGN
let pgn = [
  '[Event "Casual Game"]',
  '[Site "Berlin GER"]',
  '[Date "1852.??.??"]',
  '[EventDate "?"]',
  '[Round "?"]',
  '[Result "1-0"]',
  '[White "Adolf Anderssen"]',
  '[Black "Jean Dufresne"]',
  '[ECO "C52"]',
  '[WhiteElo "?"]',
  '[BlackElo "?"]',
  '[PlyCount "47"]',
  "",
  "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O",
  "d3 8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4",
  "Bb6 14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 17.Nf6+ gxf6 18.exf6",
  "Rg8 19.Rad1 Qxf3 20.Rxe7+ Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8",
  "23.Bd7+ Kf8 24.Bxe7# 1-0",
];

// Cargar el PGN y preparar el historial de movimientos
chess.loadPgn(pgn.join("\n"));

let moves = chess.history();
let verbose_movements = chess.history({ verbose: true });
console.log(verbose_movements);

let current_move = 0;

/*function JaqueMateAtacantes(current_move){
  if(chess1.isCheckmate()){
    let WhoMadeLastMove = verbose_movements[current_move]["color"] 

    let KingToViewMoves = undefined;
    if (WhoMadeLastMove === "w"){
      KingToViewMoves = "b";
    }
    else{
      KingToViewMoves = "w";
    }
}*/

function SonidoMovimientoPiezas(current_move){
  if(moves[current_move].includes("x") && !moves[current_move].includes("#") && !moves[current_move].includes("+") ){
    let capture = new Audio('SFX/CAPTURE.mp3');
    capture.play();
  }
  else if(moves[current_move].includes("+")){
    let check = new Audio('SFX/CHECK.mp3');
    check.play();
  }
  else if(moves[current_move].includes("#")){
    let checkmate = new Audio('SFX/CHECKMATE.mp3');
    checkmate.play();
  }
  else{
    let slide = new Audio('SFX/SLIDE.mp3');
    slide.play();
  }
}

function RetrocederAInicio() {
  for (let i = 0; i < current_move; i++) {
    chess1.undo();
  }
  for (let i = current_move - 1; i >= 0; i--) {
    RetrocederAnotacionesPosiciones(i);
  }
  current_move = 0;
  MainBoard.position("start", true);
}

function RetrocederAPosicion() {
  if (current_move > 0) {
    current_move = current_move - 1;
    SonidoMovimientoPiezas(current_move)
    RetrocederAnotacionesPosiciones(current_move);
    chess1.undo();
  }
  MainBoard.position(chess1.fen(), true);
}

function AvanzarAPosicion() {
  if (current_move < moves.length) {
    AvanzarAnotacionesPosiciones(current_move);
    chess1.move(moves[current_move]);
    SonidoMovimientoPiezas(current_move);
    //JaqueMateAtacantes(current_move);
    current_move = current_move + 1;
    MainBoard.position(chess1.fen(), true); // "true" activa la animación
  }
}

function AvanzarAFinal() {
  MainBoard.position(chess.fen(), true); // "true" activa la animación
  if (current_move != moves.length) {
    for (let i = current_move; i < moves.length; i++) {
      chess1.move(moves[i]);
      AvanzarAnotacionesPosiciones(i);
    }
  }
  current_move = moves.length;
}

function AvanzarAnotacionesPosiciones(current_move) {
  let p = document.createElement("p");

  if (current_move % 2 === 0 || current_move === 0) {
    div = document.createElement("div");
    div.classList.add("move_pair");
    InterfaceMovements.append(div);
  }

  p.innerHTML = moves[current_move];
  p.classList.add("Interface-Movements-Text");
  p.id = "move_n_" + current_move;
  div.append(p);
}

function RetrocederAnotacionesPosiciones(current_move) {
  console.log(current_move);
  const move_to_delete = document.getElementById("move_n_" + current_move);
  move_to_delete.remove();
}

$("#retroceder-inicio").on("click", RetrocederAInicio);
$("#retroceder").on("click", RetrocederAPosicion);
$("#avanzar").on("click", AvanzarAPosicion);
$("#avanzar-final").on("click", AvanzarAFinal);

window.ManejarMovimientoFlechas = ManejarMovimientoFlechas; 
function ManejarMovimientoFlechas(par) {
  if (par.keyCode === 39) {
    AvanzarAPosicion();
  } else if (par.keyCode === 37) {
    RetrocederAPosicion();
  } else if (par.keyCode === 38) {
    AvanzarAFinal();
  } else if (par.keyCode === 40) {
    RetrocederAInicio();
  }
}