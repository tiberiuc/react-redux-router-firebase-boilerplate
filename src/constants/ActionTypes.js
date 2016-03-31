
import keyMirror from 'keymirror'
import _ from 'lodash'

export default _.mapValues(keyMirror({



}), i => `myApp@${i}`)
