// DCP DEX Park
import { UGUI } from "./GUI";
import { ModelBuilders } from "./ModelBuilders";
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const dexparkperlbs = new Entity('dexparkperlbs')
engine.addEntity(dexparkperlbs)
dexparkperlbs.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dexparkperlbs.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/DEXParkPerLBs.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
dexparkperlbs.addComponentOrReplace(gltfShape2)

const dxpBP = new Entity('dxpBP')
engine.addEntity(dxpBP)
dxpBP.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(13, 5, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
dxpBP.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("models/DXP_BP.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
dxpBP.addComponentOrReplace(gltfShape4)

const dxpGB = new Entity('dxpGB')
engine.addEntity(dxpGB)
dxpGB.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(1, 5, 13),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3, 3, 3)
})
dxpGB.addComponentOrReplace(transform6)
const gltfShape5 = new GLTFShape("models/DXP_GB.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
dxpGB.addComponentOrReplace(gltfShape5)

const dxpAM = new Entity('dxpAM')
engine.addEntity(dxpAM)
dxpAM.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(2.7, 5, 0.9999999403953552),
  rotation: new Quaternion(-5.7769201308201495e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(3, 3, 3)
})
dxpAM.addComponentOrReplace(transform7)
const gltfShape6 = new GLTFShape("models/DXP_AM.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
dxpAM.addComponentOrReplace(gltfShape6)

const dxpOG = new Entity('dxpOG')
engine.addEntity(dxpOG)
dxpOG.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(15, 5, 3),
  rotation: new Quaternion(1.539415254273621e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(3, 3, 3)
})
dxpOG.addComponentOrReplace(transform8)
const gltfShape7 = new GLTFShape("models/DXP_OG.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
dxpOG.addComponentOrReplace(gltfShape7);

// Build 3D Models
//let mB = new ModelBuilders("Models");
//mB.buildAllModels(_scene);

// Build User GUI
let ugui = new UGUI("UserGUI"); 
ugui.DEXParkGUI();
