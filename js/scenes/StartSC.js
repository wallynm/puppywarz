import { Scene } from 'cc-es6'
import { StartLY } from 'layers'

class StartSC extends Scene {
	onEnter() {
		super.onEnter()
		const layer = new StartLY()
		layer.init()
		this.addChild(layer)
	}
}

export default StartSC