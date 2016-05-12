var opponentCount = parseInt(readline());

class player {
    getDataOfPlayer = function() {
        var inputs = readline().split(' ');
        var x = parseInt(inputs[0]); // Your x position
        var y = parseInt(inputs[1]); // Your y position
        var backInTimeLeft = parseInt(inputs[2]); // Remaining back in time
    }
}

class enemyPlayers {
    getDataOfEnemyPlayers = function() {
        for (var i = 0; i < opponentCount; i++) {
            var inputs = readline().split(' ');
            var opponentX = parseInt(inputs[0]); // X position of the opponent
            var opponentY = parseInt(inputs[1]); // Y position of the opponent
            var opponentBackInTimeLeft = parseInt(inputs[2]); // Remaining back in time of the opponent
        }
    }
}

class board {
    getBoardData = function() {
       var gameRound = parseInt(readline());
        for (var j = 0; j < 20; j++) {
            var line = readline(); // One line of the map ('.' = free, '0' = you, otherwise the id of the opponent)
        }
    }
}


while (true) {
    player.getDataOfPlayer;
    enemyPlayers.getDataOfEnemyPlayers;
    board.getBoardData;
    if (line[0] == '.') {
        if (x === 0 && y === 0) {
            for (var i = 0; i < 35; i++) {
                var x = i;
                print(x + ' 0');
            }
        }
        else {
            print('0 0');
        }
    }
}