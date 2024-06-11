"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./components/bt1/Home"));
const Contact_1 = __importDefault(require("./components/bt2/Contact"));
const Bt3_1 = __importDefault(require("./components/bt3/Bt3"));
const Bt4_1 = __importDefault(require("./components/bt4/Bt4"));
const Bt5_1 = __importDefault(require("./components/bt5/Bt5"));
const Bt6_1 = __importDefault(require("./components/bt6 + 7/Bt6"));
const Contact1_1 = __importDefault(require("./components/bt6 + 7/Contact1"));
const Home1_1 = __importDefault(require("./components/bt6 + 7/Home1"));
const Bt8_1 = __importDefault(require("./components/bt8/Bt8"));
const Admin_1 = __importDefault(require("./components/bt8/Admin"));
const Account_1 = __importDefault(require("./components/bt8/Account"));
const Product_1 = __importDefault(require("./components/bt8/Product"));
const Bt10_1 = __importDefault(require("./components/bt10/Bt10"));
const RenderUser_1 = __importDefault(require("./components/bt10/RenderUser"));
const HomePage_1 = __importDefault(require("./components/bt9/HomePage"));
const CustomLink_1 = __importDefault(require("./components/bt9/CustomLink"));
function App() {
    return (<div>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path='/' element={<Home_1.default />}/>
        <react_router_dom_1.Route path='/contact' element={<Contact_1.default />}/>
        <react_router_dom_1.Route path='/login' element={<Bt3_1.default />}/>
        <react_router_dom_1.Route path='/register' element={<Bt4_1.default />}/>
        <react_router_dom_1.Route path='*' element={<Bt5_1.default />}/>
        <react_router_dom_1.Route path='/Bt6' element={<Bt6_1.default />}>
          <react_router_dom_1.Route path='contact1' element={<Contact1_1.default />}/>
          <react_router_dom_1.Route path='home1' element={<Home1_1.default />}/>
        </react_router_dom_1.Route>
        <react_router_dom_1.Route path='/Bt8' element={<Bt8_1.default />}>
          <react_router_dom_1.Route path='admin' element={<Admin_1.default />}/>
          <react_router_dom_1.Route path='account' element={<Account_1.default />}/>
          <react_router_dom_1.Route path='product' element={<Product_1.default />}/>
        </react_router_dom_1.Route>
        <react_router_dom_1.Route path='/Bt10' element={<Bt10_1.default />}/>
        <react_router_dom_1.Route path='/Bt10/renderUser' element={<RenderUser_1.default />}/>
        <react_router_dom_1.Route path="/home-page" element={<HomePage_1.default></HomePage_1.default>}/>
        <react_router_dom_1.Route path="/not-found" element={<Bt5_1.default></Bt5_1.default>}/>
        <react_router_dom_1.Route path="/customlink" element={<CustomLink_1.default></CustomLink_1.default>}></react_router_dom_1.Route>
      </react_router_dom_1.Routes>
    </div>);
}
exports.default = App;
