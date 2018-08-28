console.log('hello')
$(function(){
class Rutkowski {
    constructor(){
        this.x=0;
        this.y=0;
        this.direction='right';

    }
}

class Pyton{
    constructor(){
        this.x=Math.round(Math.floor(Math.random() * 10));
        this.y=Math.round(Math.floor(Math.random() * 10));

    }
}


class Game {
    constructor() {
        this.board = $('#board').children();
        this.rutkowski = newRutkowski()
        this.pyton = newPyton()
        this.score = $('#score').children().children()
        this.index = function (x, y) {
            return x + (y * 10);
        }
        this.counter=250;
    }

    turnRutkowski(event) {
        switch (event.which) {
            case 37:
                this.rutkowski.direction = 'left';
                break;
            case 39:
                this.rutkowski.direction = 'right';
                break;
            case 38:
                this.rutkowski.direction = 'up';
                break;
            case 40:
                this.rutkowski.direction = 'down';
                break;
        }
    }

    hideVisibleRutkowski() {
        let currentRutkowskiClass = $('.rutkowski')
        currentRutkowskiClass.removeClass('rutkowski')
    }

    showRutkowski() {
        $(this.board[this.index(this.rutkowski.x, this.rutkowski.y)]).addClass('rutkowski');
    }

    showPyton() {
        $(this.board[this.index(this.pyton.x, this.pyton.y)]).addClass('pyton');
    }

    moveRutkowski() {
        this.hideVisibleRutkowski();
        if (this.rutkowski.direction === "right") {
            this.rutkowski.x = this.rutkowski.x + 1;
            $(this.board[this.index(this.rutkowski.x, this.rutkowski.y)]).addClass('rutkowski');
        } else if (this.rutkowski.direction === "left") {
            this.rutkowski.x = this.rutkowski.x - 1;
            $(this.board[this.index(this.rutkowski.x, this.rutkowski.y)]).addClass('rutkowski');
        } else if (this.rutkowski.direction === "down") {
            this.rutkowski.y = this.rutkowski.y + 1;
            $(this.board[this.index(this.rutkowski.x, this.rutkowski.y)]).addClass('rutkowski');
        } else if (this.rutkowski.direction === "up") {
            this.rutkowski.y = this.rutkowski.y - 1;
            $(this.board[this.index(this.rutkowski.x, this.rutkowski.y)]).addClass('rutkowski');
        }

        this.crash()
        this.gameOver()
    }

    crash() {
        if (this.rutkowski.x == this.pyton.x && this.rutkowski.y == this.pyton.y) {
            $('.pyton').removeClass('pyton')
            result++
            $(this.score).text(result)
            this.pyton.x = Math.round(Math.floor(Math.random() * 10));
            this.pyton.y = Math.round(Math.floor(Math.random() * 10));
            this.showPyton()
            this.counter-=5
            clearInterval(this.interval)
            this.startGame()

        }
    }

    startGame() {
        this.interval = setInterval(() => {
            this.moveRutkowski()
        }, this.counter)

    }

    gameOver() {
        if (this.rutkowski.x<0 || this.rutkowski.y<0 || this.rutkowski.x>9 || this.rutkowski.y>9) {
            this.hideVisibleRutkowski()
            clearInterval(this.interval)
            const divGameOver = '<div class="game-over">GAME OVER</div>'
            $('body').append(divGameOver)
        }
    }
}

    document.addEventListener('keydown', function(event){
        game.turnRutkowski(event);
    });

const newRutkowski = ()=>{
    let rutkowski= new Rutkowski
    return rutkowski;
}
    const newPyton = ()=>{
        let pyton= new Pyton
        return pyton;
}
    let result=0;
    let game = new Game
    game.showRutkowski()
    game.showPyton()
    game.startGame()


})












