enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

interface Position {
    x: number;
    y: number;
}

class Snake {
    public snakeLength: number;
    public body: Position[];
    public dir: Direction;

    constructor(start: Position) {
        this.snakeLength = 1;
        this.body = [start];
        this.dir = Direction.RIGHT;
    }

    getInput(): void {
        process.stdin.setRawMode(true);         // Accept key presses immediately, char by char
        process.stdin.resume();                 // Begin accepting input
        process.stdin.setEncoding('utf8');      // Convert input Buffer to string (e.g., 'w', 'a', etc.)
        // Listen for each keypress event
        process.stdin.on('data', (key: string) => {
            if (key === '\u0003') {             // Ctrl+C (end of text signal)
                process.exit();                 // Exit the program
            }

            switch (key) {
                case 'w':
                    this.setDirection(Direction.UP);
                    break;
                case 'a':
                    this.setDirection(Direction.LEFT);
                    break;
                case 's':
                    this.setDirection(Direction.DOWN);
                    break;
                case 'd':
                    this.setDirection(Direction.RIGHT);
                    break;
            }
        });
    }

    setDirection(newDir: Direction): void {
        const isOpposite =
            (this.dir === Direction.UP && newDir === Direction.DOWN) ||
            (this.dir === Direction.DOWN && newDir === Direction.UP) ||
            (this.dir === Direction.LEFT && newDir === Direction.RIGHT) ||
            (this.dir === Direction.RIGHT && newDir === Direction.LEFT);
    
        if (!isOpposite) {
            this.dir = newDir;
        }
    }
    

    move(): void {
        const head = this.body[0];
        let newHead: Position;

        switch (this.dir) {
            case Direction.UP:
                newHead = { x: head.x, y: head.y - 1 };
                break;
            case Direction.DOWN:
                newHead = { x: head.x, y: head.y + 1 };
                break;
            case Direction.LEFT:
                newHead = { x: head.x - 1, y: head.y };
                break;
            case Direction.RIGHT:
                newHead = { x: head.x + 1, y: head.y };
                break;
        }

        this.body.unshift(newHead);
        // this.body.pop();
    }

    eat(food: Food): boolean {
        return this.body[0].x === food.position.x && this.body[0].y === food.position.y;
    }
}

class Food {
    public position: Position;

    constructor(pos: Position) {
        this.position = pos;
    }
}

function print(a: any): void {
    process.stdout.write(a);
}

class Board {
    private width: number;
    private height: number;
    private snake: Snake;
    private food: Food;

    constructor(width: number, height: number, snake: Snake, food: Food) {
        this.width = width;
        this.height = height;
        this.snake = snake;
        this.food = food;
    }

    draw(): void {
        // Creating top wall
        for (let i = 0; i < this.width + 2; i++) {
            print("#");
        }
        console.log();

        for (let i = 0; i < this.height; i++) {
            print("#");
            for (let j = 0; j < this.width; j++) {
                let head = this.snake.body[0];
                let tail = this.snake.body.slice(1);
                if(j === head.x && i === head.y){
                    print('0')
                }else if (tail.some(part => part.x === j && part.y === i)) {
                    print('o');
                } else if (this.food.position.x === j && this.food.position.y === i) {
                    print('*');
                } else {
                    print(' ');
                }
            }
            print("#\n");
        }

        // Creating bottom walls
        for (let i = 0; i < this.width + 2; i++) {
            print("#");
        }
        // console.log(`\Length: ${this.snake.snakeLength}`);
        console.log(`\nScore: ${this.snake.snakeLength * 20}`);
    }
}

class Game {
    private height: number = 15;
    private width: number = 50;
    private snake = new Snake({ x: 5, y: 5 });
    private food = new Food({ x: 3, y: 7 });
    private board = new Board(this.width, this.height, this.snake, this.food);

    generateFood(): void {
        let x = Math.floor(Math.random() * this.width);
        let y = Math.floor(Math.random() * this.height);

        this.food.position.x = x;
        this.food.position.y = y;
    }

    play(): void {
        let gameOver = false;

        const interval = setInterval(() => {
            if(gameOver) {
                clearInterval(interval);
                console.log("Game Over!");
                return;
            }

            this.snake.getInput();
            this.snake.move();

            let head = this.snake.body[0];
            let tail = this.snake.body.slice(1);

            if (tail.some(part => part.x === head.x && part.y === head.y)) {
                gameOver = true;
            }
 
            if (this.snake.eat(this.food)) {
                this.snake.snakeLength++;
                this.generateFood();
            } else {
                this.snake.body.pop();
            }
            console.clear();
            this.board.draw();

            if(this.snake.body.some(part => part.x <= 0 || part.y <= 0) || this.snake.body.some(part => part.x >= this.width || part.y >= this.height)){
                gameOver = true;
            }
        }, 130);
    }
}

const snakeGame = new Game;
snakeGame.play();
