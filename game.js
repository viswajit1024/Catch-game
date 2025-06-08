class mainScene{
    preload(){
        this.load.image('player','https://i.imgur.com/9K5Lzab.png');
        this.load.image('coin','https://i.imgur.com/9j8d5yU.png');
    }
    create(){
        this.player=this.physics.add.sprite(100,100,'player')
        this.coin=this.physics.add.sprite(300,300,'coin')
        
        this.score=0;
        let style={font:'20px Arial',fill:"#fff"};
        this.scoreText=this.add.text(20,20,'score: '+this.score,style);

        this.arrow=this.input.keyboard.createCursorKeys()

        this.player.setCollideWorldBounds(true);
        this.player.body.onWorldBounds=true;
    }
    update(){
        if (this.physics.overlap(this.player,this.coin)){
            this.hit();
        }
        //horizontal move
        if (this.arrow.right.isDown) {
            this.player.x+=3;
        }else if (this.arrow.left.isDown) {
            this.player.x-=3;
        }
        //vertical move
        if (this.arrow.down.isDown) {
            this.player.y+=3;
        }else if (this.arrow.up.isDown) {
            this.player.y-=3;
        }
    }
    hit(){
        this.coin.x=Phaser.Math.Between(100,600);
        this.coin.y=Phaser.Math.Between(100,300);
    
        this.score+=10;
    
        this.scoreText.setText('score: '+this.score)

        this.tweens.add({
            targets:this.player,
            duration:200,
            scaleX:1.2,
            scaleY:1.2,
            yoyo:true,
        })
    }
}

new Phaser.Game({
    width:700,
    height:400,
    backgroundColor:"#3498db",
    scene:mainScene,
    physics:{default:"arcade"},
    parent:"game"
});