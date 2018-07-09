import { p, winSize, MenuItemFont, director, color } from 'cc'
import { Layer, Sprite, MenuItemSprite, Menu } from 'cc-es6'
import res from 'resources'
import FactionSelectionSC from 'scenes/FactionSelectionSC'
import Player from 'characters/Player'

class StoryIntroductionLY extends Layer {
	init(){
		super.init()
    // alert('what?')
    const centerPos = p(winSize.width / 2, winSize.height / 2)
    const CharacterCat = new Player({type: "cat", name: "Sr. Jinglebell", pos: "left"})
    CharacterCat.init()
    
    const CharacterDog = new Player({type: "dog", name: "Ms. Jade", pos: "right"})
    CharacterDog.init()

    this.addChild(CharacterCat)
    this.addChild(CharacterDog)
    console.info(this)
    alert('aff')
    // Advances story into next step showing both characters
    // Need to check after if onMouseDown work with mobile
    // this.onMouseDown(this.advanceHistoryScene)
  }
  
  props = {
    storyLevel: 0,
    lastStoryLevel: 0
  }

  advanceHistoryScene() {
    const { storyLevel, lastStoryLevel } = this.props
    this.props.storyLevel += 1

    if( storyLevel > lastStoryLevel ) {
      cc.log("==faction selected", faction)
      director.runScene(new FactionSelectionSC())
    }
  }
}

export default StoryIntroductionLY