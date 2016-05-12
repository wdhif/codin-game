            var inputs = readline().split(' ');
            var nbFloors = parseInt(inputs[0]);
            var width = parseInt(inputs[1]);
            var nbRounds = parseInt(inputs[2]);
            var exitFloor = parseInt(inputs[3]);
            var exitPos = parseInt(inputs[4]);
            var nbTotalClones = parseInt(inputs[5]);
            var nbAdditionalElevators = parseInt(inputs[6]);
            var nbElevators = parseInt(inputs[7]);

            var elevators = {};

            for (var i = 0; i < nbElevators; i++) {
                var inputs = readline().split(' ');
                var elevatorFloor = parseInt(inputs[0]);
                var elevatorPos = parseInt(inputs[1]);
                elevators[elevatorFloor] = elevatorPos;
            }

            while (true) {
                var inputs = readline().split(' ');
                var cloneFloor = parseInt(inputs[0]);
                var clonePos = parseInt(inputs[1]);
                var direction = inputs[2];

                if (cloneFloor == exitFloor) {
                    if (exitPos < clonePos && direction == 'RIGHT' ) {
                        print('BLOCK');
                    }
                    else if (exitPos > clonePos && direction == 'LEFT') {
                        print('BLOCK');
                    }
                    else {
                        print('WAIT');
                    }
                }
                else {
                    if (elevators[cloneFloor] < clonePos && direction == 'RIGHT' ) {
                        printErr(elevators[cloneFloor] + ' 1');
                        print('BLOCK');
                    }
                    else if (elevators[cloneFloor] > clonePos && direction == 'LEFT') {
                        printErr(elevators[cloneFloor]+ ' 2');
                        print('BLOCK');
                    }
                    else {
                        printErr(elevators[cloneFloor]+ ' 3');
                        print('WAIT');
                    }
                }
            }
