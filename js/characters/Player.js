import { p, winSize, size, director, color, TEXT_ALIGNMENT_LEFT, LabelTTF } from 'cc'
import { Layer, Sprite } from 'cc-es6'
import res from 'resources'
import StoryIntroductionSC from 'scenes/StoryIntroductionSC'

class Player extends Layer {
	defaultProps = {
		number: "01",
		pos: "left"
	}

	constructor(props) {
    super()
		this.props = { ...this.defaultProps, ...props }
		let { type, name } = props
		

		if(!type) {
			console.error("You must set a type for the character")
		}

		if(!name) {
			console.error("You must set a name for the character")
		}
		return this;
	}

	init(){
		super.init()
		this.setSprite()
		this.setName()
	}

	get spriteName() {
		let { type, number } = this.props
		return res[`characters_${type + number}_jpg`]
	}

	get spritePos() {
		const { pos } = this.props
		const spriteWidth = this.spriteCharacter.getContentSize().width / 4
		let left = 0

		console.log(spriteWidth)

		if(!pos || pos === "left") {
			left = spriteWidth
		} else {
			left = winSize.width - spriteWidth
		}
		
		return {
			left,
			bottom: winSize.height / 2
		}
	}

	setSprite() {
		this.spriteCharacter = new Sprite(this.spriteName)
		console.info(this.spriteCharacter.getContentSize())

		this.spriteCharacter.setScale(0.5)
		// console.info(this.spriteCharacter.getContentSize())

		this.addChild(this.spriteCharacter)
		this.spriteCharacter.setPosition(p(this.spritePos.left, this.spritePos.bottom))
	}

	setName() {
		const { name } = this.props

		const myLabel = LabelTTF.create(name,  'Times New Roman', 16, size(100,40), TEXT_ALIGNMENT_LEFT)
		myLabel.setPosition(p(this.spritePos.left, 100))
		this.addChild(myLabel)
	}

	onPlay() {
		cc.log("==onplay clicked")
		director.runScene(new StoryIntroductionSC())
	}
}

export default Player