import CardDemo from "./src/contents/CardDemo/CardDemo";
import HomePage from "./src/contents/HomePage/HomePage";
import SprayDemo from "./src/contents/SprayDemo/SprayDemo";

export const PageRouters = [{
  path: '/homePage',
  element: HomePage
}, {
  path: '/cardDemo',
  element: CardDemo
}, {
  path: '/sprayDemo',
  element: SprayDemo,
}]