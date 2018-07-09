import { Scene } from 'cc-es6'
import StoryIntroductionLY from 'layers/StoryIntroductionLY'

class StoryIntroductionSC extends Scene {
	onEnter() {
    super.onEnter()
    const layer = new StoryIntroductionLY()
    layer.init()
    this.addChild(layer)
	}
}

export default StoryIntroductionSC