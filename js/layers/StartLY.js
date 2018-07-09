import { p, winSize, MenuItemFont, director, color } from 'cc'
import { Layer, Sprite, MenuItemSprite, Menu } from 'cc-es6'
import res from 'resources'
import StoryIntroductionSC from 'scenes/StoryIntroductionSC'

class StartLY extends Layer {
	init(){
		super.init()

		const centerPos = p(winSize.width / 2, winSize.height / 2)
		var spriteBG = new Sprite(res.helloBG_png)
		spriteBG.setPosition(centerPos)
		this.addChild(spriteBG)

		MenuItemFont.setFontSize(60)

		var menuItemPlay = new MenuItemSprite(
			new Sprite(res.start_n_png),
			new Sprite(res.start_s_png),
			this.onPlay, this)
		var menu = new Menu(menuItemPlay)
		
		menu.setColor(color(0,0,0))
		menu.setPosition(centerPos)
		this.addChild(menu)
	}

	onPlay() {
		cc.log("==onplay clicked")
		director.runScene(new StoryIntroductionSC())
	}
}

export default StartLY