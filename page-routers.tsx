import CardDemo from "./src/contents/CardDemo/CardDemo";
import HomePage from "./src/contents/HomePage/HomePage";
import LineDemo from "./src/contents/LineDemo/LineDemo";
import SprayDemo from "./src/contents/SprayDemo/SprayDemo";
import TestDemo from "./src/contents/TestDemo/TestDemo";
import DomeLine from "./src/contents/DomeLine/DomeLine";
import RubberBand from "./src/contents/RubberBandDemo/RubberBand";
import LittleSkill from "./src/contents/LittleSkill/LittleSkill";

export const PageRouters = [{
  path: '/homePage',
  element: HomePage
}, {
  path: '/cardDemo',
  element: CardDemo
}, {
  path: '/sprayDemo',
  element: SprayDemo,
}, {
  path: '/lineDemo',
  element: LineDemo,
}, {
  path: '/testDemo',
  element: TestDemo,
}, {
  path: '/domLineDemo',
  element: DomeLine,
}, {
  path: '/rubberBandDemo',
  element: RubberBand,
}, {
  path: '/littleskill',
  element: LittleSkill,
}]