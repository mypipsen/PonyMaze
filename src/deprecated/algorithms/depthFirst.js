export default {

    search(maze) {
        return new Promise((resolve, reject) => {

            const width = maze.size[0];
            const height = maze.size[1];
            const cells = maze.data;
            const end = maze['end-point'][0];
            const pony = maze.pony[0];

            let already_visited = {};
            let path = [];

            const alreadyVisited = (i) => {
                return typeof already_visited[i] !== 'undefined';
            };

            const onEdge = (direction, pos) => {
                switch (direction) {
                    case 'east':
                        return pos.x === width - 1;
                    case 'west':
                        return pos.x === 0;
                    case 'north':
                        return pos.y === 0;
                    case 'south':
                        return pos.y === height - 1;
                    default:
                        return false;
                }
            };

            const move = (i) => {
                const cell = cells[i];
                const pos = {
                    x: i % width,
                    y: Math.floor(i / width)
                };

                if (i === end) {
                    // Found route
                    return resolve(path);
                }

                already_visited[i] = i;
                path.push(i);

                const east = i + 1;
                const west = i - 1;
                const north = i - width;
                const south = i + width;

                if (!alreadyVisited(east) && !onEdge('east', pos) && cells[east].indexOf('west') === -1) {
                    return move(east);
                }

                if (!alreadyVisited(west) && !onEdge('west', pos) && cell.indexOf('west') === -1) {
                    return move(west);
                }

                if (!alreadyVisited(north) && !onEdge('north', pos) && cell.indexOf('north') === -1) {
                    return move(north);
                }

                if (!alreadyVisited(south) && !onEdge('south', pos) && cells[south].indexOf('north') === -1) {
                    return move(south);
                }

                path.pop();
                const back = path.pop();

                if (back) {
                    return move(back);
                }

                reject('Failed solving maze');
            };

            move(pony);

        });
    }

}