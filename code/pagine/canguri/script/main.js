// TODO: Add function to create a CE for every 'kangaroo-box' in the page in the right dimension and position.
// TODO: Add function to handle the resizing of CEs relative to the page's size.
// TODO: Add implementation of custom element (CE) by either inserting an image element inside the CE or by moving an external img element along with the CE.

class KangarooEntity extends HTMLElement {
  constructor() {
    super();

    // TODO: Add click event that enables dragging. ( disable on click release.)
  }
}
window.customElements.define('k-entity', KangarooEntity);

/*

  Get mouse cursor's position relative to the position of the CE and keep it constant as long as the left mouse button is pressed. If on mouse button release the CE's absolute position is too far from a 'kangaroo-box' element put the CE in the starting postion, otherwise switch the CE that was moved with the cursor and the "static" CE in the closest 'kangaroo-box'.

*/
