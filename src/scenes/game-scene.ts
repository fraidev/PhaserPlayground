
const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
};


export class GameScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }


  public text: Phaser.GameObjects.Text;
  public counterO = 0;
  public counterX = 0;


  public create() {
    let x = this.add.sprite(200, 400, 'x');
    let o = this.add.sprite(900, 400, 'o');

    //  Enables all kind of input actions on this image (click, etc)
    x.setInteractive();
    x.addListener('pointerdown', this.listenerX, this);

    o.setInteractive();
    o.addListener('pointerdown', this.listenerO, this);

    this.text = this.add.text(250, 16, 'Inicio', { fill: '#ffffff' });
  }

  public update() {
    // TODO
  }


  public listenerX() {
    this.counterO++;
    this.text.text = "Você clicou no X vermelho " + this.counterO + " vezes!";
  }

  public listenerO() {
    this.counterX++;
    this.text.text = "Você clicou no Circulo preto " + this.counterX + " vezes!";
  }
}
