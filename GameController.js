class GameController
{
    
    //Method to load the player
    playerLoad() {
        spriteSheet = new createjs.SpriteSheet({
            framerate: 5,
            "images": ["img/prueba4.6.png"],
            "frames": { "regX": 75, "height": 148.6, "regY": 0, "width": 291, "spacing": 2, "count": 100 },
            "animations": {
                sit: [1, 1, "sit"],
                run: [0, 3, "run"],
                jump: [0, 0, "sit"],
                attack: [4,10, "sit"]
            }
        });
    }

    //Method to load the score text
    createScoreText() {
        scoreText = new createjs.Text("", "50px Arial", "#423425");
        scoreText.y = stage.canvas.height - 900;
        scoreText.x = stage.canvas.width - 900;
        stage.addChild(scoreText);
        console.log("fsfs");
        scoreText.text = "Score: " + score + " / Lives: " + lives;
    }


    keyDownHandler(e) {
        switch (e.keyCode) {
            case KEYCODE_LEFT:
                {
                    keyboardMoveLeft = true;
                    if (document.getElementById("testData").innerHTML == "False") {
                        grant.gotoAndPlay("run");
                    }
                    document.getElementById("testData").innerHTML = "True";
                    break;
                }
            case KEYCODE_RIGHT:
                {

                    keyboardMoveRight = true;
                    if (document.getElementById("testData").innerHTML == "False") {
                        grant.gotoAndPlay("run");
                    }
                    document.getElementById("testData").innerHTML = "True";
                    break;

                }
            case KEYCODE_UP: keyboardMoveUp = true; break;
            case KEYCODE_DOWN: keyboardMoveDown = true; break;
            case SPACEBAR:
                {
                    keyboardSpace = true;
                    grant.gotoAndPlay("jump");
                    break;
                }  

            //foranim
            case KEYCODE_RIGHT: keyboardMoveRightAnim = false; break;
        }
    }


    keyUpHandler(e) {

        switch (e.keyCode) {

            case KEYCODE_LEFT:
                {
                    keyboardMoveLeft = false;
                    if (document.getElementById("testData").innerHTML == "True") {
                        grant.gotoAndPlay("sit");
                    }
                    document.getElementById("testData").innerHTML = "False";
                    break;
                }
            case KEYCODE_RIGHT:
                {

                    keyboardMoveRight = false;
                    if (document.getElementById("testData").innerHTML == "True") {
                        grant.gotoAndPlay("sit");
                    }
                    document.getElementById("testData").innerHTML = "False";
                    break;
                }
            case KEYCODE_UP: keyboardMoveUp = false; break;
            case KEYCODE_DOWN: keyboardMoveDown = false; break;
            case SPACEBAR: keyboardSpace = false; break;
            //foranim
            case KEYCODE_RIGHT: keyboardMoveRightAnim = true; break;
        }
    }

    //function to show score
    updateStatusLine() {
        scoreText.text = "Score: " + score + " / Lives: " + lives;
    }

    //Method to add score and update
    addToScore(points) {
        score += points;
        game.updateStatusLine();
    }
    
    //Method to reduce life if falls
    playerFall()
    {
        if (grant.y > 900) 
        {
            lives -= 1;
            init();
        }
    }

    //Method for player jump mechanics
    playerJump()
    {
        if (keyboardSpace) {
           
            if(onGround)
            {
                for(var i=0;i<500;i++)
                {
                    grant.y = grant.y - 0.5;
                }
                //grant.y = grant.y - 355;
                onGround = false;
                doubleJump = true;
            }
            else if(doubleJump)
            {
                //grant.y = grant.y - 355;
                for(var i=0;i<500;i++)
                {
                    grant.y = grant.y - 0.5;
                }
                doubleJump = false;
            }
            
        }
    }

    //Game over if lives=0
    gameOver()
    {
        if (lives <= 0) {
            location.href = "GameOver.html";
            Lives = 3;
        }
    }

    //Player Move Left
    playerMoveLeft()
    {
        if (keyboardMoveLeft) {

            knightTemplate.x -= 20;

            grant.scaleX = -1;

            grant.x = grant.x - 20;

        }
    }

    playerMoveRight()
    {
        if (keyboardMoveRight) {

            grant.scaleX = 1;
            knightTemplate.x += 20;
            grant.x = grant.x + 20;
        }
    }

} 