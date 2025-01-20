const chess_positions = ["a", "b", "c", "d", "e", "f", "g", "h"];

const initial_positions = {
    "a2": "white_pawn",
    "b2": "white_pawn",
    "c2": "white_pawn",
    "d2": "white_pawn",
    "e2": "white_pawn",
    "f2": "white_pawn",
    "g2": "white_pawn",
    "h2": "white_pawn",
    "a7": "black_pawn",
    "b7": "black_pawn",
    "c7": "black_pawn",
    "d7": "black_pawn",
    "e7": "black_pawn",
    "f7": "black_pawn",
    "g7": "black_pawn",
    "h7": "black_pawn",
    "a1": "white_rook",
    "h1": "white_rook",
    "a8": "black_rook",
    "h8": "black_rook",
    "b1": "white_knight",
    "g1": "white_knight",
    "b8": "black_knight",
    "g8": "black_knight",
    "c1": "white_bishop",
    "f1": "white_bishop",
    "c8": "black_bishop",
    "f8": "black_bishop",
    "d1": "white_queen",
    "e1": "white_king",
    "d8": "black_queen",
    "e8": "black_king",
};

const piece_images = {
    "white_pawn": "/Assets/wp.png",
    "black_pawn": "/Assets/bp.png",
    "white_knight": "/Assets/wn.png",
    "black_knight": "/Assets/bn.png",
    "white_bishop": "/Assets/wb.png",
    "black_bishop": "/Assets/bb.png",
    "white_rook": "/Assets/wr.png",
    "black_rook": "/Assets/br.png",
    "white_queen": "/Assets/wq.png",
    "black_queen": "/Assets/bq.png",
    "white_king": "/Assets/wk.png",
    "black_king": "/Assets/bk.png",
};

for (var i = 8; i >= 1; i--) {
    var row = document.createElement("div");
    row.id = "row" + i;
    row.classList.add("row");

    document.getElementById("board").appendChild(row);

    for (var j = 1; j <= 8; j++) {
        var square = document.createElement("div");
        square.id = chess_positions[j - 1] + i;

        if (i % 2 != 0) {
            if (j % 2 != 0) {
                square.classList.add("light-square");
            } else {
                square.classList.add("dark-square");
            }
        } else {
            if (j % 2 == 0) {
                square.classList.add("light-square");
            } else {
                square.classList.add("dark-square");
            }
        }

        const piece = initial_positions[square.id];
        if (piece) {
            const img = document.createElement("img");
            img.src = piece_images[piece];
            img.alt = piece;
            img.classList.add("piece");
            square.appendChild(img);
        }

        row.appendChild(square);
    }
}
