import { create_icon } from './navigation_icon';
import { panorama2,navicon2,navicon3 } from './panorama2';
import { scene } from './client';
import { panorama_form } from './panorama_create';
import { infoicon2,infoicon3 } from './panorama2';

//dodawanie panoramy
export const panorama1 = new panorama_form('./lukowy1.png').main;

//dodawanie ikony nawigacyjnej
export const navicon1 = new create_icon(-0, -18, -30,'nav1');
setTimeout(() => {
    panorama1.add(navicon1.main);
  }, 1000)

//event-click ikony nawigacyjnej
navicon1.element.addEventListener('pointerdown', () => {
    panorama1.remove(navicon1.main)
    scene.remove(panorama1);
    scene.add(panorama2);
    panorama2.add(navicon2.main);
    panorama2.add(navicon3.main);
    navicon1.reset_size();
    panorama2.add(infoicon2.main)
    panorama2.add(infoicon3.main)
   

})




