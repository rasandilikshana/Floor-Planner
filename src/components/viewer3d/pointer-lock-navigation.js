import PointerLockControls from './libs/pointer-lock-controls';

export function initPointerLock(camera, rendererElement) {

  let havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

  let pointerlockchange = event => {
    controls.enabled = !controls.enabled;
  };

  let requestPointerLockEvent = event => {
    document.body.requestPointerLock = document.body.requestPointerLock ||
      document.body.mozRequestPointerLock ||
      document.body.webkitRequestPointerLock;
    document.body.requestPointerLock();
  };

  if (havePointerLock) {

    document.addEventListener('pointerlockchange', pointerlockchange, false);
    document.addEventListener('mozpointerlockchange', pointerlockchange, false);
    document.addEventListener('webkitpointerlockchange', pointerlockchange, false);
    rendererElement.addEventListener('click', requestPointerLockEvent);

  }

  let controls = new PointerLockControls(camera);
  return {controls, pointerlockChangeEvent: pointerlockchange, requestPointerLockEvent};
}


// Collision detection using raycasting across four movement directions
function collision(controls, collisionArray) {

  let rotationMatrix;
  let cameraDirection = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone();

  if (controls.moveForward()) {
    // Nothing to do!
  }
  else if (controls.moveBackward()) {
    rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeRotationY(180 * Math.PI / 180);
  }
  else if (controls.moveLeft()) {
    rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeRotationY(90 * Math.PI / 180);
  }
  else if (controls.moveRight()) {
    rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeRotationY((360 - 90) * Math.PI / 180);
  }
  else return;

  if (rotationMatrix !== undefined) {
    cameraDirection.applyMatrix4(rotationMatrix);
  }
  let rayCaster = new THREE.Raycaster(controls.getObject().position, cameraDirection.normalize());
  let intersects = rayCaster.intersectObjects(collisionArray, true);

  if ((intersects.length > 0 && intersects[0].distance < 10)) {
    return true;
  }

  return false;
}


// Applies gravity: if the controller is not on an object, it falls downward
function translateY(controls, ray, objects) {

  controls.isOnObject(false);
  ray.ray.origin.copy(controls.getObject().position);
  ray.ray.origin.y -= 10;
  let intersections = ray.intersectObjects(objects, true);
  if (intersections.length > 0) {
    let distance = intersections[0].distance;
    if (distance > 0 && distance < 10) {
      controls.isOnObject(true);
    }
  }

}

function lockDirection(controls) {
  if (controls.moveForward()) {
    controls.lockMoveForward(true);
  }
  else if (controls.moveBackward()) {
    controls.lockMoveBackward(true);
  }
  else if (controls.moveLeft()) {
    controls.lockMoveLeft(true);
  }
  else if (controls.moveRight()) {
    controls.lockMoveRight(true);
  }
}

function unlockAllDirection(controls) {
  controls.lockMoveForward(false);
  controls.lockMoveBackward(false);
  controls.lockMoveLeft(false);
  controls.lockMoveRight(false);
}
